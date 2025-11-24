/**
 * ================================================
 * STUDENT DASHBOARD - SOCKET.IO CLIENT
 * ================================================
 * Singleton Socket.io client for real-time communication
 */

import { io, Socket } from 'socket.io-client';
import type {
  ServerToClientEvents,
  ClientToServerEvents,
} from '@/types';

type TypedSocket = Socket<ServerToClientEvents, ClientToServerEvents>;

class SocketService {
  private socket: TypedSocket | null = null;
  private userId: string | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 2000;

  /**
   * Initialize and connect to Socket.io server
   */
  connect(userId: string, userType: 'student' | 'admin' = 'student'): void {
    if (this.socket?.connected) {
      console.log('Socket already connected');
      return;
    }

    this.userId = userId;

    const socketUrl = import.meta.env.VITE_SOCKET_URL || 'http://localhost:4000';

    this.socket = io(socketUrl, {
      auth: {
        userId,
        userType,
      },
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionAttempts: this.maxReconnectAttempts,
      reconnectionDelay: this.reconnectDelay,
      timeout: 10000,
    }) as TypedSocket;

    this.setupEventListeners();
  }

  /**
   * Setup default event listeners
   */
  private setupEventListeners(): void {
    if (!this.socket) return;

    this.socket.on('connect', () => {
      console.log('✅ Socket connected:', this.socket?.id);
      this.reconnectAttempts = 0;

      // Join user's personal room
      if (this.userId) {
        this.emit('join', this.userId);
      }
    });

    this.socket.on('disconnect', reason => {
      console.log('❌ Socket disconnected:', reason);
    });

    this.socket.on('reconnect', attemptNumber => {
      console.log('🔄 Socket reconnected after', attemptNumber, 'attempts');
      this.reconnectAttempts = 0;
    });

    this.socket.on('reconnect_attempt', attemptNumber => {
      console.log('🔄 Reconnection attempt', attemptNumber);
      this.reconnectAttempts = attemptNumber;
    });

    this.socket.on('reconnect_error', error => {
      console.error('❌ Reconnection error:', error);
    });

    this.socket.on('reconnect_failed', () => {
      console.error('❌ Reconnection failed after max attempts');
    });

    this.socket.on('error', error => {
      console.error('❌ Socket error:', error);
    });
  }

  /**
   * Disconnect from Socket.io server
   */
  disconnect(): void {
    if (this.socket) {
      if (this.userId) {
        this.emit('leave', this.userId);
      }
      this.socket.disconnect();
      this.socket = null;
      this.userId = null;
      console.log('Socket disconnected');
    }
  }

  /**
   * Check if socket is connected
   */
  isConnected(): boolean {
    return this.socket?.connected || false;
  }

  /**
   * Get raw socket instance
   */
  getSocket(): TypedSocket | null {
    return this.socket;
  }

  /**
   * Emit an event to the server
   */
  emit<K extends keyof ClientToServerEvents>(
    event: K,
    ...args: Parameters<ClientToServerEvents[K]>
  ): void {
    if (this.socket?.connected) {
      // @ts-ignore - Socket.io types are complex
      this.socket.emit(event, ...args);
    } else {
      console.warn(`Cannot emit "${event}" - socket not connected`);
    }
  }

  /**
   * Listen to an event from the server
   */
  on<K extends keyof ServerToClientEvents>(
    event: K,
    callback: ServerToClientEvents[K]
  ): void {
    if (this.socket) {
      // @ts-ignore - Socket.io types are complex
      this.socket.on(event, callback);
    }
  }

  /**
   * Remove event listener
   */
  off<K extends keyof ServerToClientEvents>(
    event: K,
    callback?: ServerToClientEvents[K]
  ): void {
    if (this.socket) {
      // @ts-ignore - Socket.io types are complex
      this.socket.off(event, callback);
    }
  }

  /**
   * Listen to an event once
   */
  once<K extends keyof ServerToClientEvents>(
    event: K,
    callback: ServerToClientEvents[K]
  ): void {
    if (this.socket) {
      // @ts-ignore - Socket.io types are complex
      this.socket.once(event, callback);
    }
  }

  // ============================================
  // MESSAGING METHODS
  // ============================================

  /**
   * Join a conversation room
   */
  joinConversation(conversationId: string): void {
    this.emit('join-conversation', conversationId);
  }

  /**
   * Leave a conversation room
   */
  leaveConversation(conversationId: string): void {
    this.emit('leave-conversation', conversationId);
  }

  /**
   * Send typing indicator
   */
  sendTyping(conversationId: string, userId: string, userName: string): void {
    this.emit('typing', { conversationId, userId, userName });
  }

  /**
   * Stop typing indicator
   */
  stopTyping(conversationId: string, userId: string): void {
    this.emit('stop-typing', { conversationId, userId });
  }

  /**
   * Mark message as read
   */
  markMessageAsRead(messageId: string): void {
    this.emit('mark-message-read', messageId);
  }

  // ============================================
  // NOTIFICATION METHODS
  // ============================================

  /**
   * Mark notification as read
   */
  markNotificationAsRead(notificationId: string): void {
    this.emit('mark-notification-read', notificationId);
  }

  /**
   * Get unread notification count
   */
  getUnreadCount(): void {
    this.emit('get-unread-count' as any);
  }

  // ============================================
  // APPOINTMENT METHODS
  // ============================================

  /**
   * Get upcoming appointments
   */
  getUpcomingAppointments(): void {
    this.emit('get-upcoming-appointments' as any);
  }

  /**
   * Join appointment room
   */
  joinAppointment(appointmentId: string): void {
    this.emit('join-appointment' as any, appointmentId);
  }

  /**
   * Leave appointment room
   */
  leaveAppointment(appointmentId: string): void {
    this.emit('leave-appointment' as any, appointmentId);
  }

  // ============================================
  // STATUS METHODS
  // ============================================

  /**
   * Update user status
   */
  updateStatus(status: 'online' | 'away' | 'busy'): void {
    this.emit('status-update', status);
  }
}

// Export singleton instance
export const socketService = new SocketService();
export default socketService;

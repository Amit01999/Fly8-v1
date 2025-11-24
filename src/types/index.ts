/**
 * ==========================================
 * CLIENT TYPES - Comprehensive Type Definitions
 * ==========================================
 */

// ============= Common Types =============
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasMore: boolean;
}

export interface User {
  _id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  image?: string;
  role: 'student' | 'admin';
}

// ============= Message Types =============
export type MessageStatus = 'sent' | 'delivered' | 'read';
export type MessageSenderModel = 'Student' | 'Admin';

export interface Message {
  _id: string;
  conversationId: string;
  sender: string;
  senderModel: MessageSenderModel;
  content: string;
  attachments?: string[];
  status: MessageStatus;
  readAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PopulatedMessage extends Omit<Message, 'sender'> {
  sender: {
    _id: string;
    firstName?: string;
    lastName?: string;
    email: string;
    image?: string;
  };
}

export interface Conversation {
  conversationId: string;
  student: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    image?: string;
  };
  admin?: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    image?: string;
  };
  lastMessage?: Message;
  unreadCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface SendMessageRequest {
  recipientId?: string;
  content: string;
  attachments?: string[];
}

export interface MessageStats {
  totalConversations: number;
  unreadCount: number;
  todayCount: number;
  responseRate?: number;
}

// ============= Notification Types =============
export type NotificationType = 'info' | 'success' | 'warning' | 'error';
export type NotificationPriority = 'low' | 'medium' | 'high' | 'urgent';
export type NotificationStatus = 'unread' | 'read' | 'archived';

export interface Notification {
  _id: string;
  recipient: string;
  recipientModel: 'Student' | 'Admin';
  sender?: string;
  senderModel?: 'Admin' | 'System';
  title: string;
  message: string;
  type: NotificationType;
  priority: NotificationPriority;
  status: NotificationStatus;
  actionUrl?: string;
  actionLabel?: string;
  metadata?: Record<string, any>;
  expiresAt?: string;
  readAt?: string;
  archivedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SendNotificationRequest {
  title: string;
  message: string;
  type: NotificationType;
  priority: NotificationPriority;
  actionUrl?: string;
  actionLabel?: string;
  metadata?: Record<string, any>;
  expiresAt?: string;
}

export interface NotificationStats {
  total: number;
  unread: number;
  read: number;
  archived: number;
  todayCount: number;
  byType: {
    info: number;
    success: number;
    warning: number;
    error: number;
  };
  byPriority: {
    low: number;
    medium: number;
    high: number;
    urgent: number;
  };
}

// ============= Appointment Types =============
export type AppointmentType = 'consultation' | 'follow-up' | 'document-review' | 'guidance' | 'other';
export type AppointmentStatus = 'pending' | 'confirmed' | 'rejected' | 'cancelled' | 'completed';

export interface Appointment {
  _id: string;
  student: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    image?: string;
  };
  admin?: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    image?: string;
  };
  type: AppointmentType;
  purpose: string;
  preferredDate: string;
  preferredTime: string;
  status: AppointmentStatus;
  meetingLink?: string;
  adminNotes?: string;
  rejectionReason?: string;
  completedAt?: string;
  cancelledAt?: string;
  cancelledBy?: 'student' | 'admin';
  cancellationReason?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAppointmentRequest {
  type: AppointmentType;
  purpose: string;
  preferredDate: string;
  preferredTime: string;
}

export interface UpdateAppointmentStatusRequest {
  status: AppointmentStatus;
  meetingLink?: string;
  adminNotes?: string;
  rejectionReason?: string;
}

export interface AppointmentStats {
  total: number;
  pending: number;
  confirmed: number;
  rejected: number;
  cancelled: number;
  completed: number;
  todayCount: number;
  upcomingCount: number;
}

export interface AvailableSlot {
  date: string;
  time: string;
  available: boolean;
}

// ============= Socket Types =============
export interface TypingUser {
  userId: string;
  userName: string;
}

export interface ServerToClientEvents {
  // Messages
  'new-message': (data: { message: PopulatedMessage }) => void;
  'message-read': (data: { messageId: string; conversationId: string }) => void;
  'message-delivered': (data: { messageId: string; conversationId: string }) => void;
  'typing': (data: TypingUser & { conversationId: string }) => void;
  'stop-typing': (data: { userId: string; conversationId: string }) => void;

  // Notifications
  'new-notification': (data: { notification: Notification }) => void;
  'notification-read': (data: { notificationId: string }) => void;

  // Appointments
  'new-appointment': (data: { appointment: Appointment }) => void;
  'appointment-updated': (data: { appointment: Appointment }) => void;
  'appointment-cancelled': (data: { appointmentId: string; reason?: string }) => void;

  // Connection
  'connect': () => void;
  'disconnect': () => void;
}

export interface ClientToServerEvents {
  // Messages
  'join-conversation': (conversationId: string) => void;
  'leave-conversation': (conversationId: string) => void;
  'send-typing': (data: { conversationId: string; userId: string; userName: string }) => void;
  'stop-typing': (data: { conversationId: string; userId: string }) => void;

  // Appointments
  'join-appointment': (appointmentId: string) => void;
  'leave-appointment': (appointmentId: string) => void;
}

// ============= Query Keys =============
export const QUERY_KEYS = {
  // Messages
  conversations: ['conversations'] as const,
  conversation: (id: string) => ['conversation', id] as const,
  messages: (conversationId: string) => ['messages', conversationId] as const,
  messageStats: ['message-stats'] as const,

  // Notifications
  notifications: (filters?: any) => ['notifications', filters] as const,
  notificationStats: ['notification-stats'] as const,

  // Appointments
  appointments: (filters?: any) => ['appointments', filters] as const,
  appointment: (id: string) => ['appointment', id] as const,
  appointmentStats: ['appointment-stats'] as const,
  todayAppointments: ['today-appointments'] as const,
  availableSlots: (date: string) => ['available-slots', date] as const,

  // Students
  students: (filters?: any) => ['students', filters] as const,
  student: (id: string) => ['student', id] as const,
} as const;

// ============= WebSocket Events =============
export const WS_EVENTS = {
  // Connection
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  JOIN: 'join',
  LEAVE: 'leave',

  // Messages
  NEW_MESSAGE: 'new-message',
  MESSAGE_READ: 'message-read',
  MESSAGE_DELIVERED: 'message-delivered',
  TYPING: 'typing',
  STOP_TYPING: 'stop-typing',

  // Notifications
  NEW_NOTIFICATION: 'new-notification',
  NOTIFICATION_READ: 'notification-read',

  // Appointments
  NEW_APPOINTMENT: 'new-appointment',
  APPOINTMENT_UPDATED: 'appointment-updated',
  APPOINTMENT_CANCELLED: 'appointment-cancelled',
} as const;

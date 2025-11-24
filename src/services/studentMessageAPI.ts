/**
 * ================================================
 * STUDENT MESSAGE API SERVICE
 * ================================================
 * API client for messaging functionality
 */

import axios from 'axios';
import type {
  Conversation,
  GetConversationsResponse,
  GetMessagesResponse,
  SendMessageRequest,
  SendMessageResponse,
  MarkAsReadResponse,
  GetMessageStatsResponse,
  PopulatedMessage,
} from '@/types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
const BASE_PATH = '/api/v1/student/messages';

// Create axios instance with auth
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('studentToken') || localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/**
 * Get all conversations for the student
 */
export const getConversations = async (): Promise<Conversation[]> => {
  const response = await apiClient.get<GetConversationsResponse>(
    `${BASE_PATH}/conversations`
  );
  return response.data.conversations;
};

/**
 * Get messages for a specific conversation
 */
export const getConversationMessages = async (
  conversationId: string,
  page: number = 1,
  limit: number = 50
): Promise<GetMessagesResponse> => {
  const response = await apiClient.get<GetMessagesResponse>(
    `${BASE_PATH}/conversation/${conversationId}`,
    {
      params: { page, limit },
    }
  );
  return response.data;
};

/**
 * Send a message to admin
 */
export const sendMessage = async (
  data: SendMessageRequest
): Promise<PopulatedMessage> => {
  const response = await apiClient.post<SendMessageResponse>(
    `${BASE_PATH}/send`,
    data
  );
  return response.data.message;
};

/**
 * Mark a message as read
 */
export const markMessageAsRead = async (
  messageId: string
): Promise<PopulatedMessage> => {
  const response = await apiClient.put<MarkAsReadResponse>(
    `${BASE_PATH}/${messageId}/read`
  );
  return response.data.message;
};

/**
 * Delete a message
 */
export const deleteMessage = async (messageId: string): Promise<void> => {
  await apiClient.delete(`${BASE_PATH}/${messageId}`);
};

/**
 * Get message statistics
 */
export const getMessageStats = async () => {
  const response = await apiClient.get<GetMessageStatsResponse>(
    `${BASE_PATH}/stats`
  );
  return response.data.stats;
};

export default {
  getConversations,
  getConversationMessages,
  sendMessage,
  markMessageAsRead,
  deleteMessage,
  getMessageStats,
};

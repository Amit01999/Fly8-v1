/**
 * ================================================
 * STUDENT NOTIFICATION API SERVICE
 * ================================================
 * API client for notification functionality
 */

import axios from 'axios';
import type {
  PopulatedNotification,
  GetNotificationsRequest,
  GetNotificationsResponse,
  GetNotificationStatsResponse,
  MarkNotificationAsReadResponse,
  MarkAllNotificationsAsReadResponse,
  DeleteNotificationResponse,
} from '@/types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
const BASE_PATH = '/api/v1/student/notifications';

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
 * Get all notifications for the student
 */
export const getNotifications = async (
  filters?: GetNotificationsRequest
): Promise<GetNotificationsResponse> => {
  const response = await apiClient.get<GetNotificationsResponse>(BASE_PATH, {
    params: filters,
  });
  return response.data;
};

/**
 * Get notification by ID
 */
export const getNotificationById = async (
  id: string
): Promise<PopulatedNotification> => {
  const response = await apiClient.get<{ success: boolean; notification: PopulatedNotification }>(
    `${BASE_PATH}/${id}`
  );
  return response.data.notification;
};

/**
 * Mark notification as read
 */
export const markNotificationAsRead = async (
  id: string
): Promise<PopulatedNotification> => {
  const response = await apiClient.put<MarkNotificationAsReadResponse>(
    `${BASE_PATH}/${id}/read`
  );
  return response.data.notification;
};

/**
 * Mark all notifications as read
 */
export const markAllNotificationsAsRead = async (): Promise<number> => {
  const response = await apiClient.put<MarkAllNotificationsAsReadResponse>(
    `${BASE_PATH}/read-all`
  );
  return response.data.count;
};

/**
 * Archive notification
 */
export const archiveNotification = async (
  id: string
): Promise<PopulatedNotification> => {
  const response = await apiClient.put<{ success: boolean; notification: PopulatedNotification }>(
    `${BASE_PATH}/${id}/archive`
  );
  return response.data.notification;
};

/**
 * Delete notification
 */
export const deleteNotification = async (id: string): Promise<void> => {
  await apiClient.delete<DeleteNotificationResponse>(`${BASE_PATH}/${id}`);
};

/**
 * Get notification statistics
 */
export const getNotificationStats = async () => {
  const response = await apiClient.get<GetNotificationStatsResponse>(
    `${BASE_PATH}/stats`
  );
  return response.data.stats;
};

export default {
  getNotifications,
  getNotificationById,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  archiveNotification,
  deleteNotification,
  getNotificationStats,
};

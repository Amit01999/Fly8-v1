/**
 * ================================================
 * STUDENT NOTIFICATIONS - REACT QUERY HOOKS
 * ================================================
 * Custom hooks for notification functionality with React Query
 */

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import * as notificationAPI from '../services/studentNotificationAPI';
import { socketService } from '../services/socket';
import type {
  GetNotificationsRequest,
  PopulatedNotification,
} from '@/types';
import { QUERY_KEYS } from '@/types';

/**
 * Hook to get all notifications
 */
export const useNotifications = (filters?: GetNotificationsRequest) => {
  return useQuery({
    queryKey: QUERY_KEYS.notifications(filters),
    queryFn: () => notificationAPI.getNotifications(filters),
    staleTime: 30000, // 30 seconds
    refetchOnWindowFocus: true,
  });
};

/**
 * Hook to get notification by ID
 */
export const useNotification = (id: string) => {
  return useQuery({
    queryKey: ['notification', id],
    queryFn: () => notificationAPI.getNotificationById(id),
    enabled: !!id,
  });
};

/**
 * Hook to mark notification as read
 */
export const useMarkNotificationAsRead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => notificationAPI.markNotificationAsRead(id),
    onSuccess: (updatedNotification) => {
      // Update notification in cache
      queryClient.setQueryData(
        ['notification', updatedNotification._id],
        updatedNotification
      );

      // Invalidate notifications list
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.notifications() });

      // Invalidate stats
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.notificationStats });
    },
  });
};

/**
 * Hook to mark all notifications as read
 */
export const useMarkAllNotificationsAsRead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => notificationAPI.markAllNotificationsAsRead(),
    onSuccess: () => {
      // Invalidate all notification queries
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.notifications() });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.notificationStats });
    },
  });
};

/**
 * Hook to archive notification
 */
export const useArchiveNotification = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => notificationAPI.archiveNotification(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.notifications() });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.notificationStats });
    },
  });
};

/**
 * Hook to delete notification
 */
export const useDeleteNotification = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => notificationAPI.deleteNotification(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.notifications() });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.notificationStats });
    },
  });
};

/**
 * Hook to get notification statistics
 */
export const useNotificationStats = () => {
  return useQuery({
    queryKey: QUERY_KEYS.notificationStats,
    queryFn: notificationAPI.getNotificationStats,
    staleTime: 60000, // 1 minute
    refetchInterval: 60000, // Auto-refetch every minute
  });
};

/**
 * Hook to listen to real-time notification events
 */
export const useNotificationRealtime = () => {
  const queryClient = useQueryClient();
  const [latestNotification, setLatestNotification] =
    useState<PopulatedNotification | null>(null);

  useEffect(() => {
    if (!socketService.isConnected()) return;

    // Listen for new notifications
    const handleNewNotification = ({ notification }: any) => {
      setLatestNotification(notification);

      // Invalidate queries to refetch data
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.notifications() });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.notificationStats });

      // Show browser notification if permitted
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(notification.title, {
          body: notification.message,
          icon: '/logo.png',
        });
      }
    };

    // Listen for notification read events
    const handleNotificationRead = ({ notificationId }: any) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.notifications() });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.notificationStats });
    };

    // Listen for broadcast notifications
    const handleBroadcastNotification = ({ notification }: any) => {
      setLatestNotification(notification);
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.notifications() });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.notificationStats });
    };

    socketService.on('new-notification', handleNewNotification);
    socketService.on('notification-read', handleNotificationRead);
    socketService.on('broadcast-notification', handleBroadcastNotification);

    return () => {
      socketService.off('new-notification', handleNewNotification);
      socketService.off('notification-read', handleNotificationRead);
      socketService.off('broadcast-notification', handleBroadcastNotification);
    };
  }, [queryClient]);

  return { latestNotification };
};

/**
 * Hook to request browser notification permission
 */
export const useNotificationPermission = () => {
  const [permission, setPermission] = useState<NotificationPermission>(
    'Notification' in window ? Notification.permission : 'denied'
  );

  const requestPermission = async () => {
    if ('Notification' in window) {
      const result = await Notification.requestPermission();
      setPermission(result);
      return result;
    }
    return 'denied';
  };

  return { permission, requestPermission };
};

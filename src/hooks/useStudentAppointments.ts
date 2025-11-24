/**
 * ================================================
 * STUDENT APPOINTMENTS - REACT QUERY HOOKS
 * ================================================
 * Custom hooks for appointment functionality with React Query
 */

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import * as appointmentAPI from '../services/studentAppointmentAPI';
import { socketService } from '../services/socket';
import type {
  GetAppointmentsRequest,
  CreateAppointmentRequest,
} from '../../../shared-types';
import { QUERY_KEYS } from '../../../shared-types';

/**
 * Hook to get all appointments
 */
export const useMyAppointments = (filters?: GetAppointmentsRequest) => {
  return useQuery({
    queryKey: QUERY_KEYS.appointments(filters),
    queryFn: () => appointmentAPI.getMyAppointments(filters),
    staleTime: 30000, // 30 seconds
    refetchOnWindowFocus: true,
  });
};

/**
 * Hook to get appointment by ID
 */
export const useAppointment = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.appointment(id),
    queryFn: () => appointmentAPI.getAppointmentById(id),
    enabled: !!id,
  });
};

/**
 * Hook to create an appointment
 */
export const useCreateAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateAppointmentRequest) =>
      appointmentAPI.createAppointment(data),
    onSuccess: () => {
      // Invalidate appointments list
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.appointments() });

      // Invalidate stats
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.appointmentStats });
    },
  });
};

/**
 * Hook to cancel an appointment
 */
export const useCancelAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, reason }: { id: string; reason?: string }) =>
      appointmentAPI.cancelAppointment(id, reason),
    onSuccess: () => {
      // Invalidate appointments
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.appointments() });

      // Invalidate stats
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.appointmentStats });
    },
  });
};

/**
 * Hook to get appointment statistics
 */
export const useAppointmentStats = () => {
  return useQuery({
    queryKey: QUERY_KEYS.appointmentStats,
    queryFn: appointmentAPI.getAppointmentStats,
    staleTime: 60000, // 1 minute
  });
};

/**
 * Hook to get available time slots
 */
export const useAvailableSlots = (date: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.availableSlots(date),
    queryFn: () => appointmentAPI.getAvailableSlots(date),
    enabled: !!date,
    staleTime: 300000, // 5 minutes
  });
};

/**
 * Hook to get today's appointments
 */
export const useTodayAppointments = () => {
  const today = new Date().toISOString().split('T')[0];

  return useQuery({
    queryKey: QUERY_KEYS.todayAppointments,
    queryFn: () =>
      appointmentAPI.getMyAppointments({
        startDate: today,
        endDate: today,
        status: 'confirmed',
      }),
    staleTime: 30000, // 30 seconds
    refetchInterval: 60000, // Refetch every minute
  });
};

/**
 * Hook to listen to real-time appointment events
 */
export const useAppointmentRealtime = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!socketService.isConnected()) return;

    // Listen for new appointments (admin created)
    const handleNewAppointment = ({ appointment }: any) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.appointments() });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.appointmentStats });
    };

    // Listen for appointment updates (status changes)
    const handleAppointmentUpdated = ({ appointment }: any) => {
      // Update specific appointment
      queryClient.setQueryData(
        QUERY_KEYS.appointment(appointment._id),
        appointment
      );

      // Invalidate list and stats
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.appointments() });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.appointmentStats });

      // Show notification for important status changes
      if (appointment.status === 'confirmed') {
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('Appointment Confirmed', {
            body: `Your appointment on ${appointment.date} at ${appointment.time} has been confirmed`,
            icon: '/logo.png',
          });
        }
      } else if (appointment.status === 'rejected') {
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('Appointment Rejected', {
            body: `Your appointment request has been rejected`,
            icon: '/logo.png',
          });
        }
      }
    };

    // Listen for appointment cancellations
    const handleAppointmentCancelled = ({ appointmentId }: any) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.appointments() });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.appointmentStats });
    };

    // Listen for appointment reminders
    const handleAppointmentReminder = ({ appointment, minutesUntilStart }: any) => {
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Appointment Reminder', {
          body: `Your appointment starts in ${minutesUntilStart} minutes`,
          icon: '/logo.png',
        });
      }
    };

    socketService.on('new-appointment', handleNewAppointment);
    socketService.on('appointment-updated', handleAppointmentUpdated);
    socketService.on('appointment-cancelled', handleAppointmentCancelled);
    socketService.on('appointment-reminder', handleAppointmentReminder);

    return () => {
      socketService.off('new-appointment', handleNewAppointment);
      socketService.off('appointment-updated', handleAppointmentUpdated);
      socketService.off('appointment-cancelled', handleAppointmentCancelled);
      socketService.off('appointment-reminder', handleAppointmentReminder);
    };
  }, [queryClient]);
};

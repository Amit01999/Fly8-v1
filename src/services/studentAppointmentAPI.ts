/**
 * ================================================
 * STUDENT APPOINTMENT API SERVICE
 * ================================================
 * API client for appointment functionality
 */

import axios from 'axios';
import type {
  PopulatedAppointment,
  GetAppointmentsRequest,
  GetAppointmentsResponse,
  CreateAppointmentRequest,
  CreateAppointmentResponse,
  CancelAppointmentRequest,
  CancelAppointmentResponse,
  GetAppointmentByIdResponse,
  GetAppointmentStatsResponse,
  GetAvailableSlotsRequest,
  GetAvailableSlotsResponse,
} from '@/types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
const BASE_PATH = '/api/v1/student/appointments';

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
 * Get all appointments for the student
 */
export const getMyAppointments = async (
  filters?: GetAppointmentsRequest
): Promise<GetAppointmentsResponse> => {
  const response = await apiClient.get<GetAppointmentsResponse>(BASE_PATH, {
    params: filters,
  });
  return response.data;
};

/**
 * Get appointment by ID
 */
export const getAppointmentById = async (
  id: string
): Promise<PopulatedAppointment> => {
  const response = await apiClient.get<GetAppointmentByIdResponse>(
    `${BASE_PATH}/${id}`
  );
  return response.data.appointment;
};

/**
 * Create a new appointment
 */
export const createAppointment = async (
  data: CreateAppointmentRequest
): Promise<CreateAppointmentResponse> => {
  const response = await apiClient.post<CreateAppointmentResponse>(
    BASE_PATH,
    data
  );
  return response.data;
};

/**
 * Cancel an appointment
 */
export const cancelAppointment = async (
  id: string,
  reason?: string
): Promise<CancelAppointmentResponse> => {
  const response = await apiClient.put<CancelAppointmentResponse>(
    `${BASE_PATH}/${id}/cancel`,
    { reason }
  );
  return response.data;
};

/**
 * Get appointment statistics
 */
export const getAppointmentStats = async () => {
  const response = await apiClient.get<GetAppointmentStatsResponse>(
    `${BASE_PATH}/stats`
  );
  return response.data.stats;
};

/**
 * Get available time slots for a date
 */
export const getAvailableSlots = async (
  date: string
): Promise<GetAvailableSlotsResponse> => {
  const response = await apiClient.get<GetAvailableSlotsResponse>(
    `${BASE_PATH}/available-slots`,
    {
      params: { date },
    }
  );
  return response.data;
};

export default {
  getMyAppointments,
  getAppointmentById,
  createAppointment,
  cancelAppointment,
  getAppointmentStats,
  getAvailableSlots,
};

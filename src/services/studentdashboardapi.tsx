import axios from 'axios';

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dateOfBirth?: string;
  nationality?: string;
  gender?: string;
  address?: string;
  city?: string;
  country: string;
  postalCode?: string;
}

export interface AcademicInfo {
  highestEducation: string;
  institutionName: string;
  fieldOfStudy: string;
  graduationYear: string;
  gpa: string;
  gradeSystem: string;
  englishProficiency: string;
  ieltsScore?: string;
  toeflScore?: string;
  greScore?: string;
  gmatScore?: string;
}

export interface StudyPreferences {
  preferredCountries: string[];
  preferredPrograms: string[];
  studyLevel: string;
  intakePreference: string[];
  budgetRange: string;
  accommodation: string;
}

export interface Document {
  id: string;
  type: string;
  fileName: string;
  url: string;
  uploadedAt: string;
}

export interface Profile {
  studentId: string;
  academicInfo: AcademicInfo;
  studyPreferences: StudyPreferences;
  documents: Document[];
  courses: { id: string; title: string; status: string; progress: number }[];
  notifications: {
    id: string;
    message: string;
    read: boolean;
    createdAt: string;
  }[];
  messages: {
    id: string;
    sender: string;
    content: string;
    createdAt: string;
  }[];
  appointments: { id: string; title: string; date: string; status: string }[];
  completionPercentage: number;
}

export const apiService = {
  getProfile: async (studentId: string): Promise<Profile> => {
    const response = await axios.get(`/api/profile/${studentId}`);
    return response.data;
  },

  addOrUpdateAcademicInfo: async (
    studentId: string,
    data: AcademicInfo
  ): Promise<void> => {
    await axios.put(`/api/profile/${studentId}/academic-info`, data);
  },

  addOrUpdateStudyPreferences: async (
    studentId: string,
    data: StudyPreferences
  ): Promise<void> => {
    await axios.put(`/api/profile/${studentId}/study-preferences`, data);
  },

  uploadDocument: async (
    studentId: string,
    file: File,
    type: string
  ): Promise<void> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);
    await axios.post(`/api/profile/${studentId}/documents`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },

  addCourse: async (
    studentId: string,
    title: string,
    status: string,
    progress: number
  ): Promise<void> => {
    await axios.post(`/api/profile/${studentId}/courses`, {
      title,
      status,
      progress,
    });
  },

  addNotification: async (
    studentId: string,
    message: string
  ): Promise<void> => {
    await axios.post(`/api/profile/${studentId}/notifications`, { message });
  },

  addMessage: async (
    studentId: string,
    sender: string,
    content: string
  ): Promise<void> => {
    await axios.post(`/api/profile/${studentId}/messages`, { sender, content });
  },

  addAppointment: async (
    studentId: string,
    title: string,
    date: string,
    status: string
  ): Promise<void> => {
    await axios.post(`/api/profile/${studentId}/appointments`, {
      title,
      date,
      status,
    });
  },
  updatePersonalInfo: async (
    studentId: string,
    data: PersonalInfo
  ): Promise<void> => {
    await axios.put(`/api/student/${studentId}/personal`, data);
  },
};

axios.defaults.baseURL = 'http://localhost:8080';

import { apiConnector } from '../apiconnector';
import { profileEndpoints, settingsEndpoints } from '../apis';
import toast from 'react-hot-toast';
import type { Dispatch } from 'redux';
import { setUser, setLoading } from '@/slices/profileSlice';
import type {
  StudentWithProfile,
  ProfileApiResponse,
  ChangeEmailData,
  ChangePasswordData,
} from '@/types/profile';

const {
  GET_STUDENT_PROFILE_API,
  UPDATE_STUDENT_PROFILE_API,
  UPLOAD_DOCUMENT_API,
  UPLOAD_PROFILE_IMAGE_API,
} = profileEndpoints;

const {
  CHANGE_EMAIL_API,
  CHANGE_PASSWORD_API,
  DEACTIVATE_ACCOUNT_API,
  DELETE_PROFILE_API,
  GET_ACCOUNT_INFO_API,
} = settingsEndpoints;

// Get student profile with populated additionalDetails
export function getStudentProfile() {
  return async (dispatch: Dispatch) => {
    const toastId = toast.loading('Loading profile...');
    dispatch(setLoading(true));
    try {
      const response = await apiConnector<ProfileApiResponse>(
        'GET',
        GET_STUDENT_PROFILE_API
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      dispatch(setUser(response.data.data.student));
      return response.data.data.student;
    } catch (error: any) {
      console.error('GET_STUDENT_PROFILE_API ERROR:', error);
      toast.error(error?.response?.data?.message || 'Failed to load profile');
      throw error;
    } finally {
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
  };
}

// Update student profile (both Student and Profile models)
export function updateStudentProfile(profileData: Partial<StudentWithProfile>) {
  return async (dispatch: Dispatch) => {
    const toastId = toast.loading('Updating profile...');
    dispatch(setLoading(true));
    try {
      const response = await apiConnector<ProfileApiResponse>(
        'PUT',
        UPDATE_STUDENT_PROFILE_API,
        profileData
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      dispatch(setUser(response.data.data.student));

      // Update localStorage
      localStorage.setItem('user', JSON.stringify(response.data.data.student));

      toast.success('Profile updated successfully');
      return response.data.data.student;
    } catch (error: any) {
      console.error('UPDATE_STUDENT_PROFILE_API ERROR:', error);
      toast.error(error?.response?.data?.message || 'Failed to update profile');
      throw error;
    } finally {
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
  };
}

// Upload document (transcripts, resume, etc.)
export function uploadDocument(file: File, documentType: string) {
  return async (dispatch: Dispatch) => {
    const toastId = toast.loading('Uploading document...');
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('documentType', documentType);

      const response = await apiConnector<ProfileApiResponse>(
        'POST',
        UPLOAD_DOCUMENT_API,
        formData
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      dispatch(setUser(response.data.data.student));

      // Update localStorage
      localStorage.setItem('user', JSON.stringify(response.data.data.student));

      toast.success(`${documentType} uploaded successfully`);
      return response.data.data.student;
    } catch (error: any) {
      console.error('UPLOAD_DOCUMENT_API ERROR:', error);
      toast.error(error?.response?.data?.message || 'Failed to upload document');
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };
}

// Upload profile image
export function uploadProfileImage(file: File) {
  return async (dispatch: Dispatch) => {
    const toastId = toast.loading('Uploading profile image...');
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await apiConnector<ProfileApiResponse>(
        'POST',
        UPLOAD_PROFILE_IMAGE_API,
        formData
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      dispatch(setUser(response.data.data.student));

      // Update localStorage
      localStorage.setItem('user', JSON.stringify(response.data.data.student));

      toast.success('Profile image updated successfully');
      return response.data.data.student;
    } catch (error: any) {
      console.error('UPLOAD_PROFILE_IMAGE_API ERROR:', error);
      toast.error(error?.response?.data?.message || 'Failed to upload image');
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };
}

// Get account information (last login, created date, etc.)
export async function getAccountInfo() {
  const toastId = toast.loading('Loading account info...');
  try {
    const response = await apiConnector<{
      success: boolean;
      message: string;
      data: {
        lastLogin: string;
        createdAt: string;
        active: boolean;
        approved: boolean;
      };
    }>('GET', GET_ACCOUNT_INFO_API);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    return response.data.data;
  } catch (error: any) {
    console.error('GET_ACCOUNT_INFO_API ERROR:', error);
    toast.error(error?.response?.data?.message || 'Failed to load account info');
    throw error;
  } finally {
    toast.dismiss(toastId);
  }
}

// Change email
export async function changeEmail(data: ChangeEmailData) {
  const toastId = toast.loading('Changing email...');
  try {
    const response = await apiConnector<ProfileApiResponse>(
      'PUT',
      CHANGE_EMAIL_API,
      data
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    // Update localStorage
    localStorage.setItem('user', JSON.stringify(response.data.data.student));

    toast.success('Email changed successfully. Please log in again.');

    // Logout after email change
    setTimeout(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/signin/student';
    }, 2000);

    return response.data.data.student;
  } catch (error: any) {
    console.error('CHANGE_EMAIL_API ERROR:', error);
    toast.error(error?.response?.data?.message || 'Failed to change email');
    throw error;
  } finally {
    toast.dismiss(toastId);
  }
}

// Change password
export async function changePassword(data: ChangePasswordData) {
  const toastId = toast.loading('Changing password...');
  try {
    const response = await apiConnector<{
      success: boolean;
      message: string;
    }>('PUT', CHANGE_PASSWORD_API, data);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success('Password changed successfully. Please log in again.');

    // Logout after password change
    setTimeout(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/signin/student';
    }, 2000);

    return response.data;
  } catch (error: any) {
    console.error('CHANGE_PASSWORD_API ERROR:', error);
    toast.error(error?.response?.data?.message || 'Failed to change password');
    throw error;
  } finally {
    toast.dismiss(toastId);
  }
}

// Deactivate account
export async function deactivateAccount() {
  const toastId = toast.loading('Deactivating account...');
  try {
    const response = await apiConnector<{
      success: boolean;
      message: string;
    }>('PUT', DEACTIVATE_ACCOUNT_API);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success('Account deactivated successfully');

    // Logout after deactivation
    setTimeout(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/signin/student';
    }, 2000);

    return response.data;
  } catch (error: any) {
    console.error('DEACTIVATE_ACCOUNT_API ERROR:', error);
    toast.error(error?.response?.data?.message || 'Failed to deactivate account');
    throw error;
  } finally {
    toast.dismiss(toastId);
  }
}

// Delete account
export async function deleteAccount() {
  const toastId = toast.loading('Deleting account...');
  try {
    const response = await apiConnector<{
      success: boolean;
      message: string;
    }>('DELETE', DELETE_PROFILE_API);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success('Account deleted successfully');

    // Logout after deletion
    setTimeout(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/';
    }, 2000);

    return response.data;
  } catch (error: any) {
    console.error('DELETE_PROFILE_API ERROR:', error);
    toast.error(error?.response?.data?.message || 'Failed to delete account');
    throw error;
  } finally {
    toast.dismiss(toastId);
  }
}

// Get profile completion percentage
export async function getProfileCompletion() {
  try {
    const response = await apiConnector<{
      success: boolean;
      message: string;
      data: {
        percentage: number;
        completedFields: string[];
        missingFields: string[];
        documentsUploaded: number;
        totalDocuments: number;
      };
    }>('GET', profileEndpoints.GET_PROFILE_COMPLETION_API);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    return response.data.data;
  } catch (error: any) {
    console.error('GET_PROFILE_COMPLETION_API ERROR:', error);
    return {
      percentage: 0,
      completedFields: [],
      missingFields: [],
      documentsUploaded: 0,
      totalDocuments: 6,
    };
  }
}

// Get uploaded documents
export async function getUploadedDocuments(): Promise<Array<{
  id: string;
  name: string;
  type: 'transcripts' | 'testScores' | 'sop' | 'recommendation' | 'resume' | 'passport';
  url: string;
  size: number;
  uploadedAt: string;
}>> {
  try {
    const response = await apiConnector<{
      success: boolean;
      message: string;
      data: {
        documents: Array<{
          id: string;
          name: string;
          type: 'transcripts' | 'testScores' | 'sop' | 'recommendation' | 'resume' | 'passport';
          url: string;
          size: number;
          uploadedAt: string;
        }>;
      };
    }>('GET', profileEndpoints.GET_DOCUMENTS_API);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    return response.data.data.documents;
  } catch (error: any) {
    console.error('GET_DOCUMENTS_API ERROR:', error);
    // Return empty array on error
    return [];
  }
}

// Delete document
export function deleteDocument(documentId: string) {
  return async (dispatch: Dispatch) => {
    const toastId = toast.loading('Deleting document...');
    try {
      const response = await apiConnector<ProfileApiResponse>(
        'DELETE',
        `${profileEndpoints.DELETE_DOCUMENT_API}/${documentId}`
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      dispatch(setUser(response.data.data.student));

      // Update localStorage
      localStorage.setItem('user', JSON.stringify(response.data.data.student));

      toast.success('Document deleted successfully');
      return response.data.data.student;
    } catch (error: any) {
      console.error('DELETE_DOCUMENT_API ERROR:', error);
      toast.error(error?.response?.data?.message || 'Failed to delete document');
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };
}

// Get personalized feedback (mock implementation)
export async function getProfileFeedback() {
  try {
    // Try to fetch from actual API first
    const response = await apiConnector<{
      success: boolean;
      message: string;
      data: {
        overallScore: number;
        strength: 'strong' | 'moderate' | 'needs-work';
        items: Array<{
          id: string;
          type: 'good' | 'needs-improvement' | 'action-required';
          category: string;
          title: string;
          message: string;
        }>;
        nextSteps: string[];
        advisorMessage?: string;
      };
    }>('GET', profileEndpoints.GET_FEEDBACK_API);

    if (response.data.success) {
      return response.data.data;
    }
  } catch (error) {
    console.log('Feedback API not available, using mock data');
  }

  // Mock feedback data if API is not available
  return {
    overallScore: 85,
    strength: 'strong' as const,
    items: [
      {
        id: '1',
        type: 'good' as const,
        category: 'Academic Profile',
        title: 'Strong Academic Background',
        message:
          'Your GPA and test scores are competitive for top universities. Keep up the excellent work!',
      },
      {
        id: '2',
        type: 'good' as const,
        category: 'Study Preferences',
        title: 'Well-Defined Goals',
        message:
          'You have clearly identified your preferred countries and degree level, which will help us provide targeted recommendations.',
      },
      {
        id: '3',
        type: 'needs-improvement' as const,
        category: 'Documents',
        title: 'Missing English Proficiency Test Score',
        message:
          'Consider adding your IELTS or TOEFL score to strengthen your application. Most universities require proof of English proficiency.',
      },
      {
        id: '4',
        type: 'action-required' as const,
        category: 'Documents',
        title: 'Statement of Purpose Required',
        message:
          'Upload your Statement of Purpose to help advisors better understand your motivations and career goals. This is crucial for university applications.',
      },
    ],
    nextSteps: [
      'Our advisors will contact you within 48 hours to discuss your profile and provide personalized university recommendations.',
      'You will receive a detailed list of universities and programs that match your academic background and career goals.',
      'We will guide you through the application process, including document preparation and deadline management.',
      'Get assistance with scholarship opportunities and financial planning for your studies abroad.',
    ],
    advisorMessage:
      'Congratulations on completing your profile assessment! Based on your strong academic background and clear career goals, you are well-positioned for admission to top universities. Our team is excited to work with you on this journey.',
  };
}

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
        formData,
        {
          'Content-Type': 'multipart/form-data',
        }
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
        formData,
        {
          'Content-Type': 'multipart/form-data',
        }
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

import { toast } from 'react-hot-toast';
import { apiConnector } from '../apiconnector';
import { profileEndpoints } from '../apis';

const { PROFILE_ASSESSMENT_API } = profileEndpoints;

export const submitAssessment = async (formData: any) => {
  const toastId = toast.loading('Submitting...');
  let result = null;

  try {
    console.log('Submitting form function data:', formData);
    const response = await apiConnector(
      'POST',
      PROFILE_ASSESSMENT_API,
      formData
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data;
    toast.success('Assessment submitted successfully!');
  } catch (error) {
    console.error('ASSESSMENT SUBMIT API ERROR............', error);
    toast.error(error.response?.data?.message || 'Failed to submit form');
    result = error.response?.data || { success: false };
  } finally {
    toast.dismiss(toastId);
  }
  return result;
};

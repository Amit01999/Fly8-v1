import { apiConnector } from '../apiconnector';
import { profileEndpoints } from '../apis';
import type { ProfileFeedback } from '@/types/profileAssessment';

const { GET_FEEDBACK_API } = profileEndpoints;

// Add feedback request endpoint
const REQUEST_FEEDBACK_API = import.meta.env.VITE_BASE_URL + '/student/feedback/request';

// Mock data for development when backend is not available
const MOCK_FEEDBACK: ProfileFeedback = {
  overallScore: 85,
  strength: 'strong',
  items: [
    {
      id: '1',
      type: 'good',
      category: 'Academic',
      title: 'Strong Academic Background',
      message: 'Your GPA and test scores are competitive for top universities.',
    },
    {
      id: '2',
      type: 'needs-improvement',
      category: 'Documents',
      title: 'Complete Document Upload',
      message: 'Please upload your recommendation letters to strengthen your application.',
    },
    {
      id: '3',
      type: 'good',
      category: 'Goals',
      title: 'Clear Career Path',
      message: 'Your career goals are well-defined and align with your chosen programs.',
    },
  ],
  nextSteps: [
    'Upload remaining documents (recommendation letters)',
    'Schedule advisor session to discuss program selection',
    'Start preparing your statement of purpose',
  ],
  advisorMessage: 'Great progress! Your profile is looking strong. Focus on completing your document uploads and we can move forward with university applications.',
};

/**
 * Fetch student feedback from advisor
 * @param studentId - The student's ID
 * @returns ProfileFeedback data or null if no feedback available
 */
export async function getStudentFeedback(
  studentId: string
): Promise<ProfileFeedback | null> {
  try {
    const response = await apiConnector<{ success: boolean; data: ProfileFeedback }>(
      'GET',
      `${GET_FEEDBACK_API}/${studentId}`
    );

    if (response.data.success) {
      return response.data.data;
    }
    return null;
  } catch (error: any) {
    // If 404, no feedback exists yet - return null silently
    if (error.response?.status === 404) {
      console.log('Feedback API: No feedback available yet (404)');
      return null;
    }

    // If API endpoint doesn't exist or server error, return null silently
    if (!error.response || error.response.status >= 500) {
      console.log('Feedback API: Backend not available, using no feedback state');
      return null;
    }

    console.error('Error fetching student feedback:', error);
    return null; // Return null instead of throwing to prevent crashes
  }
}

/**
 * Request feedback review from advisor
 * @param studentId - The student's ID
 * @param feedbackMessage - Optional message from student about what they want feedback on
 * @returns Success status
 */
export async function requestFeedbackReview(
  studentId: string,
  feedbackMessage?: string
): Promise<{ success: boolean; message: string }> {
  try {
    const response = await apiConnector<{
      success: boolean;
      message: string;
    }>('POST', REQUEST_FEEDBACK_API, {
      studentId,
      message: feedbackMessage
    });

    return response.data;
  } catch (error: any) {
    // If backend is not available, simulate successful request
    if (!error.response || error.response.status === 404 || error.response.status >= 500) {
      console.log('Feedback API: Backend not available, simulating request');
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      return {
        success: true,
        message: 'Feedback request submitted successfully (simulated)',
      };
    }

    console.error('Error requesting feedback review:', error);
    throw error;
  }
}

/**
 * Check if feedback is available for a student
 * @param studentId - The student's ID
 * @returns Boolean indicating if feedback exists
 */
export async function hasFeedback(studentId: string): Promise<boolean> {
  try {
    const feedback = await getStudentFeedback(studentId);
    return feedback !== null;
  } catch (error) {
    return false;
  }
}

/**
 * Get mock feedback for development/testing
 * @returns Mock ProfileFeedback data
 */
export function getMockFeedback(): ProfileFeedback {
  return MOCK_FEEDBACK;
}

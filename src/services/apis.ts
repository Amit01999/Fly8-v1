const BASE_URL = import.meta.env.VITE_BASE_URL;

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + '/auth/sendotp',
  SIGNUP_API: BASE_URL + '/auth/signup',
  LOGIN_API: BASE_URL + '/auth/login',
  RESETPASSTOKEN_API: BASE_URL + '/auth/reset-password-token',
  RESETPASSWORD_API: BASE_URL + '/auth/reset-password',
};

// PROFILE ENDPOINTS
export const profileEndpoints = {
  PROFILE_ASSESSMENT_API: BASE_URL + '/profile/assessment',
  GET_STUDENT_PROFILE_API: BASE_URL + '/student/profile',
  UPDATE_STUDENT_PROFILE_API: BASE_URL + '/student/profile',
  UPLOAD_DOCUMENT_API: BASE_URL + '/student/upload-document',
  UPLOAD_PROFILE_IMAGE_API: BASE_URL + '/student/upload-image',
  GET_PROFILE_COMPLETION_API: BASE_URL + '/profile/profile-completion',
  GET_DOCUMENTS_API: BASE_URL + '/student/documents',
  DELETE_DOCUMENT_API: BASE_URL + '/student/documents/delete',
  GET_FEEDBACK_API: BASE_URL + '/student/feedback',
};

// STUDENTS ENDPOINTS
export const studentEndpoints = {
  COURSE_PAYMENT_API: BASE_URL + '/payment/capturePayment',
  COURSE_VERIFY_API: BASE_URL + '/payment/verifyPayment',
  SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + '/payment/sendPaymentSuccessEmail',
};

// COUNTRTY ENDPOINTS
export const countryEndpoints = {
  COUNTRY_DETAILS_API: BASE_URL + '/country/getCountryDetails',
};

// RATINGS AND REVIEWS
export const ratingsEndpoints = {
  REVIEWS_DETAILS_API: BASE_URL + '/course/getReviews',
};

// CATAGORIES API
export const categories = {
  CATEGORIES_API: BASE_URL + '/course/showAllCategories',
};

// CATALOG PAGE DATA
export const catalogData = {
  CATALOGPAGEDATA_API: BASE_URL + '/course/getCategoryPageDetails',
};
// CONTACT-US API
export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + '/reach/contact',
};

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + '/profile/updateDisplayPicture',
  UPDATE_PROFILE_API: BASE_URL + '/profile/updateProfile',
  CHANGE_PASSWORD_API: BASE_URL + '/auth/changepassword',
  CHANGE_EMAIL_API: BASE_URL + '/student/change-email',
  DELETE_PROFILE_API: BASE_URL + '/profile/deleteProfile',
  DEACTIVATE_ACCOUNT_API: BASE_URL + '/student/deactivate',
  GET_ACCOUNT_INFO_API: BASE_URL + '/student/account-info',
};

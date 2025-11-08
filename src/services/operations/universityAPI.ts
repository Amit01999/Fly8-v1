import { toast } from 'react-hot-toast';
import { apiConnector } from '../apiconnector';
import { universityEndpoints } from '../apis';

const {
  GET_ALL_UNIVERSITIES_API,
  GET_UNIVERSITY_BY_ID_API,
  GET_UNIVERSITY_BY_CODE_API,
  GET_UNIVERSITIES_BY_COUNTRY_API,
  GET_UNIVERSITY_STATS_API,
} = universityEndpoints;

// Fetch all universities with optional filters and pagination
export const fetchAllUniversities = async (params?: {
  country?: string;
  search?: string;
  page?: number;
  limit?: number;
}) => {
  let result = null;
  try {
    const response = await apiConnector(
      'GET',
      GET_ALL_UNIVERSITIES_API,
      undefined,
      undefined,
      params
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data;
  } catch (error: any) {
    console.error('FETCH_ALL_UNIVERSITIES_API ERROR:', error);
    result = error?.response?.data || { success: false, message: 'Failed to fetch universities' };
  }
  return result;
};

// Fetch single university by ID
export const fetchUniversityById = async (id: string) => {
  let result = null;
  try {
    const response = await apiConnector(
      'GET',
      `${GET_UNIVERSITY_BY_ID_API}/${id}`,
      undefined,
      undefined
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data;
  } catch (error: any) {
    console.error('FETCH_UNIVERSITY_BY_ID_API ERROR:', error);
    result = error?.response?.data || { success: false, message: 'Failed to fetch university' };
  }
  return result;
};

// Fetch single university by code
export const fetchUniversityByCode = async (code: string) => {
  let result = null;
  try {
    const response = await apiConnector(
      'GET',
      `${GET_UNIVERSITY_BY_CODE_API}/${code}`,
      undefined,
      undefined
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data;
  } catch (error: any) {
    console.error('FETCH_UNIVERSITY_BY_CODE_API ERROR:', error);
    result = error?.response?.data || { success: false, message: 'Failed to fetch university' };
  }
  return result;
};

// Fetch universities by country
export const fetchUniversitiesByCountry = async (country: string) => {
  let result = null;
  try {
    // Encode the country name to handle spaces and special characters
    const encodedCountry = encodeURIComponent(country);

    console.log('Fetching universities for country:', country);
    console.log('Encoded country:', encodedCountry);

    const response = await apiConnector(
      'GET',
      `${GET_UNIVERSITIES_BY_COUNTRY_API}/${encodedCountry}`,
      undefined,
      undefined
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    console.log('Universities fetched successfully:', response.data.count || 0);
    result = response.data;
  } catch (error: any) {
    console.error('FETCH_UNIVERSITIES_BY_COUNTRY_API ERROR:', error);
    console.error('Error details:', error?.response?.data);
    result = error?.response?.data || { success: false, message: 'Failed to fetch universities' };
  }
  return result;
};

// Fetch university statistics
export const fetchUniversityStats = async () => {
  let result = null;
  try {
    const response = await apiConnector(
      'GET',
      GET_UNIVERSITY_STATS_API,
      undefined,
      undefined
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data;
  } catch (error: any) {
    console.error('FETCH_UNIVERSITY_STATS_API ERROR:', error);
    result = error?.response?.data || { success: false, message: 'Failed to fetch statistics' };
  }
  return result;
};

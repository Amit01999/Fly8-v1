import { toast } from 'react-hot-toast';
import { apiConnector } from '../apiconnector';
import { programEndpoints } from '../apis';

const {
  GET_ALL_PROGRAMS_API,
  GET_PROGRAM_BY_ID_API,
  GET_PROGRAMS_BY_COUNTRY_API,
  GET_PROGRAMS_BY_UNIVERSITY_API,
  GET_PROGRAMS_BY_LEVEL_API,
  GET_PROGRAM_STATS_API,
} = programEndpoints;

// Fetch all programs with optional filters and pagination
export const fetchAllPrograms = async (params?: {
  country?: string;
  universityName?: string;
  programLevel?: string;
  majors?: string;
  search?: string;
  page?: number;
  limit?: number;
}) => {
  let result = null;
  try {
    const response = await apiConnector(
      'GET',
      GET_ALL_PROGRAMS_API,
      undefined,
      undefined,
      params
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data;
  } catch (error: any) {
    console.error('FETCH_ALL_PROGRAMS_API ERROR:', error);
    result = error?.response?.data || { success: false, message: 'Failed to fetch programs' };
  }
  return result;
};

// Fetch single program by ID
export const fetchProgramById = async (id: string) => {
  let result = null;
  try {
    const response = await apiConnector(
      'GET',
      `${GET_PROGRAM_BY_ID_API}/${id}`,
      undefined,
      undefined
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data;
  } catch (error: any) {
    console.error('FETCH_PROGRAM_BY_ID_API ERROR:', error);
    result = error?.response?.data || { success: false, message: 'Failed to fetch program' };
  }
  return result;
};

// Fetch programs by country
export const fetchProgramsByCountry = async (country: string) => {
  let result = null;
  try {
    // Encode the country name to handle spaces and special characters
    const encodedCountry = encodeURIComponent(country);

    console.log('Fetching programs for country:', country);
    console.log('Encoded country:', encodedCountry);

    const response = await apiConnector(
      'GET',
      `${GET_PROGRAMS_BY_COUNTRY_API}/${encodedCountry}`,
      undefined,
      undefined
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    console.log('Programs fetched successfully:', response.data.count || 0);
    result = response.data;
  } catch (error: any) {
    console.error('FETCH_PROGRAMS_BY_COUNTRY_API ERROR:', error);
    console.error('Error details:', error?.response?.data);
    result = error?.response?.data || { success: false, message: 'Failed to fetch programs' };
  }
  return result;
};

// Fetch programs by university
export const fetchProgramsByUniversity = async (universityName: string) => {
  let result = null;
  try {
    // Encode the university name to handle spaces and special characters
    const encodedUniversity = encodeURIComponent(universityName);

    console.log('Fetching programs for university:', universityName);
    console.log('Encoded university:', encodedUniversity);

    const response = await apiConnector(
      'GET',
      `${GET_PROGRAMS_BY_UNIVERSITY_API}/${encodedUniversity}`,
      undefined,
      undefined
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    console.log('Programs fetched successfully:', response.data.count || 0);
    result = response.data;
  } catch (error: any) {
    console.error('FETCH_PROGRAMS_BY_UNIVERSITY_API ERROR:', error);
    console.error('Error details:', error?.response?.data);
    result = error?.response?.data || { success: false, message: 'Failed to fetch programs' };
  }
  return result;
};

// Fetch programs by level
export const fetchProgramsByLevel = async (level: string) => {
  let result = null;
  try {
    // Encode the level to handle spaces and special characters
    const encodedLevel = encodeURIComponent(level);

    console.log('Fetching programs for level:', level);
    console.log('Encoded level:', encodedLevel);

    const response = await apiConnector(
      'GET',
      `${GET_PROGRAMS_BY_LEVEL_API}/${encodedLevel}`,
      undefined,
      undefined
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    console.log('Programs fetched successfully:', response.data.count || 0);
    result = response.data;
  } catch (error: any) {
    console.error('FETCH_PROGRAMS_BY_LEVEL_API ERROR:', error);
    console.error('Error details:', error?.response?.data);
    result = error?.response?.data || { success: false, message: 'Failed to fetch programs' };
  }
  return result;
};

// Fetch program statistics
export const fetchProgramStats = async () => {
  let result = null;
  try {
    const response = await apiConnector(
      'GET',
      GET_PROGRAM_STATS_API,
      undefined,
      undefined
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data;
  } catch (error: any) {
    console.error('FETCH_PROGRAM_STATS_API ERROR:', error);
    result = error?.response?.data || { success: false, message: 'Failed to fetch statistics' };
  }
  return result;
};

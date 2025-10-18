// Type definitions for Student and Profile schemas

export interface Student {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  phone?: string;
  country?: string;
  referral?: string;
  active: boolean;
  approved: boolean;
  additionalDetails: string | Profile; // ObjectId or populated Profile
  token?: string;
  resetPasswordExpires?: number;
  image: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Profile {
  _id?: string;
  student?: string; // ObjectId reference
  age?: number;
  currentEducationLevel?: 'bachelor' | 'master' | 'phd' | 'diploma' | 'other';
  fieldOfStudy?: string;
  gpa?: string;
  graduationYear?: number;
  institution?: string;
  ielts?: string;
  toefl?: string;
  gre?: string;
  preferredCountries?: string[];
  preferredDegreeLevel?: 'bachelor' | 'master' | 'phd' | 'other';
  budget?: string;
  careerGoals?: string;
  industry?: 'tech' | 'finance' | 'healthcare' | 'education' | 'consulting' | 'other';
  workLocation?: 'home-country' | 'study-country' | 'global' | 'other';
  transcripts?: string;
  testScores?: string;
  sop?: string;
  recommendation?: string;
  resume?: string;
  passport?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface StudentWithProfile extends Omit<Student, 'additionalDetails'> {
  additionalDetails: Profile;
}

// Form data types
export interface PersonalInfoFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  referral: string;
}

export interface EducationInfoFormData {
  age: number;
  currentEducationLevel: 'bachelor' | 'master' | 'phd' | 'diploma' | 'other';
  fieldOfStudy: string;
  gpa: string;
  graduationYear: number;
  institution: string;
  ielts: string;
  toefl: string;
  gre: string;
}

export interface PreferencesFormData {
  preferredCountries: string[];
  preferredDegreeLevel: 'bachelor' | 'master' | 'phd' | 'other';
  budget: string;
  careerGoals: string;
  industry: 'tech' | 'finance' | 'healthcare' | 'education' | 'consulting' | 'other';
  workLocation: 'home-country' | 'study-country' | 'global' | 'other';
}

export interface DocumentsFormData {
  transcripts: File | null;
  testScores: File | null;
  sop: File | null;
  recommendation: File | null;
  resume: File | null;
  passport: File | null;
}

export interface ChangeEmailData {
  newEmail: string;
  password: string;
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

export interface ProfileApiResponse extends ApiResponse {
  data: {
    student: StudentWithProfile;
  };
}

// Country options for multi-select
export const COUNTRY_OPTIONS = [
  'USA',
  'UK',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Netherlands',
  'Sweden',
  'Switzerland',
  'Ireland',
  'New Zealand',
  'Singapore',
  'Japan',
  'South Korea',
  'Italy',
  'Spain',
  'Austria',
  'Denmark',
  'Norway',
  'Finland',
] as const;

export type CountryOption = typeof COUNTRY_OPTIONS[number];

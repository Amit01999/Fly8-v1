// Type definitions for Profile Assessment multi-step form

export interface PersonalInformationData {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  nationality: string;
}

export interface AcademicBackgroundData {
  currentEducationLevel: string;
  fieldOfStudy: string;
  gpa: string;
  graduationYear: string;
  institution: string;
  ielts: string;
  toefl: string;
  gre: string;
}

export interface StudyPreferencesData {
  preferredCountries: string[];
  preferredDegreeLevel: string;
  budget: string;
}

export interface CareerGoalsData {
  careerGoals: string;
  industry: string;
  workLocation: string;
}

export interface DocumentsData {
  transcripts: File | null;
  testScores: File | null;
  sop: File | null;
  recommendation: File | null;
  resume: File | null;
  passport: File | null;
}

export interface UploadedDocument {
  id: string;
  name: string;
  type: keyof DocumentsData;
  url: string;
  size: number;
  uploadedAt: string;
}

export interface ProfileAssessmentFormData {
  personalInfo: PersonalInformationData;
  academics: AcademicBackgroundData;
  preferences: StudyPreferencesData;
  goals: CareerGoalsData;
}

export interface ProfileCompletionData {
  percentage: number;
  completedFields: string[];
  missingFields: string[];
  documentsUploaded: number;
  totalDocuments: number;
}

export type FormStep =
  | 'personal'
  | 'academic'
  | 'preferences'
  | 'goals'
  | 'documents'
  | 'complete';

export interface StepInfo {
  id: FormStep;
  title: string;
  description: string;
  icon: any;
}

export interface ProfileAssessmentMode {
  mode: 'view' | 'edit' | 'new';
  hasExistingData: boolean;
}

export interface FeedbackItem {
  id: string;
  type: 'good' | 'needs-improvement' | 'action-required';
  category: string;
  title: string;
  message: string;
  icon?: string;
}

export interface ProfileFeedback {
  overallScore: number;
  strength: 'strong' | 'moderate' | 'needs-work';
  items: FeedbackItem[];
  nextSteps: string[];
  advisorMessage?: string;
}

export interface NextStepAction {
  id: string;
  title: string;
  description: string;
  icon: any;
  action: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface AdvisorInfo {
  id: string;
  name: string;
  role: string;
  specialization: string;
  avatar: string;
  availability: 'available' | 'busy' | 'offline';
  expertise: string[];
}

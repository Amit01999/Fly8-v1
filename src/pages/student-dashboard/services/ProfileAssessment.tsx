import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import {
  User,
  GraduationCap,
  Globe,
  Target,
  Upload,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Edit,
  Eye,
  BookOpen,
  Building2,
  ArrowRight,
  TrendingUp,
  Clock,
  FileText,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import toast from 'react-hot-toast';

// Import step components
import PersonalInformation from '@/components/StrudentDashbord/profile-assessmen/steps/PersonalInformation';
import AcademicBackground from '@/components/StrudentDashbord/profile-assessmen/steps/AcademicBackground';
import StudyPreferences from '@/components/StrudentDashbord/profile-assessmen/steps/StudyPreferences';
import CareerGoals from '@/components/StrudentDashbord/profile-assessmen/steps/CareerGoals';
import UploadDocuments from '@/components/StrudentDashbord/profile-assessmen/steps/UploadDocuments';
import CompletionSummary from '@/components/StrudentDashbord/profile-assessmen/steps/CompletionSummary';
import StepIndicator from '@/components/StrudentDashbord/profile-assessmen/StepIndicator';
import ProfileCompletionProgress from '@/components/StrudentDashbord/profile-assessmen/ProfileCompletionProgress';
import AdvisorSection from '@/components/StrudentDashbord/profile-assessmen/AdvisorSection';
import AdvisorModal from '@/components/StrudentDashbord/profile-assessmen/AdvisorModal';
import ProfileHeader from '@/components/StrudentDashbord/profile-assessmen/ProfileHeader';
import NextSteps from '@/components/StrudentDashbord/profile-assessmen/NextSteps';
import Fly8Feedback from '@/components/StrudentDashbord/profile-assessmen/Fly8Feedback';

// Import API functions
import {
  getStudentProfile,
  updateStudentProfile,
  uploadDocument,
  getProfileFeedback,
  getUploadedDocuments,
} from '@/services/operations/studentProfileAPI';

// Import types
import type {
  FormStep,
  StepInfo,
  ProfileAssessmentFormData,
  DocumentsData,
  PersonalInformationData,
  AcademicBackgroundData,
  StudyPreferencesData,
  CareerGoalsData,
  ProfileCompletionData,
} from '@/types/profileAssessment';
// @ts-ignore: path alias may not be available in some environments or CI; keep the type import for IDEs that resolve the alias
import type { RootState } from '@/store/store';

const STEPS: StepInfo[] = [
  {
    id: 'personal',
    title: 'Personal',
    description: 'Basic Information',
    icon: User,
  },
  {
    id: 'academic',
    title: 'Academic',
    description: 'Education History',
    icon: GraduationCap,
  },
  {
    id: 'preferences',
    title: 'Preferences',
    description: 'Study Goals',
    icon: Globe,
  },
  {
    id: 'goals',
    title: 'Career',
    description: 'Future Plans',
    icon: Target,
  },
  {
    id: 'documents',
    title: 'Documents',
    description: 'Upload Files',
    icon: Upload,
  },
  {
    id: 'complete',
    title: 'Complete',
    description: 'All Done',
    icon: CheckCircle,
  },
];

export default function ProfileAssessment() {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state: RootState) => state.profile);

  // Refs for scrolling
  const feedbackRef = useRef<HTMLDivElement>(null);
  const advisorRef = useRef<HTMLDivElement>(null);

  // State management
  const [currentStep, setCurrentStep] = useState<FormStep>('personal');
  const [completedSteps, setCompletedSteps] = useState<FormStep[]>([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [hasExistingData, setHasExistingData] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showAdvisorSection, setShowAdvisorSection] = useState(false);
  const [isAdvisorModalOpen, setIsAdvisorModalOpen] = useState(false);
  const [advisorModalTab, setAdvisorModalTab] = useState<
    'chat' | 'appointment'
  >('chat');
  const [feedback, setFeedback] = useState<any>(null);
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Form data state
  const [formData, setFormData] = useState<ProfileAssessmentFormData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      age: '',
      nationality: '',
    },
    academics: {
      currentEducationLevel: 'bachelor',
      fieldOfStudy: '',
      gpa: '',
      graduationYear: '',
      institution: '',
      ielts: '',
      toefl: '',
      gre: '',
    },
    preferences: {
      preferredCountries: [],
      preferredDegreeLevel: '',
      budget: '',
    },
    goals: {
      careerGoals: '',
      industry: '',
      workLocation: '',
    },
  });

  const [documents, setDocuments] = useState<DocumentsData>({
    transcripts: null,
    testScores: null,
    sop: null,
    recommendation: null,
    resume: null,
    passport: null,
  });

  const [uploadedDocuments, setUploadedDocuments] = useState<any[]>([]);

  // Fetch existing profile data on mount
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profileData = await dispatch(getStudentProfile() as any);

        if (profileData?.additionalDetails) {
          const profile = profileData.additionalDetails;
          setHasExistingData(true);

          // Populate form with existing data
          setFormData({
            personalInfo: {
              fullName: `${profileData.firstName || ''} ${
                profileData.lastName || ''
              }`.trim(),
              email: profileData.email || '',
              phone: profileData.phone || '',
              age: profile.age?.toString() || '',
              nationality: profileData.country || '',
            },
            academics: {
              currentEducationLevel:
                (profile.currentEducationLevel as
                  | 'bachelor'
                  | 'master'
                  | 'phd'
                  | 'diploma'
                  | 'other') || 'bachelor',
              fieldOfStudy: profile.fieldOfStudy || '',
              gpa: profile.gpa || '',
              graduationYear: profile.graduationYear?.toString() || '',
              institution: profile.institution || '',
              ielts: profile.ielts || '',
              toefl: profile.toefl || '',
              gre: profile.gre || '',
            },
            preferences: {
              preferredCountries: profile.preferredCountries || [],
              preferredDegreeLevel: profile.preferredDegreeLevel || '',
              budget: profile.budget || '',
            },
            goals: {
              careerGoals: profile.careerGoals || '',
              industry: profile.industry || '',
              workLocation: profile.workLocation || '',
            },
          });

          // Mark all steps as completed if data exists
          setCompletedSteps(['personal', 'academic', 'preferences', 'goals']);

          // Load feedback if profile is complete
          const completion = calculateCompletionFromData(profileData);
          if (completion >= 80) {
            await loadFeedback();
          }
        }

        // Fetch existing uploaded documents
        const existingDocuments = await getUploadedDocuments();
        console.log('Existing Documentsssss:', existingDocuments);
        setUploadedDocuments(existingDocuments);
      } catch (error) {
        console.error('Error loading profile:', error);
      } finally {
        setIsInitialLoad(false);
      }
    };

    loadProfile();
  }, [dispatch]);

  // Helper function to calculate completion from profile data
  const calculateCompletionFromData = (profileData: any) => {
    const profile = profileData.additionalDetails || {};
    const allFields = [
      profileData.firstName,
      profileData.lastName,
      profileData.email,
      profileData.phone,
      profile.age,
      profileData.country,
      profile.currentEducationLevel,
      profile.fieldOfStudy,
      profile.gpa,
      profile.graduationYear,
      profile.institution,
      profile.preferredCountries?.length,
      profile.preferredDegreeLevel,
      profile.budget,
      profile.careerGoals,
      profile.industry,
      profile.workLocation,
    ];
    const completedFields = allFields.filter(
      field => field && field.toString().trim() !== ''
    );
    const totalDocuments = 6;
    const documentsUploaded = uploadedDocuments.length;

    return Math.round(
      (completedFields.length / allFields.length) * 80 +
        (documentsUploaded / totalDocuments) * 20
    );
  };

  // Load feedback data
  const loadFeedback = async () => {
    try {
      setIsLoadingFeedback(true);
      const feedbackData = await getProfileFeedback();
      setFeedback(feedbackData);
    } catch (error) {
      console.error('Error loading feedback:', error);
    } finally {
      setIsLoadingFeedback(false);
    }
  };

  // Scroll handlers
  const scrollToFeedback = () => {
    feedbackRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToAdvisor = () => {
    setShowAdvisorSection(true);
    advisorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Modal handlers
  const handleOpenChatModal = () => {
    setAdvisorModalTab('chat');
    setIsAdvisorModalOpen(true);
  };

  const handleOpenAppointmentModal = () => {
    setAdvisorModalTab('appointment');
    setIsAdvisorModalOpen(true);
  };

  // Navigation handlers
  const handleExplorePrograms = () => {
    // TODO: Navigate to programs page
    window.location.href = '/programs';
  };

  const handleExploreUniversities = () => {
    // TODO: Navigate to universities page
    window.location.href = '/universities';
  };

  // Calculate profile completion
  const calculateCompletion = (): ProfileCompletionData => {
    const allFields = [
      // Personal info
      formData.personalInfo.fullName,
      formData.personalInfo.email,
      formData.personalInfo.phone,
      formData.personalInfo.age,
      formData.personalInfo.nationality,
      // Academics
      formData.academics.currentEducationLevel,
      formData.academics.fieldOfStudy,
      formData.academics.gpa,
      formData.academics.graduationYear,
      formData.academics.institution,
      // Preferences
      formData.preferences.preferredCountries.length > 0 ? 'yes' : '',
      formData.preferences.preferredDegreeLevel,
      formData.preferences.budget,
      // Goals
      formData.goals.careerGoals,
      formData.goals.industry,
      formData.goals.workLocation,
    ];

    const completedFields = allFields.filter(
      field => field && field.toString().trim() !== ''
    );
    const totalFields = allFields.length;

    // Count documents: use a Set to track unique document types
    // to avoid counting duplicates when a user re-uploads a document
    const documentTypes = new Set<string>();

    // Add existing uploaded documents
    uploadedDocuments.forEach(doc => {
      documentTypes.add(doc.type);
    });

    // Add newly selected documents (these will override existing ones)
    Object.entries(documents).forEach(([key, file]) => {
      if (file !== null) {
        documentTypes.add(key);
      }
    });

    const documentsUploaded = documentTypes.size;
    const totalDocuments = 6;

    const percentage = Math.round(
      (completedFields.length / totalFields) * 80 +
        (documentsUploaded / totalDocuments) * 20
    );

    return {
      percentage,
      completedFields: completedFields.map((_, i) => `field_${i}`),
      missingFields: allFields
        .map((field, i) =>
          !field || field.toString().trim() === '' ? `field_${i}` : null
        )
        .filter(Boolean) as string[],
      documentsUploaded,
      totalDocuments,
    };
  };

  // Handle field changes
  const handlePersonalInfoChange = (
    field: keyof PersonalInformationData,
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }));
  };

  const handleAcademicsChange = (
    field: keyof AcademicBackgroundData,
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      academics: { ...prev.academics, [field]: value },
    }));
  };

  const handlePreferencesChange = (
    field: keyof StudyPreferencesData,
    value: string | string[]
  ) => {
    setFormData(prev => ({
      ...prev,
      preferences: { ...prev.preferences, [field]: value },
    }));
  };

  const handleGoalsChange = (field: keyof CareerGoalsData, value: string) => {
    setFormData(prev => ({
      ...prev,
      goals: { ...prev.goals, [field]: value },
    }));
  };

  const handleDocumentChange = (
    field: keyof DocumentsData,
    value: File | null
  ) => {
    setDocuments(prev => ({ ...prev, [field]: value }));
  };

  // Refresh uploaded documents list (called after upload or delete)
  const refreshUploadedDocuments = async () => {
    try {
      const existingDocuments = await getUploadedDocuments();
      setUploadedDocuments(existingDocuments);
    } catch (error) {
      console.error('Error refreshing documents:', error);
    }
  };

  // Validation functions
  const validatePersonalInfo = (): boolean => {
    const { fullName, email, phone, age, nationality } = formData.personalInfo;
    if (!fullName || !email || !phone || !age || !nationality) {
      toast.error('Please fill in all required fields');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const validateAcademics = (): boolean => {
    const {
      currentEducationLevel,
      fieldOfStudy,
      gpa,
      graduationYear,
      institution,
    } = formData.academics;
    if (
      !currentEducationLevel ||
      !fieldOfStudy ||
      !gpa ||
      !graduationYear ||
      !institution
    ) {
      toast.error('Please fill in all required academic fields');
      return false;
    }
    return true;
  };

  const validatePreferences = (): boolean => {
    const { preferredCountries, preferredDegreeLevel, budget } =
      formData.preferences;
    if (preferredCountries.length === 0 || !preferredDegreeLevel || !budget) {
      toast.error('Please fill in all required preference fields');
      return false;
    }
    return true;
  };

  const validateGoals = (): boolean => {
    const { careerGoals, industry, workLocation } = formData.goals;
    if (!careerGoals || !industry || !workLocation) {
      toast.error('Please fill in all required career goal fields');
      return false;
    }
    return true;
  };

  // Navigation handlers
  const handleNext = async () => {
    // Validate current step
    let isValid = true;
    if (currentStep === 'personal') isValid = validatePersonalInfo();
    else if (currentStep === 'academic') isValid = validateAcademics();
    else if (currentStep === 'preferences') isValid = validatePreferences();
    else if (currentStep === 'goals') isValid = validateGoals();

    if (!isValid) return;

    // Mark step as completed
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps(prev => [...prev, currentStep]);
    }

    // Move to next step
    const currentIndex = STEPS.findIndex(s => s.id === currentStep);
    if (currentIndex < STEPS.length - 1) {
      setCurrentStep(STEPS[currentIndex + 1].id);
    }
  };

  const handlePrevious = () => {
    const currentIndex = STEPS.findIndex(s => s.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(STEPS[currentIndex - 1].id);
    }
  };

  const handleSaveAndExit = async () => {
    setIsSaving(true);
    try {
      // Prepare data for backend
      const profileUpdateData = {
        firstName: formData.personalInfo.fullName.split(' ')[0],
        lastName: formData.personalInfo.fullName.split(' ').slice(1).join(' '),
        email: formData.personalInfo.email,
        phone: formData.personalInfo.phone,
        country: formData.personalInfo.nationality,
        additionalDetails: {
          age: parseInt(formData.personalInfo.age),
          currentEducationLevel: formData.academics.currentEducationLevel,
          fieldOfStudy: formData.academics.fieldOfStudy,
          gpa: formData.academics.gpa,
          graduationYear: parseInt(formData.academics.graduationYear),
          institution: formData.academics.institution,
          ielts: formData.academics.ielts,
          toefl: formData.academics.toefl,
          gre: formData.academics.gre,
          preferredCountries: formData.preferences.preferredCountries,
          preferredDegreeLevel: formData.preferences.preferredDegreeLevel,
          budget: formData.preferences.budget,
          careerGoals: formData.goals.careerGoals,
          industry: formData.goals.industry,
          workLocation: formData.goals.workLocation,
        },
      };

      await dispatch(
        updateStudentProfile({
          ...profileUpdateData,
          additionalDetails: {
            ...profileUpdateData.additionalDetails,
            currentEducationLevel: formData.academics.currentEducationLevel as
              | 'bachelor'
              | 'master'
              | 'phd'
              | 'diploma'
              | 'other',
            preferredDegreeLevel: formData.preferences.preferredDegreeLevel as
              | 'bachelor'
              | 'master'
              | 'phd'
              | 'other',
            industry: formData.goals.industry as
              | 'other'
              | 'tech'
              | 'finance'
              | 'healthcare'
              | 'education'
              | 'consulting',
            workLocation: formData.goals.workLocation as
              | 'other'
              | 'home-country'
              | 'study-country'
              | 'global',
          },
        }) as any
      );

      // Upload documents if any
      for (const [key, file] of Object.entries(documents)) {
        if (file) {
          await dispatch(uploadDocument(file, key) as any);
        }
      }

      toast.success('Profile saved successfully!');
      setHasExistingData(true);
      setIsEditMode(false);
    } catch (error) {
      toast.error('Failed to save profile');
      console.error('Save error:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleFinish = async () => {
    await handleSaveAndExit();
    setCurrentStep('complete');
    if (!completedSteps.includes('complete')) {
      setCompletedSteps(prev => [...prev, 'complete']);
    }
  };

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-8">
        {/* Header Skeleton */}
        <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>

        {/* Cards Skeleton */}
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map(i => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-lg p-6 animate-pulse"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Show loading skeleton during initial load
  if (isInitialLoad) {
    return <LoadingSkeleton />;
  }

  // View mode (for existing data)
  if (hasExistingData && !isEditMode && currentStep !== 'complete') {
    const completion = calculateCompletion();
    const isProfileComplete = completion.percentage >= 80;

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Modern Header */}
        <ProfileHeader
          profileCompletion={completion.percentage}
          onReviewFeedback={scrollToFeedback}
          onBookAppointment={handleOpenAppointmentModal}
          onChatWithAdvisor={handleOpenChatModal}
        />

        <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
          {/* Quick Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {/* Profile Completion Stat */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Profile Completion
                    </p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">
                      {completion.percentage}%
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {isProfileComplete
                        ? 'All set!'
                        : `${100 - completion.percentage}% remaining`}
                    </p>
                  </div>
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Documents Uploaded Stat */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Documents
                    </p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">
                      {completion.documentsUploaded}/{completion.totalDocuments}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {completion.documentsUploaded ===
                      completion.totalDocuments
                        ? 'Complete'
                        : 'Uploaded'}
                    </p>
                  </div>
                  <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <FileText className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Applications Stat */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Applications
                    </p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
                    <p className="text-xs text-gray-500 mt-1">In progress</p>
                  </div>
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time Stat */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Avg Response
                    </p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">
                      2-4h
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Business hours</p>
                  </div>
                  <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Next Steps Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <NextSteps
              profileCompletion={completion.percentage}
              studentId={user?.id}
              onReviewFeedback={scrollToFeedback}
              onBookAppointment={handleOpenAppointmentModal}
              onStartChat={handleOpenChatModal}
              onCompleteProfile={() => setIsEditMode(true)}
            />
          </motion.div>

          {/* Explore Programs and Universities Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Explore Programs Card */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-6">
                <button
                  onClick={handleExplorePrograms}
                  className="w-full text-left group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                        Explore Programs
                        <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Browse through thousands of academic programs across
                        different fields and universities worldwide
                      </p>
                    </div>
                  </div>
                </button>
              </CardContent>
            </Card>

            {/* Explore Universities Card */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-emerald-50 to-teal-50">
              <CardContent className="p-6">
                <button
                  onClick={handleExploreUniversities}
                  className="w-full text-left group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      <Building2 className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                        Explore Universities
                        <ArrowRight className="h-5 w-5 text-emerald-600 group-hover:translate-x-1 transition-transform duration-300" />
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Discover top universities and institutions that match
                        your academic goals and preferences
                      </p>
                    </div>
                  </div>
                </button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Feedback Section */}
          {/* <motion.div
            ref={feedbackRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {isProfileComplete && feedback ? (
              <Fly8Feedback
                feedback={feedback}
                profileCompletion={completion.percentage}
              />
            ) : isProfileComplete ? (
              <Card className="border border-gray-200 shadow-sm bg-white">
                <CardContent className="p-8 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-4 bg-blue-50 rounded-full">
                      <Target className="h-12 w-12 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Your Feedback
                      </h3>
                      <p className="text-gray-600 max-w-md mx-auto">
                        No feedback found. You can request a feedback review by clicking "Request Review of Your Assessment" above.
                      </p>
                    </div>
                    <Button
                      onClick={scrollToFeedback}
                      className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      Request Feedback Review
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : null}
          </motion.div> */}

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="shadow-lg border border-gray-200 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                      <h2 className="text-2xl font-bold text-gray-900">
                        Profile Summary
                      </h2>
                      <Button
                        onClick={() => setIsEditMode(true)}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md"
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Profile
                      </Button>
                    </div>
                    <div className="space-y-6">
                      <PersonalInformation
                        data={formData.personalInfo}
                        onChange={handlePersonalInfoChange}
                        disabled={true}
                      />
                      <AcademicBackground
                        data={formData.academics}
                        onChange={handleAcademicsChange}
                        disabled={true}
                      />
                      <StudyPreferences
                        data={formData.preferences}
                        onChange={handlePreferencesChange}
                        disabled={true}
                      />
                      <CareerGoals
                        data={formData.goals}
                        onChange={handleGoalsChange}
                        disabled={true}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <ProfileCompletionProgress completionData={completion} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card className="shadow-lg border border-gray-200 bg-white">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">
                      Quick Actions
                    </h3>
                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full justify-start hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200"
                        onClick={() =>
                          setShowAdvisorSection(!showAdvisorSection)
                        }
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        {showAdvisorSection ? 'Hide' : 'View'} Advisor Section
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start hover:bg-indigo-50 hover:border-indigo-300 transition-colors duration-200"
                        onClick={() => setIsEditMode(true)}
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Advisor Section */}
          {showAdvisorSection && (
            <motion.div
              ref={advisorRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <AdvisorSection />
            </motion.div>
          )}
        </div>

        {/* Advisor Modal */}
        <AdvisorModal
          isOpen={isAdvisorModalOpen}
          onClose={() => setIsAdvisorModalOpen(false)}
          defaultTab={advisorModalTab}
        />
      </div>
    );
  }

  // Multi-step form mode
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Profile Assessment
          </h1>
          <p className="text-gray-600">
            {hasExistingData && isEditMode
              ? 'Update your profile information'
              : 'Complete your profile to get personalized recommendations'}
          </p>
        </div>

        {/* Progress Indicator */}
        {currentStep !== 'complete' && (
          <StepIndicator
            steps={STEPS}
            currentStep={currentStep}
            completedSteps={completedSteps}
          />
        )}

        {/* Step Content */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {currentStep === 'personal' && (
              <PersonalInformation
                key="personal"
                data={formData.personalInfo}
                onChange={handlePersonalInfoChange}
              />
            )}
            {currentStep === 'academic' && (
              <AcademicBackground
                key="academic"
                data={formData.academics}
                onChange={handleAcademicsChange}
              />
            )}
            {currentStep === 'preferences' && (
              <StudyPreferences
                key="preferences"
                data={formData.preferences}
                onChange={handlePreferencesChange}
              />
            )}
            {currentStep === 'goals' && (
              <CareerGoals
                key="goals"
                data={formData.goals}
                onChange={handleGoalsChange}
              />
            )}
            {currentStep === 'documents' && (
              <UploadDocuments
                key="documents"
                data={documents}
                onChange={handleDocumentChange}
                onDocumentsUpdate={refreshUploadedDocuments}
              />
            )}
            {currentStep === 'complete' && (
              <CompletionSummary
                key="complete"
                formData={formData}
                documents={documents}
                completionData={calculateCompletion()}
                onBookAppointment={handleOpenAppointmentModal}
                onStartChat={handleOpenChatModal}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        {currentStep !== 'complete' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 flex items-center justify-between gap-4"
          >
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 'personal' || isSaving}
              className="px-6"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={handleSaveAndExit}
                disabled={isSaving || loading}
              >
                {isSaving ? 'Saving...' : 'Save & Exit'}
              </Button>

              {currentStep === 'documents' ? (
                <Button
                  onClick={handleFinish}
                  disabled={isSaving || loading}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8"
                >
                  {isSaving ? 'Finishing...' : 'Finish'}
                  <CheckCircle className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={isSaving || loading}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </motion.div>
        )}

        {/* Advisor Section (shown after completion) */}
        {/* {showAdvisorSection && currentStep === 'complete' && (
          <div className="mt-8">
            <AdvisorSection />
          </div>
        )} */}

        {/* Advisor Modal */}
        <AdvisorModal
          isOpen={isAdvisorModalOpen}
          onClose={() => setIsAdvisorModalOpen(false)}
          defaultTab={advisorModalTab}
        />
      </motion.div>
    </div>
  );
}

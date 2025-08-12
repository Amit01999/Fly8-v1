import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Profile, Document, apiService } from '@/services/studentdashboardapi';
import { ProgressCard } from './ProgressCard';
import { PersonalInfoForm } from './PersonalInfoForm';
import { AcademicInfoForm } from './AcademicInfoForm';
import { StudyPreferencesForm } from './StudyPreferencesForm';
import { DocumentUpload } from './DocumentUpload';
import {
  User,
  GraduationCap,
  Target,
  Upload,
  Settings,
  Bell,
  Search,
  BookOpen,
  Globe,
  ChevronRight,
  Check,
} from 'lucide-react';

// Mock student ID - replace with actual authentication
const STUDENT_ID = 'student-123';

export const SstudentDashboard = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [completionPercentage, setCompletionPercentage] = useState(0);

  const loadProfileData = async () => {
    try {
      setLoading(true);
      const data = await apiService.getProfile(STUDENT_ID);
      setProfile(data);
      setCompletionPercentage(data.completionPercentage);
    } catch (error) {
      console.error('Failed to load profile data:', error);
      toast({
        title: 'Loading Error',
        description:
          'Failed to load your profile data. Some features may not work properly.',
        variant: 'destructive',
      });
      setProfile({
        studentId: STUDENT_ID,
        academicInfo: {
          highestEducation: '',
          institutionName: '',
          fieldOfStudy: '',
          graduationYear: '',
          gpa: '',
          gradeSystem: '',
          englishProficiency: '',
          ieltsScore: '',
          toeflScore: '',
          greScore: '',
          gmatScore: '',
        },
        studyPreferences: {
          preferredCountries: [],
          preferredPrograms: [],
          studyLevel: '',
          intakePreference: [],
          budgetRange: '',
          accommodation: '',
        },
        documents: [],
        courses: [],
        notifications: [],
        messages: [],
        appointments: [],
        completionPercentage: 0,
      });
      setCompletionPercentage(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProfileData();
  }, []);

  const handleDataUpdate = () => {
    loadProfileData();
  };

  const steps = [
    {
      id: 1,
      title: 'Personal Information',
      icon: <User className="h-5 w-5" />,
      description: 'Basic personal details',
    },
    {
      id: 2,
      title: 'Academic Information',
      icon: <GraduationCap className="h-5 w-5" />,
      description: 'Educational background',
    },
    {
      id: 3,
      title: 'Study Preferences',
      icon: <Target className="h-5 w-5" />,
      description: 'Your study abroad goals',
    },
    {
      id: 4,
      title: 'Document Upload',
      icon: <Upload className="h-5 w-5" />,
      description: 'Required documents',
    },
  ];

  const isStepComplete = (stepId: number) => {
    if (!profile) return false;

    switch (stepId) {
      case 1:
        // Assuming personal info is part of the profile or fetched separately
        return Object.values(profile.academicInfo).some(
          value => value && value.toString().trim() !== ''
        ); // Proxy for personal info completion
      case 2:
        return [
          profile.academicInfo.highestEducation,
          profile.academicInfo.institutionName,
          profile.academicInfo.fieldOfStudy,
          profile.academicInfo.graduationYear,
          profile.academicInfo.gpa,
          profile.academicInfo.gradeSystem,
        ].every(value => value && value.trim() !== '');
      case 3:
        return (
          profile.studyPreferences.preferredCountries.length > 0 &&
          profile.studyPreferences.preferredPrograms.length > 0 &&
          profile.studyPreferences.studyLevel &&
          profile.studyPreferences.intakePreference.length > 0 &&
          profile.studyPreferences.budgetRange &&
          profile.studyPreferences.accommodation
        );
      case 4:
        const requiredDocs = [
          'Passport',
          'Academic Transcripts',
          'English Proficiency Test Results',
        ];
        return (
          requiredDocs.filter(docType =>
            profile.documents.some(doc => doc.type === docType)
          ).length >= 3
        );
      default:
        return false;
    }
  };

  const canAccessStep = (stepId: number) => {
    if (stepId === 1) return true;
    for (let i = 1; i < stepId; i++) {
      if (!isStepComplete(i)) return false;
    }
    return true;
  };

  const handleNextStep = () => {
    if (currentStep < steps.length && isStepComplete(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const calculateCompletedSections = () => {
    return steps
      .filter(step => isStepComplete(step.id))
      .map(step => step.title);
  };

  const quickStats = [
    {
      title: 'Applications',
      value: profile?.courses.length.toString() || '0',
      description: 'In Progress',
      icon: <BookOpen className="h-5 w-5" />,
      color: 'bg-primary',
    },
    {
      title: 'Universities',
      value:
        profile?.studyPreferences.preferredCountries.length.toString() || '0',
      description: 'Shortlisted',
      icon: <Globe className="h-5 w-5" />,
      color: 'bg-secondary',
    },
    {
      title: 'Documents',
      value: profile?.documents.length.toString() || '0',
      description: 'Uploaded',
      icon: <Upload className="h-5 w-5" />,
      color: 'bg-success',
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-background">
      <header className="bg-card shadow-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  Fly8 Student Hub
                </h1>
                <p className="text-sm text-muted-foreground">
                  Your Study Abroad Journey
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Welcome back,{' '}
            {profile?.academicInfo.institutionName.split(' ')[0] || 'Student'}!
            👋
          </h2>
          <p className="text-muted-foreground">
            Complete your profile to get personalized university recommendations
            and improve your application success rate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-1">
            <ProgressCard
              completionPercentage={completionPercentage}
              completedSections={calculateCompletedSections()}
              totalSections={4}
            />
          </div>
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickStats.map(stat => (
              <Card key={stat.title} className="shadow-card">
                <CardContent className="flex items-center p-6">
                  <div className={`${stat.color} p-3 rounded-lg mr-4`}>
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`
                      w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all
                      ${
                        isStepComplete(step.id)
                          ? 'bg-success border-success text-white'
                          : step.id === currentStep
                          ? 'bg-primary border-primary text-white'
                          : canAccessStep(step.id)
                          ? 'border-primary text-primary bg-background'
                          : 'border-muted text-muted bg-background'
                      }
                    `}
                  >
                    {isStepComplete(step.id) ? (
                      <Check className="h-6 w-6" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <p
                      className={`text-sm font-medium ${
                        step.id === currentStep
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-4 mt-6 transition-all ${
                      isStepComplete(step.id) ? 'bg-success' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              {steps[currentStep - 1]?.icon}
              {steps[currentStep - 1]?.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {currentStep === 1 && profile && (
              <div className="space-y-6">
                <PersonalInfoForm
                  studentId={STUDENT_ID}
                  initialData={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    dateOfBirth: '',
                    nationality: '',
                    gender: '',
                    address: '',
                    city: '',
                    country: '',
                    postalCode: '',
                  }} // Placeholder, fetch personal info separately if needed
                  onSave={handleDataUpdate}
                />
                {isStepComplete(1) && (
                  <div className="flex justify-end pt-4 border-t">
                    <Button
                      onClick={handleNextStep}
                      className="flex items-center gap-2"
                    >
                      Continue to Academic Information
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            )}

            {currentStep === 2 && profile && (
              <div className="space-y-6">
                <AcademicInfoForm
                  studentId={STUDENT_ID}
                  initialData={profile.academicInfo}
                  onSave={handleDataUpdate}
                />
                {isStepComplete(2) && (
                  <div className="flex justify-between pt-4 border-t">
                    <Button variant="outline" onClick={() => setCurrentStep(1)}>
                      Back to Personal Information
                    </Button>
                    <Button
                      onClick={handleNextStep}
                      className="flex items-center gap-2"
                    >
                      Continue to Study Preferences
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            )}

            {currentStep === 3 && profile && (
              <div className="space-y-6">
                <StudyPreferencesForm
                  studentId={STUDENT_ID}
                  initialData={profile.studyPreferences}
                  onSave={handleDataUpdate}
                />
                {isStepComplete(3) && (
                  <div className="flex justify-between pt-4 border-t">
                    <Button variant="outline" onClick={() => setCurrentStep(2)}>
                      Back to Academic Information
                    </Button>
                    <Button
                      onClick={handleNextStep}
                      className="flex items-center gap-2"
                    >
                      Continue to Document Upload
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            )}

            {currentStep === 4 && profile && (
              <div className="space-y-6">
                <DocumentUpload
                  studentId={STUDENT_ID}
                  documents={profile.documents}
                  onUpload={handleDataUpdate}
                />
                {isStepComplete(4) && (
                  <div className="flex justify-between pt-4 border-t">
                    <Button variant="outline" onClick={() => setCurrentStep(3)}>
                      Back to Study Preferences
                    </Button>
                    <div className="text-center">
                      <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                        <Check className="h-8 w-8 text-success mx-auto mb-2" />
                        <p className="text-success font-semibold">
                          Profile Complete!
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Your application is ready for submission
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

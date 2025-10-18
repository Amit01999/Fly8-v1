import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  User,
  GraduationCap,
  Target,
  FileText,
  ArrowLeft,
  Save,
  Loader2,
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

import {
  useAppDispatch,
  useAppSelector,
} from '@/hooks/redux/SelectorAndDispatchHooks';
import {
  getStudentProfile,
  updateStudentProfile,
  uploadDocument,
  uploadProfileImage,
} from '@/services/operations/studentProfileAPI';
import { FileUpload } from '@/components/profile/FileUpload';
import { MultiSelect } from '@/components/profile/MultiSelect';
import { ImageUpload } from '@/components/profile/ImageUpload';
import { COUNTRY_OPTIONS } from '@/types/profile';
import type { StudentWithProfile } from '@/types/profile';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function MyProfile() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, loading } = useAppSelector(state => state.profile);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profileData, setProfileData] = useState<StudentWithProfile | null>(
    null
  );
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [pendingDocuments, setPendingDocuments] = useState<{
    [key: string]: File;
  }>({});
  const [pendingImage, setPendingImage] = useState<File | null>(null);

  const { register, handleSubmit, setValue, watch } = useForm<any>();

  // Load profile data on mount
  useEffect(() => {
    dispatch(getStudentProfile() as any)
      .then((data: StudentWithProfile) => {
        setProfileData(data);
        populateForm(data);
      })
      .catch((error: any) => {
        console.error('Failed to load profile:', error);
      });
  }, [dispatch]);

  // Populate form with existing data
  const populateForm = (data: StudentWithProfile) => {
    // Personal info
    setValue('firstName', data.firstName || '');
    setValue('lastName', data.lastName || '');
    setValue('email', data.email || '');
    setValue('phone', data.phone || '');
    setValue('country', data.country || '');
    setValue('referral', data.referral || '');

    // Education info
    const profile = data.additionalDetails;
    setValue('age', profile.age || '');
    setValue('currentEducationLevel', profile.currentEducationLevel || '');
    setValue('fieldOfStudy', profile.fieldOfStudy || '');
    setValue('gpa', profile.gpa || '');
    setValue('graduationYear', profile.graduationYear || '');
    setValue('institution', profile.institution || '');
    setValue('ielts', profile.ielts || '');
    setValue('toefl', profile.toefl || '');
    setValue('gre', profile.gre || '');

    // Preferences
    setValue('preferredDegreeLevel', profile.preferredDegreeLevel || '');
    setValue('budget', profile.budget || '');
    setValue('careerGoals', profile.careerGoals || '');
    setValue('industry', profile.industry || '');
    setValue('workLocation', profile.workLocation || '');

    setSelectedCountries(profile.preferredCountries || []);
  };

  // Handle file selection
  const handleFileSelect = (file: File, documentType: string) => {
    setPendingDocuments(prev => ({ ...prev, [documentType]: file }));
  };

  // Handle image selection
  const handleImageSelect = (file: File) => {
    setPendingImage(file);
  };

  // Submit form
  const onSubmit = async (formData: any) => {
    setIsSubmitting(true);

    try {
      // Upload profile image if selected
      if (pendingImage) {
        await dispatch(uploadProfileImage(pendingImage) as any);
      }

      // Upload documents if selected
      for (const [documentType, file] of Object.entries(pendingDocuments)) {
        await dispatch(uploadDocument(file, documentType) as any);
      }

      // Update profile data
      const updateData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        referral: formData.referral,
        additionalDetails: {
          age: parseInt(formData.age) || undefined,
          currentEducationLevel: formData.currentEducationLevel,
          fieldOfStudy: formData.fieldOfStudy,
          gpa: formData.gpa,
          graduationYear: parseInt(formData.graduationYear) || undefined,
          institution: formData.institution,
          ielts: formData.ielts,
          toefl: formData.toefl,
          gre: formData.gre,
          preferredCountries: selectedCountries,
          preferredDegreeLevel: formData.preferredDegreeLevel,
          budget: formData.budget,
          careerGoals: formData.careerGoals,
          industry: formData.industry,
          workLocation: formData.workLocation,
        },
      };

      await dispatch(updateStudentProfile(updateData) as any);

      // Clear pending files
      setPendingDocuments({});
      setPendingImage(null);

      toast.success('Profile updated successfully!');
    } catch (error) {
      console.error('Failed to update profile:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading && !profileData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/StudentDashboard/home"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-600 mt-2">
            Manage your personal information and academic profile
          </p>
        </motion.div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Profile Image Section */}
            <motion.div variants={itemVariants}>
              <Card className="backdrop-blur-sm bg-white/80 border-white/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    Profile Picture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ImageUpload
                    currentImage={profileData?.image}
                    onImageSelect={handleImageSelect}
                    disabled={isSubmitting}
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* Personal Information */}
            <motion.div variants={itemVariants}>
              <Card className="backdrop-blur-sm bg-white/80 border-white/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        {...register('firstName', { required: true })}
                        placeholder="Enter first name"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        {...register('lastName', { required: true })}
                        placeholder="Enter last name"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email', { required: true })}
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        {...register('phone')}
                        placeholder="+1 234 567 8900"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        {...register('country')}
                        placeholder="Your home country"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="referral">Referral Code (Optional)</Label>
                    <Input
                      id="referral"
                      {...register('referral')}
                      placeholder="Enter referral code if you have one"
                      disabled={isSubmitting}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education Information */}
            <motion.div variants={itemVariants}>
              <Card className="backdrop-blur-sm bg-white/80 border-white/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    Education Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        {...register('age')}
                        placeholder="Your age"
                        min="0"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currentEducationLevel">
                        Current Education Level
                      </Label>
                      <Select
                        value={watch('currentEducationLevel')}
                        onValueChange={value =>
                          setValue('currentEducationLevel', value)
                        }
                        disabled={isSubmitting}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="diploma">Diploma</SelectItem>
                          <SelectItem value="bachelor">
                            Bachelor's Degree
                          </SelectItem>
                          <SelectItem value="master">
                            Master's Degree
                          </SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fieldOfStudy">Field of Study</Label>
                      <Input
                        id="fieldOfStudy"
                        {...register('fieldOfStudy')}
                        placeholder="e.g., Computer Science"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="institution">Institution</Label>
                      <Input
                        id="institution"
                        {...register('institution')}
                        placeholder="Your university/college"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="gpa">GPA</Label>
                      <Input
                        id="gpa"
                        {...register('gpa')}
                        placeholder="e.g., 3.8/4.0"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="graduationYear">Graduation Year</Label>
                      <Input
                        id="graduationYear"
                        type="number"
                        {...register('graduationYear')}
                        placeholder="2024"
                        min="1900"
                        max={new Date().getFullYear() + 10}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-gray-700">
                      Test Scores
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="ielts">IELTS Score</Label>
                        <Input
                          id="ielts"
                          {...register('ielts')}
                          placeholder="e.g., 7.5"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="toefl">TOEFL Score</Label>
                        <Input
                          id="toefl"
                          {...register('toefl')}
                          placeholder="e.g., 100"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gre">GRE Score</Label>
                        <Input
                          id="gre"
                          {...register('gre')}
                          placeholder="e.g., 320"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Preferences */}
            <motion.div variants={itemVariants}>
              <Card className="backdrop-blur-sm bg-white/80 border-white/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    Study Preferences & Career Goals
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <MultiSelect
                      label="Preferred Countries"
                      options={COUNTRY_OPTIONS}
                      value={selectedCountries}
                      onChange={setSelectedCountries}
                      placeholder="Select countries you're interested in"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDegreeLevel">
                        Preferred Degree Level
                      </Label>
                      <Select
                        value={watch('preferredDegreeLevel')}
                        onValueChange={value =>
                          setValue('preferredDegreeLevel', value)
                        }
                        disabled={isSubmitting}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select degree level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bachelor">
                            Bachelor's Degree
                          </SelectItem>
                          <SelectItem value="master">
                            Master's Degree
                          </SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget (Annual)</Label>
                      <Input
                        id="budget"
                        {...register('budget')}
                        placeholder="e.g., $30,000 - $50,000"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="careerGoals">Career Goals</Label>
                    <Textarea
                      id="careerGoals"
                      {...register('careerGoals')}
                      placeholder="Describe your career aspirations and goals..."
                      rows={4}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="industry">Target Industry</Label>
                      <Select
                        value={watch('industry')}
                        onValueChange={value => setValue('industry', value)}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tech">Technology</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="consulting">Consulting</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="workLocation">
                        Preferred Work Location
                      </Label>
                      <Select
                        value={watch('workLocation')}
                        onValueChange={value => setValue('workLocation', value)}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="home-country">
                            Home Country
                          </SelectItem>
                          <SelectItem value="study-country">
                            Study Country
                          </SelectItem>
                          <SelectItem value="global">
                            Global/Flexible
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Documents */}
            <motion.div variants={itemVariants}>
              <Card className="backdrop-blur-sm bg-white/80 border-white/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    Documents
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FileUpload
                      label="Transcripts"
                      documentType="transcripts"
                      currentFile={profileData?.additionalDetails.transcripts}
                      onFileSelect={handleFileSelect}
                      disabled={isSubmitting}
                    />
                    <FileUpload
                      label="Test Scores"
                      documentType="testScores"
                      currentFile={profileData?.additionalDetails.testScores}
                      onFileSelect={handleFileSelect}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FileUpload
                      label="Statement of Purpose (SOP)"
                      documentType="sop"
                      currentFile={profileData?.additionalDetails.sop}
                      onFileSelect={handleFileSelect}
                      disabled={isSubmitting}
                    />
                    <FileUpload
                      label="Recommendation Letters"
                      documentType="recommendation"
                      currentFile={
                        profileData?.additionalDetails.recommendation
                      }
                      onFileSelect={handleFileSelect}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FileUpload
                      label="Resume/CV"
                      documentType="resume"
                      currentFile={profileData?.additionalDetails.resume}
                      onFileSelect={handleFileSelect}
                      disabled={isSubmitting}
                    />
                    <FileUpload
                      label="Passport"
                      documentType="passport"
                      currentFile={profileData?.additionalDetails.passport}
                      onFileSelect={handleFileSelect}
                      disabled={isSubmitting}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              variants={itemVariants}
              className="flex justify-end gap-4"
            >
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/StudentDashboard')}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving Changes...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
            </motion.div>
          </motion.div>
        </form>
      </div>
    </div>
  );
}

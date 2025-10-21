import { motion } from 'framer-motion';
import { CheckCircle, Sparkles, Calendar, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { ProfileAssessmentFormData, DocumentsData, ProfileCompletionData } from '@/types/profileAssessment';

interface CompletionSummaryProps {
  formData: ProfileAssessmentFormData;
  documents: DocumentsData;
  completionData: ProfileCompletionData;
  onBookAppointment?: () => void;
  onStartChat?: () => void;
}

export default function CompletionSummary({
  formData,
  documents,
  completionData,
  onBookAppointment,
  onStartChat,
}: CompletionSummaryProps) {
  const uploadedDocs = Object.values(documents).filter(doc => doc !== null).length;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Success Message */}
      <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
        <CardContent className="pt-8 pb-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-6"
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              All Set!
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your profile assessment has been completed successfully. Our team
              will review your information and provide personalized recommendations
              soon.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg mb-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-1">
                {completionData.percentage}%
              </h3>
              <p className="text-sm text-gray-600">Profile Complete</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500 rounded-lg mb-3">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-purple-600 mb-1">
                {completionData.completedFields.length}
              </h3>
              <p className="text-sm text-gray-600">Fields Completed</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 rounded-lg mb-3">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-orange-600 mb-1">
                {uploadedDocs}
              </h3>
              <p className="text-sm text-gray-600">Documents Uploaded</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Profile Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Your Profile Summary</CardTitle>
          <CardDescription>
            Here's what we collected from your assessment
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Study Preferences
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  Countries:{' '}
                  {formData.preferences.preferredCountries.length > 0
                    ? formData.preferences.preferredCountries.join(', ')
                    : 'Not specified'}
                </li>
                <li>
                  Degree Level:{' '}
                  {formData.preferences.preferredDegreeLevel || 'Not specified'}
                </li>
                <li>Budget: {formData.preferences.budget || 'Not specified'}</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Academic Background
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  Education:{' '}
                  {formData.academics.currentEducationLevel || 'Not specified'}
                </li>
                <li>
                  Field: {formData.academics.fieldOfStudy || 'Not specified'}
                </li>
                <li>GPA: {formData.academics.gpa || 'Not specified'}</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
        <CardHeader>
          <CardTitle>What's Next?</CardTitle>
          <CardDescription>
            Continue your journey with our expert advisors
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white h-auto py-4"
              onClick={onBookAppointment}
            >
              <Calendar className="w-5 h-5 mr-2" />
              <div className="text-left">
                <div className="font-semibold">Book an Appointment</div>
                <div className="text-xs opacity-90">
                  Schedule a call with our advisors
                </div>
              </div>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-indigo-300 hover:bg-indigo-50 h-auto py-4"
              onClick={onStartChat}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              <div className="text-left">
                <div className="font-semibold">Chat with Advisor</div>
                <div className="text-xs opacity-75">
                  Get instant answers to your questions
                </div>
              </div>
            </Button>
          </div>

          <div className="p-4 bg-white rounded-lg border border-indigo-200">
            <h4 className="font-medium text-gray-900 mb-2">
              What happens now?
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>
                  Our advisors will review your profile within 24-48 hours
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>
                  You'll receive personalized university and program recommendations
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>
                  Get guidance on application requirements and deadlines
                </span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

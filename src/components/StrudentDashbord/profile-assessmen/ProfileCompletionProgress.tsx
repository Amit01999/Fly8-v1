import { motion } from 'framer-motion';
import { CheckCircle2, FileText, User, GraduationCap, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ProfileCompletionData } from '@/types/profileAssessment';

interface ProfileCompletionProgressProps {
  completionData: ProfileCompletionData;
}

export default function ProfileCompletionProgress({
  completionData,
}: ProfileCompletionProgressProps) {
  const { percentage, documentsUploaded, totalDocuments } = completionData;
  const isComplete = percentage >= 80;

  return (
    <Card className="border border-gray-200 shadow-sm bg-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-gray-900">
          Profile Completion
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Progress Bar */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Overall Progress</span>
            <span className="text-sm font-bold text-gray-900">{percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <motion.div
              className={`h-2.5 rounded-full ${
                isComplete
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                  : 'bg-gradient-to-r from-blue-500 to-indigo-500'
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            />
          </div>
        </div>

        {/* Section Breakdown */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 bg-blue-100 rounded-lg flex items-center justify-center">
                <User className="h-5 w-5 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Personal Info</span>
            </div>
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 bg-purple-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-purple-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Academic</span>
            </div>
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Globe className="h-5 w-5 text-indigo-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Preferences</span>
            </div>
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 bg-emerald-100 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-emerald-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Documents</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">
              {documentsUploaded}/{totalDocuments}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

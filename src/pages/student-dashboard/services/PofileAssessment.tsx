import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, MessageSquare, Bell, User, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AssessmentForm from '@/components/StrudentDashbord/profile-assessmen/AssessmentForm';
import FileUploadSection from '@/components/StrudentDashbord/profile-assessmen/FileUploadSection';
import AssessmentResults from '@/components/StrudentDashbord/profile-assessmen/AssessmentResult';
import AssessmentChat from '@/components/StrudentDashbord/profile-assessmen/AssessmentChat';

export default function ProfileAssessment() {
  const [activeTab, setActiveTab] = useState('form');
  const [assessmentProgress, setAssessmentProgress] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsSubmitted(true);
    setActiveTab('results');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Profile Assessment
              </h1>
              <p className="text-gray-600">
                Get personalized recommendations for your study abroad journey
              </p>
            </div>
          </div>

          {/* Progress Indicator */}
          {/* <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Assessment Progress
                </span>
                <span className="text-sm font-bold text-blue-600">
                  {assessmentProgress}%
                </span>
              </div>
              <Progress
                value={assessmentProgress}
                className="h-2 bg-slate-300"
              />
            </CardContent>
          </Card> */}
        </div>

        {/* Main Content Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-4 bg-white/60 backdrop-blur-sm border border-gray-200">
            <TabsTrigger
              value="form"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              <User className="h-4 w-4 mr-2" />
              Assessment Form
            </TabsTrigger>
            <TabsTrigger
              value="upload"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload Documents
            </TabsTrigger>
            <TabsTrigger
              value="results"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              <Target className="h-4 w-4 mr-2" />
              Results
            </TabsTrigger>
            <TabsTrigger
              value="chat"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Advisor Chat
            </TabsTrigger>
          </TabsList>

          <TabsContent value="form" className="space-y-6">
            <AssessmentForm onSubmit={handleFormSubmit} />
          </TabsContent>

          <TabsContent value="upload" className="space-y-6">
            <FileUploadSection />
          </TabsContent>

          <TabsContent value="results" className="space-y-6">
            <AssessmentResults isSubmitted={isSubmitted} />
          </TabsContent>

          <TabsContent value="chat" className="space-y-6">
            <AssessmentChat />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}

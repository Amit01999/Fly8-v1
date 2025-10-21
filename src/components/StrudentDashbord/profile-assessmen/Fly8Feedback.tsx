import { motion } from 'framer-motion';
import {
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  TrendingUp,
  FileText,
  GraduationCap,
  Globe,
  Download,
  Sparkles,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { ProfileFeedback, FeedbackItem } from '@/types/profileAssessment';

interface Fly8FeedbackProps {
  feedback: ProfileFeedback;
  profileCompletion: number;
}

const feedbackTypeConfig = {
  good: {
    icon: CheckCircle2,
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    iconColor: 'text-green-500',
    badgeColor: 'bg-green-100 text-green-700',
  },
  'needs-improvement': {
    icon: AlertTriangle,
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    iconColor: 'text-yellow-500',
    badgeColor: 'bg-yellow-100 text-yellow-700',
  },
  'action-required': {
    icon: AlertCircle,
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    iconColor: 'text-red-500',
    badgeColor: 'bg-red-100 text-red-700',
  },
};

const strengthConfig = {
  strong: {
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    message: 'Your profile is strong and competitive!',
  },
  moderate: {
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    message: 'Good progress! A few improvements will make it stronger.',
  },
  'needs-work': {
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    message: "Let's work together to strengthen your profile.",
  },
};

export default function Fly8Feedback({
  feedback,
  profileCompletion,
}: Fly8FeedbackProps) {
  const strengthInfo = strengthConfig[feedback.strength];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Header Card */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
          <CardHeader className="relative z-10">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl text-white mb-2">
                    Personalized Feedback from Fly8
                  </CardTitle>
                  <CardDescription className="text-indigo-100 text-base">
                    AI-powered insights to strengthen your study abroad
                    application
                  </CardDescription>
                </div>
              </div>
              <div className="text-center bg-white/20 backdrop-blur-md rounded-xl px-6 py-4">
                <div className="text-4xl font-bold text-white">
                  {feedback.overallScore}
                </div>
                <div className="text-sm text-indigo-100">Profile Score</div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>

      {/* Profile Strength Summary */}
      <motion.div variants={itemVariants}>
        <Card className={`border-2 ${strengthInfo.bgColor} border-opacity-50`}>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 ${strengthInfo.bgColor} rounded-xl`}>
                <TrendingUp className={`h-6 w-6 ${strengthInfo.color}`} />
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold ${strengthInfo.color} mb-1`}>
                  Profile Strength:{' '}
                  {feedback.strength.charAt(0).toUpperCase() +
                    feedback.strength.slice(1).replace('-', ' ')}
                </h3>
                <p className="text-gray-700">{strengthInfo.message}</p>
              </div>
              <div className={`px-4 py-2 ${strengthInfo.bgColor} rounded-lg`}>
                <span className={`text-2xl font-bold ${strengthInfo.color}`}>
                  {profileCompletion}%
                </span>
                <span className="text-sm text-gray-600 ml-1">Complete</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Feedback Items */}
      <div className="grid gap-4">
        {feedback.items.map((item: FeedbackItem, index: number) => {
          const config = feedbackTypeConfig[item.type];
          const Icon = config.icon;

          return (
            <motion.div key={item.id} variants={itemVariants}>
              <Card
                className={`${config.bgColor} ${config.borderColor} border-2 hover:shadow-lg transition-shadow duration-300`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-white rounded-xl shadow-sm`}>
                      <Icon className={`h-6 w-6 ${config.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </h4>
                        <Badge className={`${config.badgeColor} border-0`}>
                          {item.category}
                        </Badge>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {item.message}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Next Expected Steps */}
      {feedback.nextSteps.length > 0 && (
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-500 rounded-xl">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">What Happens Next?</CardTitle>
                  <CardDescription>
                    Expected timeline and next steps in your journey
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {feedback.nextSteps.map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm"
                  >
                    <div className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 leading-relaxed">
                      {step}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Advisor Message */}
      {feedback.advisorMessage && (
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500 rounded-full">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-purple-900 mb-2">
                    Message from Your Advisor
                  </h4>
                  <p className="text-gray-700 italic leading-relaxed">
                    "{feedback.advisorMessage}"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );
}

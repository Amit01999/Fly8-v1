import { motion } from 'framer-motion';
import {
  Target,
  MessageSquare,
  Calendar,
  FileText,
  Users,
  Compass,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { NextStepAction } from '@/types/profileAssessment';

interface NextStepsProps {
  profileCompletion: number;
  onReviewFeedback?: () => void;
  onBookAppointment?: () => void;
  onStartChat?: () => void;
  onViewEvents?: () => void;
  onCompleteProfile?: () => void;
  customActions?: NextStepAction[];
}

export default function NextSteps({
  profileCompletion,
  onReviewFeedback,
  onBookAppointment,
  onStartChat,
  onViewEvents,
  onCompleteProfile,
  customActions,
}: NextStepsProps) {
  const isComplete = profileCompletion >= 80;
  const completionPercentage = Math.min(profileCompletion, 100);

  const defaultActions: NextStepAction[] = [
    {
      id: 'review-feedback',
      title: 'Request Review of Your Assessment',
      description: 'Ask our advisors to review your submitted profile and provide feedback',
      icon: Target,
      action: onReviewFeedback || (() => {}),
      variant: 'primary',
    },
    {
      id: 'book-session',
      title: 'Book a Session with an Advisor',
      description: 'Schedule a one-on-one consultation to discuss your goals',
      icon: Calendar,
      action: onBookAppointment || (() => {}),
      variant: 'secondary',
    },
    {
      id: 'chat-advisor',
      title: 'Chat with Advisor',
      description: 'Get instant answers to your questions via live chat',
      icon: MessageSquare,
      action: onStartChat || (() => {}),
      variant: 'outline',
    },
    {
      id: 'view-events',
      title: 'See Upcoming Events & Webinars',
      description: 'Join our community events and learn from experts',
      icon: Users,
      action: onViewEvents || (() => {}),
      variant: 'outline',
    },
  ];

  const actions = customActions || defaultActions;

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

  const getVariantStyles = (variant?: string) => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 shadow-md hover:shadow-xl';
      case 'secondary':
        return 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0 shadow-md hover:shadow-xl';
      default:
        return 'bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 hover:border-blue-400 shadow-sm hover:shadow-md';
    }
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
        <Card
          className={`border-0 shadow-xl ${
            isComplete
              ? 'bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500'
              : 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500'
          }`}
        >
          <CardHeader className="text-white">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
                  {isComplete ? (
                    <CheckCircle className="h-8 w-8 text-white" />
                  ) : (
                    <Compass className="h-8 w-8 text-white" />
                  )}
                </div>
                <div>
                  <CardTitle className="text-3xl text-white mb-2">
                    {isComplete
                      ? "Your Profile is Complete — Let's Move Forward!"
                      : `Your Profile is ${completionPercentage}% Complete`}
                  </CardTitle>
                  <CardDescription className="text-white/90 text-base">
                    {isComplete
                      ? 'Great job! Here are your next steps to success'
                      : `Complete your profile to unlock personalized recommendations (${
                          100 - completionPercentage
                        }% remaining)`}
                  </CardDescription>
                </div>
              </div>
            </div>
          </CardHeader>
          {!isComplete && (
            <CardContent className="pb-6">
              <div className="bg-white/20 backdrop-blur-md rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Progress</span>
                  <span className="text-white font-bold">
                    {completionPercentage}%
                  </span>
                </div>
                <div className="w-full bg-white/30 rounded-full h-3">
                  <motion.div
                    className="bg-white rounded-full h-3 shadow-md"
                    initial={{ width: 0 }}
                    animate={{ width: `${completionPercentage}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      </motion.div>

      {/* Incomplete Profile Warning */}
      {!isComplete && (
        <motion.div variants={itemVariants}>
          <Card className="bg-amber-50 border-amber-200 border-2">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-xl">
                  <FileText className="h-6 w-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-amber-900 mb-2">
                    Complete Your Profile for Better Recommendations
                  </h4>
                  <p className="text-amber-800 mb-3">
                    Your profile is <strong>{completionPercentage}%</strong>{' '}
                    complete. Filling in the remaining{' '}
                    <strong>{100 - completionPercentage}%</strong> will help us
                    provide more accurate university matches and personalized
                    guidance.
                  </p>
                  <Button
                    className="bg-amber-500 hover:bg-amber-600 text-white"
                    onClick={() => {
                      if (onCompleteProfile) {
                        onCompleteProfile();
                      } else {
                        // Fallback: scroll to top
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                  >
                    Complete Profile Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Next Steps Actions */}
      <motion.div variants={itemVariants}>
        <Card className="border border-gray-200 shadow-lg bg-white">
          <CardHeader className="border-b border-gray-200 bg-gradient-to-r from-slate-50 to-gray-50">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg shadow-sm">
                <Compass className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-gray-900">Your Next Steps</CardTitle>
                <CardDescription className="text-gray-600">
                  Choose an action to continue your study abroad journey
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {actions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <motion.div
                    key={action.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className="h-full"
                  >
                    <button
                      onClick={action.action}
                      className={`w-full h-full p-5 rounded-lg flex flex-col items-start gap-3 ${getVariantStyles(
                        action.variant
                      )} transition-all duration-300 text-left group`}
                    >
                      <div className="flex items-start gap-3 w-full">
                        <div
                          className={`p-3 rounded-lg flex-shrink-0 ${
                            action.variant === 'outline'
                              ? 'bg-blue-50 group-hover:bg-blue-100'
                              : 'bg-white/20 backdrop-blur-sm group-hover:bg-white/30'
                          } transition-colors duration-300`}
                        >
                          <Icon
                            className={`h-6 w-6 ${
                              action.variant === 'outline'
                                ? 'text-blue-600'
                                : 'text-white'
                            }`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-base mb-1.5 leading-tight">
                            {action.title}
                          </div>
                          <div
                            className={`text-sm leading-relaxed ${
                              action.variant === 'outline'
                                ? 'text-gray-600'
                                : 'text-white/90'
                            }`}
                          >
                            {action.description}
                          </div>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Timeline Info */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
          <CardHeader>
            <CardTitle className="text-xl">What to Expect Next</CardTitle>
            <CardDescription>
              Here's the typical timeline for your application journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  time: 'Within 24-48 hours',
                  action: 'Advisor Review',
                  description:
                    'Our expert advisors will review your profile and prepare personalized recommendations',
                },
                {
                  time: 'Day 3-5',
                  action: 'University Matching',
                  description:
                    'Receive a curated list of universities and programs that match your profile',
                },
                {
                  time: 'Week 1-2',
                  action: 'Application Strategy',
                  description:
                    'Work with your advisor to create a customized application timeline and strategy',
                },
                {
                  time: 'Ongoing',
                  action: 'Continuous Support',
                  description:
                    'Get help with applications, visa processing, and pre-departure preparation',
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="flex gap-4 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-full text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    {index < 3 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-indigo-300 to-purple-300 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-2">
                    {/* <div className="text-xs text-indigo-600 font-semibold mb-1">
                      {step.time}
                    </div> */}
                    <div className="text-base font-semibold text-gray-900 mb-1">
                      {step.action}
                    </div>
                    <div className="text-sm text-gray-600">
                      {step.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

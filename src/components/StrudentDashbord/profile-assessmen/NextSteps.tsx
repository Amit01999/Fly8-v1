import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Target,
  MessageSquare,
  Calendar,
  Users,
  Compass,
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Sparkles,
  AlertCircle,
  TrendingUp,
  Zap,
  Star,
  BookOpen,
  Video,
  Clock,
  Award,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type {
  NextStepAction,
  ProfileFeedback,
} from '@/types/profileAssessment';
import {
  getStudentFeedback,
  requestFeedbackReview,
} from '@/services/operations/feedbackAPI';
import FeedbackModal from './FeedbackModal';
import FeedbackRequestModal from './FeedbackRequestModal';
import BookingModal from './BookingModal';
import ChatModal from './ChatModal';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

interface NextStepsProps {
  profileCompletion: number;
  studentId?: string;
  onReviewFeedback?: () => void;
  onBookAppointment?: () => void;
  onStartChat?: () => void;
  onCompleteProfile?: () => void;
  customActions?: NextStepAction[];
}

export default function NextSteps({
  profileCompletion,
  studentId,
  onReviewFeedback,
  onBookAppointment,
  onStartChat,
  onCompleteProfile,
  customActions,
}: NextStepsProps) {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState<ProfileFeedback | null>(null);
  const [hasFeedbackAvailable, setHasFeedbackAvailable] = useState(false);
  const [isRequestingFeedback, setIsRequestingFeedback] = useState(false);
  const [isFetchingFeedback, setIsFetchingFeedback] = useState(false);

  // Modal states
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [isFeedbackRequestModalOpen, setIsFeedbackRequestModalOpen] =
    useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  const isComplete = profileCompletion >= 80;
  const completionPercentage = Math.min(profileCompletion, 100);

  // Check for existing feedback on mount
  useEffect(() => {
    const checkFeedback = async () => {
      if (!studentId) {
        console.error('No studentId provided');
        return;
      }
      setIsFetchingFeedback(true);
      try {
        const feedbackData = await getStudentFeedback(studentId);
        if (feedbackData) {
          setFeedback(feedbackData);
          setHasFeedbackAvailable(true);
        }
      } catch (error) {
        console.error('Error fetching feedback:', error);
      } finally {
        setIsFetchingFeedback(false);
      }
    };
    checkFeedback();
  }, [studentId]);

  // Handle review feedback action
  const handleReviewFeedback = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (hasFeedbackAvailable && feedback) {
      setIsFeedbackModalOpen(true);
    } else {
      setIsFeedbackRequestModalOpen(true);
      onReviewFeedback?.();
    }
  };

  const handleRequestFeedback = async (message?: string) => {
    if (!studentId) {
      toast.error('Student ID not found. Please log in again.');
      return;
    }

    setIsRequestingFeedback(true);
    try {
      const result = await requestFeedbackReview(studentId, message);
      if (result.success) {
        toast.success(
          '✅ Feedback request submitted! Our advisors will review your profile within 24-48 hours.',
          {
            duration: 5000,
            icon: '🎯',
          }
        );
        setIsFeedbackRequestModalOpen(false);
      }
    } catch (error: any) {
      console.error('Error requesting feedback:', error);
      toast.error(
        error.response?.data?.message ||
          'Failed to submit feedback request. Please try again.',
        {
          duration: 4000,
        }
      );
    } finally {
      setIsRequestingFeedback(false);
    }
  };

  const handleBookAppointment = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    e?.stopPropagation();
    console.log('Book Appointment clicked');
    try {
      if (onBookAppointment) {
        onBookAppointment();
      } else {
        setIsBookingModalOpen(true);
      }
    } catch (error) {
      console.error('Error handling book appointment:', error);
      toast.error('Failed to open booking modal. Please try again.');
    }
  };

  const handleStartChat = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    e?.stopPropagation();
    console.log('Start Chat clicked');
    try {
      if (onStartChat) {
        onStartChat();
      } else {
        setIsChatModalOpen(true);
      }
    } catch (error) {
      console.error('Error handling start chat:', error);
      toast.error('Failed to open chat modal. Please try again.');
    }
  };

  const handleExplorePrograms = () => {
    navigate('/programs');
  };

  const handleExploreEvents = () => {
    navigate('/past-event');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="w-full overflow-x-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4 w-full"
      >
        {/* Hero Section - Profile Status */}
        <motion.div variants={itemVariants} className="w-full">
          <Card
            className={`relative overflow-hidden border-0 shadow-2xl w-full ${
              isComplete
                ? 'bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500'
                : 'bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500'
            }`}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 opacity-20"></div>
            </div>

            <CardContent className="relative z-10 p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-start gap-4 flex-1">
                  <motion.div
                    initial={{ rotate: -20, scale: 0.8 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring', bounce: 0.4 }}
                    className="p-4 bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30"
                  >
                    {isComplete ? (
                      <CheckCircle className="h-10 w-10 md:h-12 md:w-12 text-white drop-shadow-lg" />
                    ) : (
                      <Compass className="h-10 w-10 md:h-12 md:w-12 text-white drop-shadow-lg" />
                    )}
                  </motion.div>

                  <div className="flex-1">
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-2 drop-shadow-md">
                      {isComplete
                        ? '🎉 Profile Complete!'
                        : `${completionPercentage}% Complete`}
                    </h2>
                    <p className="text-white/90 text-sm md:text-base font-medium">
                      {isComplete
                        ? 'Excellent! Your profile is ready for advisor review'
                        : `${
                            100 - completionPercentage
                          }% remaining to unlock full potential`}
                    </p>

                    {!isComplete && (
                      <div className="mt-4 bg-white/20 backdrop-blur-md rounded-full p-1.5">
                        <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-white via-yellow-200 to-white rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${completionPercentage}%` }}
                            transition={{
                              duration: 1.5,
                              ease: 'easeOut',
                              delay: 0.5,
                            }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                              animate={{ x: ['-100%', '200%'] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'linear',
                              }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {isComplete && (
                    <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30 px-4 py-2 text-sm font-bold shadow-lg">
                      <Star className="h-4 w-4 mr-1 fill-white" />
                      Ready
                    </Badge>
                  )}
                  {hasFeedbackAvailable && (
                    <Badge className="bg-green-400/90 backdrop-blur-md text-white border-green-300/30 px-4 py-2 text-sm font-bold shadow-lg animate-pulse">
                      <Sparkles className="h-4 w-4 mr-1" />
                      New Feedback
                    </Badge>
                  )}
                  {isFetchingFeedback && (
                    <Badge className="bg-blue-400/90 backdrop-blur-md text-white border-blue-300/30 px-4 py-2 text-sm font-bold shadow-lg">
                      <Clock className="h-4 w-4 mr-1 animate-spin" />
                      Loading...
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {!isComplete && (
          <motion.div variants={itemVariants} className="w-full">
            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 shadow-lg overflow-hidden w-full">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="p-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-md"
                  >
                    <AlertCircle className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-bold text-amber-900 mb-1.5">
                      Complete your profile to get personalized recommendations
                    </h4>
                    <p className="text-amber-800 text-sm mb-3">
                      A complete profile helps us match you with the best
                      universities and programs.
                    </p>
                    <Button
                      type="button"
                      variant="default"
                      size="sm"
                      className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-md"
                      onClick={() => {
                        try {
                          if (onCompleteProfile) {
                            onCompleteProfile();
                          } else {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        } catch (error) {
                          console.error('Error completing profile:', error);
                          toast.error(
                            'Failed to navigate to profile completion. Please try again.'
                          );
                        }
                      }}
                    >
                      Complete Now
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <motion.div variants={itemVariants} className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <motion.div
              className="lg:col-span-2 w-full"
              variants={itemVariants}
            >
              <Card className="h-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 border-0 shadow-xl hover:shadow-2xl transition-all group overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    {hasFeedbackAvailable && (
                      <Badge className="bg-green-400 text-white border-0 shadow-lg animate-bounce">
                        New
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {hasFeedbackAvailable
                      ? 'View Your Feedback'
                      : 'Request Profile Review'}
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    {hasFeedbackAvailable
                      ? 'Your advisor has reviewed your profile. See personalized feedback and recommendations.'
                      : 'Get expert feedback from our advisors on your profile and application strategy.'}
                  </p>

                  <Button
                    type="button"
                    variant="default"
                    className="bg-white/20 hover:bg-white/30 text-white font-semibold flex items-center gap-2"
                    onClick={handleReviewFeedback}
                    disabled={isRequestingFeedback}
                  >
                    {isRequestingFeedback ? (
                      <>
                        <Clock className="h-5 w-5 animate-spin" />
                        Requesting...
                      </>
                    ) : (
                      <>
                        {hasFeedbackAvailable ? 'View Details' : 'Request Now'}
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div className="w-full" variants={itemVariants}>
              <Card className="h-full bg-gradient-to-br from-emerald-500 to-teal-600 border-0 shadow-xl hover:shadow-2xl transition-all group overflow-hidden">
                <CardContent className="p-6">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 w-fit">
                    <Calendar className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Book Session
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    Schedule 1-on-1 consultation with an advisor
                  </p>
                  <Button
                    type="button"
                    variant="default"
                    onClick={e => handleBookAppointment(e)}
                    style={{ pointerEvents: 'auto' }}
                    className="bg-white/20 hover:bg-white/30 text-white font-semibold flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    Schedule
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div className="w-full" variants={itemVariants}>
              <Card className="h-full bg-gradient-to-br from-pink-500 to-rose-600 border-0 shadow-xl hover:shadow-2xl transition-all group overflow-hidden">
                <CardContent className="p-6">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 w-fit">
                    <MessageSquare className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Live Chat
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    Get instant answers from our advisors
                  </p>
                  <Button
                    type="button"
                    variant="default"
                    onClick={e => handleStartChat(e)}
                    style={{ pointerEvents: 'auto' }}
                    className="bg-white/20 hover:bg-white/30 text-white font-semibold flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Online
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="lg:row-span-2 w-full"
              variants={itemVariants}
            >
              <Card
                className="h-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 border-0 shadow-xl hover:shadow-2xl transition-all group overflow-hidden cursor-pointer"
                onClick={handleExplorePrograms}
              >
                <CardContent className="p-6 flex flex-col h-full pointer-events-none">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 w-fit">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Explore Programs
                  </h3>
                  <p className="text-white/80 text-sm mb-6">
                    Discover universities and programs that match your profile
                    and goals
                  </p>
                  <div className="mt-auto space-y-3">
                    <div className="flex items-center gap-2 text-white/70 text-xs">
                      <Award className="h-4 w-4" />
                      <span>500+ Programs</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70 text-xs">
                      <Users className="h-4 w-4" />
                      <span>100+ Universities</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70 text-xs">
                      <Star className="h-4 w-4" />
                      <span>Top Rankings</span>
                    </div>
                    <div className="flex items-center text-white font-semibold pt-4 border-t border-white/20">
                      <span>Explore Now</span>
                      <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div className="w-full" variants={itemVariants}>
              <Card
                className="h-full bg-gradient-to-br from-orange-500 to-red-600 border-0 shadow-xl hover:shadow-2xl transition-all group overflow-hidden cursor-pointer"
                onClick={handleExploreEvents}
              >
                <CardContent className="p-6 pointer-events-none">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 w-fit">
                    <Video className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Events</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Join webinars and community events
                  </p>
                  <div className="flex items-center text-white font-semibold">
                    <span>View All</span>
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div className="w-full" variants={itemVariants}>
              <Card className="h-full bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all overflow-hidden">
                <CardContent className="p-6">
                  <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl mb-4 w-fit">
                    <TrendingUp className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Your Progress
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Profile</span>
                      <span className="font-bold text-gray-900">
                        {completionPercentage}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Status</span>
                      <Badge
                        variant={isComplete ? 'default' : 'outline'}
                        className="text-xs"
                      >
                        {isComplete ? 'Complete' : 'In Progress'}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div className="w-full" variants={itemVariants}>
              <Card
                className="h-full bg-gradient-to-br from-cyan-500 to-blue-600 border-0 shadow-xl hover:shadow-2xl transition-all group overflow-hidden cursor-pointer"
                onClick={() => navigate('/student-dashboard/blogs')}
              >
                <CardContent className="p-6 pointer-events-none">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 w-fit">
                    <BookOpen className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Resources
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    Guides, tips & preparation materials
                  </p>
                  <div className="flex items-center text-white font-semibold">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full">
          <Card className="bg-white border-2 border-gray-200 shadow-xl overflow-hidden w-full">
            <CardHeader className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-b-2 border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-xl md:text-2xl font-bold text-gray-900">
                  What Happens Next
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                {[
                  {
                    icon: Target,
                    title: 'Profile Review',
                    description: 'Expert advisor analyzes your profile',
                    color: 'from-blue-500 to-indigo-500',
                  },
                  {
                    icon: GraduationCap,
                    title: 'University Matching',
                    description: 'Get personalized recommendations',
                    color: 'from-emerald-500 to-teal-500',
                  },
                  {
                    icon: Target,
                    title: 'Application Strategy',
                    description: 'Customized timeline and plan',
                    color: 'from-violet-500 to-purple-500',
                  },
                  {
                    icon: Award,
                    title: 'Ongoing Support',
                    description: 'Applications, visa & departure help',
                    color: 'from-orange-500 to-red-500',
                  },
                ].map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div
                          className={`p-3 bg-gradient-to-br ${step.color} rounded-full mb-3 shadow-lg`}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1.5 text-sm">
                          {step.title}
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      {index < 3 && (
                        <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isFeedbackModalOpen && (
          <FeedbackModal
            isOpen={isFeedbackModalOpen}
            onClose={() => setIsFeedbackModalOpen(false)}
            feedback={feedback}
            isLoading={false}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isFeedbackRequestModalOpen && (
          <FeedbackRequestModal
            isOpen={isFeedbackRequestModalOpen}
            onClose={() => setIsFeedbackRequestModalOpen(false)}
            onSubmit={handleRequestFeedback}
            isSubmitting={isRequestingFeedback}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isBookingModalOpen && (
          <BookingModal
            isOpen={isBookingModalOpen}
            onClose={() => setIsBookingModalOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isChatModalOpen && (
          <ChatModal
            isOpen={isChatModalOpen}
            onClose={() => setIsChatModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

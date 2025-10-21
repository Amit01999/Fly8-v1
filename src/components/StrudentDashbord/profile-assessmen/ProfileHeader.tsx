import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, User, Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProfileHeaderProps {
  profileCompletion: number;
  onReviewFeedback?: () => void;
  onBookAppointment?: () => void;
  onChatWithAdvisor?: () => void;
}

export default function ProfileHeader({
  profileCompletion,
  onReviewFeedback,
  onBookAppointment,
  onChatWithAdvisor,
}: ProfileHeaderProps) {
  const isComplete = profileCompletion >= 80;

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-white border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Left Section - Welcome & Status */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                Dashboard
              </h1>
              <div className="flex items-center gap-3">
                <Badge
                  className={`${
                    isComplete
                      ? 'bg-emerald-100 text-emerald-700 border-0'
                      : 'bg-blue-100 text-blue-700 border-0'
                  } px-3 py-1 text-xs font-semibold`}
                >
                  {isComplete ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5 mr-1.5" />
                      Profile Complete
                    </>
                  ) : (
                    <>
                      <TrendingUp className="w-3.5 h-3.5 mr-1.5" />
                      {profileCompletion}% Complete
                    </>
                  )}
                </Badge>
                <span className="text-sm text-gray-500 hidden sm:inline">
                  Welcome back
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Notifications */}
          <div className="flex items-center gap-3">
            <button className="relative p-2.5 hover:bg-gray-100 rounded-full transition-colors duration-200">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

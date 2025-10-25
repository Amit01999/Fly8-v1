import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, AlertCircle, Sparkles } from 'lucide-react';
import type { ProfileFeedback, FeedbackItem } from '@/types/profileAssessment';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  feedback: ProfileFeedback | null;
  isLoading?: boolean;
}

export default function FeedbackModal({
  isOpen,
  onClose,
  feedback,
  isLoading = false,
}: FeedbackModalProps) {
  const getStrengthConfig = (strength: string) => {
    switch (strength) {
      case 'strong':
        return {
          label: 'Strong Profile',
          color: 'bg-gradient-to-r from-green-500 to-emerald-500',
          icon: CheckCircle,
        };
      case 'moderate':
        return {
          label: 'Good Profile',
          color: 'bg-gradient-to-r from-blue-500 to-indigo-500',
          icon: Sparkles,
        };
      case 'needs-work':
        return {
          label: 'Needs Improvement',
          color: 'bg-gradient-to-r from-orange-500 to-amber-500',
          icon: AlertCircle,
        };
      default:
        return {
          label: 'Profile Assessment',
          color: 'bg-gradient-to-r from-gray-500 to-slate-500',
          icon: AlertCircle,
        };
    }
  };

  const getFeedbackIcon = (type: string) => {
    switch (type) {
      case 'good':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'needs-improvement':
        return <AlertTriangle className="h-5 w-5 text-amber-600" />;
      case 'action-required':
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      default:
        return null;
    }
  };

  const getFeedbackBgColor = (type: string) => {
    switch (type) {
      case 'good':
        return 'bg-green-50 border-green-200';
      case 'needs-improvement':
        return 'bg-amber-50 border-amber-200';
      case 'action-required':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  if (isLoading) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (!feedback) {
    return null;
  }

  const strengthConfig = getStrengthConfig(feedback.strength);
  const StrengthIcon = strengthConfig.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Profile Assessment Feedback
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Review from your academic advisor
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Overall Score Header */}
          <div className={`${strengthConfig.color} rounded-2xl p-6 text-white`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
                  <StrengthIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{strengthConfig.label}</h3>
                  <p className="text-white/90 text-sm mt-1">
                    Overall Score: {feedback.overallScore}/100
                  </p>
                </div>
              </div>
              <div className="text-5xl font-bold">{feedback.overallScore}</div>
            </div>
          </div>

          {/* Advisor Message */}
          {feedback.advisorMessage && (
            <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Sparkles className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-1">
                    Message from Your Advisor
                  </h4>
                  <p className="text-indigo-800 text-sm leading-relaxed">
                    {feedback.advisorMessage}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Feedback Items */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 text-lg">
              Detailed Feedback
            </h4>
            <AnimatePresence>
              {feedback.items.map((item: FeedbackItem, index: number) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${getFeedbackBgColor(
                    item.type
                  )} border-2 rounded-xl p-4`}
                >
                  <div className="flex items-start gap-3">
                    {getFeedbackIcon(item.type)}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="font-semibold text-gray-900">
                          {item.title}
                        </h5>
                        <Badge
                          variant="outline"
                          className="text-xs bg-white/50"
                        >
                          {item.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {item.message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Next Steps */}
          {feedback.nextSteps && feedback.nextSteps.length > 0 && (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5">
              <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Recommended Next Steps
              </h4>
              <ul className="space-y-2">
                {feedback.nextSteps.map((step: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-2 text-sm text-blue-900"
                  >
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>{step}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

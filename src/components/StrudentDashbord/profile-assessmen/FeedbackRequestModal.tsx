import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageSquare, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface FeedbackRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (message: string) => Promise<void>;
  isSubmitting?: boolean;
}

export default function FeedbackRequestModal({
  isOpen,
  onClose,
  onSubmit,
  isSubmitting = false,
}: FeedbackRequestModalProps) {
  const [message, setMessage] = useState('');
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= maxChars) {
      setMessage(text);
      setCharCount(text.length);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isSubmitting) {
      await onSubmit(message);
      setMessage('');
      setCharCount(0);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setMessage('');
      setCharCount(0);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header with gradient */}
          <DialogHeader className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 pb-8">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/20 backdrop-blur-sm rounded-xl">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <DialogTitle className="text-2xl font-bold text-white mb-1">
                    Request Profile Review
                  </DialogTitle>
                  <DialogDescription className="text-white/90 text-sm">
                    Tell us what you'd like feedback on
                  </DialogDescription>
                </div>
              </div>
              {/* <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                disabled={isSubmitting}
                className="text-white hover:bg-white/20 rounded-full h-8 w-8"
              >
                <X className="h-5 w-5" />
              </Button> */}
            </div>
          </DialogHeader>

          {/* Form content */}
          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="feedback-message"
                  className="text-sm font-semibold text-gray-700"
                >
                  What would you like feedback on? (Optional)
                </Label>
                <p className="text-xs text-gray-500">
                  Share any specific areas you'd like our advisors to focus on,
                  or leave blank for a general review.
                </p>
                <Textarea
                  id="feedback-message"
                  placeholder="e.g., I'd like feedback on my university choices, essay topics, test scores, or overall application strategy..."
                  value={message}
                  onChange={handleMessageChange}
                  disabled={isSubmitting}
                  className="min-h-[150px] resize-none text-sm focus:ring-2 focus:ring-indigo-500 border-gray-300"
                />
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500">
                    {charCount === 0
                      ? 'Optional'
                      : `${charCount} / ${maxChars} characters`}
                  </span>
                  {charCount >= maxChars && (
                    <span className="text-amber-600 font-medium">
                      Character limit reached
                    </span>
                  )}
                </div>
              </div>

              {/* Info box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">
                  What happens next?
                </h4>
                <ul className="space-y-1.5 text-xs text-blue-800">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Our expert advisors will review your profile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>
                      You'll receive personalized feedback within 24-48 hours
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>We'll notify you when your feedback is ready</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isSubmitting}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Submit Request
                  </>
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

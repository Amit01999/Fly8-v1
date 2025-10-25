import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Video, MessageSquare, User, CheckCircle, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import toast from 'react-hot-toast';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedType, setSelectedType] = useState<'video' | 'chat'>('video');
  const [isBooked, setIsBooked] = useState(false);
  const [isBooking, setIsBooking] = useState(false);

  // Generate available dates (next 10 days, excluding weekends)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let daysAdded = 0;
    let currentDate = new Date(today);

    while (daysAdded < 10) {
      currentDate.setDate(today.getDate() + daysAdded + 1);
      const dayOfWeek = currentDate.getDay();

      // Skip weekends
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        const dateStr = currentDate.toISOString().split('T')[0];
        const label = currentDate.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric'
        });
        dates.push({ date: dateStr, label });
      }
      daysAdded++;
    }
    return dates.slice(0, 5);
  };

  const availableDates = getAvailableDates();

  const availableTimes = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
  ];

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) {
      toast.error('Please select both date and time');
      return;
    }

    setIsBooking(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Here you would make an actual API call:
      // await apiConnector('POST', '/student/bookings', {
      //   date: selectedDate,
      //   time: selectedTime,
      //   type: selectedType
      // });

      setIsBooked(true);

      toast.success(
        `Session booked for ${availableDates.find(d => d.date === selectedDate)?.label} at ${selectedTime}`,
        {
          duration: 5000,
          icon: '📅',
        }
      );

      // Close modal after showing success
      setTimeout(() => {
        onClose();
        resetForm();
      }, 2000);

    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Failed to book session. Please try again.', {
        duration: 4000,
      });
      setIsBooking(false);
    }
  };

  const resetForm = () => {
    setTimeout(() => {
      setIsBooked(false);
      setSelectedDate('');
      setSelectedTime('');
      setSelectedType('video');
      setIsBooking(false);
    }, 300);
  };

  const handleClose = () => {
    onClose();
    resetForm();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <AnimatePresence mode="wait">
          {isBooked ? (
            <motion.div
              key="success"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.2,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15
                }}
                className="mx-auto w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-2xl"
              >
                <CheckCircle className="h-10 w-10 text-white" />
              </motion.div>
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-gray-900 mb-3"
              >
                Session Booked!
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 mb-2"
              >
                You'll receive a confirmation email with the meeting link shortly.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-lg mt-4"
              >
                <Calendar className="h-4 w-4" />
                {availableDates.find(d => d.date === selectedDate)?.label} at {selectedTime}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  Book a Session with Advisor
                </DialogTitle>
                <DialogDescription className="text-gray-600">
                  Schedule a one-on-one consultation to discuss your goals
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                {/* Advisor Info */}
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-xl p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Academic Advisor</h4>
                      <p className="text-sm text-gray-600">
                        Expert in study abroad counseling
                      </p>
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-green-300">
                      Available
                    </Badge>
                  </div>
                </div>

                {/* Session Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Session Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedType('video')}
                      className={`p-4 rounded-xl border-2 flex items-center gap-3 transition-all ${
                        selectedType === 'video'
                          ? 'border-blue-500 bg-blue-50 shadow-md'
                          : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        selectedType === 'video' ? 'bg-blue-100' : 'bg-gray-100'
                      }`}>
                        <Video
                          className={`h-5 w-5 ${
                            selectedType === 'video' ? 'text-blue-600' : 'text-gray-600'
                          }`}
                        />
                      </div>
                      <div className="text-left flex-1">
                        <div
                          className={`font-semibold text-sm ${
                            selectedType === 'video' ? 'text-blue-900' : 'text-gray-900'
                          }`}
                        >
                          Video Call
                        </div>
                        <div className="text-xs text-gray-600">Face-to-face</div>
                      </div>
                      {selectedType === 'video' && (
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      )}
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedType('chat')}
                      className={`p-4 rounded-xl border-2 flex items-center gap-3 transition-all ${
                        selectedType === 'chat'
                          ? 'border-blue-500 bg-blue-50 shadow-md'
                          : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        selectedType === 'chat' ? 'bg-blue-100' : 'bg-gray-100'
                      }`}>
                        <MessageSquare
                          className={`h-5 w-5 ${
                            selectedType === 'chat' ? 'text-blue-600' : 'text-gray-600'
                          }`}
                        />
                      </div>
                      <div className="text-left flex-1">
                        <div
                          className={`font-semibold text-sm ${
                            selectedType === 'chat' ? 'text-blue-900' : 'text-gray-900'
                          }`}
                        >
                          Chat Session
                        </div>
                        <div className="text-xs text-gray-600">Text-based</div>
                      </div>
                      {selectedType === 'chat' && (
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      )}
                    </motion.button>
                  </div>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-3">
                    <Calendar className="h-4 w-4" />
                    Select Date
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {availableDates.map((item) => (
                      <motion.button
                        key={item.date}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedDate(item.date)}
                        className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                          selectedDate === item.date
                            ? 'border-blue-500 bg-blue-50 text-blue-900 shadow-md'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                        }`}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-3">
                    <Clock className="h-4 w-4" />
                    Select Time
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {availableTimes.map((time) => (
                      <motion.button
                        key={time}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                          selectedTime === time
                            ? 'border-blue-500 bg-blue-50 text-blue-900 shadow-md'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                        }`}
                      >
                        {time}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Booking Summary */}
                <AnimatePresence>
                  {selectedDate && selectedTime && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5"
                    >
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Booking Summary
                      </h4>
                      <div className="space-y-2 text-sm text-blue-800">
                        <div className="flex justify-between">
                          <span className="text-blue-700">Type:</span>
                          <span className="font-semibold">
                            {selectedType === 'video' ? 'Video Call' : 'Chat Session'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-700">Date:</span>
                          <span className="font-semibold">
                            {availableDates.find((d) => d.date === selectedDate)?.label}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-700">Time:</span>
                          <span className="font-semibold">{selectedTime}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    onClick={handleClose}
                    variant="outline"
                    className="flex-1"
                    disabled={isBooking}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                  <Button
                    onClick={handleBooking}
                    disabled={!selectedDate || !selectedTime || isBooking}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg"
                  >
                    {isBooking ? (
                      <>
                        <Clock className="h-4 w-4 mr-2 animate-spin" />
                        Booking...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Confirm Booking
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Calendar,
  Video,
  Mail,
  Phone,
  Send,
  Star,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import type { AdvisorInfo } from '@/types/profileAssessment';

// Mock advisor data - replace with actual API call
const ADVISORS: AdvisorInfo[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Senior Education Advisor',
    specialization: 'USA & Canada',
    avatar: 'SJ',
    availability: 'available',
    expertise: [
      'University Selection',
      'Application Strategy',
      'Scholarship Guidance',
    ],
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    role: 'Academic Counselor',
    specialization: 'UK & Europe',
    avatar: 'MC',
    availability: 'busy',
    expertise: ['PhD Programs', 'Research Opportunities', 'Visa Support'],
  },
  {
    id: '3',
    name: 'Priya Sharma',
    role: 'Student Success Manager',
    specialization: 'Australia & Asia',
    avatar: 'PS',
    availability: 'available',
    expertise: ['Career Planning', 'Test Preparation', 'Document Review'],
  },
];

export default function AdvisorSection() {
  const [activeTab, setActiveTab] = useState<'chat' | 'appointment'>('chat');
  const [message, setMessage] = useState('');
  const [appointmentData, setAppointmentData] = useState({
    date: '',
    time: '',
    topic: '',
  });

  const handleSendMessage = () => {
    if (message.trim()) {
      // TODO: Integrate with actual chat API
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleBookAppointment = () => {
    // TODO: Integrate with actual appointment booking API
    console.log('Booking appointment:', appointmentData);
  };

  const getAvailabilityBadge = (availability: string) => {
    switch (availability) {
      case 'available':
        return (
          <Badge className="bg-green-100 text-green-700 border-0">
            Available
          </Badge>
        );
      case 'busy':
        return (
          <Badge className="bg-yellow-100 text-yellow-700 border-0">Busy</Badge>
        );
      case 'offline':
        return (
          <Badge className="bg-gray-100 text-gray-700 border-0">Offline</Badge>
        );
      default:
        return null;
    }
  };

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
      {/* Header */}
      <motion.div variants={itemVariants}>
        <Card className="border border-gray-200 shadow-sm bg-white">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg shadow-sm">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Connect with Our Advisors
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Get expert guidance for your study abroad journey
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>

      {/* Main Content */}
      <Tabs
        value={activeTab}
        onValueChange={v => setActiveTab(v as 'chat' | 'appointment')}
      >
        <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1">
          <TabsTrigger value="chat" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <MessageSquare className="w-4 h-4 mr-2" />
            Chat Now
          </TabsTrigger>
          <TabsTrigger value="appointment" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Calendar className="w-4 h-4 mr-2" />
            Book Appointment
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="space-y-4 mt-4">
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="border-b border-gray-200 bg-gray-50">
              <CardTitle className="text-lg font-bold text-gray-900">Chat with an Advisor</CardTitle>
              <CardDescription className="text-gray-600">
                Send us a message and we'll get back to you shortly
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              {/* Quick Actions */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  {
                    icon: Mail,
                    label: 'Email Us',
                    value: 'I have a question about...',
                  },
                  {
                    icon: Phone,
                    label: 'Call Request',
                    value: 'Please call me to discuss...',
                  },
                  {
                    icon: Video,
                    label: 'Video Call',
                    value: 'I would like to schedule a video call for...',
                  },
                  {
                    icon: Calendar,
                    label: 'Schedule',
                    value: 'I want to book an appointment for...',
                  },
                ].map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-auto py-3 flex flex-col items-center gap-1"
                    onClick={() => setMessage(action.value)}
                  >
                    <action.icon className="w-4 h-4" />
                    <span className="text-xs">{action.label}</span>
                  </Button>
                ))}
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  rows={5}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="resize-none"
                />
              </div>

              <Button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>

              {/* Response Time Info */}
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <CheckCircle2 className="w-4 h-4 inline mr-2 text-blue-600" />
                  <strong>Response Time:</strong> Our advisors typically respond
                  within 2-4 hours during business hours (9 AM - 6 PM EST).
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appointment" className="space-y-4 mt-4">
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="border-b border-gray-200 bg-gray-50">
              <CardTitle className="text-lg font-bold text-gray-900">Book an Appointment</CardTitle>
              <CardDescription className="text-gray-600">
                Schedule a one-on-one consultation with our expert advisors
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="appointment-date">Preferred Date</Label>
                  <Input
                    id="appointment-date"
                    type="date"
                    value={appointmentData.date}
                    onChange={e =>
                      setAppointmentData({
                        ...appointmentData,
                        date: e.target.value,
                      })
                    }
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="appointment-time">Preferred Time</Label>
                  <Input
                    id="appointment-time"
                    type="time"
                    value={appointmentData.time}
                    onChange={e =>
                      setAppointmentData({
                        ...appointmentData,
                        time: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="appointment-topic">
                  What would you like to discuss?
                </Label>
                <Textarea
                  id="appointment-topic"
                  placeholder="E.g., University selection, application process, visa requirements..."
                  rows={4}
                  value={appointmentData.topic}
                  onChange={e =>
                    setAppointmentData({
                      ...appointmentData,
                      topic: e.target.value,
                    })
                  }
                  className="resize-none"
                />
              </div>

              <Button
                onClick={handleBookAppointment}
                disabled={
                  !appointmentData.date ||
                  !appointmentData.time ||
                  !appointmentData.topic
                }
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Confirm Appointment
              </Button>

              {/* Available Time Slots Info */}
              <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <p className="text-sm font-semibold text-indigo-900 mb-2 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Available Time Slots
                </p>
                <ul className="text-sm text-indigo-700 space-y-1.5 ml-6">
                  <li>• Monday - Friday: 9:00 AM - 6:00 PM EST</li>
                  <li>• Saturday: 10:00 AM - 2:00 PM EST</li>
                  <li>• Sunday: Closed</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}

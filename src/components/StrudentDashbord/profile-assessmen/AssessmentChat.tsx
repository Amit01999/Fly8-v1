import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Bot,
  User,
  MessageSquare,
  FileText,
  Video,
  Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface Message {
  id: string;
  type: 'user' | 'advisor' | 'system';
  content: string;
  timestamp: Date;
  status?: 'sent' | 'delivered' | 'read';
}

export default function AssessmentChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'advisor',
      content:
        "Hi! I'm Sarah, your study abroad advisor. I've reviewed your profile assessment and I'm here to help you with any questions about your study abroad journey. How can I assist you today?",
      timestamp: new Date(Date.now() - 300000),
      status: 'read',
    },
    {
      id: '2',
      type: 'system',
      content:
        'Your profile assessment is complete! Based on your results, you have excellent opportunities in Canada and Australia.',
      timestamp: new Date(Date.now() - 240000),
    },
    {
      id: '3',
      type: 'user',
      content:
        "Thanks for the assessment! I'm particularly interested in the University of Toronto recommendation. Can you tell me more about the application requirements?",
      timestamp: new Date(Date.now() - 180000),
      status: 'read',
    },
    {
      id: '4',
      type: 'advisor',
      content:
        "Great choice! The University of Toronto's Master in Computer Science program requires:\n\n• Bachelor's degree in CS or related field\n• GPA of 3.3+ (you meet this!)\n• IELTS 7.0+ (you may want to improve from 6.5)\n• 2 recommendation letters\n• Statement of Purpose\n• CV\n\nWould you like me to help you prepare any specific documents?",
      timestamp: new Date(Date.now() - 120000),
      status: 'delivered',
    },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: newMessage,
      timestamp: new Date(),
      status: 'sent',
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate advisor response
    setTimeout(() => {
      setIsTyping(false);
      const advisorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'advisor',
        content:
          'I understand your question. Let me provide you with detailed information. Would you like to schedule a video call to discuss this further?',
        timestamp: new Date(),
        status: 'delivered',
      };
      setMessages(prev => [...prev, advisorMessage]);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="space-y-6">
      {/* Chat Header */}
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  SA
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="flex items-center gap-2">
                  Sarah Adams
                  <Badge className="bg-green-100 text-green-800">Online</Badge>
                </CardTitle>
                <CardDescription>
                  Study Abroad Advisor • 5+ years experience
                </CardDescription>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Video className="h-4 w-4 mr-2" />
                Video Call
              </Button>
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4 mr-2" />
                Audio Call
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Chat Messages */}
      <Card className="h-[810px] flex flex-col">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-3">
            <MessageSquare className="h-5 w-5 text-blue-500" />
            Chat with Your Advisor
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex ${
                  message.type === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`flex gap-3 max-w-[70%] ${
                    message.type === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    {message.type === 'user' ? (
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    ) : message.type === 'advisor' ? (
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                        SA
                      </AvatarFallback>
                    ) : (
                      <AvatarFallback className="bg-gradient-to-r from-gray-500 to-gray-600 text-white">
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    )}
                  </Avatar>

                  <div
                    className={`space-y-1 ${
                      message.type === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`px-4 py-2 rounded-2xl whitespace-pre-wrap ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                          : message.type === 'advisor'
                          ? 'bg-gray-100 text-gray-900'
                          : 'bg-yellow-50 text-yellow-800 border border-yellow-200'
                      }`}
                    >
                      {message.content}
                    </div>
                    <div className="flex items-center gap-2 px-2">
                      <span className="text-xs text-gray-500">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                      {message.status && message.type === 'user' && (
                        <span className="text-xs text-gray-400">
                          {message.status === 'sent' && '✓'}
                          {message.status === 'delivered' && '✓✓'}
                          {message.status === 'read' && '✓✓'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                      SA
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0.1s' }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0.2s' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="flex gap-2">
            <Input
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button
              onClick={sendMessage}
              disabled={!newMessage.trim()}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="border-green-200 bg-gradient-to-r from-green-50/50 to-emerald-50/50">
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
          <CardDescription>Common questions and actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'Schedule a consultation call',
              'Get university application timeline',
              'Review visa requirements',
              'Discuss scholarship opportunities',
              'Plan application strategy',
              'Get document checklist',
            ].map((action, index) => (
              <motion.button
                key={action}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setNewMessage(action)}
                className="p-3 text-left border rounded-lg hover:bg-white hover:shadow-sm transition-all text-sm"
              >
                {action}
              </motion.button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

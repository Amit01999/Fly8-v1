
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hello! I'm Fly8 Assistant. How can I help you with your educational journey today?", 
      isBot: true 
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage = { id: messages.length + 1, text: newMessage, isBot: false };
    setMessages([...messages, userMessage]);
    setNewMessage('');
    
    // Simulate bot response after short delay
    setTimeout(() => {
      const botResponses = [
        "I'd be happy to help you find universities that match your profile. Could you tell me what subject you're interested in studying?",
        "Great question! The visa requirements vary by country. What's your destination country so I can provide specific information?",
        "I can help you find scholarships based on your academic profile and chosen destination. What's your academic background?",
        "Our accommodation service can help you find housing near your campus. What's your budget range per month?"
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { id: prev.length + 1, text: randomResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-primary shadow-lg hover:shadow-xl hover:bg-primary/90"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </motion.div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[350px] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-30 border border-gray-200 overflow-hidden"
          >
            <div className="p-4 bg-primary text-white flex items-center justify-between">
              <div className="flex items-center">
                <Bot size={20} className="mr-2" />
                <h3 className="font-bold">Fly8 Assistant</h3>
              </div>
              <span className="text-xs bg-green-500 px-2 py-1 rounded-full">Online</span>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`mb-4 flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`
                    max-w-[70%] p-3 rounded-xl 
                    ${msg.isBot 
                      ? 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100' 
                      : 'bg-primary text-white rounded-tr-none'
                    }
                  `}>
                    <div className="flex items-center mb-1">
                      {msg.isBot ? (
                        <Bot size={16} className="mr-1" />
                      ) : (
                        <User size={16} className="mr-1" />
                      )}
                      <span className="text-xs font-medium">
                        {msg.isBot ? 'Fly8 Assistant' : 'You'}
                      </span>
                    </div>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white">
              <div className="flex">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary/90"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotButton;

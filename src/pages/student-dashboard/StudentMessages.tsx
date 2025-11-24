import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Send, Search, Loader2 } from 'lucide-react';
import {
  useConversations,
  useSendMessage,
  useConversationMessages,
  useMessageRealtime,
  useTypingIndicator,
} from '@/hooks/useStudentMessages';
import { socketService } from '@/services/socket';
import { formatDistanceToNow } from 'date-fns';

export default function StudentMessages() {
  const [selectedConversationId, setSelectedConversationId] = useState<string>('');
  const [messageInput, setMessageInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Fetch conversations
  const { data: conversations, isLoading } = useConversations();

  // Fetch messages for selected conversation
  const { data: messagesData } = useConversationMessages(selectedConversationId);

  // Mutation hooks
  const sendMessageMutation = useSendMessage();

  // Real-time hooks
  useMessageRealtime(selectedConversationId);
  useTypingIndicator(selectedConversationId);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messagesData?.messages]);

  // Auto-select first conversation
  useEffect(() => {
    if (conversations && conversations.length > 0 && !selectedConversationId) {
      setSelectedConversationId(conversations[0].conversationId);
    }
  }, [conversations, selectedConversationId]);

  // Get admin ID from first conversation
  const adminId = conversations?.[0]?.admin?._id || '';

  // Handle send message
  const handleSendMessage = async () => {
    if (!messageInput.trim() || !adminId) return;

    try {
      await sendMessageMutation.mutateAsync({
        recipientId: adminId,
        content: messageInput,
      });
      setMessageInput('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  // Handle typing
  const handleTyping = () => {
    if (!isTyping && selectedConversationId) {
      setIsTyping(true);
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
      socketService.sendTyping(
        selectedConversationId,
        userData._id,
        `${userData.firstName} ${userData.lastName}`
      );

      setTimeout(() => {
        setIsTyping(false);
        socketService.stopTyping(selectedConversationId, userData._id);
      }, 3000);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const userData = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div className="h-[calc(100vh-120px)]">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>

      <div className="grid grid-cols-12 gap-4 h-full">
        {/* Conversations List */}
        <Card className="col-span-4 p-4 overflow-y-auto">
          <div className="space-y-2">
            {conversations?.map((conversation) => (
              <div
                key={conversation.conversationId}
                onClick={() => setSelectedConversationId(conversation.conversationId)}
                className={`p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition ${
                  selectedConversationId === conversation.conversationId
                    ? 'bg-blue-50 border-l-4 border-blue-500'
                    : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                      {conversation.admin?.email?.[0]?.toUpperCase() || 'A'}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">
                        Fly8 Admin
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {conversation.lastMessage?.content}
                      </p>
                    </div>
                  </div>
                  {conversation.unreadCount > 0 && (
                    <Badge className="bg-blue-500 text-white text-xs">
                      {conversation.unreadCount}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  {conversation.lastMessage?.createdAt &&
                    formatDistanceToNow(new Date(conversation.lastMessage.createdAt), {
                      addSuffix: true,
                    })}
                </p>
              </div>
            ))}

            {conversations?.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                <p>No conversations yet</p>
                <p className="text-sm">Send your first message below</p>
              </div>
            )}
          </div>
        </Card>

        {/* Messages Area */}
        <Card className="col-span-8 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b">
            <h2 className="font-semibold">Chat with Fly8 Admin</h2>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messagesData?.messages?.map((message) => {
                const isOwnMessage = message.sender._id === userData._id;

                return (
                  <div
                    key={message._id}
                    className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] ${
                        isOwnMessage
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-900'
                      } rounded-lg p-3`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      <div className="flex items-center justify-between mt-1 text-xs opacity-70">
                        <span>
                          {formatDistanceToNow(new Date(message.createdAt), {
                            addSuffix: true,
                          })}
                        </span>
                        {isOwnMessage && (
                          <span className="ml-2">
                            {message.status === 'read' ? '✓✓' : '✓'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t">
            <div className="flex items-end space-x-2">
              <Textarea
                value={messageInput}
                onChange={(e) => {
                  setMessageInput(e.target.value);
                  handleTyping();
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Type your message... (Press Enter to send, Shift+Enter for new line)"
                className="flex-1 min-h-[80px] resize-none"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!messageInput.trim() || sendMessageMutation.isPending}
                size="lg"
              >
                {sendMessageMutation.isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Connected to Fly8 Admin support
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

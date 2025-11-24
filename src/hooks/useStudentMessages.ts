/**
 * ================================================
 * STUDENT MESSAGES - REACT QUERY HOOKS
 * ================================================
 * Custom hooks for message functionality with React Query
 */

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import * as messageAPI from '../services/studentMessageAPI';
import { socketService } from '../services/socket';
import type { SendMessageRequest, PopulatedMessage } from '@/types';
import { QUERY_KEYS } from '@/types';

/**
 * Hook to get all conversations
 */
export const useConversations = () => {
  return useQuery({
    queryKey: QUERY_KEYS.conversations,
    queryFn: messageAPI.getConversations,
    staleTime: 30000, // 30 seconds
    refetchOnWindowFocus: true,
  });
};

/**
 * Hook to get messages for a conversation
 */
export const useConversationMessages = (
  conversationId: string,
  page: number = 1,
  limit: number = 50
) => {
  return useQuery({
    queryKey: QUERY_KEYS.messages(conversationId),
    queryFn: () => messageAPI.getConversationMessages(conversationId, page, limit),
    enabled: !!conversationId,
    staleTime: 10000, // 10 seconds
  });
};

/**
 * Hook to send a message
 */
export const useSendMessage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: SendMessageRequest) => messageAPI.sendMessage(data),
    onSuccess: (newMessage, variables) => {
      // Invalidate conversations to update last message
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.conversations });

      // Update the specific conversation's messages
      const conversationId = [variables.recipientId, newMessage.sender._id]
        .sort()
        .join('-');

      queryClient.setQueryData(
        QUERY_KEYS.messages(conversationId),
        (oldData: any) => {
          if (!oldData) return oldData;
          return {
            ...oldData,
            messages: [...oldData.messages, newMessage],
          };
        }
      );

      // Invalidate stats
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.messageStats });
    },
  });
};

/**
 * Hook to mark message as read
 */
export const useMarkMessageAsRead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (messageId: string) => messageAPI.markMessageAsRead(messageId),
    onSuccess: (updatedMessage) => {
      // Update conversations cache
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.conversations });

      // Update the specific conversation's messages
      queryClient.setQueryData(
        QUERY_KEYS.messages(updatedMessage.conversationId),
        (oldData: any) => {
          if (!oldData) return oldData;
          return {
            ...oldData,
            messages: oldData.messages.map((msg: PopulatedMessage) =>
              msg._id === updatedMessage._id ? updatedMessage : msg
            ),
          };
        }
      );

      // Invalidate stats
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.messageStats });
    },
  });
};

/**
 * Hook to delete a message
 */
export const useDeleteMessage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (messageId: string) => messageAPI.deleteMessage(messageId),
    onSuccess: () => {
      // Invalidate all message-related queries
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.conversations });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.messageStats });
    },
  });
};

/**
 * Hook to get message statistics
 */
export const useMessageStats = () => {
  return useQuery({
    queryKey: QUERY_KEYS.messageStats,
    queryFn: messageAPI.getMessageStats,
    staleTime: 60000, // 1 minute
  });
};

/**
 * Hook to listen to real-time message events
 */
export const useMessageRealtime = (conversationId?: string) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!socketService.isConnected()) return;

    // Listen for new messages
    const handleNewMessage = ({ message }: { message: PopulatedMessage }) => {
      // Update conversations
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.conversations });

      // Update messages if this conversation is open
      if (conversationId === message.conversationId) {
        queryClient.setQueryData(
          QUERY_KEYS.messages(conversationId),
          (oldData: any) => {
            if (!oldData) return oldData;
            return {
              ...oldData,
              messages: [...oldData.messages, message],
            };
          }
        );
      }

      // Invalidate stats
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.messageStats });
    };

    // Listen for message read events
    const handleMessageRead = ({
      messageId,
      conversationId: readConversationId,
    }: any) => {
      queryClient.setQueryData(
        QUERY_KEYS.messages(readConversationId),
        (oldData: any) => {
          if (!oldData) return oldData;
          return {
            ...oldData,
            messages: oldData.messages.map((msg: PopulatedMessage) =>
              msg._id === messageId ? { ...msg, status: 'read' as const } : msg
            ),
          };
        }
      );
    };

    socketService.on('new-message', handleNewMessage);
    socketService.on('message-read', handleMessageRead);

    return () => {
      socketService.off('new-message', handleNewMessage);
      socketService.off('message-read', handleMessageRead);
    };
  }, [conversationId, queryClient]);
};

/**
 * Hook to handle typing indicators
 */
export const useTypingIndicator = (conversationId: string) => {
  useEffect(() => {
    if (!socketService.isConnected() || !conversationId) return;

    // Join conversation room
    socketService.joinConversation(conversationId);

    return () => {
      // Leave conversation room on unmount
      socketService.leaveConversation(conversationId);
    };
  }, [conversationId]);
};

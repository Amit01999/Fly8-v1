import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Bell,
  CheckCheck,
  Trash2,
  Archive,
  AlertCircle,
  CheckCircle,
  Info,
  XCircle,
  Loader2,
} from 'lucide-react';
import {
  useNotifications,
  useMarkNotificationAsRead,
  useMarkAllNotificationsAsRead,
  useDeleteNotification,
  useArchiveNotification,
  useNotificationStats,
} from '@/hooks/useStudentNotifications';
import { formatDistanceToNow } from 'date-fns';
import type { NotificationStatus, NotificationType } from '@/types';

const NotificationIcon = ({ type }: { type: NotificationType }) => {
  switch (type) {
    case 'success':
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case 'error':
      return <XCircle className="h-5 w-5 text-red-500" />;
    case 'warning':
      return <AlertCircle className="h-5 w-5 text-yellow-500" />;
    default:
      return <Info className="h-5 w-5 text-blue-500" />;
  }
};

export default function StudentNotifications() {
  const [status, setStatus] = useState<NotificationStatus | undefined>('unread');

  const { data: notificationsData, isLoading } = useNotifications({ status });
  const { data: stats } = useNotificationStats();
  const markAsReadMutation = useMarkNotificationAsRead();
  const markAllAsReadMutation = useMarkAllNotificationsAsRead();
  const deleteMutation = useDeleteNotification();
  const archiveMutation = useArchiveNotification();

  const handleMarkAsRead = async (id: string) => {
    try {
      await markAsReadMutation.mutateAsync(id);
    } catch (error) {
      console.error('Failed to mark as read:', error);
    }
  };

  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsReadMutation.mutateAsync();
    } catch (error) {
      console.error('Failed to mark all as read:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this notification?')) {
      try {
        await deleteMutation.mutateAsync(id);
      } catch (error) {
        console.error('Failed to delete:', error);
      }
    }
  };

  const handleArchive = async (id: string) => {
    try {
      await archiveMutation.mutateAsync(id);
    } catch (error) {
      console.error('Failed to archive:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <Button
          onClick={handleMarkAllAsRead}
          disabled={stats?.unread === 0 || markAllAsReadMutation.isPending}
          variant="outline"
        >
          <CheckCheck className="h-4 w-4 mr-2" />
          Mark All as Read
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total</p>
              <p className="text-2xl font-bold">{stats?.total || 0}</p>
            </div>
            <Bell className="h-8 w-8 text-blue-500" />
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Unread</p>
              <p className="text-2xl font-bold">{stats?.unread || 0}</p>
            </div>
            <AlertCircle className="h-8 w-8 text-orange-500" />
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Today</p>
              <p className="text-2xl font-bold">{stats?.todayCount || 0}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Priority</p>
              <p className="text-2xl font-bold">{stats?.byPriority?.high || 0}</p>
            </div>
            <XCircle className="h-8 w-8 text-red-500" />
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs
        value={status}
        onValueChange={(val) => setStatus(val as NotificationStatus)}
      >
        <TabsList>
          <TabsTrigger value="unread">
            Unread {stats?.unread ? `(${stats.unread})` : ''}
          </TabsTrigger>
          <TabsTrigger value="read">Read</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        <TabsContent value={status} className="space-y-4 mt-4">
          {notificationsData?.notifications?.map((notification) => (
            <Card key={notification._id} className="p-4 hover:shadow-md transition">
              <div className="flex items-start space-x-4">
                <NotificationIcon type={notification.type} />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold">{notification.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {notification.message}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge
                          variant={
                            notification.priority === 'urgent'
                              ? 'destructive'
                              : notification.priority === 'high'
                              ? 'default'
                              : 'secondary'
                          }
                        >
                          {notification.priority}
                        </Badge>
                        <Badge variant="outline">{notification.type}</Badge>
                        <span className="text-xs text-gray-400">
                          {formatDistanceToNow(new Date(notification.createdAt), {
                            addSuffix: true,
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      {notification.status === 'unread' && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleMarkAsRead(notification._id)}
                          disabled={markAsReadMutation.isPending}
                        >
                          <CheckCheck className="h-4 w-4" />
                        </Button>
                      )}
                      {notification.status !== 'archived' && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleArchive(notification._id)}
                          disabled={archiveMutation.isPending}
                        >
                          <Archive className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDelete(notification._id)}
                        disabled={deleteMutation.isPending}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {notificationsData?.notifications?.length === 0 && (
            <Card className="p-8 text-center text-gray-500">
              <Bell className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No {status} notifications</p>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

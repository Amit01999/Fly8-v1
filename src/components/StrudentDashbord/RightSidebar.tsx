import { useState } from 'react';
import { Calendar, MessageSquare, Bell, ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const RightSidebar = () => {
  return (
    <aside className="hidden lg:flex w-80 flex-col border-l bg-background/95 p-4 overflow-y-auto scrollbar-hide">
      {/* Updates */}
      <SidebarBox
        title="Updates"
        icon={<Bell className="h-4 w-4" />}
        showAllLink="/dashboard/updates"
      >
        <div className="space-y-2">
          <UpdateItem
            title="University of Toronto Application"
            description="Your application has been submitted successfully"
            time="2h ago"
            isNew
          />
          <UpdateItem
            title="Document Verification"
            description="Please upload your transcripts to complete verification"
            time="1d ago"
          />
          <UpdateItem
            title="Education Loan Approved"
            description="Your loan application has been approved"
            time="3d ago"
          />
        </div>
      </SidebarBox>

      {/* Appointments */}
      <SidebarBox
        title="Appointments"
        icon={<Calendar className="h-4 w-4" />}
        showAllLink="/dashboard/appointments"
      >
        <div className="space-y-2">
          <AppointmentItem
            title="Visa Consultation"
            date="May 18, 2025"
            time="10:00 AM"
            status="confirmed"
          />
          <AppointmentItem
            title="University Selection"
            date="May 20, 2025"
            time="2:30 PM"
            status="pending"
          />
          <AppointmentItem
            title="Document Review"
            date="May 15, 2025"
            time="11:00 AM"
            status="completed"
          />
        </div>
      </SidebarBox>

      {/* Messages */}
      <SidebarBox
        title="Messages"
        icon={<MessageSquare className="h-4 w-4" />}
        showAllLink="/dashboard/messages"
      >
        <div className="space-y-2">
          <MessageItem
            sender="Sarah Johnson"
            avatar="/placeholder.svg"
            initials="SJ"
            message="Your visa application documents have been reviewed."
            time="10:30 AM"
            isUnread={true}
          />
          <MessageItem
            sender="Mike Peterson"
            avatar="/placeholder.svg"
            initials="MP"
            message="I've scheduled our call for tomorrow at 2 PM."
            time="Yesterday"
          />
          <MessageItem
            sender="Lina Smith"
            avatar="/placeholder.svg"
            initials="LS"
            message="Here are the accommodation options we discussed."
            time="May 12"
          />
        </div>
      </SidebarBox>
    </aside>
  );
};

interface SidebarBoxProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  showAllLink?: string;
}

const SidebarBox = ({
  title,
  icon,
  children,
  showAllLink,
}: SidebarBoxProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="bg-primary/10 p-1 rounded-md text-primary">
            {icon}
          </span>
          <h3 className="font-semibold text-sm">{title}</h3>
        </div>
        {showAllLink && (
          <Button
            variant="link"
            className="p-0 h-auto text-xs text-primary"
            asChild
          >
            <a href={showAllLink} className="flex items-center">
              All <ChevronRight className="h-3 w-3 ml-1" />
            </a>
          </Button>
        )}
      </div>
      <div className="rounded-lg border bg-card text-card-foreground">
        {children}
      </div>
    </div>
  );
};

interface UpdateItemProps {
  title: string;
  description: string;
  time: string;
  isNew?: boolean;
}

const UpdateItem = ({
  title,
  description,
  time,
  isNew = false,
}: UpdateItemProps) => {
  return (
    <div
      className={cn('p-3 border-b last:border-0', isNew ? 'bg-primary/5' : '')}
    >
      <div className="flex justify-between items-start">
        <h4 className="font-medium text-sm">{title}</h4>
        <span className="text-xs text-muted-foreground">{time}</span>
      </div>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
    </div>
  );
};

interface AppointmentItemProps {
  title: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
}

const statusClasses = {
  confirmed: 'text-green-600 bg-green-50',
  pending: 'text-amber-600 bg-amber-50',
  completed: 'text-blue-600 bg-blue-50',
  cancelled: 'text-red-600 bg-red-50',
};

const AppointmentItem = ({
  title,
  date,
  time,
  status,
}: AppointmentItemProps) => {
  return (
    <div className="p-3 border-b last:border-0">
      <div className="flex justify-between">
        <h4 className="font-medium text-sm">{title}</h4>
        <span
          className={cn(
            'text-xs px-2 py-0.5 rounded-full capitalize',
            statusClasses[status]
          )}
        >
          {status}
        </span>
      </div>
      <div className="flex items-center gap-1 mt-1">
        <Calendar className="h-3 w-3 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">
          {date}, {time}
        </span>
      </div>
    </div>
  );
};

interface MessageItemProps {
  sender: string;
  avatar: string;
  initials: string;
  message: string;
  time: string;
  isUnread?: boolean;
}

const MessageItem = ({
  sender,
  avatar,
  initials,
  message,
  time,
  isUnread = false,
}: MessageItemProps) => {
  return (
    <div
      className={cn(
        'p-3 border-b last:border-0 flex items-start gap-3',
        isUnread ? 'bg-primary/5' : ''
      )}
    >
      <Avatar className="h-8 w-8">
        <AvatarImage src={avatar} alt={sender} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-sm truncate">{sender}</h4>
          <span className="text-xs text-muted-foreground shrink-0">{time}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1 truncate">{message}</p>
      </div>
      {isUnread && <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>}
    </div>
  );
};

export default RightSidebar;

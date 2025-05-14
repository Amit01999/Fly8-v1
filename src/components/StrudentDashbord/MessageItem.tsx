import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface MessageItemProps {
  sender: string;
  avatar?: string;
  initials?: string;
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
      className={`flex items-center gap-3 py-2 ${
        isUnread ? 'bg-muted/30' : ''
      } px-2 rounded-md -mx-2`}
    >
      <Avatar className="h-8 w-8">
        <AvatarImage src={avatar} alt={sender} />
        <AvatarFallback className="bg-emerald-400">
          {initials || sender.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <p className={`text-sm ${isUnread ? 'font-medium' : ''}`}>{sender}</p>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
        <p className="text-xs text-muted-foreground truncate">{message}</p>
      </div>
      {isUnread && <div className="h-2 w-2 bg-primary rounded-full"></div>}
    </div>
  );
};

export default MessageItem;

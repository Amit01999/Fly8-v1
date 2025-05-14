import { Calendar, Clock } from 'lucide-react';
import StatusBadge from './StatusBadge';

interface AppointmentItemProps {
  title: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed' | string;
}

const AppointmentItem = ({
  title,
  date,
  time,
  status,
}: AppointmentItemProps) => {
  return (
    <div className="flex items-center justify-between py-2 border-b last:border-0 gap-2">
      <div className="flex flex-col">
        <span className="font-medium text-sm">{title}</span>
        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{time}</span>
          </div>
        </div>
      </div>
      <StatusBadge status={status} />
    </div>
  );
};

export default AppointmentItem;

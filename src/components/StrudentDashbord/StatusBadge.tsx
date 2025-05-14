import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed' | string;
  className?: string;
}

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const statusStyles = {
    pending: 'bg-amber-100 text-amber-700 border-amber-200',
    confirmed: 'bg-green-100 text-green-700 border-green-200',
    cancelled: 'bg-red-100 text-red-700 border-red-200',
    completed: 'bg-blue-100 text-blue-700 border-blue-200',
    default: 'bg-gray-100 text-gray-700 border-gray-200',
  };

  const style =
    statusStyles[status as keyof typeof statusStyles] || statusStyles.default;

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-1 text-xs font-medium rounded-full border',
        style,
        className
      )}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default StatusBadge;

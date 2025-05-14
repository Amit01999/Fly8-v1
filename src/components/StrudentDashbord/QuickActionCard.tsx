import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface QuickActionCardProps {
  title: string;
  icon: ReactNode;
  description?: string;
  className?: string;
  onClick?: () => void;
  gradient?: string;
}

const QuickActionCard = ({
  title,
  icon,
  description,
  className,
  onClick,
  gradient = 'from-primary/80 to-secondary/80',
}: QuickActionCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      onClick={onClick}
      className={cn(
        'relative overflow-hidden rounded-xl border bg-background p-6 shadow-sm transition-all cursor-pointer',
        className
      )}
    >
      <div
        className={`absolute inset-0 opacity-10 bg-gradient-to-br ${gradient}`}
        aria-hidden="true"
      />
      <div className="flex items-center gap-4">
        <div className="shrink-0">
          <div
            className={`p-2 rounded-full bg-gradient-to-br ${gradient} text-white`}
          >
            {icon}
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="font-medium leading-none">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default QuickActionCard;

import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface InfoCardProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  headerClassName?: string;
}

const InfoCard = ({
  title,
  children,
  icon,
  className,
  headerClassName,
}: InfoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="h-full"
    >
      <Card
        className={cn('h-full border shadow-sm overflow-hidden', className)}
      >
        <CardHeader
          className={cn(
            'flex flex-row items-center justify-between p-4 bg-muted/30',
            headerClassName
          )}
        >
          <CardTitle className="text-base font-medium flex items-center gap-2">
            {icon && <span className="text-primary/80">{icon}</span>}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 overflow-auto max-h-[300px]">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default InfoCard;

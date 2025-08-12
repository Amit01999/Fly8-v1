import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Circle, AlertCircle } from 'lucide-react';

interface ProgressCardProps {
  completionPercentage: number;
  completedSections: string[];
  totalSections: number;
}

export const ProgressCard = ({
  completionPercentage,
  completedSections,
  totalSections,
}: ProgressCardProps) => {
  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return 'text-success';
    if (percentage >= 50) return 'text-primary';
    return 'text-destructive';
  };

  const getProgressIcon = (percentage: number) => {
    if (percentage >= 80)
      return <CheckCircle className="h-5 w-5 text-success" />;
    if (percentage >= 50) return <Circle className="h-5 w-5 text-primary" />;
    return <AlertCircle className="h-5 w-5 text-destructive" />;
  };

  return (
    <Card className="shadow-card border-0 bg-gradient-primary text-white">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          {getProgressIcon(completionPercentage)}
          Profile Completion
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm opacity-90">Progress</span>
            <span className="text-lg font-bold">{completionPercentage}%</span>
          </div>
          <Progress value={completionPercentage} className="h-3 bg-white/20" />
        </div>

        <div className="text-sm space-y-1">
          <p className="opacity-90">
            {completedSections.length} of {totalSections} sections completed
          </p>
          {completionPercentage < 100 && (
            <p className="text-xs opacity-75">
              Complete your profile to improve your university application
              success rate
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

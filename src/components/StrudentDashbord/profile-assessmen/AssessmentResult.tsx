import { motion } from 'framer-motion';
import {
  Target,
  TrendingUp,
  Star,
  Globe,
  GraduationCap,
  Award,
  AlertCircle,
  CheckCircle,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface AssessmentResultsProps {
  isSubmitted: boolean;
}

export default function AssessmentResults({
  isSubmitted,
}: AssessmentResultsProps) {
  const overallScore = 78;

  const scores = [
    { category: 'Academic Profile', score: 85, color: 'bg-blue-500' },
    { category: 'English Proficiency', score: 75, color: 'bg-green-500' },
    { category: 'Financial Readiness', score: 70, color: 'bg-yellow-500' },
    { category: 'Career Alignment', score: 82, color: 'bg-purple-500' },
  ];

  const recommendations = [
    {
      title: 'Improve IELTS Score',
      description:
        'Consider retaking IELTS to achieve a score of 7.5+ for better university options',
      priority: 'high',
      icon: Award,
    },
    {
      title: 'Financial Documentation',
      description:
        'Gather comprehensive financial statements for visa application',
      priority: 'medium',
      icon: AlertCircle,
    },
    {
      title: 'Research Universities',
      description:
        'Based on your profile, we recommend 8 universities in Canada and Australia',
      priority: 'high',
      icon: GraduationCap,
    },
  ];

  const universityMatches = [
    {
      name: 'University of Toronto',
      country: 'Canada',
      program: 'Master in Computer Science',
      matchScore: 92,
      requirements: 'Met',
    },
    {
      name: 'University of Melbourne',
      country: 'Australia',
      program: 'Master in Data Science',
      matchScore: 88,
      requirements: 'Met',
    },
    {
      name: 'University of British Columbia',
      country: 'Canada',
      program: 'Master in Software Engineering',
      matchScore: 85,
      requirements: 'Partially Met',
    },
  ];

  if (!isSubmitted) {
    return (
      <div className="flex items-center justify-center h-64">
        <Card className="text-center p-8">
          <CardContent>
            <Target className="h-16 w-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-semibold mb-2">Assessment Pending</h3>
            <p className="text-gray-600">
              Complete and submit your profile assessment to see results
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Overall Score */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-none bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-8 border-white/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold">{overallScore}%</div>
                    <div className="text-sm opacity-90">Overall Score</div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Great Profile Strength!</h2>
            <p className="text-white/90">
              Your profile shows strong potential for studying abroad. Here's
              your detailed assessment.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Score Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-blue-500" />
              Score Breakdown
            </CardTitle>
            <CardDescription>
              Detailed analysis of your profile components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {scores.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{item.category}</span>
                    <span className="text-2xl font-bold text-blue-600">
                      {item.score}%
                    </span>
                  </div>
                  <Progress value={item.score} className="h-3" />
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Target className="h-6 w-6 text-purple-500" />
              Personalized Recommendations
            </CardTitle>
            <CardDescription>
              Action items to strengthen your profile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendations.map((rec, index) => {
                const Icon = rec.icon;
                return (
                  <motion.div
                    key={rec.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        rec.priority === 'high' ? 'bg-red-100' : 'bg-yellow-100'
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          rec.priority === 'high'
                            ? 'text-red-600'
                            : 'text-yellow-600'
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{rec.title}</h4>
                        <Badge
                          variant={
                            rec.priority === 'high'
                              ? 'destructive'
                              : 'secondary'
                          }
                        >
                          {rec.priority}
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm">{rec.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* University Matches */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-green-500" />
              Recommended Universities
            </CardTitle>
            <CardDescription>
              Top university matches based on your profile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {universityMatches.map((uni, index) => (
                <motion.div
                  key={uni.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 border rounded-lg hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-lg">{uni.name}</h4>
                      <p className="text-gray-600 flex items-center gap-1">
                        <Globe className="h-4 w-4" />
                        {uni.country}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">
                        {uni.matchScore}%
                      </div>
                      <div className="text-sm text-gray-500">Match</div>
                    </div>
                  </div>
                  <p className="font-medium mb-2">{uni.program}</p>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant={
                        uni.requirements === 'Met' ? 'default' : 'secondary'
                      }
                      className="flex items-center gap-1"
                    >
                      {uni.requirements === 'Met' ? (
                        <CheckCircle className="h-3 w-3" />
                      ) : (
                        <AlertCircle className="h-3 w-3" />
                      )}
                      {uni.requirements}
                    </Badge>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

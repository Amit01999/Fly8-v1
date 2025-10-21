import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { CareerGoalsData } from '@/types/profileAssessment';

interface CareerGoalsProps {
  data: CareerGoalsData;
  onChange: (field: keyof CareerGoalsData, value: string) => void;
  disabled?: boolean;
}

export default function CareerGoals({
  data,
  onChange,
  disabled = false,
}: CareerGoalsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border-orange-200 bg-gradient-to-r from-orange-50/50 to-red-50/50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
              <Target className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Career Goals</CardTitle>
              <CardDescription>
                What are your professional aspirations?
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="careerGoals">
              Career Objectives <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="careerGoals"
              placeholder="Describe your career goals and what you hope to achieve through your studies. For example: 'I aim to become a machine learning engineer working on AI solutions for healthcare...'"
              rows={6}
              value={data.careerGoals}
              onChange={e => onChange('careerGoals', e.target.value)}
              disabled={disabled}
              className="bg-white resize-none"
            />
            <p className="text-xs text-gray-500">
              Be specific about your goals to help us recommend the best programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="industry">
                Target Industry <span className="text-red-500">*</span>
              </Label>
              <Select
                value={data.industry}
                onValueChange={value => onChange('industry', value)}
                disabled={disabled}
              >
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select target industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="finance">Finance & Banking</SelectItem>
                  <SelectItem value="healthcare">Healthcare & Medicine</SelectItem>
                  <SelectItem value="education">Education & Research</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="workLocation">
                Preferred Work Location <span className="text-red-500">*</span>
              </Label>
              <Select
                value={data.workLocation}
                onValueChange={value => onChange('workLocation', value)}
                disabled={disabled}
              >
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select work preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="home-country">
                    Return to Home Country
                  </SelectItem>
                  <SelectItem value="study-country">
                    Stay in Country of Study
                  </SelectItem>
                  <SelectItem value="global">
                    Open to Global Opportunities
                  </SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Tip:</strong> Having clear career goals helps our advisors
              recommend programs with strong industry connections, internship
              opportunities, and career support services aligned with your
              aspirations.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

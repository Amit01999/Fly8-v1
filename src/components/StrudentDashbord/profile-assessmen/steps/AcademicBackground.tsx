import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { AcademicBackgroundData } from '@/types/profileAssessment';

interface AcademicBackgroundProps {
  data: AcademicBackgroundData;
  onChange: (field: keyof AcademicBackgroundData, value: string) => void;
  disabled?: boolean;
}

export default function AcademicBackground({
  data,
  onChange,
  disabled = false,
}: AcademicBackgroundProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border-purple-200 bg-gradient-to-r from-purple-50/50 to-pink-50/50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Academic Background</CardTitle>
              <CardDescription>
                Your educational history and achievements
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="currentEducationLevel">
                Current Education Level <span className="text-red-500">*</span>
              </Label>
              <Select
                value={data.currentEducationLevel}
                onValueChange={value => onChange('currentEducationLevel', value)}
                disabled={disabled}
              >
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                  <SelectItem value="master">Master's Degree</SelectItem>
                  <SelectItem value="phd">PhD</SelectItem>
                  <SelectItem value="diploma">Diploma</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="fieldOfStudy">
                Field of Study <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fieldOfStudy"
                placeholder="e.g., Computer Science"
                value={data.fieldOfStudy}
                onChange={e => onChange('fieldOfStudy', e.target.value)}
                disabled={disabled}
                className="bg-white"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="gpa">
                GPA/Percentage <span className="text-red-500">*</span>
              </Label>
              <Input
                id="gpa"
                placeholder="3.8 or 85%"
                value={data.gpa}
                onChange={e => onChange('gpa', e.target.value)}
                disabled={disabled}
                className="bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="graduationYear">
                Graduation Year <span className="text-red-500">*</span>
              </Label>
              <Input
                id="graduationYear"
                type="number"
                placeholder="2024"
                value={data.graduationYear}
                onChange={e => onChange('graduationYear', e.target.value)}
                disabled={disabled}
                min="1900"
                max={new Date().getFullYear() + 10}
                className="bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="institution">
                Institution <span className="text-red-500">*</span>
              </Label>
              <Input
                id="institution"
                placeholder="University name"
                value={data.institution}
                onChange={e => onChange('institution', e.target.value)}
                disabled={disabled}
                className="bg-white"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-t pt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Standardized Test Scores (Optional)
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ielts">IELTS Score</Label>
                  <Input
                    id="ielts"
                    placeholder="7.5"
                    value={data.ielts}
                    onChange={e => onChange('ielts', e.target.value)}
                    disabled={disabled}
                    className="bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="toefl">TOEFL Score</Label>
                  <Input
                    id="toefl"
                    placeholder="100"
                    value={data.toefl}
                    onChange={e => onChange('toefl', e.target.value)}
                    disabled={disabled}
                    className="bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gre">GRE Score</Label>
                  <Input
                    id="gre"
                    placeholder="320"
                    value={data.gre}
                    onChange={e => onChange('gre', e.target.value)}
                    disabled={disabled}
                    className="bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

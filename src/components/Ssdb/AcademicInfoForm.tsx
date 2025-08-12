import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { AcademicInfo, apiService } from '@/services/studentdashboardapi';
import { GraduationCap, Award, Calendar, BarChart3 } from 'lucide-react';

interface AcademicInfoFormProps {
  studentId: string;
  initialData?: AcademicInfo;
  onSave: () => void;
}

const educationLevels = [
  'High School',
  'Diploma',
  "Bachelor's Degree",
  "Master's Degree",
  'PhD/Doctorate',
];

const gradeSystems = [
  'GPA (4.0 scale)',
  'GPA (5.0 scale)',
  'Percentage (0-100)',
  'CGPA (10.0 scale)',
  'First Class/Second Class',
  'A-F Letter Grades',
];

const englishTests = ['IELTS', 'TOEFL', 'PTE', 'Duolingo', 'None'];

export const AcademicInfoForm = ({
  studentId,
  initialData,
  onSave,
}: AcademicInfoFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<AcademicInfo>({
    highestEducation: '',
    institutionName: '',
    fieldOfStudy: '',
    graduationYear: '',
    gpa: '',
    gradeSystem: '',
    englishProficiency: '',
    ieltsScore: '',
    toeflScore: '',
    greScore: '',
    gmatScore: '',
    ...initialData,
  });

  const handleInputChange = (field: keyof AcademicInfo, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await apiService.updateAcademicInfo(studentId, formData);
      toast({
        title: 'Academic Information Updated',
        description: 'Your academic information has been saved successfully.',
      });
      onSave();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save academic information. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader className="border-b bg-gradient-to-r from-secondary/5 to-primary/5">
        <CardTitle className="flex items-center gap-2 text-secondary">
          <GraduationCap className="h-5 w-5" />
          Academic Information
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Education Background */}
          <div className="space-y-4">
            <Label className="flex items-center gap-2 text-base font-semibold">
              <Award className="h-4 w-4" />
              Education Background
            </Label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="highestEducation">
                  Highest Education Level *
                </Label>
                <Select
                  value={formData.highestEducation}
                  onValueChange={value =>
                    handleInputChange('highestEducation', value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select education level" />
                  </SelectTrigger>
                  <SelectContent>
                    {educationLevels.map(level => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="graduationYear"
                  className="flex items-center gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  Graduation Year *
                </Label>
                <Input
                  id="graduationYear"
                  value={formData.graduationYear}
                  onChange={e =>
                    handleInputChange('graduationYear', e.target.value)
                  }
                  placeholder="e.g., 2023"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="institutionName">Institution Name *</Label>
              <Input
                id="institutionName"
                value={formData.institutionName}
                onChange={e =>
                  handleInputChange('institutionName', e.target.value)
                }
                placeholder="Enter your institution/university name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fieldOfStudy">Field of Study *</Label>
              <Input
                id="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={e =>
                  handleInputChange('fieldOfStudy', e.target.value)
                }
                placeholder="e.g., Computer Science, Business Administration"
                required
              />
            </div>
          </div>

          {/* Grades & Scores */}
          <div className="space-y-4">
            <Label className="flex items-center gap-2 text-base font-semibold">
              <BarChart3 className="h-4 w-4" />
              Academic Performance
            </Label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gradeSystem">Grade System *</Label>
                <Select
                  value={formData.gradeSystem}
                  onValueChange={value =>
                    handleInputChange('gradeSystem', value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade system" />
                  </SelectTrigger>
                  <SelectContent>
                    {gradeSystems.map(system => (
                      <SelectItem key={system} value={system}>
                        {system}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="gpa">GPA/Grade *</Label>
                <Input
                  id="gpa"
                  value={formData.gpa}
                  onChange={e => handleInputChange('gpa', e.target.value)}
                  placeholder="e.g., 3.8, 85%, First Class"
                  required
                />
              </div>
            </div>
          </div>

          {/* English Proficiency */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">
              English Proficiency
            </Label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="englishProficiency">English Test Taken</Label>
                <Select
                  value={formData.englishProficiency}
                  onValueChange={value =>
                    handleInputChange('englishProficiency', value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select English test" />
                  </SelectTrigger>
                  <SelectContent>
                    {englishTests.map(test => (
                      <SelectItem key={test} value={test}>
                        {test}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {formData.englishProficiency === 'IELTS' && (
                <div className="space-y-2">
                  <Label htmlFor="ieltsScore">IELTS Score</Label>
                  <Input
                    id="ieltsScore"
                    value={formData.ieltsScore}
                    onChange={e =>
                      handleInputChange('ieltsScore', e.target.value)
                    }
                    placeholder="e.g., 7.5"
                  />
                </div>
              )}

              {formData.englishProficiency === 'TOEFL' && (
                <div className="space-y-2">
                  <Label htmlFor="toeflScore">TOEFL Score</Label>
                  <Input
                    id="toeflScore"
                    value={formData.toeflScore}
                    onChange={e =>
                      handleInputChange('toeflScore', e.target.value)
                    }
                    placeholder="e.g., 100"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Standardized Tests */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">
              Standardized Tests (Optional)
            </Label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="greScore">GRE Score</Label>
                <Input
                  id="greScore"
                  value={formData.greScore}
                  onChange={e => handleInputChange('greScore', e.target.value)}
                  placeholder="e.g., 320"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gmatScore">GMAT Score</Label>
                <Input
                  id="gmatScore"
                  value={formData.gmatScore}
                  onChange={e => handleInputChange('gmatScore', e.target.value)}
                  placeholder="e.g., 650"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button
              type="submit"
              disabled={loading}
              className="bg-gradient-primary hover:opacity-90 px-8"
            >
              {loading ? 'Saving...' : 'Save Academic Information'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

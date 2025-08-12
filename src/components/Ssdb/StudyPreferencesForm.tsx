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
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { StudyPreferences, apiService } from '@/services/studentdashboardapi';
import {
  Target,
  MapPin,
  BookOpen,
  Clock,
  DollarSign,
  Home,
} from 'lucide-react';

interface StudyPreferencesFormProps {
  studentId: string;
  initialData?: StudyPreferences;
  onSave: () => void;
}

const countries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'Germany',
  'France',
  'Netherlands',
  'Sweden',
  'Denmark',
  'Ireland',
  'New Zealand',
];

const programs = [
  'Computer Science',
  'Business Administration',
  'Engineering',
  'Medicine',
  'Law',
  'Psychology',
  'Economics',
  'Data Science',
  'Marketing',
  'Finance',
  'Nursing',
  'Architecture',
  'Design',
  'Journalism',
  'Education',
];

const studyLevels = [
  'Foundation/Pathway',
  "Bachelor's Degree",
  "Master's Degree",
  'PhD/Doctorate',
  'Professional Certification',
];

const intakes = ['Fall', 'Spring', 'Summer', 'Winter'];

const budgetRanges = [
  'Under $20,000',
  '$20,000 - $40,000',
  '$40,000 - $60,000',
  '$60,000 - $80,000',
  'Above $80,000',
];

const accommodationTypes = [
  'On-campus Dormitory',
  'Off-campus Apartment',
  'Homestay',
  'Shared Accommodation',
  'No Preference',
];

export const StudyPreferencesForm = ({
  studentId,
  initialData,
  onSave,
}: StudyPreferencesFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<StudyPreferences>({
    preferredCountries: [],
    preferredPrograms: [],
    studyLevel: '',
    intakePreference: [],
    budgetRange: '',
    accommodation: '',
    ...initialData,
  });

  const handleCheckboxChange = (
    field: 'preferredCountries' | 'preferredPrograms' | 'intakePreference',
    value: string,
    checked: boolean
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value),
    }));
  };

  const handleSelectChange = (field: keyof StudyPreferences, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await apiService.updateStudyPreferences(studentId, formData);
      toast({
        title: 'Study Preferences Updated',
        description: 'Your study preferences have been saved successfully.',
      });
      onSave();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save study preferences. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader className="border-b bg-gradient-to-r from-success/5 to-primary/5">
        <CardTitle className="flex items-center gap-2 text-success">
          <Target className="h-5 w-5" />
          Study Preferences
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Preferred Countries */}
          <div className="space-y-4">
            <Label className="flex items-center gap-2 text-base font-semibold">
              <MapPin className="h-4 w-4" />
              Preferred Study Destinations *
            </Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {countries.map(country => (
                <div key={country} className="flex items-center space-x-2">
                  <Checkbox
                    id={`country-${country}`}
                    checked={formData.preferredCountries.includes(country)}
                    onCheckedChange={checked =>
                      handleCheckboxChange(
                        'preferredCountries',
                        country,
                        checked as boolean
                      )
                    }
                  />
                  <Label htmlFor={`country-${country}`} className="text-sm">
                    {country}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Study Level */}
          <div className="space-y-2">
            <Label htmlFor="studyLevel" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Study Level *
            </Label>
            <Select
              value={formData.studyLevel}
              onValueChange={value => handleSelectChange('studyLevel', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your preferred study level" />
              </SelectTrigger>
              <SelectContent>
                {studyLevels.map(level => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Preferred Programs */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">
              Preferred Programs/Fields of Study *
            </Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {programs.map(program => (
                <div key={program} className="flex items-center space-x-2">
                  <Checkbox
                    id={`program-${program}`}
                    checked={formData.preferredPrograms.includes(program)}
                    onCheckedChange={checked =>
                      handleCheckboxChange(
                        'preferredPrograms',
                        program,
                        checked as boolean
                      )
                    }
                  />
                  <Label htmlFor={`program-${program}`} className="text-sm">
                    {program}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Intake Preferences */}
          <div className="space-y-4">
            <Label className="flex items-center gap-2 text-base font-semibold">
              <Clock className="h-4 w-4" />
              Preferred Intake Seasons *
            </Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {intakes.map(intake => (
                <div key={intake} className="flex items-center space-x-2">
                  <Checkbox
                    id={`intake-${intake}`}
                    checked={formData.intakePreference.includes(intake)}
                    onCheckedChange={checked =>
                      handleCheckboxChange(
                        'intakePreference',
                        intake,
                        checked as boolean
                      )
                    }
                  />
                  <Label htmlFor={`intake-${intake}`} className="text-sm">
                    {intake}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Budget & Accommodation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="budgetRange" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Budget Range (Annual Tuition) *
              </Label>
              <Select
                value={formData.budgetRange}
                onValueChange={value =>
                  handleSelectChange('budgetRange', value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map(range => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="accommodation"
                className="flex items-center gap-2"
              >
                <Home className="h-4 w-4" />
                Accommodation Preference *
              </Label>
              <Select
                value={formData.accommodation}
                onValueChange={value =>
                  handleSelectChange('accommodation', value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select accommodation type" />
                </SelectTrigger>
                <SelectContent>
                  {accommodationTypes.map(type => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button
              type="submit"
              disabled={loading}
              className="bg-gradient-primary hover:opacity-90 px-8"
            >
              {loading ? 'Saving...' : 'Save Study Preferences'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

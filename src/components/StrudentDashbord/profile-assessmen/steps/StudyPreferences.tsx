import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import type { StudyPreferencesData } from '@/types/profileAssessment';

interface StudyPreferencesProps {
  data: StudyPreferencesData;
  onChange: (field: keyof StudyPreferencesData, value: string | string[]) => void;
  disabled?: boolean;
}

const PREFERRED_COUNTRIES = [
  'USA',
  'UK',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Netherlands',
  'Sweden',
  'Ireland',
  'Switzerland',
  'New Zealand',
  'Singapore',
];

export default function StudyPreferences({
  data,
  onChange,
  disabled = false,
}: StudyPreferencesProps) {
  const handleCountryChange = (country: string, checked: boolean) => {
    const updated = checked
      ? [...data.preferredCountries, country]
      : data.preferredCountries.filter(c => c !== country);
    onChange('preferredCountries', updated);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border-green-200 bg-gradient-to-r from-green-50/50 to-emerald-50/50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Study Preferences</CardTitle>
              <CardDescription>
                Where and what would you like to study?
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>
              Preferred Countries <span className="text-red-500">*</span>
            </Label>
            <p className="text-sm text-gray-500">
              Select at least one country you'd like to study in
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {PREFERRED_COUNTRIES.map(country => (
                <div key={country} className="flex items-center space-x-2">
                  <Checkbox
                    id={country}
                    checked={data.preferredCountries.includes(country)}
                    onCheckedChange={checked =>
                      handleCountryChange(country, checked as boolean)
                    }
                    disabled={disabled}
                  />
                  <Label
                    htmlFor={country}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {country}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label>
                Preferred Degree Level <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={data.preferredDegreeLevel}
                onValueChange={value => onChange('preferredDegreeLevel', value)}
                disabled={disabled}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  <RadioGroupItem value="bachelor" id="bachelor" />
                  <Label htmlFor="bachelor" className="cursor-pointer font-normal">
                    Bachelor's Degree
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  <RadioGroupItem value="master" id="master" />
                  <Label htmlFor="master" className="cursor-pointer font-normal">
                    Master's Degree
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  <RadioGroupItem value="phd" id="phd" />
                  <Label htmlFor="phd" className="cursor-pointer font-normal">
                    PhD
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  <RadioGroupItem value="other" id="other-degree" />
                  <Label htmlFor="other-degree" className="cursor-pointer font-normal">
                    Other
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label htmlFor="budget">
                Budget Range (USD/Year) <span className="text-red-500">*</span>
              </Label>
              <Select
                value={data.budget}
                onValueChange={value => onChange('budget', value)}
                disabled={disabled}
              >
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select your budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-20k">$0 - $20,000</SelectItem>
                  <SelectItem value="20k-40k">$20,000 - $40,000</SelectItem>
                  <SelectItem value="40k-60k">$40,000 - $60,000</SelectItem>
                  <SelectItem value="60k-80k">$60,000 - $80,000</SelectItem>
                  <SelectItem value="80k+">$80,000+</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-gray-500 mt-2">
                This helps us recommend suitable programs and scholarship opportunities
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

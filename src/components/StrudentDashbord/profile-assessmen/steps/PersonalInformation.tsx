import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { PersonalInformationData } from '@/types/profileAssessment';

interface PersonalInformationProps {
  data: PersonalInformationData;
  onChange: (field: keyof PersonalInformationData, value: string) => void;
  disabled?: boolean;
}

const COUNTRIES = [
  { code: 'af', name: 'Afghanistan' },
  { code: 'bd', name: 'Bangladesh' },
  { code: 'in', name: 'India' },
  { code: 'pk', name: 'Pakistan' },
  { code: 'np', name: 'Nepal' },
  { code: 'lk', name: 'Sri Lanka' },
  { code: 'cn', name: 'China' },
  { code: 'ng', name: 'Nigeria' },
  { code: 'eg', name: 'Egypt' },
  { code: 'br', name: 'Brazil' },
  { code: 'mx', name: 'Mexico' },
  { code: 'other', name: 'Other' },
];

export default function PersonalInformation({
  data,
  onChange,
  disabled = false,
}: PersonalInformationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50/50 to-cyan-50/50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Personal Information</CardTitle>
              <CardDescription>
                Tell us about yourself to get started
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="fullName"
              placeholder="Enter your full name"
              value={data.fullName}
              onChange={e => onChange('fullName', e.target.value)}
              disabled={disabled}
              className="bg-white"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={data.email}
                onChange={e => onChange('email', e.target.value)}
                disabled={disabled}
                className="bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 234 567 8900"
                value={data.phone}
                onChange={e => onChange('phone', e.target.value)}
                disabled={disabled}
                className="bg-white"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">
                Age <span className="text-red-500">*</span>
              </Label>
              <Input
                id="age"
                type="number"
                placeholder="25"
                value={data.age}
                onChange={e => onChange('age', e.target.value)}
                disabled={disabled}
                min="16"
                max="100"
                className="bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nationality">
                Nationality <span className="text-red-500">*</span>
              </Label>
              <Select
                value={data.nationality}
                onValueChange={value => onChange('nationality', value)}
                disabled={disabled}
              >
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  {COUNTRIES.map(country => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

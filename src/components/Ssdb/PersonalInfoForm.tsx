import { useState, useEffect } from 'react';
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
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { PersonalInfo, apiService } from '@/services/studentdashboardapi';
import { User, Mail, Phone, MapPin, Calendar, Globe } from 'lucide-react';

interface PersonalInfoFormProps {
  studentId: string;
  initialData?: PersonalInfo;
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
  'India',
  'China',
  'Pakistan',
  'Bangladesh',
  'Nepal',
  'Sri Lanka',
];

const genders = ['Male', 'Female', 'Other', 'Prefer not to say'];

export const PersonalInfoForm = ({
  studentId,
  initialData,
  onSave,
}: PersonalInfoFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<PersonalInfo>({
    firstName: initialData?.firstName || '',
    lastName: initialData?.lastName || '',
    email: initialData?.email || '',
    phone: initialData?.phone || '',
    dateOfBirth: initialData?.dateOfBirth || '',
    nationality: initialData?.nationality || '',
    gender: initialData?.gender || '',
    address: initialData?.address || '',
    city: initialData?.city || '',
    country: initialData?.country || '',
    postalCode: initialData?.postalCode || '',
  });

  const handleInputChange = (field: keyof PersonalInfo, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate required fields
      const requiredFields = [
        'firstName',
        'lastName',
        'email',
        'phone',
        'dateOfBirth',
        'nationality',
        'gender',
        'address',
        'city',
        'country',
        'postalCode',
      ];
      const missingFields = requiredFields.filter(
        field => !formData[field as keyof PersonalInfo]
      );
      if (missingFields.length > 0) {
        toast({
          title: 'Validation Error',
          description: `Please fill in all required fields: ${missingFields.join(
            ', '
          )}.`,
          variant: 'destructive',
        });
        setLoading(false);
        return;
      }

      await apiService.updatePersonalInfo(studentId, formData);
      toast({
        title: 'Personal Information Updated',
        description: 'Your personal information has been saved successfully.',
      });
      onSave();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save personal information. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader className="border-b bg-gradient-to-r from-primary/5 to-secondary/5">
        <CardTitle className="flex items-center gap-2 text-primary">
          <User className="h-5 w-5" />
          Personal Information
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={e => handleInputChange('firstName', e.target.value)}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={e => handleInputChange('lastName', e.target.value)}
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={e => handleInputChange('email', e.target.value)}
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={e => handleInputChange('phone', e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          {/* Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Date of Birth *
              </Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={e => handleInputChange('dateOfBirth', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nationality" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Nationality *
              </Label>
              <Select
                value={formData.nationality}
                onValueChange={value => handleInputChange('nationality', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select nationality" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map(country => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Gender *</Label>
              <Select
                value={formData.gender}
                onValueChange={value => handleInputChange('gender', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  {genders.map(gender => (
                    <SelectItem key={gender} value={gender}>
                      {gender}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Address Information */}
          <div className="space-y-4">
            <Label className="flex items-center gap-2 text-base font-semibold">
              <MapPin className="h-4 w-4" />
              Address Information
            </Label>
            <div className="space-y-2">
              <Label htmlFor="address">Street Address *</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={e => handleInputChange('address', e.target.value)}
                placeholder="Enter your complete address"
                required
                rows={2}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={e => handleInputChange('city', e.target.value)}
                  placeholder="Enter your city"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <Select
                  value={formData.country}
                  onValueChange={value => handleInputChange('country', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map(country => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="postalCode">Postal Code *</Label>
                <Input
                  id="postalCode"
                  value={formData.postalCode}
                  onChange={e =>
                    handleInputChange('postalCode', e.target.value)
                  }
                  placeholder="Enter postal code"
                  required
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
              {loading ? 'Saving...' : 'Save Personal Information'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Globe, BookOpen, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import axios from 'axios';
import { submitAssessment } from '@/services/operations/Profile';

export default function AssessmentForm() {
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      age: '',
      nationality: '',
      phone: '',
    },
    academics: {
      currentEducation: '',
      fieldOfStudy: '',
      gpa: '',
      graduationYear: '',
      institution: '',
      ielts: '',
      toefl: '',
      gre: '',
    },
    preferences: {
      preferredCountries: [] as string[],
      preferredDegreeLevel: '',
      budget: '',
    },
    goals: {
      careerGoals: '',
      industry: '',
      workLocation: '',
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleInputChange = (
    section: keyof typeof formData,
    field: string,
    value: string | string[]
  ) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleCheckboxChange = (country: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        preferredCountries: checked
          ? [...prev.preferences.preferredCountries, country]
          : prev.preferences.preferredCountries.filter(c => c !== country),
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      console.log('Submitting form data:', formData);
      // ✅ Call the reusable submitAssessment function
      const result = await submitAssessment(formData);

      if (result.success) {
        setSuccess('Form submitted successfully!');

        // Optionally reset form
        setFormData({
          personalInfo: {
            fullName: '',
            email: '',
            age: '',
            nationality: '',
            phone: '',
          },
          academics: {
            currentEducation: '',
            fieldOfStudy: '',
            gpa: '',
            graduationYear: '',
            institution: '',
            ielts: '',
            toefl: '',
            gre: '',
          },
          preferences: {
            preferredCountries: [],
            preferredDegreeLevel: '',
            budget: '',
          },
          goals: {
            careerGoals: '',
            industry: '',
            workLocation: '',
          },
        });
      } else {
        setError(result.message || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formSections = [
    {
      id: 'personal',
      title: 'Personal Information',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'academic',
      title: 'Academic Background',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'preferences',
      title: 'Study Preferences',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 'goals',
      title: 'Career Goals',
      icon: Trophy,
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Information */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="border-blue-200 bg-gradient-to-r from-blue-50/50 to-cyan-50/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">Personal Information</CardTitle>
                <CardDescription>Tell us about yourself</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.personalInfo.fullName}
                  onChange={e =>
                    handleInputChange(
                      'personalInfo',
                      'fullName',
                      e.target.value
                    )
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.personalInfo.email}
                  onChange={e =>
                    handleInputChange('personalInfo', 'email', e.target.value)
                  }
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="25"
                  value={formData.personalInfo.age}
                  onChange={e =>
                    handleInputChange('personalInfo', 'age', e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality</Label>
                <Select
                  onValueChange={value =>
                    handleInputChange('personalInfo', 'nationality', value)
                  }
                  value={formData.personalInfo.nationality}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ba">Bangladesh</SelectItem>
                    <SelectItem value="in">India</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="+1 234 567 8900"
                  value={formData.personalInfo.phone}
                  onChange={e =>
                    handleInputChange('personalInfo', 'phone', e.target.value)
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Academic Background */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="border-purple-200 bg-gradient-to-r from-purple-50/50 to-pink-50/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">Academic Background</CardTitle>
                <CardDescription>Your educational history</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currentEducation">
                  Current Education Level
                </Label>
                <Select
                  onValueChange={value =>
                    handleInputChange('academics', 'currentEducation', value)
                  }
                  value={formData.academics.currentEducation}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                    <SelectItem value="master">Master's Degree</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="fieldOfStudy">Field of Study</Label>
                <Input
                  id="fieldOfStudy"
                  placeholder="e.g., Computer Science"
                  value={formData.academics.fieldOfStudy}
                  onChange={e =>
                    handleInputChange(
                      'academics',
                      'fieldOfStudy',
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gpa">GPA/Percentage</Label>
                <Input
                  id="gpa"
                  placeholder="3.8 or 85%"
                  value={formData.academics.gpa}
                  onChange={e =>
                    handleInputChange('academics', 'gpa', e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="graduationYear">Graduation Year</Label>
                <Input
                  id="graduationYear"
                  type="number"
                  placeholder="2024"
                  value={formData.academics.graduationYear}
                  onChange={e =>
                    handleInputChange(
                      'academics',
                      'graduationYear',
                      e.target.value
                    )
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution">Institution</Label>
                <Input
                  id="institution"
                  placeholder="University name"
                  value={formData.academics.institution}
                  onChange={e =>
                    handleInputChange(
                      'academics',
                      'institution',
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Standardized Test Scores</Label>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ielts">IELTS Score</Label>
                  <Input
                    id="ielts"
                    placeholder="7.5"
                    value={formData.academics.ielts}
                    onChange={e =>
                      handleInputChange('academics', 'ielts', e.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="toefl">TOEFL Score</Label>
                  <Input
                    id="toefl"
                    placeholder="100"
                    value={formData.academics.toefl}
                    onChange={e =>
                      handleInputChange('academics', 'toefl', e.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gre">GRE Score</Label>
                  <Input
                    id="gre"
                    placeholder="320"
                    value={formData.academics.gre}
                    onChange={e =>
                      handleInputChange('academics', 'gre', e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Study Preferences */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="border-green-200 bg-gradient-to-r from-green-50/50 to-emerald-50/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">Study Preferences</CardTitle>
                <CardDescription>
                  Where and what would you like to study?
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Preferred Countries</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  'USA',
                  'UK',
                  'Canada',
                  'Australia',
                  'Germany',
                  'France',
                  'Netherlands',
                  'Sweden',
                ].map(country => (
                  <div key={country} className="flex items-center space-x-2">
                    <Checkbox
                      id={country}
                      checked={formData.preferences.preferredCountries.includes(
                        country
                      )}
                      onCheckedChange={checked =>
                        handleCheckboxChange(country, checked as boolean)
                      }
                    />
                    <Label htmlFor={country} className="text-sm">
                      {country}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Preferred Degree Level</Label>
                <RadioGroup
                  onValueChange={value =>
                    handleInputChange(
                      'preferences',
                      'preferredDegreeLevel',
                      value
                    )
                  }
                  value={formData.preferences.preferredDegreeLevel}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bachelor" id="bachelor" />
                    <Label htmlFor="bachelor">Bachelor's</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="master" id="master" />
                    <Label htmlFor="master">Master's</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phd" id="phd" />
                    <Label htmlFor="phd">PhD</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range (USD)</Label>
                <Select
                  onValueChange={value =>
                    handleInputChange('preferences', 'budget', value)
                  }
                  value={formData.preferences.budget}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-20k">$0 - $20,000</SelectItem>
                    <SelectItem value="20k-40k">$20,000 - $40,000</SelectItem>
                    <SelectItem value="40k-60k">$40,000 - $60,000</SelectItem>
                    <SelectItem value="60k+">$60,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Career Goals */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="border-orange-200 bg-gradient-to-r from-orange-50/50 to-red-50/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                <Trophy className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">Career Goals</CardTitle>
                <CardDescription>
                  What are your professional aspirations?
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="careerGoals">Career Objectives</Label>
              <Textarea
                id="careerGoals"
                placeholder="Describe your career goals and what you hope to achieve..."
                rows={4}
                value={formData.goals.careerGoals}
                onChange={e =>
                  handleInputChange('goals', 'careerGoals', e.target.value)
                }
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="industry">Target Industry</Label>
                <Select
                  onValueChange={value =>
                    handleInputChange('goals', 'industry', value)
                  }
                  value={formData.goals.industry}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="workLocation">Preferred Work Location</Label>
                <Select
                  onValueChange={value =>
                    handleInputChange('goals', 'workLocation', value)
                  }
                  value={formData.goals.workLocation}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="home-country">Home Country</SelectItem>
                    <SelectItem value="study-country">
                      Country of Study
                    </SelectItem>
                    <SelectItem value="global">
                      Open to Global Opportunities
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Feedback Messages */}
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 text-center"
        >
          {error}
        </motion.div>
      )}
      {success && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-500 text-center"
        >
          {success}
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex justify-center"
      >
        <Button
          type="submit"
          size="lg"
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit for Assessment'}
          <Trophy className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </form>
  );
}

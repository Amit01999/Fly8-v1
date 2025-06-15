import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Globe,
  BookOpen,
  Trophy,
  Clock,
  MapPin,
} from 'lucide-react';
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

interface AssessmentFormProps {
  onSubmit: () => void;
}

export default function AssessmentForm({ onSubmit }: AssessmentFormProps) {
  const [formData, setFormData] = useState({
    personalInfo: {},
    academics: {},
    preferences: {},
    goals: {},
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
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
                <Input id="fullName" placeholder="Enter your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" placeholder="25" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in">India</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+1 234 567 8900" />
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
                <Select>
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
                <Input id="fieldOfStudy" placeholder="e.g., Computer Science" />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gpa">GPA/Percentage</Label>
                <Input id="gpa" placeholder="3.8 or 85%" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="graduationYear">Graduation Year</Label>
                <Input id="graduationYear" type="number" placeholder="2024" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution">Institution</Label>
                <Input id="institution" placeholder="University name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Standardized Test Scores</Label>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ielts">IELTS Score</Label>
                  <Input id="ielts" placeholder="7.5" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="toefl">TOEFL Score</Label>
                  <Input id="toefl" placeholder="100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gre">GRE Score</Label>
                  <Input id="gre" placeholder="320" />
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
                    <Checkbox id={country} />
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
                <RadioGroup>
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
                <Select>
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
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="industry">Target Industry</Label>
                <Select>
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
                <Select>
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
        >
          Submit for Assessment
          <Trophy className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </form>
  );
}

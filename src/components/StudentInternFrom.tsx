import React, { useState } from 'react';
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import {
  Award,
  TrendingUp,
  Users,
  Gift,
  FileText,
  MessageCircle,
  Search,
  Calendar,
  Globe,
  CheckCircle,
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Star,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import ModernFooter from './ModernFooter';
import Navber1 from './layout/Navber1';
import logo from '../assets/logo/logo2.png';

interface FormData {
  fullName: string;
  whatsappNumber: string;
  email: string;
  gender: string;
  presentAddress: string;
  permanentAddress: string;
  idNumber: string;
  university: string;
  department: string;
  currentYear: string;
  academicSession: string;
  careerGoal: string;
  studyRegions: string;
  facebook: string;
  linkedin: string;
  instagram: string;
  twitter: string;
  tiktok: string;
}

const Fly8Recruitment = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    whatsappNumber: '',
    email: '',
    gender: '',
    presentAddress: '',
    permanentAddress: '',
    idNumber: '',
    university: '',
    department: '',
    currentYear: '',
    academicSession: '',
    careerGoal: '',
    studyRegions: '',
    facebook: '',
    linkedin: '',
    instagram: '',
    twitter: '',
    tiktok: '',
  });

  const benefits = [
    {
      icon: Award,
      title: 'Official Certification',
      description: 'Get certified credentials to boost your resume',
    },
    {
      icon: TrendingUp,
      title: 'Skill Development Training',
      description: 'Comprehensive training programs for professional growth',
    },
    {
      icon: Globe,
      title: 'Online Promotion Strategy',
      description: 'Learn digital marketing and online presence building',
    },
    {
      icon: Users,
      title: 'Branding Strategy Learning',
      description: 'Master personal and corporate branding techniques',
    },
    {
      icon: CheckCircle,
      title: 'Paid Internship for Top Performers',
      description: 'Outstanding interns receive paid opportunities',
    },
    {
      icon: Gift,
      title: 'Monthly Gifts & Recognition',
      description: 'Regular rewards and recognition for achievements',
    },
  ];

  const responsibilities = [
    {
      icon: MessageCircle,
      title: 'Student Support & Communication',
      description: 'Help students with queries and guidance',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileText,
      title: 'Application Process Assistance',
      description: 'Guide applicants through various processes',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Search,
      title: 'Research & Data Collection',
      description: 'Conduct research and gather important data',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: TrendingUp,
      title: 'Marketing & Outreach',
      description: 'Promote Fly8 across university networks',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Calendar,
      title: 'Event Coordination',
      description: 'Help organize and manage Fly8 events',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Globe,
      title: 'Visa Processing Support',
      description: 'Assist with visa applications under supervision',
      color: 'from-teal-500 to-blue-500',
    },
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.whatsappNumber ||
      !formData.university
    ) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    try {
      // For now, we'll just log the data and show success
      // In a real application with MongoDB, you would send this to your backend
      console.log('Form Data:', formData);

      // Simulate API call
      setTimeout(() => {
        toast({
          title: 'Application Submitted Successfully! 🎉',
          description:
            "Thank you for applying to Fly8. We'll contact you soon!",
        });

        // Reset form
        setFormData({
          fullName: '',
          whatsappNumber: '',
          email: '',
          gender: '',
          presentAddress: '',
          permanentAddress: '',
          idNumber: '',
          university: '',
          department: '',
          currentYear: '',
          academicSession: '',
          careerGoal: '',
          studyRegions: '',
          facebook: '',
          linkedin: '',
          instagram: '',
          twitter: '',
          tiktok: '',
        });
      }, 1000);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit application. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navber1 />
      </div>
      <div className="min-h-screen bg-gray-50 relative">
        {/* Enhanced Hero Section with Cover Image */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-32">
          {/* Background Cover Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            }}
          ></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/85 to-pink-900/90"></div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-300"></div>
            <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-white/15 rounded-full animate-bounce delay-700"></div>

            {/* Floating Icons */}
            <div className="absolute top-1/4 left-1/6 animate-float">
              <GraduationCap className="w-8 h-8 text-white/30" />
            </div>
            <div className="absolute top-3/4 right-1/6 animate-float delay-1000">
              <Globe className="w-6 h-6 text-white/30" />
            </div>
            <div className="absolute top-1/2 right-1/4 animate-float delay-500">
              <Star className="w-5 h-5 text-white/30" />
            </div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white mb-10">
            {/* Logo Section */}
            {/* <div className="mb-8 mt-10 animate-fade-in">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30 shadow-2xl hover:scale-110 transition-transform duration-300">
                <img src={logo} alt="Fly8" />
              </div>
            </div> */}

            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in leading-tight text-transparent bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-center">
              <span className="flex justify-center items-center gap-4">
                Join
                <img
                  src={logo}
                  alt="Fly8"
                  className="h-16 md:h-28 inline-block"
                />
              </span>
              <span className="block text-5xl md:text-7xl bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mt-4">
                Build Your Future, Globally
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl md:text-3xl mb-12 opacity-95 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300">
              Get certified, grow your skills, and unlock global opportunities
              through our exclusive internship program.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto animate-fade-in delay-500">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-300">500+</div>
                <div className="text-white/80">Students Trained</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-300">50+</div>
                <div className="text-white/80">Universities</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-blue-300">95%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-700">
              <Button
                onClick={scrollToForm}
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black text-xl px-12 py-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold group"
              >
                <Sparkles className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                Apply Now
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-xl px-8 py-8 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute mt-5 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Why Join Fly8?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover the amazing benefits and opportunities waiting for you
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="text-center relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-center text-gray-600 leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Responsibilities Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                What You'll Do as a Fly8 Intern
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your exciting journey starts with these key responsibilities
              </p>
            </div>

            {/* Modern Masonry-style Grid Layout */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {responsibilities.map((responsibility, index) => (
                <div key={index} className="break-inside-avoid group">
                  <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative">
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${responsibility.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    {/* Decorative Top Bar */}
                    <div
                      className={`h-2 bg-gradient-to-r ${responsibility.color}`}
                    ></div>

                    <CardHeader className="relative z-10 pb-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${responsibility.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <responsibility.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                        {responsibility.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10 pt-0">
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {responsibility.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Application Form Section */}
        <section
          id="application-form"
          className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-slate-900/95"></div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Apply Now
              </h2>
              <p className="text-2xl text-blue-100 max-w-2xl mx-auto">
                Start your journey with Fly8 today and unlock your potential
              </p>
            </div>

            <Card className="shadow-2xl border-0 backdrop-blur-sm bg-white/95 overflow-hidden rounded-3xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
                {/* Enhanced Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
                <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

                <div className="relative z-10 text-center py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30 shadow-xl">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-4xl mb-3 font-bold">
                    Fly8 Internship Application
                  </CardTitle>
                  <CardDescription className="text-blue-100 text-xl">
                    Fill out the form below to join our amazing team
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="p-8 md:p-12 bg-gradient-to-br from-white to-blue-50/30">
                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800">
                          Personal Information
                        </h3>
                        <p className="text-gray-600">Tell us about yourself</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <Label
                          htmlFor="fullName"
                          className="text-sm font-semibold text-gray-700 mb-3 items-center gap-2"
                        >
                          <User className="w-4 h-4" />
                          Full Name *
                        </Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={e =>
                            handleInputChange('fullName', e.target.value)
                          }
                          placeholder="Enter your full name"
                          className="h-14 border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 rounded-xl text-lg bg-white/80 backdrop-blur-sm"
                          required
                        />
                      </div>
                      <div className="group">
                        <Label
                          htmlFor="whatsappNumber"
                          className="text-sm font-semibold text-gray-700 mb-3  items-center gap-2"
                        >
                          <Phone className="w-4 h-4" />
                          WhatsApp Number *
                        </Label>
                        <Input
                          id="whatsappNumber"
                          value={formData.whatsappNumber}
                          onChange={e =>
                            handleInputChange('whatsappNumber', e.target.value)
                          }
                          placeholder="+880XXXXXXXXX"
                          className="h-14 border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 rounded-xl text-lg bg-white/80 backdrop-blur-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <Label
                          htmlFor="email"
                          className="text-sm font-semibold text-gray-700 mb-3  items-center gap-2"
                        >
                          <Mail className="w-4 h-4" />
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={e =>
                            handleInputChange('email', e.target.value)
                          }
                          placeholder="your.email@example.com"
                          className="h-14 border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 rounded-xl text-lg bg-white/80 backdrop-blur-sm"
                          required
                        />
                      </div>
                      <div className="group">
                        <Label
                          htmlFor="gender"
                          className="text-sm font-semibold text-gray-700 mb-3 block"
                        >
                          Gender *
                        </Label>
                        <Select
                          value={formData.gender}
                          onValueChange={value =>
                            handleInputChange('gender', value)
                          }
                        >
                          <SelectTrigger className="h-14 border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 rounded-xl text-lg bg-white/80 backdrop-blur-sm">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Continue with existing form fields but enhanced styling */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <Label
                          htmlFor="presentAddress"
                          className="text-sm font-semibold text-gray-700 mb-3  items-center gap-2"
                        >
                          <MapPin className="w-4 h-4" />
                          Present Address *
                        </Label>
                        <Textarea
                          id="presentAddress"
                          value={formData.presentAddress}
                          onChange={e =>
                            handleInputChange('presentAddress', e.target.value)
                          }
                          placeholder="Enter your current address"
                          className="min-h-[120px] border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 rounded-xl resize-none text-lg bg-white/80 backdrop-blur-sm"
                          required
                        />
                      </div>
                      <div className="group">
                        <Label
                          htmlFor="permanentAddress"
                          className="text-sm font-semibold text-gray-700 mb-3  items-center gap-2"
                        >
                          <MapPin className="w-4 h-4" />
                          Permanent Address *
                        </Label>
                        <Textarea
                          id="permanentAddress"
                          value={formData.permanentAddress}
                          onChange={e =>
                            handleInputChange(
                              'permanentAddress',
                              e.target.value
                            )
                          }
                          placeholder="Enter your permanent address"
                          className="min-h-[120px] border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 rounded-xl resize-none text-lg bg-white/80 backdrop-blur-sm"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="idNumber"
                        className="text-sm font-semibold text-gray-700 mb-3 block"
                      >
                        NID/Passport/Birth Certificate Number *
                      </Label>
                      <Input
                        id="idNumber"
                        value={formData.idNumber}
                        onChange={e =>
                          handleInputChange('idNumber', e.target.value)
                        }
                        placeholder="Enter your ID number"
                        className="h-14 border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 rounded-xl text-lg bg-white/80 backdrop-blur-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800">
                          Academic Information
                        </h3>
                        <p className="text-gray-600">
                          Your educational background
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="university"
                          className="text-sm font-semibold text-gray-700 mb-3 block"
                        >
                          University *
                        </Label>
                        <Input
                          id="university"
                          value={formData.university}
                          onChange={e =>
                            handleInputChange('university', e.target.value)
                          }
                          placeholder="Enter your university name"
                          className="h-14 border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 rounded-xl text-lg bg-white/80 backdrop-blur-sm"
                          required
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="department"
                          className="text-sm font-semibold text-gray-700 mb-3 block"
                        >
                          Department *
                        </Label>
                        <Input
                          id="department"
                          value={formData.department}
                          onChange={e =>
                            handleInputChange('department', e.target.value)
                          }
                          placeholder="Enter your department"
                          className="h-14 border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 rounded-xl text-lg bg-white/80 backdrop-blur-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="currentYear"
                          className="text-sm font-semibold text-gray-700 mb-3 block"
                        >
                          Current Academic Year *
                        </Label>
                        <Select
                          value={formData.currentYear}
                          onValueChange={value =>
                            handleInputChange('currentYear', value)
                          }
                        >
                          <SelectTrigger className="h-14 border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 rounded-xl text-lg bg-white/80 backdrop-blur-sm">
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1st">1st Year</SelectItem>
                            <SelectItem value="2nd">2nd Year</SelectItem>
                            <SelectItem value="3rd">3rd Year</SelectItem>
                            <SelectItem value="4th">4th Year</SelectItem>
                            <SelectItem value="masters">Masters</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label
                          htmlFor="academicSession"
                          className="text-sm font-semibold text-gray-700 mb-3 block"
                        >
                          Academic Session *
                        </Label>
                        <Input
                          id="academicSession"
                          value={formData.academicSession}
                          onChange={e =>
                            handleInputChange('academicSession', e.target.value)
                          }
                          placeholder="e.g., 2020-2024"
                          className="h-14 border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 rounded-xl text-lg bg-white/80 backdrop-blur-sm"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Career Goals */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800">
                          Career Goals
                        </h3>
                        <p className="text-gray-600">
                          Where do you see yourself?
                        </p>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-gray-700 mb-6 block">
                        Career Goal *
                      </Label>
                      <RadioGroup
                        value={formData.careerGoal}
                        onValueChange={value =>
                          handleInputChange('careerGoal', value)
                        }
                        className="space-y-4"
                      >
                        <div className="flex items-center space-x-4 p-6 border-2 border-gray-200 rounded-xl hover:border-blue-300 transition-all duration-300 bg-white/80 backdrop-blur-sm">
                          <RadioGroupItem value="bangladesh" id="bangladesh" />
                          <Label
                            htmlFor="bangladesh"
                            className="text-gray-700 cursor-pointer text-lg"
                          >
                            Develop my career in Bangladesh
                          </Label>
                        </div>
                        <div className="flex items-center space-x-4 p-6 border-2 border-gray-200 rounded-xl hover:border-blue-300 transition-all duration-300 bg-white/80 backdrop-blur-sm">
                          <RadioGroupItem value="abroad" id="abroad" />
                          <Label
                            htmlFor="abroad"
                            className="text-gray-700 cursor-pointer text-lg"
                          >
                            Establish my career abroad
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {formData.careerGoal === 'abroad' && (
                      <div className="animate-fade-in">
                        <Label
                          htmlFor="studyRegions"
                          className="text-sm font-semibold text-gray-700 mb-3 block"
                        >
                          Preferred Regions for Higher Studies (Max 3)
                        </Label>
                        <Input
                          id="studyRegions"
                          value={formData.studyRegions}
                          onChange={e =>
                            handleInputChange('studyRegions', e.target.value)
                          }
                          placeholder="e.g., North America, Europe, Australia"
                          className="h-14 border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 rounded-xl text-lg bg-white/80 backdrop-blur-sm"
                        />
                      </div>
                    )}
                  </div>

                  {/* Social Media */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800">
                          Social Media Handles
                        </h3>
                        <p className="text-gray-600">
                          Connect with us online (Optional)
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="facebook"
                          className="text-sm font-semibold text-gray-700 mb-3 block"
                        >
                          Facebook
                        </Label>
                        <Input
                          id="facebook"
                          value={formData.facebook}
                          onChange={e =>
                            handleInputChange('facebook', e.target.value)
                          }
                          placeholder="facebook.com/yourprofile"
                          className="h-14 border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 rounded-xl text-lg bg-white/80 backdrop-blur-sm"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="linkedin"
                          className="text-sm font-semibold text-gray-700 mb-3 block"
                        >
                          LinkedIn
                        </Label>
                        <Input
                          id="linkedin"
                          value={formData.linkedin}
                          onChange={e =>
                            handleInputChange('linkedin', e.target.value)
                          }
                          placeholder="linkedin.com/in/yourprofile"
                          className="h-14 border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 rounded-xl text-lg bg-white/80 backdrop-blur-sm"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="instagram"
                          className="text-sm font-semibold text-gray-700 mb-3 block"
                        >
                          Instagram
                        </Label>
                        <Input
                          id="instagram"
                          value={formData.instagram}
                          onChange={e =>
                            handleInputChange('instagram', e.target.value)
                          }
                          placeholder="@yourusername"
                          className="h-14 border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 rounded-xl text-lg bg-white/80 backdrop-blur-sm"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="twitter"
                          className="text-sm font-semibold text-gray-700 mb-3 block"
                        >
                          X (Twitter)
                        </Label>
                        <Input
                          id="twitter"
                          value={formData.twitter}
                          onChange={e =>
                            handleInputChange('twitter', e.target.value)
                          }
                          placeholder="@yourusername"
                          className="h-14 border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 rounded-xl text-lg bg-white/80 backdrop-blur-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <Label
                        htmlFor="tiktok"
                        className="text-sm font-semibold text-gray-700 mb-3 block"
                      >
                        TikTok
                      </Label>
                      <Input
                        id="tiktok"
                        value={formData.tiktok}
                        onChange={e =>
                          handleInputChange('tiktok', e.target.value)
                        }
                        placeholder="@yourusername"
                        className="h-14 border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 rounded-xl text-lg bg-white/80 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white py-10 text-2xl font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <Sparkles className="mr-4 h-8 w-8" />
                    Submit Application
                    <ArrowRight className="ml-4 h-8 w-8" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <ModernFooter />
    </>
  );
};

export default Fly8Recruitment;

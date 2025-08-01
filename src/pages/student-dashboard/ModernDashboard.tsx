import type React from 'react';
import {
  Search,
  Bell,
  Plus,
  Home,
  BookOpen,
  FileText,
  CreditCard,
  Settings,
  HelpCircle,
  ChevronRight,
  Sparkles,
  Zap,
  Calendar,
  BellRing,
  User,
  Briefcase,
  GraduationCap,
  Globe,
  Clock,
  ArrowRight,
  CheckCircle2,
  LayoutDashboard,
  Bot,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Define types for our components
interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: string | number;
  color?: string;
}

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

interface NotificationItemProps {
  title: string;
  time: string;
  isNew?: boolean;
  icon?: React.ReactNode;
}

interface AppointmentItemProps {
  title: string;
  date: string;
  time: string;
  icon?: React.ReactNode;
}

interface MessageItemProps {
  name: string;
  message: string;
  time: string;
  avatar: string;
  online?: boolean;
}

interface OfferCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  buttonText?: string;
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  buttonText?: string;
}

const DashboardModern: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-3 flex items-center justify-between sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
            FLX
          </h1>
          <div className="relative w-80">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search Here"
              className="pl-10 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 focus-visible:ring-fuchsia-500 rounded-full"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </Button>
          <div className="flex items-center gap-3 border-l border-slate-200 dark:border-slate-700 pl-5">
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium">Alex Morgan</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                @12345678
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-9 w-9 border-2 border-fuchsia-200 dark:border-fuchsia-900 cursor-pointer">
                  <AvatarImage
                    src="/placeholder.svg?height=36&width=36"
                    alt="User"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-fuchsia-500 to-blue-600 text-white">
                    AM
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-72 bg-white dark:bg-slate-800 flex flex-col overflow-y-auto shadow-lg z-10">
          {/* Services Section */}
          <SidebarSection
            title="SERVICES"
            gradientFrom="from-fuchsia-600"
            gradientTo="to-purple-600"
          >
            <SidebarItem
              icon={<Sparkles className="h-4 w-4" />}
              label="Preparation Support"
              active
              color="fuchsia"
            />
            <SidebarItem
              icon={<FileText className="h-4 w-4" />}
              label="Profile Assessment"
              color="fuchsia"
            />
            <SidebarItem
              icon={<BookOpen className="h-4 w-4" />}
              label="Apply University"
              badge="New"
              color="fuchsia"
            />
            <SidebarItem
              icon={<FileText className="h-4 w-4" />}
              label="Document Support"
              color="fuchsia"
            />
            <SidebarItem
              icon={<Globe className="h-4 w-4" />}
              label="Visa Support"
              color="fuchsia"
            />
            <SidebarItem
              icon={<Home className="h-4 w-4" />}
              label="Find Accommodation"
              color="fuchsia"
            />
            <SidebarItem
              icon={<CreditCard className="h-4 w-4" />}
              label="Education Loan"
              color="fuchsia"
            />
            <SidebarItem
              icon={<Briefcase className="h-4 w-4" />}
              label="Find Jobs"
              color="fuchsia"
            />
          </SidebarSection>

          {/* My Account Section */}
          <SidebarSection
            title="MY ACCOUNT"
            gradientFrom="from-blue-600"
            gradientTo="to-cyan-600"
          >
            <SidebarItem
              icon={<CreditCard className="h-4 w-4" />}
              label="Subscriptions"
              color="blue"
            />
            <SidebarItem
              icon={<FileText className="h-4 w-4" />}
              label="Progress Report"
              badge={3}
              color="blue"
            />
            <SidebarItem
              icon={<Clock className="h-4 w-4" />}
              label="Payment History"
              color="blue"
            />
            <SidebarItem
              icon={<Settings className="h-4 w-4" />}
              label="Settings"
              color="blue"
            />
            <SidebarItem
              icon={<HelpCircle className="h-4 w-4" />}
              label="Help"
              color="blue"
            />
          </SidebarSection>

          {/* Shortcuts Section */}
          <SidebarSection
            title="SHORTCUTS"
            gradientFrom="from-emerald-600"
            gradientTo="to-teal-600"
          >
            <div className="px-4 py-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-slate-600 dark:text-slate-300 border-dashed border-slate-300 dark:border-slate-600 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-lg"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Shortcut
              </Button>
            </div>
          </SidebarSection>
        </div>

        {/* Center Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Tabs */}
          <Tabs defaultValue="dashboard" className="mb-6">
            <TabsList className="w-full grid grid-cols-3 h-14 rounded-xl bg-white dark:bg-slate-800 p-1 shadow-md">
              <TabsTrigger
                value="dashboard"
                className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-fuchsia-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
              >
                <LayoutDashboard className="h-5 w-5 mr-2" />
                DASHBOARD
              </TabsTrigger>
              <TabsTrigger
                value="ai-assistance"
                className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-fuchsia-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
              >
                <Bot className="h-5 w-5 mr-2" />
                AI ASSISTANCE
              </TabsTrigger>
              <TabsTrigger
                value="book-appointment"
                className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-fuchsia-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
              >
                <Calendar className="h-5 w-5 mr-2" />
                BOOK APPOINTMENT
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="mt-6">
              {/* Hero Banner */}
              <div className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-blue-600 p-8 mb-8 text-white relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mt-10 -mr-10"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full -mb-10 -ml-10"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white opacity-5 rounded-full"></div>

                <h2 className="text-3xl font-bold mb-3 relative">
                  Welcome back, Alex!
                </h2>
                <p className="mb-6 max-w-lg opacity-90 text-lg relative">
                  Your application to University of Technology is under review.
                  Check back in 2 days for updates.
                </p>
                <Button className="bg-white text-fuchsia-700 hover:bg-slate-100 rounded-lg px-6 py-5 text-sm font-medium relative">
                  View Application
                </Button>

                {/* Pagination dots */}
                <div className="absolute bottom-6 right-8 flex gap-1.5">
                  <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-white/40 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-white/40 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-white/40 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-white/40 rounded-full"></div>
                </div>
              </div>

              {/* Offers Section */}
              <div className="mb-10">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-bold text-xl text-slate-800 dark:text-slate-200 flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-amber-500" />
                    OFFERS
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 font-medium"
                  >
                    View All <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <OfferCard
                    title="50% Off Visa Consultation"
                    description="Limited time offer for premium members. Expires in 3 days."
                    icon={<Zap className="h-5 w-5" />}
                    gradientFrom="from-amber-500"
                    gradientTo="to-orange-500"
                    buttonText="Claim Now"
                  />
                  <OfferCard
                    title="Free Resume Review"
                    description="Get expert feedback on your resume from our career advisors."
                    icon={<FileText className="h-5 w-5" />}
                    gradientFrom="from-emerald-500"
                    gradientTo="to-teal-500"
                    buttonText="Get Started"
                  />
                  <OfferCard
                    title="Scholarship Alert"
                    description="New scholarship opportunities available for international students."
                    icon={<GraduationCap className="h-5 w-5" />}
                    gradientFrom="from-sky-500"
                    gradientTo="to-blue-500"
                    buttonText="View Details"
                  />
                </div>
              </div>

              {/* Features Section */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-bold text-xl text-slate-800 dark:text-slate-200 flex items-center">
                    <Sparkles className="mr-2 h-5 w-5 text-fuchsia-500" />
                    FEATURES
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 font-medium"
                  >
                    View All <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FeatureCard
                    title="University Matcher"
                    description="Find the perfect university based on your profile and preferences."
                    icon={<GraduationCap className="h-5 w-5" />}
                    gradientFrom="from-fuchsia-500"
                    gradientTo="to-purple-600"
                    buttonText="Find Universities"
                  />
                  <FeatureCard
                    title="Document Checker"
                    description="Verify your documents meet requirements before submission."
                    icon={<CheckCircle2 className="h-5 w-5" />}
                    gradientFrom="from-blue-500"
                    gradientTo="to-indigo-600"
                    buttonText="Check Documents"
                  />
                  <FeatureCard
                    title="AI Essay Review"
                    description="Get instant feedback on your application essays with AI."
                    icon={<Bot className="h-5 w-5" />}
                    gradientFrom="from-pink-500"
                    gradientTo="to-rose-600"
                    buttonText="Review Essay"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ai-assistance" className="mt-6">
              <Card className="border-0 shadow-xl rounded-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white p-6">
                  <CardTitle className="text-2xl flex items-center">
                    <Bot className="mr-2 h-6 w-6" />
                    AI Assistance
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Our AI assistant can help you with various tasks related to
                    your education journey.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white rounded-lg h-auto py-4 justify-start">
                      <FileText className="mr-2 h-5 w-5" />
                      Essay Review
                    </Button>
                    <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg h-auto py-4 justify-start">
                      <GraduationCap className="mr-2 h-5 w-5" />
                      University Recommendations
                    </Button>
                    <Button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg h-auto py-4 justify-start">
                      <Globe className="mr-2 h-5 w-5" />
                      Visa Requirements
                    </Button>
                    <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg h-auto py-4 justify-start">
                      <Briefcase className="mr-2 h-5 w-5" />
                      Career Guidance
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="book-appointment" className="mt-6">
              <Card className="border-0 shadow-xl rounded-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white p-6">
                  <CardTitle className="text-2xl flex items-center">
                    <Calendar className="mr-2 h-6 w-6" />
                    Book Appointment
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Schedule a meeting with our experts to get personalized
                    guidance.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Card className="border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-4 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400 mb-3">
                          <User className="h-6 w-6" />
                        </div>
                        <h3 className="font-medium mb-1">Academic Advisor</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                          30 min session
                        </p>
                        <Button className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white">
                          Book
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-4 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3">
                          <Globe className="h-6 w-6" />
                        </div>
                        <h3 className="font-medium mb-1">Visa Consultant</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                          45 min session
                        </p>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          Book
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-4 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-3">
                          <Briefcase className="h-6 w-6" />
                        </div>
                        <h3 className="font-medium mb-1">Career Coach</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                          60 min session
                        </p>
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                          Book
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 flex flex-col overflow-y-auto">
          {/* Updates Section */}
          <Card className="rounded-none border-0 shadow-none h-1/3">
            <CardHeader className="pb-2 pt-6 px-6">
              <CardTitle className="text-base font-semibold flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-fuchsia-500 to-purple-600 rounded-full mr-3"></div>
                UPDATES
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-4 space-y-3 overflow-y-auto">
              <NotificationItem
                title="Your application status has changed"
                time="2 hours ago"
                isNew
                icon={<BellRing className="h-4 w-4" />}
              />
              <NotificationItem
                title="New scholarship opportunity available"
                time="Yesterday"
                icon={<GraduationCap className="h-4 w-4" />}
              />
              <NotificationItem
                title="Document verification completed"
                time="2 days ago"
                icon={<CheckCircle2 className="h-4 w-4" />}
              />
            </CardContent>
            <CardFooter className="px-6 pt-0 pb-4">
              {/* <Button
                variant="ghost"
                size="sm"
                className="w-full text-xs text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 border border-slate-200 dark:border-slate-700 rounded-lg"
              >
                View All Updates
              </Button> */}
            </CardFooter>
          </Card>

          {/* Appointments Section */}
          <Card className="rounded-none border-0 shadow-none h-1/3 border-t border-slate-200 dark:border-slate-700">
            <CardHeader className="pb-2 pt-6 px-6">
              <CardTitle className="text-base font-semibold flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full mr-3"></div>
                APPOINTMENTS
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-4 space-y-3 overflow-y-auto">
              <AppointmentItem
                title="Visa Consultation"
                date="May 16, 2025"
                time="10:00 AM"
                icon={<Globe className="h-4 w-4" />}
              />
              <AppointmentItem
                title="University Advisor Meeting"
                date="May 18, 2025"
                time="2:30 PM"
                icon={<GraduationCap className="h-4 w-4" />}
              />
              <AppointmentItem
                title="Document Review Session"
                date="May 20, 2025"
                time="11:15 AM"
                icon={<FileText className="h-4 w-4" />}
              />
            </CardContent>
            <CardFooter className="px-6 pt-0 pb-4">
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 border border-slate-200 dark:border-slate-700 rounded-lg"
              >
                View All Appointments
              </Button>
            </CardFooter>
          </Card>

          {/* Messages Section */}
          <Card className="rounded-none border-0 shadow-none h-1/3 border-t border-slate-200 dark:border-slate-700">
            <CardHeader className="pb-2 pt-6 px-6">
              <CardTitle className="text-base font-semibold flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full mr-3"></div>
                MESSAGES
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-4 space-y-3 overflow-y-auto">
              <MessageItem
                name="Sarah Johnson"
                message="Hi Alex, I've reviewed your application and..."
                time="10:42 AM"
                avatar="/placeholder.svg?height=40&width=40"
                online
              />
              <MessageItem
                name="David Wilson"
                message="Your documents have been processed. Please check..."
                time="Yesterday"
                avatar="/placeholder.svg?height=40&width=40"
              />
              <MessageItem
                name="Emma Thompson"
                message="Regarding your accommodation request, we have..."
                time="May 12"
                avatar="/placeholder.svg?height=40&width=40"
              />
            </CardContent>
            <CardFooter className="px-6 pt-0 pb-4">
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 rounded-lg"
              >
                View All Messages
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Component implementations
const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  children,
  gradientFrom,
  gradientTo,
}) => {
  return (
    <div className="py-5 px-4">
      <h2
        className={`text-xs font-bold mb-4 bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent flex items-center`}
      >
        <div
          className={`w-1 h-5 bg-gradient-to-b ${gradientFrom} ${gradientTo} rounded-full mr-2`}
        ></div>
        {title}
      </h2>
      <div className="space-y-1 pl-3">{children}</div>
    </div>
  );
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  active = false,
  badge,
  color = 'fuchsia',
}) => {
  const getColorClasses = (color: string) => {
    const colors: Record<
      string,
      { active: string; hover: string; icon: string }
    > = {
      fuchsia: {
        active:
          'text-fuchsia-600 dark:text-fuchsia-400 bg-fuchsia-50 dark:bg-fuchsia-900/20',
        hover:
          'hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900/10',
        icon: 'text-fuchsia-500 dark:text-fuchsia-400',
      },
      blue: {
        active:
          'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20',
        hover:
          'hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10',
        icon: 'text-blue-500 dark:text-blue-400',
      },
      emerald: {
        active:
          'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20',
        hover:
          'hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/10',
        icon: 'text-emerald-500 dark:text-emerald-400',
      },
    };

    return colors[color] || colors.fuchsia;
  };

  const colorClasses = getColorClasses(color);

  return (
    <div
      className={`
      flex items-center px-4 py-2.5 text-sm cursor-pointer relative group rounded-lg transition-all
      ${
        active
          ? colorClasses.active + ' font-medium'
          : 'text-slate-700 dark:text-slate-300 ' + colorClasses.hover
      }
    `}
    >
      <span
        className={`mr-3 ${
          active
            ? colorClasses.icon
            : 'text-slate-500 dark:text-slate-400 group-hover:' +
              colorClasses.icon
        }`}
      >
        {icon}
      </span>
      <span>{label}</span>
      {badge &&
        (typeof badge === 'number' ? (
          <Badge
            className={`ml-auto bg-${color}-500 hover:bg-${color}-600 text-white`}
          >
            {badge}
          </Badge>
        ) : (
          <Badge className="ml-auto bg-amber-500 hover:bg-amber-600 text-white">
            {badge}
          </Badge>
        ))}
    </div>
  );
};

const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  time,
  isNew,
  icon,
}) => {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/30 cursor-pointer transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
      <div
        className={`rounded-full p-2 ${
          isNew
            ? 'bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400'
            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
        }`}
      >
        {icon || <BellRing className="h-4 w-4" />}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
          {title}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          {time}
        </p>
      </div>
      {isNew && (
        <div className="w-2 h-2 rounded-full bg-fuchsia-500 mt-2"></div>
      )}
    </div>
  );
};

const AppointmentItem: React.FC<AppointmentItemProps> = ({
  title,
  date,
  time,
  icon,
}) => {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/30 cursor-pointer transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
      <div className="rounded-full p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
        {icon || <Calendar className="h-4 w-4" />}
      </div>
      <div>
        <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
          {title}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          {date} • {time}
        </p>
      </div>
    </div>
  );
};

const MessageItem: React.FC<MessageItemProps> = ({
  name,
  message,
  time,
  avatar,
  online,
}) => {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/30 cursor-pointer transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
      <div className="relative">
        <Avatar className="h-10 w-10 flex-shrink-0 ring-2 ring-white dark:ring-slate-800">
          <AvatarImage src={avatar || '/placeholder.svg'} alt={name} />
          <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-xs">
            {name
              .split(' ')
              .map(n => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>
        {online && (
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white dark:ring-slate-800"></span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex justify-between items-baseline">
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate">
            {name}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 ml-2 flex-shrink-0">
            {time}
          </p>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-400 truncate mt-0.5">
          {message}
        </p>
      </div>
    </div>
  );
};

const OfferCard: React.FC<OfferCardProps> = ({
  title,
  description,
  icon,
  gradientFrom,
  gradientTo,
  buttonText = 'View Offer',
}) => {
  return (
    <Card className="border-0 shadow-lg rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
      <CardContent className="p-0">
        <div
          className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} h-2`}
        ></div>
        <div className="p-6">
          <div
            className={`rounded-full w-12 h-12 flex items-center justify-center bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white mb-4`}
          >
            {icon}
          </div>
          <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200 mb-2">
            {title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            {description}
          </p>
          <Button
            className={`w-full bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white hover:opacity-90 rounded-lg`}
          >
            {buttonText} <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  gradientFrom,
  gradientTo,
  buttonText = 'Get Started',
}) => {
  return (
    <Card className="border-0 shadow-lg rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
      <CardContent className="p-6">
        <div
          className={`rounded-full w-12 h-12 flex items-center justify-center bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white mb-4`}
        >
          {icon}
        </div>
        <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200 mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          {description}
        </p>
        <Button
          className={`w-full bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white hover:opacity-90 rounded-lg`}
        >
          {buttonText} <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default DashboardModern;

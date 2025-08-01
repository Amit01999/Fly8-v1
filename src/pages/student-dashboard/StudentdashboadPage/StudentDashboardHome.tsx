import { motion } from 'framer-motion';
import {
  BookOpen,
  Building,
  GraduationCap,
  Plane,
  Globe,
  FileText,
  Users,
  Award,
} from 'lucide-react';
import OffersCarousel from '@/components/StrudentDashbord/OffersCarousel';
import QuickActionCard from '@/components/StrudentDashbord/QuickActionCard';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useAppSelector } from '@/hooks/redux/SelectorAndDispatchHooks';
import { Link } from 'react-router-dom';

const StudentDashboardHome = () => {
  const user = useAppSelector(state => state.profile.user);
  return (
    <div className="space-y-6 ">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary via-secondary to-accent p-6 text-white shadow-md">
        <div className="relative z-10 text-center py-8 px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-fade-in">
            Welcome, {`${user.firstName} ${user.lastName}`}
          </h1>
          <p className="mt-2 text-white/80 text-sm md:text-base animate-fade-in delay-100">
            Track your application progress and manage your student journey
            efficiently
          </p>
          {/* 
          <div className="mt-6 flex flex-wrap justify-center gap-3 animate-fade-in delay-200">
            <div className="rounded-full bg-white/20 px-4 py-1.5 text-sm text-white backdrop-blur-md shadow-sm">
              <span className="font-semibold">3</span> Active Applications
            </div>
            <div className="rounded-full bg-white/20 px-4 py-1.5 text-sm text-white backdrop-blur-md shadow-sm">
              <span className="font-semibold">2</span> Pending Tasks
            </div>
            <div className="rounded-full bg-white/20 px-4 py-1.5 text-sm text-white backdrop-blur-md shadow-sm">
              <span className="font-semibold">1</span> New Message
            </div>
          </div> */}

          <Link
            to={'/StudentDashboard/profile-assessment'}
            className="mt-6 inline-block rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg  hover:scale-105 transition-transform duration-200"
          >
            Complete Your Profile
          </Link>
        </div>

        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
      </div>

      {/* Offers Carousel */}
      <OffersCarousel />

      {/* Features Section */}
      <div>
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span>Features</span>
          <span className="h-1 w-16 ml-3 bg-primary/20 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <QuickActionCard
            title="University Search"
            description="Find your perfect university match"
            icon={<GraduationCap className="h-5 w-5" />}
            gradient="from-violet-500 to-purple-500"
          />
          <QuickActionCard
            title="Visa Guidance"
            description="Step-by-step visa assistance"
            icon={<Plane className="h-5 w-5" />}
            gradient="from-cyan-500 to-blue-500"
          />
          <QuickActionCard
            title="Accommodation"
            description="Find your ideal student housing"
            icon={<Building className="h-5 w-5" />}
            gradient="from-amber-500 to-orange-500"
          />
          <QuickActionCard
            title="Test Preparation"
            description="IELTS, TOEFL, GRE & more"
            icon={<BookOpen className="h-5 w-5" />}
            gradient="from-emerald-500 to-green-500"
          />
        </div>
      </div>

      {/* Additional Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Explore Countries
            </CardTitle>
            <CardDescription>
              Discover top study destinations worldwide
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <CountryButton name="United States" code="us" />
            <CountryButton name="United Kingdom" code="gb" />
            <CountryButton name="Canada" code="ca" />
            <CountryButton name="Australia" code="au" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Application Progress
            </CardTitle>
            <CardDescription>Track your current applications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 border rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="font-medium">University of Toronto</span>
                <span className="text-sm text-green-600 font-medium">75%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 mb-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: '75%' }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Applied: May 10, 2025</span>
                <span>Decision: Pending</span>
              </div>
            </div>

            <div className="p-3 border rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Oxford University</span>
                <span className="text-sm text-amber-600 font-medium">40%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 mb-2">
                <div
                  className="bg-amber-500 h-2 rounded-full"
                  style={{ width: '40%' }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Applied: May 5, 2025</span>
                <span>Documents: In Review</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Scholarships
            </CardTitle>
            <CardDescription>
              Find scholarships that match your profile
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 border rounded-lg hover:border-primary/20 transition-colors cursor-pointer">
              <p className="font-medium">International Merit Scholarship</p>
              <p className="text-sm text-muted-foreground">
                University of Toronto
              </p>
              <p className="text-sm text-primary font-medium mt-1">
                $25,000/year
              </p>
            </div>
            <div className="p-3 border rounded-lg hover:border-primary/20 transition-colors cursor-pointer">
              <p className="font-medium">Global Excellence Award</p>
              <p className="text-sm text-muted-foreground">
                University of British Columbia
              </p>
              <p className="text-sm text-primary font-medium mt-1">
                $15,000/year
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Student Community
            </CardTitle>
            <CardDescription>Connect with peers and alumni</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 border rounded-lg hover:border-primary/20 transition-colors cursor-pointer">
              <p className="font-medium">Toronto University Student Group</p>
              <p className="text-sm text-muted-foreground">
                125 members • 10 from your country
              </p>
            </div>
            <div className="p-3 border rounded-lg hover:border-primary/20 transition-colors cursor-pointer">
              <p className="font-medium">International Students Network</p>
              <p className="text-sm text-muted-foreground">
                1,250 members • Active discussions
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

interface CountryButtonProps {
  name: string;
  code: string;
}

const CountryButton = ({ name, code }: CountryButtonProps) => {
  return (
    <button className="flex items-center gap-2 p-3 border rounded-lg hover:border-primary/20 hover:bg-primary/5 transition-colors">
      <span className="text-xl" role="img" aria-label={name}>
        {code === 'us' && '🇺🇸'}
        {code === 'gb' && '🇬🇧'}
        {code === 'ca' && '🇨🇦'}
        {code === 'au' && '🇦🇺'}
      </span>
      <span className="font-medium">{name}</span>
    </button>
  );
};

export default StudentDashboardHome;

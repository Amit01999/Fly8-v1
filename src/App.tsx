import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CourseFinder from './pages/CourseFinder';
import Countries from './pages/Countries';
import CountryDetails from './pages/CountryDetails';
import Courses from './pages/Courses';
import TopUniversities from './pages/TopUniversities';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import AgencyPartners from './pages/AgencyPartners';
import InstitutionPartners from './pages/InstitutionPartners';
import SignInStudent from './pages/auth/SignInStudent';
import SignInAgency from './pages/auth/SignInAgency';
import SignInUniversity from './pages/auth/SignInUniversity';
import SignUpStudent from './pages/auth/SignUpStudent';
import SignUpAgency from './pages/auth/SignUpAgency';
import SignUpUniversity from './pages/auth/SignUpUniversity';
import VerifyEmail from './pages/auth/VerifyEmail';
import SignupForm from './pages/auth/SignupForm';
import { Toaster as HotToastToaster } from 'react-hot-toast';
import StudentDeshboardHome from './components/StrudentDashbord/StudentDeshboardHome';
import StudentDashboard from './pages/student-dashboard/StudentDashboard';
import VisaAssistance from './pages/student-dashboard/services/VisaAssistance';
import TicketBooking from './pages/student-dashboard/services/TicketBooking';
import AccommodationFinder from './pages/student-dashboard/services/AccommodationFinder';
import JobPortal from './pages/student-dashboard/services/JobPortal';
import MedicalSupport from './pages/student-dashboard/services/MedicalSupport';
import StudentLoan from './pages/student-dashboard/services/StudentLoan';
import StudentDashboardHomePage from './pages/student-dashboard/services/StudentDashboardHomePage';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HotToastToaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Toaster />
          <Routes>
            <Route path="/" element={<Index />} />
            {/* <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} /> */}
            <Route path="/course-finder" element={<CourseFinder />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/countries/:countryId" element={<CountryDetails />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/universities" element={<TopUniversities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partners" element={<AgencyPartners />} />
            <Route path="/institution" element={<InstitutionPartners />} />

            {/* Auth Routes */}
            <Route path="/signin/student" element={<SignInStudent />} />
            <Route path="/signin/partner" element={<SignInAgency />} />
            <Route path="/signin/institution" element={<SignInUniversity />} />
            <Route path="/signup/student" element={<SignUpStudent />} />
            <Route path="/signup/partner" element={<SignUpAgency />} />
            <Route path="/signup/institution" element={<SignUpUniversity />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            {/* Student Dashboard*/}
            <Route path="/StudentDashboard" element={<StudentDashboard />}>
              <Route
                path="/StudentDashboard/my-profile"
                element={<StudentDashboardHomePage />}
              />
              <Route
                path="/StudentDashboard/visa"
                element={<VisaAssistance />}
              />
              <Route
                path="/StudentDashboard/tickets"
                element={<TicketBooking />}
              />
              <Route
                path="/StudentDashboard/accommodation"
                element={<AccommodationFinder />}
              />
              <Route path="/StudentDashboard/jobs" element={<JobPortal />} />
              <Route
                path="/StudentDashboard/medical"
                element={<MedicalSupport />}
              />
              <Route path="/StudentDashboard/loans" element={<StudentLoan />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

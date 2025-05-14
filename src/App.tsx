import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import CourseFinder from './pages/CourseFinder';
import Countries from './pages/Countries';
import CountryDetails from './pages/Countrydetailes';
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
import { Toaster as HotToastToaster } from 'react-hot-toast';
import StudentDeshboardHome from './components/StrudentDashbord/DashboardSidebar';
import StudentDashboard from './pages/student-dashboard/StudentDashboard';
import VisaAssistance from './pages/student-dashboard/services/VisaAssistance';
import TicketBooking from './pages/student-dashboard/services/TicketBooking';
import AccommodationFinder from './pages/student-dashboard/services/AccommodationFinder';
import JobPortal from './pages/student-dashboard/services/JobPortal';
import MedicalSupport from './pages/student-dashboard/services/MedicalSupport';
import StudentLoan from './pages/student-dashboard/services/StudentLoan';
import StudentDashboardHomePage from './pages/student-dashboard/services/StudentDashboardHomePage';
import ProfileAssessmentPage from './pages/StudentServicesPage/ProfileAssessmentPage';
import FindProgram from './pages/StudentServicesPage/FindProgram';
import FindUniversity from './pages/StudentServicesPage/FindUniversity';
import ScholarshipFinder from './pages/StudentServicesPage/ScholarshipFinder';
import LanguageTestPage from './pages/StudentServicesPage/LanguageTest';
import EducationLoan from './pages/StudentServicesPage/EducationLoan';
import DocumentVerification from './pages/DocumentServicesPage/DocumentVerification';
import ApplicationReview from './pages/DocumentServicesPage/ApplicationReview';
import VisaSupport from './pages/DocumentServicesPage/VisaSupportPage';
import SOPLORSupport from './pages/DocumentServicesPage/SOPLORSupportPage';
import MedicalInsurance from './pages/DocumentServicesPage/MedicalInsurancePage';
import FlightBooking from './pages/TravelandAccommodationServices/FlightBookingPage';
import StudentHousing from './pages/TravelandAccommodationServices/StudentHousing';
import AirportPickup from './pages/TravelandAccommodationServices/AirportPickup';
import TravelInsurance from './pages/TravelandAccommodationServices/TravelInsurance';
import HotelBooking from './pages/TravelandAccommodationServices/HotelBookingPage';
import TravelPackage from './pages/TravelandAccommodationServices/TravelPackage';
import ResumeBuilding from './pages/CareerServices/ResumeBuilding';
import UniversityInterview from './pages/CareerServices/UniversityInterview';
import VisaInterview from './pages/CareerServices/VisaInterview';
import JobPlacement from './pages/CareerServices/JobPlacement';
import GlobalEvents from './pages/CareerServices/GlobalEvents';
import StudentDashboardHome from './pages/student-dashboard/StudentdashboadPage/StudentDashboardHome';
import StudentAIAssistance from './pages/student-dashboard/StudentdashboadPage/StudentAIAssistance';
import StudentBookAppointment from './pages/student-dashboard/StudentdashboadPage/StudentBookAppointment';
import StudentUpdates from './pages/student-dashboard/StudentdashboadPage/StudentUpdates';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HotToastToaster />
      <Sonner />
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/course-finder" element={<CourseFinder />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/countries/:countryId" element={<CountryDetails />} />
            <Route path="/programs" element={<Courses />} />
            <Route path="/universities" element={<TopUniversities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partners" element={<AgencyPartners />} />
            <Route path="/institution" element={<InstitutionPartners />} />
            {/* Student Services Routes*/}
            <Route
              path="/services/profile-assessment"
              element={<ProfileAssessmentPage />}
            />
            <Route path="/services/find-program" element={<FindProgram />} />
            <Route
              path="/services/find-university"
              element={<FindUniversity />}
            />
            <Route
              path="/services/find-scholarship"
              element={<ScholarshipFinder />}
            />
            <Route
              path="/services/language-test"
              element={<LanguageTestPage />}
            />
            <Route
              path="/services/education-loan"
              element={<EducationLoan />}
            />
            {/* Document Services Routes*/}
            <Route
              path="/services/document-verification"
              element={<DocumentVerification />}
            />
            <Route
              path="/services/application-review"
              element={<ApplicationReview />}
            />
            <Route path="/services/visa-assistance" element={<VisaSupport />} />
            <Route path="/services/sop-lor" element={<SOPLORSupport />} />
            <Route
              path="/services/medical-insurance"
              element={<MedicalInsurance />}
            />
            {/* Travel & Accommodation Services Routes*/}
            <Route
              path="/services/flight-booking"
              element={<FlightBooking />}
            />
            <Route path="/services/hotel-booking" element={<HotelBooking />} />
            <Route
              path="/services/student-housing"
              element={<StudentHousing />}
            />
            <Route
              path="/services/airport-pickup"
              element={<AirportPickup />}
            />
            <Route
              path="/services/travel-insurance"
              element={<TravelInsurance />}
            />

            <Route
              path="/services/travel-package"
              element={<TravelPackage />}
            />

            {/* Career Services Routes */}

            <Route
              path="/services/resume-building"
              element={<ResumeBuilding />}
            />
            <Route
              path="/services/university-interview"
              element={<UniversityInterview />}
            />
            <Route
              path="/services/visa-interview"
              element={<VisaInterview />}
            />
            <Route path="/services/job-placement" element={<JobPlacement />} />
            <Route path="/services/global-events" element={<GlobalEvents />} />

            {/* Auth Routes */}
            <Route path="/signin/student" element={<SignInStudent />} />
            <Route path="/signin/partner" element={<SignInAgency />} />
            <Route path="/signin/institution" element={<SignInUniversity />} />
            <Route path="/signup/student" element={<SignUpStudent />} />
            <Route path="/signup/partner" element={<SignUpAgency />} />
            <Route path="/signup/institution" element={<SignUpUniversity />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
          </Route>
          {/* Student Dashboard*/}
          <Route path="/StudentDashboard" element={<StudentDashboard />}>
            <Route
              path="/StudentDashboard/my-profile"
              element={<StudentDashboardHome />}
            />
            {/* Tab routes */}
            <Route
              path="/StudentDashboard/ai-assistance"
              element={<StudentAIAssistance />}
            />
            <Route
              path="/StudentDashboard/book-appointment"
              element={<StudentBookAppointment />}
            />
            <Route
              path="/StudentDashboard/updates"
              element={<StudentUpdates />}
            />
            <Route path="/StudentDashboard/visa" element={<VisaAssistance />} />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

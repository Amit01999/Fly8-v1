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
// import VerifyEmail from './pages/auth/VerifyEmail';
import { Toaster as HotToastToaster } from 'react-hot-toast';
import StudentDashboard from './pages/student-dashboard/StudentDashboard';
import VisaAssistance from './pages/student-dashboard/services/VisaAssistance';
import TicketBooking from './pages/student-dashboard/services/TicketBooking';
import AccommodationFinder from './pages/student-dashboard/services/AccommodationFinder';
import JobPortal from './pages/student-dashboard/services/JobPortal';
import MedicalSupport from './pages/student-dashboard/services/MedicalSupport';
import StudentLoan from './pages/student-dashboard/services/StudentLoan';
import StudentDashboardHome from './pages/student-dashboard/StudentdashboadPage/StudentDashboardHome';
import StudentAIAssistance from './pages/student-dashboard/StudentdashboadPage/StudentAIAssistance';
import StudentBookAppointment from './pages/student-dashboard/StudentdashboadPage/StudentBookAppointment';
import StudentUpdates from './pages/student-dashboard/StudentdashboadPage/StudentUpdates';
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
import UniversityProfile from './pages/UniversityProfile';
import ProfileAssessment from './pages/student-dashboard/services/PofileAssessment';
import StudentInternFrom from './components/StudentInternFrom';
import PrivateRoute from './components/auth/PrivateRoute';
import PreparationSupport from './pages/student-dashboard/StudentdashboadPage/PreparationSupport';
import ApplyUniversity from './pages/student-dashboard/StudentdashboadPage/ApplyUniversity';
import VisaInterviewSupport from './pages/student-dashboard/StudentdashboadPage/VisaInterviewSupport';
import TicketTravel from './pages/student-dashboard/StudentdashboadPage/TicketTravel';
import Accommodation from './pages/student-dashboard/StudentdashboadPage/Accommodation';
import EducationLoanPage from './pages/StudentServicesPage/EducationLoan';
import EducationLoanSupport from './pages/student-dashboard/StudentdashboadPage/EducationLoanSupport';
import JobsAbroad from './pages/student-dashboard/StudentdashboadPage/JobsAbroad';
import UploadUniversity from './components/UploadUniversity';
import FindCourses from './pages/FindCourse';
import AMatch from './components/AMatch';
import ProfileDetailes from './components/StrudentDashbord/profile-assessmen/ProfileDetailes';
import ReferralSearch from './components/Temporary/ReferralSearch';
import EducationFairRegistration from './components/Temporary/EducationFairRegistration';
import ForgotPassword from './pages/auth/ForgotPassword';
import UpdatePassword from './pages/auth/UpdatePassword';
import PastEventsPage from './pages/Events/PastEventsPage';
import ScrollToTop from './components/ScrollToTop';
import GstuAdminPanel from './components/Temporary/GstuAdminPanel';
import RegistrationLookup from './components/Temporary/RegistrationLookup';
import CoursesPage from './components/Temporary/CoursesPage';
import Blogs from './pages/Blog/Blogs';
import BlogDetail from './pages/Blog/BlogDetail';
import BlogsAdmin from './pages/Blog/BlogsAdmin';
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HotToastToaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Toaster />
        <Routes>
          {/* <Route path="/intern" element={<StudentInternFrom />} /> */}
          <Route path="/" element={<Layout children={''} />}>
            <Route index element={<Index />} />
            <Route path="phantom" element={<Index />} />
            <Route path="course-finder" element={<CourseFinder />} />
            <Route path="AiMatch" element={<AMatch />} />
            <Route path="countries" element={<Countries />} />
            <Route path="countries/:countryname" element={<CountryDetails />} />
            {/* <Route path="programs" element={<Courses />} /> */}
            <Route path="programs" element={<FindCourses />} />
            <Route path="universities" element={<TopUniversities />} />
            <Route
              path="universities/:universitycode"
              element={<UniversityProfile />}
            />
            <Route path="universities/upload" element={<UploadUniversity />} />
            <Route path="contact" element={<Contact />} />
            <Route path="partners" element={<AgencyPartners />} />
            <Route path="institution" element={<InstitutionPartners />} />

            {/* Blog routes */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/admin/blogs" element={<BlogsAdmin />} />

            {/* Events */}
            <Route path="past-event" element={<PastEventsPage />} />
            {/* Temporary  */}
            <Route
              path="free-ielts-registration"
              element={
                // <PrivateRoute>
                <CoursesPage />
                // </PrivateRoute>
              }
            />
            {/* <Route path="referral" element={<ReferralSearch />} />
            <Route path="gstu" element={<EducationFairRegistration />} />
            <Route path="/lookup" element={<RegistrationLookup />} /> */}
            {/* Public lookup page */}
            {/* <Route path="/gstu-admin" element={<GstuAdminPanel />} /> */}
            {/* Combined admin panel with tabs */}
            {/* Student Services */}
            <Route
              path="services/profile-assessment"
              element={<ProfileAssessmentPage />}
            />
            <Route path="services/find-program" element={<FindProgram />} />
            <Route
              path="services/find-university"
              element={<FindUniversity />}
            />
            <Route
              path="services/find-scholarship"
              element={<ScholarshipFinder />}
            />
            <Route
              path="services/language-test"
              element={<LanguageTestPage />}
            />
            <Route path="services/education-loan" element={<EducationLoan />} />
            {/* Document Services */}
            <Route
              path="services/document-verification"
              element={<DocumentVerification />}
            />
            <Route
              path="services/application-review"
              element={<ApplicationReview />}
            />
            <Route path="services/visa-assistance" element={<VisaSupport />} />
            <Route path="services/sop-lor" element={<SOPLORSupport />} />
            <Route
              path="services/medical-insurance"
              element={<MedicalInsurance />}
            />
            {/* Travel & Accommodation */}
            <Route path="services/flight-booking" element={<FlightBooking />} />
            <Route path="services/hotel-booking" element={<HotelBooking />} />
            <Route
              path="services/student-housing"
              element={<StudentHousing />}
            />
            <Route path="services/airport-pickup" element={<AirportPickup />} />
            <Route
              path="services/travel-insurance"
              element={<TravelInsurance />}
            />
            <Route path="services/travel-package" element={<TravelPackage />} />
            {/* Career Services */}
            <Route
              path="services/resume-building"
              element={<ResumeBuilding />}
            />
            <Route
              path="services/university-interview"
              element={<UniversityInterview />}
            />
            <Route path="services/visa-interview" element={<VisaInterview />} />
            <Route path="services/job-placement" element={<JobPlacement />} />
            <Route path="services/global-events" element={<GlobalEvents />} />
            {/* Auth */}
            <Route path="signin/student" element={<SignInStudent />} />
            <Route path="signin/partner" element={<SignInAgency />} />
            <Route path="signin/institution" element={<SignInUniversity />} />
            <Route path="signup/student" element={<SignUpStudent />} />
            <Route path="signup/partner" element={<SignUpAgency />} />
            <Route path="signup/institution" element={<SignUpUniversity />} />
            {/* <Route path="verify-email" element={<VerifyEmail />} /> */}
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="update-password/:id" element={<UpdatePassword />} />
          </Route>

          {/* Student Dashboard inside  */}
          <Route
            path="/StudentDashboard"
            element={
              <PrivateRoute>
                <StudentDashboard />
              </PrivateRoute>
            }
          >
            <Route path="my-profile" element={<StudentDashboardHome />} />
            <Route path="ai-assistance" element={<StudentAIAssistance />} />
            <Route
              path="book-appointment"
              element={<StudentBookAppointment />}
            />
            <Route path="profile-assessment" element={<ProfileAssessment />} />
            {/* <Route path="profile-assessment" element={<ProfileDetailes />} /> */}
            <Route
              path="preparation-support"
              element={<PreparationSupport />}
            />
            <Route path="apply-university" element={<ApplyUniversity />} />
            <Route
              path="visa-interview-support"
              element={<VisaInterviewSupport />}
            />
            <Route path="ticket-travel-support" element={<TicketTravel />} />
            <Route path="accommodation-finder" element={<Accommodation />} />
            <Route path="student-loan" element={<EducationLoanSupport />} />
            <Route path="job-portal" element={<JobsAbroad />} />
            <Route path="updates" element={<StudentUpdates />} />
            <Route path="visa" element={<VisaAssistance />} />
            <Route path="tickets" element={<TicketBooking />} />
            <Route path="accommodation" element={<AccommodationFinder />} />
            <Route path="jobs" element={<JobPortal />} />
            <Route path="medical" element={<MedicalSupport />} />
            <Route path="loans" element={<StudentLoan />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

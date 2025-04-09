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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/course-finder" element={<CourseFinder />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/countries/:countryId" element={<CountryDetails />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/universities" element={<TopUniversities />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

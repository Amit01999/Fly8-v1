import { useState } from 'react';
import {
  Briefcase,
  Award,
  Search,
  Check,
  User,
  Users,
  GraduationCap,
  Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function JobPlacement() {
  // State for testimonial carousel
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // State for sector filter
  const [activeSector, setActiveSector] = useState('all');

  const testimonials = [
    {
      quote:
        'After graduating, I was worried about finding a job abroad. Fly8 connected me with three potential employers and helped me land a tech role in Germany!',
      author: 'Raj Patel',
      position: 'Software Developer at Siemens',
      image: 'https://i.pravatar.cc/150?img=11',
    },
    {
      quote:
        "The job placement team reviewed my resume, prepared me for interviews, and guided me through the work visa process. I'm now working at my dream company!",
      author: 'Maria Garcia',
      position: "Marketing Specialist at L'Oréal",
      image: 'https://i.pravatar.cc/150?img=5',
    },
    {
      quote:
        "Thanks to Fly8's connections, I secured an internship during my studies which turned into a full-time role. The career coaching was invaluable.",
      author: 'Kim Jin',
      position: 'Financial Analyst at HSBC',
      image: 'https://i.pravatar.cc/150?img=28',
    },
  ];

  const sectors = [
    { id: 'all', name: 'All Sectors' },
    { id: 'tech', name: 'Technology' },
    { id: 'finance', name: 'Finance' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'engineering', name: 'Engineering' },
  ];

  // Sample jobs
  const jobs = [
    {
      title: 'Software Engineer Intern',
      company: 'TechCorp',
      location: 'Berlin, Germany',
      type: 'Internship',
      sector: 'tech',
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    },
    {
      title: 'Marketing Assistant',
      company: 'Global Brands',
      location: 'Paris, France',
      type: 'Part-time',
      sector: 'marketing',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Financial Analyst',
      company: 'InvestBank',
      location: 'Singapore',
      type: 'Full-time',
      sector: 'finance',
      logo: 'https://images.unsplash.com/photo-1553484771-689277e6fa16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Research Assistant',
      company: 'Medical Institute',
      location: 'Toronto, Canada',
      type: 'Part-time',
      sector: 'healthcare',
      logo: 'https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    },
    {
      title: 'Civil Engineer',
      company: 'BuildCorp',
      location: 'Sydney, Australia',
      type: 'Full-time',
      sector: 'engineering',
      logo: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  const filteredJobs =
    activeSector === 'all'
      ? jobs
      : jobs.filter(job => job.sector === activeSector);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Brutalist/Modern Hero Section */}
      <section className="bg-white relative">
        {/* Brutalist decorative elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-300 rounded-full"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-pink-200 rounded-none transform rotate-45"></div>
          <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-blue-200 rounded-full"></div>
          <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-green-300 rounded-none"></div>
        </div>

        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 relative">
              <div className="relative z-10 max-w-xl">
                <div className="inline-block px-4 py-1 mb-4 bg-red-100 text-red-700 font-medium rounded-sm">
                  Global Career Opportunities
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                  Launch Your <span className="text-red-600">Global</span>{' '}
                  Career
                </h1>

                <p className="text-xl text-gray-700 mb-8">
                  Looking to work during or after studies? We connect you with
                  internships and job opportunities worldwide through trusted
                  networks.
                </p>
                <Link to={'/signin/student'}>
                  <Button className="bg-black hover:bg-gray-900 text-white rounded-none px-8 py-3 text-lg font-bold">
                    Apply for Job Placement Help
                  </Button>
                </Link>
              </div>

              {/* Brutalist elements overlapping text */}
              <div className="absolute -bottom-16 -right-4 w-20 h-5 bg-blue-400"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full"></div>
            </div>

            <div className="lg:w-1/2 relative">
              {/* Brutalist image container */}
              <div className="relative">
                <div className="absolute -left-6 -top-6 right-6 bottom-6 border-2 border-black"></div>
                <div className="relative z-10 bg-white p-2 border-2 border-black shadow-brutal">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                      alt="Students in professional setting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -right-6 -bottom-6 bg-red-500 w-32 h-32 z-0"></div>
              </div>

              {/* Stats floating above image */}
              <div className="absolute -right-4 -bottom-8 bg-white border-2 border-black p-3 shadow-brutal z-20">
                <div className="text-xl font-bold">3,500+</div>
                <div className="text-sm">Job Placements</div>
              </div>

              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white border-2 border-black p-3 shadow-brutal z-20 rotate-3">
                <div className="text-xl font-bold">86%</div>
                <div className="text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section with Bold Design */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Real Jobs, Real Experience, Real Growth
            </h2>
            <p className="text-xl text-gray-600">
              Whether it's part-time, full-time, or internships, we help you
              prepare and connect with employers looking for international
              talent.
            </p>
          </div>

          {/* Bold feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group bg-white border-2 border-black transition-all hover:-translate-y-1 hover:shadow-brutal">
              <div className="h-2 bg-red-500"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Resume Forwarding</h3>
                <p className="text-gray-600">
                  We send your profile directly to recruiters in our global
                  network across industries.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white border-2 border-black transition-all hover:-translate-y-1 hover:shadow-brutal">
              <div className="h-2 bg-blue-500"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <User size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Interview Scheduling</h3>
                <p className="text-gray-600">
                  Our team arranges and coordinates interviews with potential
                  employers.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white border-2 border-black transition-all hover:-translate-y-1 hover:shadow-brutal">
              <div className="h-2 bg-green-500"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <Award size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Internship Matching</h3>
                <p className="text-gray-600">
                  Connect with companies offering internships that align with
                  your career goals.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white border-2 border-black transition-all hover:-translate-y-1 hover:shadow-brutal">
              <div className="h-2 bg-purple-500"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Post-Study Pathways</h3>
                <p className="text-gray-600">
                  Explore work visas and graduate roles to extend your
                  international experience.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="group bg-white border-2 border-black transition-all hover:-translate-y-1 hover:shadow-brutal">
              <div className="h-2 bg-yellow-500"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                  <Globe size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Employer Network</h3>
                <p className="text-gray-600">
                  Access our global partner network spanning multiple industries
                  and countries.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="group bg-white border-2 border-black transition-all hover:-translate-y-1 hover:shadow-brutal">
              <div className="h-2 bg-orange-500"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Alumni Referrals</h3>
                <p className="text-gray-600">
                  Get introduced to employers through our successful alumni
                  network.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button className="bg-black hover:bg-gray-900 text-white rounded-none px-10 py-6 text-lg font-bold">
              Explore Opportunities Now
            </Button>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Featured Opportunities
                </h2>
                <p className="text-gray-600">
                  Browse our latest job and internship openings for students
                </p>
              </div>

              <div className="mt-4 md:mt-0">
                <div className="bg-gray-100 p-1 rounded-md inline-flex space-x-1">
                  {sectors.map(sector => (
                    <button
                      key={sector.id}
                      className={`px-4 py-2 text-sm rounded-md transition-colors ${
                        activeSector === sector.id
                          ? 'bg-black text-white'
                          : 'text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setActiveSector(sector.id)}
                    >
                      {sector.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="h-32 bg-gray-100 relative overflow-hidden">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 right-0 bg-gray-900/80 text-white text-xs px-2 py-1">
                      {job.type}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 text-xl mb-1">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {job.company} • {job.location}
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <div className="flex items-center text-xs text-gray-500">
                          <Check className="w-4 h-4 mr-1 text-green-500" />
                          <span>Student Visa Supported</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <Check className="w-4 h-4 mr-1 text-green-500" />
                          <span>Remote Interview</span>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="border-black hover:bg-black hover:text-white"
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button
                variant="outline"
                className="border-2 border-black hover:bg-black hover:text-white font-semibold"
              >
                View All Opportunities
                <span className="ml-2">→</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel - Bold Design */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Hear from students who found their dream jobs through our
                placement program
              </p>
            </div>

            <div className="relative">
              {/* Testimonial */}
              <div className="bg-gray-800 p-8 rounded-lg mb-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-red-500">
                        <img
                          src={testimonials[activeTestimonial].image}
                          alt={testimonials[activeTestimonial].author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-red-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <div className="text-6xl text-red-500 font-bold mb-4">
                      "
                    </div>
                    <p className="text-xl mb-6">
                      {testimonials[activeTestimonial].quote}
                    </p>

                    <div>
                      <div className="font-bold text-xl">
                        {testimonials[activeTestimonial].author}
                      </div>
                      <div className="text-gray-400">
                        {testimonials[activeTestimonial].position}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Navigation */}
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      idx === activeTestimonial
                        ? 'bg-red-500'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    onClick={() => setActiveTestimonial(idx)}
                    aria-label={`View testimonial ${idx + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-6">
              Ready to Start Your Global Career?
            </h2>
            <p className="text-xl mb-8">
              Our job placement services connect you with employers worldwide
              who value international talent.
            </p>
            <Link to={'/signin/student'}>
              <Button className="bg-white hover:bg-primary hover:text-black text-red-500 text-lg px-10 py-4 rounded-none font-bold">
                Apply for Job Placement Help
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .shadow-brutal {
          box-shadow: 4px 4px 0 0 black;
        }
      `}</style>
    </div>
  );
}

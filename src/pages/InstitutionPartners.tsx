import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FeaturedUniversities from '@/components/FeaturedUniversities';
import {
  ArrowRight,
  GraduationCap,
  Target,
  BarChart,
  Users,
  Shield,
  Megaphone,
  CheckCircle,
  ChevronRight,
  Globe,
  BookOpen,
  Clock,
  UserCheck,
  Percent,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import InstitutionContactFormSection from '@/components/Froms/InstitutionContactFormSection';

const InstitutionPartners = () => {
  // References for scroll animations
  const benefitsRef = useRef(null);
  const statsRef = useRef(null);
  const processRef = useRef(null);
  const universitiesRef = useRef(null);

  // Check if sections are in view for animations
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const processInView = useInView(processRef, { once: true, amount: 0.2 });
  const universitiesInView = useInView(universitiesRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-16 pb-40 overflow-hidden bg-gradient-to-br from-blue-100 via-primary/20 to-secondary/20">
        <div className="max-container padding-x relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="px-5 py-2 bg-accent/15 text-accent rounded-full text-sm font-medium mb-8 inline-flex items-center gap-2 hover:bg-accent/20 transition-all"
              >
                <Globe size={16} className="animate-pulse" /> For Educational
                Institutions
              </motion.span>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Expand Your Global Reach with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary animate-gradient">
                  Fly8
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Join <span className="font-semibold text-accent">Fly8's</span>{' '}
                trusted recruitment network to connect with top-tier
                international students and bring cultural diversity to your
                campus.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-5 mb-12">
                <Button
                  size="lg"
                  className="px-8 py-6 rounded-full bg-gradient-to-r from-accent to-primary text-white hover:shadow-xl transition-all hover:scale-105 font-medium text-lg"
                >
                  Join as a Partner <ArrowRight className="ml-2" size={18} />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 rounded-full border-accent/20 hover:border-accent hover:bg-accent/5 transition-all font-medium text-lg"
                >
                  Learn More
                </Button>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-md border border-gray-100 hover:shadow-lg hover:bg-white transition-all"
                  >
                    <CheckCircle className="text-accent mr-2" size={18} />
                    <span className="text-gray-700 font-medium text-sm">
                      {badge}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative">
                {/* Animated floating elements */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-10 -left-10 z-0 w-40 h-40 bg-accent/10 rounded-3xl rotate-12"
                ></motion.div>

                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -8, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 7,
                    ease: 'easeInOut',
                  }}
                  className="absolute -bottom-10 -right-10 z-0 w-40 h-40 bg-primary/15 rounded-3xl -rotate-12"
                ></motion.div>

                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all hover:shadow-2xl hover:-translate-y-2 duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
                  <div className="group relative overflow-hidden rounded-t-3xl">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1681505336207-cea25b6cf0ea?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Diverse international students on campus"
                      className="w-full h-auto object-cover rounded-t-lg transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-8 bg-white relative">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">
                      Institution Dashboard
                    </h3>
                    <p className="text-gray-600 mb-5 leading-relaxed">
                      Access your custom dashboard with application analytics,
                      student profiles, and enrollment trends.
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center px-3 py-1.5 bg-green-100 rounded-full">
                        <div className="h-3 w-3 rounded-full bg-green-400 mr-2"></div>
                        <span className="text-sm text-gray-700 font-medium">
                          Pre-screened
                        </span>
                      </div>
                      <div className="flex items-center px-3 py-1.5 bg-blue-100 rounded-full">
                        <div className="h-3 w-3 rounded-full bg-blue-400 mr-2"></div>
                        <span className="text-sm text-gray-700 font-medium">
                          Market insights
                        </span>
                      </div>
                      <div className="flex items-center px-3 py-1.5 bg-purple-100 rounded-full">
                        <div className="h-3 w-3 rounded-full bg-purple-400 mr-2"></div>
                        <span className="text-sm text-gray-700 font-medium">
                          Real-time data
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Improved Wave SVG divider with better height */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-40"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L40,213.3C80,203,160,181,240,181.3C320,181,400,203,480,218.7C560,235,640,245,720,224C800,203,880,149,960,133.3C1040,117,1120,139,1200,149.3C1280,160,1360,160,1400,160L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Stats Section */}
        <section className="py-16 my-10" ref={statsRef}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={statsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 rounded-3xl overflow-hidden border border-gray-100 backdrop-blur-sm"
          >
            <div className="py-16 px-8">
              <div className="text-center mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 }}
                  className="text-3xl font-bold mb-4"
                >
                  Our Global Impact
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600"
                >
                  Driving international student recruitment success
                </motion.p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.value}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                  >
                    <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary mb-2">
                      {metric.value}
                    </div>
                    <div className="text-gray-600">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="py-20" ref={benefitsRef}>
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={benefitsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 inline-flex items-center gap-2"
            >
              <BookOpen size={16} /> Partnership Benefits
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                Fly8
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              We connect institutions with qualified students and provide
              comprehensive support
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl border border-gray-100 transition-all hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 mb-5 group-hover:bg-gradient-to-r group-hover:from-accent/20 group-hover:to-primary/20 transition-all">
                  <feature.icon className="w-6 h-6 text-accent group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20" ref={processRef}>
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={processInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 inline-flex items-center gap-2"
            >
              <Clock size={16} /> Integration Process
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Easy Implementation
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Our streamlined onboarding gets your institution up and running
              quickly
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {workflow.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="flex group"
              >
                <div className="mr-6 flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-all"></div>
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-accent to-primary text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <ul className="space-y-3">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Partner Universities */}
        <section className="py-16 my-10" ref={universitiesRef}>
          <FeaturedUniversities />
        </section>

        {/* CTA Section */}
        <section className="py-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-accent/90 to-primary/90 rounded-3xl overflow-hidden shadow-xl relative"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full filter blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full filter blur-xl"></div>

            <div className="py-16 px-8 text-center text-white relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Expand Your Global Reach?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                Join our network of leading institutions and access a global
                pool of qualified students
              </p>
              <Button
                size="lg"
                className="rounded-full bg-white text-accent hover:bg-white/90 px-8 shadow-lg hover:scale-105 transition-transform"
              >
                Partner With Us <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50 rounded-3xl overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Find answers to common questions about partnering with Fly8.
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  question: 'How does Fly8 verify student applications?',
                  answer:
                    'Our comprehensive verification process includes academic credential evaluation, English proficiency verification, financial capability assessment, and personal statement review by trained specialists.',
                },
                {
                  question: 'What are the costs associated with joining Fly8?',
                  answer:
                    "We operate on a success-based model with no upfront fees. Our compensation comes from a small percentage of the first year's tuition only when students successfully enroll and begin their studies.",
                },
                {
                  question: 'How long does the onboarding process take?',
                  answer:
                    'Most institutions are fully onboarded within 2-3 weeks. The timeline depends on how quickly we can gather your program information and complete the technical integration.',
                },
                {
                  question:
                    'Can we set specific admission criteria for different programs?',
                  answer:
                    'Absolutely. Our platform allows you to set customized admission requirements for each program, including minimum GPA, test scores, prerequisites, and other specific criteria.',
                },
                {
                  question: 'How do we receive applications from Fly8?',
                  answer:
                    'Applications are delivered through our secure online portal, which integrates with most major student information systems. You can also choose to receive email notifications for new applications.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <details className="group">
                    <summary className="list-none p-6 cursor-pointer flex justify-between items-center hover:bg-gray-50 transition-colors">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                      <svg
                        className="w-6 h-6 text-accent transform group-open:rotate-180 transition-transform flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-gray-600">
                      {faq.answer}
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <InstitutionContactFormSection />
      </div>
    </div>
  );
};

const features = [
  {
    icon: GraduationCap,
    title: 'Quality Students',
    description:
      'Access pre-screened, qualified students who match your admission requirements',
  },
  {
    icon: Target,
    title: 'Market Expansion',
    description:
      'Reach new markets and diversify your international student population',
  },
  {
    icon: BarChart,
    title: 'Data Analytics',
    description:
      'Get valuable insights into recruitment trends and student demographics',
  },
  {
    icon: Users,
    title: 'Agent Network',
    description:
      'Connect with our verified network of education agents worldwide',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description:
      'Benefit from our comprehensive verification and screening process',
  },
  {
    icon: Megaphone,
    title: 'Brand Promotion',
    description:
      'Showcase your institution to a global audience of prospective students',
  },
];

const metrics = [
  { value: '200K+', label: 'Students Enrolled' },
  { value: '1500+', label: 'Partner Institutions' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '120+', label: 'Countries Reached' },
];

const workflow = [
  {
    title: 'Onboarding & Setup',
    description: 'Quick and easy integration with your existing systems',
    features: [
      'Dedicated account manager',
      'Custom branding options',
      'Program listing setup',
      'Staff training and support',
    ],
  },
  {
    title: 'Student Recruitment',
    description: 'Connect with pre-screened applicants from our global network',
    features: [
      'Targeted marketing campaigns',
      'AI-powered student matching',
      'Regular recruitment events',
      'Virtual campus tours',
    ],
  },
  {
    title: 'Application Management',
    description: 'Streamlined process for reviewing and approving applicants',
    features: [
      'Verified document collection',
      'Automated eligibility screening',
      'Applicant communication tools',
      'Status tracking and updates',
    ],
  },
  {
    title: 'Enrollment & Beyond',
    description: 'Comprehensive support from acceptance to arrival',
    features: [
      'Visa application assistance',
      'Pre-departure orientation',
      'Arrival coordination',
      'Post-enrollment support',
    ],
  },
];

const universities = [
  { name: 'Global University', country: 'United States', initials: 'GU' },
  { name: 'Tech Institute', country: 'Canada', initials: 'TI' },
  { name: 'International College', country: 'Australia', initials: 'IC' },
  { name: 'European Academy', country: 'Germany', initials: 'EA' },
  { name: 'Pacific University', country: 'New Zealand', initials: 'PU' },
  { name: 'Nordic Institute', country: 'Sweden', initials: 'NI' },
  { name: 'Eastern College', country: 'Singapore', initials: 'EC' },
  { name: 'Western University', country: 'United Kingdom', initials: 'WU' },
  { name: 'Metropolitan College', country: 'France', initials: 'MC' },
  { name: 'Asian Institute', country: 'Japan', initials: 'AI' },
];

const trustBadges = [
  'Data-Driven Insights',
  'Verified Applications',
  'Global Reach',
  'No Upfront Costs',
];

export default InstitutionPartners;

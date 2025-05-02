import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Coins,
  Users,
  BadgeCheck,
  BarChart3,
  Handshake,
  FileText,
  Check,
  Play,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PageContainer from '@/components/layout/PageContainer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const AgencyPartners = () => {
  // References for scroll animations
  const benefitsRef = useRef(null);
  const statsRef = useRef(null);
  const processRef = useRef(null);
  const testimonialsRef = useRef(null);
  const featuresRef = useRef(null);

  // Check if sections are in view for animations
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const processInView = useInView(processRef, { once: true, amount: 0.2 });
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    amount: 0.2,
  });

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-10 pb-20 overflow-hidden bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10">
        <div className="max-container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 inline-block">
                For Recruitment Partners
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Partner with Fly8 Grow Globally
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
                Join our dynamic partner ecosystem to promote your services and
                reach students worldwide. Whether you offer accommodation,
                insurance, coaching, travel, or career services — we help you
                grow.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link to={'/signin/partner'}>
                  <Button
                    size="lg"
                    className="px-8 rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transition-all"
                  >
                    Become a Fly8 Partner
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 rounded-full border-primary/20 hover:border-primary hover:bg-primary"
                >
                  Schedule a Demo
                </Button>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10">
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="text-primary mr-2" size={20} />
                    <span className="text-gray-700 font-medium">{badge}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                    alt="Education consultants helping students"
                    className="w-full h-auto object-cover rounded-t-lg"
                  />
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold mb-2">
                      Partner Dashboard Preview
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Access your personalized dashboard with real-time
                      analytics, student applications, and commission tracking
                      all in one place.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
                      <span className="text-sm text-gray-600 font-medium">
                        Live student matching
                      </span>
                      <div className="h-2.5 w-2.5 rounded-full bg-blue-400"></div>
                      <span className="text-sm text-gray-600 font-medium">
                        Real-time updates
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave SVG divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,69.3C840,64,960,32,1080,21.3C1200,11,1320,21,1380,26.7L1440,32L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
            ></path>
          </svg>
        </div>
      </section>
      {/* Benefits Section */}
      <section
        className="py-16 w-full bg-gradient-to-br from-gray-50 to-slate-100  px-4 md:px-14 relative overflow-hidden "
        ref={benefitsRef}
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-purple-200/60 to-blue-200/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-pink-200/60 to-orange-200/60 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-gradient-to-r from-cyan-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
        </div>
        <div className="text-center max-container mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={benefitsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 inline-block"
          >
            Partner Benefits
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Why Partner With{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Fly8
            </span>{' '}
            ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            Leverage our brand, community, and digital reach to scale your
            business, promote your products, and earn revenue through meaningful
            student connections.
          </motion.p>
        </div>
        <div className="max-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transition: 'transform 0.3s ease',
                transform: hoveredCard === index ? 'translateY(-8px)' : 'none',
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.lightColor} opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-500 -z-10 scale-90 group-hover:scale-105`}
              ></div>
              <div className="bg-white backdrop-blur-sm rounded-2xl p-6 h-full transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:shadow-gray-200/80 border border-gray-100">
                <div className="flex flex-col items-start">
                  <div
                    className={`text-3xl mb-6 ${feature.iconBg} text-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-200"></div>
            <span className="relative flex items-center gap-2 bg-gradient-to-br from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg">
              Start Partnering Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
        </div>
      </section>

      {/* Main Content */}
      <PageContainer>
        {/*dasbord section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white z-0"></div>
          <div className="absolute -top-20 -right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-blue-500/5 rounded-full blur-3xl"></div>

          {/* Content Container */}
          <div
            className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            ref={featuresRef}
          >
            {/* Header Section */}
            <div className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto text-center mb-10 sm:mb-16 lg:mb-20">
              <motion.div
                initial={{ opacity: 0 }}
                animate={featuresInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-2 mb-3 sm:mb-4 lg:mb-6"
              >
                <span className="hidden sm:block w-6 sm:w-8 lg:w-12 h-1 bg-primary rounded-full"></span>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary px-3 py-1 bg-primary/10 rounded-full sm:bg-transparent sm:px-0 sm:py-0">
                  Advanced Technology
                </span>
                <span className="hidden sm:block w-6 sm:w-8 lg:w-12 h-1 bg-primary rounded-full"></span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight"
              >
                Why Promote on
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-primary">
                  {' '}
                  Fly8{' '}
                </span>
                ?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600"
              >
                Our platform is built to amplify partner visibility and drive
                conversions — organically and through paid placements.
              </motion.p>
            </div>

            {/* Interactive Feature Showcase - IMPROVED MOBILE TABS */}
            <div className="w-full max-w-7xl mx-auto">
              <Tabs defaultValue="dashboard" className="w-full">
                {/* FIXED MOBILE TAB NAVIGATION */}
                <div className="relative mb-8 sm:mb-20 lg:mb-16">
                  {/* Tab scroll container with better mobile handling */}
                  <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible pb-2">
                    <TabsList className="flex min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center gap-2 md:gap-3 bg-transparent p-0">
                      {platformFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                          <TabsTrigger
                            value={feature.id}
                            className="group whitespace-nowrap rounded-full border border-gray-200 bg-white text-xs sm:text-sm md:text-base shadow-sm transition-all hover:border-primary/30 hover:shadow-md data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-white"
                          >
                            {/* Mobile-optimized content with flexible sizing */}
                            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 px-2.5 py-1.5 sm:px-4 md:px-5 lg:px-6 sm:py-2 md:py-3">
                              <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0 group-data-[state=active]:text-white" />
                              <span className="font-medium line-clamp-1">
                                {feature.title}
                              </span>
                            </div>
                          </TabsTrigger>
                        </motion.div>
                      ))}
                    </TabsList>
                  </div>
                  {/* Fade indicators for scrollable tabs on mobile */}
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent sm:hidden pointer-events-none"></div>
                  <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white to-transparent sm:hidden pointer-events-none"></div>
                </div>

                {/* Feature Content */}
                <div className="relative">
                  {platformFeatures.map(feature => (
                    <TabsContent
                      key={feature.id}
                      value={feature.id}
                      className="mt-0 focus-visible:outline-none focus-visible:ring-0"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-md sm:shadow-lg lg:shadow-xl"
                      >
                        {/* Responsive Grid Layout */}
                        <div className="flex flex-col lg:flex-row">
                          {/* Feature Image */}
                          <div className="relative w-full lg:w-1/2 h-40 xs:h-48 sm:h-56 md:h-64 lg:h-auto overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-blue-600/80 mix-blend-multiply"></div>
                            <img
                              src={feature.image}
                              alt={feature.title}
                              className="w-full h-full object-cover hover:scale-105 transition-all duration-1000 ease-out"
                            />
                            {/* Overlay content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center text-white px-3 sm:px-4 md:px-6">
                                <span className="inline-block p-1.5 sm:p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm mb-2 sm:mb-3 md:mb-4">
                                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                                </span>
                                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">
                                  {feature.title}
                                </h3>
                                <div className="w-8 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-white/50 mx-auto"></div>
                              </div>
                            </div>
                          </div>

                          {/* Feature Details */}
                          <div className="p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 w-full lg:w-1/2">
                            <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-1 sm:mb-2 block">
                              {feature.id.charAt(0).toUpperCase() +
                                feature.id.slice(1)}
                            </span>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                              {feature.title}
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                              {feature.description}
                            </p>

                            {/* Feature bullets */}
                            <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                              {feature.bullets.map((bullet, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.4,
                                    delay: 0.2 + idx * 0.1,
                                  }}
                                  className="flex items-start"
                                >
                                  <div className="p-1 sm:p-1.5 md:p-2 bg-primary/10 rounded-lg text-primary mr-2 sm:mr-3 md:mr-4 mt-0.5">
                                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                                  </div>
                                  <p className="text-xs sm:text-sm md:text-base text-gray-700">
                                    {bullet}
                                  </p>
                                </motion.div>
                              ))}
                            </div>

                            {/* Responsive buttons */}
                            <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4">
                              <button className="px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg text-xs sm:text-sm md:text-base flex items-center justify-center gap-1.5 sm:gap-2 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all">
                                Explore {feature.title}{' '}
                                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                              </button>
                              <button className="px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 bg-white border border-gray-200 hover:border-primary/30 text-gray-800 font-medium rounded-lg text-xs sm:text-sm md:text-base flex items-center justify-center gap-1.5 sm:gap-2 hover:shadow-md transition-all">
                                Watch Demo{' '}
                                <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </TabsContent>
                  ))}
                </div>
              </Tabs>
            </div>

            {/* Bottom Stats */}
            <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {[
                { number: '150+', label: 'Active Partners' },
                { number: '24/7', label: 'Support Available' },
                { number: '100+', label: 'Student Transactions' },
                { number: '8', label: 'Service Categories' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                  className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm sm:shadow-md md:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all text-center group hover:-translate-y-1"
                >
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-0.5 sm:mb-1 md:mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scrollbar hiding */}
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </section>
        {/* Stats Section */}
        <section className="py-16 my-10" ref={statsRef}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={statsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl overflow-hidden"
          >
            <div className="py-16 px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Fly8 Around the World
                </h2>
                <p className="text-gray-600">
                  Trusted by students and service providers across the globe.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.value}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
        {/* Process Steps */}
        <section className="py-20" ref={processRef}>
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={processInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 inline-block"
            >
              Simple Process
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              How to Become a Partner
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Our streamlined process gets you up and running in no time
            </motion.p>
          </div>

          <div className="relative">
            {/* Connected line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="relative"
                >
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all h-full">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 mb-6 mx-auto relative z-10">
                        <span className="text-primary font-bold text-2xl">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="py-16 my-10" ref={testimonialsRef}>
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={testimonialsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 inline-block"
            >
              Success Stories
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              What Our Partners Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Hear from recruitment consultants who've grown their business with
              us
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * index }}
              >
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="mr-4">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">
                        "{testimonial.text}"
                      </p>
                    </div>
                    <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
                      <div className="flex items-center">
                        <span className="text-primary font-bold mr-2">
                          {testimonial.result}
                        </span>
                        <span className="text-gray-600 text-sm">
                          increase in student placements
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/90 to-secondary/90 rounded-3xl overflow-hidden shadow-lg"
          >
            <div className="py-16 px-8 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Expand Your Business?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Join our network of successful education consultants and start
                transforming students' lives today
              </p>
              <Link to={'/signin/partner'}>
                <Button
                  size="lg"
                  className="rounded-full bg-white text-primary hover:bg-white/90 px-8 shadow-lg"
                >
                  Become a Partner <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </PageContainer>
    </div>
  );
};
const platformFeatures = [
  {
    id: 'dashboard',
    title: 'Your Command Center for Growth',
    short: 'Real-time analytics and insights',
    description:
      ' Our intuitive Partner Dashboard gives you everything you need to manage listings, track performance, and boost your sales',
    icon: BarChart3,
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Monitor leads, traffic, and conversions',
      'Launch promotions and offers easily',
      'Direct access to student interest forms',
      'Track every dollar earned transparently',
      'Update offerings anytime from anywhere',
      'Connect with our partner team instantly',
    ],
  },
  {
    id: 'leads',
    title: 'Lead Management',
    short: 'Organize and track student inquiries',
    description:
      'Our advanced CRM helps you manage your student pipeline efficiently',
    icon: Users,
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Student CRM',
      'Automated follow-ups',
      'Lead scoring',
      'Conversion tracking',
    ],
  },
  {
    id: 'documents',
    title: 'Document Portal',
    short: 'Secure document submission',
    description: 'Upload and manage all student documents in our secure portal',
    icon: FileText,
    image:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Secure uploads',
      'Document tracking',
      'Automatic notifications',
      'Version control',
    ],
  },
];
const features = [
  {
    icon: '💼',
    title: 'Sell Your Services',
    description: 'Offer your product to global students.',
    color: 'from-pink-500 to-rose-500',
    lightColor: 'from-pink-100 to-rose-100',
    iconBg: 'bg-pink-500',
  },
  {
    icon: '🌎',
    title: 'Expand Your Reach',
    description: 'Promote to a worldwide student base.',
    color: 'from-blue-500 to-cyan-500',
    lightColor: 'from-blue-100 to-cyan-100',
    iconBg: 'bg-blue-500',
  },
  {
    icon: '🤝',
    title: 'Brand Association',
    description: 'Partner with a trusted study abroad platform.',
    color: 'from-purple-500 to-indigo-500',
    lightColor: 'from-purple-100 to-indigo-100',
    iconBg: 'bg-purple-500',
  },
  {
    icon: '🎯',
    title: 'Targeted Promotions',
    description: 'Feature your brand to relevant students.',
    color: 'from-orange-500 to-amber-500',
    lightColor: 'from-orange-100 to-amber-100',
    iconBg: 'bg-orange-500',
  },
  {
    icon: '📈',
    title: 'Performance-Based Growth',
    description: 'Scale as your success increases.',
    color: 'from-emerald-500 to-teal-500',
    lightColor: 'from-emerald-100 to-teal-100',
    iconBg: 'bg-emerald-500',
  },
  {
    icon: '💰',
    title: 'Recurring Revenue',
    description: 'Earn from long-term student needs.',
    color: 'from-yellow-500 to-amber-500',
    lightColor: 'from-yellow-100 to-amber-100',
    iconBg: 'bg-yellow-500',
  },
  {
    icon: '🔄',
    title: 'Flexible Collaboration',
    description: 'Tailored to fit your offerings.',
    color: 'from-fuchsia-500 to-pink-500',
    lightColor: 'from-fuchsia-100 to-pink-100',
    iconBg: 'bg-fuchsia-500',
  },
  {
    icon: '👥',
    title: 'Dedicated Partner Support',
    description: 'Always have a team to back you.',
    color: 'from-sky-500 to-blue-500',
    lightColor: 'from-sky-100 to-blue-100',
    iconBg: 'bg-sky-500',
  },
];

const stats = [
  { value: '25+', label: 'Study Destinations Served' },
  { value: '10,000+', label: 'Students Reached' },
  { value: '30+', label: ' Countries Offered' },
  { value: '90%+', label: 'Success Rate' },
];

const steps = [
  {
    title: 'Apply Online',
    description:
      'Fill out our simple application form with your business details and experience',
  },
  {
    title: 'Get Verified',
    description:
      'Our team will review your application and schedule an onboarding call',
  },
  {
    title: 'Start Recruiting',
    description:
      'Access our platform, resources, and start connecting students with opportunities',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Director',
    company: 'Global Education Consultants',
    text: 'Partnering with Fly8 has been transformative for our business. The intuitive platform, responsive support team, and wide range of institution options have helped us place students more effectively than ever before.',
    avatar:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    result: '78%',
  },
  {
    name: 'Michael Chen',
    role: 'Founder',
    company: 'Study Abroad Experts',
    text: 'The Fly8 platform has revolutionized how we match students with universities. Their AI recommendation engine and streamlined application process have reduced our workload while increasing our placement success rate.',
    avatar:
      'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    result: '65%',
  },
];

const trustBadges = ['Verified Partner', 'Secure Platform', '24/7 Support'];

export default AgencyPartners;

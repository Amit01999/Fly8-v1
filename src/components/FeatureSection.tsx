
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, GraduationCap, Map, Globe, ThumbsUp, HeartHandshake, Lightbulb, Shield, DollarSign } from 'lucide-react';

const featureData = [
  {
    id: 1,
    icon: Sparkles,
    title: "AI-Powered Matching",
    description: "Our advanced algorithm analyzes your academic profile, preferences, and career goals to recommend programs with the highest likelihood of acceptance and future success.",
    color: "bg-blue-50",
    iconColor: "text-primary"
  },
  {
    id: 2,
    icon: BookOpen,
    title: "Comprehensive Program Database",
    description: "Access detailed information on over 125,000 programs across 1,500+ institutions, complete with admission requirements, tuition costs, and scholarship opportunities.",
    color: "bg-green-50",
    iconColor: "text-green-500"
  },
  {
    id: 3,
    icon: GraduationCap,
    title: "End-to-End Application Support",
    description: "From document preparation to submission tracking, our platform guides you through every stage of the application process with personalized checklists and expert assistance.",
    color: "bg-purple-50",
    iconColor: "text-purple-500"
  },
  {
    id: 4,
    icon: Map,
    title: "Global Visa Navigation",
    description: "Our visa experts simplify complex immigration requirements with country-specific guidance, document verification, and interview preparation to ensure a smooth transition abroad.",
    color: "bg-orange-50",
    iconColor: "text-orange-500"
  },
  {
    id: 5,
    icon: HeartHandshake,
    title: "Dedicated Student Advisors",
    description: "Connect with experienced advisors who provide personalized guidance tailored to your unique educational journey, available through chat, video calls, or in-person meetings.",
    color: "bg-rose-50",
    iconColor: "text-rose-500"
  },
  {
    id: 6,
    icon: DollarSign,
    title: "Financial Planning Tools",
    description: "Plan your education investment with our cost calculators, scholarship database, and financial aid resources to make informed decisions about funding your studies abroad.",
    color: "bg-emerald-50",
    iconColor: "text-emerald-500"
  },
  {
    id: 7,
    icon: Globe,
    title: "Cultural Adaptation Resources",
    description: "Prepare for your international experience with country guides, language resources, and cultural orientation materials to help you integrate seamlessly into your new environment.",
    color: "bg-teal-50",
    iconColor: "text-teal-500"
  },
  {
    id: 8,
    icon: Lightbulb,
    title: "Career Development Path",
    description: "Access career planning resources, internship opportunities, and alumni networks to maximize your employment prospects during and after your international education.",
    color: "bg-amber-50",
    iconColor: "text-amber-500"
  },
  {
    id: 9,
    icon: Shield,
    title: "Secure Application Process",
    description: "Rest easy knowing your personal information and documents are protected with bank-level encryption and strict data privacy protocols throughout your application journey.",
    color: "bg-indigo-50",
    iconColor: "text-indigo-500"
  },
  {
    id: 10,
    icon: ThumbsUp,
    title: "Post-Acceptance Support",
    description: "Our support doesn't end with acceptance. Access pre-departure guidance, housing assistance, arrival services, and local community connections at your destination.",
    color: "bg-pink-50",
    iconColor: "text-pink-500"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeatureSection = () => {
  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="max-container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-4">A Complete Ecosystem for International Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've reimagined the international education journey with innovative tools and personalized support that puts students first
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featureData.map((feature) => (
            <motion.div 
              key={feature.id}
              variants={item}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1"
            >
              <div className="p-8">
                <div className={`${feature.color} p-4 rounded-xl inline-block mb-4`}>
                  <feature.icon size={24} className={feature.iconColor} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;

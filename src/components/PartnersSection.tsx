
import React from 'react';
import { motion } from 'framer-motion';

const universities = [
  { name: "Harvard University", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/150px-Harvard_shield_wreath.svg.png" },
  { name: "Stanford University", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Stanford_University_seal_2003.svg/150px-Stanford_University_seal_2003.svg.png" },
  { name: "University of Oxford", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/150px-Oxford-University-Circlet.svg.png" },
  { name: "MIT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/150px-MIT_logo.svg.png" },
  { name: "University of Cambridge", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Coat_of_arms_of_the_University_of_Cambridge.svg/150px-Coat_of_arms_of_the_University_of_Cambridge.svg.png" },
  { name: "University of Toronto", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/University_of_Toronto_coat_of_arms.svg/150px-University_of_Toronto_coat_of_arms.svg.png" },
  { name: "National University of Singapore", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/NUS_coat_of_arms.svg/150px-NUS_coat_of_arms.svg.png" },
  { name: "ETH Zurich", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/ETH_Zurich_Logo_black.svg/150px-ETH_Zurich_Logo_black.svg.png" },
  { name: "University of Melbourne", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/University_of_Melbourne_coat_of_arms.svg/150px-University_of_Melbourne_coat_of_arms.svg.png" },
  { name: "Technical University of Munich", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_of_the_Technical_University_of_Munich.svg/150px-Logo_of_the_Technical_University_of_Munich.svg.png" },
  { name: "University of British Columbia", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/UBC_coat_of_arms.svg/150px-UBC_coat_of_arms.svg.png" },
  { name: "Imperial College London", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Imperial_College_London_crest.svg/150px-Imperial_College_London_crest.svg.png" }
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

const PartnersSection = () => {
  return (
    <section id="partners" className="bg-gray-50 py-20">
      <div className="max-container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-4">Our Global Education Network</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built exclusive partnerships with world-class institutions across six continents to offer you unparalleled educational opportunities
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {universities.map((university, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="flex flex-col items-center"
            >
              <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center w-full h-32 hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={university.logo} 
                  alt={university.name} 
                  className="max-h-16 max-w-full"
                  style={{ filter: "grayscale(100%)" }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.filter = "grayscale(0%)";
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.transition = "all 0.3s ease";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.filter = "grayscale(100%)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>
              <p className="mt-3 text-sm text-gray-600 text-center">{university.name}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-primary font-medium">
            And 1,500+ more prestigious institutions across 50+ countries
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "MBA Student from USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    quote: "The AI-matching technology connected me with programs I never would have discovered on my own. What impressed me most was the personalized guidance throughout my entire journey – from choosing the right MBA program to securing housing in a new country. My advisor went above and beyond to ensure my success.",
    stars: 5,
    program: "MBA in International Business, London Business School"
  },
  {
    id: 2,
    name: "David Kim",
    role: "Computer Science Student from South Korea",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    quote: "Navigating visa requirements and university applications from Korea seemed overwhelming until I found this platform. Their step-by-step visa guidance was exceptional, and they helped me secure a partial scholarship I wouldn't have found otherwise. The pre-departure orientation made my transition to studying abroad smooth and stress-free.",
    stars: 5,
    program: "MSc in Computer Science, University of Toronto"
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Engineering Student from India",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    quote: "As a first-generation international student, I had countless questions about studying abroad. The platform provided comprehensive information about each university and program, while the document verification service ensured my application was flawless. My advisor was available 24/7 to address my concerns, making me feel supported every step of the way.",
    stars: 5,
    program: "Bachelor in Mechanical Engineering, Technical University of Munich"
  },
  {
    id: 4,
    name: "Miguel Rodriguez",
    role: "Hospitality Management Student from Mexico",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    quote: "The financial planning tools were a game-changer for me and my family. We could accurately project the total cost of my education abroad and explore various funding options. The scholarship matching feature helped me secure enough financial aid to make my dream of studying hospitality management in Switzerland a reality.",
    stars: 5,
    program: "BS in Hospitality Management, EHL Switzerland"
  },
  {
    id: 5,
    name: "Fatima Al-Zahra",
    role: "Medical Student from UAE",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    quote: "The cultural adaptation resources prepared me for life in Australia before I even arrived. My transition was smooth thanks to the pre-departure orientation, housing assistance, and introduction to local student communities. The platform even connected me with alumni from my home country who provided invaluable insights and friendship.",
    stars: 5,
    program: "Doctor of Medicine, University of Melbourne"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="max-container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-4">Hear From Our Global Student Community</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from students who transformed their educational journey with our platform
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <motion.div 
            className="w-full lg:w-1/3 hidden lg:block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96">
              {testimonials.map((testimonial, index) => {
                const isActive = index === currentIndex;
                const isPrevious = (index === currentIndex - 1) || (currentIndex === 0 && index === testimonials.length - 1);
                const isNext = (index === currentIndex + 1) || (currentIndex === testimonials.length - 1 && index === 0);
                
                let positionClass = "hidden";
                
                if (isActive) {
                  positionClass = "z-30 scale-110";
                } else if (isPrevious) {
                  positionClass = "z-20 -translate-x-16 scale-90 opacity-70";
                } else if (isNext) {
                  positionClass = "z-10 -translate-x-8 scale-80 opacity-50";
                }
                
                return (
                  <div
                    key={testimonial.id}
                    className={`absolute top-0 left-0 transform transition-all duration-500 ${positionClass}`}
                    style={{ display: isActive || isPrevious || isNext ? "block" : "none" }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-auto rounded-2xl shadow-xl object-cover aspect-square"
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
          
          <div className="w-full lg:w-2/3">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className={`bg-white rounded-2xl shadow-xl p-8 ${
                    index === currentIndex ? "block" : "hidden"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-xl text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center">
                    <div className="lg:hidden mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-primary">{testimonial.program}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <div className="flex justify-center mt-8 space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrev}
                  className="rounded-full hover:bg-primary hover:text-white transition-all"
                >
                  <ArrowLeft size={18} />
                </Button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-primary scale-125"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToNext}
                  className="rounded-full hover:bg-primary hover:text-white transition-all"
                >
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

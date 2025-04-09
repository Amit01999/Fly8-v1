
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sofia Martinez",
    location: "Mexico → Canada",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
    text: "Fly8 transformed my dream of studying in Canada into reality. Their guidance on scholarship applications saved me over $15,000 in tuition fees!",
    program: "MBA at University of Toronto",
    rating: 5
  },
  {
    id: 2,
    name: "Raj Patel",
    location: "India → Australia",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
    text: "The visa process seemed impossible until Fly8 stepped in. Their team handled everything, and I got my student visa approved in just 3 weeks.",
    program: "Computer Science at University of Melbourne",
    rating: 5
  },
  {
    id: 3,
    name: "Aisha Nkosi",
    location: "Nigeria → UK",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
    text: "From application to arrival, Fly8 was with me every step. Their accommodation service found me a perfect flat near campus that fit my budget perfectly.",
    program: "International Relations at LSE",
    rating: 5
  },
  {
    id: 4,
    name: "Jin-Ho Park",
    location: "South Korea → USA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
    text: "The career support from Fly8 has been incredible. They connected me with internship opportunities that aligned perfectly with my field of study.",
    program: "Engineering at MIT",
    rating: 4
  },
  {
    id: 5,
    name: "Elena Petrova",
    location: "Russia → Germany",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
    text: "The 24/7 Fly8 Assistant helped me navigate cultural differences and language barriers even before I arrived. I felt prepared from day one.",
    program: "Economics at Humboldt University",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
      <div className="max-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Success Stories From Our Students</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from students who transformed their education and career through Fly8
          </p>
        </motion.div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto max-w-5xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 pl-6">
                <Card className="border border-gray-200 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary"
                      />
                      <div>
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-gray-500 text-sm">{testimonial.location}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="italic text-gray-700 mb-4">"{testimonial.text}"</blockquote>
                    <p className="text-sm text-primary font-medium">{testimonial.program}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="relative static translate-y-0 left-0" />
            <CarouselNext className="relative static translate-y-0 right-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Quote, MapPin, Users, Coffee } from 'lucide-react';

export function CampusLife() {
  const campusImages = [
    {
      src: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=800&q=80',
      alt: 'Modern campus building',
    },
    {
      src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80',
      alt: 'Campus study areas',
    },
    {
      src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80',
      alt: 'Student activities',
    },
  ];

  const campusFeatures = [
    {
      icon: MapPin,
      title: 'Prime NYC Location',
      description:
        'Located in Midtown Manhattan with easy access to internships, cultural attractions, and networking opportunities.',
    },
    {
      icon: Users,
      title: 'Diverse Community',
      description:
        'Join a vibrant community of students from over 50 countries, creating a truly international experience.',
    },
    {
      icon: Coffee,
      title: 'Modern Facilities',
      description:
        'State-of-the-art classrooms, computer labs, library, and student lounges designed for collaborative learning.',
    },
  ];

  const testimonial = {
    quote:
      'Berkeley College gave me the perfect blend of academic excellence and real-world experience. The location in NYC opened countless opportunities for internships and networking. The support I received as an international student was exceptional.',
    author: 'Maria Rodriguez',
    country: 'Spain',
    program: 'BBA in Business Administration, Class of 2023',
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Campus Life & Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the vibrant energy of New York City while being part of a
            close-knit academic community at Berkeley College.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Carousel className="w-full">
              <CarouselContent>
                {campusImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-0 shadow-lg overflow-hidden">
                      <CardContent className="p-0">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-80 object-cover"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </motion.div>

          {/* Campus Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {campusFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Student Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6 opacity-60" />
                <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-600">{testimonial.country}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.program}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

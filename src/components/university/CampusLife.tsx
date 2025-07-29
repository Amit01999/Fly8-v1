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

export function CampusLife({ campusInfo }) {
  const {
    campusImages,
    campusFeatures,

    universityLocation,
    universityName,
  } = campusInfo || {};

  // Use provided data or fall back to defaults
  const campusImagesToRender = campusImages;
  const campusFeaturesToRender = campusFeatures;

  // Hardcode icons for campus features based on index
  const getFeatureIcon = index => {
    const icons = [MapPin, Users, Coffee];
    return icons[index] || MapPin; // Fallback to MapPin if index is out of range
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
            Experience the vibrant energy of {universityLocation} while being
            part of a close-knit academic community at {universityName}.
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
                {campusImagesToRender.map((image, index) => (
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
            {campusFeaturesToRender.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  {React.createElement(getFeatureIcon(index), {
                    className: 'w-6 h-6 text-white',
                  })}
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
        {/* <motion.div
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
                  "{testimonialToRender.quote}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {testimonialToRender.author.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonialToRender.author}
                    </div>
                    <div className="text-gray-600">
                      {testimonialToRender.country}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonialToRender.program}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </section>
  );
}

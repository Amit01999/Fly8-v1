import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Info } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
function CountryFAQs({ itemVariants, faqs }) {
  return (
    <div>
      <motion.section
        variants={itemVariants}
        className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-indigo-100 p-3 rounded-full">
            <BookOpen className="h-6 w-6 text-indigo-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <span className="text-left font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-1 rounded-full mt-1">
                <Info className="h-4 w-4 text-blue-600" />
              </div>
              <p className="text-gray-600">
                Have more questions? Contact our student advisors for
                personalized assistance with your UK study plans. We're here to
                help you navigate every step of your educational journey.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default CountryFAQs;

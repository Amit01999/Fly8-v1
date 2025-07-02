import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import testimonial1 from '@/assets/reviews/fabiha.jpg';
import testimonial2 from '@/assets/reviews/2.png';
import testimonial3 from '@/assets/reviews/3.png';
import testimonial4 from '@/assets/reviews/4.png';
import testimonial5 from '@/assets/reviews/5.png';

const testimonials = [
  {
    id: 1,
    name: 'Fabiha Bushra',
    location: 'Russia',
    image: testimonial1,
    text: 'Fly8 is a company which helps foreign students to get admission in universities abroad. They are extremely helpful and informative. They guided & supported me for my education in Russia, and most importantly they are so genuine with their work',
    program: 'MBBS in Rostov State Medical University, Russia',
    rating: 5,
  },

  {
    id: 3,
    name: 'Syful Islam',
    location: 'Germany',
    image: testimonial3,
    text: 'The team at Fly8 was exceptional in helping me navigate the complex application process. I am now pursuing my MBA at BSBI in Berlin, all thanks to their expert advice and dedication.',
    program:
      'Masters In Business Administration in BSBI (Berlin School of Business and Innovation)',
    rating: 5,
  },
  {
    id: 4,
    name: 'Mohammed Kawsar',
    location: 'USA',
    image: testimonial4,
    text: 'The team at Fly8 was instrumental in my successful admission to Duquesne University. Their personalized approach and in-depth knowledge made the process stress-free.',
    program:
      'MS in Analytics & Information Management in Duquesne University Palumbo-Donahue School of Business (USA)',
    rating: 4,
  },
  {
    id: 2,
    name: 'Md. Abdus Samad',
    location: 'Europe',
    image: testimonial2,
    text: 'Fly8 made my dream of studying at three prestigious European universities a reality. Their support in securing the Erasmus Mundus scholarship for Software Engineers For Green Deal was invaluable. I am incredibly grateful for their expertise.',
    program: 'Software Engineers For Green Deal (SE4GD)',
    rating: 5,
  },
  {
    id: 5,
    name: 'Syed Nazmus Sadat',
    location: 'UK',
    image: testimonial5,
    text: 'Fly8 played a crucial role in helping me gain admission to one of the UK’s leading universities. Their tailored guidance ensured my successful enrollment in MSc Computing at Edinburgh Napier University.',
    program: 'MSc in Computing in Edinburgh Napier University (UK)',
    rating: 5,
  },
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
            Hear directly from students who transformed their education and
            career through Fly8
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mx-auto max-w-5xl"
        >
          <CarouselContent>
            {testimonials.map(testimonial => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/2 pl-6"
              >
                <Card className="border border-gray-200 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary"
                      />
                      <div>
                        <h3 className="font-bold text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {testimonial.location}
                        </p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={
                                i < testimonial.rating
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-300'
                              }
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="italic text-gray-700 mb-4">
                      "{testimonial.text}"
                    </blockquote>
                    <p className="text-sm text-primary font-medium">
                      {testimonial.program}
                    </p>
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

// import { cn } from '@/lib/utils';
// import { Marquee } from '@/components/ui/magicUi/Marquee';

// const reviews = [
//   {
//     name: 'Jack',
//     username: '@jack',
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: 'https://avatar.vercel.sh/jack',
//   },
//   {
//     name: 'Jill',
//     username: '@jill',
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: 'https://avatar.vercel.sh/jill',
//   },
//   {
//     name: 'John',
//     username: '@john',
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: 'https://avatar.vercel.sh/john',
//   },
//   {
//     name: 'Jane',
//     username: '@jane',
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: 'https://avatar.vercel.sh/jane',
//   },
//   {
//     name: 'Jenny',
//     username: '@jenny',
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: 'https://avatar.vercel.sh/jenny',
//   },
//   {
//     name: 'James',
//     username: '@james',
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: 'https://avatar.vercel.sh/james',
//   },
// ];

// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

// const ReviewCard = ({
//   img,
//   name,
//   username,
//   body,
// }: {
//   img: string;
//   name: string;
//   username: string;
//   body: string;
// }) => {
//   return (
//     <figure
//       className={cn(
//         'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
//         // light styles
//         'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
//         // dark styles
//         'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <img className="rounded-full" width="32" height="32" alt="" src={img} />
//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium dark:text-white">
//             {name}
//           </figcaption>
//           <p className="text-xs font-medium dark:text-white/40">{username}</p>
//         </div>
//       </div>
//       <blockquote className="mt-2 text-sm">{body}</blockquote>
//     </figure>
//   );
// };

// const TestimonialsSection = () => {
//   return (
//     <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
//       <Marquee pauseOnHover className="[--duration:20s]">
//         {firstRow.map(review => (
//           <ReviewCard key={review.username} {...review} />
//         ))}
//       </Marquee>
//       <Marquee reverse pauseOnHover className="[--duration:20s]">
//         {secondRow.map(review => (
//           <ReviewCard key={review.username} {...review} />
//         ))}
//       </Marquee>
//       <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
//       <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
//     </div>
//   );
// };
// export default TestimonialsSection;

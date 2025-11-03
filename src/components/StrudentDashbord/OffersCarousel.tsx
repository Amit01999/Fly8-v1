import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useRef, useState } from 'react';
import type { CarouselApi } from '@/components/ui/carousel';

// Replace with your own images
import ieltsdesktop from '@/assets/temporary/ielts/2.png';
import ieltsmobile from '@/assets/temporary/ielts/3.png';
import japan from '@/assets/offers/japan.jpg';
import japan1 from '@/assets/offers/japan1.jpg';

const OffersCarousel = () => {
  const registrationUrl = 'https://www.fly8.global/free-ielts-registration';
  const whatsappGroupUrl = 'https://chat.whatsapp.com/Kv3Hz7B7cBO3mJiDfopOD8';

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const offers = [
    {
      desktopImage: japan,
      mobileImage: japan1,
      url: whatsappGroupUrl,
      altText: 'Japan Opportunity',
    },
    {
      desktopImage: ieltsdesktop,
      mobileImage: ieltsmobile,
      url: registrationUrl,
      altText: 'IELTS Course Registration',
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative mb-6 overflow-hidden rounded-xl">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <span className="uppercase">Offers</span>
        <span className="h-1 w-16 ml-3 bg-primary/20 rounded-full"></span>
      </h2>

      <Carousel
        setApi={setApi}
        plugins={[plugin.current as any]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {offers.map((offer, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  {/* Desktop Image - visible on screens ≥768px */}
                  <a
                    href={offer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:block w-full group overflow-hidden"
                  >
                    <img
                      src={offer.desktopImage}
                      alt={`${offer.altText} - Desktop Banner`}
                      className="w-full h-auto object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110"
                    />
                  </a>

                  {/* Mobile Image - visible on screens <768px */}
                  <a
                    href={offer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block md:hidden w-full group overflow-hidden"
                  >
                    <img
                      src={offer.mobileImage}
                      alt={`${offer.altText} - Mobile Banner`}
                      className="w-full h-auto object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110"
                    />
                  </a>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>

      {/* Carousel Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              current === index + 1 ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OffersCarousel;

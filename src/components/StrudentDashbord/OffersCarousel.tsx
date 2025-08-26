import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Replace with your own images
import offer1 from '@/assets/offers/1.png';
import offer2 from '@/assets/offers/2.png';
import offer3 from '@/assets/offers/3.png';

const offers = [offer1, offer2, offer3];

const OffersCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % offers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex(current => (current + 1) % offers.length);
  };

  const prevSlide = () => {
    setActiveIndex(current =>
      current === 0 ? offers.length - 1 : current - 1
    );
  };

  return (
    <div className="relative mb-6 overflow-hidden rounded-xl">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <span className="uppercase">Offers</span>
        <span className="h-1 w-16 ml-3 bg-primary/20 rounded-full"></span>
      </h2>

      <Card className="overflow-hidden">
        <CardContent className="p-0 relative">
          <div className="relative h-48 md:h-56">
            {offers.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Offer ${index + 1}`}
                className={cn(
                  'absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out transform',
                  index === activeIndex
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-full'
                )}
              />
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-black/20 backdrop-blur-sm border-white/20 hover:bg-black/30"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4 text-white" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-black/20 backdrop-blur-sm border-white/20 hover:bg-black/30"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4 text-white" />
            </Button>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
            {offers.map((_, index) => (
              <button
                key={index}
                className={cn(
                  'w-2 h-2 rounded-full',
                  index === activeIndex ? 'bg-white' : 'bg-white/40'
                )}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OffersCarousel;

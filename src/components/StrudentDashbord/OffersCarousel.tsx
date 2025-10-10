import { Card, CardContent } from '@/components/ui/card';

// Replace with your own images
import ieltsdesktop from '@/assets/temporary/ielts/2.png';
import ieltsmobile from '@/assets/temporary/ielts/3.png';

const OffersCarousel = () => {
  const registrationUrl = 'https://www.fly8.global/free-ielts-registration';

  return (
    <div className="relative mb-6 overflow-hidden rounded-xl">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <span className="uppercase">Offers</span>
        <span className="h-1 w-16 ml-3 bg-primary/20 rounded-full"></span>
      </h2>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          {/* Desktop Image - visible on screens ≥768px */}
          <a
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block w-full group overflow-hidden"
          >
            <img
              src={ieltsdesktop}
              alt="IELTS Course Registration - Desktop Banner"
              className="w-full h-auto object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110"
            />
          </a>

          {/* Mobile Image - visible on screens <768px */}
          <a
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block md:hidden w-full group overflow-hidden"
          >
            <img
              src={ieltsmobile}
              alt="IELTS Course Registration - Mobile Banner"
              className="w-full h-auto object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110"
            />
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default OffersCarousel;

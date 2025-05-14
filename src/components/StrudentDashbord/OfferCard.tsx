import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface OfferCardProps {
  title: string;
  description: string;
  bgColor: string;
  icon: React.ReactNode;
  href: string;
}

const OfferCard = ({
  title,
  description,
  bgColor,
  icon,
  href,
}: OfferCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`${bgColor} p-6 rounded-xl shadow-md overflow-hidden relative`}
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white/20 p-2 rounded-full">{icon}</div>
          <h3 className="text-white font-semibold text-lg">{title}</h3>
        </div>
        <p className="text-white/80 text-sm mb-4">{description}</p>
        <a
          href={href}
          className="flex items-center gap-1 text-white font-medium text-sm mt-auto group"
        >
          Learn more
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
    </motion.div>
  );
};

export default OfferCard;


import { motion } from "framer-motion";
import { Trophy, MapPin, DollarSign, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export type University = {
  id: string;
  name: string;
  logo: string;
  country: string;
  rank?: number;
  feeRange: {
    min: number;
    max: number;
  };
  isFeatured?: boolean;
};

type UniversityCardProps = {
  university: University;
  index?: number;
};

const UniversityCard = ({ university, index = 0 }: UniversityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-xl overflow-hidden bg-card border shadow-sm hover:shadow-md transition-shadow relative"
    >
      {university.isFeatured && (
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
          Featured
        </div>
      )}
      <div className="flex flex-col h-full">
        <div className="p-6 flex items-center">
          <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-muted mr-4">
            <img 
              src={university.logo || "/placeholder.svg"} 
              alt={university.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{university.name}</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{university.country}</span>
            </div>
            {university.rank && (
              <div className="flex items-center text-sm mt-1">
                <Trophy className="h-3 w-3 mr-1 text-amber-500" />
                <span className="text-muted-foreground">Rank: <span className="font-medium">{university.rank}</span></span>
              </div>
            )}
          </div>
        </div>
        
        <div className="px-6 pb-6 mt-auto">
          <div className="flex items-center mb-4">
            <DollarSign className="h-4 w-4 mr-2 text-primary" />
            <span className="text-sm">
              ${university.feeRange.min.toLocaleString()} - ${university.feeRange.max.toLocaleString()} per year
            </span>
          </div>
          
          <div className="flex justify-between items-center gap-4">
            <Link to={`/universities/${university.id}`} className="text-sm text-primary flex items-center hover:underline">
              <span>View Courses</span>
              <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
            <Button>Apply Now</Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UniversityCard;

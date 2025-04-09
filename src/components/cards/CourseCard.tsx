
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Clock, DollarSign, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Course = {
  id: string;
  name: string;
  university: {
    id: string;
    name: string;
    logo: string;
    country: string;
  };
  fee: number;
  duration: string;
  level: "Undergraduate" | "Postgraduate" | "PhD";
  field: string;
};

type CourseCardProps = {
  course: Course;
  index?: number;
};

const CourseCard = ({ course, index = 0 }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-xl overflow-hidden bg-card border shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center p-4 border-b">
          <div className="w-12 h-12 flex-shrink-0 rounded-md overflow-hidden bg-muted">
            <img 
              src={course.university.logo || "/placeholder.svg"} 
              alt={course.university.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-3">
            <h3 className="font-semibold text-lg line-clamp-1">{course.name}</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{course.university.name}, {course.university.country}</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 flex-grow">
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center">
              <GraduationCap className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm">{course.level}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm">{course.duration}</span>
            </div>
            <div className="flex items-center col-span-2">
              <DollarSign className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm">${course.fee.toLocaleString()} per year</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-auto">
            <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
              {course.field}
            </div>
            <Button size="sm">Apply Now</Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;

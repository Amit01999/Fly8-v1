// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { GraduationCap, Clock, DollarSign, MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export type Course = {
//   id: string;
//   name: string;
//   university: {
//     id: string;
//     name: string;
//     logo: string;
//     country: string;
//   };
//   fee: number;
//   duration: string;
//   level: "Undergraduate" | "Postgraduate" | "PhD";
//   field: string;
// };

// type CourseCardProps = {
//   course: Course;
//   index?: number;
// };

// const CourseCard = ({ course, index = 0 }: CourseCardProps) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4, delay: index * 0.1 }}
//       className="rounded-xl overflow-hidden bg-card border shadow-sm hover:shadow-md transition-shadow"
//     >
//       <div className="flex flex-col h-full">
//         <div className="flex items-center p-4 border-b">
//           <div className="w-12 h-12 flex-shrink-0 rounded-md overflow-hidden bg-muted">
//             <img
//               src={course.university.logo || "/placeholder.svg"}
//               alt={course.university.name}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="ml-3">
//             <h3 className="font-semibold text-lg line-clamp-1">{course.name}</h3>
//             <div className="flex items-center text-sm text-muted-foreground">
//               <MapPin className="h-3 w-3 mr-1" />
//               <span>{course.university.name}, {course.university.country}</span>
//             </div>
//           </div>
//         </div>

//         <div className="p-4 flex-grow">
//           <div className="grid grid-cols-2 gap-3 mb-4">
//             <div className="flex items-center">
//               <GraduationCap className="h-4 w-4 mr-2 text-primary" />
//               <span className="text-sm">{course.level}</span>
//             </div>
//             <div className="flex items-center">
//               <Clock className="h-4 w-4 mr-2 text-primary" />
//               <span className="text-sm">{course.duration}</span>
//             </div>
//             <div className="flex items-center col-span-2">
//               <DollarSign className="h-4 w-4 mr-2 text-primary" />
//               <span className="text-sm">${course.fee.toLocaleString()} per year</span>
//             </div>
//           </div>

//           <div className="flex justify-between items-center mt-auto">
//             <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
//               {course.field}
//             </div>
//             <Button size="sm">Apply Now</Button>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default CourseCard;

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Clock,
  DollarSign,
  MapPin,
  BookOpen,
  Globe,
  Languages,
  Info,
  BadgeCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  level: 'Undergraduate' | 'Postgraduate' | 'PhD';
  field: string;
  intakes?: string[];
  languageRequirements?: string[];
  programModes?: string[];
  applicationFee?: string;
  totalSubjects?: number;
  scholarshipNote?: string;
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
      className="rounded-2xl bg-white border shadow-md hover:shadow-lg transition-shadow overflow-hidden"
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center p-4 border-b bg-muted/40">
          <div className="w-12 h-12 rounded-md overflow-hidden bg-muted flex-shrink-0">
            <img
              src={course.university.logo || '/placeholder.svg'}
              alt={course.university.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-3">
            <h3 className="font-semibold text-lg line-clamp-1">
              {course.name}
            </h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              <span>
                {course.university.name}, {course.university.country}
              </span>
            </div>
          </div>
        </div>

        {/* Main Info */}
        <div className="p-4 space-y-3 flex-grow">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center text-sm">
              <GraduationCap className="h-4 w-4 mr-2 text-primary" />
              {course.level}
            </div>
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-2 text-primary" />
              {course.duration}
            </div>
            <div className="flex items-center col-span-2 text-sm">
              <DollarSign className="h-4 w-4 mr-2 text-primary" />$
              {course.fee.toLocaleString()} total (~AUD)
            </div>
            {course.applicationFee && (
              <div className="flex items-center col-span-2 text-sm">
                <BadgeCheck className="h-4 w-4 mr-2 text-primary" />
                Application Fee: {course.applicationFee}
              </div>
            )}
            {course.totalSubjects && (
              <div className="flex items-center col-span-2 text-sm">
                <BookOpen className="h-4 w-4 mr-2 text-primary" />
                {course.totalSubjects} subjects
              </div>
            )}
            {course.intakes?.length && (
              <div className="flex items-start col-span-2 text-sm">
                <Clock className="h-4 w-4 mr-2 mt-1 text-primary" />
                <span>
                  <strong>Intakes:</strong> {course.intakes.join(', ')}
                </span>
              </div>
            )}
            {course.languageRequirements?.length && (
              <div className="flex items-start col-span-2 text-sm">
                <Languages className="h-4 w-4 mr-2 mt-1 text-primary" />
                <span>
                  <strong>Language:</strong>{' '}
                  {course.languageRequirements.join('; ')}
                </span>
              </div>
            )}
            {course.programModes?.length && (
              <div className="flex items-start col-span-2 text-sm">
                <Globe className="h-4 w-4 mr-2 mt-1 text-primary" />
                <span>
                  <strong>Mode:</strong> {course.programModes.join(', ')}
                </span>
              </div>
            )}
            {course.scholarshipNote && (
              <div className="flex items-start col-span-2 text-sm">
                <Info className="h-4 w-4 mr-2 mt-1 text-yellow-600" />
                <span className="text-muted-foreground">
                  {course.scholarshipNote}
                </span>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
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

// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import {
//   GraduationCap,
//   Clock,
//   DollarSign,
//   MapPin,
//   BookOpen,
//   Globe,
//   Languages,
//   Info,
//   BadgeCheck,
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

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
//   level: 'Undergraduate' | 'Postgraduate' | 'PhD';
//   field: string;
//   intakes?: string[];
//   languageRequirements?: string[];
//   programModes?: string[];
//   applicationFee?: string;
//   totalSubjects?: number;
//   scholarshipNote?: string;
// };

// type CourseCardProps = {
//   course: Course;
//   index?: number;
// };

// const CourseCard = ({ course, index = 0 }: CourseCardProps) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
//       className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
//     >
//       <div className="flex flex-col h-full">
//         {/* Header */}
//         <div className="flex items-center p-5 bg-gray-50 border-b border-gray-100">
//           <div>
//             <h3 className="font-bold text-xl text-gray-900 line-clamp-1">
//               {course.name}
//             </h3>
//             <div className="flex items-center mt-1 text-sm text-gray-600">
//               <MapPin className="h-4 w-4 mr-1.5 text-indigo-600" />
//               <span className="font-medium">
//                 {course.university.name}, {course.university.country}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Main Info */}
//         <div className="p-5 space-y-4 flex-grow">
//           <div className="grid grid-cols-2 gap-4">
//             <div className="flex items-center text-sm text-gray-700">
//               <GraduationCap className="h-4 w-4 mr-2 text-indigo-600" />
//               <span className="font-medium">{course.level}</span>
//             </div>
//             <div className="flex items-center text-sm text-gray-700">
//               <Clock className="h-4 w-4 mr-2 text-indigo-600" />
//               <span className="font-medium">{course.duration}</span>
//             </div>
//             <div className="flex items-center col-span-2 text-sm text-gray-700">
//               <DollarSign className="h-4 w-4 mr-2 text-indigo-600" />
//               <span className="font-medium">
//                 ${course.fee.toLocaleString()} total (~USD)
//               </span>
//             </div>
//             {course.applicationFee && (
//               <div className="flex items-center col-span-2 text-sm text-gray-700">
//                 <BadgeCheck className="h-4 w-4 mr-2 text-indigo-600" />
//                 <span>Application Fee: {course.applicationFee}</span>
//               </div>
//             )}
//             {course.totalSubjects && (
//               <div className="flex items-center col-span-2 text-sm text-gray-700">
//                 <BookOpen className="h-4 w-4 mr-2 text-indigo-600" />
//                 <span>{course.totalSubjects} subjects</span>
//               </div>
//             )}
//             {course.intakes?.length && (
//               <div className="flex items-start col-span-2 text-sm text-gray-700">
//                 <Clock className="h-4 w-4 mr-2 mt-0.5 text-indigo-600" />
//                 <span>
//                   <strong className="font-semibold">Intakes:</strong>{' '}
//                   {course.intakes.join(', ')}
//                 </span>
//               </div>
//             )}
//             {course.languageRequirements?.length && (
//               <div className="flex items-start col-span-2 text-sm text-gray-700">
//                 <Languages className="h-4 w-4 mr-2 mt-0.5 text-indigo-600" />
//                 <span>
//                   <strong className="font-semibold">Language:</strong>{' '}
//                   {course.languageRequirements.join('; ')}
//                 </span>
//               </div>
//             )}
//             {course.programModes?.length && (
//               <div className="flex items-start col-span-2 text-sm text-gray-700">
//                 <Globe className="h-4 w-4 mr-2 mt-0.5 text-indigo-600" />
//                 <span>
//                   <strong className="font-semibold">Mode:</strong>{' '}
//                   {course.programModes.join(', ')}
//                 </span>
//               </div>
//             )}
//             {course.scholarshipNote && (
//               <div className="flex items-start col-span-2 text-sm text-yellow-700 bg-yellow-50 p-3 rounded-md">
//                 <Info className="h-4 w-4 mr-2 mt-0.5 text-yellow-600" />
//                 <span>{course.scholarshipNote}</span>
//               </div>
//             )}
//           </div>

//           <div className="flex justify-between items-center mt-5">
//             <div className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full">
//               {course.field}
//             </div>
//             <Button
//               size="sm"
//               className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg"
//               asChild
//             >
//               <Link to={`/apply/${course.id}`}>Apply Now</Link>
//             </Button>
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
  Languages,
  Globe,
  Info,
  BadgeCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export type Program = {
  country: any;
  majors: any;
  id: string;
  name: string;
  universityName: string;
  location: string;
  level: 'Undergraduate' | 'Postgraduate' | 'PhD';
  duration: string;
  intakes: string[];
  languageRequirements: string[];
  programModes: string[];
  scholarship: string;
  applicationFee: string;
  tuitionFee: number;
};

type ProgramCardProps = {
  program: Program;
  index?: number;
};

const ProgramCard = ({ program, index = 0 }: ProgramCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
      className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-5 bg-gray-50 border-b border-gray-100">
          <h3 className="font-bold text-xl text-gray-900 line-clamp-1">
            {program.name}
          </h3>
          <div className="flex items-center mt-1 text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-1.5 text-indigo-600" />
            <span className="font-medium">
              {program.universityName}, {program.location}
            </span>
          </div>
        </div>

        {/* Main Info */}
        <div className="p-5 space-y-4 flex-grow">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center text-sm text-gray-700">
              <GraduationCap className="h-4 w-4 mr-2 text-indigo-600" />
              <span className="font-medium">{program.level}</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <Clock className="h-4 w-4 mr-2 text-indigo-600" />
              <span className="font-medium">{program.duration}</span>
            </div>
            <div className="flex items-start col-span-2 text-sm text-gray-700">
              <Clock className="h-4 w-4 mr-2 mt-0.5 text-indigo-600" />
              <span>
                <strong className="font-semibold">Intakes:</strong>{' '}
                {program.intakes.join(', ')}
              </span>
            </div>
            <div className="flex items-start col-span-2 text-sm text-gray-700">
              <Languages className="h-4 w-4 mr-2 mt-0.5 text-indigo-600" />
              <span>
                <strong className="font-semibold">Language:</strong>{' '}
                {program.languageRequirements.join('; ')}
              </span>
            </div>
            <div className="flex items-start col-span-2 text-sm text-gray-700">
              <Globe className="h-4 w-4 mr-2 mt-0.5 text-indigo-600" />
              <span>
                <strong className="font-semibold">Mode:</strong>{' '}
                {program.programModes.join(', ')}
              </span>
            </div>
            <div className="flex items-start col-span-2 text-sm text-gray-700">
              <Info className="h-4 w-4 mr-2 mt-0.5 text-yellow-600" />
              <span>
                <strong className="font-semibold">Scholarship:</strong>{' '}
                {program.scholarship}
              </span>
            </div>
            <div className="flex items-center col-span-2 text-sm text-gray-700">
              <BadgeCheck className="h-4 w-4 mr-2 text-indigo-600" />
              <span>
                <strong className="font-semibold">Application Fee:</strong>{' '}
                {program.applicationFee}
              </span>
            </div>
            <div className="flex items-center col-span-2 text-sm text-gray-700">
              <DollarSign className="h-4 w-4 mr-2 text-indigo-600" />
              <span className="font-medium">
                ${program.tuitionFee.toLocaleString()} total (~USD)
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end mt-5">
            <Button
              size="sm"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg px-4"
              asChild
            >
              <Link to={`/apply/${program.id}`}>Apply Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgramCard;

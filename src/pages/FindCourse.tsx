// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { BookOpen, Filter, SlidersHorizontal } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import {
//   Sheet,
//   SheetTrigger,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
// } from '@/components/ui/sheet';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Label } from '@/components/ui/label';
// import { Slider } from '@/components/ui/slider';
// import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Input } from '@/components/ui/input';
// import PageHeader from '@/components/layout/PageHeader';
// import PageContainer from '@/components/layout/PageContainer';
// import CourseCard, { Course } from '@/components/cards/CourseCard';
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from '@/components/ui/pagination';

// // TypeScript interface for raw course data
// interface mockCourse {
//   id: string;
//   country: string;
//   universityName: string;
//   location: string;
//   programName: string;
//   majors: string;
//   programLevel: string;
//   duration: string;
//   intake: string;
//   languageRequirement: {
//     ielts: string;
//     toefl: string;
//   };
//   programMode: string;
//   scholarship: string;
//   applicationFee: string;
//   tuitionFee: string;
//   totalCreditHours?: number;
//   source: string;
// }

// // Transform mockCourse to Course type
// const transformCourse = (course: mockCourse): Course => {
//   // Calculate total fee
//   let totalFee: number;
//   if (course.programLevel === 'Undergraduate Program') {
//     // For undergraduate, multiply yearly fee by duration (assuming 4 years)
//     const yearlyFee =
//       parseFloat(course.tuitionFee.replace(/[^0-9.]/g, '')) || 0;
//     totalFee = yearlyFee * 4; // Assuming 4 years for undergraduate
//   } else {
//     // For postgraduate/PhD, multiply per credit hour by total credit hours
//     const creditFeeMatch = course.tuitionFee.match(/USD (\d+,\d+)/);
//     const creditFee = creditFeeMatch
//       ? parseFloat(creditFeeMatch[1].replace(',', ''))
//       : 0;
//     totalFee = creditFee * (course.totalCreditHours || 30); // Default to 30 if not specified
//   }

//   return {
//     id: course.id,
//     name: course.programName,
//     university: {
//       id: course.universityName.toLowerCase().replace(/\s+/g, '-'),
//       name: course.universityName,
//       logo: `/${course.universityName
//         .toLowerCase()
//         .replace(/\s+/g, '-')}-logo.png`, // Placeholder logo
//       country: course.country,
//     },
//     fee: totalFee,
//     duration: course.duration,
//     level: course.programLevel
//       .replace(' Program', '')
//       .replace('Doctoral', 'PhD') as 'Undergraduate' | 'Postgraduate' | 'PhD',
//     field: course.majors,
//     intakes: course.intake.split(', '),
//     languageRequirements: [
//       `IELTS: ${course.languageRequirement.ielts}`,
//       `TOEFL: ${course.languageRequirement.toefl}`,
//     ],
//     programModes: course.programMode.split(' and '),
//     applicationFee: course.applicationFee,
//     totalSubjects: course.totalCreditHours,
//     scholarshipNote: course.scholarship,
//   };
// };

// // Course data
// const mockCourses: mockCourse[] = [
//   {
//     id: '1',
//     country: 'USA',
//     universityName: 'Adelphi University',
//     location: 'Garden City, New York, USA',
//     programName: 'Bachelor of Science in Nursing',
//     majors: 'Nursing',
//     programLevel: 'Undergraduate Program',
//     duration: '4 years full-time',
//     intake: 'Fall, Spring',
//     languageRequirement: { ielts: '6.5', toefl: '80+' },
//     programMode: 'On-campus',
//     scholarship: 'Available (merit-based)',
//     applicationFee: 'USD 50',
//     tuitionFee: 'Approximately USD 43,040 per year',
//     source: 'Undergraduate Tuition and Fees – Adelphi University',
//   },
//   {
//     id: '2',
//     country: 'USA',
//     universityName: 'Adelphi University',
//     location: 'Garden City, New York, USA',
//     programName: 'Bachelor of Business Administration in Accounting',
//     majors: 'Accounting',
//     programLevel: 'Undergraduate Program',
//     duration: '4 years full-time',
//     intake: 'Fall, Spring',
//     languageRequirement: { ielts: '6.5', toefl: '80+' },
//     programMode: 'On-campus',
//     scholarship: 'Available (merit-based)',
//     applicationFee: 'USD 50',
//     tuitionFee: 'Approximately USD 43,040 per year',
//     source: 'Undergraduate Tuition and Fees – Adelphi University',
//   },
//   {
//     id: '3',
//     country: 'USA',
//     universityName: 'Adelphi University',
//     location: 'Garden City, New York, USA',
//     programName: 'Bachelor of Science in Computer Science',
//     majors: 'Computer Science',
//     programLevel: 'Undergraduate Program',
//     duration: '4 years full-time',
//     intake: 'Fall, Spring',
//     languageRequirement: { ielts: '6.5', toefl: '80+' },
//     programMode: 'On-campus',
//     scholarship: 'Available (merit-based)',
//     applicationFee: 'USD 50',
//     tuitionFee: 'Approximately USD 43,040 per year',
//     source: 'Undergraduate Tuition and Fees – Adelphi University',
//   },
//   {
//     id: '4',
//     country: 'USA',
//     universityName: 'Adelphi University',
//     location: 'Garden City, New York, USA',
//     programName: 'Bachelor of Arts in Psychology',
//     majors: 'Psychology',
//     programLevel: 'Undergraduate Program',
//     duration: '4 years full-time',
//     intake: 'Fall, Spring',
//     languageRequirement: { ielts: '6.5', toefl: '80+' },
//     programMode: 'On-campus',
//     scholarship: 'Available (merit-based)',
//     applicationFee: 'USD 50',
//     tuitionFee: 'Approximately USD 43,040 per year',
//     source: 'Undergraduate Tuition and Fees – Adelphi University',
//   },
//   {
//     id: '5',
//     country: 'USA',
//     universityName: 'Adelphi University',
//     location: 'Garden City, New York, USA',
//     programName: 'Bachelor of Fine Arts in Studio Art',
//     majors: 'Studio Art',
//     programLevel: 'Undergraduate Program',
//     duration: '4 years full-time',
//     intake: 'Fall, Spring',
//     languageRequirement: { ielts: '6.5', toefl: '80+' },
//     programMode: 'On-campus',
//     scholarship: 'Available (merit-based)',
//     applicationFee: 'USD 50',
//     tuitionFee: 'Approximately USD 43,040 per year',
//     source: 'Undergraduate Tuition and Fees – Adelphi University',
//   },
//   {
//     id: '6',
//     country: 'USA',
//     universityName: 'Adelphi University',
//     location: 'Garden City, New York, USA',
//     programName: 'Master of Business Administration',
//     majors: 'Business Administration',
//     programLevel: 'Postgraduate Program',
//     duration: '1.5 to 2 years',
//     intake: 'Fall, Spring',
//     languageRequirement: { ielts: '6.5', toefl: '80+' },
//     programMode: 'On-campus',
//     scholarship: 'Available',
//     applicationFee: 'USD 60',
//     tuitionFee: 'USD 1,645 per credit hour',
//     totalCreditHours: 30,
//     source: 'Graduate Tuition and Fees – Adelphi University',
//   },
//   {
//     id: '7',
//     country: 'USA',
//     universityName: 'Adelphi University',
//     location: 'Garden City, New York, USA',
//     programName: 'Master of Science in Computer Science',
//     majors: 'Computer Science',
//     programLevel: 'Postgraduate Program',
//     duration: '2 years',
//     intake: 'Fall, Spring',
//     languageRequirement: { ielts: '6.5', toefl: '80+' },
//     programMode: 'On-campus and Online',
//     scholarship: 'Available',
//     applicationFee: 'USD 60',
//     tuitionFee: 'USD 1,645 (On-campus), USD 990 (Online) per credit hour',
//     totalCreditHours: 30,
//     source: 'Graduate Tuition and Fees – Adelphi University',
//   },
//   {
//     id: '8',
//     country: 'USA',
//     universityName: 'Adelphi University',
//     location: 'Garden City, New York, USA',
//     programName: 'Master of Public Health',
//     majors: 'Public Health',
//     programLevel: 'Postgraduate Program',
//     duration: '2 years',
//     intake: 'Fall',
//     languageRequirement: { ielts: '6.5', toefl: '80+' },
//     programMode: 'On-campus and Online',
//     scholarship: 'Available',
//     applicationFee: 'USD 60',
//     tuitionFee: 'USD 1,605 (On-campus), USD 940 (Online) per credit hour',
//     totalCreditHours: 42,
//     source: 'Graduate Tuition and Fees – Adelphi University',
//   },
//   {
//     id: '9',
//     country: 'USA',
//     universityName: 'Adelphi University',
//     location: 'Garden City, New York, USA',
//     programName:
//       'Master of Science in Nursing (Adult Gerontology Primary Care Nurse Practitioner)',
//     majors: 'Nursing',
//     programLevel: 'Postgraduate Program',
//     duration: '2 years',
//     intake: 'Fall',
//     languageRequirement: { ielts: '6.5', toefl: '80+' },
//     programMode: 'On-campus and Online',
//     scholarship: 'Available',
//     applicationFee: 'USD 60',
//     tuitionFee: 'USD 1,645 (On-campus), USD 940 (Online) per credit hour',
//     totalCreditHours: 45,
//     source: 'Graduate Tuition and Fees – Adelphi University',
//   },
//   {
//     id: '10',
//     country: 'USA',
//     universityName: 'Adelphi University',
//     location: 'Garden City, New York, USA',
//     programName: 'Doctor of Philosophy in Clinical Psychology',
//     majors: 'Clinical Psychology',
//     programLevel: 'Doctoral Program',
//     duration: '5 years',
//     intake: 'Fall',
//     languageRequirement: { ielts: '6.5', toefl: '80+' },
//     programMode: 'On-campus',
//     scholarship: 'Available',
//     applicationFee: 'USD 60',
//     tuitionFee: 'USD 1,645 per credit hour',
//     totalCreditHours: 90,
//     source: 'Graduate Tuition and Fees – Adelphi University',
//   },
//   {
//     id: '11',
//     country: 'USA',
//     universityName: 'Berkeley College',
//     location: 'New York, New York, USA',
//     programName: 'Bachelor of Business Administration in Accounting',
//     majors: 'Accounting',
//     programLevel: 'Undergraduate Program',
//     duration: '4 years full-time',
//     intake: 'Fall, Spring',
//     languageRequirement: { ielts: '6.0', toefl: '70+' },
//     programMode: 'On-campus and Online',
//     scholarship: 'Available (merit-based and need-based)',
//     applicationFee: 'USD 50',
//     tuitionFee: 'Approximately USD 24,000 per year',
//     source: 'Berkeley College Undergraduate Programs',
//   },
//   {
//     id: '12',
//     country: 'USA',
//     universityName: 'Berkeley College',
//     location: 'New York, New York, USA',
//     programName: 'Bachelor of Science in Information Technology',
//     majors: 'Information Technology',
//     programLevel: 'Undergraduate Program',
//     duration: '4 years full-time',
//     intake: 'Fall, Spring',
//     languageRequirement: { ielts: '6.0', toefl: '70+' },
//     programMode: 'On-campus and Online',
//     scholarship: 'Available',
//     applicationFee: 'USD 50',
//     tuitionFee: 'Approximately USD 24,000 per year',
//     source: 'Berkeley College Undergraduate Programs',
//   },
//   {
//     id: '13',
//     country: 'USA',
//     universityName: 'Berkeley College',
//     location: 'New York, New York, USA',
//     programName: 'Bachelor of Science in Fashion Marketing',
//     majors: 'Fashion Marketing',
//     programLevel: 'Undergraduate Program',
//     duration: '4 years full-time',
//     intake: 'Fall, Spring',
//     languageRequirement: { ielts: '6.0', toefl: '70+' },
//     programMode: 'On-campus',
//     scholarship: 'Available',
//     applicationFee: 'USD 50',
//     tuitionFee: 'Approximately USD 24,000 per year',
//     source: 'Berkeley College Undergraduate Programs',
//   },
//   {
//     id: '14',
//     country: 'USA',
//     universityName: 'Berkeley College',
//     location: 'New York, New York, USA',
//     programName: 'Master of Science in Accounting',
//     majors: 'Accounting',
//     programLevel: 'Postgraduate Program',
//     duration: '1.5 to 2 years',
//     intake: 'Fall, Spring',
//     languageRequirement: { ielts: '6.5', toefl: '79+' },
//     programMode: 'On-campus and Online',
//     scholarship: 'Available',
//     applicationFee: 'USD 50',
//     tuitionFee: 'Approximately USD 750 per credit hour',
//     totalCreditHours: 30,
//     source: 'Berkeley College Graduate Programs',
//   },
//   {
//     id: '15',
//     country: 'USA',
//     universityName: 'Berkeley College',
//     location: 'New York, New York, USA',
//     programName: 'Master of Science in Business Analytics',
//     majors: 'Business Analytics',
//     programLevel: 'Postgraduate Program',
//     duration: '1.5 to 2 years',
//     intake: 'Fall, Spring',
//     languageRequirement: { ielts: '6.5', toefl: '79+' },
//     programMode: 'On-campus and Online',
//     scholarship: 'Available',
//     applicationFee: 'USD 50',
//     tuitionFee: 'Approximately USD 750 per credit hour',
//     totalCreditHours: 30,
//     source: 'Berkeley College Graduate Programs',
//   },
// ];

// // Transform all mockCourses to Course type
// const courses: Course[] = mockCourses.map(transformCourse);

// // Extract unique filter options
// const countries = Array.from(
//   new Set(courses.map(course => course.university.country))
// );
// const fields = Array.from(new Set(courses.map(course => course.field)));
// const levels = ['Undergraduate', 'Postgraduate', 'PhD'];

// const FindCourses = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
//   const [selectedFields, setSelectedFields] = useState<string[]>([]);
//   const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
//   const [feeRange, setFeeRange] = useState([0, 500000]); // Adjusted max to accommodate higher fees
//   const [currentView, setCurrentView] = useState<'grid' | 'list'>('grid');
//   const [sortBy, setSortBy] = useState<'name' | 'fee-low' | 'fee-high'>('name');
//   const [currentPage, setCurrentPage] = useState(1);
//   const coursesPerPage = 6;

//   // Filter courses based on filters
//   const filteredCourses = courses.filter(course => {
//     // Search term filter
//     if (
//       searchTerm &&
//       !course.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       !course.university.name
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase()) &&
//       !course.field.toLowerCase().includes(searchTerm.toLowerCase())
//     ) {
//       return false;
//     }

//     // Country filter
//     if (
//       selectedCountries.length > 0 &&
//       !selectedCountries.includes(course.university.country)
//     ) {
//       return false;
//     }

//     // Field filter
//     if (selectedFields.length > 0 && !selectedFields.includes(course.field)) {
//       return false;
//     }

//     // Level filter
//     if (selectedLevels.length > 0 && !selectedLevels.includes(course.level)) {
//       return false;
//     }

//     // Fee range filter
//     if (course.fee < feeRange[0] || course.fee > feeRange[1]) {
//       return false;
//     }

//     return true;
//   });

//   // Sort courses
//   const sortedCourses = [...filteredCourses].sort((a, b) => {
//     switch (sortBy) {
//       case 'fee-low':
//         return a.fee - b.fee;
//       case 'fee-high':
//         return b.fee - a.fee;
//       default:
//         return a.name.localeCompare(b.name);
//     }
//   });

//   // Calculate pagination
//   const indexOfLastCourse = currentPage * coursesPerPage;
//   const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
//   const currentCourses = sortedCourses.slice(
//     indexOfFirstCourse,
//     indexOfLastCourse
//   );
//   const totalPages = Math.ceil(sortedCourses.length / coursesPerPage);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   const toggleCountry = (country: string) => {
//     setSelectedCountries(prev =>
//       prev.includes(country)
//         ? prev.filter(c => c !== country)
//         : [...prev, country]
//     );
//   };

//   const toggleField = (field: string) => {
//     setSelectedFields(prev =>
//       prev.includes(field) ? prev.filter(f => f !== field) : [...prev, field]
//     );
//   };

//   const toggleLevel = (level: string) => {
//     setSelectedLevels(prev =>
//       prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]
//     );
//   };

//   const clearFilters = () => {
//     setSearchTerm('');
//     setSelectedCountries([]);
//     setSelectedFields([]);
//     setSelectedLevels([]);
//     setFeeRange([0, 500000]);
//   };

//   return (
//     <>
//       <PageHeader
//         title="Course Directory"
//         subtitle="Discover thousands of courses from top universities worldwide"
//         background="gradient"
//         centerText
//       />

//       <PageContainer>
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Mobile filter sheet */}
//           <div className="lg:hidden">
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="outline" className="w-full">
//                   <Filter className="h-4 w-4 mr-2" />
//                   Filters (
//                   {selectedCountries.length +
//                     selectedFields.length +
//                     selectedLevels.length}
//                   )
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="left" className="w-[85%] sm:w-[385px]">
//                 <SheetHeader>
//                   <SheetTitle>Filter Courses</SheetTitle>
//                 </SheetHeader>
//                 <div className="py-4 space-y-6">
//                   <div className="space-y-4">
//                     <div className="font-medium">Study Level</div>
//                     {levels.map(level => (
//                       <div className="flex items-center space-x-2" key={level}>
//                         <Checkbox
//                           id={`level-mobile-${level}`}
//                           checked={selectedLevels.includes(level)}
//                           onCheckedChange={() => toggleLevel(level)}
//                         />
//                         <Label htmlFor={`level-mobile-${level}`}>{level}</Label>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="space-y-4">
//                     <div className="font-medium">Field of Study</div>
//                     {fields.map(field => (
//                       <div className="flex items-center space-x-2" key={field}>
//                         <Checkbox
//                           id={`field-mobile-${field}`}
//                           checked={selectedFields.includes(field)}
//                           onCheckedChange={() => toggleField(field)}
//                         />
//                         <Label htmlFor={`field-mobile-${field}`}>{field}</Label>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="space-y-4">
//                     <div className="font-medium">Country</div>
//                     {countries.map(country => (
//                       <div
//                         className="flex items-center space-x-2"
//                         key={country}
//                       >
//                         <Checkbox
//                           id={`country-mobile-${country}`}
//                           checked={selectedCountries.includes(country)}
//                           onCheckedChange={() => toggleCountry(country)}
//                         />
//                         <Label htmlFor={`country-mobile-${country}`}>
//                           {country}
//                         </Label>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="space-y-4">
//                     <div className="font-medium">Tuition Fee Range</div>
//                     <div className="px-2">
//                       <Slider
//                         value={feeRange}
//                         min={0}
//                         max={500000}
//                         step={1000}
//                         onValueChange={setFeeRange}
//                       />
//                       <div className="flex justify-between mt-2 text-sm text-muted-foreground">
//                         <span>${feeRange[0].toLocaleString()}</span>
//                         <span>${feeRange[1].toLocaleString()}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <Button
//                     variant="outline"
//                     className="w-full mt-6"
//                     onClick={clearFilters}
//                   >
//                     Clear All Filters
//                   </Button>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>

//           {/* Desktop sidebar filters */}
//           <div className="hidden lg:block w-64 flex-shrink-0 border-r">
//             <div className="pr-6 space-y-6">
//               <Button
//                 variant="outline"
//                 className="w-full"
//                 onClick={clearFilters}
//               >
//                 Clear All Filters
//               </Button>

//               <div className="space-y-4">
//                 <div className="font-medium">Study Level</div>
//                 {levels.map(level => (
//                   <div className="flex items-center space-x-2" key={level}>
//                     <Checkbox
//                       id={`level-${level}`}
//                       checked={selectedLevels.includes(level)}
//                       onCheckedChange={() => toggleLevel(level)}
//                     />
//                     <Label htmlFor={`level-${level}`}>{level}</Label>
//                   </div>
//                 ))}
//               </div>

//               <div className="space-y-4">
//                 <div className="font-medium">Field of Study</div>
//                 {fields.map(field => (
//                   <div className="flex items-center space-x-2" key={field}>
//                     <Checkbox
//                       id={`field-${field}`}
//                       checked={selectedFields.includes(field)}
//                       onCheckedChange={() => toggleField(field)}
//                     />
//                     <Label htmlFor={`field-${field}`}>{field}</Label>
//                   </div>
//                 ))}
//               </div>

//               <div className="space-y-4">
//                 <div className="font-medium">Country</div>
//                 {countries.map(country => (
//                   <div className="flex items-center space-x-2" key={country}>
//                     <Checkbox
//                       id={`country-${country}`}
//                       checked={selectedCountries.includes(country)}
//                       onCheckedChange={() => toggleCountry(country)}
//                     />
//                     <Label htmlFor={`country-${country}`}>{country}</Label>
//                   </div>
//                 ))}
//               </div>

//               <div className="space-y-4">
//                 <div className="font-medium">Tuition Fee Range</div>
//                 <div className="px-2">
//                   <Slider
//                     value={feeRange}
//                     min={0}
//                     max={500000}
//                     step={1000}
//                     onValueChange={setFeeRange}
//                   />
//                   <div className="flex justify-between mt-2 text-sm text-muted-foreground">
//                     <span>${feeRange[0].toLocaleString()}</span>
//                     <span>${feeRange[1].toLocaleString()}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main content */}
//           <div className="flex-grow">
//             <div className="mb-6">
//               <div className="relative">
//                 <Input
//                   type="text"
//                   placeholder="Search courses, universities or fields..."
//                   value={searchTerm}
//                   onChange={e => setSearchTerm(e.target.value)}
//                   className="pr-10"
//                 />
//                 <BookOpen className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//               <div className="text-sm text-muted-foreground mb-4 sm:mb-0">
//                 Found {filteredCourses.length} courses
//               </div>
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <div className="flex items-center">
//                   <span className="text-sm text-muted-foreground mr-2">
//                     Sort by:
//                   </span>
//                   <select
//                     value={sortBy}
//                     onChange={e =>
//                       setSortBy(
//                         e.target.value as 'name' | 'fee-low' | 'fee-high'
//                       )
//                     }
//                     className="text-sm bg-background border rounded-md px-2 py-1"
//                   >
//                     <option value="name">Name</option>
//                     <option value="fee-low">Fee: Low to High</option>
//                     <option value="fee-high">Fee: High to Low</option>
//                   </select>
//                 </div>

//                 <Tabs
//                   value={currentView}
//                   onValueChange={v => setCurrentView(v as 'grid' | 'list')}
//                 >
//                   <TabsList className="h-8">
//                     <TabsTrigger value="grid" className="text-xs">
//                       Grid
//                     </TabsTrigger>
//                     <TabsTrigger value="list" className="text-xs">
//                       List
//                     </TabsTrigger>
//                   </TabsList>
//                 </Tabs>
//               </div>
//             </div>

//             {currentCourses.length > 0 ? (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className={`grid ${
//                   currentView === 'grid'
//                     ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'
//                     : 'grid-cols-1 gap-4'
//                 }`}
//               >
//                 {currentCourses.map((course, index) => (
//                   <CourseCard key={course.id} {...course} index={index} />
//                 ))}
//               </motion.div>
//             ) : (
//               <div className="text-center py-12">
//                 <BookOpen className="h-16 w-16 mx-auto text-muted-foreground/50" />
//                 <h3 className="text-lg font-medium mt-4">
//                   No courses match your filters
//                 </h3>
//                 <p className="text-muted-foreground mt-2">
//                   Try adjusting your search criteria or filters
//                 </p>
//                 <Button
//                   variant="outline"
//                   className="mt-4"
//                   onClick={clearFilters}
//                 >
//                   Clear all filters
//                 </Button>
//               </div>
//             )}

//             {totalPages > 1 && (
//               <Pagination className="mt-8">
//                 <PaginationContent>
//                   <PaginationItem>
//                     <PaginationPrevious
//                       onClick={() => paginate(Math.max(currentPage - 1, 1))}
//                       className={
//                         currentPage === 1
//                           ? 'pointer-events-none opacity-50'
//                           : ''
//                       }
//                     />
//                   </PaginationItem>

//                   {Array.from({ length: Math.min(totalPages, 5) }).map(
//                     (_, index) => {
//                       let pageNumber = index + 1;

//                       // Adjust page numbers for pagination with many pages
//                       if (totalPages > 5 && currentPage > 3) {
//                         if (index === 0) {
//                           pageNumber = 1;
//                         } else if (index === 1) {
//                           return (
//                             <PaginationItem key={index}>
//                               <span className="flex h-9 w-9 items-center justify-center">
//                                 ...
//                               </span>
//                             </PaginationItem>
//                           );
//                         } else {
//                           pageNumber = Math.min(
//                             currentPage + index - 2,
//                             totalPages
//                           );
//                         }
//                       }

//                       return (
//                         <PaginationItem key={index}>
//                           <PaginationLink
//                             onClick={() => paginate(pageNumber)}
//                             isActive={currentPage === pageNumber}
//                           >
//                             {pageNumber}
//                           </PaginationLink>
//                         </PaginationItem>
//                       );
//                     }
//                   )}

//                   <PaginationItem>
//                     <PaginationNext
//                       onClick={() =>
//                         paginate(Math.min(currentPage + 1, totalPages))
//                       }
//                       className={
//                         currentPage === totalPages
//                           ? 'pointer-events-none opacity-50'
//                           : ''
//                       }
//                     />
//                   </PaginationItem>
//                 </PaginationContent>
//               </Pagination>
//             )}
//           </div>
//         </div>
//       </PageContainer>
//     </>
//   );
// };

// export default FindCourses;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import PageHeader from '@/components/layout/PageHeader';
import PageContainer from '@/components/layout/PageContainer';
import ProgramCard, { Program } from '@/components/cards/CourseCard';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

// TypeScript interface for raw program data
interface mockProgram {
  id: string;
  country: string;
  universityName: string;
  location: string;
  programName: string;
  majors: string;
  programLevel: string;
  duration: string;
  intake: string;
  languageRequirement: {
    ielts: string;
    toefl: string;
  };
  programMode: string;
  scholarship: string;
  applicationFee: string;
  tuitionFee: string;
  totalCreditHours?: number;
  source: string;
}

// Transform mockProgram to Program type
const transformProgram = (program: mockProgram): Program => {
  // Calculate total fee
  let totalFee: number;
  if (program.programLevel === 'Undergraduate Program') {
    const yearlyFee =
      parseFloat(program.tuitionFee.replace(/[^0-9.]/g, '')) || 0;
    totalFee = yearlyFee * 4; // Assuming 4 years for undergraduate
  } else {
    const creditFeeMatch =
      program.tuitionFee.match(/USD (\d+,\d+)/) ||
      program.tuitionFee.match(/USD (\d+)/);
    const creditFee = creditFeeMatch
      ? parseFloat(creditFeeMatch[1].replace(',', ''))
      : 0;
    totalFee = creditFee * (program.totalCreditHours || 30); // Default to 30 credits
  }

  return {
    id: program.id,
    name: program.programName,
    universityName: program.universityName,
    location: program.location,
    level: program.programLevel
      .replace(' Program', '')
      .replace('Doctoral', 'PhD') as 'Undergraduate' | 'Postgraduate' | 'PhD',
    duration: program.duration,
    intakes: program.intake.split(', '),
    languageRequirements: [
      `IELTS: ${program.languageRequirement.ielts}`,
      `TOEFL: ${program.languageRequirement.toefl}`,
    ],
    programModes: program.programMode.split(' and '),
    scholarship: program.scholarship,
    applicationFee: program.applicationFee,
    tuitionFee: totalFee,
    country: program.country,
    majors: program.majors,
  };
};

// Program data
const mockPrograms: mockProgram[] = [
  {
    id: '1',
    country: 'USA',
    universityName: 'Adelphi University',
    location: 'Garden City, New York, USA',
    programName: 'Bachelor of Science in Nursing',
    majors: 'Nursing',
    programLevel: 'Undergraduate Program',
    duration: '4 years full-time',
    intake: 'Fall, Spring',
    languageRequirement: { ielts: '6.5', toefl: '80+' },
    programMode: 'On-campus',
    scholarship: 'Available (merit-based)',
    applicationFee: 'USD 50',
    tuitionFee: 'Approximately USD 43040 per year',
    source: 'Undergraduate Tuition and Fees – Adelphi University',
  },
  {
    id: '2',
    country: 'USA',
    universityName: 'Adelphi University',
    location: 'Garden City, New York, USA',
    programName: 'Bachelor of Business Administration in Accounting',
    majors: 'Accounting',
    programLevel: 'Undergraduate Program',
    duration: '4 years full-time',
    intake: 'Fall, Spring',
    languageRequirement: { ielts: '6.5', toefl: '80+' },
    programMode: 'On-campus',
    scholarship: 'Available (merit-based)',
    applicationFee: 'USD 50',
    tuitionFee: 'Approximately USD 43040 per year',
    source: 'Undergraduate Tuition and Fees – Adelphi University',
  },
  {
    id: '3',
    country: 'USA',
    universityName: 'Adelphi University',
    location: 'Garden City, New York, USA',
    programName: 'Bachelor of Science in Computer Science',
    majors: 'Computer Science',
    programLevel: 'Undergraduate Program',
    duration: '4 years full-time',
    intake: 'Fall, Spring',
    languageRequirement: { ielts: '6.5', toefl: '80+' },
    programMode: 'On-campus',
    scholarship: 'Available (merit-based)',
    applicationFee: 'USD 50',
    tuitionFee: 'Approximately USD 43040 per year',
    source: 'Undergraduate Tuition and Fees – Adelphi University',
  },
  {
    id: '4',
    country: 'USA',
    universityName: 'Adelphi University',
    location: 'Garden City, New York, USA',
    programName: 'Bachelor of Arts in Psychology',
    majors: 'Psychology',
    programLevel: 'Undergraduate Program',
    duration: '4 years full-time',
    intake: 'Fall, Spring',
    languageRequirement: { ielts: '6.5', toefl: '80+' },
    programMode: 'On-campus',
    scholarship: 'Available (merit-based)',
    applicationFee: 'USD 50',
    tuitionFee: 'Approximately USD 43040 per year',
    source: 'Undergraduate Tuition and Fees – Adelphi University',
  },
  {
    id: '5',
    country: 'USA',
    universityName: 'Adelphi University',
    location: 'Garden City, New York, USA',
    programName: 'Bachelor of Fine Arts in Studio Art',
    majors: 'Studio Art',
    programLevel: 'Undergraduate Program',
    duration: '4 years full-time',
    intake: 'Fall, Spring',
    languageRequirement: { ielts: '6.5', toefl: '80+' },
    programMode: 'On-campus',
    scholarship: 'Available (merit-based)',
    applicationFee: 'USD 50',
    tuitionFee: 'Approximately USD 43040 per year',
    source: 'Undergraduate Tuition and Fees – Adelphi University',
  },
  {
    id: '6',
    country: 'USA',
    universityName: 'Adelphi University',
    location: 'Garden City, New York, USA',
    programName: 'Master of Business Administration',
    majors: 'Business Administration',
    programLevel: 'Postgraduate Program',
    duration: '1.5 to 2 years',
    intake: 'Fall, Spring',
    languageRequirement: { ielts: '6.5', toefl: '80+' },
    programMode: 'On-campus',
    scholarship: 'Available',
    applicationFee: 'USD 60',
    tuitionFee: 'USD 1645 per credit hour',
    totalCreditHours: 30,
    source: 'Graduate Tuition and Fees – Adelphi University',
  },
  {
    id: '7',
    country: 'USA',
    universityName: 'Adelphi University',
    location: 'Garden City, New York, USA',
    programName: 'Master of Science in Computer Science',
    majors: 'Computer Science',
    programLevel: 'Postgraduate Program',
    duration: '2 years',
    intake: 'Fall, Spring',
    languageRequirement: { ielts: '6.5', toefl: '80+' },
    programMode: 'On-campus and Online',
    scholarship: 'Available',
    applicationFee: 'USD 60',
    tuitionFee: 'USD 1645 (On-campus), USD 990 (Online) per credit hour',
    totalCreditHours: 30,
    source: 'Graduate Tuition and Fees – Adelphi University',
  },
  {
    id: '8',
    country: 'USA',
    universityName: 'Adelphi University',
    location: 'Garden City, New York, USA',
    programName: 'Master of Public Health',
    majors: 'Public Health',
    programLevel: 'Postgraduate Program',
    duration: '2 years',
    intake: 'Fall',
    languageRequirement: { ielts: '6.5', toefl: '80+' },
    programMode: 'On-campus and Online',
    scholarship: 'Available',
    applicationFee: 'USD 60',
    tuitionFee: 'USD 1605 (On-campus), USD 940 (Online) per credit hour',
    totalCreditHours: 42,
    source: 'Graduate Tuition and Fees – Adelphi University',
  },
  {
    id: '9',
    country: 'USA',
    universityName: 'Adelphi University',
    location: 'Garden City, New York, USA',
    programName:
      'Master of Science in Nursing (Adult Gerontology Primary Care Nurse Practitioner)',
    majors: 'Nursing',
    programLevel: 'Postgraduate Program',
    duration: '2 years',
    intake: 'Fall',
    languageRequirement: { ielts: '6.5', toefl: '80+' },
    programMode: 'On-campus and Online',
    scholarship: 'Available',
    applicationFee: 'USD 60',
    tuitionFee: 'USD 1645 (On-campus), USD 940 (Online) per credit hour',
    totalCreditHours: 45,
    source: 'Graduate Tuition and Fees – Adelphi University',
  },
  {
    id: '10',
    country: 'USA',
    universityName: 'Adelphi University',
    location: 'Garden City, New York, USA',
    programName: 'Doctor of Philosophy in Clinical Psychology',
    majors: 'Clinical Psychology',
    programLevel: 'Doctoral Program',
    duration: '5 years',
    intake: 'Fall',
    languageRequirement: { ielts: '6.5', toefl: '80+' },
    programMode: 'On-campus',
    scholarship: 'Available',
    applicationFee: 'USD 60',
    tuitionFee: 'USD 1645 per credit hour',
    totalCreditHours: 90,
    source: 'Graduate Tuition and Fees – Adelphi University',
  },
  {
    id: '11',
    country: 'USA',
    universityName: 'Berkeley College',
    location: 'New York, New York, USA',
    programName: 'Bachelor of Business Administration in Accounting',
    majors: 'Accounting',
    programLevel: 'Undergraduate Program',
    duration: '4 years full-time',
    intake: 'Fall, Spring',
    languageRequirement: { ielts: '6.0', toefl: '70+' },
    programMode: 'On-campus and Online',
    scholarship: 'Available (merit-based and need-based)',
    applicationFee: 'USD 50',
    tuitionFee: 'Approximately USD 24000 per year',
    source: 'Berkeley College Undergraduate Programs',
  },
  {
    id: '12',
    country: 'USA',
    universityName: 'Berkeley College',
    location: 'New York, New York, USA',
    programName: 'Bachelor of Science in Information Technology',
    majors: 'Information Technology',
    programLevel: 'Undergraduate Program',
    duration: '4 years full-time',
    intake: 'Fall, Spring',
    languageRequirement: { ielts: '6.0', toefl: '70+' },
    programMode: 'On-campus and Online',
    scholarship: 'Available',
    applicationFee: 'USD 50',
    tuitionFee: 'Approximately USD 24000 per year',
    source: 'Berkeley College Undergraduate Programs',
  },
  {
    id: '13',
    country: 'USA',
    universityName: 'Berkeley College',
    location: 'New York, New York, USA',
    programName: 'Bachelor of Science in Fashion Marketing',
    majors: 'Fashion Marketing',
    programLevel: 'Undergraduate Program',
    duration: '4 years full-time',
    intake: 'Fall, Spring',
    languageRequirement: { ielts: '6.0', toefl: '70+' },
    programMode: 'On-campus',
    scholarship: 'Available',
    applicationFee: 'USD 50',
    tuitionFee: 'Approximately USD 24000 per year',
    source: 'Berkeley College Undergraduate Programs',
  },
  {
    id: '14',
    country: 'USA',
    universityName: 'Berkeley College',
    location: 'New York, New York, USA',
    programName: 'Master of Science in Accounting',
    majors: 'Accounting',
    programLevel: 'Postgraduate Program',
    duration: '1.5 to 2 years',
    intake: 'Fall, Spring',
    languageRequirement: { ielts: '6.5', toefl: '79+' },
    programMode: 'On-campus and Online',
    scholarship: 'Available',
    applicationFee: 'USD 50',
    tuitionFee: 'Approximately USD 750 per credit hour',
    totalCreditHours: 30,
    source: 'Berkeley College Graduate Programs',
  },
  {
    id: '15',
    country: 'USA',
    universityName: 'Berkeley College',
    location: 'New York, New York, USA',
    programName: 'Master of Science in Business Analytics',
    majors: 'Business Analytics',
    programLevel: 'Postgraduate Program',
    duration: '1.5 to 2 years',
    intake: 'Fall, Spring',
    languageRequirement: { ielts: '6.5', toefl: '79+' },
    programMode: 'On-campus and Online',
    scholarship: 'Available',
    applicationFee: 'USD 50',
    tuitionFee: 'Approximately USD 750 per credit hour',
    totalCreditHours: 30,
    source: 'Berkeley College Graduate Programs',
  },
];

// Transform all mockPrograms to Program type
const programs: Program[] = mockPrograms.map(transformProgram);

// Extract unique filter options
const countries = Array.from(new Set(programs.map(program => program.country)));
const fields = Array.from(new Set(programs.map(program => program.majors)));
const levels = ['Undergraduate', 'Postgraduate', 'PhD'];

const FindCourses = () => {
  // State for filter inputs (not applied until "Apply Filter" is clicked)
  const [tempSearchTerm, setTempSearchTerm] = useState('');
  const [tempSelectedCountries, setTempSelectedCountries] = useState<string[]>(
    []
  );
  const [tempSelectedFields, setTempSelectedFields] = useState<string[]>([]);
  const [tempSelectedLevels, setTempSelectedLevels] = useState<string[]>([]);
  const [tempFeeRange, setTempFeeRange] = useState([0, 500000]);

  // State for applied filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [feeRange, setFeeRange] = useState([0, 500000]);

  const [currentView, setCurrentView] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'fee-low' | 'fee-high'>('name');
  const [currentPage, setCurrentPage] = useState(1);
  const programsPerPage = 6;

  // Apply filters when button is clicked
  const applyFilters = () => {
    setSearchTerm(tempSearchTerm);
    setSelectedCountries(tempSelectedCountries);
    setSelectedFields(tempSelectedFields);
    setSelectedLevels(tempSelectedLevels);
    setFeeRange(tempFeeRange);
    setCurrentPage(1); // Reset to first page on filter apply
  };

  // Clear all temporary filters
  const clearFilters = () => {
    setTempSearchTerm('');
    setTempSelectedCountries([]);
    setTempSelectedFields([]);
    setTempSelectedLevels([]);
    setTempFeeRange([0, 500000]);
    setSearchTerm('');
    setSelectedCountries([]);
    setSelectedFields([]);
    setSelectedLevels([]);
    setFeeRange([0, 500000]);
    setCurrentPage(1);
  };

  // Filter programs based on applied filters
  const filteredPrograms = programs.filter(program => {
    if (
      searchTerm &&
      !program.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !program.universityName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !program.majors.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    if (
      selectedCountries.length > 0 &&
      !selectedCountries.includes(program.country)
    ) {
      return false;
    }

    if (selectedFields.length > 0 && !selectedFields.includes(program.majors)) {
      return false;
    }

    if (selectedLevels.length > 0 && !selectedLevels.includes(program.level)) {
      return false;
    }

    if (program.tuitionFee < feeRange[0] || program.tuitionFee > feeRange[1]) {
      return false;
    }

    return true;
  });

  // Sort programs
  const sortedPrograms = [...filteredPrograms].sort((a, b) => {
    switch (sortBy) {
      case 'fee-low':
        return a.tuitionFee - b.tuitionFee;
      case 'fee-high':
        return b.tuitionFee - a.tuitionFee;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  // Calculate pagination
  const indexOfLastProgram = currentPage * programsPerPage;
  const indexOfFirstProgram = indexOfLastProgram - programsPerPage;
  const currentPrograms = sortedPrograms.slice(
    indexOfFirstProgram,
    indexOfLastProgram
  );
  const totalPages = Math.ceil(sortedPrograms.length / programsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const toggleTempCountry = (country: string) => {
    setTempSelectedCountries(prev =>
      prev.includes(country)
        ? prev.filter(c => c !== country)
        : [...prev, country]
    );
  };

  const toggleTempField = (field: string) => {
    setTempSelectedFields(prev =>
      prev.includes(field) ? prev.filter(f => f !== field) : [...prev, field]
    );
  };

  const toggleTempLevel = (level: string) => {
    setTempSelectedLevels(prev =>
      prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]
    );
  };

  return (
    <>
      <section className="relative py-10  overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-indigo-900/85 to-blue-900/90"></div>
        </div>

        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
            className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.05, x: 0 }}
            transition={{ duration: 3, ease: 'easeOut' }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
          >
            <svg viewBox="0 0 1000 1000" className="w-full h-full">
              <defs>
                <pattern
                  id="grid"
                  width="50"
                  height="50"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 50 0 L 0 0 0 50"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                    opacity="0.1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 border border-white/20">
              🎓 Discover Your Future
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
          >
            Find Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Perfect Program
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed mb-8"
          >
            Explore a wide range of programs from top universities worldwide and
            find the perfect path to your academic success
          </motion.p>

          {/* Stats or features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/70">Programs Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-white/70">Partner Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/70">Countries</div>
            </div>
          </motion.div>
        </div>
      </section>
      <PageContainer>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Mobile filter sheet */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters (
                  {tempSelectedCountries.length +
                    tempSelectedFields.length +
                    tempSelectedLevels.length}
                  )
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[85%] sm:w-[400px] p-6">
                <SheetHeader>
                  <SheetTitle className="text-lg font-semibold text-gray-900">
                    Filter Programs
                  </SheetTitle>
                </SheetHeader>
                <div className="py-6 space-y-8">
                  <div className="space-y-4">
                    <div className="font-medium text-gray-700">Study Level</div>
                    {levels.map(level => (
                      <div className="flex items-center space-x-2" key={level}>
                        <Checkbox
                          id={`level-mobile-${level}`}
                          checked={tempSelectedLevels.includes(level)}
                          onCheckedChange={() => toggleTempLevel(level)}
                        />
                        <Label
                          htmlFor={`level-mobile-${level}`}
                          className="text-sm text-gray-600"
                        >
                          {level}
                        </Label>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="font-medium text-gray-700">
                      Field of Study
                    </div>
                    {fields.map(field => (
                      <div className="flex items-center space-x-2" key={field}>
                        <Checkbox
                          id={`field-mobile-${field}`}
                          checked={tempSelectedFields.includes(field)}
                          onCheckedChange={() => toggleTempField(field)}
                        />
                        <Label
                          htmlFor={`field-mobile-${field}`}
                          className="text-sm text-gray-600"
                        >
                          {field}
                        </Label>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="font-medium text-gray-700">Country</div>
                    {countries.map(country => (
                      <div
                        className="flex items-center space-x-2"
                        key={country}
                      >
                        <Checkbox
                          id={`country-mobile-${country}`}
                          checked={tempSelectedCountries.includes(country)}
                          onCheckedChange={() => toggleTempCountry(country)}
                        />
                        <Label
                          htmlFor={`country-mobile-${country}`}
                          className="text-sm text-gray-600"
                        >
                          {country}
                        </Label>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="font-medium text-gray-700">
                      Tuition Fee Range
                    </div>
                    <div className="px-2">
                      <Slider
                        value={tempFeeRange}
                        min={0}
                        max={500000}
                        step={1000}
                        onValueChange={setTempFeeRange}
                        className="w-full"
                      />
                      <div className="flex justify-between mt-3 text-sm text-gray-500">
                        <span>${tempFeeRange[0].toLocaleString()}</span>
                        <span>${tempFeeRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                      onClick={applyFilters}
                    >
                      Apply Filters
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                      onClick={clearFilters}
                    >
                      Clear Filters
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop sidebar filters */}
          <div className="hidden lg:block w-72 flex-shrink-0 border-r border-gray-200 pr-6">
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-gray-900">Filters</h3>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  onClick={clearFilters}
                >
                  Clear All
                </Button>
              </div>

              <div className="space-y-4">
                <div className="font-medium text-gray-700">Study Level</div>
                {levels.map(level => (
                  <div className="flex items-center space-x-2" key={level}>
                    <Checkbox
                      id={`level-${level}`}
                      checked={tempSelectedLevels.includes(level)}
                      onCheckedChange={() => toggleTempLevel(level)}
                    />
                    <Label
                      htmlFor={`level-${level}`}
                      className="text-sm text-gray-600"
                    >
                      {level}
                    </Label>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="font-medium text-gray-700">Field of Study</div>
                {fields.map(field => (
                  <div className="flex items-center space-x-2" key={field}>
                    <Checkbox
                      id={`field-${field}`}
                      checked={tempSelectedFields.includes(field)}
                      onCheckedChange={() => toggleTempField(field)}
                    />
                    <Label
                      htmlFor={`field-${field}`}
                      className="text-sm text-gray-600"
                    >
                      {field}
                    </Label>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="font-medium text-gray-700">Country</div>
                {countries.map(country => (
                  <div className="flex items-center space-x-2" key={country}>
                    <Checkbox
                      id={`country-${country}`}
                      checked={tempSelectedCountries.includes(country)}
                      onCheckedChange={() => toggleTempCountry(country)}
                    />
                    <Label
                      htmlFor={`country-${country}`}
                      className="text-sm text-gray-600"
                    >
                      {country}
                    </Label>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="font-medium text-gray-700">
                  Tuition Fee Range
                </div>
                <div className="px-2">
                  <Slider
                    value={tempFeeRange}
                    min={0}
                    max={500000}
                    step={1000}
                    onValueChange={setTempFeeRange}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-3 text-sm text-gray-500">
                    <span>${tempFeeRange[0].toLocaleString()}</span>
                    <span>${tempFeeRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <Button
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                onClick={applyFilters}
              >
                Apply Filters
              </Button>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-grow">
            <div className="mb-6">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search programs, universities, or fields..."
                  value={tempSearchTerm}
                  onChange={e => setTempSearchTerm(e.target.value)}
                  className="pr-10 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <BookOpen className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              {/* <div className="text-sm text-gray-500 mb-4 sm:mb-0">
                Found {filteredPrograms.length} programs
              </div> */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={e =>
                      setSortBy(
                        e.target.value as 'name' | 'fee-low' | 'fee-high'
                      )
                    }
                    className="text-sm bg-white border border-gray-300 rounded-md px-3 py-1.5 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="name">Name</option>
                    <option value="fee-low">Fee: Low to High</option>
                    <option value="fee-high">Fee: High to Low</option>
                  </select>
                </div>

                <Tabs
                  value={currentView}
                  onValueChange={v => setCurrentView(v as 'grid' | 'list')}
                >
                  <TabsList className="h-8 bg-gray-100">
                    <TabsTrigger value="grid" className="text-xs px-4">
                      Grid
                    </TabsTrigger>
                    <TabsTrigger value="list" className="text-xs px-4">
                      List
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            {currentPrograms.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`grid ${
                  currentView === 'grid'
                    ? 'grid-cols-1 md:grid-cols-2 gap-6'
                    : 'grid-cols-1 gap-4'
                }`}
              >
                {currentPrograms.map((program, index) => (
                  <ProgramCard
                    key={program.id}
                    program={program}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 mx-auto text-gray-300" />
                <h3 className="text-lg font-medium mt-4 text-gray-900">
                  No programs match your filters
                </h3>
                <p className="text-gray-500 mt-2">
                  Try adjusting your search criteria or filters
                </p>
                <Button
                  variant="outline"
                  className="mt-4 border-gray-300 text-gray-700 hover:bg-gray-50"
                  onClick={clearFilters}
                >
                  Clear all filters
                </Button>
              </div>
            )}

            {totalPages > 1 && (
              <Pagination className="mt-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => paginate(Math.max(currentPage - 1, 1))}
                      className={
                        currentPage === 1
                          ? 'pointer-events-none opacity-50'
                          : 'hover:bg-indigo-50'
                      }
                    />
                  </PaginationItem>

                  {Array.from({ length: Math.min(totalPages, 5) }).map(
                    (_, index) => {
                      let pageNumber = index + 1;

                      if (totalPages > 5 && currentPage > 3) {
                        if (index === 0) {
                          pageNumber = 1;
                        } else if (index === 1) {
                          return (
                            <PaginationItem key={index}>
                              <span className="flex h-9 w-9 items-center justify-center text-gray-500">
                                ...
                              </span>
                            </PaginationItem>
                          );
                        } else {
                          pageNumber = Math.min(
                            currentPage + index - 2,
                            totalPages
                          );
                        }
                      }

                      return (
                        <PaginationItem key={index}>
                          <PaginationLink
                            onClick={() => paginate(pageNumber)}
                            isActive={currentPage === pageNumber}
                            className={
                              currentPage === pageNumber
                                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                : 'hover:bg-indigo-50'
                            }
                          >
                            {pageNumber}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    }
                  )}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        paginate(Math.min(currentPage + 1, totalPages))
                      }
                      className={
                        currentPage === totalPages
                          ? 'pointer-events-none opacity-50'
                          : 'hover:bg-indigo-50'
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default FindCourses;

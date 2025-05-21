// import { useState } from "react";
// import { motion } from "framer-motion";
// import { BookOpen, Filter, SlidersHorizontal } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";
// import { Slider } from "@/components/ui/slider";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Input } from "@/components/ui/input";
// import PageHeader from "@/components/layout/PageHeader";
// import PageContainer from "@/components/layout/PageContainer";
// import CourseCard, { Course } from "@/components/cards/CourseCard";
// import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

// // Mock data for demo
// const mockCourses: Course[] = [
//   {
//     id: "1",
//     name: "Bachelor of Computer Science",
//     university: {
//       id: "101",
//       name: "MIT University",
//       logo: "https://via.placeholder.com/150",
//       country: "USA"
//     },
//     fee: 35000,
//     duration: "4 years",
//     level: "Undergraduate",
//     field: "Computer Science"
//   },
//   {
//     id: "2",
//     name: "Master of Business Administration",
//     university: {
//       id: "102",
//       name: "Harvard University",
//       logo: "https://via.placeholder.com/150",
//       country: "USA"
//     },
//     fee: 42000,
//     duration: "2 years",
//     level: "Postgraduate",
//     field: "Business"
//   },
//   {
//     id: "3",
//     name: "Bachelor of Engineering",
//     university: {
//       id: "103",
//       name: "Oxford University",
//       logo: "https://via.placeholder.com/150",
//       country: "UK"
//     },
//     fee: 32000,
//     duration: "3 years",
//     level: "Undergraduate",
//     field: "Engineering"
//   },
//   {
//     id: "4",
//     name: "Master of Data Science",
//     university: {
//       id: "104",
//       name: "University of Toronto",
//       logo: "https://via.placeholder.com/150",
//       country: "Canada"
//     },
//     fee: 29000,
//     duration: "1.5 years",
//     level: "Postgraduate",
//     field: "Computer Science"
//   },
//   {
//     id: "5",
//     name: "PhD in Economics",
//     university: {
//       id: "105",
//       name: "Stanford University",
//       logo: "https://via.placeholder.com/150",
//       country: "USA"
//     },
//     fee: 45000,
//     duration: "4 years",
//     level: "PhD",
//     field: "Business"
//   },
//   {
//     id: "6",
//     name: "Bachelor of Medicine",
//     university: {
//       id: "106",
//       name: "University of Melbourne",
//       logo: "https://via.placeholder.com/150",
//       country: "Australia"
//     },
//     fee: 38000,
//     duration: "5 years",
//     level: "Undergraduate",
//     field: "Medicine"
//   },
//   {
//     id: "7",
//     name: "Master of Arts in Digital Media",
//     university: {
//       id: "107",
//       name: "University of Berlin",
//       logo: "https://via.placeholder.com/150",
//       country: "Germany"
//     },
//     fee: 25000,
//     duration: "2 years",
//     level: "Postgraduate",
//     field: "Arts"
//   },
//   {
//     id: "8",
//     name: "Bachelor of Laws",
//     university: {
//       id: "108",
//       name: "University of Sydney",
//       logo: "https://via.placeholder.com/150",
//       country: "Australia"
//     },
//     fee: 32000,
//     duration: "4 years",
//     level: "Undergraduate",
//     field: "Law"
//   },
//   {
//     id: "9",
//     name: "PhD in Computer Science",
//     university: {
//       id: "109",
//       name: "ETH Zurich",
//       logo: "https://via.placeholder.com/150",
//       country: "Switzerland"
//     },
//     fee: 30000,
//     duration: "4 years",
//     level: "PhD",
//     field: "Computer Science"
//   },
//   {
//     id: "10",
//     name: "Master of Public Health",
//     university: {
//       id: "110",
//       name: "Johns Hopkins University",
//       logo: "https://via.placeholder.com/150",
//       country: "USA"
//     },
//     fee: 38000,
//     duration: "2 years",
//     level: "Postgraduate",
//     field: "Medicine"
//   },
//   {
//     id: "11",
//     name: "Bachelor of Architecture",
//     university: {
//       id: "111",
//       name: "University of Tokyo",
//       logo: "https://via.placeholder.com/150",
//       country: "Japan"
//     },
//     fee: 28000,
//     duration: "5 years",
//     level: "Undergraduate",
//     field: "Arts"
//   },
//   {
//     id: "12",
//     name: "Master of Finance",
//     university: {
//       id: "112",
//       name: "London School of Economics",
//       logo: "https://via.placeholder.com/150",
//       country: "UK"
//     },
//     fee: 35000,
//     duration: "1 year",
//     level: "Postgraduate",
//     field: "Business"
//   }
// ];

// const countries = Array.from(new Set(mockCourses.map(course => course.university.country)));
// const fields = Array.from(new Set(mockCourses.map(course => course.field)));
// const levels = ["Undergraduate", "Postgraduate", "PhD"];

// const Courses = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
//   const [selectedFields, setSelectedFields] = useState<string[]>([]);
//   const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
//   const [feeRange, setFeeRange] = useState([0, 50000]);
//   const [currentView, setCurrentView] = useState<"grid" | "list">("grid");
//   const [sortBy, setSortBy] = useState<"name" | "fee-low" | "fee-high">("name");
//   const [currentPage, setCurrentPage] = useState(1);
//   const coursesPerPage = 6;

//   // Filter courses based on filters
//   const filteredCourses = mockCourses.filter(course => {
//     // Search term filter
//     if (searchTerm && !course.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         !course.university.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         !course.field.toLowerCase().includes(searchTerm.toLowerCase())) {
//       return false;
//     }

//     // Country filter
//     if (selectedCountries.length > 0 && !selectedCountries.includes(course.university.country)) {
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
//       case "fee-low":
//         return a.fee - b.fee;
//       case "fee-high":
//         return b.fee - a.fee;
//       default:
//         return a.name.localeCompare(b.name);
//     }
//   });

//   // Calculate pagination
//   const indexOfLastCourse = currentPage * coursesPerPage;
//   const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
//   const currentCourses = sortedCourses.slice(indexOfFirstCourse, indexOfLastCourse);
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
//       prev.includes(field)
//         ? prev.filter(f => f !== field)
//         : [...prev, field]
//     );
//   };

//   const toggleLevel = (level: string) => {
//     setSelectedLevels(prev =>
//       prev.includes(level)
//         ? prev.filter(l => l !== level)
//         : [...prev, level]
//     );
//   };

//   const clearFilters = () => {
//     setSearchTerm("");
//     setSelectedCountries([]);
//     setSelectedFields([]);
//     setSelectedLevels([]);
//     setFeeRange([0, 50000]);
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
//                   Filters ({selectedCountries.length + selectedFields.length + selectedLevels.length})
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="left" className="w-[85%] sm:w-[385px]">
//                 <SheetHeader>
//                   <SheetTitle>Filter Courses</SheetTitle>
//                 </SheetHeader>
//                 <div className="py-4 space-y-6">
//                   {/* Mobile filter controls - same as desktop */}
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
//                       <div className="flex items-center space-x-2" key={country}>
//                         <Checkbox
//                           id={`country-mobile-${country}`}
//                           checked={selectedCountries.includes(country)}
//                           onCheckedChange={() => toggleCountry(country)}
//                         />
//                         <Label htmlFor={`country-mobile-${country}`}>{country}</Label>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="space-y-4">
//                     <div className="font-medium">Tuition Fee Range</div>
//                     <div className="px-2">
//                       <Slider
//                         value={feeRange}
//                         min={0}
//                         max={50000}
//                         step={1000}
//                         onValueChange={setFeeRange}
//                       />
//                       <div className="flex justify-between mt-2 text-sm text-muted-foreground">
//                         <span>${feeRange[0].toLocaleString()}</span>
//                         <span>${feeRange[1].toLocaleString()}+</span>
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
//                     max={50000}
//                     step={1000}
//                     onValueChange={setFeeRange}
//                   />
//                   <div className="flex justify-between mt-2 text-sm text-muted-foreground">
//                     <span>${feeRange[0].toLocaleString()}</span>
//                     <span>${feeRange[1].toLocaleString()}+</span>
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
//                   onChange={(e) => setSearchTerm(e.target.value)}
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
//                   <span className="text-sm text-muted-foreground mr-2">Sort by:</span>
//                   <select
//                     value={sortBy}
//                     onChange={(e) => setSortBy(e.target.value as any)}
//                     className="text-sm bg-background border rounded-md px-2 py-1"
//                   >
//                     <option value="name">Name</option>
//                     <option value="fee-low">Fee: Low to High</option>
//                     <option value="fee-high">Fee: High to Low</option>
//                   </select>
//                 </div>

//                 <Tabs value={currentView} onValueChange={(v) => setCurrentView(v as "grid" | "list")}>
//                   <TabsList className="h-8">
//                     <TabsTrigger value="grid" className="text-xs">Grid</TabsTrigger>
//                     <TabsTrigger value="list" className="text-xs">List</TabsTrigger>
//                   </TabsList>
//                 </Tabs>
//               </div>
//             </div>

//             {currentCourses.length > 0 ? (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className={`grid ${currentView === 'grid' ? 'grid-cols-1 md:grid-cols-2 gap-6' : 'grid-cols-1 gap-4'}`}
//               >
//                 {currentCourses.map((course, index) => (
//                   <CourseCard
//                     key={course.id}
//                     course={course}
//                     index={index}
//                   />
//                 ))}
//               </motion.div>
//             ) : (
//               <div className="text-center py-12">
//                 <BookOpen className="h-16 w-16 mx-auto text-muted-foreground/50" />
//                 <h3 className="text-lg font-medium mt-4">No courses match your filters</h3>
//                 <p className="text-muted-foreground mt-2">Try adjusting your search criteria or filters</p>
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
//                       className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
//                     />
//                   </PaginationItem>

//                   {Array.from({ length: Math.min(totalPages, 5) }).map((_, index) => {
//                     let pageNumber = index + 1;

//                     // Adjust page numbers for pagination with many pages
//                     if (totalPages > 5 && currentPage > 3) {
//                       if (index === 0) {
//                         pageNumber = 1;
//                       } else if (index === 1) {
//                         return (
//                           <PaginationItem key={index}>
//                             <span className="flex h-9 w-9 items-center justify-center">...</span>
//                           </PaginationItem>
//                         );
//                       } else {
//                         pageNumber = Math.min(currentPage + index - 2, totalPages);
//                       }
//                     }

//                     return (
//                       <PaginationItem key={index}>
//                         <PaginationLink
//                           onClick={() => paginate(pageNumber)}
//                           isActive={currentPage === pageNumber}
//                         >
//                           {pageNumber}
//                         </PaginationLink>
//                       </PaginationItem>
//                     );
//                   })}

//                   <PaginationItem>
//                     <PaginationNext
//                       onClick={() => paginate(Math.min(currentPage + 1, totalPages))}
//                       className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
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

// export default Courses;

import { useState } from 'react';

export default function Courses() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-blue-600 text-white py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <h1 className="text-3xl font-bold mb-6">Find Your Perfect Program</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search programs, universities, or courses..."
                  className="w-full pl-9 py-2 rounded-md bg-white text-slate-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="relative w-[180px]">
                <select
                  defaultValue="all"
                  className="w-full appearance-none bg-white text-slate-900 py-2 px-3 pr-8 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Levels</option>
                  <option value="bachelor">Bachelor's</option>
                  <option value="master">Master's</option>
                  <option value="phd">PhD</option>
                  <option value="diploma">Diploma</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                </div>
              </div>
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden w-full mb-4">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors"
            >
              <Filter className="h-4 w-4" />
              Filters
            </button>

            {/* Mobile Filters Sheet */}
            {mobileFiltersOpen && (
              <div
                className="fixed inset-0 z-50 bg-black bg-opacity-50"
                onClick={() => setMobileFiltersOpen(false)}
              >
                <div
                  className="fixed inset-y-0 left-0 w-[300px] sm:w-[400px] bg-white shadow-xl p-6 overflow-y-auto"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <button
                      onClick={() => setMobileFiltersOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <XIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="py-4">
                    <MobileFilters />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Filters */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-20">
              <div className="bg-white rounded-lg shadow-sm border p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Filters</h3>
                  <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                    Reset All
                  </button>
                </div>
                <DesktopFilters />
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-slate-500">
                Showing 1-10 of 256 results
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">Sort by:</span>
                <div className="relative w-[180px]">
                  <select
                    defaultValue="relevance"
                    className="w-full appearance-none bg-white text-slate-900 py-2 px-3 pr-8 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="newest">Newest</option>
                    <option value="tuition-low">Tuition: Low to High</option>
                    <option value="tuition-high">Tuition: High to Low</option>
                    <option value="duration-short">Duration: Shortest</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {Array.from({ length: 10 }).map((_, i) => (
                <CourseCard key={i} index={i} />
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <button
                  disabled
                  className="h-8 w-8 rounded-md border border-gray-300 flex items-center justify-center text-gray-400 cursor-not-allowed"
                >
                  <ChevronLeftIcon className="h-4 w-4" />
                  <span className="sr-only">Previous page</span>
                </button>
                <button className="h-8 w-8 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                  1
                </button>
                <button className="h-8 w-8 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                  2
                </button>
                <button className="h-8 w-8 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                  3
                </button>
                <span>...</span>
                <button className="h-8 w-8 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                  12
                </button>
                <button className="h-8 w-8 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                  <ChevronRightIcon className="h-4 w-4" />
                  <span className="sr-only">Next page</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopFilters() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-medium mb-3">Country</h4>
        <div className="space-y-2">
          {[
            'United States',
            'United Kingdom',
            'Canada',
            'Australia',
            'Germany',
          ].map(country => (
            <div key={country} className="flex items-center space-x-2">
              <div className="h-4 w-4 rounded border border-gray-300 flex items-center justify-center">
                <input
                  type="checkbox"
                  id={`country-${country}`}
                  className="opacity-0 absolute h-4 w-4 cursor-pointer"
                />
                <div className="hidden h-3 w-3 bg-blue-600 rounded-sm"></div>
              </div>
              <label
                htmlFor={`country-${country}`}
                className="text-sm font-medium leading-none cursor-pointer"
              >
                {country}
              </label>
            </div>
          ))}
        </div>
        <button className="text-blue-600 hover:text-blue-800 text-xs mt-1">
          Show more
        </button>
      </div>

      <div>
        <h4 className="font-medium mb-3">Program Level</h4>
        <div className="space-y-2">
          {["Bachelor's", "Master's", 'PhD', 'Diploma', 'Certificate'].map(
            level => (
              <div key={level} className="flex items-center space-x-2">
                <div className="h-4 w-4 rounded border border-gray-300 flex items-center justify-center">
                  <input
                    type="checkbox"
                    id={`level-${level}`}
                    className="opacity-0 absolute h-4 w-4 cursor-pointer"
                  />
                  <div className="hidden h-3 w-3 bg-blue-600 rounded-sm"></div>
                </div>
                <label
                  htmlFor={`level-${level}`}
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  {level}
                </label>
              </div>
            )
          )}
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-3">Field of Study</h4>
        <div className="space-y-2">
          {[
            'Business & Management',
            'Computer Science & IT',
            'Engineering',
            'Arts & Humanities',
            'Medicine & Health',
          ].map(field => (
            <div key={field} className="flex items-center space-x-2">
              <div className="h-4 w-4 rounded border border-gray-300 flex items-center justify-center">
                <input
                  type="checkbox"
                  id={`field-${field}`}
                  className="opacity-0 absolute h-4 w-4 cursor-pointer"
                />
                <div className="hidden h-3 w-3 bg-blue-600 rounded-sm"></div>
              </div>
              <label
                htmlFor={`field-${field}`}
                className="text-sm font-medium leading-none cursor-pointer"
              >
                {field}
              </label>
            </div>
          ))}
        </div>
        <button className="text-blue-600 hover:text-blue-800 text-xs mt-1">
          Show more
        </button>
      </div>

      <div>
        <h4 className="font-medium mb-3">Tuition Fee (Annual)</h4>
        <div className="space-y-6">
          <div className="relative w-full h-2 bg-gray-200 rounded-full">
            <div
              className="absolute h-2 bg-blue-600 rounded-full"
              style={{ width: '50%', left: '0%' }}
            ></div>
            <div
              className="absolute w-4 h-4 bg-white border-2 border-blue-600 rounded-full -mt-1 -ml-2"
              style={{ left: '0%' }}
            ></div>
            <div
              className="absolute w-4 h-4 bg-white border-2 border-blue-600 rounded-full -mt-1 -ml-2"
              style={{ left: '50%' }}
            ></div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">$0</span>
            <span className="text-sm">$100,000+</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-3">Duration</h4>
        <div className="space-y-2">
          {[
            'Less than 1 year',
            '1-2 years',
            '2-3 years',
            '3-4 years',
            '4+ years',
          ].map(duration => (
            <div key={duration} className="flex items-center space-x-2">
              <div className="h-4 w-4 rounded border border-gray-300 flex items-center justify-center">
                <input
                  type="checkbox"
                  id={`duration-${duration}`}
                  className="opacity-0 absolute h-4 w-4 cursor-pointer"
                />
                <div className="hidden h-3 w-3 bg-blue-600 rounded-sm"></div>
              </div>
              <label
                htmlFor={`duration-${duration}`}
                className="text-sm font-medium leading-none cursor-pointer"
              >
                {duration}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-3">Language</h4>
        <div className="space-y-2">
          {['English', 'French', 'German', 'Spanish', 'Chinese'].map(
            language => (
              <div key={language} className="flex items-center space-x-2">
                <div className="h-4 w-4 rounded border border-gray-300 flex items-center justify-center">
                  <input
                    type="checkbox"
                    id={`language-${language}`}
                    className="opacity-0 absolute h-4 w-4 cursor-pointer"
                  />
                  <div className="hidden h-3 w-3 bg-blue-600 rounded-sm"></div>
                </div>
                <label
                  htmlFor={`language-${language}`}
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  {language}
                </label>
              </div>
            )
          )}
        </div>
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
        Apply Filters
      </button>
    </div>
  );
}

function MobileFilters() {
  return <DesktopFilters />;
}

function CourseCard({ index }: { index: number }) {
  const universities = [
    'Harvard University',
    'University of Oxford',
    'Stanford University',
    'MIT',
    'University of Toronto',
    'University of Melbourne',
    'ETH Zurich',
    'University of British Columbia',
    'University of Sydney',
    'Technical University of Munich',
  ];

  const programs = [
    'Computer Science',
    'Business Administration',
    'Mechanical Engineering',
    'Data Science',
    'International Relations',
    'Medicine',
    'Architecture',
    'Psychology',
    'Environmental Science',
    'Artificial Intelligence',
  ];

  return (
    <div className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow bg-white rounded-lg">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 bg-slate-100">
          <img
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4GvhChtV8hXpJttH-OmZzBqD3wCU3bhC_tw&s`}
            alt={universities[index % universities.length]}
            className="h-48 md:h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 p-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="text-xl font-bold mb-1">
                {programs[index % programs.length]}
              </h3>
              <p className="text-blue-600 font-medium mb-2">
                {universities[index % universities.length]}
              </p>
              <div className="flex items-center text-sm text-slate-500 mb-4">
                <MapPinIcon className="h-4 w-4 mr-1" />
                <span>
                  {['USA', 'UK', 'Canada', 'Australia', 'Germany'][index % 5]}
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <div className="text-sm text-slate-500 mb-1">Annual Tuition</div>
              <div className="text-lg font-bold text-slate-900">
                ${(15000 + index * 2000).toLocaleString()}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Program Level</span>
              <span className="text-sm font-medium">
                {["Bachelor's", "Master's", 'PhD', 'Diploma'][index % 4]}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Duration</span>
              <span className="text-sm font-medium">
                {[1, 2, 3, 4][index % 4]} years
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Language</span>
              <span className="text-sm font-medium">English</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Intake</span>
              <span className="text-sm font-medium">
                {['Fall 2023', 'Spring 2024', 'Fall 2024'][index % 3]}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {['On-campus', 'Full-time', 'Scholarships available'].map(tag => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <a href={`/universities/${index + 1}`} className="inline-block">
              <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-1.5 px-3 rounded-md text-sm transition-colors">
                View University
              </button>
            </a>
            <a href={`/programs/${index + 1}`} className="inline-block">
              <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-1.5 px-3 rounded-md text-sm transition-colors">
                Program Details
              </button>
            </a>
            <a href={`/apply/${index + 1}`} className="inline-block">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 px-3 rounded-md text-sm transition-colors">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Icon components
function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function Filter(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

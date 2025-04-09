
import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import PageHeader from "@/components/layout/PageHeader";
import PageContainer from "@/components/layout/PageContainer";
import CourseCard, { Course } from "@/components/cards/CourseCard";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

// Mock data for demo
const mockCourses: Course[] = [
  {
    id: "1",
    name: "Bachelor of Computer Science",
    university: {
      id: "101",
      name: "MIT University",
      logo: "https://via.placeholder.com/150",
      country: "USA"
    },
    fee: 35000,
    duration: "4 years",
    level: "Undergraduate",
    field: "Computer Science"
  },
  {
    id: "2",
    name: "Master of Business Administration",
    university: {
      id: "102",
      name: "Harvard University",
      logo: "https://via.placeholder.com/150",
      country: "USA"
    },
    fee: 42000,
    duration: "2 years",
    level: "Postgraduate",
    field: "Business"
  },
  {
    id: "3",
    name: "Bachelor of Engineering",
    university: {
      id: "103",
      name: "Oxford University",
      logo: "https://via.placeholder.com/150",
      country: "UK"
    },
    fee: 32000,
    duration: "3 years",
    level: "Undergraduate",
    field: "Engineering"
  },
  {
    id: "4",
    name: "Master of Data Science",
    university: {
      id: "104",
      name: "University of Toronto",
      logo: "https://via.placeholder.com/150",
      country: "Canada"
    },
    fee: 29000,
    duration: "1.5 years",
    level: "Postgraduate",
    field: "Computer Science"
  },
  {
    id: "5",
    name: "PhD in Economics",
    university: {
      id: "105",
      name: "Stanford University",
      logo: "https://via.placeholder.com/150",
      country: "USA"
    },
    fee: 45000,
    duration: "4 years",
    level: "PhD",
    field: "Business"
  },
  {
    id: "6",
    name: "Bachelor of Medicine",
    university: {
      id: "106",
      name: "University of Melbourne",
      logo: "https://via.placeholder.com/150",
      country: "Australia"
    },
    fee: 38000,
    duration: "5 years",
    level: "Undergraduate",
    field: "Medicine"
  },
  {
    id: "7",
    name: "Master of Arts in Digital Media",
    university: {
      id: "107",
      name: "University of Berlin",
      logo: "https://via.placeholder.com/150",
      country: "Germany"
    },
    fee: 25000,
    duration: "2 years",
    level: "Postgraduate",
    field: "Arts"
  },
  {
    id: "8",
    name: "Bachelor of Laws",
    university: {
      id: "108",
      name: "University of Sydney",
      logo: "https://via.placeholder.com/150",
      country: "Australia"
    },
    fee: 32000,
    duration: "4 years",
    level: "Undergraduate",
    field: "Law"
  },
  {
    id: "9",
    name: "PhD in Computer Science",
    university: {
      id: "109",
      name: "ETH Zurich",
      logo: "https://via.placeholder.com/150",
      country: "Switzerland"
    },
    fee: 30000,
    duration: "4 years",
    level: "PhD",
    field: "Computer Science"
  },
  {
    id: "10",
    name: "Master of Public Health",
    university: {
      id: "110",
      name: "Johns Hopkins University",
      logo: "https://via.placeholder.com/150",
      country: "USA"
    },
    fee: 38000,
    duration: "2 years",
    level: "Postgraduate",
    field: "Medicine"
  },
  {
    id: "11",
    name: "Bachelor of Architecture",
    university: {
      id: "111",
      name: "University of Tokyo",
      logo: "https://via.placeholder.com/150",
      country: "Japan"
    },
    fee: 28000,
    duration: "5 years",
    level: "Undergraduate",
    field: "Arts"
  },
  {
    id: "12",
    name: "Master of Finance",
    university: {
      id: "112",
      name: "London School of Economics",
      logo: "https://via.placeholder.com/150",
      country: "UK"
    },
    fee: 35000,
    duration: "1 year",
    level: "Postgraduate",
    field: "Business"
  }
];

const countries = Array.from(new Set(mockCourses.map(course => course.university.country)));
const fields = Array.from(new Set(mockCourses.map(course => course.field)));
const levels = ["Undergraduate", "Postgraduate", "PhD"];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [feeRange, setFeeRange] = useState([0, 50000]);
  const [currentView, setCurrentView] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"name" | "fee-low" | "fee-high">("name");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;
  
  // Filter courses based on filters
  const filteredCourses = mockCourses.filter(course => {
    // Search term filter
    if (searchTerm && !course.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !course.university.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !course.field.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Country filter
    if (selectedCountries.length > 0 && !selectedCountries.includes(course.university.country)) {
      return false;
    }
    
    // Field filter
    if (selectedFields.length > 0 && !selectedFields.includes(course.field)) {
      return false;
    }
    
    // Level filter
    if (selectedLevels.length > 0 && !selectedLevels.includes(course.level)) {
      return false;
    }
    
    // Fee range filter
    if (course.fee < feeRange[0] || course.fee > feeRange[1]) {
      return false;
    }
    
    return true;
  });
  
  // Sort courses
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "fee-low":
        return a.fee - b.fee;
      case "fee-high":
        return b.fee - a.fee;
      default:
        return a.name.localeCompare(b.name);
    }
  });
  
  // Calculate pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = sortedCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(sortedCourses.length / coursesPerPage);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  const toggleCountry = (country: string) => {
    setSelectedCountries(prev =>
      prev.includes(country)
        ? prev.filter(c => c !== country)
        : [...prev, country]
    );
  };
  
  const toggleField = (field: string) => {
    setSelectedFields(prev =>
      prev.includes(field)
        ? prev.filter(f => f !== field)
        : [...prev, field]
    );
  };
  
  const toggleLevel = (level: string) => {
    setSelectedLevels(prev =>
      prev.includes(level)
        ? prev.filter(l => l !== level)
        : [...prev, level]
    );
  };
  
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCountries([]);
    setSelectedFields([]);
    setSelectedLevels([]);
    setFeeRange([0, 50000]);
  };
  
  return (
    <>
      <PageHeader 
        title="Course Directory"
        subtitle="Discover thousands of courses from top universities worldwide"
        background="gradient"
        centerText
      />
      
      <PageContainer>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Mobile filter sheet */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters ({selectedCountries.length + selectedFields.length + selectedLevels.length})
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[85%] sm:w-[385px]">
                <SheetHeader>
                  <SheetTitle>Filter Courses</SheetTitle>
                </SheetHeader>
                <div className="py-4 space-y-6">
                  {/* Mobile filter controls - same as desktop */}
                  <div className="space-y-4">
                    <div className="font-medium">Study Level</div>
                    {levels.map(level => (
                      <div className="flex items-center space-x-2" key={level}>
                        <Checkbox 
                          id={`level-mobile-${level}`}
                          checked={selectedLevels.includes(level)}
                          onCheckedChange={() => toggleLevel(level)}
                        />
                        <Label htmlFor={`level-mobile-${level}`}>{level}</Label>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="font-medium">Field of Study</div>
                    {fields.map(field => (
                      <div className="flex items-center space-x-2" key={field}>
                        <Checkbox 
                          id={`field-mobile-${field}`}
                          checked={selectedFields.includes(field)}
                          onCheckedChange={() => toggleField(field)}
                        />
                        <Label htmlFor={`field-mobile-${field}`}>{field}</Label>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="font-medium">Country</div>
                    {countries.map(country => (
                      <div className="flex items-center space-x-2" key={country}>
                        <Checkbox 
                          id={`country-mobile-${country}`}
                          checked={selectedCountries.includes(country)}
                          onCheckedChange={() => toggleCountry(country)}
                        />
                        <Label htmlFor={`country-mobile-${country}`}>{country}</Label>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="font-medium">Tuition Fee Range</div>
                    <div className="px-2">
                      <Slider 
                        value={feeRange}
                        min={0}
                        max={50000}
                        step={1000}
                        onValueChange={setFeeRange}
                      />
                      <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                        <span>${feeRange[0].toLocaleString()}</span>
                        <span>${feeRange[1].toLocaleString()}+</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-6"
                    onClick={clearFilters}
                  >
                    Clear All Filters
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          {/* Desktop sidebar filters */}
          <div className="hidden lg:block w-64 flex-shrink-0 border-r">
            <div className="pr-6 space-y-6">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={clearFilters}
              >
                Clear All Filters
              </Button>
              
              <div className="space-y-4">
                <div className="font-medium">Study Level</div>
                {levels.map(level => (
                  <div className="flex items-center space-x-2" key={level}>
                    <Checkbox 
                      id={`level-${level}`}
                      checked={selectedLevels.includes(level)}
                      onCheckedChange={() => toggleLevel(level)}
                    />
                    <Label htmlFor={`level-${level}`}>{level}</Label>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <div className="font-medium">Field of Study</div>
                {fields.map(field => (
                  <div className="flex items-center space-x-2" key={field}>
                    <Checkbox 
                      id={`field-${field}`}
                      checked={selectedFields.includes(field)}
                      onCheckedChange={() => toggleField(field)}
                    />
                    <Label htmlFor={`field-${field}`}>{field}</Label>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <div className="font-medium">Country</div>
                {countries.map(country => (
                  <div className="flex items-center space-x-2" key={country}>
                    <Checkbox 
                      id={`country-${country}`}
                      checked={selectedCountries.includes(country)}
                      onCheckedChange={() => toggleCountry(country)}
                    />
                    <Label htmlFor={`country-${country}`}>{country}</Label>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <div className="font-medium">Tuition Fee Range</div>
                <div className="px-2">
                  <Slider 
                    value={feeRange}
                    min={0}
                    max={50000}
                    step={1000}
                    onValueChange={setFeeRange}
                  />
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>${feeRange[0].toLocaleString()}</span>
                    <span>${feeRange[1].toLocaleString()}+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-grow">
            <div className="mb-6">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search courses, universities or fields..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
                <BookOpen className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div className="text-sm text-muted-foreground mb-4 sm:mb-0">
                Found {filteredCourses.length} courses
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center">
                  <span className="text-sm text-muted-foreground mr-2">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="text-sm bg-background border rounded-md px-2 py-1"
                  >
                    <option value="name">Name</option>
                    <option value="fee-low">Fee: Low to High</option>
                    <option value="fee-high">Fee: High to Low</option>
                  </select>
                </div>
                
                <Tabs value={currentView} onValueChange={(v) => setCurrentView(v as "grid" | "list")}>
                  <TabsList className="h-8">
                    <TabsTrigger value="grid" className="text-xs">Grid</TabsTrigger>
                    <TabsTrigger value="list" className="text-xs">List</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
            
            {currentCourses.length > 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`grid ${currentView === 'grid' ? 'grid-cols-1 md:grid-cols-2 gap-6' : 'grid-cols-1 gap-4'}`}
              >
                {currentCourses.map((course, index) => (
                  <CourseCard 
                    key={course.id} 
                    course={course} 
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 mx-auto text-muted-foreground/50" />
                <h3 className="text-lg font-medium mt-4">No courses match your filters</h3>
                <p className="text-muted-foreground mt-2">Try adjusting your search criteria or filters</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
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
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: Math.min(totalPages, 5) }).map((_, index) => {
                    let pageNumber = index + 1;
                    
                    // Adjust page numbers for pagination with many pages
                    if (totalPages > 5 && currentPage > 3) {
                      if (index === 0) {
                        pageNumber = 1;
                      } else if (index === 1) {
                        return (
                          <PaginationItem key={index}>
                            <span className="flex h-9 w-9 items-center justify-center">...</span>
                          </PaginationItem>
                        );
                      } else {
                        pageNumber = Math.min(currentPage + index - 2, totalPages);
                      }
                    }
                    
                    return (
                      <PaginationItem key={index}>
                        <PaginationLink
                          onClick={() => paginate(pageNumber)}
                          isActive={currentPage === pageNumber}
                        >
                          {pageNumber}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => paginate(Math.min(currentPage + 1, totalPages))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
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

export default Courses;

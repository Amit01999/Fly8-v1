
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Trophy, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select } from "@/components/ui/select";
import PageHeader from "@/components/layout/PageHeader";
import PageContainer from "@/components/layout/PageContainer";
import UniversityCard, { University } from "@/components/cards/UniversityCard";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

// Mock data for demo
const mockUniversities: University[] = [
  {
    id: "1",
    name: "Harvard University",
    logo: "https://via.placeholder.com/150",
    country: "USA",
    rank: 1,
    feeRange: { min: 45000, max: 60000 },
    isFeatured: true
  },
  {
    id: "2",
    name: "Massachusetts Institute of Technology (MIT)",
    logo: "https://via.placeholder.com/150",
    country: "USA",
    rank: 2,
    feeRange: { min: 47000, max: 62000 },
    isFeatured: false
  },
  {
    id: "3",
    name: "Stanford University",
    logo: "https://via.placeholder.com/150",
    country: "USA",
    rank: 3,
    feeRange: { min: 48000, max: 63000 },
    isFeatured: true
  },
  {
    id: "4",
    name: "University of Oxford",
    logo: "https://via.placeholder.com/150",
    country: "UK",
    rank: 4,
    feeRange: { min: 35000, max: 50000 },
    isFeatured: true
  },
  {
    id: "5",
    name: "University of Cambridge",
    logo: "https://via.placeholder.com/150",
    country: "UK",
    rank: 5,
    feeRange: { min: 34000, max: 48000 },
    isFeatured: false
  },
  {
    id: "6",
    name: "California Institute of Technology (Caltech)",
    logo: "https://via.placeholder.com/150",
    country: "USA",
    rank: 6,
    feeRange: { min: 49000, max: 64000 },
    isFeatured: false
  },
  {
    id: "7",
    name: "Imperial College London",
    logo: "https://via.placeholder.com/150",
    country: "UK",
    rank: 7,
    feeRange: { min: 33000, max: 45000 },
    isFeatured: false
  },
  {
    id: "8",
    name: "ETH Zurich - Swiss Federal Institute of Technology",
    logo: "https://via.placeholder.com/150",
    country: "Switzerland",
    rank: 8,
    feeRange: { min: 30000, max: 40000 },
    isFeatured: false
  },
  {
    id: "9",
    name: "University of Chicago",
    logo: "https://via.placeholder.com/150",
    country: "USA",
    rank: 9,
    feeRange: { min: 45000, max: 59000 },
    isFeatured: true
  },
  {
    id: "10",
    name: "University of Toronto",
    logo: "https://via.placeholder.com/150",
    country: "Canada",
    rank: 10,
    feeRange: { min: 38000, max: 52000 },
    isFeatured: false
  },
  {
    id: "11",
    name: "National University of Singapore (NUS)",
    logo: "https://via.placeholder.com/150",
    country: "Singapore",
    rank: 11,
    feeRange: { min: 29000, max: 40000 },
    isFeatured: false
  },
  {
    id: "12",
    name: "University of Melbourne",
    logo: "https://via.placeholder.com/150",
    country: "Australia",
    rank: 12,
    feeRange: { min: 32000, max: 46000 },
    isFeatured: true
  },
  {
    id: "13",
    name: "University of California, Berkeley (UCB)",
    logo: "https://via.placeholder.com/150",
    country: "USA",
    rank: 13,
    feeRange: { min: 43000, max: 55000 },
    isFeatured: false
  },
  {
    id: "14",
    name: "University of Tokyo",
    logo: "https://via.placeholder.com/150",
    country: "Japan",
    rank: 14,
    feeRange: { min: 25000, max: 35000 },
    isFeatured: false
  },
  {
    id: "15",
    name: "Technical University of Munich",
    logo: "https://via.placeholder.com/150",
    country: "Germany",
    rank: 15,
    feeRange: { min: 0, max: 5000 },
    isFeatured: false
  }
];

const countries = Array.from(new Set(mockUniversities.map(uni => uni.country)));

const TopUniversities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [viewMode, setViewMode] = useState<"all" | "featured">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const universitiesPerPage = 6;
  
  // Filter universities based on filters
  const filteredUniversities = mockUniversities.filter(university => {
    // Search filter
    if (searchTerm && !university.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Country filter
    if (selectedCountry && university.country !== selectedCountry) {
      return false;
    }
    
    // Featured filter
    if (viewMode === "featured" && !university.isFeatured) {
      return false;
    }
    
    return true;
  });
  
  // Calculate pagination
  const indexOfLastUniversity = currentPage * universitiesPerPage;
  const indexOfFirstUniversity = indexOfLastUniversity - universitiesPerPage;
  const currentUniversities = filteredUniversities.slice(indexOfFirstUniversity, indexOfLastUniversity);
  const totalPages = Math.ceil(filteredUniversities.length / universitiesPerPage);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCountry("");
    setViewMode("all");
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already applied via state change, just prevent form submission
  };
  
  return (
    <>
      <PageHeader 
        title="Top Global Universities"
        subtitle="Explore world-class institutions ranked by academic excellence and research output"
        background="gradient"
        centerText
      />
      
      <PageContainer>
        <div className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <form onSubmit={handleSearch} className="lg:col-span-2">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search universities by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
              <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>
          </form>
          
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
            <div className="flex-grow">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">All Countries</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
            
            <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as "all" | "featured")} className="w-full sm:w-auto">
              <TabsList className="h-10 w-full sm:w-auto">
                <TabsTrigger value="all" className="flex-1 sm:flex-auto">All</TabsTrigger>
                <TabsTrigger value="featured" className="flex-1 sm:flex-auto">Featured</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <Button 
              variant="ghost" 
              size="icon"
              onClick={clearFilters}
              className="hidden sm:flex lg:hidden xl:flex"
            >
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {filteredUniversities.length} universities found
          </div>
          
          <Button 
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="sm:hidden lg:block xl:hidden"
          >
            <Filter className="h-4 w-4 mr-1" />
            <span>Clear filters</span>
          </Button>
        </div>
        
        {currentUniversities.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentUniversities.map((university, index) => (
              <UniversityCard 
                key={university.id} 
                university={university} 
                index={index} 
              />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <Trophy className="h-16 w-16 mx-auto text-muted-foreground/50" />
            <h3 className="text-lg font-medium mt-4">No universities match your filters</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your search or filters</p>
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
                    pageNumber = Math.min(currentPage - 1, totalPages - 3);
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
        
        <div className="mt-16 p-6 rounded-xl bg-primary/5 border border-primary/20">
          <h3 className="text-xl font-semibold mb-3">Partner with Fly8</h3>
          <p className="text-muted-foreground mb-4">
            Are you representing a university interested in recruiting international students? Join our partner network to showcase your institution to students worldwide.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Button>
              <MapPin className="h-4 w-4 mr-2" />
              Become a Partner
            </Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default TopUniversities;

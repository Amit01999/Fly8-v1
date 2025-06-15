import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import PageContainer from '@/components/layout/PageContainer';
import FilterBar, { FilterOptions } from '@/components/filters/FilterBar';
import CourseCard, { Course } from '@/components/cards/CourseCard';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

// Mock data for demo
const mockCountries = [
  'USA',
  'UK',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Singapore',
  'Japan',
];
const mockFields = [
  'Business',
  'Engineering',
  'Computer Science',
  'Medicine',
  'Arts',
  'Law',
  'Education',
  'Science',
];
const mockLevels = ['Undergraduate', 'Postgraduate', 'PhD'];

const mockCourses: Course[] = [
  {
    id: '1',
    name: 'Bachelor of Computer Science',
    university: {
      id: '101',
      name: 'MIT University',
      logo: 'https://via.placeholder.com/150',
      country: 'USA',
    },
    fee: 35000,
    duration: '4 years',
    level: 'Undergraduate',
    field: 'Computer Science',
  },
  {
    id: '2',
    name: 'Master of Business Administration',
    university: {
      id: '102',
      name: 'Harvard University',
      logo: 'https://via.placeholder.com/150',
      country: 'USA',
    },
    fee: 42000,
    duration: '2 years',
    level: 'Postgraduate',
    field: 'Business',
  },
  {
    id: '3',
    name: 'Bachelor of Engineering',
    university: {
      id: '103',
      name: 'Oxford University',
      logo: 'https://via.placeholder.com/150',
      country: 'UK',
    },
    fee: 32000,
    duration: '3 years',
    level: 'Undergraduate',
    field: 'Engineering',
  },
  {
    id: '4',
    name: 'Master of Data Science',
    university: {
      id: '104',
      name: 'University of Toronto',
      logo: 'https://via.placeholder.com/150',
      country: 'Canada',
    },
    fee: 29000,
    duration: '1.5 years',
    level: 'Postgraduate',
    field: 'Computer Science',
  },
  {
    id: '5',
    name: 'PhD in Economics',
    university: {
      id: '105',
      name: 'Stanford University',
      logo: 'https://via.placeholder.com/150',
      country: 'USA',
    },
    fee: 45000,
    duration: '4 years',
    level: 'PhD',
    field: 'Business',
  },
  {
    id: '6',
    name: 'Bachelor of Medicine',
    university: {
      id: '106',
      name: 'University of Melbourne',
      logo: 'https://via.placeholder.com/150',
      country: 'Australia',
    },
    fee: 38000,
    duration: '5 years',
    level: 'Undergraduate',
    field: 'Medicine',
  },
  {
    id: '7',
    name: 'Master of Arts in Digital Media',
    university: {
      id: '107',
      name: 'University of Berlin',
      logo: 'https://via.placeholder.com/150',
      country: 'Germany',
    },
    fee: 25000,
    duration: '2 years',
    level: 'Postgraduate',
    field: 'Arts',
  },
  {
    id: '8',
    name: 'Bachelor of Laws',
    university: {
      id: '108',
      name: 'University of Sydney',
      logo: 'https://via.placeholder.com/150',
      country: 'Australia',
    },
    fee: 32000,
    duration: '4 years',
    level: 'Undergraduate',
    field: 'Law',
  },
];

const CourseFinder = () => {
  const [activeFilters, setActiveFilters] = useState<FilterOptions>({});
  const [currentView, setCurrentView] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  // Filter courses based on active filters
  const filteredCourses = mockCourses.filter(course => {
    if (activeFilters.search) {
      const searchTerm = activeFilters.search.toLowerCase();
      const matchesSearch =
        course.name.toLowerCase().includes(searchTerm) ||
        course.university.name.toLowerCase().includes(searchTerm) ||
        course.field.toLowerCase().includes(searchTerm);

      if (!matchesSearch) return false;
    }

    if (
      activeFilters.country &&
      course.university.country !== activeFilters.country
    ) {
      return false;
    }

    if (
      activeFilters.fieldOfStudy &&
      course.field !== activeFilters.fieldOfStudy
    ) {
      return false;
    }

    if (activeFilters.level && course.level !== activeFilters.level) {
      return false;
    }

    if (
      (activeFilters.feesMin !== undefined &&
        course.fee < activeFilters.feesMin) ||
      (activeFilters.feesMax !== undefined &&
        course.fee > activeFilters.feesMax)
    ) {
      return false;
    }

    return true;
  });

  // Calculate pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <PageHeader
        title="Find Your Perfect Course"
        subtitle="Search and filter through thousands of courses from top universities around the world."
        background="gradient"
        centerText
      />

      <PageContainer>
        <FilterBar
          onChange={setActiveFilters}
          countries={mockCountries}
          fields={mockFields}
          levels={mockLevels}
        />

        <div className="mb-6 flex items-center justify-between">
          <div>
            <span className="text-muted-foreground">
              {filteredCourses.length} courses found
            </span>
          </div>

          <div className="flex items-center">
            <span className="text-sm text-muted-foreground mr-2">View:</span>
            <Tabs
              value={currentView}
              onValueChange={v => setCurrentView(v as 'grid' | 'list')}
            >
              <TabsList className="h-8">
                <TabsTrigger value="grid" className="text-xs">
                  Grid
                </TabsTrigger>
                <TabsTrigger value="list" className="text-xs">
                  List
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {filteredCourses.length > 0 ? (
          <div
            className={`grid ${
              currentView === 'grid'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'grid-cols-1 gap-4'
            }`}
          >
            {currentCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">
              No courses match your filters
            </h3>
            <p className="text-muted-foreground mt-2">
              Try adjusting your search criteria
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setActiveFilters({})}
            >
              Clear all filters
            </Button>
          </div>
        )}

        {filteredCourses.length > 0 && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => paginate(Math.max(currentPage - 1, 1))}
                  className={
                    currentPage === 1 ? 'pointer-events-none opacity-50' : ''
                  }
                />
              </PaginationItem>

              {Array.from({ length: Math.min(totalPages, 5) }).map(
                (_, index) => {
                  let pageNumber = index + 1;

                  // Adjust page numbers for pagination with many pages
                  if (totalPages > 5 && currentPage > 3) {
                    if (index === 0) {
                      pageNumber = 1;
                    } else if (index === 1) {
                      pageNumber = Math.min(currentPage - 1, totalPages - 3);
                      return (
                        <PaginationItem key={index}>
                          <span className="flex h-9 w-9 items-center justify-center">
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
                      : ''
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </PageContainer>
    </>
  );
};

export default CourseFinder;

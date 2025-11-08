import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Filter } from 'lucide-react';
import { fetchAllPrograms } from '@/services/operations/programAPI';
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
import ProgramCard, { Program } from '@/components/cards/CourseCard';

// TypeScript interface for API program data
interface APIProgram {
  _id: string;
  country: string;
  universityName: string;
  location: string;
  programName: string;
  majors: string;
  programLevel: string;
  duration: string;
  intake: string;
  languageRequirement?: {
    ielts?: string;
    toefl?: string;
    pte?: string;
    duolingo?: string;
  };
  programMode?: string;
  scholarship?: string;
  applicationFee?: string;
  tuitionFee?: string;
  source?: string;
}

// Transform API program data to Program type
const transformAPIProgram = (program: APIProgram): Program => {
  // Calculate total fee from tuition fee string
  let totalFee: number = 0;
  if (program.tuitionFee) {
    // Extract numbers from tuition fee string
    const yearlyFeeMatch = program.tuitionFee.match(/(\d+,?\d*)/);
    if (yearlyFeeMatch) {
      const yearlyFee = parseFloat(yearlyFeeMatch[1].replace(',', '')) || 0;

      // If it's per year, multiply by typical duration
      if (program.programLevel === 'Undergraduate Program') {
        totalFee = yearlyFee * 4;
      } else if (
        program.programLevel === 'Graduate Program' ||
        program.programLevel === 'Postgraduate Program'
      ) {
        totalFee = yearlyFee * 2;
      } else if (program.programLevel === 'Doctoral Program') {
        totalFee = yearlyFee * 4;
      } else {
        totalFee = yearlyFee;
      }
    }
  }

  // Transform program level
  let level: 'Undergraduate' | 'Postgraduate' | 'PhD' = 'Undergraduate';
  if (program.programLevel.includes('Undergraduate')) {
    level = 'Undergraduate';
  } else if (
    program.programLevel.includes('Graduate') ||
    program.programLevel.includes('Postgraduate')
  ) {
    level = 'Postgraduate';
  } else if (
    program.programLevel.includes('Doctoral') ||
    program.programLevel.includes('PhD')
  ) {
    level = 'PhD';
  }

  // Transform language requirements
  const languageRequirements: string[] = [];
  if (program.languageRequirement) {
    if (program.languageRequirement.ielts) {
      languageRequirements.push(`IELTS: ${program.languageRequirement.ielts}`);
    }
    if (program.languageRequirement.toefl) {
      languageRequirements.push(`TOEFL: ${program.languageRequirement.toefl}`);
    }
    if (program.languageRequirement.pte) {
      languageRequirements.push(`PTE: ${program.languageRequirement.pte}`);
    }
    if (program.languageRequirement.duolingo) {
      languageRequirements.push(
        `Duolingo: ${program.languageRequirement.duolingo}`
      );
    }
  }

  // Transform intakes
  const intakes = program.intake ? program.intake.split(/,\s*/) : [];

  // Transform program modes
  const programModes = program.programMode
    ? program.programMode.split(/\s+and\s+/)
    : ['On-campus'];

  return {
    id: program._id,
    name: program.programName,
    universityName: program.universityName,
    location: program.location,
    level: level,
    duration: program.duration,
    intakes: intakes,
    languageRequirements:
      languageRequirements.length > 0
        ? languageRequirements
        : ['Contact university for requirements'],
    programModes: programModes,
    scholarship:
      program.scholarship || 'Contact university for scholarship information',
    applicationFee: program.applicationFee || 'Contact university',
    tuitionFee: totalFee,
    country: program.country,
    majors: program.majors,
  };
};

const FindCourses = () => {
  // State for programs from API
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [countries, setCountries] = useState<string[]>([]);
  const [fields, setFields] = useState<string[]>([]);
  const levels = ['Undergraduate', 'Postgraduate', 'PhD'];

  // Fetch programs from API on component mount
  useEffect(() => {
    const loadPrograms = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetchAllPrograms({ limit: 1000 }); // Fetch all programs

        if (response && response.success && response.data) {
          // Transform API programs to Program type
          const transformedPrograms = response.data.map(transformAPIProgram);
          setPrograms(transformedPrograms);

          // Extract unique countries and fields for filters
          const uniqueCountries = Array.from(
            new Set(transformedPrograms.map((p: Program) => p.country))
          ) as string[];
          const uniqueFields = Array.from(
            new Set(transformedPrograms.map((p: Program) => p.majors))
          ) as string[];

          setCountries(uniqueCountries);
          setFields(uniqueFields);
        } else {
          setError(response?.message || 'Failed to fetch programs');
        }
      } catch (err: any) {
        console.error('Error loading programs:', err);
        setError('Failed to load programs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadPrograms();
  }, []);

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
  const [programsPerPage, setProgramsPerPage] = useState(12);
  const [jumpToPage, setJumpToPage] = useState('');

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

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setJumpToPage('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemsPerPageChange = (value: string) => {
    setProgramsPerPage(Number(value));
    setCurrentPage(1);
  };

  const handleJumpToPage = () => {
    const page = Number(jumpToPage);
    if (page >= 1 && page <= totalPages) {
      paginate(page);
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 7;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

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
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
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
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-8 max-h-[calc(100vh-8rem)] overflow-y-auto pr-6 border-r border-gray-200 space-y-8 pb-8">
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

            {/* Results Summary Header */}
            <div className="mb-6 bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 rounded-xl p-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                {/* <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {sortedPrograms.length === programs.length
                      ? `All Programs (${sortedPrograms.length})`
                      : `Filtered Results (${sortedPrograms.length} of ${programs.length})`}
                  </h2>
                  {(searchTerm || selectedCountries.length > 0 || selectedFields.length > 0 || selectedLevels.length > 0) && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {searchTerm && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          Search: "{searchTerm}"
                          <button
                            onClick={() => {
                              setSearchTerm('');
                              setTempSearchTerm('');
                            }}
                            className="ml-1 hover:text-indigo-900"
                          >
                            ×
                          </button>
                        </span>
                      )}
                      {selectedCountries.map(country => (
                        <span key={country} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {country}
                          <button
                            onClick={() => {
                              setSelectedCountries(prev => prev.filter(c => c !== country));
                              setTempSelectedCountries(prev => prev.filter(c => c !== country));
                            }}
                            className="ml-1 hover:text-blue-900"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                      {selectedFields.map(field => (
                        <span key={field} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {field}
                          <button
                            onClick={() => {
                              setSelectedFields(prev => prev.filter(f => f !== field));
                              setTempSelectedFields(prev => prev.filter(f => f !== field));
                            }}
                            className="ml-1 hover:text-green-900"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                      {selectedLevels.map(level => (
                        <span key={level} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          {level}
                          <button
                            onClick={() => {
                              setSelectedLevels(prev => prev.filter(l => l !== level));
                              setTempSelectedLevels(prev => prev.filter(l => l !== level));
                            }}
                            className="ml-1 hover:text-purple-900"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div> */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-medium">
                    Page {currentPage} of {totalPages}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
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

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => (
                  <div
                    key={item}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm animate-pulse"
                  >
                    <div className="p-5 bg-gray-50 border-b border-gray-100">
                      <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-3/4" />
                      <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-1/2 mt-2" />
                    </div>
                    <div className="p-5 space-y-3">
                      <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
                      <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-5/6" />
                      <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-4/6" />
                      <div className="h-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded mt-4" />
                    </div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">{error}</h3>
                <p className="text-gray-500 mt-2">
                  Please try refreshing the page
                </p>
                <Button
                  variant="outline"
                  className="mt-4 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                  onClick={() => window.location.reload()}
                >
                  Refresh Page
                </Button>
              </div>
            ) : currentPrograms.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`grid ${
                  currentView === 'grid'
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
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

            {/* Professional Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 border-t border-gray-200 pt-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  {/* Results Summary and Items Per Page */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">
                        Showing {indexOfFirstProgram + 1}-
                        {Math.min(indexOfLastProgram, sortedPrograms.length)} of{' '}
                        {sortedPrograms.length} programs
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <label
                        htmlFor="items-per-page"
                        className="whitespace-nowrap"
                      >
                        Items per page:
                      </label>
                      <select
                        id="items-per-page"
                        value={programsPerPage}
                        onChange={e => handleItemsPerPageChange(e.target.value)}
                        className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                      >
                        <option value="6">6</option>
                        <option value="12">12</option>
                        <option value="24">24</option>
                        <option value="48">48</option>
                        <option value="100">100</option>
                      </select>
                    </div>
                  </div>

                  {/* Pagination Buttons */}
                  <div className="flex items-center gap-2">
                    {/* First Page */}
                    <button
                      onClick={() => paginate(1)}
                      disabled={currentPage === 1}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === 1
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-indigo-50 hover:border-indigo-300'
                      }`}
                      title="First page"
                    >
                      &laquo;
                    </button>

                    {/* Previous Page */}
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === 1
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-indigo-50 hover:border-indigo-300'
                      }`}
                      title="Previous page"
                    >
                      &lsaquo;
                    </button>

                    {/* Page Numbers */}
                    <div className="hidden sm:flex items-center gap-1">
                      {getPageNumbers().map((page, index) => {
                        if (page === '...') {
                          return (
                            <span
                              key={index}
                              className="px-3 py-2 text-gray-500"
                            >
                              ...
                            </span>
                          );
                        }
                        return (
                          <button
                            key={index}
                            onClick={() => paginate(page as number)}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              currentPage === page
                                ? 'bg-indigo-600 text-white shadow-md'
                                : 'bg-white border border-gray-300 text-gray-700 hover:bg-indigo-50 hover:border-indigo-300'
                            }`}
                          >
                            {page}
                          </button>
                        );
                      })}
                    </div>

                    {/* Mobile: Current Page Display */}
                    <div className="sm:hidden px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium">
                      {currentPage} / {totalPages}
                    </div>

                    {/* Next Page */}
                    <button
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === totalPages
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-indigo-50 hover:border-indigo-300'
                      }`}
                      title="Next page"
                    >
                      &rsaquo;
                    </button>

                    {/* Last Page */}
                    <button
                      onClick={() => paginate(totalPages)}
                      disabled={currentPage === totalPages}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === totalPages
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-indigo-50 hover:border-indigo-300'
                      }`}
                      title="Last page"
                    >
                      &raquo;
                    </button>
                  </div>

                  {/* Jump to Page */}
                  <div className="flex items-center gap-2 text-sm">
                    <label
                      htmlFor="jump-to-page"
                      className="whitespace-nowrap text-gray-700"
                    >
                      Go to:
                    </label>
                    <input
                      id="jump-to-page"
                      type="number"
                      min="1"
                      max={totalPages}
                      value={jumpToPage}
                      onChange={e => setJumpToPage(e.target.value)}
                      onKeyPress={e => {
                        if (e.key === 'Enter') handleJumpToPage();
                      }}
                      placeholder="Page"
                      className="w-20 px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                      onClick={handleJumpToPage}
                      className="px-4 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                    >
                      Go
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FindCourses;

import { useState, useEffect } from 'react';
import {
  Search,
  Trophy,
  Filter,
  Star,
  Globe,
  ChevronDown,
  Sparkles,
  Users,
  Award,
  ArrowRight,
  Building2,
  ChevronLeft,
  MoreHorizontal,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import UniversityCard1 from './UniversityCard1';
import { fetchAllUniversities } from '../services/operations/universityAPI';
import toast from 'react-hot-toast';

const UniversityCard = ({
  university,
  index,
}: {
  university: any;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative transform transition-all duration-700 hover:scale-[1.03] h-full"
      style={{
        animationDelay: `${index * 120}ms`,
        animation: 'fadeInUp 800ms ease-out forwards',
      }}
    >
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-700 hover:shadow-2xl border border-gray-100/50 h-full flex flex-col backdrop-blur-sm">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 via-blue-50/0 to-indigo-50/0 group-hover:from-sky-50/30 group-hover:via-blue-50/20 group-hover:to-indigo-50/30 transition-all duration-700 rounded-3xl" />

        {/* Floating orbs */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-sky-200/30 to-blue-300/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-indigo-200/20 to-purple-300/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

        {/* Header with badges */}
        <div className="relative p-8 pb-4 z-10">
          <div className="flex items-start justify-between mb-6">
            {/* Rank Badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 text-white text-sm font-bold shadow-lg transform transition-all duration-300 hover:scale-105">
              <Trophy className="w-4 h-4" />
              <span className="font-black">#{university.rank}</span>
            </div>

            {/* Featured Badge */}
            {university.isFeatured && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 text-white text-sm font-bold shadow-lg">
                <Star className="w-4 h-4 fill-current animate-pulse" />
                <span className="font-black">Featured</span>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="relative px-8 pb-8 flex-1 flex flex-col z-10">
          {/* University Info */}
          <div className="flex items-start gap-5 mb-8">
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 flex items-center justify-center border-2 border-sky-200/60 shadow-lg backdrop-blur-sm">
                <Building2 className="w-10 h-10 text-sky-600" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full border-3 border-white shadow-lg">
                <div className="w-full h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-ping opacity-75" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-xl text-gray-900 leading-tight group-hover:text-sky-700 transition-colors duration-300 mb-3">
                {university.universityName}
              </h3>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 shadow-sm">
                  <Globe className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-gray-700 font-semibold text-sm">
                  {university.country}
                </span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-5 mb-8">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100/80 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-sky-500 shadow-md">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Students
                </span>
              </div>
              <p className="text-xl font-black text-gray-900">
                {university.students}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100/80 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-emerald-500 shadow-md">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Acceptance
                </span>
              </div>
              <p className="text-xl font-black text-gray-900">
                {university.acceptanceRate}
              </p>
            </div>
          </div>

          {/* Fee Range */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200/60 shadow-sm mb-8">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-gray-700">
                Annual Tuition
              </span>
              <div className="text-right">
                <p className="text-xl font-black bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  ${university.feeRange.min.toLocaleString()} - $
                  {university.feeRange.max.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-auto">
            <Link to={`/universities/${university.universitycode}`}>
              <button className="w-full px-6 py-4 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white rounded-2xl font-bold shadow-lg transition-all duration-500 hover:shadow-xl hover:from-sky-600 hover:via-blue-600 hover:to-indigo-600 group-hover:scale-[1.02] transform hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="flex items-center justify-center gap-3 relative z-10">
                  <span className="font-black">View Details</span>
                  <ArrowRight
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      isHovered ? 'translate-x-2' : ''
                    }`}
                  />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const TopUniversities = () => {
  const [universities, setUniversities] = useState<any[]>([]);
  const [countries, setCountries] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [viewMode, setViewMode] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalUniversities, setTotalUniversities] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const universitiesPerPage = 6;

  // Fetch universities from backend
  const loadUniversities = async () => {
    setLoading(true);
    setError('');

    try {
      const params: any = {
        page: currentPage,
        limit: universitiesPerPage,
      };

      if (selectedCountry) {
        params.country = selectedCountry;
      }

      if (searchTerm) {
        params.search = searchTerm;
      }

      const response = await fetchAllUniversities(params);

      if (response && response.success) {
        setUniversities(response.data || []);
        setTotalPages(response.pagination?.totalPages || 1);
        setTotalUniversities(response.pagination?.total || 0);

        // Extract unique countries from all universities for filter
        if (response.data && response.data.length > 0) {
          const uniqueCountries = Array.from(
            new Set(response.data.map((uni: any) => uni.country))
          ) as string[];
          setCountries(prevCountries => {
            const merged = new Set([...prevCountries, ...uniqueCountries]);
            return Array.from(merged).sort();
          });
        }
      } else {
        setError(response?.message || 'Failed to fetch universities');
        setUniversities([]);
      }
    } catch (err: any) {
      console.error('Error loading universities:', err);
      setError('Failed to load universities. Please try again later.');
      setUniversities([]);
    } finally {
      setLoading(false);
    }
  };

  // Load all countries on initial mount
  useEffect(() => {
    const loadAllCountries = async () => {
      try {
        const response = await fetchAllUniversities({ limit: 1000 });
        if (response && response.success && response.data) {
          const uniqueCountries = Array.from(
            new Set(response.data.map((uni: any) => uni.country))
          ) as string[];
          setCountries(uniqueCountries.sort());
        }
      } catch (err) {
        console.error('Error loading countries:', err);
      }
    };
    loadAllCountries();
  }, []);

  // Fetch universities when filters change
  useEffect(() => {
    loadUniversities();
  }, [currentPage, selectedCountry, searchTerm]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCountry('');
    setViewMode('all');
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5;

    // Previous button
    buttons.push(
      <button
        key="prev"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1 || loading}
        className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <ChevronLeft className="w-4 h-4" />
        Previous
      </button>
    );

    // Page numbers
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      buttons.push(
        <button
          key={1}
          onClick={() => goToPage(1)}
          disabled={loading}
          className="w-12 h-12 rounded-xl font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 disabled:opacity-50"
        >
          1
        </button>
      );
      if (startPage > 2) {
        buttons.push(
          <div
            key="ellipsis1"
            className="flex items-center justify-center w-12 h-12"
          >
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </div>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          disabled={loading}
          className={`w-12 h-12 rounded-xl font-bold transition-all duration-300 disabled:opacity-50 ${
            currentPage === i
              ? 'bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-lg transform scale-110'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <div
            key="ellipsis2"
            className="flex items-center justify-center w-12 h-12"
          >
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </div>
        );
      }
      buttons.push(
        <button
          key={totalPages}
          onClick={() => goToPage(totalPages)}
          disabled={loading}
          className="w-12 h-12 rounded-xl font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 disabled:opacity-50"
        >
          {totalPages}
        </button>
      );
    }

    // Next button
    buttons.push(
      <button
        key="next"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages || loading}
        className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-sm hover:shadow-md"
      >
        Next
        <ArrowRight className="w-4 h-4" />
      </button>
    );

    return buttons;
  };

  return (
    <>
      <div className=" bg-gradient-to-br from-sky-100 via-pink-100 to-blue-100">
        {/* Hero Header with Background Image */}
        <div className="relative w-full overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfD3ayn0m6QP_EFFm6x2WL3vho0pUljJeiDA&s')",
            }}
          />

          {/* Dark Radial Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/40 to-black/30 backdrop-blur-sm" />

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full px-6 pb-10">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="backdrop-blur-m p-10 md:p-16 max-w-4xl text-center"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                Explore the <br />
                <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                  World's Top Universities
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
                Discover globally recognized institutions ranked by innovation,
                research impact, and academic excellence.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative -mt-12 z-10 px-6 max-w-7xl mx-auto">
          {/* Enhanced Search & Filters */}
          <div className="mb-16">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                {/* Search */}
                <div className="lg:col-span-6">
                  <label className="block text-sm font-bold text-gray-700 mb-4">
                    Search Universities
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Harvard, MIT, Oxford..."
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                      disabled={loading}
                      className="w-full px-6 py-5 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/20 focus:border-sky-500 transition-all duration-300 placeholder:text-gray-400 font-medium shadow-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <div className="absolute right-4 top-4 p-3 bg-gradient-to-r from-sky-500 to-blue-500 rounded-xl shadow-lg">
                      <Search className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Country Filter */}
                <div className="lg:col-span-3">
                  <label className="block text-sm font-bold text-gray-700 mb-4">
                    Country
                  </label>
                  <div className="relative">
                    <select
                      value={selectedCountry}
                      onChange={e => setSelectedCountry(e.target.value)}
                      disabled={loading}
                      className="w-full px-6 py-5 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/20 focus:border-sky-500 transition-all duration-300 appearance-none font-medium shadow-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">All Countries</option>
                      {countries.map(country => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-5 top-6 h-5 w-5 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                {/* Results Counter */}
                {/* <div className="lg:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-4">
                    Results
                  </label>
                  <div className="flex bg-gray-100 rounded-2xl p-2 shadow-inner">
                    <div className="flex-1 px-4 py-3 rounded-xl text-sm font-bold text-center bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-lg">
                      {totalUniversities} Found
                    </div>
                  </div>
                </div> */}

                {/* Clear Filters */}
                <div className="lg:col-span-1">
                  <button
                    onClick={clearFilters}
                    disabled={loading}
                    className="w-full p-5 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 rounded-2xl transition-all duration-300 group transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Filter className="h-5 w-5 text-gray-600 mx-auto group-hover:text-gray-900 transition-colors" />
                  </button>
                </div>
              </div>

              {/* Results Count */}
              {/* <div className="mt-8 pt-8 border-t border-gray-200/60">
                <div className="flex items-center justify-between">
                  <p className="text-gray-600 font-medium text-lg">
                    <span className="font-black text-gray-900 text-xl">
                      {filteredUniversities.length}
                    </span>{' '}
                    universities found
                  </p>
                  {(searchTerm ||
                    selectedCountry ||
                    viewMode === 'featured') && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-sky-600 hover:text-sky-700 font-bold transition-colors px-6 py-3 rounded-xl hover:bg-sky-50 shadow-sm"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>
              </div> */}
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-24">
              <div className="p-12 bg-white/90 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl max-w-lg mx-auto">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-sky-100 to-blue-100 w-fit mx-auto mb-8">
                  <Loader2 className="h-20 w-20 mx-auto text-sky-600 animate-spin" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Loading Universities...
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Please wait while we fetch the latest data
                </p>
              </div>
            </div>
          )}

          {/* Error State */}
          {!loading && error && (
            <div className="text-center py-24">
              <div className="p-12 bg-white/90 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl max-w-lg mx-auto">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-red-100 to-orange-100 w-fit mx-auto mb-8">
                  <AlertCircle className="h-20 w-20 mx-auto text-red-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Error Loading Data
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {error}
                </p>
                <button
                  onClick={loadUniversities}
                  className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {/* Universities Grid */}
          {!loading && !error && universities.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
              {universities.map((university, index) => (
                <UniversityCard1
                  key={university.universitycode || university._id}
                  university={university}
                  index={index}
                />
              ))}
            </div>
          )}

          {/* No Results */}
          {!loading && !error && universities.length === 0 && (
            <div className="text-center py-24">
              <div className="p-12 bg-white/90 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl max-w-lg mx-auto">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-sky-100 to-blue-100 w-fit mx-auto mb-8">
                  <Trophy className="h-20 w-20 mx-auto text-sky-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  No universities found
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Try adjusting your search or filters to find more results
                </p>
                <button
                  onClick={clearFilters}
                  className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}

          {/* Enhanced Pagination */}
          {!loading && !error && totalPages > 1 && (
            <div className="pb-10">
              <div className="p-8">
                <div className="flex flex-col items-center gap-6">
                  {/* <div className="text-center">
                    <p className="text-gray-600 font-medium text-lg">
                      Page{' '}
                      <span className="font-black text-gray-900 text-xl">
                        {currentPage}
                      </span>{' '}
                      of{' '}
                      <span className="font-black text-gray-900 text-xl">
                        {totalPages}
                      </span>
                    </p>
                  </div> */}

                  <div className="flex items-center gap-3 flex-wrap justify-center">
                    {renderPaginationButtons()}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(3deg);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 300% 300%;
          animation: gradientShift 8s ease infinite;
        }
      `}</style>
    </>
  );
};

export default TopUniversities;

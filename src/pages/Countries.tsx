import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, ArrowRight, ChevronRight, MapPin } from 'lucide-react';
import mockCountries from '@/Data/contryData';
import { Link } from 'react-router-dom';

const regions = {
  'North America': {
    ids: ['usa', 'canada'],
    gradient: 'from-blue-600 to-sky-400',
    icon: '🌎',
  },
  Europe: {
    ids: [
      'uk',
      'austria',
      'hungary',
      'denmark',
      'malta',
      'poland',
      'cyprus',
      'spain',
      'finland',
      'italy',
      'czechrepublic',
      'lithuania',
      'ireland',
      'switzerland',
      'belgium',
      'croatia',
      'norway',
      'portugal',
      'turkey',
      'greece',
      'slovenia',
      'ukraine',
      'latvia',
      'estonia',
      'russia',
    ],
    gradient: 'from-emerald-600 to-teal-400',
    icon: '🌍',
  },
  Asia: {
    ids: [
      'japan',
      'singapore',
      'malaysia',
      'uae',
      'china',
      'hongkong',
      'georgia',
      'thailand',
      'india',
      'indonesia',
      'azerbaijan',
      'qatar',
      'vietnam',
      'kazakhstan',
      'uzbekistan',
      'kyrgyzstan',
    ],
    gradient: 'from-rose-600 to-orange-400',
    icon: '🌏',
  },
  Oceania: {
    ids: ['australia', 'newzealand'],
    gradient: 'from-amber-600 to-yellow-400',
    icon: '🏝️',
  },
  Africa: {
    ids: ['egypt'],
    gradient: 'from-purple-600 to-pink-400',
    icon: '🌍',
  },
};

function Countries() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeRegion, setActiveRegion] = useState('All');
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const filterCountries = () => {
    let filtered = mockCountries;
    if (searchTerm) {
      filtered = filtered.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (activeRegion !== 'All') {
      const regionCountryIds = regions[activeRegion]?.ids || [];
      filtered = filtered.filter(country =>
        regionCountryIds.includes(country.id)
      );
    }
    return filtered;
  };

  const filteredCountries = filterCountries();
  const regionList = ['All', ...Object.keys(regions)];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-white text-slate-800">
      <header
        className={`sticky z-20 transition-all mt-5 duration-500 ${
          isScrolled
            ? 'bg-blue-200 backdrop-blur-lg shadow-lg py-6 top-16'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-96 group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 group-focus-within:text-indigo-600 transition-colors duration-300">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="text"
                placeholder="Find your dream destination..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-indigo-200 text-slate-700 placeholder:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-400 transition-all duration-300 shadow-sm"
              />
            </div>

            <div className="flex overflow-x-auto gap-2 no-scrollbar w-full md:w-auto py-1">
              {regionList.map(region => (
                <motion.button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeRegion === region
                      ? `bg-gradient-to-r ${
                          region !== 'All'
                            ? regions[region]?.gradient
                            : 'from-violet-600 to-indigo-400'
                        } text-white shadow-md shadow-indigo-200/50`
                      : 'bg-white hover:bg-slate-50 border border-slate-200 text-slate-700'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {region === 'All'
                    ? '🌐 All Regions'
                    : `${regions[region]?.icon} ${region}`}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {filteredCountries.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCountries.map(country => (
                <motion.div
                  key={country.id}
                  className="group relative rounded-2xl overflow-hidden shadow-md bg-white transition-all duration-500 border border-slate-100"
                  onMouseEnter={() => setHoveredCountry(country.id)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2, ease: 'easeOut' },
                  }}
                >
                  {/* Background image with gradient overlay */}
                  <div className="h-40 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-slate-900/40 z-10"></div>
                    <img
                      src={country.backgroundImage}
                      alt={country.name}
                      className="w-full h-full object-cover transition-all duration-700 ease-out scale-100 group-hover:scale-110"
                    />

                    {/* Country flag and name overlay */}
                    <div className="absolute bottom-0 left-0 z-20 p-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg ring-2 ring-white/20">
                        <img
                          src={`https://flagcdn.com/w160/${country.code}.png`}
                          alt={`${country.name} flag`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-white">
                          {country.name}
                        </h2>
                        <div className="flex items-center text-indigo-100">
                          <MapPin className="w-3 h-3 mr-1" />
                          <span className="text-xs">
                            {country.continent || 'International'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-blue-50 px-3 py-1 rounded-md text-xs font-medium text-blue-700 border border-blue-100">
                        {country.universities} Universities
                      </span>
                      <span className="bg-purple-50 px-3 py-1 rounded-md text-xs font-medium text-purple-700 border border-purple-100">
                        {country.ranking}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                      <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                        <div className="text-slate-500 mb-1">
                          Int'l Students
                        </div>
                        <div className="font-semibold text-slate-800">
                          {country.stats.intlStudents}
                        </div>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                        <div className="text-slate-500 mb-1">Avg Tuition</div>
                        <div className="font-semibold text-slate-800">
                          {country.stats.avgTuition}
                        </div>
                      </div>
                    </div>

                    <Link to={`/countries/${country.id}`}>
                      <motion.button
                        className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 text-sm font-medium shadow-md shadow-indigo-200/50"
                        initial={false}
                        animate={{
                          y: hoveredCountry === country.id ? 0 : 3,
                          opacity: hoveredCountry === country.id ? 1 : 0.95,
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Explore Programs
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <motion.div
                className="inline-flex rounded-full bg-slate-100 p-6 mb-6 border border-slate-200 shadow-md"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 2,
                }}
              >
                <Globe className="h-12 w-12 text-indigo-400" />
              </motion.div>
              <h3 className="text-2xl font-bold mt-4 text-slate-800">
                No destinations found
              </h3>
              <p className="text-slate-500 mt-2 max-w-md mx-auto">
                We couldn't find any countries matching your criteria. Try
                adjusting your search terms or filters.
              </p>
              <motion.button
                onClick={() => {
                  setSearchTerm('');
                  setActiveRegion('All');
                }}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 mx-auto shadow-md shadow-indigo-200/50 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Reset All Filters
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default Countries;

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, ArrowRight, Sparkles } from 'lucide-react';
import mockCountries from '@/Data/contryData';
import { Link } from 'react-router-dom';
const regions = {
  'North America': {
    ids: ['usa', 'canada'],
    gradient: 'bg-gradient-to-br from-blue-500/20 to-blue-600/20',
  },
  Europe: {
    ids: ['uk'],
    gradient: 'bg-gradient-to-br from-emerald-500/20 to-emerald-600/20',
  },
};

function Countries() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeRegion, setActiveRegion] = useState('All');
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

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
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-sky-100 text-white">
      <header
        className={`sticky z-20 transition-all duration-500 ${
          isScrolled
            ? 'bg-blue-200 backdrop-blur-lg shadow-lg py-6 top-12'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 group-hover:text-white transition-colors duration-300" />
              <input
                type="text"
                placeholder="Find your destination..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-sky-500 bg-neutral-100 text-black placeholder:text-neutral-400 focus:outline-none focus:border-sky-800 hover:border-sky-800 transition-all duration-300"
              />
            </div>
            <div className="flex overflow-x-auto gap-2 no-scrollbar w-full md:w-auto py-1">
              {regionList.map(region => (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`px-4 py-2.5 rounded-lg text-sm whitespace-nowrap transition-all duration-300 ${
                    activeRegion === region
                      ? `${
                          region !== 'All'
                            ? regions[region]?.gradient
                            : 'bg-primary'
                        } border border-white/20 shadow-sm`
                      : 'bg-sky-400 hover:bg-primary border border-transparent'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {filteredCountries.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8"
            >
              {filteredCountries.map(country => (
                <motion.div
                  key={country.id}
                  className="group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/10"
                  onMouseEnter={() => setHoveredCountry(country.id)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 z-0">
                    <img
                      src={country.backgroundImage}
                      alt={country.name}
                      className="w-full h-full object-cover brightness-[0.4] group-hover:brightness-[0.5] transition-all duration-700 ease-out"
                    />
                  </div>
                  <div className="relative z-10 p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg ring-2 ring-white/20">
                        <img
                          src={`https://flagcdn.com/w160/${country.code}.png`}
                          alt={`${country.name} flag`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h2 className="text-xl font-bold">{country.name}</h2>
                    </div>

                    <div className="flex gap-3 mt-4">
                      <span className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10">
                        {country.universities} Universities
                      </span>
                      <span className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10">
                        {country.ranking}
                      </span>
                    </div>

                    <p className="mt-4 text-sm bg-black/30 p-4 rounded-xl shadow-inner border border-white/10">
                      {country.summary}
                    </p>

                    <div className="mt-4 space-y-2 text-sm text-neutral-300">
                      <div>
                        🎓 International Students: {country.stats.intlStudents}
                      </div>
                      <div>💰 Average Tuition: {country.stats.avgTuition}</div>
                      <div>📝 Work Visa: {country.stats.workVisa}</div>
                    </div>
                    <Link to={`/countries/${country.id}`}>
                      <motion.button
                        className="mt-6 w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
                        initial={false}
                        animate={{
                          y: hoveredCountry === country.id ? 0 : 5,
                          opacity: hoveredCountry === country.id ? 1 : 0.9,
                        }}
                      >
                        Explore programs
                        <ArrowRight className="w-4 h-4" />
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
              <div className="inline-flex rounded-full bg-neutral-800/50 p-6 mb-6">
                <Globe className="h-14 w-14 text-neutral-400" />
              </div>
              <h3 className="text-2xl font-bold mt-6">No destinations found</h3>
              <p className="text-neutral-400 mt-3 max-w-md mx-auto">
                We couldn't find any countries matching your criteria. Try
                adjusting your search terms or filters.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveRegion('All');
                }}
                className="mt-8 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex items-center gap-2 mx-auto"
              >
                Reset All Filters
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default Countries;

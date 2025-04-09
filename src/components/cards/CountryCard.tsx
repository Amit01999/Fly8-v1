import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export type Country = {
  id: string;
  code: string;
  name: string;
  flag: string;
  summary: string;
};

type CountryCardProps = {
  country: Country;
  index?: number;
};

const CountryCard = ({ country, index = 0 }: CountryCardProps) => {
  return (
    <Link to={`/countries/${country.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="rounded-xl overflow-hidden bg-card border shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
      >
        <div className="relative h-40 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://flagcdn.com/${country.code.toLowerCase()}.svg)`,
              opacity: 0.2,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
              alt={country.name}
              className="h-20 w-32 object-contain shadow-lg"
            />
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-lg text-center">{country.name}</h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
            {country.summary}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default CountryCard;

//country code
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Search, Globe } from 'lucide-react';
// import { Input } from '@/components/ui/input';
// import PageHeader from '@/components/layout/PageHeader';
// import PageContainer from '@/components/layout/PageContainer';
// import CountryCard, { Country } from '@/components/cards/CountryCard';

// // Mock data for demo
// const mockCountries: Country[] = [
//   {
//     id: 'usa',
//     code: 'us',
//     name: 'United States',
//     flag: 'us',
//     summary:
//       'Home to world-renowned universities offering a wide range of programs with cutting-edge research facilities.',
//   },
//   {
//     id: 'uk',
//     code: 'gb',
//     name: 'United Kingdom',
//     flag: 'gb',
//     summary:
//       'A global education hub with prestigious universities and a rich academic tradition spanning centuries.',
//   },
//   {
//     id: 'canada',
//     code: 'ca',
//     name: 'Canada',
//     flag: 'ca',
//     summary:
//       'Known for its welcoming atmosphere, quality education, and post-graduation work opportunities.',
//   },
//   {
//     id: 'australia',
//     code: 'au',
//     name: 'Australia',
//     flag: 'au',
//     summary:
//       'A popular destination for international students offering innovative education and a high quality of life.',
//   },
//   {
//     id: 'germany',
//     code: 'de',
//     name: 'Germany',
//     flag: 'de',
//     summary:
//       'Offers tuition-free or low-cost education at many public universities with strong emphasis on research and innovation.',
//   },
//   {
//     id: 'france',
//     code: 'fr',
//     name: 'France',
//     flag: 'fr',
//     summary:
//       'Renowned for its cultural heritage, arts programs, and prestigious grandes écoles.',
//   },
//   {
//     id: 'japan',
//     code: 'jp',
//     name: 'Japan',
//     flag: 'jp',
//     summary:
//       'Combines traditional culture with cutting-edge technology and research across diverse academic disciplines.',
//   },
//   {
//     id: 'singapore',
//     code: 'sg',
//     name: 'Singapore',
//     flag: 'sg',
//     summary:
//       'A global education hub in Asia with world-class universities and multicultural environment.',
//   },
//   {
//     id: 'netherlands',
//     code: 'nl',
//     name: 'Netherlands',
//     flag: 'nl',
//     summary:
//       'Known for innovative teaching methods and strong international orientation with many English-taught programs.',
//   },
//   {
//     id: 'nz',
//     code: 'nz',
//     name: 'New Zealand',
//     flag: 'nz',
//     summary:
//       'Offers quality education in a safe, welcoming environment with stunning natural landscapes.',
//   },
//   {
//     id: 'ireland',
//     code: 'ie',
//     name: 'Ireland',
//     flag: 'ie',
//     summary:
//       'English-speaking country with strong education tradition and growing tech industry opportunities.',
//   },
//   {
//     id: 'sweden',
//     code: 'se',
//     name: 'Sweden',
//     flag: 'se',
//     summary:
//       'Known for creativity, sustainability, and innovation in education with many English-taught programs.',
//   },
// ];

// const Countries = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredCountries = mockCountries.filter(country =>
//     country.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <PageHeader
//         title="Study Destinations"
//         subtitle="Explore top countries for international education and find your perfect study destination."
//         background="gradient"
//         centerText
//       />

//       <PageContainer>
//         <div className="max-w-md mx-auto mb-8">
//           <div className="relative">
//             <Input
//               type="text"
//               placeholder="Search countries..."
//               value={searchTerm}
//               onChange={e => setSearchTerm(e.target.value)}
//               className="pr-10"
//             />
//             <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
//           </div>
//         </div>

//         {filteredCountries.length > 0 ? (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
//           >
//             {filteredCountries.map((country, index) => (
//               <CountryCard key={country.id} country={country} index={index} />
//             ))}
//           </motion.div>
//         ) : (
//           <div className="text-center py-12">
//             <Globe className="h-16 w-16 mx-auto text-muted-foreground/50" />
//             <h3 className="text-lg font-medium mt-4">No countries found</h3>
//             <p className="text-muted-foreground mt-2">
//               Try another search term
//             </p>
//           </div>
//         )}
//       </PageContainer>
//     </>
//   );
// };

// export default Countries;

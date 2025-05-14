import { useEffect, useState } from 'react';

const SectionHeader = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add animation when component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="relative mb-10 group">
      <div
        className={`absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 ${
          isVisible ? 'scale-100' : 'scale-95'
        }`}
      ></div>
      <div className="relative px-6 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-l-lg"></div>
        <div className="absolute -right-1 -top-1 w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full opacity-80"></div>
        <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 pl-4 flex items-center">
          {children}
        </h2>
      </div>
    </div>
  );
};
// Component for sub-section headers
const SubSectionHeader = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xl font-semibold text-gray-700 mb-4 mt-8">{children}</h3>
);

export default SectionHeader;

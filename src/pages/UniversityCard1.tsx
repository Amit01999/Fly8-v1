import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Globe,
  Users,
  Award,
  ArrowRight,
  Star,
  Trophy,
} from 'lucide-react';

const UniversityCard1 = ({ university, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="transition-transform duration-300 hover:scale-[1.015]"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 500ms ease-out forwards',
      }}
    >
      <div className="bg-white rounded-3xl border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col h-full">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-1">
            {university.universityName}
          </h3>
          <p className="text-sm text-gray-500">{university.tagline}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <Trophy className="w-3.5 h-3.5" />
            {
              university.overviewData.find(
                item => item.label === 'Accreditation'
              )?.value
            }
          </span>
          {university.scholarships.some(s => s.popular) && (
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Star className="w-3.5 h-3.5" />
              Scholarships
            </span>
          )}
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Location */}
          <div className="flex items-start gap-2">
            <div className="bg-sky-100 p-2 rounded-lg">
              <Globe className="w-4 h-4 text-sky-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Location</p>
              <p className="text-sm font-semibold text-gray-700">
                {university.location}
              </p>
            </div>
          </div>

          {/* Established */}
          <div className="flex items-start gap-2">
            <div className="bg-teal-100 p-2 rounded-lg">
              <Award className="w-4 h-4 text-teal-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Established</p>
              <p className="text-sm font-semibold text-gray-700">
                {
                  university.overviewData.find(
                    item => item.label === 'Established'
                  )?.value
                }
              </p>
            </div>
          </div>

          {/* Student Body */}
          <div className="flex items-start gap-2">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <Users className="w-4 h-4 text-indigo-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Student Body</p>
              <p className="text-sm font-semibold text-gray-700">
                {
                  university.overviewData.find(
                    item => item.label === 'Student Body'
                  )?.value
                }
              </p>
            </div>
          </div>

          {/* Tuition */}
          <div className="flex items-start gap-2">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Building2 className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Annual Tuition</p>
              <p className="text-sm font-semibold text-blue-700">
                {university.tuitionData[0]?.amount}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <Link to={`/phantom/universities/${university.universitycode}`}>
            <button className="w-full px-5 py-3 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-md hover:from-sky-600 hover:to-blue-600 transition-all">
              <span>View Details</span>
              <ArrowRight
                className={`w-4 h-4 transition-transform duration-300 ${
                  isHovered ? 'translate-x-1' : ''
                }`}
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard1;

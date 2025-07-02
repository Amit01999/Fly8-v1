import React, { useState } from 'react';
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  Building,
  FileText,
  Users,
  TrendingUp,
} from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Software Developer',
    company: 'Tech Solutions Inc.',
    location: 'Toronto, Canada',
    salary: '$75,000 - $95,000',
    type: 'Full-time',
    experience: '2-4 years',
    posted: '2 days ago',
    description:
      'Looking for a skilled software developer to join our growing team...',
    skills: ['React', 'Node.js', 'Python', 'SQL'],
  },
  {
    id: 2,
    title: 'Data Analyst',
    company: 'Analytics Corp',
    location: 'London, UK',
    salary: '£45,000 - £60,000',
    type: 'Full-time',
    experience: '1-3 years',
    posted: '5 days ago',
    description: 'Join our data team to analyze trends and provide insights...',
    skills: ['Excel', 'Python', 'SQL', 'Tableau'],
  },
  {
    id: 3,
    title: 'Marketing Specialist',
    company: 'Global Marketing Agency',
    location: 'Sydney, Australia',
    salary: 'AU$60,000 - AU$80,000',
    type: 'Full-time',
    experience: '2-5 years',
    posted: '1 week ago',
    description: 'Drive marketing campaigns for international clients...',
    skills: ['Digital Marketing', 'SEO', 'Social Media', 'Analytics'],
  },
];

const JobsAbroad = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [jobType, setJobType] = useState('');

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Find Jobs Abroad</h1>
        <p className="text-pink-100">
          Discover international career opportunities for students and graduates
        </p>
      </div>

      {/* Job Search */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Title or Keywords
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <select
              value={selectedLocation}
              onChange={e => setSelectedLocation(e.target.value)}
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Locations</option>
              <option value="canada">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="australia">Australia</option>
              <option value="usa">United States</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Type
            </label>
            <select
              value={jobType}
              onChange={e => setJobType(e.target.value)}
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Types</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="internship">Internship</option>
              <option value="contract">Contract</option>
            </select>
          </div>
        </div>
        <button className="mt-4 bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors">
          Search Jobs
        </button>
      </div>

      {/* Job Listings */}
      <div className="space-y-6">
        {jobs.map(job => (
          <div
            key={job.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {job.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Building className="w-4 h-4" />
                      <span className="text-sm">{job.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{job.posted}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:ml-6 md:text-right">
                  <div className="text-lg font-semibold text-green-600 mb-2">
                    {job.salary}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{job.type}</div>
                  <div className="text-sm text-gray-600 mb-4">
                    {job.experience}
                  </div>
                  <button className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Career Resources */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          Career Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-medium text-gray-800 mb-2">Resume Builder</h4>
            <p className="text-sm text-gray-600 mb-3">
              Create professional resumes with our templates
            </p>
            <button className="text-blue-600 hover:underline text-sm">
              Get Started
            </button>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-medium text-gray-800 mb-2">Interview Prep</h4>
            <p className="text-sm text-gray-600 mb-3">
              Practice interviews with industry experts
            </p>
            <button className="text-green-600 hover:underline text-sm">
              Book Session
            </button>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-medium text-gray-800 mb-2">Skill Assessment</h4>
            <p className="text-sm text-gray-600 mb-3">
              Evaluate your skills and get recommendations
            </p>
            <button className="text-purple-600 hover:underline text-sm">
              Take Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsAbroad;

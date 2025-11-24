import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Search,
  Download,
  Trash2,
  RefreshCw,
  Users,
  TrendingUp,
  Calendar,
  Loader2,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
} from 'lucide-react';

// API base URL - adjust according to your environment
const API_BASE_URL = import.meta.env.VITE_BASE_URL;

interface Registration {
  _id: string;
  fullName: string;
  email: string;
  whatsappNumber: string;
  academicLevel: string;
  otherAcademicLevel?: string;
  previousFly8Course: string;
  fly8Relation: string;
  otherFly8Relation?: string;
  registrationNumber: string;
  registrationDate: string;
  createdAt: string;
}

interface Statistics {
  totalRegistrations: number;
  academicLevelStats: Array<{ _id: string; count: number }>;
  previousCourseStats: Array<{ _id: string; count: number }>;
  fly8RelationStats: Array<{ _id: string; count: number }>;
  dailyRegistrations: Array<{ _id: string; count: number }>;
}

const GermanCourseAdmin: React.FC = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [statistics, setStatistics] = useState<Statistics | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRegistrations, setTotalRegistrations] = useState(0);
  const [error, setError] = useState('');

  // Fetch registrations
  const fetchRegistrations = async (page = 1, search = '') => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get(
        `${API_BASE_URL}/german-course/registrations`,
        {
          params: { page, limit: 10, search },
        }
      );

      if (response.data.success) {
        setRegistrations(response.data.data);
        setTotalPages(response.data.pagination.totalPages);
        setTotalRegistrations(response.data.pagination.totalRegistrations);
        setCurrentPage(response.data.pagination.currentPage);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch registrations');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch statistics
  const fetchStatistics = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/german-course/statistics`
      );
      if (response.data.success) {
        setStatistics(response.data.data);
      }
    } catch (err: any) {
      console.error('Statistics fetch error:', err);
    }
  };

  // Delete registration
  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this registration?')) {
      return;
    }

    try {
      const response = await axios.delete(
        `${API_BASE_URL}/german-course/registration/${id}`
      );
      if (response.data.success) {
        alert('Registration deleted successfully');
        fetchRegistrations(currentPage, searchTerm);
        fetchStatistics();
      }
    } catch (err: any) {
      alert(err.response?.data?.message || 'Failed to delete registration');
    }
  };

  // Export to CSV
  const exportToCSV = () => {
    const headers = [
      'Registration Number',
      'Full Name',
      'Email',
      'WhatsApp Number',
      'Academic Level',
      'Previous Fly8 Course',
      'Fly8 Relation',
      'Registration Date',
    ];

    const csvData = registrations.map(reg => [
      reg.registrationNumber,
      reg.fullName,
      reg.email,
      reg.whatsappNumber,
      reg.academicLevel === 'Other'
        ? reg.otherAcademicLevel
        : reg.academicLevel,
      reg.previousFly8Course,
      reg.fly8Relation === 'Other' ? reg.otherFly8Relation : reg.fly8Relation,
      new Date(reg.registrationDate).toLocaleDateString(),
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `german-course-registrations-${
      new Date().toISOString().split('T')[0]
    }.csv`;
    a.click();
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchRegistrations(1, searchTerm);
  };

  // Load data on mount
  useEffect(() => {
    fetchRegistrations();
    fetchStatistics();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            German Course Registrations - Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Manage and view all German Language Course registrations
          </p>
        </div>

        {/* Statistics Cards */}
        {statistics && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Total Registrations
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {statistics.totalRegistrations}
                  </p>
                </div>
                <Users className="w-12 h-12 text-blue-600 opacity-20" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Top Academic Level
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    {statistics.academicLevelStats[0]?._id || 'N/A'}
                  </p>
                  <p className="text-sm text-gray-500">
                    {statistics.academicLevelStats[0]?.count || 0} students
                  </p>
                </div>
                <TrendingUp className="w-12 h-12 text-green-600 opacity-20" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Last 7 Days</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {statistics.dailyRegistrations.reduce(
                      (sum, day) => sum + day.count,
                      0
                    )}
                  </p>
                </div>
                <Calendar className="w-12 h-12 text-purple-600 opacity-20" />
              </div>
            </div>
          </div>
        )}

        {/* Action Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <form onSubmit={handleSearch} className="flex-1 w-full sm:w-auto">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search by name, email, or registration number..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </div>
            </form>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setSearchTerm('');
                  fetchRegistrations(1, '');
                  fetchStatistics();
                }}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
              <button
                onClick={exportToCSV}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Loading registrations...</p>
          </div>
        ) : (
          <>
            {/* Registrations Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Reg. Number
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Full Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        WhatsApp
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Academic Level
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {registrations.length === 0 ? (
                      <tr>
                        <td
                          colSpan={7}
                          className="px-6 py-12 text-center text-gray-500"
                        >
                          No registrations found
                        </td>
                      </tr>
                    ) : (
                      registrations.map(registration => (
                        <tr
                          key={registration._id}
                          className="hover:bg-gray-50 transition"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                            {registration.registrationNumber}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {registration.fullName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {registration.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {registration.whatsappNumber}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {registration.academicLevel === 'Other'
                              ? registration.otherAcademicLevel
                              : registration.academicLevel}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {new Date(
                              registration.registrationDate
                            ).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <button
                              onClick={() => handleDelete(registration._id)}
                              className="text-red-600 hover:text-red-800 transition"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Showing page {currentPage} of {totalPages} (
                  {totalRegistrations} total registrations)
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      fetchRegistrations(currentPage - 1, searchTerm)
                    }
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>
                  <button
                    onClick={() =>
                      fetchRegistrations(currentPage + 1, searchTerm)
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* Statistics Details */}
        {statistics && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Academic Level Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Academic Level Distribution
              </h3>
              <div className="space-y-2">
                {statistics.academicLevelStats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-sm text-gray-600">{stat._id}</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {stat.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Previous Course Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Previous Course Participation
              </h3>
              <div className="space-y-2">
                {statistics.previousCourseStats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-sm text-gray-600">{stat._id}</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {stat.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fly8 Relation Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Fly8 Family Relation
              </h3>
              <div className="space-y-2">
                {statistics.fly8RelationStats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-sm text-gray-600">{stat._id}</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {stat.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GermanCourseAdmin;

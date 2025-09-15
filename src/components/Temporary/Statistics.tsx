import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Users,
  CheckCircle,
  Calendar,
  TrendingUp,
  BarChart3,
  Download,
  AlertCircle,
} from 'lucide-react';

const Statistics = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStatistics();
  }, []);

  const fetchStatistics = async () => {
    try {
      const response = await axios.get(
        // 'http://localhost:3000/api/v1/gstu/statistics'
        'https://fly8-v1-server.vercel.app/api/v1/gstu/statistics'
      );
      if (response.data.success) {
        setStats(response.data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600">
          <div className="animate-spin -ml-1 mr-3 h-5 w-5 border-2 border-indigo-600 border-t-transparent rounded-full"></div>
          Loading statistics...
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="mx-auto h-12 w-12 text-red-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">
          Error loading statistics
        </h3>
        <p className="mt-1 text-sm text-gray-500">Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Statistics</h2>
          <p className="text-sm text-gray-600 mt-1">
            Overview of registration data and analytics
          </p>
        </div>
        {/* <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </button> */}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-sm p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">
                Total Registrations
              </p>
              <p className="text-3xl font-bold">{stats.totalRegistrations}</p>
            </div>
            <Users className="h-8 w-8 text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-sm p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">
                Tickets Collected
              </p>
              <p className="text-3xl font-bold">{stats.ticketsCollected}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-sm p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm font-medium">
                Tickets Pending
              </p>
              <p className="text-3xl font-bold">{stats.ticketsPending}</p>
            </div>
            <Calendar className="h-8 w-8 text-orange-200" />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Study Destinations */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Study Destinations
            </h3>
            <TrendingUp className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {stats.destinationStats.map(dest => (
              <div
                key={dest._id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                  <span className="font-medium text-gray-900">{dest._id}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold text-gray-900">
                    {dest.count}
                  </span>
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-500 h-2 rounded-full"
                      style={{
                        width: `${
                          (dest.count / stats.totalRegistrations) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Levels */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Program Levels
            </h3>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {stats.programLevelStats.map(level => (
              <div
                key={level._id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="font-medium text-gray-900">{level._id}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold text-gray-900">
                    {level.count}
                  </span>
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{
                        width: `${
                          (level.count / stats.totalRegistrations) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

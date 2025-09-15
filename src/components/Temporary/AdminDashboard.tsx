import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search } from 'lucide-react';

const AdminDashboard = () => {
  const [registrations, setRegistrations] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRegistrations, setTotalRegistrations] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRegistrations();
  }, [page, search]);

  const fetchRegistrations = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        // 'http://localhost:3000/api/v1/gstu/registrations',
        'https://fly8-v1-server.vercel.app/api/v1/gstu/registrations',
        {
          params: { page, limit: 10, search },
        }
      );
      if (response.data.success) {
        setRegistrations(response.data.data);
        setTotalPages(response.data.totalPages);
        setTotalRegistrations(response.data.totalRegistrations);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-white/80 backdrop-blur-md rounded-2xl ">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
        Admin Dashboard – Registrations
      </h1>

      {/* Search + Stats */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="relative w-full sm:w-1/2">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by reg number, name, or email..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <p className="text-gray-600 text-sm sm:text-base">
          Total Registrations:{' '}
          <span className="font-semibold text-indigo-600">
            {totalRegistrations}
          </span>
        </p>
      </div>

      {/* Table */}
      {loading ? (
        <div className="flex justify-center py-10">
          <div className="w-6 h-6 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : registrations.length === 0 ? (
        <p className="text-center text-gray-500">No registrations found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                {[
                  'Reg Number',
                  'Name',
                  'Email',
                  'Contact',
                  'Ticket Collected',
                ].map(header => (
                  <th
                    key={header}
                    className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {registrations.map(reg => (
                <tr key={reg._id} className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">
                    {reg.registrationNumber}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">
                    {reg.fullName}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">
                    {reg.email}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">
                    {reg.contactNumber}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    {reg.ticketCollected ? (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Yes
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                        No
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
        <button
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white disabled:opacity-50 hover:bg-indigo-700 transition"
        >
          Previous
        </button>
        <span className="text-sm font-medium">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white disabled:opacity-50 hover:bg-indigo-700 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;

import React, { useState } from 'react';
import axios from 'axios';
import { CheckCircle, AlertCircle, Award } from 'lucide-react';

const TicketCollection = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const response = await axios.put(
        `https://fly8-v1-server.vercel.app/api/v1/gstu/collect-ticket/${registrationNumber}`
        // `http://localhost:3000/api/v1/gstu/collect-ticket/${registrationNumber}`
      );
      if (response.data.success) {
        setMessage(response.data.message);
        setRegistrationNumber('');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Award className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Ticket Collection</h2>
        <p className="text-gray-600 mt-2">
          Mark event tickets as collected for registered participants
        </p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="registrationNumber"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Registration Number
            </label>
            <input
              type="text"
              id="registrationNumber"
              value={registrationNumber}
              onChange={e =>
                setRegistrationNumber(e.target.value.toUpperCase())
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors font-mono"
              placeholder="e.g., GEG202512345"
              required
            />
            <p className="mt-1 text-sm text-gray-500">
              Enter the registration number to mark ticket as collected
            </p>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading || !registrationNumber.trim()}
            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin -ml-1 mr-3 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                Processing...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Mark as Collected
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Messages */}
      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-400 mr-3" />
            <p className="text-red-800 font-medium">{error}</p>
          </div>
        </div>
      )}

      {message && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
            <p className="text-green-800 font-medium">{message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketCollection;

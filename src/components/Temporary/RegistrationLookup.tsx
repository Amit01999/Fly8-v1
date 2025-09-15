// src/pages/RegistrationLookup.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { CheckCircle, AlertCircle } from 'lucide-react'; // swapped Heroicons

const RegistrationLookup = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [registration, setRegistration] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setRegistration(null);
    setLoading(true);

    try {
      const response = await axios.get(
        `https://fly8-v1-server.vercel.app/api/v1/gstu/register/${registrationNumber}`
        // `http://localhost:3000/api/v1/gstu/register/${registrationNumber}`
      );
      if (response.data.success) {
        setRegistration(response.data.data);
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
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
        Registration Lookup
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="registrationNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Registration Number
          </label>
          <input
            type="text"
            id="registrationNumber"
            value={registrationNumber}
            onChange={e => setRegistrationNumber(e.target.value.toUpperCase())}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="e.g., GEG202512345"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Lookup Registration'}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          {error}
        </div>
      )}

      {registration && (
        <div className="mt-6 p-6 bg-green-50 rounded-md">
          <div className="flex items-center mb-4">
            <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-xl font-semibold text-green-700">
              Registration Found
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <strong>Full Name:</strong> {registration.fullName}
            </div>
            <div>
              <strong>Email:</strong> {registration.email}
            </div>
            <div>
              <strong>Contact Number:</strong> {registration.contactNumber}
            </div>
            <div>
              <strong>Registration Number:</strong>{' '}
              {registration.registrationNumber}
            </div>
            <div>
              <strong>Ticket Collected:</strong>{' '}
              {registration.ticketCollected ? 'Yes' : 'No'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationLookup;

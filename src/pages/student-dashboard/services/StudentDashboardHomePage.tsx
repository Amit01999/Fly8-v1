import React from 'react';
import {
  FileText,
  Briefcase,
  Home,
  CreditCard,
  Heart,
  Plane,
  Menu,
  X,
  User,
  ChevronRight,
} from 'lucide-react';

function StudentDashboardHomePage() {
  return (
    <div>
      {/* Dashboard Content */}

      <div className="p-6">
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800">Visa Status</h3>
                <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                  Pending
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Your visa application is under review. Expected processing time:
                2-3 weeks.
              </p>
              <button className="flex items-center text-sm text-blue-600 hover:text-blue-700">
                View details
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800">Accommodation</h3>
                <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                  Confirmed
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Your accommodation has been confirmed for the upcoming semester.
              </p>
              <button className="flex items-center text-sm text-blue-600 hover:text-blue-700">
                View details
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800">Upcoming Flight</h3>
                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                  In 14 days
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Your flight to London is scheduled for May 8, 2025 at 10:30 AM.
              </p>
              <button className="flex items-center text-sm text-blue-600 hover:text-blue-700">
                View details
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </main>
        <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-3">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 flex items-center">
                <FileText className="mr-2 w-4 h-4" />
                <span>View Documents</span>
              </button>
              <button className="w-full text-left px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 flex items-center">
                <CreditCard className="mr-2 w-4 h-4" />
                <span>Make Payment</span>
              </button>
              <button className="w-full text-left px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 flex items-center">
                <User className="mr-2 w-4 h-4" />
                <span>Update Profile</span>
              </button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-3">Upcoming Events</h2>
            <div className="space-y-3">
              <div className="border-b pb-2">
                <p className="font-medium">Career Fair</p>
                <p className="text-sm text-gray-600">
                  April 25, 2025 • 10:00 AM
                </p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">Study Abroad Orientation</p>
                <p className="text-sm text-gray-600">
                  April 28, 2025 • 2:00 PM
                </p>
              </div>
              <div>
                <p className="font-medium">Financial Aid Workshop</p>
                <p className="text-sm text-gray-600">May 3, 2025 • 1:00 PM</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow md:col-span-2 lg:col-span-1">
            <h2 className="text-lg font-semibold mb-3">Service Highlights</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                <div className="flex flex-col items-center">
                  <Plane className="text-blue-500 mb-2" />
                  <span className="text-sm text-center">Flight Discounts</span>
                </div>
              </div>
              <div className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                <div className="flex flex-col items-center">
                  <Home className="text-blue-500 mb-2" />
                  <span className="text-sm text-center">Housing Fair</span>
                </div>
              </div>
              <div className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                <div className="flex flex-col items-center">
                  <Briefcase className="text-blue-500 mb-2" />
                  <span className="text-sm text-center">Job Applications</span>
                </div>
              </div>
              <div className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                <div className="flex flex-col items-center">
                  <Heart className="text-blue-500 mb-2" />
                  <span className="text-sm text-center">Wellness Program</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboardHomePage;

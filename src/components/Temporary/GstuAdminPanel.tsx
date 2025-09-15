import React, { useState } from 'react';
import AdminDashboard from './AdminDashboard';
import Statistics from './Statistics';
import TicketCollection from './TicketCollection';

const GstuAdminPanel = () => {
  const [activeTab, setActiveTab] = useState('registrations');

  const tabs = [
    { id: 'registrations', label: 'Registrations', component: AdminDashboard },
    {
      id: 'ticket-collection',
      label: 'Ticket Collection',
      component: TicketCollection,
    },
    { id: 'statistics', label: 'Statistics', component: Statistics },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 pt-8 sm:pt-12">
        {/* Main Card Container */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Modern Header with Gradient Background */}
          <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 p-8 sm:p-10">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center tracking-tight">
                Admin Panel
              </h1>
              <p className="text-indigo-100 text-center mt-2 text-sm sm:text-base opacity-90">
                GSTU Management System
              </p>
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl"></div>
          </div>

          {/* Enhanced Tab Navigation */}
          <div className="sticky top-0 z-20 bg-sky-100/80 backdrop-blur-md shadow-sm">
            <div className="relative flex overflow-x-auto scrollbar-hide">
              {/* Gradient fade on left/right for scroll hint */}
              <div className="absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-white to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-white to-transparent pointer-events-none" />

              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex-1 min-w-[160px] px-6 sm:px-8 py-4 sm:py-5 
        text-sm sm:text-base font-semibold transition-all duration-300 ease-in-out
        rounded-t-xl
        ${
          activeTab === tab.id
            ? 'text-indigo-700 bg-gradient-to-b from-indigo-100 to-blue-100 shadow-inner'
            : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
        }`}
                >
                  <span className="relative z-10">{tab.label}</span>

                  {/* Active Tab Indicator */}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-300"></div>
                  )}

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/0 to-indigo-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area with Enhanced Styling */}
          <div className="relative">
            {/* Content Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0)`,
                  backgroundSize: '20px 20px',
                }}
              ></div>
            </div>

            <div className="relative p-6 sm:p-8 lg:p-10 min-h-[60vh]">
              {/* Loading State Enhancement */}
              {ActiveComponent ? (
                <div className="animate-fade-in">
                  <ActiveComponent />
                </div>
              ) : (
                <div className="flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg animate-pulse"></div>
                    </div>
                    <p className="text-gray-500 font-medium">
                      Loading content...
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default GstuAdminPanel;

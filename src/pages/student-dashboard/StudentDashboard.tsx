import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
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
  Bell,
  Settings,
  LogOut,
} from 'lucide-react';

const StudentServicesDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const menuItems = [
    {
      path: '/StudentDashboard/my-profile',
      title: 'Profile',
      icon: <User size={20} />,
    },
    {
      path: '/StudentDashboard/visa',
      title: 'Visa Assistance',
      icon: <FileText size={20} />,
    },
    {
      path: '/StudentDashboard/tickets',
      title: 'Ticket Booking',
      icon: <Plane size={20} />,
    },
    {
      path: '/StudentDashboard/accommodation',
      title: 'Accommodation Finder',
      icon: <Home size={20} />,
    },
    {
      path: '/StudentDashboard/jobs',
      title: 'Job Portal',
      icon: <Briefcase size={20} />,
    },
    {
      path: '/StudentDashboard/medical',
      title: 'Medical Support',
      icon: <Heart size={20} />,
    },
    {
      path: '/StudentDashboard/loans',
      title: 'Student Loan',
      icon: <CreditCard size={20} />,
    },
  ];

  return (
    <div className="flex lg:h-screen flex-1 relative bg-gray-50">
      {/* Sidebar */}
      <div
        className={`absolute top-0 left-0 z-30 w-64 h-full bg-gradient-to-b from-blue-700 to-indigo-800 text-white shadow-lg transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between  h-20 px-6 border-b border-blue-600/30">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white  rounded-lg shadow-md">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 22L3 17V7L12 2L21 7V17L12 22Z" fill="#3B82F6" />
                <path
                  d="M12 22L21 17V7L12 2"
                  stroke="white"
                  strokeWidth="0.5"
                />
                <path
                  d="M12 16L12 10"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="7" r="2" fill="white" />
              </svg>
            </div>
            <h1 className="text-xl font-bold">Student Hub</h1>
          </div>
          <button
            className="p-1 lg:hidden text-white hover:bg-blue-600 rounded-full"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-4 py-6">
          <div className="flex items-center px-2 mb-6">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-700 font-bold shadow-md">
              JS
            </div>
            <div className="ml-3">
              <p className="font-medium">John Smith</p>
              <p className="text-sm text-blue-200">Student ID: 21548796</p>
            </div>
          </div>

          <p className="px-2 text-xs font-medium text-blue-200 uppercase tracking-wider mb-2">
            Main Menu
          </p>
          <nav className="mt-2">
            <ul className="space-y-1">
              {menuItems.map(item => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-white/10 text-white font-medium shadow-sm backdrop-blur-sm'
                          : 'text-blue-100 hover:bg-white/5'
                      }`
                    }
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.title}</span>
                    {/* {item.path === '/StudentDashboard/visa' && (
                      <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        3
                      </span>
                    )} */}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <button className="flex items-center justify-center w-full py-2 px-4 text-sm bg-white/10 hover:bg-white/15 rounded-lg text-white transition-all duration-200">
            <LogOut size={16} className="mr-2" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar inside content */}
        <header className="flex items-center justify-between h-20 px-6 bg-blue-100 border-b shadow-sm">
          <div className="flex items-center">
            <button
              className="p-2 mr-4 rounded-lg text-gray-500 hover:bg-gray-100 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
              <p className="text-sm text-gray-500">Welcome back, John</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
              <Settings size={20} />
            </button>
            <div className="relative">
              <button
                className="flex items-center space-x-2 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={toggleDropdown}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-md">
                  JS
                </div>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Outlet */}
        <main className="p-4 flex-1 bg-gray-50">
          <Outlet />
        </main>
      </div>

      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default StudentServicesDashboard;

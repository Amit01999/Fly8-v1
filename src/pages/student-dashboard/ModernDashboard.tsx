import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  User,
  Bell,
  Search,
  Calendar,
  BookOpen,
  PieChart,
  Settings,
  CheckCircle,
  FileText,
  Clock,
  ChevronRight,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

// Sample data
const menuItems = [
  { title: 'Dashboard', path: '/', icon: <PieChart size={20} /> },
  { title: 'Courses', path: '/courses', icon: <BookOpen size={20} /> },
  { title: 'Calendar', path: '/calendar', icon: <Calendar size={20} /> },
  { title: 'Assignments', path: '/assignments', icon: <FileText size={20} /> },
  { title: 'Settings', path: '/settings', icon: <Settings size={20} /> },
];

const notifications = [
  {
    id: 1,
    title: 'Assignment Due',
    message: 'Math 101 homework due in 2 days',
    time: '2 hours ago',
  },
  {
    id: 2,
    title: 'New Course Material',
    message: 'Physics lecture notes uploaded',
    time: '5 hours ago',
  },
  {
    id: 3,
    title: 'Exam Schedule Updated',
    message: 'Check your updated exam schedule',
    time: '1 day ago',
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Math Quiz',
    time: 'Today, 2:00 PM',
    course: 'Mathematics 101',
    color: 'bg-purple-500',
  },
  {
    id: 2,
    title: 'Group Project Meeting',
    time: 'Tomorrow, 10:00 AM',
    course: 'Business Studies',
    color: 'bg-blue-500',
  },
  {
    id: 3,
    title: 'Essay Submission',
    time: 'Apr 24, 11:59 PM',
    course: 'English Literature',
    color: 'bg-green-500',
  },
];

const courseProgress = [
  { id: 1, name: 'Mathematics 101', progress: 75, color: 'bg-purple-500' },
  { id: 2, name: 'Physics 202', progress: 60, color: 'bg-blue-500' },
  { id: 3, name: 'Computer Science 301', progress: 90, color: 'bg-green-500' },
  { id: 4, name: 'History 105', progress: 40, color: 'bg-yellow-500' },
];

export default function ModernDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = date => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const Dashboard = () => (
    <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome back, Alex!
          </h1>
          <p className="text-gray-500 mt-2">{formatDate(currentDateTime)}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Stats Cards */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Courses</p>
                <h3 className="text-3xl font-bold text-gray-800 mt-1">6</h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <BookOpen size={24} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-green-600 text-sm font-medium flex items-center">
                <CheckCircle size={16} className="mr-1" />2 completed
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Assignments</p>
                <h3 className="text-3xl font-bold text-gray-800 mt-1">12</h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                <FileText size={24} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-red-600 text-sm font-medium flex items-center">
                <Clock size={16} className="mr-1" />3 due soon
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Overall GPA</p>
                <h3 className="text-3xl font-bold text-gray-800 mt-1">3.8</h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <PieChart size={24} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-blue-600 text-sm font-medium flex items-center">
                <ChevronRight size={16} className="mr-1" />
                View transcript
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Course Progress */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Course Progress
              </h2>
              <button className="text-blue-600 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="space-y-6">
              {courseProgress.map(course => (
                <div key={course.id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-gray-700">{course.name}</h3>
                    <span className="text-gray-500 text-sm">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${course.color} h-2 rounded-full`}
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Upcoming Events
              </h2>
              <button className="text-blue-600 text-sm font-medium">
                View Calendar
              </button>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map(event => (
                <div
                  key={event.id}
                  className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div
                    className={`${event.color} w-3 h-3 rounded-full mt-1.5`}
                  ></div>
                  <div>
                    <h3 className="font-medium text-gray-800">{event.title}</h3>
                    <p className="text-gray-500 text-sm">{event.time}</p>
                    <p className="text-gray-400 text-xs mt-1">{event.course}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-20 px-6 border-b">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            StudyHub
          </h1>
          <button
            className="p-1 lg:hidden text-gray-500 hover:text-gray-800"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <div>
              <h2 className="font-medium text-gray-800">Alex Johnson</h2>
              <p className="text-sm text-gray-500">Student ID: 2023456</p>
            </div>
          </div>
        </div>
        <nav className="px-3 py-4">
          <ul className="space-y-1">
            {menuItems.map(item => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 text-gray-700 rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 font-medium shadow-sm'
                        : 'hover:bg-gray-50'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  {/* <span
                    className={`mr-3 ${
                      isActive ? 'text-blue-600' : 'text-gray-500'
                    }`}
                  >
                    {item.icon}
                  </span> */}
                  <span>{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
            <h3 className="font-medium text-gray-800 mb-2">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-3">
              Contact student support for assistance
            </p>
            <button className="w-full py-2 px-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b shadow-sm z-10">
          <div className="flex items-center justify-between h-20 px-6">
            <div className="flex items-center">
              <button
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu size={24} />
              </button>
              <div className="relative ml-4 lg:ml-0">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-xl pl-10 p-2.5 w-64 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                  placeholder="Search courses, assignments..."
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 relative"
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                >
                  <Bell size={22} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {notificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg py-2 z-50 border border-gray-100">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-800">
                        Notifications
                      </h3>
                    </div>
                    {notifications.map(notification => (
                      <div
                        key={notification.id}
                        className="px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-b-0"
                      >
                        <h4 className="font-medium text-gray-800">
                          {notification.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {notification.time}
                        </p>
                      </div>
                    ))}
                    <div className="px-4 py-2 text-center">
                      <button className="text-sm text-blue-600 font-medium">
                        View all notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="h-8 w-px bg-gray-200"></div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium">
                  A
                </div>
                <div className="ml-3 hidden md:block">
                  <p className="text-sm font-medium text-gray-800">
                    Alex Johnson
                  </p>
                  <p className="text-xs text-gray-500">Computer Science</p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

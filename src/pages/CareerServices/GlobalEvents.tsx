import { useState, useEffect } from 'react';
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Star,
  MessageCircle,
  Globe,
  Award,
  Briefcase,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function GlobalEvents() {
  // State for feature tabs
  const [activeTab, setActiveTab] = useState('upcoming');

  // State for event categories
  const [activeCategory, setActiveCategory] = useState('all');

  // Animated countdown
  const [countdown, setCountdown] = useState({
    days: 7,
    hours: 14,
    minutes: 32,
    seconds: 10,
  });

  // Simulated countdown timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setCountdown(prev => ({
        ...prev,
        seconds: prev.seconds > 0 ? prev.seconds - 1 : 59,
        minutes:
          prev.seconds === 0
            ? prev.minutes > 0
              ? prev.minutes - 1
              : 59
            : prev.minutes,
        hours:
          prev.seconds === 0 && prev.minutes === 0
            ? prev.hours > 0
              ? prev.hours - 1
              : 23
            : prev.hours,
        days:
          prev.seconds === 0 && prev.minutes === 0 && prev.hours === 0
            ? prev.days - 1
            : prev.days,
      }));
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'university', name: 'University Fairs' },
    { id: 'career', name: 'Career Events' },
    { id: 'networking', name: 'Networking' },
    { id: 'cultural', name: 'Cultural' },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Global University Fair 2025',
      date: 'May 15, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Virtual Event',
      category: 'university',
      attendees: 2500,
      image:
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      featured: true,
    },
    {
      id: 2,
      title: 'Tech Career Webinar Series',
      date: 'May 22, 2025',
      time: '6:00 PM - 7:30 PM',
      location: 'Online',
      category: 'career',
      attendees: 850,
      image:
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 3,
      title: 'International Student Mixer',
      date: 'May 25, 2025',
      time: '7:00 PM - 10:00 PM',
      location: 'New York City',
      category: 'networking',
      attendees: 150,
      image:
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 4,
      title: 'Global Culture Festival',
      date: 'June 3, 2025',
      time: '11:00 AM - 8:00 PM',
      location: 'London',
      category: 'cultural',
      attendees: 1200,
      image:
        'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 5,
      title: 'Scholarship Workshop',
      date: 'June 10, 2025',
      time: '2:00 PM - 4:00 PM',
      location: 'Virtual Event',
      category: 'university',
      attendees: 780,
      image:
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const pastEvents = [
    {
      id: 101,
      title: 'Spring Networking Conference',
      date: 'April 5, 2025',
      time: '9:00 AM - 5:00 PM', // Added time property
      location: 'Tokyo, Japan',
      category: 'networking',
      attendees: 320,
      image:
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 102,
      title: 'Resume Building Workshop',
      date: 'March 22, 2025',
      time: '2:00 PM - 4:00 PM', // Added time property
      location: 'Online',
      category: 'career',
      attendees: 450,
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 103,
      title: 'Winter University Expo',
      date: 'February 15, 2025',
      time: '10:00 AM - 6:00 PM', // Added time property
      location: 'Berlin, Germany',
      category: 'university',
      attendees: 1800,
      image:
        'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const events = activeTab === 'upcoming' ? upcomingEvents : pastEvents;
  const filteredEvents =
    activeCategory === 'all'
      ? events
      : events.filter(event => event.category === activeCategory);

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-purple-50 to-white">
      {/* Neomorphic Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-50"></div>
          <div className="absolute w-96 h-96 -top-20 -right-20 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute w-96 h-96 -bottom-20 -left-20 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row justify-center items-start gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Globe className="text-purple-600 w-5 h-5" />
                <span className="text-sm font-medium text-purple-800">
                  Global Opportunities
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                <span className="block">Network.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                  Learn. Lead.
                </span>
              </h1>

              <p className="text-xl text-gray-700">
                Fly8 gives you access to exclusive international student fairs,
                networking events, and expert-led workshops — both online and
                in-person.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={'/signin/student'}>
                  <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-lg py-6 px-8 rounded-lg">
                    View Upcoming Events
                  </Button>
                </Link>
                <Link to={'/signin/student'}>
                  <Button
                    variant="outline"
                    className="border-purple-600 text-purple-700 hover:text-purple-800 text-lg py-6 px-8 rounded-lg"
                  >
                    Event Calendar
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2">
              {/* Featured Event Card */}
              <div className="relative">
                {/* Neomorphic effect */}
                <div className="absolute inset-0 transform translate-x-4 translate-y-4 rounded-2xl bg-gradient-to-r from-purple-200 to-indigo-200"></div>

                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                      alt="Global University Fair"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2">
                      Featured Event
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Global University Fair 2025
                      </h3>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        Virtual
                      </span>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                        <span>May 15, 2025</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-5 h-5 mr-2 text-purple-600" />
                        <span>10:00 AM - 4:00 PM (EST)</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-5 h-5 mr-2 text-purple-600" />
                        <span>2,500+ Attendees</span>
                      </div>
                    </div>

                    {/* Countdown Timer */}
                    <div className="mb-6">
                      <div className="text-sm font-medium text-purple-800 mb-1">
                        Event starts in:
                      </div>
                      <div className="flex space-x-3">
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg px-3 py-2 flex-1 text-center">
                          <div className="text-2xl font-bold">
                            {countdown.days}
                          </div>
                          <div className="text-xs">days</div>
                        </div>
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg px-3 py-2 flex-1 text-center">
                          <div className="text-2xl font-bold">
                            {countdown.hours}
                          </div>
                          <div className="text-xs">hours</div>
                        </div>
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg px-3 py-2 flex-1 text-center">
                          <div className="text-2xl font-bold">
                            {countdown.minutes}
                          </div>
                          <div className="text-xs">min</div>
                        </div>
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg px-3 py-2 flex-1 text-center">
                          <div className="text-2xl font-bold">
                            {countdown.seconds}
                          </div>
                          <div className="text-xs">sec</div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-2">
                      Register Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section with Glass Morphism Design */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              Events Calendar
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Connect with Global Minds and Opportunities
            </h2>
            <p className="text-xl text-gray-600">
              Our events help you meet universities, employers, and fellow
              students — all in one place.
            </p>
          </div>

          {/* Event Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-purple-100 p-1">
              <button
                className={`px-6 py-2 rounded-md transition-colors ${
                  activeTab === 'upcoming'
                    ? 'bg-white text-purple-800 shadow-sm'
                    : 'text-purple-600 hover:text-purple-800'
                }`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming Events
              </button>
              <button
                className={`px-6 py-2 rounded-md transition-colors ${
                  activeTab === 'past'
                    ? 'bg-white text-purple-800 shadow-sm'
                    : 'text-purple-600 hover:text-purple-800'
                }`}
                onClick={() => setActiveTab('past')}
              >
                Past Events
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                    : 'bg-white border border-gray-200 text-gray-700 hover:border-purple-400'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <Card
                key={event.id}
                className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                    {event.category.charAt(0).toUpperCase() +
                      event.category.slice(1)}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-purple-600" />
                      <span>{event.date}</span>
                    </div>

                    {event.time && (
                      <div className="flex items-center text-gray-600 text-sm">
                        <Clock className="w-4 h-4 mr-2 text-purple-600" />
                        <span>{event.time}</span>
                      </div>
                    )}

                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-purple-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{event.attendees}+ attending</span>
                    </div>

                    <Button
                      size="sm"
                      className={`${
                        activeTab === 'upcoming'
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {activeTab === 'upcoming' ? 'Register' : 'View Details'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-purple-500 text-purple-700 hover:bg-purple-50"
            >
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section with Colorful Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              What Makes Our Events Special
            </h2>
            <p className="text-lg text-gray-600">
              From university fairs to career workshops, our events are designed
              to provide maximum value to international students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl p-1">
              <div className="bg-white rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  University Fairs
                </h3>
                <p className="text-gray-600">
                  Meet representatives from top institutions and get first-hand
                  information about programs.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl p-1">
              <div className="bg-white rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Career Webinars
                </h3>
                <p className="text-gray-600">
                  Learn from global recruiters and alumni about career pathways
                  and opportunities.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-1">
              <div className="bg-white rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Networking Mixers
                </h3>
                <p className="text-gray-600">
                  Connect with students from around the world and build your
                  global network.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl p-1">
              <div className="bg-white rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Scholarship Info
                </h3>
                <p className="text-gray-600">
                  Learn how to win funding and financial aid opportunities for
                  your studies abroad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-200 rounded-full translate-y-1/2 -translate-x-1/2 opacity-30"></div>

              <div className="relative">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="relative">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="Student testimonial"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <div className="text-4xl text-purple-600 font-serif mb-3">
                      "
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 mb-4">
                      The Global University Fair organized by Fly8 changed my
                      life! I connected with my dream university, received
                      scholarship information, and met other students who are
                      now my best friends and study partners.
                    </p>
                    <div className="mb-1 font-bold text-gray-900">
                      Maria Lopez
                    </div>
                    <div className="text-gray-600 text-sm">
                      Computer Science Student, University of Toronto
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Connect with Global Opportunities?
            </h2>
            <p className="text-xl mb-10 text-purple-100">
              Join our events to build your network, enhance your skills, and
              open doors to global opportunities.
            </p>
            <Link to={'/signin/student'}>
              <Button className="bg-white text-purple-700 hover:bg-purple-50 text-lg px-10 py-6 rounded-full shadow-lg">
                Join an Event Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

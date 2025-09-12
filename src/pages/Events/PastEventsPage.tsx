import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  Users,
  Award,
  BookOpen,
  Handshake,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  Star,
} from 'lucide-react';
import heroimage from '../../assets/event/pastevents/hero.jpg';
import img1 from '../../assets/event/pastevents/1.jpg';
import img2 from '../../assets/event/pastevents/2.jpg';
import img3 from '../../assets/event/pastevents/3.jpg';
import img4 from '../../assets/event/pastevents/4.jpg';
import img5 from '../../assets/event/pastevents/5.jpg';
import img6 from '../../assets/event/pastevents/6.jpg';
import img7 from '../../assets/event/pastevents/7.jpg';
import img8 from '../../assets/event/pastevents/8.jpg';
import img9 from '../../assets/event/pastevents/9.jpg';
import { Link } from 'react-router-dom';

const PastEventsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample event images - in a real implementation, these would be actual event photos
  const eventImages = [
    {
      id: 1,
      src: img1,
      alt: 'Managing Director Suman Saha addressing the team',
      caption: 'Managing Director (Pilot) Suman Saha addressing the team',
    },
    {
      id: 5,
      src: img5,
      alt: 'Company group photo',
      caption: 'Our incredible team together at the annual celebration',
    },
    {
      id: 2,
      src: img2,
      alt: 'MOU signing ceremony with Overseas Educare',
      caption: 'MOU signing ceremony with Overseas Educare',
    },
    {
      id: 3,
      src: img3,
      alt: 'Best Employee awards ceremony',
      caption: 'Best Employee of the Month awards ceremony',
    },
    {
      id: 3,
      src: img6,
      alt: 'Best Employee awards ceremony',
      caption: 'Best Employee of the Month awards ceremony',
    },
    {
      id: 3,
      src: img7,
      alt: 'Best Employee awards ceremony',
      caption: 'Best Employee of the Month awards ceremony',
    },
    {
      id: 3,
      src: img8,
      alt: 'Best Employee awards ceremony',
      caption: 'Tranning session ',
    },
    {
      id: 3,
      src: img9,
      alt: 'Best Employee awards ceremony',
      caption: 'Tranning session  ',
    },
    {
      id: 4,
      src: img4,
      alt: 'Team lunch celebration',
      caption: 'Team lunch celebrating our achievements together',
    },
  ];

  const eventHighlights = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'First General Meeting',
      description:
        'Hosted our inaugural general meeting with full team participation',
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: 'Partnership Agreement',
      description:
        'Signed MOU with Overseas Educare for exciting collaborations',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Employee Recognition',
      description:
        'Honored 12 outstanding team members as Best Employee of the Month',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Training Session',
      description:
        'Enhanced team skills for better study abroad service delivery',
    },
  ];

  const openImageModal = index => {
    setCurrentImageIndex(index);
    setSelectedImage(eventImages[index]);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = direction => {
    const newIndex =
      direction === 'next'
        ? (currentImageIndex + 1) % eventImages.length
        : (currentImageIndex - 1 + eventImages.length) % eventImages.length;

    setCurrentImageIndex(newIndex);
    setSelectedImage(eventImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header Section with Hero Background */}
      <div className="relative h-[70vh] md:h-[90vh] bg-gradient-to-br from-blue-900/95 via-indigo-900/95 to-purple-900/95 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('" + heroimage + "')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-indigo-900/85 to-purple-900/85" />

        {/* Content */}
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Fly8's First General Meeting
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              A Milestone Day That Marked Our Journey Forward
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Calendar className="w-6 h-6 text-blue-300" />
                <span className="text-lg font-medium">August 8th, 2025</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <MapPin className="w-6 h-6 text-purple-300" />
                <span className="text-lg font-medium">
                  The Grand Placid Hotel, Khulna
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Event Story Section */}
        <div className="mb-20">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50">
            <div className="text-center mb-8">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Our Story
              </h2>
            </div>

            <div className="prose prose-xl max-w-none text-center">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                On{' '}
                <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  8th August, 2025
                </span>
                , we proudly hosted our first general meeting at{' '}
                <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  The Grand Placid Hotel
                </span>
                , Khulna.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Managing Director (Pilot){' '}
                <span className="font-semibold text-gray-800">Suman Saha</span>{' '}
                and HR of Fly8 were present, making the entire session joyful
                and interactive with all our amazing colleagues.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                This special day also marked the signing of several Memorandums
                of Understanding (MOUs) with new partner{' '}
                <span className="font-semibold text-gray-800">
                  Overseas Educare
                </span>{' '}
                — paving the way for exciting collaborations ahead!
              </p>
            </div>
          </div>
        </div>

        {/* Event Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Event Highlights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 text-blue-600">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
              Event Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Capturing memories that will last forever
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventImages.map((image, index) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                onClick={() => openImageModal(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-medium text-lg leading-tight">
                      {image.caption}
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Award className="w-16 h-16 text-amber-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Celebrating Excellence at Fly8!
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At our recent event, we proudly recognized{' '}
                <strong>12 outstanding team members</strong> — two from each of
                the six key roles in our company — as{' '}
                <strong>Best Employee of the Month</strong>.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Their dedication, passion, and hard work truly inspire us all.
                Each awardee was honored with a medal of achievement to mark
                their exceptional contribution.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                The day ended on a high note with a warm team lunch, where
                laughter, stories, and memories were shared. Because at Fly8, we
                believe{' '}
                <strong>success tastes better when celebrated together!</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Learning & Development Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Learning Never Stops at Fly8!
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our team recently took part in a special training session on how
                to effectively present and explain our study abroad services —
                making sure every student, agent, and university partner gets
                clear, friendly, and accurate guidance.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                We're committed to making your study abroad journey easier than
                ever!
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Study Abroad Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have trusted Fly8 to make their
              international education dreams come true.
            </p>
            <Link
              to={'/signin/student'}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
              <p className="text-center text-lg">{selectedImage.caption}</p>
              <p className="text-center text-sm text-gray-300 mt-1">
                {currentImageIndex + 1} of {eventImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PastEventsPage;

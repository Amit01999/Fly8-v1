import React from 'react';

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[#fefdfb] relative overflow-hidden">
      {/* Organic background blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-rose-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section - Magazine Style */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center px-4 sm:px-8 lg:px-16">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <div className="inline-block mb-5 px-4 py-1 bg-black text-white text-xs sm:text-sm tracking-widest rounded">
              Fly8 × ECB
            </div>

            <h1
              className="font-extrabold leading-tight md:leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-gray-900">
                Special
              </span>
              <span className="block italic text-amber-500 mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
                Offers
              </span>
              <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700">
                for Everyone!
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-md mx-auto md:mx-0 leading-relaxed">
              English Carnival Bangladesh is offering customized courses for all
              our learners.
            </p>
          </div>

          {/* Right Visuals */}
          <div className="relative h-80 sm:h-96 md:h-[500px]">
            {/* Background glow effects */}
            <div className="absolute top-10 right-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full opacity-20 blur-2xl"></div>

            {/* Main Illustration */}
            <div className="relative h-full flex items-center justify-center">
              {/* Floating Course Cards */}
              <div className="absolute top-10 right-8 sm:right-16 bg-white p-4 sm:p-6 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-12 transition-transform duration-300">
                <div className="w-20 sm:w-24 h-28 sm:h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl">📚</span>
                </div>
                <div className="mt-3 text-center text-xs sm:text-sm font-bold text-gray-800">
                  IELTS
                </div>
              </div>

              <div className="absolute top-32 left-6 sm:left-12 bg-white p-4 sm:p-6 rounded-2xl shadow-2xl transform -rotate-6 hover:-rotate-12 transition-transform duration-300">
                <div className="w-20 sm:w-24 h-28 sm:h-32 bg-gradient-to-br from-rose-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl">🤖</span>
                </div>
                <div className="mt-3 text-center text-xs sm:text-sm font-bold text-gray-800">
                  AI Course
                </div>
              </div>

              <div className="absolute bottom-16 right-12 sm:right-24 bg-white p-4 sm:p-6 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                <div className="w-20 sm:w-24 h-28 sm:h-32 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl">🏆</span>
                </div>
                <div className="mt-3 text-center text-xs sm:text-sm font-bold text-gray-800">
                  Certificate
                </div>
              </div>

              {/* Central Student Element */}
              <div className="relative z-10">
                <div className="w-28 sm:w-36 md:w-40 h-28 sm:h-36 md:h-40 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-5xl sm:text-6xl md:text-7xl">🎓</span>
                </div>
                <div className="absolute inset-0 border-4 border-amber-400 rounded-full animate-ping opacity-20"></div>
                <div className="absolute inset-[-8px] border-2 border-indigo-400 rounded-full"></div>
              </div>

              {/* Language Badges */}
              <div className="absolute bottom-6 left-4 sm:left-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg transform hover:scale-110 transition-transform">
                🇯🇵 Japanese
              </div>
              <div className="absolute top-16 left-10 sm:left-24 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg transform hover:scale-110 transition-transform">
                🇩🇪 German
              </div>

              {/* Sparkle effects */}
              <div className="absolute top-4 right-24 sm:right-32 text-xl sm:text-2xl animate-pulse">
                ✨
              </div>
              <div className="absolute bottom-4 left-20 sm:left-32 text-xl sm:text-2xl animate-pulse delay-100">
                ⭐
              </div>
              <div className="absolute top-1/2 right-6 sm:right-8 text-lg sm:text-xl animate-pulse delay-200">
                💫
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          {/* IELTS Course - Large Feature */}
          <div className="md:col-span-7 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 text-[200px] font-black opacity-5">
              01
            </div>
            <div className="relative z-10">
              <div className="text-xs tracking-widest mb-3 opacity-80">
                FREE COURSE
              </div>
              <h2 className="text-5xl font-black mb-6 leading-tight">
                IELTS
                <br />
                Crack Course
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-baseline gap-3">
                  <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                  <div>
                    <span className="text-sm opacity-70">Duration</span>
                    <p className="text-xl font-bold">2 Months</p>
                  </div>
                </div>
                <div className="flex items-baseline gap-3">
                  <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                  <div>
                    <span className="text-sm opacity-70">Start Date</span>
                    <p className="text-xl font-bold">10th October</p>
                  </div>
                </div>
                <div className="flex items-baseline gap-3">
                  <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                  <div>
                    <span className="text-sm opacity-70">Schedule</span>
                    <p className="text-xl font-bold">Fri & Sat, 9PM-10:30PM</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  Listening
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  Reading
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  Writing
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  Speaking
                </span>
              </div>
            </div>
          </div>

          {/* AI Course - Vertical Feature */}
          <div className="md:col-span-5 bg-black text-white rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 text-[150px] font-black opacity-5">
              02
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="text-xs tracking-widest mb-3 text-amber-400">
                  FREE COURSE
                </div>
                <h2 className="text-4xl font-black mb-6 leading-tight">
                  AI Mastering
                  <br />
                  Course
                </h2>

                <div className="space-y-3 mb-6">
                  <p className="text-sm opacity-70">From E-Shikhon</p>
                  <p className="text-lg font-semibold">
                    AI for Productivity
                    <br />& Creativity
                  </p>
                </div>
              </div>

              <div className="space-y-2 border-t border-white/20 pt-6">
                <div className="flex justify-between text-sm">
                  <span className="opacity-70">Classes</span>
                  <span className="font-bold">10</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="opacity-70">Start</span>
                  <span className="font-bold">3rd week Oct</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="opacity-70">Schedule</span>
                  <span className="font-bold">1/week</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certification */}
          <div className="md:col-span-5 bg-amber-400 rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute top-[-20px] right-[-20px] w-32 h-32 border-4 border-black/10 rounded-full"></div>
            <div className="relative z-10">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-3xl font-black mb-3">Get Certified</h3>
              <p className="text-gray-800 leading-relaxed">
                Certificates from E-Shikhon, The Daily Star & ECB after course
                completion
              </p>
            </div>
          </div>

          {/* Registration Fee */}
          <div className="md:col-span-7 bg-gradient-to-br from-rose-500 to-orange-500 rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute bottom-[-50px] right-[-50px] text-[200px] font-black opacity-10">
              ৳
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-8">Only 249 BDT</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm opacity-80 mb-2">
                    Platform & Certificate Fee
                  </p>
                  <p className="text-lg font-semibold">
                    Get access to everything
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-bold mb-2">BONUS INCLUDED:</p>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span>IELTS Certificate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span>Japanese Language Course</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span>German Language Course</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration CTA - Full Width Statement Piece */}
        <div className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl transform rotate-1"></div>
          <div className="relative bg-gradient-to-r from-indigo-700 to-purple-700 rounded-3xl p-12 text-white transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm tracking-widest mb-4 opacity-80">
                DON'T MISS OUT
              </p>
              <h2 className="text-5xl font-black mb-6">Register Now!</h2>
              <a
                href="https://englishcarnivalbangladesh.com/registration/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-indigo-700 px-12 py-5 rounded-full text-xl font-bold hover:bg-amber-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Save Your Seat →
              </a>
              <p className="text-sm mt-6 opacity-70">
                Already registered? You're all set!
              </p>
            </div>
          </div>
        </div>

        {/* After Registration - Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-black rounded-3xl p-10">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-3xl font-black mb-6">After Registration</h3>
            <p className="text-gray-700 mb-6">Send this info via WhatsApp:</p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                <span className="font-semibold">Name</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                <span className="font-semibold">Number</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </span>
                <span className="font-semibold">Email</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </span>
                <span className="font-semibold">Ref: Fly8-Nusrat</span>
              </div>
            </div>
          </div>

          <div className="bg-green-500 rounded-3xl p-10 text-white flex flex-col justify-center items-center text-center">
            <div className="text-6xl mb-6">💬</div>
            <p className="text-sm tracking-widest mb-3 opacity-90">WHATSAPP</p>
            <a
              href="https://wa.me/8801322908309"
              className="text-5xl font-black mb-4 hover:text-green-900 transition-colors"
            >
              01322-908309
            </a>
            <p className="text-sm opacity-90">Tap to message us directly</p>
          </div>
        </div>
      </div>
    </div>
  );
}

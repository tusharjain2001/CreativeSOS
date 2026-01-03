    import React from 'react';

const CreativeSOSCTA = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className=" w-full">
          {/* Large Background Text */}
          <div className="relative mb-16">
            <h1 className="text-[120px] md:text-[180px] lg:text-[220px] font-bold text-gray-200 leading-none text-center select-none">
              The Creative SOS
            </h1>
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 -mt-32 md:-mt-40">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                alt="Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left max-w-md">
              <p className="text-2xl md:text-3xl text-gray-600 mb-2">
                Enough about me.
              </p>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Now your turn, I'll listen.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-12">
            <button className="bg-teal-600 hover:bg-teal-700 text-white text-lg font-medium px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
              Book a 30-minute fit call
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>Made with Love, by Abhishek Yadav</p>
          <p>Copyright@ 2025. All rights reserved with the owner.</p>
        </div>
      </footer>
    </div>
  );
};

export default CreativeSOSCTA;
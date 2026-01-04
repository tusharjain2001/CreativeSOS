import React from "react";
import pp from "../Images/pp.png";
import HeroLogo from "../Images/The Creative SOS.png";

const CreativeSOSCTA = () => {
  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col justify-between p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex justify-center mt-4 md:mt-8">
        <img
          src={HeroLogo}
          alt="The Creative SOS"
          loading="lazy"
          className="w-full max-w-[600px] sm:max-w-[800px] md:max-w-[1100px] h-auto object-contain opacity-95 select-none"
          style={{ pointerEvents: "none" }}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center gap-6 md:gap-8 px-4 my-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src={pp}
              alt="Profile"
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left max-w-md">
            <p className="text-xl sm:text-2xl md:text-3xl text-[#1C1D22] mb-2">
              Enough about me.
            </p>
            <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#1C1D22]">
              Now your turn, I'll listen.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-[#257D89] text-white text-base sm:text-lg font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-md hover:shadow-lg hover:bg-[#1f6770] transition-all duration-200 w-full sm:w-auto max-w-sm">
            Book a 30-minute fit call
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 border-t border-[#1C1D22] mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs sm:text-sm text-[#1C1D22]">
          <p className="text-center md:text-left">
            Made with Love, by Abhishek Yadav
          </p>
          <p className="text-center md:text-right">
            Copyright@ 2025. All rights reserved with the owner.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CreativeSOSCTA;

import React from "react";
import pp from "../Images/pp.png";

const CreativeSOSCTA = () => {
  return (
    <div className="min-h-screen bg-[#F8F8F8] justify-between p-4 flex flex-col">
      <div className="text-[120px] md:text-[180px] lg:text-[220px] font-bold text-gray-200 leading-none text-center ">
        The <span className="font-normal">Creative</span> SOS
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center gap-5">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 ">
          <div className="">
            <img
              src={pp}
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left max-w-md">
            <p className="text-2xl md:text-3xl text-[#1C1D22] mb-2">
              Enough about me.
            </p>
            <p className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#1C1D22]">
              Now your turn, I'll listen.
            </p>
          </div>
        </div>
        <div className="flex justify-center ">
          <button className="bg-[#257D89] text-white text-lg font-medium px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
            Book a 30-minute fit call
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#1C1D22]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#1C1D22]">
          <p>Made with Love, by Abhishek Yadav</p>
          <p>Copyright@ 2025. All rights reserved with the owner.</p>
        </div>
      </footer>
    </div>
  );
};

export default CreativeSOSCTA;

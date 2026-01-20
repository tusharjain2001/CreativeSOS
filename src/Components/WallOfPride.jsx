import React from "react";
import Pride1 from "../Images/Pride1.png";
import Pride2 from "../Images/Pride2.png";
import Pride3 from "../Images/Pride3.png";
import Pride4 from "../Images/Pride4.png";
import Pride5 from "../Images/Pride5.png";
import Pride6 from "../Images/Pride6.png";
import WallPride from "../Images/WallPride.png";

const WallOfPride = () => {
  return (
    // Updated background to a deeper black-gray to match the screenshot exactly
    <div className="min-h-screen bg-[#111214] py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header - Increased size and font weight */}
        <h1 className="text-6xl md:text-8xl font-bold text-white text-center mb-16 tracking-tight">
          The Wall of Pride
        </h1>

        {/* Testimonials Grid - Desktop View */}
        <div className="hidden md:block mb-16">
          <img
            src={WallPride}
            alt="Wall of Pride"
            className="w-full h-auto object-contain rounded-3xl shadow-lg"
          />
        </div>

        {/* Testimonials Grid - Mobile View */}
        <div className="md:hidden grid grid-cols-1 gap-2 mb-16">
          {/* Column 1 */}
          <div className="flex flex-col gap-2">
            <img
              src={Pride1}
              alt="Testimonial 1"
              className="w-full h-auto object-contain"
            />
            <img
              src={Pride4}
              alt="Testimonial 4"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2">
            <img
              src={Pride2}
              alt="Testimonial 2"
              className="w-full h-auto object-contain"
            />
            <img
              src={Pride5}
              alt="Testimonial 5"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-2">
            <img
              src={Pride3}
              alt="Testimonial 3"
              className="w-full h-auto object-contain"
            />
            <img
              src={Pride6}
              alt="Testimonial 6"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pb-10">
          <p className="text-white text-2xl font-semibold opacity-90 italic">
            And Many more...
          </p>
        </div>
      </div>
    </div>
  );
};

export default WallOfPride;

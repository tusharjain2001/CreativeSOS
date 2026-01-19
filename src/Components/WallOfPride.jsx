import React from "react";
import Pride1 from "../Images/Pride1.png";
import Pride2 from "../Images/Pride2.png";
import Pride3 from "../Images/Pride3.png";
import Pride4 from "../Images/Pride4.png";
import Pride5 from "../Images/Pride5.png";
import Pride6 from "../Images/Pride6.png";

const WallOfPride = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          The Wall of Pride
        </h1>

        {/* Testimonials Grid - 3 Column Layout with Stacked Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <img
              src={Pride1}
              alt="Testimonial 1"
              className="w-full rounded-3xl shadow-lg "
            />
            <img
              src={Pride4}
              alt="Testimonial 4"
              className="w-full rounded-3xl shadow-lg "
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <img
              src={Pride2}
              alt="Testimonial 2"
              className="w-[380px] rounded-3xl shadow-lg "
            />
            <img
              src={Pride5}
              alt="Testimonial 5"
              className="w-[380px] rounded-3xl shadow-lg "
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col  gap-6">
            <img
              src={Pride3}
              alt="Testimonial 3"
              className="w-full  rounded-3xl shadow-lg "
            />
            <img
              src={Pride6}
              alt="Testimonial 6"
              className="w-full rounded-3xl shadow-lg "
            />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-white text-xl font-medium">And Many more...</p>
        </div>
      </div>
    </div>
  );
};

export default WallOfPride;

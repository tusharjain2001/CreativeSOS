import React from "react";
import Rectangle1 from "../Images/Rectangle1.png";
import Rectangle2 from "../Images/Rectangle2.png";
import Rectangle3 from "../Images/Rectangle3.png";
import Rectangle4 from "../Images/Rectangle4.png";
import Rectangle5 from "../Images/Rectangle5.png";
import Rectangle6 from "../Images/Rectangle6.png";
import Rectangle7 from "../Images/Rectangle7.png";
import Rectangle8 from "../Images/Rectangle8.png";
import Rectangle9 from "../Images/Rectangle9.png";

export default function YouAndI() {
  const items = [
    {
      you: "YOU are tired of creative being a constant pain.",
      image: Rectangle1,
      i: "I work directly with CMOs/Founders/Marketing Leaders as your Creative Partner.",
    },
    {
      you: "YOU have wasted hours chasing freelancers or agencies & still do not get leadership-level thinking.",
      image: Rectangle2,
      i: "I, as your Creative Partner, am your single point of contact for creative strategy and direction.",
    },
    {
      you: "YOU prefer accountability over coordination.",
      image: Rectangle3,
      i: "I help you shape campaigns, narratives, and brand experiences that move pipeline.",
    },
    {
      you: "YOU want a creative partner who speaks marketing.",
      image: Rectangle4,
      i: "I sit inside your Slack, MS Teams, or preferred communication platform embedded in your daily workflow.",
    },
    {
      you: "YOU just want someone who understands your needs and delivers.",
      image: Rectangle5,
      i: "I handle execution end-to-end with my full-stack creative team under my supervision.",
    },
    {
      you: "YOU need one embedded creative resource, not a disconnected/sparse vendor list.",
      image: Rectangle6,
      i: "I prioritize your unlimited requests and deliver them parallel with clear turnaround.",
    },
    {
      you: "YOU need clear, predictable billing.",
      image: Rectangle7,
      i: "I work on a flat hourly retainer - predictable, transparent, & no scope creep.",
    },
    {
      you: "YOU need creative that scales with your workflow — long-term, fractional, or on-demand.",
      image: Rectangle8,
      i: "I offer three models — Partner, SPOC, and SOS — built for consistency, clarity, and speed.",
    },
    {
      you: "YOU want both creative leadership and reliable execution without juggling agencies.",
      image: Rectangle9,
      i: "I bring strategy, structure, and a full-stack creative team that delivers on-brand work every time.",
    },
  ];

  return (
    <div className="bg-gray-50 py-4 md:py-12 px-4 md:px-8">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="hidden md:flex items-center justify-between mb-8 pb-6 border-b-2 border-blue-300">
          <div className="text-left flex-1">
            <p className="text-[48px] font-light text-gray-800">
              You <span className="font-light">don't worry,</span>
            </p>
          </div>
          <div className="flex-1"></div>
          <div className="text-right flex-1">
            <p className="text-[48px] font-light  text-gray-800">
              <span className="font-light">as</span> I{" "}
              <span className="font-bold">solve...</span>
            </p>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden mb-6 pb-4 border-b-2 border-blue-300 flex justify-center">
          <div className="w-full max-w-xs">
            <p className="text-lg font-light text-gray-800 text-left leading-tight">
              You don&apos;t worry,
            </p>
            <p className="text-lg font-light text-gray-800 text-right leading-tight">
              as I <span className="font-bold">solve...</span>
            </p>
          </div>
        </div>

        {/* Desktop Grid - Three Columns */}
        <div className="hidden md:block space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[0.75fr_auto_1.25fr] gap-6 items-center overflow-hidden"
            >
              {/* Left Column - YOU Statement */}
              <div className="bg-[#F5DEDC] p-6 h-full flex items-center font-family-instrument">
                <p className="text-gray-700 text-[24px] font-medium leading-relaxed">
                  <span className="font-bold text-gray-900">YOU</span>{" "}
                  {item.you.replace(/^YOU /, "")}
                </p>
              </div>

              {/* Middle Column - Image */}
              <div className="bg-teal-600 w-40 h-40 flex items-center justify-center overflow-hidden rounded">
                <img
                  src={item.image}
                  alt={`Item ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML =
                      '<div class="text-white text-center text-sm">Image</div>';
                  }}
                />
              </div>

              {/* Right Column - I Statement */}
              <div className="bg-[#6BC6D366] p-6 h-full flex items-center">
                <p className="text-gray-700 text-[24px] font-medium leading-relaxed">
                  <span className="font-bold text-gray-900">I</span>{" "}
                  {item.i.replace(/^I /, "")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Stack - Two Columns */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-4">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                {/* YOU Statement */}
                <div className="bg-[#F5DEDC] p-4 rounded">
                  <p className="text-gray-700 text-sm font-medium leading-relaxed">
                    <span className="font-bold text-gray-900">YOU</span>{" "}
                    {item.you.replace(/^YOU /, "")}
                  </p>
                </div>

                {/* I Statement */}
                <div className="bg-[#6BC6D366] p-4 rounded">
                  <p className="text-gray-700 text-sm font-medium leading-relaxed">
                    <span className="font-bold text-gray-900">I</span>{" "}
                    {item.i.replace(/^I /, "")}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
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

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-gray-50 py-4 md:py-12 px-4 md:px-8 overflow-hidden">
      <style>{`
        .image-container {
          width: 160px;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .image-container.collapsed {
          width: 0;
          opacity: 0;
        }
        
        .image-container.expanded {
          width: 160px;
          opacity: 1;
        }
        
        .image-inner {
          width: 160px;
          height: 160px;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
        }
        
        .image-container.expanded .image-inner {
          transform: scale(1);
        }
        
        .image-container.collapsed .image-inner {
          transform: scale(0.8);
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .left-card {
          flex: 1;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .left-card.shrink {
          flex: 0.7;
        }

        .mobile-image {
          height: 80px;
          width: 100%;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .mobile-image.collapsed {
          height: 0;
          opacity: 0;
          margin: 0;
        }

        .mobile-image.expanded {
          height: 80px;
          opacity: 1;
          margin-top: 8px;
        }
      `}</style>

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
            <p className="text-[48px] font-light text-gray-800">
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
        <div className="hidden md:block space-y-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 items-center overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Left Column - YOU Statement */}
              <div
                className={`bg-[#F5DEDC] p-6 h-40 flex items-center font-family-instrument  card-hover left-card ${
                  hoveredIndex === index ? "shrink" : ""
                }`}
              >
                <p className="text-gray-700 text-[24px] font-medium leading-relaxed">
                  <span className="font-bold text-gray-900">YOU</span>{" "}
                  {item.you.replace(/^YOU /, "")}
                </p>
              </div>

              {/* Middle Column - Image */}
              <div
                className={`image-container ${
                  hoveredIndex === index ? "expanded" : "collapsed"
                }`}
              >
                <div className="image-inner flex items-center justify-center overflow-hidden ">
                  <img
                    src={item.image}
                    alt={`Item ${index + 1}`}
                    className="w-44 h-48 object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML =
                        '<div class="text-white text-center text-sm">Image</div>';
                    }}
                  />
                </div>
              </div>

              {/* Right Column - I Statement */}
              <div className="bg-[#6BC6D366] p-6 flex-1 h-40 flex items-center  card-hover">
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
                <div
                  className="bg-[#F5DEDC] p-4 rounded-lg card-hover"
                  onTouchStart={() => setHoveredIndex(index)}
                  onTouchEnd={() => setHoveredIndex(null)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <p className="text-gray-700 text-sm font-medium leading-relaxed">
                    <span className="font-bold text-gray-900">YOU</span>{" "}
                    {item.you.replace(/^YOU /, "")}
                  </p>
                  <div
                    className={`mobile-image ${
                      hoveredIndex === index ? "expanded" : "collapsed"
                    }`}
                  >
                    <div className="bg-gradient-to-br from-teal-500 to-teal-700 w-full h-full flex items-center justify-center overflow-hidden rounded">
                      <img
                        src={item.image}
                        alt={`Item ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML =
                            '<div class="text-white text-center text-xs">Image</div>';
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* I Statement */}
                <div className="bg-[#6BC6D366] p-4 rounded-lg card-hover">
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

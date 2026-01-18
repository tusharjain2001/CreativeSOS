import React, { useState } from "react";

// Add your image imports here
import sone from "../Images/sone.png";
import stwo from "../Images/stwo.png";
import sthree from "../Images/sthree.png";
import eone from "../Images/eone.png";
import etwo from "../Images/etwo.png";
import ethree from "../Images/ethree.png";
import ytag from "../Images/ytag.png";
import otag from "../Images/otag.png";
import greentick from "../Images/greentick.png";

const PricingTabs = () => {
  const [activeTab, setActiveTab] = useState("partner");
  const [prevTab, setPrevTab] = useState("partner");
  const [slideDirection, setSlideDirection] = useState("right");

  const handleTabChange = (newTab) => {
    const tabOrder = ["partner", "spoc", "sos"];
    const currentIndex = tabOrder.indexOf(activeTab);
    const newIndex = tabOrder.indexOf(newTab);

    if (newIndex > currentIndex) {
      setSlideDirection("left");
    } else {
      setSlideDirection("right");
    }

    setPrevTab(activeTab);
    setActiveTab(newTab);
  };

  const tabs = [
    {
      key: "partner",
      label: "Creative Partner",
      icon: sone,
      activeIcon: eone,
    },
    {
      key: "spoc",
      label: "Creative SPOC",
      icon: stwo,
      activeIcon: etwo,
    },
    {
      key: "sos",
      label: "Creative SOS",
      icon: sthree,
      activeIcon: ethree,
    },
  ];

  const tabData = {
    partner: {
      title:
        '"Your embedded creative team with my leadership on subscription."',
      price: "$40",
      badge: "Execution Core",
      features: [
        {
          text: "Direct access to me in your inbox, Slack, or MS Team.",
          highlight: "Direct access",
        },
        {
          text: "My full-stack creative team under my supervision.",
          highlight: "full-stack creative team",
        },
        {
          text: "ASAP turnaround with clear priority handling.",
          highlight: "clear priority",
        },
        { text: "Weekly Progress Requests.", highlight: "Weekly Progress" },
        {
          text: "No scope creep — unlimited requests.",
          highlight: "unlimited requests",
        },
        {
          text: "You get a simple google sheet with real-time tracking",
          highlight: "real-time tracking",
        },
      ],
    },
    spoc: {
      title:
        '"Everything in Creative Partner — plus creative leadership & ownership."',
      price: "$45",
      badge: "Leadership + Management",
      features: [
        {
          text: "Direct access to me in your inbox, Slack, or MS Team.",
          highlight: "Direct access",
        },
        {
          text: "My full-stack creative team under my supervision.",
          highlight: "full-stack creative team",
        },
        {
          text: "ASAP turnaround with clear priority handling.",
          highlight: "clear priority",
        },
        { text: "Weekly Progress Requests.", highlight: "Weekly Progress" },
        {
          text: "No scope creep — unlimited requests.",
          highlight: "unlimited requests",
        },
        {
          text: "Brand & asset library management.",
          highlight: "Brand & asset library",
        },
        {
          text: "Vendor & production coordination.",
          highlight: "Vendor & production",
        },
        {
          text: "Participation in internal or client-facing meetings.",
          highlight: "internal or client-facing",
        },
        {
          text: "Weekly or daily creative reviews.",
          highlight: "Weekly or daily",
        },
        {
          text: "Strategic alignment with your business & marketing goals.",
          highlight: "business & marketing goals",
        },
        {
          text: "You get a simple google sheet with real-time tracking",
          highlight: "real-time tracking",
        },
      ],
    },
    sos: {
      title: '"Your emergency creative lane — fast, fearless and predictable."',
      price: "$55",
      badge: "Urgent Turnaround",
      features: [
        {
          text: "Direct access to me in your inbox, Slack, or MS Team.",
          highlight: "Direct access",
        },
        {
          text: "My full-stack creative team under my supervision.",
          highlight: "full-stack creative team",
        },
        {
          text: "24-72 hours Delivery Promise with clear priority handling.",
          highlight: "clear priority",
        },
        { text: "Weekly Progress Requests.", highlight: "Weekly Progress" },
        {
          text: "No scope creep — unlimited requests.",
          highlight: "unlimited requests",
        },
        {
          text: "You get a simple google sheet with real-time tracking",
          highlight: "real-time tracking",
        },
      ],
    },
  };

  const currentData = tabData[activeTab];

  const highlightText = (text, highlight) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <strong key={index} className="font-semibold text-gray-900">
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  const slideInClass = slideDirection === "left" ? "animate-slideInLeft" : "animate-slideInRight";

  const style = `
    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(60px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(-60px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .animate-slideInLeft {
      animation: slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .animate-slideInRight {
      animation: slideInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .slide-container {
      position: relative;
      overflow: hidden;
    }
  `;

  return (
    <>
      <style>{style}</style>
    <div className="min-h-screen bg-[#F8F8F8] py-8 sm:py-12 lg:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Header Badge */}
          <div className="text-center mb-4">
            <span className="inline-block bg-[#C5EBF0] text-[#1E8898] px-4 py-1.5  text-xs font-medium">
              Let's Talk Money!
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-xl font-bold text-center text-gray-900 mb-3 px-2 leading-tight">
            Three Ways to Work with Me!
          </h1>

          {/* Subtitle */}
          <p className="text-center text-gray-700 text-xs leading-relaxed px-4 mb-6">
            No retainers. No vague estimates. Just a flat hourly model with full
            creative coverage. You know exactly what you're paying and how long
            things take — before we even start.
          </p>

          {/* Tab Icons */}
          <div className="flex justify-center gap-8 mb-6">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key)}
                  className="flex flex-col items-center"
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-[#C5EBF0]"
                        : "bg-white "
                    }`}
                  >
                    <img
                      src={isActive ? tab.activeIcon : tab.icon}
                      alt={tab.label}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Label */}
          <h3 className="text-center text-base font-bold text-black mb-6">
            {tabs.find((tab) => tab.key === activeTab)?.label}
          </h3>

          {/* Title Quote */}
          <h2 className="text-sm text-center mb-6 text-[#1E8898] font-normal px-2 leading-relaxed">
            {currentData.title}
          </h2>

          {/* Pricing Card */}
          <div className="w-full max-w-sm mx-auto mb-6 slide-container">
            <div key={activeTab} className={`border-t-4 border-[#6BC6D4] shadow-md rounded-sm bg-white ${slideInClass}`}>
              <div className="p-5">
                <div className="mb-5 text-center">
                  <div className="text-5xl font-bold text-gray-900">
                    {currentData.price}
                    <span className="text-2xl font-bold">/hr</span>
                  </div>
                </div>

                <div className="bg-[#BFECF4] text-gray-900 text-center py-2.5 px-4 rounded-sm mb-5 font-medium text-sm">
                  {currentData.badge}
                </div>

                <div className="flex gap-2">
                  <div className="bg-[#FEF6CD] px-2 py-3 rounded-sm flex-1">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <span className="text-xs font-semibold text-gray-900">
                        10% off
                      </span>
                      <img src={ytag} alt="" className="w-3 h-3" />
                    </div>
                    <div className="text-[10px] text-center text-[#9F8400]">
                      on 50+ Hours
                    </div>
                  </div>
                  <div className="bg-[#FFE7BC] px-2 py-3 rounded-sm flex-1">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <span className="text-xs font-semibold text-gray-900">
                        20% off
                      </span>
                      <img src={otag} alt="" className="w-3 h-3" />
                    </div>
                    <div className="text-[10px] text-center text-[#9A5F00]">
                      on 100+ Hours
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div key={`features-${activeTab}`} className={`max-w-sm mx-auto mb-8 slide-container ${slideInClass}`}>
            <div className="space-y-3">
              {currentData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="flex-shrink-0 mt-0.5">
                    <img src={greentick} alt="" className="w-4 h-4" />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-xs">
                    {highlightText(feature.text, feature.highlight)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center max-w-sm mx-auto">
            <p className="text-gray-700 mb-4 leading-relaxed text-xs">
              Get a clear, upfront estimate of how many hours your project will
              require before we begin.
            </p>
            <button className="bg-[#257D89] hover:bg-[#1f6a74] text-white font-medium px-6 py-2.5 rounded-md transition-colors text-sm w-full">
              See Your Estimated Hours
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Header Badge */}
          <div className="text-center mb-6">
            <span className="inline-block bg-[#C5EBF0] text-[#1E8898] px-5 py-2 rounded-md text-sm font-medium">
              Let's Talk Money!
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl xl:text-5xl font-bold text-center text-gray-900 mb-6">
            Three Ways to Work with Me!
          </h1>

          {/* Subtitle */}
          <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
            No retainers. No vague estimates. Just a flat hourly model with full
            creative coverage.
            <br />
            You know exactly what you're paying and how long things take —
            before we even start.
          </p>

          {/* Tabs */}
          <div className="flex justify-center mb-12 border-b border-gray-300 overflow-x-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key)}
                  className={`flex items-center gap-2 px-8 py-3 font-medium transition-all relative whitespace-nowrap
                    ${
                      isActive
                        ? "text-[#1E8898]"
                        : "text-gray-500 hover:text-gray-700"
                    }
                  `}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-[#C5EBF0] opacity-20 rounded-t-lg" />
                  )}
                  <img
                    src={isActive ? tab.activeIcon : tab.icon}
                    alt={tab.label}
                    className="w-5 h-5 object-contain relative"
                  />
                  <span className="relative text-black">{tab.label}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1E8898]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div key={`desktop-${activeTab}`} className={`rounded-lg px-8 py-10 slide-container ${slideInClass}`}>
            {/* Title Quote */}
            <h2 className="text-2xl text-center mb-16 text-[#1E8898] font-normal">
              {currentData.title}
            </h2>

            <div className="flex gap-12 items-start justify-center max-w-5xl mx-auto">
              {/* Pricing Card */}
              <div className="w-72 flex-shrink-0">
                <div className="border-t-4 border-[#6BC6D4] shadow-md rounded-sm bg-white">
                  <div className="p-6">
                    <div className="mb-6">
                      <div className="text-5xl font-bold text-gray-900">
                        {currentData.price}
                        <span className="text-2xl font-bold">/hr</span>
                      </div>
                    </div>

                    <div className="bg-[#BFECF4] text-gray-900 text-center py-2.5 px-4 rounded-sm mb-6 font-medium">
                      {currentData.badge}
                    </div>

                    <div className="flex gap-3">
                      <div className="bg-[#FEF6CD] px-3 py-3 rounded-sm flex-1">
                        <div className="flex items-center justify-center gap-1.5 mb-1">
                          <span className="text-sm font-semibold text-gray-900">
                            10% off
                          </span>
                          <img src={ytag} alt="" className="w-4 h-4" />
                        </div>
                        <div className="text-xs text-center text-[#9F8400]">
                          on 50+ Hours
                        </div>
                      </div>
                      <div className="bg-[#FFE7BC] px-3 py-3 rounded-sm flex-1">
                        <div className="flex items-center justify-center gap-1.5 mb-1">
                          <span className="text-sm font-semibold text-gray-900">
                            20% off
                          </span>
                          <img src={otag} alt="" className="w-4 h-4" />
                        </div>
                        <div className="text-xs text-center text-[#9A5F00]">
                          on 100+ Hours
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="flex-1 max-w-xl">
                <div className="space-y-5">
                  {currentData.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <img src={greentick} alt="" className="w-5 h-5" />
                      </div>
                      <p className="text-gray-700 leading-relaxed text-base">
                        {highlightText(feature.text, feature.highlight)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16 pt-8 border-t border-gray-200">
              <p className="text-gray-700 mb-5 leading-relaxed">
                Get a clear, upfront estimate of how many hours
                <br />
                your project will require before we begin.
              </p>
              <button className="bg-[#257D89] hover:bg-[#1f6a74] text-white font-medium px-8 py-3 rounded-md transition-colors">
                See Your Estimated Hours
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PricingTabs;

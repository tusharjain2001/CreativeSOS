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
      title: '"Your embedded creative team with my leadership on subscription."',
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
      title: '"Everything in Creative Partner — plus creative leadership & ownership."',
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

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Badge */}
        <div className="text-center mb-6">
          <span className="inline-block bg-[#C5EBF0] text-[#1E8898] px-5 py-2 rounded-md text-sm font-medium">
            Let's Talk Money!
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6">
          Three Ways to Work with Me!
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-700 text-base lg:text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          No retainers. No vague estimates. Just a flat hourly model with full creative coverage.
          <br />
          You know exactly what you're paying and how long things take — before we even start.
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-12 border-b border-gray-300">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-8 py-3 font-medium transition-all relative
                  ${isActive ? "text-[#1E8898]" : "text-gray-500 hover:text-gray-700"}
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
                <span className="relative">{tab.label}</span>
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1E8898]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg px-8 py-10">
          {/* Title Quote */}
          <h2 className="text-xl lg:text-2xl text-center mb-16 text-[#1E8898] font-normal">
            {currentData.title}
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 items-start justify-center max-w-5xl mx-auto">
            {/* Left Column - Pricing Card */}
            <div className="w-full lg:w-72 flex-shrink-0">
              <div className="border-t-4 border-[#6BC6D4] bg-white shadow-md rounded-sm">
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
                        <span className="text-sm font-semibold text-gray-900">10% off</span>
                        <span className="text-lg"> <img src={ytag} alt="" className="w-4 h-4" /> </span>
                      </div>
                      <div className="text-xs text-center text-[#9F8400]">on 50+ Hours</div>
                    </div>
                    <div className="bg-[#FFE7BC] px-3 py-3 rounded-sm flex-1">
                      <div className="flex items-center justify-center gap-1.5 mb-1">
                        <span className="text-sm font-semibold text-gray-900">20% off</span>
                        <span className="text-lg"><img src={otag} alt="" className="w-4 h-4" /></span>
                      </div>
                      <div className="text-xs text-center text-[#9A5F00]">on 100+ Hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Features */}
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
  );
};

export default PricingTabs;
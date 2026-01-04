import React, { useState } from "react";
import { FiUsers, FiStar, FiZap } from "react-icons/fi";
import { HiUsers, HiStar, HiLightningBolt } from "react-icons/hi";
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
      title:
        '"Your embedded creative team with my leadership on subscription."',
      titleColor: "text-[#1E8898]",
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
      titleColor: "text-[#1E8898]",
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
      titleColor: "text-[#1E8898]",
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
        <strong key={index} className="font-semibold">
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Badge */}
        <div className="text-center mb-8">
          <span className="inline-block bg-[#C5EBF0] text-[#1E8898] px-4 py-2 rounded text-sm font-family-instrument ">
            Let's Talk Money!
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#1C1D22] mb-4">
          Three Ways to Work with Me!
        </h1>

        {/* Subtitle */}
        <p className="text-center text-[#1C1D22] max-w-2xl mx-auto mb-12 leading-relaxed">
          No retainers. No vague estimates. Just a flat hourly model with full
          creative coverage.
          <br />
          You know exactly what you're paying and how long things take — before
          we even start.
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-8 border-b border-gray-300">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-3 px-6 py-3 font-medium transition-all
          ${
            isActive
              ? "text-cyan-600 border-b-2 border-cyan-600 bg-[#6BC6D329]"
              : "text-gray-500 hover:text-gray-700"
          }
        `}
              >
                <img
                  src={isActive ? tab.activeIcon : tab.icon}
                  alt={tab.label}
                  className="w-5 h-5 object-contain"
                />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          {/* Title Quote */}
          <h2
            className={`text-xl md:text-2xl text-center mb-12 ${currentData.titleColor} `}
          >
            {currentData.title}
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column - Pricing */}
            <div className="md:w-1/3">
              <div className="border-t-4 border-[#6BC6D4] pt-6">
                <div className="text-5xl font-bold text-[#1C1D22] mb-2">
                  {currentData.price}
                  <span className="text-2xl">/hr</span>
                </div>

                <div className="bg-[#BFECF4] text-[#1C1D22] text-center py-2 px-4 rounded mt-4 font-medium">
                  {currentData.badge}
                </div>

                <div className="flex gap-2 mt-6">
                  <div className="bg-[#FEF6CD] text-[#1C1D22] px-3 py-2 rounded text-sm font-medium flex-1 text-center">
                    <div className="flex gap-2">
                      10% off <img src={ytag} />
                    </div>
                    <span className="text-xs text-[#9F8400]">on 50+ Hours</span>
                  </div>
                  <div className="bg-[#FFE7BC] text-[#1C1D22] px-3 py-2 rounded text-sm font-medium flex-1 text-center">
                    <div className="flex gap-2">
                      20% off <img src={otag} />
                    </div>
                    <span className="text-xs text-[#9A5F00]">
                      on 100+ Hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="md:w-2/3">
              <div className="space-y-4">
                {currentData.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <img src={greentick} />
                    <p className="text-gray-700 leading-relaxed">
                      {highlightText(feature.text, feature.highlight)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-[#1C1D22] mb-4">
              Get a clear, upfront estimate of how many hours
              <br />
              your project will require before we begin.
            </p>
            <button className="bg-[#257D89] text-white font-medium px-8 py-3 rounded transition-colors">
              See your Estimated Hours
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTabs;

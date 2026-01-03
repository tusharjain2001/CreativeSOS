import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProjectPlaceholder from "../Images/Rectangle1.png";

export default function Projects() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const projectData = {
    "brand-refresh": {
      title: "Brand Refresh — Acme Co.",
      tagline: "/overview",
      bannerText: "Banner / Showreel",
      description:
        "Revamp the existing website into a modern, visually appealing, product-like AI website while maintaining simplicity for smooth web development. The goal is to elevate the brand from a typical IT services look to a premium AI product platform with clean UI, strong structure, and minimal animations.",
      industry: "AI Industrial Automation",
      client: "Safe Sight",
      deliverables: "Responsive Website Design",
      steps: [
        "01. Project Overview",
        "02. Scope of the Project",
        "03. Brand Identity",
        "04. Our Process",
        "05. System Design",
        "06. Design Details",
        "07. Responsive Design",
      ],
    },
    "demand-gen": {
      title: "Demand Gen Campaign",
      tagline: "/campaign",
      bannerText: "Banner / Campaign Assets",
      description:
        "Created a high-impact demand generation campaign across multiple channels including paid ads, email sequences, and landing pages. Focused on clear messaging and strong CTAs to drive qualified leads.",
      industry: "B2B SaaS",
      client: "Tech Startup",
      deliverables: "Ad Creative, Email Templates, Landing Pages",
      steps: [
        "01. Campaign Strategy",
        "02. Audience Research",
        "03. Creative Direction",
        "04. Asset Production",
        "05. Ad Variations",
        "06. Email Sequences",
        "07. Campaign Launch",
      ],
    },
    "product-launch": {
      title: "Product Launch Teasers",
      tagline: "/launch",
      bannerText: "Banner / Video Assets",
      description:
        "Designed short-form video assets and motion UI elements to build anticipation for a major product launch. Included teaser videos, animated social graphics, and interactive web components.",
      industry: "Consumer Tech",
      client: "Product Company",
      deliverables: "Video Assets, Motion UI, Social Graphics",
      steps: [
        "01. Launch Planning",
        "02. Storyboarding",
        "03. Video Production",
        "04. Motion Design",
        "05. Social Assets",
        "06. Web Integration",
        "07. Launch Execution",
      ],
    },
  };

  const project = projectData[id] || projectData["brand-refresh"];

  return (
    <section className="bg-white min-h-screen">
      <div className="flex h-screen overflow-hidden">
        {/* Left Sidebar */}
        <div
          className={`bg-white border-r border-gray-200 p-6 overflow-y-auto transition-all duration-300 ${
            sidebarOpen ? "w-64" : "w-16"
          }`}
        >
          {/* Toggle Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-6 h-6 flex items-center justify-center mb-6 text-teal-600 hover:bg-gray-100 rounded transition-colors"
            aria-label="Toggle sidebar"
          >
            <svg
              className={`w-5 h-5 transition-transform ${
                sidebarOpen ? "" : "rotate-180"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {sidebarOpen && (
            <>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">
                    UI/UX
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    Industry Name
                  </span>
                </div>
              </div>

              <nav className="space-y-4">
                {project.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <button
                      onClick={() => {}}
                      className={`text-sm font-medium transition-colors ${
                        idx === 0
                          ? "text-teal-600"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {step}
                    </button>
                  </div>
                ))}
              </nav>
            </>
          )}

          {!sidebarOpen && (
            <div className="flex flex-col items-center gap-3">
              {project.steps.map((step, idx) => (
                <div key={idx} className="flex justify-center">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      idx === 0 ? "bg-teal-600" : "bg-gray-300"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8">
            {/* Banner Area */}
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-8 border border-gray-200">
              <p className="text-gray-400 text-lg">{project.bannerText}</p>
            </div>

            {/* Project Title and Description */}
            <div className="mb-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {project.title}
                <span className="text-sm text-gray-500 ml-2 font-light">
                  {project.tagline}
                </span>
              </h1>

              <p className="text-gray-700 leading-relaxed max-w-3xl mt-4">
                {project.description}
              </p>
            </div>

            {/* Additional sections can go here */}
            <div className="h-40 bg-gray-50 rounded border border-gray-200 flex items-center justify-center">
              <p className="text-gray-400">Additional project content</p>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
      </div>
    </section>
  );
}

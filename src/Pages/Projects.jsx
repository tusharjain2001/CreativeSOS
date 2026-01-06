import React, { useState } from "react";

// Section Components
const ProjectOverview = ({ project }) => (
  <div>
    <div className="border border-gray-200 rounded-xl h-[420px] flex items-center justify-center mb-10 bg-white">
      <p className="text-gray-400 text-lg">{project.bannerText}</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2">
        <h1 className="text-4xl font-semibold text-gray-900 mb-2">
          {project.title}
          <span className="text-base text-gray-500 ml-2 font-normal">
            {project.tagline}
          </span>
        </h1>
        <p className="text-gray-700 leading-relaxed max-w-2xl mt-6">
          {project.description}
        </p>
      </div>

      <div className="border-l border-gray-200 pl-8 space-y-6">
        <div>
          <p className="text-sm text-gray-400">Industry</p>
          <p className="text-gray-800 font-medium">{project.industry}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Client</p>
          <p className="text-gray-800 font-medium">{project.client}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Deliverables</p>
          <p className="text-gray-800 font-medium">{project.deliverables}</p>
        </div>
      </div>
    </div>
  </div>
);

const ScopeOfProject = ({ project }) => (
  <div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="bg-teal-50 rounded-lg h-48 mb-4 flex items-center justify-center">
          <p className="text-gray-400">Image Placeholder</p>
        </div>
        <h3 className="text-xl font-semibold mb-2">Client's Goal</h3>
        <p className="text-gray-600 text-sm mb-4">
          Revamp the existing website into a modern, visually appealing
        </p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Pointer 1</li>
          <li>• Pointer 2</li>
          <li>• Pointer 3</li>
          <li>• Pointer 4</li>
          <li>• Pointer 5</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="bg-teal-50 rounded-lg h-48 mb-4 flex items-center justify-center">
          <p className="text-gray-400">Image Placeholder</p>
        </div>
        <h3 className="text-xl font-semibold mb-2">Target Audience</h3>
        <p className="text-gray-600 text-sm mb-4">
          Revamp the existing website into a modern, visually appealing
        </p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Pointer 1</li>
          <li>• Pointer 2</li>
          <li>• Pointer 3</li>
          <li>• Pointer 4</li>
          <li>• Pointer 5</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="bg-teal-50 rounded-lg h-48 mb-4 flex items-center justify-center">
          <p className="text-gray-400">Image Placeholder</p>
        </div>
        <h3 className="text-xl font-semibold mb-2">Constraints</h3>
        <p className="text-gray-600 text-sm mb-4">
          Revamp the existing website into a modern, visually appealing
        </p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Pointer 1</li>
          <li>• Pointer 2</li>
          <li>• Pointer 3</li>
          <li>• Pointer 4</li>
          <li>• Pointer 5</li>
        </ul>
      </div>
    </div>
  </div>
);

const BrandIdentity = ({ project }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-10">
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center">
          <svg
            className="w-10 h-10 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Safe-Sight.Ai</h2>
          <p className="text-teal-600 text-sm">Your Safety Mate</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-12">
      <div>
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-2">Header Font</p>
          <h3 className="text-lg font-semibold mb-4">Square 721</h3>
          <div className="text-5xl font-bold mb-2">Aa123</div>
          <p className="text-sm text-gray-600">
            The quick brown fox jumps over the lazy dog
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-2">Body Font</p>
          <h3 className="text-lg font-semibold mb-4">Helvetica Neue</h3>
          <div className="text-5xl mb-2">Aa123</div>
          <p className="text-sm text-gray-600">
            The quick brown fox jumps over the lazy dog
          </p>
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-4">Color Palette</p>
        <div className="flex gap-0 h-64">
          <div className="flex-1 bg-teal-100"></div>
          <div className="flex-1 bg-teal-500"></div>
          <div className="flex-1 bg-yellow-400"></div>
          <div className="flex-1 bg-blue-900"></div>
          <div className="flex-1 bg-black"></div>
        </div>
      </div>
    </div>
  </div>
);

const OurProcess = ({ project }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-10">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Process</h2>
    <div className="space-y-6">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="border-l-4 border-teal-500 pl-6 py-4">
          <h3 className="text-xl font-semibold mb-2">Step {step}</h3>
          <p className="text-gray-600">
            Description of the process step and what was accomplished during
            this phase.
          </p>
        </div>
      ))}
    </div>
  </div>
);

const SystemDesign = ({ project }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-10">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">System Design</h2>
    <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
      <p className="text-gray-400 text-lg">System Architecture Diagram</p>
    </div>
  </div>
);

const DesignDetails = ({ project }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-10">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Design Details</h2>
    <div className="grid grid-cols-2 gap-6">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="bg-gray-100 rounded-lg h-64 flex items-center justify-center"
        >
          <p className="text-gray-400">Design Element {item}</p>
        </div>
      ))}
    </div>
  </div>
);

const ResponsiveDesign = ({ project }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-10">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Responsive Design</h2>
    <div className="flex gap-6 justify-center">
      <div className="bg-gray-100 rounded-lg w-64 h-96 flex items-center justify-center">
        <p className="text-gray-400">Mobile</p>
      </div>
      <div className="bg-gray-100 rounded-lg w-80 h-96 flex items-center justify-center">
        <p className="text-gray-400">Tablet</p>
      </div>
      <div className="bg-gray-100 rounded-lg flex-1 h-96 flex items-center justify-center">
        <p className="text-gray-400">Desktop</p>
      </div>
    </div>
  </div>
);

// Main Component
export default function Projects() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  const project = {
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
  };

  // Map sections to components
  const sections = [
    <ProjectOverview project={project} />,
    <ScopeOfProject project={project} />,
    <BrandIdentity project={project} />,
    <OurProcess project={project} />,
    <SystemDesign project={project} />,
    <DesignDetails project={project} />,
    <ResponsiveDesign project={project} />,
  ];

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
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">
                    UI/UX
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    Industry Name
                  </span>
                </div>
              </div>

              <nav className="space-y-0">
                {project.steps.map((step, idx) => (
                  <div key={idx} className="relative">
                    {/* Highlight box for active item */}
                    {idx === activeStep && (
                      <div className="absolute inset-0 bg-teal-50 border border-teal-100 rounded-lg -mx-2 px-2"></div>
                    )}

                    <button
                      onClick={() => setActiveStep(idx)}
                      className="w-full"
                    >
                      <div className="flex items-start gap-3 relative py-3">
                        {/* Vertical line and dot container */}
                        <div
                          className="flex flex-col items-center relative"
                          style={{ width: "20px" }}
                        >
                          {/* Vertical line above */}
                          {idx !== 0 && (
                            <div
                              className="absolute w-0.5 bg-gray-300"
                              style={{
                                top: "-12px",
                                height: "12px",
                                left: "50%",
                                transform: "translateX(-50%)",
                              }}
                            ></div>
                          )}

                          {/* Dot/Circle */}
                          <div className="relative z-10">
                            <div
                              className={`w-2.5 h-2.5 rounded-full border-2 ${
                                idx === activeStep
                                  ? "bg-teal-600 border-teal-600"
                                  : "bg-white border-gray-400"
                              }`}
                            />
                          </div>

                          {/* Vertical line below */}
                          {idx !== project.steps.length - 1 && (
                            <div
                              className="absolute w-0.5 bg-gray-300"
                              style={{
                                bottom: "-12px",
                                height: "12px",
                                left: "50%",
                                transform: "translateX(-50%)",
                              }}
                            ></div>
                          )}
                        </div>

                        {/* Horizontal line */}
                        <div className="w-4 h-0.5 bg-gray-300 self-center"></div>

                        {/* Square icon */}
                        <div
                          className={`w-5 h-5 rounded-sm ${
                            idx === activeStep ? "bg-teal-400" : "bg-teal-300"
                          }`}
                        />

                        {/* Text */}
                        <div
                          className={`text-sm font-medium text-left flex-1 ${
                            idx === activeStep
                              ? "text-gray-800"
                              : "text-gray-600"
                          }`}
                        >
                          {step}
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </nav>
            </>
          )}

          {!sidebarOpen && (
            <div className="flex flex-col items-center">
              {project.steps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className="relative my-1"
                >
                  {/* Vertical line above */}
                  {idx !== 0 && (
                    <div className="absolute w-0.5 h-3 bg-gray-300 left-1/2 -translate-x-1/2 -top-3"></div>
                  )}

                  {/* Dot */}
                  <div
                    className={`w-2.5 h-2.5 rounded-full border-2 ${
                      idx === activeStep
                        ? "bg-teal-600 border-teal-600"
                        : "bg-white border-gray-400"
                    }`}
                  ></div>

                  {/* Vertical line below */}
                  {idx !== project.steps.length - 1 && (
                    <div className="absolute w-0.5 h-3 bg-gray-300 left-1/2 -translate-x-1/2 top-2.5"></div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-[#F7FBFA]">
          <div className="p-10 max-w-7xl mx-auto">{sections[activeStep]}</div>
        </div>
      </div>
    </section>
  );
}

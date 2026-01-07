import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PROJECTS_DATA } from "../data/projectsData";

// Section Components
const ProjectOverview = ({ project }) => {
  const data = project.step1;

  return (
    <div>
      <div className="border border-gray-200 rounded-xl h-[420px] flex items-center justify-center mb-10 bg-white">
        <img
          src={data.overviewImage}
          alt={data.projectName}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-semibold text-gray-900 mb-2">
            {data.projectName}
          </h1>
          <p className="text-gray-700 leading-relaxed max-w-2xl mt-6">
            {data.overview}
          </p>
        </div>

        <div className="border-l border-gray-200 pl-8 space-y-6">
          <Info label="Industry" value={data.industry} />
          <Info label="Client" value={data.client} />
          <Info label="Deliverables" value={data.deliverables} />
        </div>
      </div>
    </div>
  );
};

const Info = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-400">{label}</p>
    <p className="text-gray-800 font-medium">{value}</p>
  </div>
);


const ScopeOfProject = ({ project }) => {
  const { clientGoal, targetAudience, constraints } = project.step2;

  const Card = ({ title, data }) => (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <img
        src={data.image}
        alt={title}
        className="rounded-lg h-48 w-full object-cover mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{data.description}</p>
      <ul className="text-sm text-gray-600 space-y-1">
        {data.pointers.map((p, i) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <Card title="Client's Goal" data={clientGoal} />
      <Card title="Target Audience" data={targetAudience} />
      <Card title="Constraints" data={constraints} />
    </div>
  );
};


const BrandIdentity = ({ project }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-10">
    <img
      src={project.step3.brandImage}
      alt="Brand Identity"
      className="w-full rounded-xl"
    />
  </div>
);


const OurProcess = ({ project }) => {
  const { sitemapImage, wireframeImage, finalDesignImage } = project.step4;

  const images = [
    { label: "Sitemap", src: sitemapImage },
    { label: "Wireframe", src: wireframeImage },
    { label: "Final Design", src: finalDesignImage },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-10">
      <h2 className="text-3xl font-bold mb-8">Our Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((item, i) => (
          <div key={i}>
            <img
              src={item.src}
              alt={item.label}
              className="rounded-lg mb-2"
            />
            <p className="text-center text-sm text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


const SystemDesign = ({ project }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-10">
    <h2 className="text-3xl font-bold mb-8">System Design</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {project.step5.images.map((img, i) => (
        <img key={i} src={img} alt="" className="rounded-lg" />
      ))}
    </div>
  </div>
);


const DesignDetails = ({ project }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-10">
    <h2 className="text-3xl font-bold mb-8">Design Details</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {project.step6.images.map((img, i) => (
        <img key={i} src={img} alt="" className="rounded-lg" />
      ))}
    </div>
  </div>
);


const ResponsiveDesign = ({ project }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-10">
    <h2 className="text-3xl font-bold mb-8">Responsive Design</h2>
    <img
      src={project.step7.responsiveImage}
      alt="Responsive Design"
      className="rounded-xl mx-auto"
    />
  </div>
);


// Main Component
export default function Projects() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  // Get project data from PROJECTS_DATA
  const project = PROJECTS_DATA[projectId];

  // If project not found, redirect to portfolio
  if (!project) {
    navigate("/portfolio");
    return null;
  }

  const steps = [
    "01. Project Overview",
    "02. Scope of the Project",
    "03. Brand Identity",
    "04. Our Process",
    "05. System Design",
    "06. Design Details",
    "07. Responsive Design",
  ];

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
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <nav className="space-y-0">
                {steps.map((step, idx) => (
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
                          {idx !== steps.length - 1 && (
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
              {steps.map((step, idx) => (
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
                  {idx !== steps.length - 1 && (
                    <div className="absolute w-0.5 h-3 bg-gray-300 left-1/2 -translate-x-1/2 top-2.5"></div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-[#F7FBFA]">
          <div className="p-10 max-w-7xl mx-auto">
            <button
              onClick={() => navigate("/portfolio")}
              className="flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-6 font-medium"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </button>
            {sections[activeStep]}
          </div>
        </div>
      </div>
    </section>
  );
}
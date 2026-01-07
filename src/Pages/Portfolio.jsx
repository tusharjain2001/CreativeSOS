import React from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS_DATA } from "../data/projectsData";

export default function Portfolio() {
  const projectsArray = Object.entries(PROJECTS_DATA).map(([id, data]) => ({
    id,
    title:
      data.portfolioTitle ||
      (data.step1 && data.step1.projectName) ||
      "Project Title",
    desc: data.portfolioDesc || (data.step1 && data.step1.overview) || "",
    tags: data.tags || [],
    image:
      data.portfolioImage || (data.step1 && data.step1.overviewImage) || "",
  }));

  const featuredProjects = projectsArray.slice(0, 5);
  const additionalProjects = projectsArray.slice(3);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-16">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl mb-3">
            <span className="font-bold">Explore</span> my work from various{" "}
            <span className="font-bold">Industries</span> and{" "}
            <span className="font-bold">Styles</span>
          </h1>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Forget hourly rates and hidden costs. Calculate, approve, and launch
            your creative projects — all in a few clicks.
          </p>
        </div>

        {/* Search and Sort Bar */}
        <div className="flex flex-col md:flex-row gap-3 mb-8">
          <div className="flex-1 flex border border-gray-300 rounded bg-white overflow-hidden">
            <input
              type="text"
              placeholder="Search for your desired project..."
              className="flex-1 px-4 py-2 text-sm outline-none"
            />
            <button className="px-6 bg-teal-600 text-white text-sm flex items-center gap-2">
              <Search size={16} />
              Search
            </button>
          </div>
          <select className="border border-gray-300 rounded px-4 py-2 text-sm bg-white outline-none">
            <option>Sort By: Recent Projects</option>
            <option>Sort By: Brand Identity</option>
            <option>Sort By: Most Recent</option>
          </select>
        </div>

        {/* Projects Grid - Desktop Only (Complex Layout) */}
        <div
          className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
          style={{ gridAutoRows: "auto", alignItems: "start" }}
        >
          {featuredProjects.map((project, index) => {
            const base =
              "break-inside-avoid bg-white rounded-lg border border-gray-200 overflow-hidden relative shadow-sm";
            let layout = "";
            if (index === 0)
              layout =
                " lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2 mb-0";
            else if (index === 1)
              layout = " lg:col-start-3 lg:row-start-1 mb-4";
            else if (index === 2)
              layout = " lg:col-start-4 lg:row-start-1 mb-4";
            else if (index === 3)
              layout = " lg:col-start-3 lg:col-span-2 lg:row-start-2 mb-4";
            else if (index === 4)
              layout =
                " lg:col-start-1 lg:col-span-2 lg:row-start-3 mb-0 -mt-126";
            else layout = "";

            return (
              <Link
                to={`/projects/${project.id}`}
                key={project.id}
                className={`${base}${layout}${index === 0 ? " lg:mb-0" : ""}`}
              >
                {/* Tags (absolute top-right) */}
                <div className="absolute top-6 right-5 flex items-center gap-2 z-10">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white border border-gray-200 px-2 py-1 rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Image Placeholder */}
                <div
                  className={`w-full overflow-hidden ${
                    index === 0
                      ? "h-60 md:h-80 lg:h-130 p-3 rounded-xl"
                      : index === 1 || index === 2
                      ? "h-60 md:h-72 lg:h-82 p-3"
                      : index === 3
                      ? "h-60 md:h-72 lg:h-120 p-3"
                      : "h-60 md:h-72 lg:h-84 p-3"
                  }`}
                >
                  <div
                    className={`w-full h-full ${
                      project.image
                        ? "bg-cover bg-center"
                        : "bg-gradient-to-br from-teal-100 to-teal-200"
                    }`}
                    style={
                      project.image
                        ? { backgroundImage: `url(${project.image})` }
                        : undefined
                    }
                  ></div>
                </div>

                {/* Content */}
                <div
                  className={`px-4 pt-4 ${
                    index === 0 ? "lg:pb-0 pb-4" : "pb-4"
                  }`}
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {project.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile View - Simple Stacked Layout */}
        <div className="lg:hidden grid grid-cols-1 gap-6 mb-6">
          {featuredProjects.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden relative shadow-sm"
            >
              {/* Tags (absolute top-right) */}
              <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white border border-gray-200 px-2 py-1 rounded-full shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Image Placeholder */}
              <div className="w-full overflow-hidden h-48 p-3">
                <div
                  className={`w-full h-full ${
                    project.image
                      ? "bg-cover bg-center rounded"
                      : "bg-gradient-to-br from-teal-100 to-teal-200 rounded"
                  }`}
                  style={
                    project.image
                      ? { backgroundImage: `url(${project.image})` }
                      : undefined
                  }
                ></div>
              </div>

              {/* Content */}
              <div className="px-4 pt-4 pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {project.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Projects Grid - Independent Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalProjects.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className="break-inside-avoid bg-white rounded-lg border border-gray-200 overflow-hidden relative shadow-sm"
            >
              {/* Tags (absolute top-right) */}
              <div className="absolute top-6 right-5 flex items-center gap-2 z-10">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white border border-gray-200 px-2 py-1 rounded-full shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Image Placeholder */}
              <div className="w-full overflow-hidden h-80 p-3">
                <div
                  className={`w-full h-full ${
                    project.image
                      ? "bg-cover bg-center"
                      : "bg-gradient-to-br from-teal-100 to-teal-200"
                  }`}
                  style={
                    project.image
                      ? { backgroundImage: `url(${project.image})` }
                      : undefined
                  }
                ></div>
              </div>

              {/* Content */}
              <div className="px-4 pt-4 pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {project.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

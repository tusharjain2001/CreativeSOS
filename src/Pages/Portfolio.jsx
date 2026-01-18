import React from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS_DATA } from "../data/projectsData";
import Navbar2 from "./NavBar2";

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

  const firstGroup = projectsArray.slice(0, 5);
  const secondGroup = projectsArray.slice(5, 10);
  const thirdGroup = projectsArray.slice(10);

  return (
    <>
      <Navbar2 />
      <div className=" bg-gray-50 py-20 px-4 md:px-16">
        <div className="mx-auto">
          {/* Header */}
          <div className="text-center mb-20 py-12">
            <h1 className="text-4xl md:text-5xl mb-8 leading-tight">
              <span className="font-bold">Explore</span> my work from various
              <br />
              <span className="font-bold">Industries</span> and{" "}
              <span className="font-bold">Styles</span>
            </h1>
            <p className="text-[24px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Forget hourly rates and hidden costs. Calculate, approve, and
              launch your creative projects — all in a few clicks.
            </p>
          </div>

          {/* Search and Sort Bar */}
          <div className="flex flex-col max-w-5xl md:flex-row gap-10 mb-12 justify-center mx-auto items-center">
            <div className="flex-1 flex border-2 border-gray-300 rounded bg-white overflow-hidden items-center">
              <Search size={20} className="ml-3 text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search for your desired project...."
                className="flex-1 px-3 py-2 text-[20px] outline-none rounded-sm"
              />
              <button className="px-12 py-3 rounded-sm bg-[#257D89] hover:bg-[#1f5f68] text-white text-[20px] font-medium transition-colors duration-200 flex-shrink-0">
                Search
              </button>
            </div>
            <select className="border-2 border-gray-300 rounded px-12 py-3.5 text-[20px] bg-white outline-none font-medium text-gray-700 min-w-max">
              <option>Sort By: Brand Identity</option>
              <option>Sort By: Recent Projects</option>
              <option>Sort By: Most Recent</option>
            </select>
          </div>

          {/* Projects Grid - First Group (Complex Masonry Layout) */}
          <div
            className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-3"
            style={{ gridAutoRows: "auto", alignItems: "start" }}
          >
            {firstGroup.map((project, index) => {
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
                  " lg:col-start-1 lg:col-span-2 lg:row-start-3 mb-0 -mt-128";
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
                    className={`w-full bg-[#E1F0F2]  overflow-hidden flex items-center justify-center ${
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
                      className={`w-50 h-50 ${
                        project.image
                          ? "bg-contain bg-center bg-no-repeat"
                          : "bg-[#E1F0F2]"
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
                    <p className="text-[16px] text-gray-600 leading-relaxed mb-4">
                      {project.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile View - Simple Stacked Layout (First Group) */}
          <div className="lg:hidden grid grid-cols-1 gap-6 mb-6">
            {firstGroup.map((project) => (
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
                <div className="w-full bg-[#E1F0F2] overflow-hidden h-48 p-3">
                  <div
                    className={`w-full h-full ${
                      project.image
                        ? "bg-cover bg-center rounded"
                        : "bg-[#E1F0F2] rounded"
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

          {/* Additional Projects Grid - Second Group (Different Masonry Layout) */}
          {secondGroup.length > 0 && (
            <div
              className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
              style={{ gridAutoRows: "auto", alignItems: "start" }}
            >
              {secondGroup.map((project, index) => {
                const base =
                  "break-inside-avoid bg-white rounded-lg border border-gray-200 overflow-hidden relative shadow-sm";
                let layout = "";

                if (index === 0)
                  layout =
                    " lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2";
                else if (index === 1)
                  layout =
                    " lg:col-start-3 lg:col-span-2 lg:row-start-1 lg:row-span-2";
                else if (index === 2)
                  layout = " lg:col-start-1 lg:col-span-1 lg:row-start-3";
                else if (index === 3)
                  layout = " lg:col-start-2 lg:col-span-1 lg:row-start-3";
                else if (index === 4)
                  layout =
                    " lg:col-start-3 lg:col-span-2 lg:row-start-3 -mt-30";

                return (
                  <Link
                    to={`/projects/${project.id}`}
                    key={project.id}
                    className={`${base}${layout}`}
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
                      className={`w-full bg-[#E1F0F2] overflow-hidden flex items-center justify-center ${
                        index === 0
                          ? "h-80 lg:h-96 p-3 rounded-xl"
                          : index === 1
                            ? "h-56 md:h-60 lg:h-64 p-3 rounded-xl"
                            : index === 4
                              ? "h-56 md:h-60 lg:h-[430px] p-3"
                              : "h-56 md:h-30 lg:h-72 p-3"
                      }`}
                    >
                      <div
                        className={`w-50 h-50 ${
                          project.image
                            ? "bg-contain bg-center bg-no-repeat"
                            : "bg-[#E1F0F2]"
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
                );
              })}
            </div>
          )}

          {/* Mobile View - Simple Stacked Layout (Second Group) */}
          {secondGroup.length > 0 && (
            <div className="lg:hidden grid grid-cols-1 gap-6 mb-12">
              {secondGroup.map((project) => (
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
                  <div className="w-full bg-[#E1F0F2] overflow-hidden h-48 p-3">
                    <div
                      className={`w-full h-full ${
                        project.image
                          ? "bg-cover bg-center rounded"
                          : "bg-gradient-to-br from-blue-100 to-blue-200 rounded"
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
          )}

          {/* Additional Projects Grid - Third Group (Simple 3 column grid) */}
          {thirdGroup.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {thirdGroup.map((project) => (
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
                  <div className="w-full bg-[#E1F0F2] overflow-hidden h-80 p-5 flex items-center justify-center">
                    <div
                      className={`w-50 h-50 ${
                        project.image
                          ? "bg-contain bg-center bg-no-repeat rounded"
                          : "bg-[#E1F0F2] rounded"
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
          )}
        </div>
      </div>
    </>
  );
}

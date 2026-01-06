import React from "react";
import { Search } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      id: "brand-refresh",
      title: "Project Title",
      desc: "Quidem is rerum et consequatur rerum est rem facturos. Ex id voluptate dolor et qui beatae. Quidem is rerum et consequatur rerum est rem facturos. Ex id voluptate dolor et qui beatae.Quidem is rerum et consequatur rerum est rem facturos. Ex id voluptate dolor et qui beatae.Quidem is rerum et consequatur rerum est rem facturos. Ex id voluptate dolor et qui beatae.",
      tags: ["Brand Refresh", "Social Media"],
    },
    {
      id: "demand-gen",
      title: "Project Title",
      desc: "Quidem is rerum et consequatur rerum est rem facturos. Ex id voluptate dolor et qui beatae.",
      tags: ["Brand Refresh", "Social Media"],
    },
    {
      id: "product-launch",
      title: "Project Title",
      desc: "Quidem is rerum et consequatur rerum est rem facturos. Ex id voluptate dolor et qui beatae.",
      tags: ["Brand Refresh", "Social Media"],
    },
    {
      id: "content-hub",
      title: "Project Title",
      desc: "Quidem is rerum et consequatur rerum est rem facturos. Ex id voluptate dolor et qui beatae.",
      tags: ["Brand Refresh", "Social Media"],
    },
    {
      id: "retention",
      title: "Project Title",
      desc: "Quidem is rerum et consequatur rerum est rem facturos. Ex id voluptate dolor et qui beatae.",
      tags: ["Brand Refresh", "Social Media"],
    },
    {
      id: "sales",
      title: "Project Title",
      desc: "Quidem is rerum et consequatur rerum est rem facturos. Ex id voluptate dolor et qui beatae.",
      tags: ["Brand Refresh", "Social Media"],
    },
    {
      id: "social",
      title: "Project Title",
      desc: "Quidem is rerum et consequatur rerum est rem facturos. Ex id voluptate dolor et qui beatae.",
      tags: ["Brand Refresh", "Social Media"],
    },
    {
      id: "landing",
      title: "Project Title",
      desc: "Quidem is rerum et consequatur rerum est rem facturos. Ex id voluptate dolor et qui beatae.",
      tags: ["Brand Refresh", "Social Media"],
    },
    {
      id: "ui-teasers",
      title: "Project Title",
      desc: "Quidem is rerum et consequatur rerum est rem facturos. Ex id voluptate dolor et qui beatae.",
      tags: ["Brand Refresh", "Social Media"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-16">
      <div className=" mx-auto">
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
        <div className="flex gap-3 mb-8">
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

        {/* Projects Grid with explicit placements for right-side large card */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ gridAutoRows: "auto", alignItems: "start" }}
        >
          {projects.map((project, index) => {
            const base =
              "break-inside-avoid bg-white rounded-lg border border-gray-200 overflow-hidden relative shadow-sm";
            let layout = "";
            if (index === 0)
              layout =
                " lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2 mb-0";
            // large left card
            else if (index === 1)
              layout = " lg:col-start-3 lg:row-start-1 mb-4";
            // top-right first small
            else if (index === 2)
              layout = " lg:col-start-4 lg:row-start-1 mb-4";
            // top-right second small
            else if (index === 3)
              layout = " lg:col-start-3 lg:col-span-2 lg:row-start-2 mb-4";
            // big card under the two small right cards
            else if (index === 4)
              layout =
                " lg:col-start-1 lg:col-span-2 lg:row-start-3 mb-0 -mt-80";
            // small card under the large left card (no gap)
            else if (index === 7) layout = " mb-4 -mt-86"; // second-last card
            else if (index === 8) layout = " mb-4 -mt-86"; // last card
            else layout = " mb-4"; // remaining small cards

            return (
              <div
                key={project.id}
                className={`${base}${layout}${index === 0 ? " mb-0" : ""}`}
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
                      ? "h-130 p-3 rounded-xl"
                      : index === 1 || index === 2
                      ? "h-72 p-3"
                      : index === 3
                      ? "h-110 p-3"
                      : "h-44 p-3"
                  }`}
                >
                  <div
                    className={`w-full h-full bg-linear-to-br from-teal-100 to-teal-200`}
                  ></div>
                </div>

                {/* Content */}
                <div className={`px-4 pt-4 ${index === 0 ? "pb-0" : "pb-4"}`}>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {project.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

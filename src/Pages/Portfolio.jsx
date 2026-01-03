import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectPlaceholder from "../Images/Rectangle1.png";

export default function Portfolio() {
  const navigate = useNavigate();

  const projects = [
    {
      id: "brand-refresh",
      title: "Brand Refresh — Acme Co.",
      desc: "Full visual system & launch assets.",
      tags: ["Brand/Identity"],
    },
    {
      id: "demand-gen",
      title: "Demand Gen Campaign",
      desc: "Creative for paid, email, and landing pages.",
      tags: ["Performance"],
    },
    {
      id: "product-launch",
      title: "Product Launch Teasers",
      desc: "Short-form video + motion UI assets.",
      tags: ["Video"],
    },
    {
      id: "content-hub",
      title: "Content Hub — Guides",
      desc: "Long-form content design and templates.",
      tags: ["Content"],
    },
    {
      id: "retention",
      title: "Retention Creative",
      desc: "On-brand emails and in-app assets.",
      tags: ["Retention"],
    },
    {
      id: "sales",
      title: "Sales Enablement",
      desc: "Pitch decks, one-pagers, and battlecards.",
      tags: ["Sales"],
    },
    {
      id: "social",
      title: "Social Creative",
      desc: "Fast-turn social assets and experiments.",
      tags: ["Social"],
    },
    {
      id: "landing",
      title: "Landing Page Tests",
      desc: "A/B tested landing creatives.",
      tags: ["Landing pages"],
    },
    {
      id: "ui-teasers",
      title: "Product UI Teasers",
      desc: "Motion-first UI snippets.",
      tags: ["UI/UX"],
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="inline-block bg-[#D9F1F4] text-[#0B6B70] text-xs font-semibold px-3 py-1 rounded">
            Portfolio
          </div>

          <h1 className="mt-6 text-2xl md:text-3xl font-semibold text-gray-900">
            Explore my work from various{" "}
            <span className="font-bold">Industries and Styles</span>
          </h1>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Forget hourly rates and hidden costs. Calculate, approve, and launch
            your creative projects — all in a few clicks.
          </p>
        </div>

        {/* Search / controls */}
        <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1 flex gap-3">
            <div className="flex items-center bg-white border rounded w-full">
              <input
                aria-label="Search projects"
                placeholder="Search for your desired project..."
                className="flex-1 px-4 py-2 text-sm outline-none"
              />
              <button className="px-4 bg-teal-600 text-white rounded-r">
                Search
              </button>
            </div>
            <select className="w-48 border rounded px-3 py-2 text-sm bg-white">
              <option>Sort By: Brand Identity</option>
              <option>Sort By: Most Recent</option>
              <option>Sort By: Case Studies</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((p, i) => {
            const largeClass = i === 0 ? "md:row-span-2" : "";
            return (
              <article
                key={i}
                onClick={() => navigate(`/projects/${p.id}`)}
                className={`${largeClass} bg-[#EEF8F8] rounded overflow-hidden shadow p-4 flex flex-col cursor-pointer hover:shadow-lg transition-shadow`}
              >
                <div className="flex justify-end gap-2 mb-2">
                  {p.tags &&
                    p.tags.map((t, ti) => (
                      <span
                        key={ti}
                        className="text-xs bg-white px-2 py-1 rounded border text-gray-600"
                      >
                        {t}
                      </span>
                    ))}
                </div>

                <div
                  className={`w-full rounded overflow-hidden bg-white ${
                    i === 0 ? "h-64" : "h-40"
                  }`}
                >
                  <img
                    src={ProjectPlaceholder}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="mt-3 text-base font-semibold text-gray-900">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-gray-700 flex-1">{p.desc}</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Brand • Creative
                  </span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/projects/${p.id}`);
                    }}
                    className="text-sm text-teal-600 font-medium hover:text-teal-700"
                  >
                    View
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React, { useRef, useState, useEffect } from "react";

import Result1 from "../Images/Result1.png";
import Result2 from "../Images/Result2.png";
import Result3 from "../Images/Result3.png";
import Result4 from "../Images/Result4.png";
import Result5 from "../Images/Result5.png";

export default function Results() {
  const cards = [
    {
      title: "Time Back in Their Day",
      subtitle:
        "Their teams refocus on GTM and pipeline while creative runs smoothly, consistent, on-brand, and conversion-driven.",
      image: Result1,
    },
    {
      title: "Strategic Clarity in Every Campaign",
      subtitle:
        "They gain sharper narratives and fresh campaign ideas that align creative with actual business goals not just pretty visuals.",
      image: Result2,
    },
    {
      title: "Lower Creative Spend, Higher Output",
      subtitle:
        "For a fraction of what one senior designer costs, they get full creative leadership plus my entire execution team.",
      image: Result3,
    },
    {
      title: "Predictability and Peace of Mind",
      subtitle:
        "No freelancer chaos, no agency billing games — just one reliable point of contact, transparent process, and consistent delivery.",
      image: Result4,
    },
    {
      title: "Creative That Scales Without Hiring",
      subtitle:
        "Scaling is effortless - no new hires. Whether it's UI, video, or a brand refresh, I expand bandwidth instantly so your team keeps moving without adding headcount.",
      image: Result5,
    },
  ];

  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    containerRef.current.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (containerRef.current) {
        containerRef.current.style.cursor = "grab";
      }
    }
  };

  return (
    <section className="py-12 md:py-16 bg-[#1C1D22]">
      <div className=" pl-4 md:pl-8 ">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
          {/* Left heading column */}
          <div className="text-white lg:w-64 flex-shrink-0">
            <div className="inline-block bg-[#00434D] text-white px-4 py-1.5 rounded-md mb-6 font-family-instrument">
              Results
            </div>

            <div className="space-y-1">
              <div className="text-4xl md:text-5xl font-bold leading-tight">
                5 Results
              </div>
              <div className="text-4xl md:text-5xl font-light leading-tight">
                Marketing
              </div>
              <div className="text-4xl md:text-5xl font-light leading-tight">
                Leaders
              </div>
              <div className="text-4xl md:text-5xl font-light leading-tight">
                See After
              </div>
              <div className="text-4xl md:text-5xl font-bold leading-tight mt-2">
                Partnering
              </div>
              <div className="text-4xl md:text-5xl font-bold leading-tight">
                With Me!
              </div>
            </div>
          </div>

          {/* Right - carousel area */}
          <div className="flex-1 overflow-hidden">
            <div
              ref={containerRef}
              className="overflow-x-auto scroll-smooth results-scroll-container"
              style={{
                cursor: "grab",
                WebkitOverflowScrolling: "touch",
              }}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex gap-5 pb-4">
                {cards.map((c, i) => (
                  <article
                    key={i}
                    className="flex-shrink-0 w-[280px] md:w-[400px] bg-[#E1F0F2] rounded-lg p-6 flex flex-col select-none"
                    style={{ minHeight: "420px" }}
                  >
                    <h4 className="text-4xl mb-3 text-[#1C1D22]  leading-tight">
                      {c.title}
                    </h4>
                    <p className="text-xl text-[#1C1D22] font-light  leading-relaxed flex-shrink-0">
                      {c.subtitle}
                    </p>

                    <div className=" mt-4 rounded-lg bg-white overflow-hidden shadow-sm">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-48 object-cover"
                        draggable="false"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Hide scrollbar for all browsers */
        .results-scroll-container::-webkit-scrollbar {
          display: none;
        }
        .results-scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Prevent text selection while dragging */
        .results-scroll-container.dragging {
          user-select: none;
        }
      `}</style>
    </section>
  );
}

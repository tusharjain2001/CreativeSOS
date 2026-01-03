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
        "They gain sharper narratives that align creative with actual business goals not just pretty visuals.",
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
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => {
      if (!cardRef.current || !containerRef.current) return;
      const cw = cardRef.current.getBoundingClientRect().width;
      setCardWidth(cw + 16); // include gap

      // set visibleCount depending on width
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else if (w < 1280) setVisibleCount(3);
      else setVisibleCount(4);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleNext = () => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  const handlePrev = () => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  // keyboard support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <section className="py-8 md:py-12 bg-[#1C1D22]">
      <div className="mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-[0.2fr_1fr] gap-8 items-start">
          {/* Left heading column */}
          <div className="text-white">
            <div className="inline-block bg-[#00434D] text-white text-xs font-medium px-3 py-1 rounded mb-4">
              Results
            </div>

            <div className="mt-6 space-y-1 text-white">
              <div className="text-[20px] md:text-[38px]">5 Results</div>
              <div className="text-[20px] md:text-[38px]">Marketing</div>
              <div className="text-[20px] md:text-[38px]">Leaders</div>
              <div className="text-[20px] md:text-[38px]">See After</div>
              <div className="text-[20px] md:text-[38px]">Partnering</div>
              <div className="text-[20px] md:text-[38px] font-semibold">
                With Me!
              </div>
            </div>
          </div>

          {/* Right - carousel area */}
          <div>
            <div className="flex items-center justify-end mb-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous"
                  className="p-2 rounded bg-gray-700 text-white hover:opacity-90"
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next"
                  className="p-2 rounded bg-teal-600 text-white hover:opacity-90"
                >
                  ›
                </button>
              </div>
            </div>

            <div
              ref={containerRef}
              className="relative overflow-x-auto scroll-smooth -mx-4 px-4"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <div
                className="flex gap-6 items-stretch"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {cards.map((c, i) => (
                  <article
                    key={i}
                    ref={i === 0 ? cardRef : null}
                    className="shrink-0 w-[86%] sm:w-[48%] md:w-[32%] lg:w-[23%] bg-[#EEF8F8] rounded border p-5 md:p-6 shadow relative scroll-snap-align-start min-h-80 md:min-h-90 lg:min-h-100"
                    aria-roledescription="slide"
                  >
                    <h4 className="text-4xl md:text-3xl  mb-1 text-gray-900">
                      {c.title}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-700 mb-6 leading-snug">
                      {c.subtitle}
                    </p>

                    <div className="absolute right-4 rounded   border bg-white">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-300">
              <span className="hidden md:inline">
                Showing {visibleCount} cards at a time — swipe or use arrows.
              </span>
              <span className="md:hidden">Swipe to view more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

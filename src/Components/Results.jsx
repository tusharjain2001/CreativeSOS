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
  const cardRefs = useRef([]);

  useEffect(() => {
    const update = () => {
      if (!cardRef.current || !containerRef.current) return;
      const cw = cardRef.current.getBoundingClientRect().width;
      setCardWidth(cw + 16);

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

  // Intersection Observer for card animations
  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('card-visible');
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px'
        }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-8 md:py-12 bg-[#1C1D22]">
      <div className="mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[0.2fr_1fr] gap-8 items-start">
          {/* Left heading column */}
          <div className="text-white text-center md:text-left px-4 md:px-0">
            <div className="inline-block bg-[#00434D] text-white font-family-instrument text-xs font-medium px-3 py-1 rounded mb-3 md:mb-4">
              Results
            </div>

            <div className="mt-4 md:mt-6 text-white">
              {/* Mobile: 3 lines */}
              <div className="md:hidden space-y-1">
                <div className="text-2xl font-semibold leading-tight">
                  5 Results Marketing
                </div>
                <div className="text-2xl font-light leading-tight">
                  Leaders See After
                </div>
                <div className="text-2xl font-extralight leading-tight">
                  Partnering With Me!
                </div>
              </div>

              {/* Desktop: Original layout */}
              <div className="hidden md:block space-y-2">
                <div className="text-[38px] font-semibold leading-tight">
                  5 Results
                </div>
                <div className="text-[38px] font-light leading-tight">
                  Marketing
                </div>
                <div className="text-[38px] font-extralight leading-tight">
                  Leaders
                </div>
                <div className="text-[38px] font-normal leading-tight">
                  See After
                </div>
                <div className="text-[38px] leading-tight">Partnering</div>
                <div className="text-[38px] font-semibold leading-tight">
                  With Me!
                </div>
              </div>
            </div>
          </div>

          {/* Right - carousel area */}
          <div>
            <div
              ref={containerRef}
              className="relative overflow-x-auto md:overflow-x-auto scroll-smooth -mx-4 px-4 results-scroll-container"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <div
                className="flex md:flex-row flex-col gap-4 md:gap-6 items-stretch"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {cards.map((c, i) => (
                  <article
                    key={i}
                    ref={(el) => {
                      if (i === 0) cardRef.current = el;
                      cardRefs.current[i] = el;
                    }}
                    className="result-card shrink-0 w-full md:w-[48%] lg:w-[32%] xl:w-[23%] bg-[#E1F0F2] rounded border p-5 md:p-6 shadow relative scroll-snap-align-start flex flex-col"
                    style={{ minHeight: "400px" }}
                    aria-roledescription="slide"
                  >
                    <h4 className="text-2xl md:text-3xl mb-2 text-gray-900 font-semibold">
                      {c.title}
                    </h4>
                    <p className="text-sm md:text-sm text-gray-700 mb-4 leading-snug flex-shrink-0">
                      {c.subtitle}
                    </p>

                    <div className="mt-auto rounded border bg-white overflow-hidden mx-1 mb-1">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-48 md:h-auto object-cover"
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

        /* Card animation */
        .result-card {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .result-card.card-visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* Stagger animation delay for each card */
        .result-card:nth-child(1) {
          transition-delay: 0s;
        }
        .result-card:nth-child(2) {
          transition-delay: 0.1s;
        }
        .result-card:nth-child(3) {
          transition-delay: 0.2s;
        }
        .result-card:nth-child(4) {
          transition-delay: 0.3s;
        }
        .result-card:nth-child(5) {
          transition-delay: 0.4s;
        }
      `}</style>
    </section>
  );
}
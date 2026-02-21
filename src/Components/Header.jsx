import React, { useEffect, useRef, useState } from "react";

export default function Header() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bg-[#E1F0F2] px-4 sm:px-6 md:px-10 lg:px-12 py-20 sm:py-28 md:py-35 overflow-hidden ${
        visible ? "in-view" : ""
      }`}
    >
      <style>{`
        @keyframes fadeLineIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-chunk {
          opacity: 0;
          display: inline;
        }

        .in-view .line-chunk-1 {
          animation: fadeLineIn 0.7s ease-out 0.1s forwards;
        }
        .in-view .line-chunk-2 {
          animation: fadeLineIn 0.7s ease-out 0.45s forwards;
        }
        .in-view .line-chunk-3 {
          animation: fadeLineIn 0.7s ease-out 0.8s forwards;
        }

        .highlight-bold {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.25s ease;
          cursor: default;
        }

        .highlight-bold:hover {
          transform: scale(1.05);
          color: #1a5f6f;
        }
      `}</style>

      <div className="max-w-[90%] mt-10 sm:max-w-[85%] md:max-w-2xl lg:max-w-3xl xl:max-w-[880px] mx-auto text-center">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] leading-relaxed md:leading-relaxed lg:leading-relaxed text-gray-800 font-medium">
          <span className="line-chunk line-chunk-1">
            Companies spend over{" "}
            <span className="font-semibold text-gray-900 highlight-bold whitespace-nowrap">
              $100K
            </span>{" "}
            every year on one senior designer.{" "}
          </span>
          <span className="line-chunk line-chunk-2">
            You can bring me on{" "}
            <span className="font-semibold text-gray-900 highlight-bold">
              predictable hourly billing
            </span>{" "}
            and get both{" "}
            <span className="font-semibold text-gray-900 highlight-bold">
              strategic direction + my full-stack creative
            </span>{" "}
          </span>
          <span className="line-chunk line-chunk-3">
            design execution team at a fraction of the cost.
          </span>
        </p>
      </div>
    </section>
  );
}
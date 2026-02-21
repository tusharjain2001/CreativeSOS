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
      { threshold: 0.12 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bg-[#E1F0F2] px-4 sm:px-6 md:px-10 lg:px-12 py-10 sm:py-12 md:py-16 overflow-hidden ${
        visible ? "in-view" : ""
      }`}
    >
      <style>{`
        .hero-text {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 600ms ease, transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1);
          will-change: opacity, transform;
        }

        .in-view .hero-text {
          opacity: 1;
          transform: translateY(0);
        }

        .highlight-bold {
          transition: transform 240ms cubic-bezier(0.2, 0.9, 0.3, 1), color 200ms ease;
          cursor: default;
          display: inline-block;
        }

        .highlight-bold:hover {
          transform: translateY(-2px) scale(1.02);
          color: #1a5f6f;
        }
      `}</style>

      <div className="max-w-[90%] mt-10 sm:max-w-[85%] md:max-w-2xl lg:max-w-3xl xl:max-w-220 mx-auto text-center">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] leading-relaxed md:leading-relaxed lg:leading-relaxed text-gray-800 font-medium hero-text">
          <span>
            Companies spend over{" "}
            <span className="font-semibold text-gray-900 highlight-bold whitespace-nowrap">
              $100K
            </span>{" "}
            every year on one senior designer.{" "}
          </span>
          <span>
            You can bring me on{" "}
            <span className="font-semibold text-gray-900 highlight-bold">
              predictable hourly billing
            </span>{" "}
            and get both{" "}
            <span className="font-semibold text-gray-900 highlight-bold">
              strategic direction + my full-stack creative
            </span>{" "}
          </span>
          <span>design execution team at a fraction of the cost.</span>
        </p>
      </div>
    </section>
  );
}

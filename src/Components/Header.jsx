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
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInWord {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          opacity: 0;
        }

        .in-view .animate-fade-in-up {
          animation: fadeInDown 0.7s ease-out forwards;
        }

        .word-highlight {
          opacity: 0;
          display: inline-block;
          white-space: nowrap;
        }

        .in-view .word-highlight {
          animation: fadeInWord 0.6s ease-out forwards;
        }

        .highlight-bold {
          transition: transform 0.25s ease, color 0.25s ease;
        }

        .highlight-bold:hover {
          transform: scale(1.04);
          color: #1a5f6f;
        }
      `}</style>

      <div className="max-w-[90%] mt-10 sm:max-w-[85%] md:max-w-2xl lg:max-w-3xl xl:max-w-[880px] mx-auto text-center animate-fade-in-up">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] leading-relaxed md:leading-relaxed lg:leading-relaxed text-gray-800 font-medium">
          Companies spend over{" "}
          <span className="font-semibold text-gray-900 highlight-bold word-highlight whitespace-nowrap">
            $100K
          </span>{" "}
          every year on one senior designer. You can bring me on{" "}
          <span className="font-semibold text-gray-900 highlight-bold word-highlight">
            predictable hourly billing
          </span>{" "}
          and get both{" "}
          <span className="font-semibold text-gray-900 highlight-bold word-highlight">
            strategic direction + my full-stack creative
          </span>{" "}
          design execution team at a fraction of the cost.
        </p>
      </div>
    </section>
  );
}

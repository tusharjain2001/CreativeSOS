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
      className={`bg-[#E1F0F2] px-4 sm:px-6 md:px-10 lg:px-12 py-10 sm:py-14 md:py-20 overflow-hidden ${
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

      <div className="max-w-[95%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto text-center animate-fade-in-up">
        <p className="text-[16px] sm:text-[22px] md:text-[26px] lg:text-[32px] leading-[1.7] sm:leading-[1.6] md:leading-[1.5] text-gray-800 font-light px-2">
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

import React from "react";

export default function Header() {
  return (
    <div className="bg-[#E1F0F2] py-8 md:py-16 px-4 md:px-8 overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInWord {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }
        
        .word-highlight {
          animation: fadeInWord 0.6s ease-out forwards;
        }
        
        .word-highlight:nth-child(1) { animation-delay: 0.3s; }
        .word-highlight:nth-child(2) { animation-delay: 0.5s; }
        .word-highlight:nth-child(3) { animation-delay: 0.7s; }
        
        .highlight-bold {
          transition: all 0.3s ease;
        }
        
        .highlight-bold:hover {
          transform: scale(1.05);
          color: #1a5f6f !important;
        }
      `}</style>

      <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
        <p className="text-lg md:text-2xl lg:text-[32px] leading-relaxed text-gray-800 font-light">
          Companies spend over{" "}
          <span className="font-bold text-gray-900 highlight-bold word-highlight inline-block">
            $100K
          </span>{" "}
          every year on one senior designer, you can bring me on{" "}
          <span className="font-bold text-gray-900 highlight-bold word-highlight inline-block">
            predictable hourly billing
          </span>{" "}
          and get both{" "}
          <span className="font-bold text-gray-900 highlight-bold word-highlight inline-block">
            strategic direction + my full-stack creative
          </span>{" "}
          design execution team at a fraction of the cost.
        </p>
      </div>
    </div>
  );
}

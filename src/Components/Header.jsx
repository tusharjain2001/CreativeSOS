import React from "react";

export default function Header() {
  return (
    <div className="bg-[#E1F0F2] py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-2xl lg:text-[32px] leading-relaxed text-gray-800 font-light">
          Companies spend over{" "}
          <span className="font-bold text-gray-900">$100K</span> every year on
          one senior designer, you can bring me on{" "}
          <span className="font-bold text-gray-900">
            predictable hourly billing
          </span>
          and get both{" "}
          <span className="font-bold text-gray-900">
            strategic direction + my full-stack creative
          </span>{" "}
          design execution team at a fraction of the cost.
        </p>
      </div>
    </div>
  );
}

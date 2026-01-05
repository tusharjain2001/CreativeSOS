import React from "react";
import iconone from "../Images/iconone.png";
import icontwo from "../Images/icontwo.png";
import iconthree from "../Images/iconthree.png";
import iconfour from "../Images/iconfour.png";

export default function SLAs() {
  const items = [
    {
      num: "01",
      text: "Acknowledge new requests the same day.",
      icon: iconone,
    },
    {
      num: "02",
      text: "Clear ETA for each accepted task.",
      icon: icontwo,
    },
    {
      num: "03",
      text: "Review versions before final delivery.",
      icon: iconthree,
    },
    {
      num: "04",
      text: "Priority lane for launch-critical items.",
      icon: iconfour,
    },
  ];

  return (
    <section className="bg-[#f6f6f6] py-12">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="inline-block bg-[#C5EBF0] text-[#1E8898] font-family-instrument p-4 rounded">
          My SLAs
        </div>
        <div className="text-[#1C1D22] font-light text-[40px] mt-5">
          Quality and speed standards
        </div>

        <div className="mt-10 space-y-6 text-left">
          {items.map((it, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="flex items-center gap-4">
                {/* Number */}
                <div className="text-[16px] md:text-[28px] text-[#1C1D22]">
                  ({it.num})
                </div>

                {/* Icon (unique per row) */}

                <div
                  className="
    opacity-0 w-0 overflow-hidden
    group-hover:opacity-100 group-hover:w-10
    transition-all duration-300 ease-out
    flex items-center justify-center
  "
                >
                  <img
                    src={it.icon}
                    alt=""
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Text */}
                <div
                  className="
                    text-[16px] md:text-[28px] text-[#1C1D22]
                    transition-transform duration-300 ease-out
                    group-hover:translate-x-2
                  "
                >
                  {it.text}
                </div>
              </div>

              <div className="border-t border-black mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

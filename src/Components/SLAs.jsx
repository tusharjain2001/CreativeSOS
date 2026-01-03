import React from "react";

export default function SLAs() {
  const items = [
    { num: "01", text: "Acknowledge new requests the same day." },
    { num: "02", text: "Clear ETA for each accepted task." },
    { num: "03", text: "Review versions before final delivery." },
    { num: "04", text: "Priority lane for launch-critical items." },
  ];

  return (
    <section className="bg-[#f6f6f6] py-12">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="inline-block bg-[#D9F1F4] text-[#0B6B70] text-xs font-semibold px-3 py-1 rounded">
          My SLAs
        </div>

        <h2 className="mt-6 text-[48px] font-medium text-gray-900">
          Quality and speed standards
        </h2>

        <div className="mt-8 space-y-6 text-left">
          {items.map((it, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-4">
                <div className="text-[28px] font-semibold text-gray-800">
                  ({it.num})
                </div>
                <div className="text-[28px]  text-gray-700">{it.text}</div>
              </div>
              <div className="border-t border-gray-300 mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

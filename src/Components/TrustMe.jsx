import React from "react";
import Icon1 from "../Images/Icon1.png";
import Icon2 from "../Images/Icon2.png";
import Icon3 from "../Images/Icon3.png";
import Icon4 from "../Images/Icon4.png";
import Icon5 from "../Images/Icon5.png";
import Icon6 from "../Images/Icon6.png";
import Icon7 from "../Images/Icon7.png";

export default function TrustMe() {
  const features = [
    {
      icon: Icon1,
      title: "Direct Access",
      desc: "Work in your Slack or Teams, no hidden/unshared email threads or agency dashboards.",
    },
    {
      icon: Icon2,
      title: "Always Reachable",
      desc: "Need something quick? I'm in your inbox or chat, not just available on scheduled calls.",
    },
    {
      icon: Icon3,
      title: "Predictable Billing",
      desc: "No retainers. No vague estimates—just a flat hourly model with full creative coverage.",
    },
    {
      icon: Icon4,
      title: "Strategic + Practical",
      desc: "I don't just deliver designs; I create strategy that maps directly to growth goals.",
    },
    {
      icon: Icon5,
      title: "Execution Bandwidth",
      desc: "Unlimited requests delivered across multiple sprints with speed and consistency.",
    },
    {
      icon: Icon6,
      title: "Full-Stack Team Included",
      desc: "Access to designers, copy, and developers — everything needed to ship on-brand work.",
    },
    {
      icon: Icon7,
      title: "Proven Experience",
      desc: "Trusted by B2B and enterprise teams — real results, references available.",
    },
  ];

  return (
    <section id="why-me" className="py-8 md:py-20 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[0.55fr_1fr] gap-8 md:gap-16 items-start">
          {/* Left column - sticky heading */}
          <div className="md:sticky md:top-24 hidden md:block">
            <div className=" bg-[#C5EBF0] font-family-instrument text-[#1E8898] font-light px-5 py-2 inline-block">
              Why me?
            </div>
            <h2 className="mt-4 md:mt-2 text-2xl sm:text-3xl md:text-5xl font-light text-gray-900 leading-snug">
              Why CMOs/
              <br /> Agencies/
              <br /> Marketing Heads
              <br /> <span className="font-bold">Trust Me?</span>
            </h2>
          </div>

          {/* Mobile heading */}
          <div className="md:hidden">
            <div className="flex justify-center mb-3">
              <div className="inline-block bg-[#C5EBF0] text-[#1E8898] font-helvetica px-3 py-1  text-xs">
                Why me?
              </div>
            </div>
            <div className="text-center px-4">
              <h2 className="text-xl font-light text-gray-900 leading-snug">
                Why CMOs/ Agencies/
                <br />
                Marketing Heads
                <br /> <span className="font-bold">Trust Me?</span>
              </h2>
            </div>
          </div>
          {/* Right column - scrolling features list */}
          <div className="space-y-4 md:space-y-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-3 md:gap-4 opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="w-12 h-12 md:w-32 md:h-32 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={f.icon}
                    alt={f.title}
                    className="object-contain"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-3xl font-medium text-gray-900">
                    {f.title}
                  </h3>
                  <p className="text-xs md:text-lg text-gray-600 mt-1 max-w-xl font-light">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}

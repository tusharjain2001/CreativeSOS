import React, { useEffect, useRef, useState } from "react";
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

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            // unobserve after first intersection to avoid retriggers
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-12 md:py-20 bg-white ${visible ? "in-view" : ""}`}
    >
      <style>
        {`
        @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        /* Run animations only when section gets the in-view class */
        .in-view .animate-left-header { animation: fadeInLeft 0.7s ease-out; }

        .feature-item { opacity: 0; }
        .in-view .feature-item { animation: fadeInUp 0.6s ease-out forwards; }

        .in-view .feature-item:nth-child(1) { animation-delay: 0.2s; }
        .in-view .feature-item:nth-child(2) { animation-delay: 0.3s; }
        .in-view .feature-item:nth-child(3) { animation-delay: 0.4s; }
        .in-view .feature-item:nth-child(4) { animation-delay: 0.5s; }
        .in-view .feature-item:nth-child(5) { animation-delay: 0.6s; }
        .in-view .feature-item:nth-child(6) { animation-delay: 0.7s; }
        .in-view .feature-item:nth-child(7) { animation-delay: 0.8s; }

        .feature-icon-hover { transition: transform 0.3s ease; }
        .feature-item:hover .feature-icon-hover { transform: scale(1.1) rotate(5deg); }

        .feature-text-hover { transition: color 0.3s ease; }
        .feature-item:hover .feature-text-hover { color: #0f766e; }
      `}
      </style>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-[0.55fr_1fr] gap-16 items-start">
          {/* Left column - heading */}
          <div className="animate-left-header">
            <div className="inline-block bg-teal-100 text-teal-700 font-light text-xs  px-3 py-1 rounded-full">
              Why me?
            </div>
            <h2 className="mt-2 text-[48px]  font-light text-gray-900 leading-snug">
              Why CMOs/
              <br /> Agencies/
              <br /> Marketing Heads
              <br /> <span className="font-bold">Trust Me?</span>
            </h2>
          </div>

          {/* Right column - features list */}
          <div className="space-y-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="feature-item flex items-start gap-4 cursor-pointer group"
              >
                <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center feature-icon-hover">
                  <img
                    src={f.icon}
                    alt={f.title}
                    className="object-contain"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>
                <div>
                  <h3 className="text-[32px] md:text-[30px] sm:text-[30px] font-medium text-gray-900 feature-text-hover transition-colors duration-300">
                    {f.title}
                  </h3>
                  <p className="text-[24px] text-gray-600 mt-1 max-w-xl group-hover:text-gray-700 transition-colors duration-300">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import Logo1 from "../Images/Logo1.png";
import Logo2 from "../Images/Logo2.png";
import Logo3 from "../Images/Logo3.png";
import Logo4 from "../Images/Logo4.png";
import Logo5 from "../Images/Logo5.png";
import Logo6 from "../Images/Logo6.png";
import Logo7 from "../Images/Logo7.png";
import Logo8 from "../Images/Logo8.png";
import Logo9 from "../Images/Logo9.png";

export default function Partners() {
  const logos = [
    {
      img: Logo1,
      name: "Nulas",
      desc: "API + Communications Platform (Series C scale)",
    },
    {
      img: Logo2,
      name: "Selector",
      desc: "AI-driven data and decision SaaS ",
    },
    {
      img: Logo3,
      name: "JDE Peets",
      desc: "Global Beverage & Coffee Enterprise",
    },
    {
      img: Logo4,
      name: "Wonde",
      desc: "EdTech data platform (30000+ schools globally)",
    },
    {
      img: Logo5,
      name: "SkillReactor",
      desc: "EdTech SaaS (global learners & assessments)",
    },
    {
      img: Logo6,
      name: "Fortifydata",
      desc: "Cybersecurity SaaS (enterprise clients) ",
    },
    {
      img: Logo7,
      name: "Cosmia",
      desc: "Market & insights / research platform ",
    },
    {
      img: Logo8,
      name: "Bingin",
      desc: "AI-driven data and decision SaaS ",
    },
    {
      img: Logo9,
      name: "LeanTaas",
      desc: "Healthcare SaaS (enterprise operations)",
    },
  ];

  // Duplicate logos for seamless loop
  const logosDoubled = [...logos, ...logos];

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
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="partners"
      className={`bg-[#1C1D22] py-4 md:py-6 px-4 md:px-8 ${
        visible ? "in-view" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto text-center md:text-left">
        {/* Header */}
        <div className="py-4">
          <div className=" bg-[#00434D] text-[#C5EBF0] font-family-instrument px-7 py-2 inline-block mb-4 md:mb-0">
            Partners
          </div>
          <div className="flex flex-col md:grid md:grid-cols-[1fr_1.2fr] gap-8 items-center md:items-start md:py-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-snug partners-header">
                Clients <span className="font-light">Who&rsquo;ve</span>
                <br />
                <span className="font-bold">
                  <span className="font-light">Partnered</span> With Me!
                </span>
              </h2>
            </div>

            <p className="text-[#FFFFFF] text-lg md:text-2xl leading-relaxed max-w-md md:max-w-none">
              From billion <span className="text-[#6BC6D4]"> $ </span>{" "}
              enterprises to fast-growing startups, I partner with CMOs and
              marketing leaders in SaaS, FinTech, and enterprise brands
              delivering strategy and execution end-to-end, from scaling
              unicorns to building creative foundations for funded startups.
            </p>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative  rounded-lg py-8 md:py-12">
          <Marquee gradient={false} pauseOnHover={true} speed={40}>
            {logosDoubled.map((logo, index) => (
              <div
                key={index}
                className="partner-item flex flex-col items-center justify-center p-4 md:p-5 text-center"
              >
                <div className="h-12 md:h-16 mb-2 flex items-center justify-center">
                  <img
                    src={logo.img}
                    alt={logo.name}
                    className="partner-logo max-h-10 md:max-h-16 object-contain mx-auto"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>

                <div className="w-full border-t border-gray-700 my-3" />

                <div className="min-h-12">
                  <p className="text-xs text-[#FFFFFF] text-center max-w-32 leading-tight">
                    {logo.desc}
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <style>{`
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes pop { from { opacity: 0; transform: translateY(6px) scale(.97); } to { opacity: 1; transform: translateY(0) scale(1); } }

    .partners-header { opacity: 0; }
    .in-view .partners-header { animation: fadeInUp 0.6s ease-out forwards; }

    .partner-item { opacity: 0; }
    .in-view .partner-item { animation: pop 0.45s cubic-bezier(.2,.9,.25,1) forwards; }

    /* stagger a bit across the doubled set (max 18 children) */
    .in-view .partner-item:nth-child(1) { animation-delay: 0.05s; }
    .in-view .partner-item:nth-child(2) { animation-delay: 0.08s; }
    .in-view .partner-item:nth-child(3) { animation-delay: 0.11s; }
    .in-view .partner-item:nth-child(4) { animation-delay: 0.14s; }
    .in-view .partner-item:nth-child(5) { animation-delay: 0.17s; }
    .in-view .partner-item:nth-child(6) { animation-delay: 0.20s; }
    .in-view .partner-item:nth-child(7) { animation-delay: 0.23s; }
    .in-view .partner-item:nth-child(8) { animation-delay: 0.26s; }
    .in-view .partner-item:nth-child(9) { animation-delay: 0.29s; }
    .in-view .partner-item:nth-child(10) { animation-delay: 0.32s; }
    .in-view .partner-item:nth-child(11) { animation-delay: 0.35s; }
    .in-view .partner-item:nth-child(12) { animation-delay: 0.38s; }
    .in-view .partner-item:nth-child(13) { animation-delay: 0.41s; }
    .in-view .partner-item:nth-child(14) { animation-delay: 0.44s; }
    .in-view .partner-item:nth-child(15) { animation-delay: 0.47s; }
    .in-view .partner-item:nth-child(16) { animation-delay: 0.50s; }
    .in-view .partner-item:nth-child(17) { animation-delay: 0.53s; }
    .in-view .partner-item:nth-child(18) { animation-delay: 0.56s; }

    .partner-logo { transition: transform 0.28s ease, opacity 0.28s ease; }
    .partner-item:hover .partner-logo { transform: scale(1.06); }
  `}</style>
    </section>
  );
}

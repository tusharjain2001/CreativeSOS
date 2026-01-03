import React from "react";
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

  return (
    <section className="bg-[#1C1D22] py-4 md:py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          <div className="inline-block bg-[#00434D] text-white text-xs font-medium px-4 py-2  mb-2">
            Partners
          </div>
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-snug">
                Clients <span className="font-light">Who&rsquo;ve</span>
                <br />
                <span className="font-bold">
                  <span className="font-light">Partnered</span> With Me!
                </span>
              </h2>
            </div>

            <p className="text-[#FFFFFF] text-lg md:text-2xl leading-relaxed">
              From billion $ enterprises to fast-growing startups, I partner
              with CMOs and marketing leaders in SaaS, FinTech, and enterprise
              brands delivering strategy and execution end-to-end, from scaling
              unicorns to building creative foundations for funded startups.
            </p>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative rounded-lg py-8 md:py-12">
          <Marquee gradient={false} pauseOnHover={true} speed={40}>
            {logosDoubled.map((logo, index) => (
              <div
                key={index}
                className=" flex flex-col items-center justify-center p-4 md:p-5"
              >
                <img
                  src={logo.img}
                  alt={logo.name}
                  className="max-h-10 md:max-h-16 mb-2 object-contain"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />

                <div className="w-full border-t border-gray-700 my-2" />

                <p className="text-xs text-[#FFFFFF] text-center max-w-32">
                  {logo.desc}
                </p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

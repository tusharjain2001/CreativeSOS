import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Rectangle1 from "../Images/Rectangle1.png";
import Rectangle2 from "../Images/Rectangle2.png";
import Rectangle3 from "../Images/Rectangle3.png";
import Rectangle4 from "../Images/Rectangle4.png";
import Rectangle5 from "../Images/Rectangle5.png";
import Rectangle6 from "../Images/Rectangle6.png";
import Rectangle7 from "../Images/Rectangle7.png";
import Rectangle8 from "../Images/Rectangle8.png";
import Rectangle9 from "../Images/Rectangle9.png";

const items = [
  {
    you: "YOU are tired of creative being a constant pain.",
    image: Rectangle1,
    i: "I work directly with CMOs/Founders/Marketing Leaders as your Creative Partner.",
  },
  {
    you: "YOU prefer accountability over coordination.",
    image: Rectangle3,
    i: "I help you shape campaigns, narratives, and brand experiences that move pipeline.",
  },
  {
    you: "YOU want a creative partner who speaks marketing.",
    image: Rectangle4,
    i: "I sit inside your Slack, MS Teams, or preferred communication platform embedded in your daily workflow.",
  },
  {
    you: "YOU just want someone who understands your needs and delivers.",
    image: Rectangle5,
    i: "I handle execution end-to-end with my full-stack creative team under my supervision.",
  },
  {
    you: "You invest time in freelancers or agencies but still miss leadership-level thinking.",
    image: Rectangle2,
    i: "I as your Creative Partner, am your single point of contact for creative strategy and direction.",
  },
  {
    you: "YOU need one embedded creative resource, not a disconnected/sparse vendor list.",
    image: Rectangle6,
    i: "I prioritize your unlimited requests and deliver them parallel with clear turnaround.",
  },
  {
    you: "YOU need clear, predictable billing.",
    image: Rectangle7,
    i: "I work on a flat hourly retainer - predictable, transparent, & no scope creep.",
  },
  {
    you: "YOU need creative that scales with your workflow — long-term, fractional, or on-demand.",
    image: Rectangle8,
    i: "I offer three models — Partner, SPOC, and SOS — built for consistency, clarity, and speed.",
  },
  {
    you: "YOU want both creative leadership and reliable execution without juggling agencies.",
    image: Rectangle9,
    i: "I bring strategy, structure, and a full-stack creative team that delivers on-brand work every time.",
  },
];

export default function YouAndI() {
  return (
    <div className="py-20 px-4 md:px-10 bg-[#F8F8F8] min-h-screen">
      <div className="mx-auto space-y-4 md:space-y-4">
        {items.map((item, index) => (
          <>
            <Row key={`desktop-${index}`} item={item} />
            <MobileRow key={`mobile-${index}`} item={item} />
          </>
        ))}
      </div>
    </div>
  );
}

function Row({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  // Precision Transition: Standard Figma "Gentle" Spring
  const figmaSpring = { type: "spring", stiffness: 200, damping: 28, mass: 1 };
  const textTransition = { duration: 0.2 };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        height: isHovered ? 170 : 170,
      }}
      transition={figmaSpring}
      className="relative hidden md:flex w-full gap-3 overflow-hidden"
    >
      {/* LEFT PANEL (YOU) - Reduces width on hover */}
      <motion.div
        animate={{
          flex: isHovered ? 0.6 : 1,
          backgroundColor: "#F5DEDC",
        }}
        transition={figmaSpring}
        className="relative flex items-center justify-center overflow-hidden h-full "
      >
        {/* Full Width Text - Shows when NOT hovered */}
        <motion.div
          animate={{
            opacity: isHovered ? 0 : 1,
          }}
          transition={textTransition}
          className="absolute inset-0 flex items-center justify-center px-8"
        >
          <p className="text-lg md:text-2xl text-[#333] leading-snug text-center md:text-left w-full">
            <span className="font-bold">YOU</span>{" "}
            {item.you.replace(/^YOU /, "")}
          </p>
        </motion.div>

        {/* Adjusted Width Text - Shows when hovered */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={textTransition}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[450px] px-8">
            <p className="text-lg md:text-2xl text-[#333] leading-snug text-center md:text-left">
              <span className="font-bold">YOU</span>{" "}
              {item.you.replace(/^YOU /, "")}
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* CENTER IMAGE - Slides out from the middle */}
      <motion.div
        animate={{
          width: isHovered ? "180px" : "0px",
          opacity: isHovered ? 1 : 0,
        }}
        transition={figmaSpring}
        className="relative h-full overflow-hidden"
      >
        <motion.img
          animate={{ scale: isHovered ? 1 : 1 }}
          transition={{ duration: 0.7 }}
          src={item.image}
          className="w-full h-full object-cover "
          alt="Visual"
        />
      </motion.div>

      {/* RIGHT PANEL (I) - Stays large */}
      <motion.div
        animate={{
          flex: 1,
          backgroundColor: isHovered ? "#6BC6D366" : "#D7EEF1",
        }}
        transition={figmaSpring}
        className="relative flex items-center justify-center overflow-hidden h-full  px-8"
      >
        <p className="text-lg md:text-2xl text-[#333] leading-snug text-center">
          <span className="font-bold">I</span> {item.i.replace(/^I /, "")}
        </p>
      </motion.div>
    </motion.div>
  );
}

// Mobile Row Component
function MobileRow({ item }) {
  const [showImage, setShowImage] = useState(false);

  return (
    <div
      className="flex md:hidden w-full gap-2 overflow-hidden h-[140px] rounded-lg cursor-pointer"
      onClick={() => setShowImage(!showImage)}
    >
      {/* LEFT PANEL (YOU) */}
      <div className="bg-[#F5DEDC] p-3 flex items-center justify-center flex-1 overflow-hidden">
        <p className="text-xs text-[#333] leading-tight text-center">
          <span className="font-bold">YOU</span> {item.you.replace(/^YOU /, "")}
        </p>
      </div>

      {/* CENTER IMAGE - Shows only on click */}
      {showImage && (
        <div className="w-[120px] h-full overflow-hidden flex-shrink-0">
          <img
            src={item.image}
            className="w-full h-full object-cover"
            alt="Visual"
          />
        </div>
      )}

      {/* RIGHT PANEL (I) */}
      <div className="bg-[#D7EEF1] p-3 flex items-center justify-center flex-1 overflow-hidden">
        <p className="text-xs text-[#333] leading-tight text-center">
          <span className="font-bold">I</span> {item.i.replace(/^I /, "")}
        </p>
      </div>
    </div>
  );
}

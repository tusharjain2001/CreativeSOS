import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { PanelLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectSidebar({
  projectId,
  project,
  steps,
  activeStep,
  setActiveStep,
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [indicatorY, setIndicatorY] = useState(null);
  const [indicatorH, setIndicatorH] = useState(null);
  const navRef = useRef(null);
  const buttonRefs = useRef([]);
  const isFusionProject = projectId === "fusion";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const measureIndicator = (idx) => {
    const btn = buttonRefs.current[idx];
    const nav = navRef.current;

    if (!btn || !nav) {
      setIndicatorY(null);
      setIndicatorH(null);
      return;
    }

    const navRect = nav.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setIndicatorY(btnRect.top - navRect.top);
    setIndicatorH(btnRect.height);
  };

  useLayoutEffect(() => {
    if (!isOpen) return;
    measureIndicator(activeStep);
  }, [isOpen, activeStep, steps.length]);

  useEffect(() => {
    if (!isOpen) return;
    const onResize = () => measureIndicator(activeStep);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isOpen, activeStep, steps.length]);

  return (
    <div
      className={`bg-white overflow-hidden transition-all duration-300 flex flex-col ${
        isOpen ? "w-80" : "w-20"
      } h-full`}
    >
      <div className="flex shrink-0 items-center justify-between bg-white p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-center rounded p-2 transition-colors ${
            isFusionProject
              ? "text-[#853FFF] hover:bg-violet-50"
              : "text-[#257D89] hover:bg-teal-50"
          }`}
          aria-label="Toggle sidebar"
        >
          <PanelLeft size={20} />
        </button>

        {isOpen && (
          <div className="flex gap-1">
            {project?.tags &&
              project.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`text-sm px-2 py-1 rounded border font-family-instrument ${
                    isFusionProject
                      ? "bg-[#f3e8ff] text-[#7c3aed] border-[#8b5cf6]"
                      : "bg-[#E4F0EB] text-[#257D89] border-[#257D89]"
                  }`}
                >
                  {tag}
                </span>
              ))}
          </div>
        )}
      </div>

      {isOpen && (
        <div className="relative flex-1 overflow-y-auto p-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <motion.nav
            ref={navRef}
            className="relative z-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className={`absolute left-0 top-0 z-10 w-1 rounded-r ${
                isFusionProject ? "bg-[#7c3aed]" : "bg-[#257D89]"
              }`}
              animate={
                indicatorY !== null && indicatorH !== null
                  ? { y: indicatorY, height: indicatorH, opacity: 1 }
                  : { opacity: 0 }
              }
              initial={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 420, damping: 38 }}
            />
            {steps.map((step, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveStep(idx)}
                ref={(el) => (buttonRefs.current[idx] = el)}
                variants={itemVariants}
                className={`relative w-full rounded-r-lg border-b border-b-gray-200 px-4 py-4 text-left transition-colors duration-200 ${
                  idx === activeStep
                    ? "bg-white font-medium text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <span className="font-family-instrument text-sm font-medium">
                  {String(idx + 1).padStart(2, "0")}.
                </span>
                <span className="ml-3 text-sm font-medium font-family-instrument">
                  {step}
                </span>
              </motion.button>
            ))}
          </motion.nav>
        </div>
      )}

      {!isOpen && (
        <nav className="flex-1 overflow-y-auto px-3 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveStep(idx);
              }}
              title={step}
              className={`relative block w-full border-b border-b-gray-200 py-3 text-center text-sm font-family-instrument transition-colors ${
                idx === activeStep
                  ? "font-medium text-[#404040]"
                  : "text-[#6b7280] hover:text-[#404040]"
              }`}
            >
              {idx === activeStep && (
                <span
                  className={`absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 rounded-r ${
                    isFusionProject ? "bg-[#7c3aed]" : "bg-[#257D89]"
                  }`}
                />
              )}
              {String(idx + 1).padStart(2, "0")}.
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}

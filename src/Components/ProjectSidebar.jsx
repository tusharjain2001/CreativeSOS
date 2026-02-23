import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { PanelLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectSidebar({
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

  // Measure immediately on mount (synchronous so no flicker)
  useLayoutEffect(() => {
    measureIndicator(activeStep);
  }, [isOpen, activeStep, steps]);

  // Re-measure on step change
  useEffect(() => {
    measureIndicator(activeStep);
  }, [activeStep]);

  useEffect(() => {
    const onResize = () => measureIndicator(activeStep);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeStep, steps, isOpen]);

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

  return (
    <div
      className={`bg-white border-r border-gray-200 overflow-y-auto transition-all duration-300 flex flex-col ${
        isOpen ? "w-80" : "w-20"
      }`}
    >
      {/* Toggle Bar */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center text-teal-600 hover:bg-teal-50 rounded transition-colors p-2"
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
                  className="text-xs bg-[#E4F0EB] text-[#257D89] px-2 py-1 rounded border border-[#257D89]"
                >
                  {tag}
                </span>
              ))}
          </div>
        )}
      </div>

      {isOpen && (
        <div ref={navRef} className="relative p-6">
          {/* Single persistent sliding bar - always rendered, never conditionally hidden */}
          <motion.div
            className="absolute left-6 z-10 w-1 bg-[#257D89] rounded-r pointer-events-none"
            animate={
              indicatorY !== null && indicatorH !== null
                ? { y: indicatorY, height: indicatorH, opacity: 1 }
                : { opacity: 0 }
            }
            initial={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
            style={{ top: 0 }}
          />

          <motion.nav
            className="relative z-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {steps.map((step, idx) => (
              <motion.button
                key={idx}
                ref={(el) => (buttonRefs.current[idx] = el)}
                onClick={() => setActiveStep(idx)}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`relative w-full text-left px-4 py-4 border-b border-b-gray-200 rounded-r-lg transition-colors duration-200 ${
                  idx === activeStep
                    ? "text-gray-900 font-medium bg-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <span className="font-medium font-family-instrument text-sm">
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
        <nav className="flex flex-col items-center gap-3 flex-1 p-4">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsOpen(true);
                setActiveStep(idx);
              }}
              title={step}
              className={`w-3 h-3 rounded-sm transition-colors ${
                idx === activeStep
                  ? "bg-teal-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </nav>
      )}
    </div>
  );
}

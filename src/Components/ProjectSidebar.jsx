import React, { useState } from "react";
import { PanelLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectSidebar({
  project,
  steps,
  activeStep,
  setActiveStep,
}) {
  const [isOpen, setIsOpen] = useState(true);

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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
                  className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded border border-blue-200"
                >
                  {tag}
                </span>
              ))}
          </div>
        )}
      </div>

      {isOpen && (
        <>
          {/* Steps List */}
          <motion.nav
            className="space-y-0 p-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {steps.map((step, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveStep(idx)}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`w-full text-left px-4 py-4 transition-colors duration-200 border-l-4 border-b border-b-gray-200 rounded-r-lg ${
                  idx === activeStep
                    ? "border-l-teal-600 text-gray-900 font-medium bg-teal-50"
                    : "border-l-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <span className="font-semibold text-sm">
                  {String(idx + 1).padStart(2, "0")}.
                </span>
                <span className="ml-3 text-sm">{step}</span>
              </motion.button>
            ))}
          </motion.nav>
        </>
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

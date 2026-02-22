import React from "react";
import { motion } from "framer-motion";

/**
 * SectionRenderer for "landing-page-optimization" projects
 * Customize this component for Landing Page Optimization sections
 */
export default function SectionRendererLandingPageOptimization({
  project,
  sectionName,
  stepIndex,
}) {
  if (sectionName === "Project Overview") {
    const data = project.step1;
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={data.overviewImage}
          alt={data.projectName}
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-gray-200 rounded-xl p-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold mb-8"
      >
        {sectionName}
      </motion.h2>
      <p className="text-gray-600">
        Customize this section for {sectionName} in
        SectionRendererLandingPageOptimization.jsx
      </p>
    </motion.div>
  );
}

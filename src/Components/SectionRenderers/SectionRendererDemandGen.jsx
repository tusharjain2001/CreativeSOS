import React from "react";
import { motion } from "framer-motion";

/**
 * SectionRenderer for "demand-gen" project
 * Customize this component for Demand Generation Campaign sections
 */
export default function SectionRendererDemandGen({
  project,
  sectionName,
  stepIndex,
}) {
  // PROJECT OVERVIEW
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

  // SCOPE OF PROJECT
  if (sectionName === "Scope of the Project") {
    const { targetAudience, clientGoal, constraints } = project.step2;

    const Card = ({ title, data, reversed = false }) => (
      <motion.div
        whileHover={{ y: -8 }}
        className="bg-white border border-gray-200 rounded-xl p-6"
      >
        {reversed ? (
          <>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{data.description}</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              {data.pointers?.map((p, i) => (
                <li key={i}>• {p}</li>
              ))}
            </ul>
            <img
              src={data.image}
              alt={title}
              className="rounded-lg h-48 w-full object-cover"
            />
          </>
        ) : (
          <>
            <img
              src={data.image}
              alt={title}
              className="rounded-lg h-48 w-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{data.description}</p>
            <ul className="text-sm text-gray-600 space-y-1">
              {data.pointers?.map((p, i) => (
                <li key={i}>• {p}</li>
              ))}
            </ul>
          </>
        )}
      </motion.div>
    );

    return (
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Target Audience" data={targetAudience} />
        <Card title="Client's Goal" data={clientGoal} reversed={true} />
        <Card title="Constraints" data={constraints} />
      </motion.div>
    );
  }

  // DEFAULT SECTION - Add your custom sections here
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
        Customize this section for {sectionName} in SectionRendererDemandGen.jsx
      </p>
    </motion.div>
  );
}

import React from "react";
import { motion } from "framer-motion";

/**
 * SectionRenderer for "brand-refresh" project
 * Handles: Project Overview, Scope, Logo Variations, Mood Board, Color, Typography, Shapes, UI Elements, Icons, Stationary, Social Media, Collage
 */
export default function SectionRendererBrandRefresh({ project, sectionName }) {
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
          className="w-full h-full object-cover rounded-[8px]"
        />
      </motion.div>
    );
  }

  // SCOPE OF PROJECT
  if (sectionName === "Scope of the Project") {
    const { targetAudience, clientGoal, constraints } = project.step2;

    const Card = ({ title, data, reversed = false }) => (
      <motion.div
        whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white border border-gray-200 rounded-xl p-6"
      >
        {reversed ? (
          <>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{data.description}</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              {data.pointers.map((p, i) => (
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
              {data.pointers.map((p, i) => (
                <li key={i}>• {p}</li>
              ))}
            </ul>
          </>
        )}
      </motion.div>
    );

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 },
      },
    };

    return (
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Card title="Target Audience" data={targetAudience} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card title="Client's Goal" data={clientGoal} reversed={true} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card title="Constraints" data={constraints} />
        </motion.div>
      </motion.div>
    );
  }

  // BRAND IDENTITY / LOGO VARIATIONS
  if (sectionName === "Brand Identity" || sectionName === "Logo Variations") {
    const data = project.step3;
    return (
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
        <motion.img
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          src={data.brandImage}
          alt={sectionName}
          className="w-full rounded-xl"
        />
      </motion.div>
    );
  }

  // OUR PROCESS
  if (sectionName === "Our Process") {
    const { sitemapImage, wireframeImage, finalDesignImage } = project.step4;

    const images = [
      {
        src: sitemapImage,
        label: "Sitemap/ Backend",
      },
      {
        src: wireframeImage,
        label: "Wireframing",
      },
      {
        src: finalDesignImage,
        label: "Final Designs",
      },
    ];

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-gray-200 rounded-xl p-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold mb-8"
        >
          Our Process
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            staggerChildren: 0.1,
            delayChildren: 0.3,
          }}
        >
          {images.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.img
                src={item.src}
                alt={item.label}
                className="rounded-lg mb-2 w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <p className="text-center text-sm text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    );
  }

  // SYSTEM DESIGN
  if (sectionName === "System Design") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-gray-200 rounded-xl p-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold mb-8"
        >
          System Design
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            staggerChildren: 0.1,
            delayChildren: 0.3,
          }}
        >
          {project.step5?.images?.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt=""
              className="rounded-lg cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          ))}
        </motion.div>
      </motion.div>
    );
  }

  // DESIGN DETAILS
  if (sectionName === "Design Details") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-gray-200 rounded-xl p-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold mb-8"
        >
          Design Details
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            staggerChildren: 0.1,
            delayChildren: 0.3,
          }}
        >
          {project.step6?.images?.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt=""
              className="rounded-lg cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          ))}
        </motion.div>
      </motion.div>
    );
  }

  // RESPONSIVE DESIGN / VIEW PROJECT
  if (sectionName === "Responsive Design" || sectionName === "View Project") {
    const data = project.step7;
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
        <motion.img
          src={data?.responsiveImage}
          alt={sectionName}
          className="rounded-xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        />
      </motion.div>
    );
  }

  // DEFAULT SECTION
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
        Add content for {sectionName} in the project data
      </p>
    </motion.div>
  );
}

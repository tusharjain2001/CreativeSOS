import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PROJECTS_DATA } from "../data/projectsData";
import Navbar2 from "./NavBar2";
import ProjectSidebar from "../Components/ProjectSidebar";

// Section Components
const ProjectOverview = ({ project }) => {
  const data = project.step1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl border-2 border-gray-300 p-8"
    >
      {/* Inner Container */}
      <div className="bg-white rounded-2xl border border-gray-200">
        {/* Image Section */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl h-[500px] flex items-center justify-center mb-0 border-b border-gray-200 overflow-hidden"
        >
          <img
            src={data.overviewImage}
            alt={data.projectName}
            className="w-full h-full object-cover rounded-t-2xl"
          />
        </motion.div>

        {/* Text and Info Section */}
        <div className="p-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left - Title, Description and Tags */}
            <div className="lg:col-span-2">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold text-gray-900 mb-2"
              >
                {data.projectName}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 leading-relaxed text-sm mb-4"
              >
                {data.overview}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, staggerChildren: 0.1 }}
                className="flex gap-2 flex-wrap"
              >
                {data.projectType && typeof data.projectType === "string"
                  ? data.projectType.split(",").map((type, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        whileHover={{ scale: 1.05, backgroundColor: "#0d9488" }}
                        className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors"
                      >
                        {type.trim()}
                      </motion.span>
                    ))
                  : null}
              </motion.div>
            </div>

            {/* Right - Info Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              <Info label="Industry" value={data.industry} />
              <Info label="Client" value={data.client} />
              <Info label="Deliverables" value={data.deliverables} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Info = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-400">{label}</p>
    <p className="text-gray-800 font-medium">{value}</p>
  </div>
);

const ScopeOfProject = ({ project }) => {
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
};

const BrandIdentity = ({ project }) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
    className="bg-white border border-gray-200 rounded-xl p-10"
  >
    <motion.img
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      src={project.step3.brandImage}
      alt="Brand Identity"
      className="w-full rounded-xl"
    />
  </motion.div>
);

const OurProcess = ({ project }) => {
  const {
    sitemapImage,
    wireframeImage,
    finalDesignImage,
    sitemapDescription,
    wireframeDescription,
    finalDesignDescription,
  } = project.step4;

  const steps = [
    {
      title: "Sitemap/ Backend",
      src: sitemapImage,
      description:
        sitemapDescription ||
        "Revamp the existing website into a modern, visually appealing, product-like AI website while maintaining simplicity for smooth web development.",
    },
    {
      title: "Wireframing",
      src: wireframeImage,
      description:
        wireframeDescription ||
        "Revamp the existing website into a modern, visually appealing, product-like AI website while maintaining simplicity for smooth web development.",
    },
    {
      title: "Final Designs",
      src: finalDesignImage,
      description:
        finalDesignDescription ||
        "Revamp the existing website into a modern, visually appealing, product-like AI website while maintaining simplicity for smooth web development.",
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
};

const SystemDesign = ({ project }) => (
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
      {project.step5.images.map((img, i) => (
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

const DesignDetails = ({ project }) => (
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
      {project.step6.images.map((img, i) => (
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

const ResponsiveDesign = ({ project }) => (
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
      Responsive Design
    </motion.h2>
    <motion.img
      src={project.step7.responsiveImage}
      alt="Responsive Design"
      className="rounded-xl mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    />
  </motion.div>
);

// Main Component
export default function Projects() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  // Get project data from PROJECTS_DATA
  const project = PROJECTS_DATA[projectId];

  // If project not found, redirect to portfolio
  if (!project) {
    navigate("/portfolio");
    return null;
  }

  const steps = [
    "Project Overview",
    "Scope of the Project",
    "Brand Identity",
    "Our Process",
    "System Design",
    "Design Details",
    "Responsive Design",
  ];

  // Map sections to components
  const sections = [
    <ProjectOverview project={project} />,
    <ScopeOfProject project={project} />,
    <BrandIdentity project={project} />,
    <OurProcess project={project} />,
    <SystemDesign project={project} />,
    <DesignDetails project={project} />,
    <ResponsiveDesign project={project} />,
  ];

  return (
    <section className="bg-white min-h-screen">
      <Navbar2 />
      <div className="flex">
        {/* Project Sidebar Component */}
        <ProjectSidebar
          project={project}
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />

        {/* Main Content */}
        <div className="flex-1 bg-[#F7FBFA]">
          <div className="p-10 max-w-7xl mx-auto">
            {/* <button
              onClick={() => navigate("/portfolio")}
              className="flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-6 font-medium"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </button> */}
            {sections[activeStep]}
          </div>
        </div>
      </div>
    </section>
  );
}

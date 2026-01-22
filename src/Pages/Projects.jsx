import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PROJECTS_DATA } from "../data/projectsData";
import Navbar2 from "./NavBar2";
import ProjectSidebar from "../Components/ProjectSidebar";
import SectionRenderer from "../Components/SectionRenderer";

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

  // Get steps from project data
  const steps = project.steps || [
    "Project Overview",
    "Scope of the Project",
    "Brand Identity",
    "Our Process",
    "System Design",
    "Design Details",
    "Responsive Design",
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
            {/* Render section based on active step */}
            <SectionRenderer
              project={project}
              sectionName={steps[activeStep]}
              stepIndex={activeStep}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

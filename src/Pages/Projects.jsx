import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS_DATA } from "../data/projectsData";
import Navbar2 from "./NavBar2";
import ProjectSidebar from "../Components/ProjectSidebar";
import { getSectionRenderer } from "../Components/SectionRenderers";

// Main Componentw
export default function Projects() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [stepDirection, setStepDirection] = useState(1);
  const lastWheelAtRef = useRef(0);
  const contentRef = useRef(null);

  // Get project data from PROJECTS_DATA
  const project = PROJECTS_DATA[projectId];
  console.log("Project Data:", project);

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

  const setActiveStepWithDirection = (next) => {
    setActiveStep((prev) => {
      const resolved = typeof next === "function" ? next(prev) : next;
      const clamped = Math.min(steps.length - 1, Math.max(0, resolved));

      if (clamped !== prev) {
        setStepDirection(clamped > prev ? 1 : -1);
      }

      return clamped;
    });
  };

  useEffect(() => {
    const node = contentRef.current;
    if (!node) return;

    const handleContentWheel = (event) => {
      const now = Date.now();
      if (now - lastWheelAtRef.current < 350) return;
      if (Math.abs(event.deltaY) < 8) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      let didChange = false;

      setActiveStepWithDirection((prev) => {
        const next = Math.min(steps.length - 1, Math.max(0, prev + direction));
        didChange = next !== prev;
        return next;
      });

      if (!didChange) return;

      event.preventDefault();
      lastWheelAtRef.current = now;
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    node.addEventListener("wheel", handleContentWheel, { passive: false });
    return () => node.removeEventListener("wheel", handleContentWheel);
  }, [steps.length]);

  const stepTransitionVariants = {
    initial: (direction) => ({
      y: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.96,
      rotate: direction > 0 ? 2 : -2,
      transformOrigin: "center center",
    }),
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (direction) => ({
      y: direction > 0 ? -70 : 70,
      opacity: 0,
      scale: 0.86,
      rotate: direction > 0 ? -4 : 4,
      transformOrigin: "center center",
      transition: { duration: 0.35, ease: [0.4, 0, 1, 1] },
    }),
  };

  // Get the appropriate SectionRenderer for this project
  const SectionRenderer = getSectionRenderer(projectId);

  if (!SectionRenderer) {
    return (
      <section className="bg-white min-h-screen">
        <Navbar2 />
        <div className="flex">
          <ProjectSidebar
            project={project}
            steps={steps}
            activeStep={activeStep}
            setActiveStep={setActiveStepWithDirection}
          />
          <div className="flex-1 bg-[#F7FBFA] p-10">
            <p className="text-red-500">
              Error: No SectionRenderer found for project "{projectId}"
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white min-h-screen">
      <Navbar2 />
      <div className="flex">
        {/* Project Sidebar Component */}
        <ProjectSidebar
          project={project}
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStepWithDirection}
        />

        {/* Main Content */}
        <div ref={contentRef} className="flex-1 bg-[#F7FBFA]">
          <div className="p-10 max-w-7xl mx-auto">
            {/* Render section based on active step with project-specific renderer */}
            <AnimatePresence mode="wait" custom={stepDirection}>
              <motion.div
                key={`${projectId}-${activeStep}`}
                custom={stepDirection}
                variants={stepTransitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <SectionRenderer
                  project={project}
                  sectionName={steps[activeStep]}
                  stepIndex={activeStep}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

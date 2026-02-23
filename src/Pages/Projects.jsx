import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, List } from "lucide-react";
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
  const [isMobileStepsOpen, setIsMobileStepsOpen] = useState(false);
  const [mobileIndicatorY, setMobileIndicatorY] = useState(null);
  const [mobileIndicatorH, setMobileIndicatorH] = useState(null);
  const lastWheelAtRef = useRef(0);
  const boundaryArmRef = useRef({ armed: false, direction: 0 });
  const contentRef = useRef(null);
  const mobileNavRef = useRef(null);
  const mobileButtonRefs = useRef([]);

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
  const previousStepLabel = activeStep > 0 ? steps[activeStep - 1] : "";
  const nextStepLabel = activeStep < steps.length - 1 ? steps[activeStep + 1] : "";

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

  const measureMobileIndicator = (idx) => {
    const btn = mobileButtonRefs.current[idx];
    const nav = mobileNavRef.current;
    if (!btn || !nav) {
      setMobileIndicatorY(null);
      setMobileIndicatorH(null);
      return;
    }
    const navRect = nav.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setMobileIndicatorY(btnRect.top - navRect.top);
    setMobileIndicatorH(btnRect.height);
  };

  useLayoutEffect(() => {
    if (!isMobileStepsOpen) return;
    measureMobileIndicator(activeStep);
  }, [isMobileStepsOpen, activeStep, steps.length]);

  useEffect(() => {
    if (!isMobileStepsOpen) return;
    const onResize = () => measureMobileIndicator(activeStep);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isMobileStepsOpen, activeStep, steps.length]);

  useEffect(() => {
    const node = contentRef.current;
    if (!node) return;

    const handleContentWheel = (event) => {
      if (isMobileStepsOpen) return;

      const scrollTop = window.scrollY || window.pageYOffset || 0;
      const viewportHeight = window.innerHeight || 0;
      const docHeight = document.documentElement.scrollHeight || 0;
      const atTop = scrollTop <= 2;
      const atBottom = scrollTop + viewportHeight >= docHeight - 2;

      const now = Date.now();
      if (now - lastWheelAtRef.current < 350) return;
      if (Math.abs(event.deltaY) < 8) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      const atBoundary = direction > 0 ? atBottom : atTop;
      if (!atBoundary) {
        boundaryArmRef.current = { armed: false, direction: 0 };
        return;
      }

      // Require one extra scroll at boundary before changing steps.
      if (
        !boundaryArmRef.current.armed ||
        boundaryArmRef.current.direction !== direction
      ) {
        boundaryArmRef.current = { armed: true, direction };
        return;
      }

      let didChange = false;

      setActiveStepWithDirection((prev) => {
        const next = Math.min(steps.length - 1, Math.max(0, prev + direction));
        didChange = next !== prev;
        return next;
      });

      if (!didChange) return;

      event.preventDefault();
      boundaryArmRef.current = { armed: false, direction: 0 };
      lastWheelAtRef.current = now;
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    node.addEventListener("wheel", handleContentWheel, { passive: false });
    return () => node.removeEventListener("wheel", handleContentWheel);
  }, [steps.length, isMobileStepsOpen]);

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
        <div className="md:flex">
          <div className="hidden md:block">
            <ProjectSidebar
              project={project}
              steps={steps}
              activeStep={activeStep}
              setActiveStep={setActiveStepWithDirection}
            />
          </div>
          <div className="flex-1 bg-[#F7FBFA] p-4 md:p-10">
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
      <div className="md:flex">
        {/* Project Sidebar Component */}
        <div className="hidden md:block">
          <ProjectSidebar
            project={project}
            steps={steps}
            activeStep={activeStep}
            setActiveStep={setActiveStepWithDirection}
          />
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="flex-1 bg-[#F4F4F4] md:bg-[#F7FBFA]">
          <div className="mx-auto max-w-7xl px-4 pb-28 pt-4 md:p-10">
            {/* Render section based on active step with project-specific renderer */}
            <div className="rounded-3xl border border-[#D6D1C2] bg-[#EDE9DB] p-4 shadow-sm md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none">
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
      </div>

      {/* Mobile steps drawer trigger */}
      <button
        type="button"
        onClick={() => setIsMobileStepsOpen(true)}
        className={`fixed bottom-32 left-0 z-40 flex h-12 w-12 items-center justify-center rounded-r-xl bg-teal-600 text-white shadow-lg md:hidden ${
          isMobileStepsOpen ? "hidden" : "flex"
        }`}
        aria-label="Open steps drawer"
      >
        <List size={20} />
      </button>

      {/* Mobile steps drawer */}
      <AnimatePresence>
        {isMobileStepsOpen && (
          <>
            <motion.button
              type="button"
              onClick={() => setIsMobileStepsOpen(false)}
              className="fixed inset-0 z-40 bg-transparent md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Close steps"
            />
            <motion.aside
              className="fixed bottom-0 left-0 top-[74px] z-50 w-[78vw] max-w-[330px] overflow-visible border-r border-gray-200 bg-[#ECECEC] shadow-xl md:hidden"
              initial={{ x: -360 }}
              animate={{ x: 0 }}
              exit={{ x: -360 }}
              transition={{ type: "spring", stiffness: 280, damping: 32 }}
            >
              <div className="h-full overflow-y-auto p-4">
                <div className="mb-4 flex items-center gap-3 border-b border-gray-300 pb-4">
                  <button
                    type="button"
                    onClick={() => setIsMobileStepsOpen(false)}
                    className="flex h-6 w-6 items-center justify-center text-teal-700"
                    aria-label="Close steps drawer"
                  >
                    <List size={16} />
                  </button>
                  {(project?.tags || []).slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-teal-400 px-2 py-0.5 text-xs text-teal-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <nav ref={mobileNavRef} className="relative">
                  <motion.div
                    className="absolute left-0 z-10 w-0.5 rounded-r bg-teal-600"
                    animate={
                      mobileIndicatorY !== null && mobileIndicatorH !== null
                        ? { y: mobileIndicatorY, height: mobileIndicatorH, opacity: 1 }
                        : { opacity: 0 }
                    }
                    initial={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    style={{ top: 0 }}
                  />
                  {steps.map((step, idx) => (
                    <button
                      key={step}
                      type="button"
                      onClick={() => setActiveStepWithDirection(idx)}
                      ref={(el) => (mobileButtonRefs.current[idx] = el)}
                      className={`w-full border-b border-gray-300 px-3 py-3 text-left text-[15px] ${
                        idx === activeStep
                          ? "font-medium text-gray-900"
                          : "text-gray-800"
                      }`}
                    >
                      <span className="mr-3 text-gray-700">
                        {String(idx + 1).padStart(2, "0")}.
                      </span>
                      <span>{step}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Mobile bottom navigator */}
      <div
        className={`fixed inset-x-0 bottom-0 z-30 border-t border-gray-200 bg-white/95 px-3 py-3 backdrop-blur md:hidden ${
          isMobileStepsOpen ? "hidden" : "block"
        }`}
      >
        <div className="mx-auto flex max-w-md items-center justify-center gap-2">
          <p className="w-[40%] truncate text-right text-[13px] text-gray-800">
            {previousStepLabel}
          </p>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveStepWithDirection((prev) => prev - 1)}
              disabled={activeStep === 0}
              className="flex h-9 w-9 items-center justify-center rounded bg-teal-100 text-teal-700 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous step"
            >
              <ChevronUp size={16} />
            </button>
            <div className="h-7 w-px bg-teal-700/70" />
            <button
              type="button"
              onClick={() => setActiveStepWithDirection((prev) => prev + 1)}
              disabled={activeStep === steps.length - 1}
              className="flex h-9 w-9 items-center justify-center rounded bg-teal-100 text-teal-700 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next step"
            >
              <ChevronDown size={16} />
            </button>
          </div>

          <p className="w-[40%] truncate text-left text-[13px] text-gray-800">
            {nextStepLabel}
          </p>
        </div>
      </div>
    </section>
  );
}

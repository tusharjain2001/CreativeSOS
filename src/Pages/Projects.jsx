import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { PanelLeft } from "lucide-react";
import { PROJECTS_DATA } from "../data/projectsData";
import Navbar2 from "./NavBar2";
import ProjectSidebar from "../Components/ProjectSidebar";
import { getSectionRenderer } from "../Components/SectionRenderers";
import uparrow from "../Images/uparrow.png";
import downarrow from "../Images/downarrow.png";
import drawer from "../Images/drawer.png";

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
  const isStepAnimatingRef = useRef(false);
  const queuedStepDirectionRef = useRef(0);
  const contentRef = useRef(null);
  const mobileNavRef = useRef(null);
  const mobileButtonRefs = useRef([]);

  // Get project data from PROJECTS_DATA
  const project = PROJECTS_DATA[projectId];
  const defaultSteps = [
    "Project Overview",
    "Scope of the Project",
    "Brand Identity",
    "Our Process",
    "System Design",
    "Design Details",
    "Responsive Design",
  ];
  const steps = project?.steps || defaultSteps;

  const previousStepLabel = activeStep > 0 ? steps[activeStep - 1] : "";
  const nextStepLabel =
    activeStep < steps.length - 1 ? steps[activeStep + 1] : "";
  const isInfinitusProject = projectId === "infinitus";
  const isFusionProject = projectId === "fusion";
  const shouldUseInfinitusFixedDesktopLayout = isInfinitusProject;
  const shouldUseShowcaseMobileLayout = isInfinitusProject || isFusionProject;
  const mobileAccentClasses = isFusionProject
    ? "border-[#257D89] bg-[#E4F0EB] text-[#257D89]"
    : "border-[#8b5cf6] bg-[#f3e8ff] text-[#7c3aed]";
  const mobileActiveIndicatorClass = isFusionProject
    ? "bg-[#257D89]"
    : "bg-violet-600";
  const isFullWidthProject =
    projectId === "infinitus" || projectId === "fusion";
  const relatedProjects = Object.entries(PROJECTS_DATA)
    .filter(
      ([id, data]) =>
        id !== projectId && data?.portfolioImage && data?.portfolioTitle,
    )
    .slice(0, 3)
    .map(([id, data]) => ({
      id,
      title: data.portfolioTitle,
      image: data.portfolioImage,
    }));
  const mobileStepGroupStart = Math.floor(activeStep / 4) * 4;
  const mobileInfinitusSteps = steps.slice(
    mobileStepGroupStart,
    mobileStepGroupStart + 4,
  );
  const isMobileViewport =
    typeof window !== "undefined" && window.innerWidth < 768;

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

  const requestStepShift = (direction) => {
    if (isStepAnimatingRef.current) {
      queuedStepDirectionRef.current = direction;
      return false;
    }

    let didChange = false;
    setActiveStepWithDirection((prev) => {
      const next = Math.min(steps.length - 1, Math.max(0, prev + direction));
      didChange = next !== prev;
      return next;
    });

    if (didChange) {
      isStepAnimatingRef.current = true;
      queuedStepDirectionRef.current = 0;
    }

    return didChange;
  };

  useEffect(() => {
    if (!project) {
      navigate("/portfolio");
    }
  }, [project, navigate]);

  useEffect(() => {
    setActiveStep((prev) => Math.min(prev, steps.length - 1));
  }, [steps.length]);

  useEffect(() => {
    if (!project) return;
    const images = new Set();

    const collectImageUrls = (value) => {
      if (!value) return;

      if (typeof value === "string") {
        images.add(value);
        return;
      }

      if (Array.isArray(value)) {
        value.forEach(collectImageUrls);
        return;
      }

      if (typeof value === "object") {
        Object.values(value).forEach(collectImageUrls);
      }
    };

    collectImageUrls(project);

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [projectId]);

  const handleStepChange = (next) => {
    setActiveStepWithDirection(next);
    if (isMobileViewport) {
      setIsMobileStepsOpen(false);
    }
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
    if (!project) return;
    if (!isMobileViewport) return;
    const node = contentRef.current;
    if (!node) return;

    const handleContentWheel = (event) => {
      if (isMobileStepsOpen) return;
      if (isStepAnimatingRef.current) {
        event.preventDefault();
        return;
      }

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

      const didChange = requestStepShift(direction);

      if (!didChange) {
        event.preventDefault();
        lastWheelAtRef.current = now;
        return;
      }

      event.preventDefault();
      boundaryArmRef.current = { armed: false, direction: 0 };
      lastWheelAtRef.current = now;
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    node.addEventListener("wheel", handleContentWheel, { passive: false });
    return () => node.removeEventListener("wheel", handleContentWheel);
  }, [steps.length, isMobileStepsOpen, isMobileViewport]);

  useEffect(() => {
    if (!isMobileViewport) return;
    window.scrollTo({ top: 0 });
  }, [activeStep, isMobileViewport]);

  const desktopStepTransitionVariants = {
    initial: (direction) => ({
      x: 0,
      y: direction > 0 ? "100%" : 0,
      opacity: 1,
      scale: direction > 0 ? 1 : 0.7,
      rotate: 0,
      transformOrigin: "center center",
      zIndex: direction > 0 ? 3 : 1,
    }),
    animate: () => ({
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transformOrigin: "center center",
      zIndex: 2,
      transition: {
        duration: 0.6,
        ease: "linear",
      },
    }),
    exit: (direction) => ({
      x: 0,
      y: direction > 0 ? 0 : "100%",
      opacity: 1,
      scale: direction > 0 ? 0.7 : 1,
      rotate: 0,
      transformOrigin: "center center",
      zIndex: direction > 0 ? 1 : 3,
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      transition: { duration: 0.6, ease: "linear" },
    }),
  };

  const mobileStepTransitionVariants = {
    initial: (direction) => ({
      x: 0,
      y: 0,
      opacity: 1,
      scale: 0.7,
      rotate: 0,
      transformOrigin: "center center",
      zIndex: direction > 0 ? 3 : 1,
    }),
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transformOrigin: "center center",
      zIndex: 2,
      transition: {
        duration: 0.6,
        ease: "linear",
      },
    },
    exit: (direction) => ({
      x: 0,
      y: "100%",
      opacity: 1,
      scale: 1,
      rotate: 0,
      transformOrigin: "center center",
      zIndex: direction > 0 ? 1 : 3,
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      transition: { duration: 0.6, ease: "linear" },
    }),
  };

  // Get the appropriate SectionRenderer for this project
  const SectionRenderer = getSectionRenderer(projectId);

  if (!project) {
    return null;
  }

  if (!SectionRenderer) {
    return (
      <section className="bg-white min-h-screen">
        <Navbar2 />
        <div className="md:flex">
          <div className="hidden md:block">
            <ProjectSidebar
              projectId={projectId}
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
    <section
      className={`bg-white min-h-screen ${
        shouldUseInfinitusFixedDesktopLayout
          ? "md:h-screen md:overflow-hidden"
          : ""
      }`}
    >
      <Navbar2 />
      <div
        className={`mt-0 gap-10 md:flex ${
          shouldUseInfinitusFixedDesktopLayout
            ? "md:h-[calc(100vh-74px)] md:gap-0"
            : "md:mt-10"
        }`}
      >
        {/* Project Sidebar Component */}
        <div
          className={`hidden md:block ${
            shouldUseInfinitusFixedDesktopLayout ? "md:h-full" : ""
          }`}
        >
          <ProjectSidebar
            projectId={projectId}
            project={project}
            steps={steps}
            activeStep={activeStep}
            setActiveStep={setActiveStepWithDirection}
          />
        </div>

        {/* Main Content */}
        <div
          ref={contentRef}
          className={`flex-1 ${
            shouldUseInfinitusFixedDesktopLayout
              ? "md:h-full md:overflow-hidden"
              : ""
          }`}
        >
          <div
            className={
              shouldUseShowcaseMobileLayout
                ? `w-full px-4 pb-8 md:px-0 ${
                    shouldUseInfinitusFixedDesktopLayout
                      ? "md:h-full md:pb-0"
                      : ""
                  }`
                : isFullWidthProject
                  ? "w-full"
                  : "mx-auto max-w-7xl"
            }
          >
            {shouldUseShowcaseMobileLayout && (
              <div className="mb-4 pt-4 md:hidden">
                <h1 className="font-helvetica text-[34px] leading-[1.05] text-[#101010]">
                  {project.portfolioTitle || project.step1?.projectName}
                </h1>
                <p className="mt-2 text-[13px] leading-6 text-[#3f3f3f] font-family-instrument">
                  {project.portfolioDesc || project.step1?.overview}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  {(project?.tags || []).slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-2 py-0.5 text-[11px] font-family-instrument ${mobileAccentClasses}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <nav className="mt-4 border-t border-[#D6D6D6]">
                  {mobileInfinitusSteps.map((step, idx) => {
                    const stepIdx = mobileStepGroupStart + idx;
                    const isActive = activeStep === stepIdx;
                    return (
                      <button
                        key={step}
                        type="button"
                        onClick={() => handleStepChange(stepIdx)}
                        className={`relative w-full border-b border-[#D6D6D6] px-3 py-3 text-left ${
                          isActive ? "text-[#202020]" : "text-[#4a4a4a]"
                        }`}
                      >
                        {isActive && (
                          <span
                            className={`absolute left-0 top-0 h-full w-1 ${mobileActiveIndicatorClass}`}
                          />
                        )}
                        <span className="ml-1 mr-3 text-[14px] font-family-instrument">
                          {String(stepIdx + 1).padStart(2, "0")}.
                        </span>
                        <span className="text-[14px] font-family-instrument">
                          {step}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            )}

            {/* Render section based on active step with project-specific renderer */}
            <div
              className={
                isFullWidthProject
                  ? `relative w-full p-0 ${
                      isMobileViewport ? "overflow-hidden" : "overflow-visible"
                    } ${
                      shouldUseInfinitusFixedDesktopLayout
                        ? "md:flex md:h-full md:items-center md:justify-center md:overflow-hidden md:[&_img]:max-h-[90vh] md:[&_img]:w-full md:[&_img]:object-contain"
                        : ""
                    }`
                  : `relative rounded-3xl border border-[#D6D1C2] bg-[#EDE9DB] p-4 shadow-sm ${
                      isMobileViewport ? "overflow-hidden" : "overflow-visible"
                    } md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none`
              }
            >
              <AnimatePresence mode="sync" custom={stepDirection} initial={false}>
                <motion.div
                  key={`${projectId}-${activeStep}`}
                  custom={stepDirection}
                  variants={
                    isMobileViewport
                      ? mobileStepTransitionVariants
                      : desktopStepTransitionVariants
                  }
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  onAnimationComplete={() => {
                    isStepAnimatingRef.current = false;
                    const queuedDirection = queuedStepDirectionRef.current;
                    queuedStepDirectionRef.current = 0;
                    if (queuedDirection !== 0) {
                      requestStepShift(queuedDirection);
                    }
                  }}
                  className="will-change-transform"
                >
                  <SectionRenderer
                    project={project}
                    sectionName={steps[activeStep]}
                    stepIndex={activeStep}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {shouldUseShowcaseMobileLayout && (
              <div className="mt-6 md:hidden">
                <p className="mb-4 font-helvetica text-[24px] leading-none text-[#202020]">
                  View other Projects
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {relatedProjects.map((item) => (
                    <Link
                      key={item.id}
                      to={`/projects/${item.id}`}
                      className="overflow-hidden rounded-[8px] border border-[#D8D8D8] bg-white p-1.5 shadow-[0_2px_10px_rgba(16,24,40,0.08)]"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-[6px] bg-[#f2f3f5]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile steps drawer trigger */}
      <button
        type="button"
        onClick={() => setIsMobileStepsOpen(true)}
        className={`fixed bottom-32 left-0 z-40 flex h-12 w-12 items-center justify-center  md:hidden ${
          shouldUseShowcaseMobileLayout
            ? "hidden"
            : isMobileStepsOpen
              ? "hidden"
              : "flex"
        }`}
        aria-label="Open steps drawer"
      >
        <img src={drawer} />
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
                <div className="mb-4 flex items-center gap-3 border-b border-[#D9D9D9] pb-4">
                  <button
                    type="button"
                    onClick={() => setIsMobileStepsOpen(false)}
                    className={`flex h-6 w-6 items-center justify-center ${
                      isFusionProject ? "text-violet-700" : "text-teal-700"
                    }`}
                    aria-label="Close steps drawer"
                  >
                    <PanelLeft size={16} />
                  </button>
                  {(project?.tags || []).slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-2 py-0.5 text-sm font-family-instrument ${
                        isFusionProject
                          ? "border-[#8b5cf6] bg-[#f3e8ff] text-[#7c3aed]"
                          : "border-[#257D89] bg-[#E4F0EB] text-[#257D89]"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <nav ref={mobileNavRef} className="relative">
                  <motion.div
                    className={`absolute left-0 z-10 w-1 rounded-r ${
                      isFusionProject ? "bg-violet-600" : "bg-teal-600"
                    }`}
                    animate={
                      mobileIndicatorY !== null && mobileIndicatorH !== null
                        ? {
                            y: mobileIndicatorY,
                            height: mobileIndicatorH,
                            opacity: 1,
                          }
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
                      onClick={() => handleStepChange(idx)}
                      ref={(el) => (mobileButtonRefs.current[idx] = el)}
                      className={`w-full border-b border-gray-300 px-3 py-3 text-left text-[15px] ${
                        idx === activeStep
                          ? "font-medium text-gray-900"
                          : "text-gray-800"
                      }`}
                    >
                      <span className="mr-3 text-[#404040] font-family-instrument">
                        {String(idx + 1).padStart(2, "0")}.
                      </span>
                      <span className="text-[#404040] font-medium font-family-instrument">
                        {step}
                      </span>
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
        className={`fixed inset-x-0 bottom-0 z-30 bg-white/95 px-3 py-3 backdrop-blur md:hidden ${
          shouldUseShowcaseMobileLayout
            ? "hidden"
            : isMobileStepsOpen
              ? "hidden"
              : "block"
        }`}
      >
        <div className="mx-auto flex max-w-md items-center justify-center gap-2">
          <p className="w-[40%] truncate text-right text-[13px] text-[#101010] font-family-instrument">
            {previousStepLabel}
          </p>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => handleStepChange((prev) => prev - 1)}
              disabled={activeStep === 0}
              className="flex h-9 w-9 items-center justify-center disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous step"
            >
              <img src={downarrow} />
            </button>
            <div
              className={`h-7 w-0.5 ${
                isFusionProject ? "bg-violet-700/70" : "bg-teal-700/70"
              }`}
            />
            <button
              type="button"
              onClick={() => handleStepChange((prev) => prev + 1)}
              disabled={activeStep === steps.length - 1}
              className="flex h-9 w-9 items-center justify-center disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next step"
            >
              <img src={uparrow} />
            </button>
          </div>

          <p className="w-[40%] truncate text-left text-[13px] text-[#101010] font-family-instrument">
            {nextStepLabel}
          </p>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * SectionRenderer for "fusion" project
 * Handles: Project Overview, Scope, Logo Variations, Mood Board, Color, Typography, Shapes, UI Elements, Icons, Stationary, Social Media, Collage
 */
export default function SectionRendererFusion({ project, sectionName }) {
  const [logoSlideIndex, setLogoSlideIndex] = useState(0);
  const [logoSlideDirection, setLogoSlideDirection] = useState(1);
  const [colorSlideIndex, setColorSlideIndex] = useState(0);
  const [colorSlideDirection, setColorSlideDirection] = useState(1);
  const [isIconsDarkMode, setIsIconsDarkMode] = useState(false);
  const [isSocialDarkMode, setIsSocialDarkMode] = useState(false);

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
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>
    );
  }

  // SCOPE OF PROJECT
  if (sectionName === "Scope of the Project") {
    const data = project.step2;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white"
      >
        <img
          src={data?.image}
          alt="Scope of the Project"
          className="w-full rounded-lg object-contain"
        />
      </motion.div>
    );
  }

  // BRAND IDENTITY
  if (sectionName === "Brand Identity") {
    const data = project.step3;
    return (
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white border border-gray-200 rounded-xl p-10"
      >
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

  // LOGO VARIATIONS
  if (sectionName === "Logo Variations") {
    const data = project.step3;
    const logoImages = data?.logoImages?.length
      ? data.logoImages
      : data?.brandImage
        ? [data.brandImage]
        : [];
    const activeLogo = logoImages[logoSlideIndex] || data?.brandImage;

    const slideVariants = {
      enter: (direction) => ({
        x: direction > 0 ? 120 : -120,
        opacity: 0,
      }),
      center: {
        x: 0,
        opacity: 1,
      },
      exit: (direction) => ({
        x: direction > 0 ? -120 : 120,
        opacity: 0,
      }),
    };

    const moveSlide = (direction) => {
      if (logoImages.length <= 1) return;
      setLogoSlideDirection(direction);
      setLogoSlideIndex(
        (prev) => (prev + direction + logoImages.length) % logoImages.length,
      );
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white"
      >
        <div className="relative overflow-hidden rounded-lg">
          <AnimatePresence mode="wait" custom={logoSlideDirection}>
            <motion.img
              key={`${activeLogo}-${logoSlideIndex}`}
              src={activeLogo}
              alt="Logo Variation"
              custom={logoSlideDirection}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-full rounded-lg object-contain"
            />
          </AnimatePresence>

          <div className="absolute bottom-16 left-1/2 z-20 -translate-x-1/2 flex items-center gap-2">
            {logoImages.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 w-2 rounded-full ${
                  idx === logoSlideIndex ? "bg-[#50525a]" : "bg-white"
                }`}
              />
            ))}
          </div>

          <div className="absolute bottom-16 right-16.5 z-20">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => moveSlide(-1)}
                className="h-10 w-10 rounded-full border border-[#008F8D] bg-[#008F8D] text-lg leading-none text-[#4f3d91] transition "
                aria-label="Previous logo variation"
              >
                <ChevronLeft size={18} className="mx-auto" />
              </button>
              <button
                type="button"
                onClick={() => moveSlide(1)}
                className="h-10 w-10 rounded-full border border-[#008F8D] bg-[#008F8D] text-lg leading-none text-[#8578b5] transition"
                aria-label="Next logo variation"
              >
                <ChevronRight size={18} className="mx-auto" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // MOOD BOARD
  if (sectionName === "Mood Board") {
    const data = project.step4;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl"
      >
        <img
          src={data?.image}
          alt="Mood Board"
          className="w-full rounded-lg object-contain"
        />
      </motion.div>
    );
  }

  // COLOR
  if (sectionName === "Color") {
    const data = project.step5;
    const colorImages = data?.colorImages?.length ? data.colorImages : [];
    const activeColor = colorImages[colorSlideIndex];

    const slideVariants = {
      enter: (direction) => ({
        x: direction > 0 ? 120 : -120,
        opacity: 0,
      }),
      center: {
        x: 0,
        opacity: 1,
      },
      exit: (direction) => ({
        x: direction > 0 ? -120 : 120,
        opacity: 0,
      }),
    };

    const moveColorSlide = (direction) => {
      if (colorImages.length <= 1) return;
      setColorSlideDirection(direction);
      setColorSlideIndex(
        (prev) => (prev + direction + colorImages.length) % colorImages.length,
      );
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white"
      >
        <div className="relative overflow-hidden rounded-lg">
          <AnimatePresence mode="wait" custom={colorSlideDirection}>
            <motion.img
              key={`${activeColor}-${colorSlideIndex}`}
              src={activeColor}
              alt="Color"
              custom={colorSlideDirection}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-full rounded-lg object-contain"
            />
          </AnimatePresence>

          <div className="absolute bottom-16 left-1/2 z-20 -translate-x-1/2 flex items-center gap-2">
            {colorImages.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 w-2 rounded-full ${
                  idx === colorSlideIndex ? "bg-[#50525a]" : "bg-white"
                }`}
              />
            ))}
          </div>

          <div className="absolute bottom-15 right-16 z-20">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => moveColorSlide(-1)}
                className="h-10 w-10 rounded-full border border-[#008F8D1F] bg-[#008F8D1F] text-xl leading-none text-[#4f3d91] transition"
                aria-label="Previous color"
              >
                <ChevronLeft size={18} className="mx-auto text-[#008F8D1F]" />
              </button>
              <button
                type="button"
                onClick={() => moveColorSlide(1)}
                className="h-10 w-10 rounded-full border border-[#008F8D1F] bg-[#008F8D1F] text-xl leading-none text-[#8578b5] transition"
                aria-label="Next color"
              >
                <ChevronRight size={18} className="mx-auto text-[#008F8D1F]" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // TYPOGRAPHY
  if (sectionName === "Typography") {
    const data = project.step6;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white"
      >
        <img
          src={data?.image}
          alt="Typography"
          className="w-full rounded-lg object-contain"
        />
      </motion.div>
    );
  }

  // SHAPES AND PATTERNS
  if (
    sectionName === "Shapes and Patterns" ||
    sectionName === "Shapes and elements"
  ) {
    const data = project.step7;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white"
      >
        <img
          src={data?.image}
          alt={sectionName}
          className="w-full rounded-lg object-contain"
        />
      </motion.div>
    );
  }

  // UI ELEMENTS
  if (sectionName === "UI Elements") {
    const data = project.step8;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white"
      >
        <img
          src={data?.image}
          alt="UI Elements"
          className="w-full rounded-lg object-contain"
        />
      </motion.div>
    );
  }

  // ICONS
  if (sectionName === "Icons") {
    const data = project.step8 || project.step9;
    const activeIconsImage = isIconsDarkMode
      ? data?.darkImage
      : data?.lightImage;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`min-h-[72vh] rounded-lg p-6 md:min-h-[76vh] md:p-10 ${
          isIconsDarkMode
            ? "bg-[#2A3638]"
            : "bg-gradient-to-br from-[#F4F4F4] to-[#C1E8E7]"
        }`}
      >
        <div className="mb-8 flex items-center justify-center gap-4">
          <span
            className={`text-xl ${
              isIconsDarkMode ? "text-[#dfdcff]" : "text-[#241f4a]"
            }`}
          >
            Light Mode
          </span>
          <button
            type="button"
            onClick={() => setIsIconsDarkMode((prev) => !prev)}
            className={`relative h-8 w-14 rounded-full border transition ${
              isIconsDarkMode
                ? "border-[#d7d2fb] bg-[#008F8D]"
                : "border-[#4c4194] bg-[#eceaff]"
            }`}
            aria-label="Toggle icons light and dark mode"
          >
            <span
              className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition ${
                isIconsDarkMode ? "left-7" : "left-1"
              }`}
            />
          </button>
          <span
            className={`text-xl ${
              isIconsDarkMode ? "text-[#ffffff]" : "text-[#241f4a]"
            }`}
          >
            Dark Mode
          </span>
        </div>

        <img
          src={activeIconsImage}
          alt={isIconsDarkMode ? "Icons Dark Mode" : "Icons Light Mode"}
          className="mx-auto w-full max-w-[840px] rounded-lg object-contain"
        />
      </motion.div>
    );
  }

  // STATIONARY
  if (sectionName === "Stationary") {
    const data = project.step10;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white"
      >
        <img
          src={data?.image}
          alt="Stationary"
          className="w-full rounded-lg object-contain"
        />
      </motion.div>
    );
  }

  // SOCIAL MEDIA
  if (sectionName === "Social Media") {
    const data = project.step11;
    const activeSocialImage = isSocialDarkMode
      ? data?.darkImage
      : data?.lightImage;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex min-h-[72vh] flex-col rounded-lg p-6 md:min-h-[76vh] md:p-10 ${
          isSocialDarkMode ? "bg-[#5a4fa3]" : "bg-[#d5d3eb]"
        }`}
      >
        <div className="mb-8 flex items-center justify-center gap-4">
          <span
            className={`text-xl ${
              isSocialDarkMode ? "text-[#dfdcff]" : "text-[#241f4a]"
            }`}
          >
            Light Mode
          </span>
          <button
            type="button"
            onClick={() => setIsSocialDarkMode((prev) => !prev)}
            className={`relative h-8 w-14 rounded-full border transition ${
              isSocialDarkMode
                ? "border-[#d7d2fb] bg-[#433a86]"
                : "border-[#4c4194] bg-[#eceaff]"
            }`}
            aria-label="Toggle social media light and dark mode"
          >
            <span
              className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition ${
                isSocialDarkMode ? "left-7" : "left-1"
              }`}
            />
          </button>
          <span
            className={`text-xl ${
              isSocialDarkMode ? "text-[#ffffff]" : "text-[#241f4a]"
            }`}
          >
            Dark Mode
          </span>
        </div>

        <div className="flex min-h-0 flex-1 items-center justify-center">
          <img
            src={activeSocialImage}
            alt={
              isSocialDarkMode
                ? "Social Media Dark Mode"
                : "Social Media Light Mode"
            }
            className="h-full w-full rounded-lg object-contain"
          />
        </div>
      </motion.div>
    );
  }

  // DESIGN COLLECTION
  if (sectionName === "Design Collection") {
    const data = project.step9 || project.step10;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white"
      >
        <img
          src={data?.image}
          alt="Design Collection"
          className="w-full rounded-lg object-contain"
        />
      </motion.div>
    );
  }

  // COLLAGE
  if (sectionName === "Collage") {
    const data = project.step12;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white"
      >
        <img
          src={data?.image}
          alt="Collage"
          className="w-full rounded-lg object-contain"
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
    const data =
      sectionName === "View Project"
        ? {
            responsiveImage:
              project.step10?.responsiveImage || project.step7?.responsiveImage,
          }
        : project.step7;
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl"
      >
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

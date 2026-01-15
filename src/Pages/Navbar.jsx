import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logodesktop from "../Images/logodesktop.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past the first screen (approximately 80vh or more)
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "You-I", href: "#you-i" },
    { label: "Why me?", href: "#why-me" },
    { label: "Partners", href: "#partners" },
    { label: "My SLAs", href: "#my-slas" },
    { label: "Results", href: "#results" },
    { label: "Portfolio", href: "/portfolio" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-[#E1F0F2]"
      }`}
    >
      <div className="  flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logodesktop} />
        </div>

        {/* Hamburger Icon for Mobile */}

        <button
          onClick={toggleMenu}
          className={`md:hidden flex flex-col gap-1.5 z-50 ${
            isOpen ? "invisible" : ""
          }`}
        >
          <span
            className={`w-6 h-0.5 bg-gray-700 transition-all ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-700 transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-700 transition-all ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-14">
          {/* Navigation Items */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-[#1C1D22BF] hover:text-gray-800 text-[20px] font-family-instrument transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gray-800  group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 border-2 bg-white border-[#257D89] text-[#257D89] font-medium rounded  transition-colors">
              Let's Talk Money!
            </button>
            <button className="px-6 py-2 bg-[#257D89] text-white font-medium rounded  transition-colors">
              Let's Collaborate
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full bg-[#C0E4E9] flex flex-col md:hidden z-40">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-4 py-4 ">
              <div className="flex items-center">
                <img src={logodesktop} />
              </div>

              <button
                onClick={toggleMenu}
                className="text-gray-700 text-2xl font-light"
              >
                ✕
              </button>
            </div>

            {/* Mobile Navigation Items */}
            <div className="flex flex-col px-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={toggleMenu}
                  className="px-4 py-4 text-center text-gray-700 border-b font-family-instrument border-[#1C1D22] transition-colors  font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Buttons */}
            <div className="flex  gap-3 p-4">
              <button className="w-full px-6 py-2 border-2 bg-white border-[#257D89] text-[#257D89] font-medium rounded hover:bg-teal-50 transition-colors text-sm">
                Let's Talk Money!
              </button>
              <button className="w-full px-6 py-2 bg-[#257D89] text-white font-medium rounded hover:bg-teal-700 transition-colors text-sm">
                Let's Collaborate
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: "You-I", href: "#you-i" },
    { label: "Why me?", href: "#why-me" },
    { label: "Partners", href: "#partners" },
    { label: "My SLAs", href: "#my-slas" },
    { label: "Results", href: "#results" },
  ];

  return (
    <nav className="bg-[#E1F0F2] px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-sm md:text-lg font-bold text-gray-800">
            <span className="text-teal-600">TCS</span>
            <span className="hidden md:inline">-The Creative SOS</span>
          </span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 z-50"
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
          <div className="flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-teal-600 text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 border-2 bg-white border-teal-500 text-teal-600 font-medium rounded hover:bg-teal-50 transition-colors">
              Let's Talk Money!
            </button>
            <button className="px-6 py-2 bg-[#257D89] text-white font-medium rounded hover:bg-teal-700 transition-colors">
              Let's Collaborate
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full bg-[#E1F0F2] flex flex-col md:hidden z-40">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-blue-300">
              <span className="text-sm font-bold text-gray-800">
                <span className="text-teal-600">TCS</span>-The Creative SOS
              </span>
              <button
                onClick={toggleMenu}
                className="text-gray-700 text-2xl font-light"
              >
                ✕
              </button>
            </div>

            {/* Mobile Navigation Items */}
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={toggleMenu}
                  className="px-4 py-4 text-center text-gray-700 border-b border-blue-300 hover:bg-blue-50 transition-colors text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 p-4">
              <button className="w-full px-6 py-2 border-2 bg-white border-teal-500 text-teal-600 font-medium rounded hover:bg-teal-50 transition-colors text-sm">
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

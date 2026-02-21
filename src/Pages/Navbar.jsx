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
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "You-I", href: "#you-i", type: "section" },
    { label: "Why me?", href: "#why-me", type: "section" },
    { label: "Partners", href: "#partners", type: "section" },
    { label: "My SLAs", href: "#my-slas", type: "section" },
    { label: "Results", href: "#results", type: "section" },
    { label: "Portfolio", href: "/portfolio", type: "route" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-[#E1F0F2]"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logodesktop} alt="logo" />
        </div>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className={`md:hidden flex flex-col gap-1.5 z-50 ${
            isOpen ? "invisible" : ""
          }`}
        >
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-14">
          <div className="flex items-center gap-8">
            {navItems.map((item) =>
              item.type === "route" ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-[#1C1D22BF] hover:text-gray-800 text-[20px] font-family-instrument"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[#1C1D22BF] hover:text-gray-800 text-[20px] font-family-instrument"
                >
                  {item.label}
                </a>
              ),
            )}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="px-6 py-2 border-2 bg-white border-[#257D89] text-[#257D89] font-medium rounded inline-block"
            >
              Let's Talk Money!
            </a>
            <button className="px-6 py-2 bg-[#257D89] text-white font-medium rounded">
              Let's Collaborate
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full bg-[#C0E4E9] flex flex-col md:hidden z-40">
            <div className="flex items-center justify-between px-4 py-4">
              <img src={logodesktop} alt="logo" />
              <button onClick={toggleMenu} className="text-2xl">
                ✕
              </button>
            </div>

            <div className="flex flex-col px-4">
              {navItems.map((item) =>
                item.type === "route" ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={toggleMenu}
                    className="px-4 py-4 text-center border-b"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={toggleMenu}
                    className="px-4 py-4 text-center border-b"
                  >
                    {item.label}
                  </a>
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

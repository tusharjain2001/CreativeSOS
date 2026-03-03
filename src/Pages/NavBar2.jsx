import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logodesktop from "../Images/logodesktop.svg";

export default function Navbar2({ onMobileMenuClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isCustomMobileMenu = typeof onMobileMenuClick === "function";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
  ];

  return (
    <nav
      className={`relative top-0 left-0 right-0 z-50 border-b border-[#797979] px-4 py-4 md:border-b-0 md:px-8 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logodesktop} alt="GoDesyn Logo" className="h-7 w-auto" />
        </div>

        <button
          type="button"
          onClick={() => {
            if (isCustomMobileMenu) {
              onMobileMenuClick();
              return;
            }
            setIsOpen((prev) => !prev);
          }}
          className={`z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded md:hidden ${
            isOpen && !isCustomMobileMenu ? "invisible" : ""
          }`}
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-6 bg-gray-700" />
          <span className="h-0.5 w-6 bg-gray-700" />
          <span className="h-0.5 w-6 bg-gray-700" />
        </button>

        <div className="hidden md:flex items-center gap-14">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-[#1C1D22BF] hover:text-gray-800 text-[20px] font-family-instrument transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gray-800 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="px-6 py-2 border-2 bg-white border-[#257D89] text-[#257D89] font-medium rounded transition-colors">
              Let's Talk Money!
            </button>
            <button className="px-6 py-2 bg-[#257D89] text-white font-medium rounded transition-colors">
              Let's Collaborate
            </button>
          </div>
        </div>

        {!isCustomMobileMenu && isOpen && (
          <div className="absolute top-0 left-0 z-40 flex w-full flex-col border-b border-gray-200 bg-[#C0E4E9] md:hidden">
            <div className="flex items-center justify-between px-4 py-4">
              <div className="flex items-center">
                <img
                  src={logodesktop}
                  alt="GoDesyn Logo"
                  className="h-7 w-auto"
                />
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 text-2xl font-light"
                aria-label="Close menu"
              >
                x
              </button>
            </div>

            <div className="flex flex-col px-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-4 text-center text-gray-700 border-b font-family-instrument border-[#1C1D22] transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex gap-3 p-4">
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

import { useState } from "react";
import { Link } from "react-router";
import BrandLogo from "../assets/TGVH-Logo-wo-text.svg";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-[#013220] shadow-sm border-b border-[#ffd21f]">
        <div className="flex items-center xl:ml-[65px]">
          <Link to="/">
            <img
              className="w-8"
              src={BrandLogo}
              alt="The Grand Velora Hotel"
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo(0, 0);
              }}
            />
          </Link>

          <div className="ml-2 text-xl hidden xl:block font-semibold text-[#ffd21f]">
            The Grand Velora Hotel
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5 xl:mr-[80px]">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="text-[#ffd21f] hover:text-white transition"
          >
            Home
          </Link>

          <Link
            to="/setbooking"
            onClick={() => window.scrollTo(0, 0)}
            className="text-[#ffd21f] hover:text-white transition"
          >
            Book now
          </Link>

          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="text-[#ffd21f] hover:text-white transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-[#ffd21f]"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Full-Screen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#013220] flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-10 text-3xl font-semibold">
            <Link
              to="/"
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo(0, 0);
              }}
              className="text-white hover:text-[#ffd21f]"
            >
              Home
            </Link>

            <Link
              to="/setbooking"
              className="text-white hover:text-[#ffd21f]"
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              Book now
            </Link>

            <Link
              to="/terms"
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo(0, 0);
              }}
              className="text-white hover:text-[#ffd21f]"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/contact"
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo(0, 0);
              }}
              className="text-white hover:text-[#ffd21f]"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

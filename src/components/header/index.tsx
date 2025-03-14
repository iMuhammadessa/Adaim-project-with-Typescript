import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 bg-opacity-90 rounded-b-lg">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src="images/home/logo.png"
              alt="logo"
              className="w-28 transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6 text-white font-medium uppercase">
            {[
              "Home",
              "About",
              "Services",
              "Blog",
              "Announcement",
              "Contact",
            ].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="relative group transition-colors duration-300 hover:text-gray-300"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          <button
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-cyan-500 hover:to-teal-600 text-white px-5 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            onClick={() => (window.location.href = "tel:+1234567890")}
          >
            Call Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="bg-[#203A43] w-3/4 h-full p-6 shadow-xl flex flex-col space-y-6">
          {["Home", "About", "Services", "Blog", "Announcement", "Contact"].map(
            (item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-white text-lg py-2 hover:text-teal-400 uppercase"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            )
          )}
          <button
            className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 mt-6 w-full rounded-lg shadow-lg"
            onClick={() => {
              setIsOpen(false);
              window.location.href = "tel:+1234567890";
            }}
          >
            Call Now
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

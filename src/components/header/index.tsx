import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="absolute top-0 left-0 w-full bg-gray-800 bg-opacity-75 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 bg-[#0EB0AA]">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src="images/home/logo.png" alt="logo" className="w-24" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-white font-semibold">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/services" className="hover:text-gray-400">
            Services
          </Link>
          <Link to="/blog" className="hover:text-gray-400">
            Blog
          </Link>
          <Link to="/announcement" className="hover:text-gray-400">
            Announcement
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => (window.location.href = "tel:+1234567890")}
          >
            Call Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <label
            htmlFor="menu-toggle"
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
          </label>
          <input type="checkbox" id="menu-toggle" className="hidden" />

          {/* Mobile Menu */}
          <nav
            className="bg-gray-800 bg-opacity-90 px-6 py-4 fixed top-0 left-0 right-0 z-50 md:hidden transform transition-transform duration-300 ease-in-out"
            id="mobile-menu"
          >
            <Link to="/" className="block py-2 hover:text-gray-400">
              Home
            </Link>
            <Link to="/about" className="block py-2 hover:text-gray-400">
              About
            </Link>
            <Link to="/services" className="block py-2 hover:text-gray-400">
              Services
            </Link>
            <Link to="/blog" className="block py-2 hover:text-gray-400">
              Blog
            </Link>
            <Link to="/announcement" className="block py-2 hover:text-gray-400">
              Announcement
            </Link>
            <Link to="/contact" className="block py-2 hover:text-gray-400">
              Contact
            </Link>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 w-full rounded"
              onClick={() => (window.location.href = "tel:+1234567890")}
            >
              Call Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

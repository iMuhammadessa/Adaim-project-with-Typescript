import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white w-full mt-[5rem]">
      {/* Contact Information */}
      <div className="container mx-auto px-6 py-8 w-11/12 md:w-10/12 lg:w-9/12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white pb-6 text-center md:text-left">
          <div>
            <p className="font-semibold text-lg">Phone:</p>
            <p className="text-gray-300">+92 (302) 8334848</p>
          </div>
          <div>
            <p className="font-semibold text-lg">Email:</p>
            <p className="text-gray-300">contact@adaim.com.pk</p>
          </div>
          <div>
            <p className="font-semibold text-lg">Address:</p>
            <p className="text-gray-300 leading-relaxed">
              FF04, 1st Floor, University Road, Peshawar
            </p>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6">
          {/* Logo and Address */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="images/home/logo.png"
              alt="Logo"
              className="w-32 h-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2 text-center md:text-left">
              Would you like to start a project with us?
            </h2>
            <p className="text-gray-300 text-center md:text-left">
              Visit us at:
            </p>
            <p className="text-gray-300 text-center md:text-left leading-relaxed">
              FF04, 1st Floor, University Road, Peshawar
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {["Home", "About Us", "Services", "Contact Us", "Blogs"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-yellow-400 transition duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Our Services */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                "Facebook Marketing",
                "Instagram Marketing",
                "YouTube Marketing",
                "Google Ads",
                "Video Marketing",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to={`/${service.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright & Social Media */}
        <div className="text-center border-t border-white pt-4">
          <p className="text-gray-300">
            Adaim &copy; 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0EB0AA] text-white w-full mt-[30rem]">
      <div className="mx-auto px-6 py-8 w-11/12 md:w-10/12 lg:w-9/12">
        {/* contact information */}
        <div className="flex flex-col md:flex-row justify-between border-b border-white pb-4">
          <div className="mb-4 md:mb-0">
            <p className="font-semibold">Phone:</p>
            <p>+923028334848</p>
          </div>
          <div className="mb-4 md:mb-0">
            <p className="font-semibold">Email:</p>
            <p>info@adaim.pk</p>
          </div>
          <div>
            <p>FF04, 1st Floor, Awan Tower,</p>
            <p>Near Mercy Teaching Hospital, Tehkal Payyan,</p>
            <p>University Road, Peshawar</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* footer content */}
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8 py-8">
          {/* logo and address */}
          <div className="flex-1">
            <img
              src="images/home/logo.png"
              alt="Logo"
              className="w-32 h-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2">
              Would you like to start a project with us?
            </h2>
            <p>Visit us at:</p>
            <p>FF04, 1st Floor, Awan Tower, Near Mercy Teaching Hospital,</p>
            <p>Tehkal Payyan, University Road, Peshawar</p>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-yellow-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-yellow-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-yellow-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-yellow-400">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/facebook-marketing"
                  className="hover:text-yellow-400"
                >
                  Facebook Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/instagram-marketing"
                  className="hover:text-yellow-400"
                >
                  Instagram Marketing
                </Link>
              </li>
              <li>
                <Link to="/youtube-marketing" className="hover:text-yellow-400">
                  YouTube Marketing
                </Link>
              </li>
              <li>
                <Link to="/google-ads" className="hover:text-yellow-400">
                  Google Ads
                </Link>
              </li>
              <li>
                <Link to="/video-marketing" className="hover:text-yellow-400">
                  Video Marketing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-white pt-4">
          <p>&copy; 2024 adaim.pk. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

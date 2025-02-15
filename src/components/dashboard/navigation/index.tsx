import { Link } from "react-router-dom";
import {
  FaBullhorn,
  FaBlog,
  FaUsers,
  FaAd,
  FaBuilding,
  FaEnvelope,
  FaUsersCog,
  FaUser,
} from "react-icons/fa";

function DashboardNavigation() {
  return (
    <div className="h-screen w-[17%] bg-blue-700  p-4 shadow-md ">
      <nav className="flex flex-col space-y-6 text-white">
        <Link
          to="/dashboard/announcement"
          className="hover:text-gray-300 flex items-center space-x-2"
        >
          <FaBullhorn /> <span>Announcement</span>
        </Link>
        <Link
          to="/dashboard/blog"
          className="hover:text-gray-300 flex items-center space-x-2"
        >
          <FaBlog /> <span>Blog</span>
        </Link>
        <Link
          to="/dashboard/clients"
          className="hover:text-gray-300 flex items-center space-x-2"
        >
          <FaUsers /> <span>Clients</span>
        </Link>
        <Link
          to="/dashboard/clientads"
          className="hover:text-gray-300 flex items-center space-x-2"
        >
          <FaAd /> <span>Client Ads</span>
        </Link>
        <Link
          to="/dashboard/companies"
          className="hover:text-gray-300 flex items-center space-x-2"
        >
          <FaBuilding /> <span>Companies</span>
        </Link>

        <Link
          to="/dashboard/team"
          className="hover:text-gray-300 flex items-center space-x-2"
        >
          <FaUsersCog /> <span>Team</span>
        </Link>
        <Link
          to="/dashboard/users"
          className="hover:text-gray-300 flex items-center space-x-2"
        >
          <FaUser /> <span>Users</span>
        </Link>
        <Link
          to="/dashboard/contactus"
          className="hover:text-gray-300 flex items-center space-x-2"
        >
          <FaEnvelope /> <span>Contact Us</span>
        </Link>
      </nav>
    </div>
  );
}

export default DashboardNavigation;

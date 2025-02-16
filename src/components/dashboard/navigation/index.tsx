import { Link } from "react-router-dom";

function DashboardNavigation() {
  return (
    <div className="h-screen bg-white w-[16%] p-4 shadow-md flex flex-col justify-start">
      <nav className="flex flex-col space-y-4">
        <Link
          to="/dashboard/announcement"
          className="text-gray-700 hover:text-blue-500"
        >
          Announcement
        </Link>
        <Link
          to="/dashboard/blog"
          className="text-gray-700 hover:text-blue-500"
        >
          Blog
        </Link>
        <Link
          to="/dashboard/clients"
          className="text-gray-700 hover:text-blue-500"
        >
          Clients
        </Link>
        <Link
          to="/dashboard/clientads"
          className="text-gray-700 hover:text-blue-500"
        >
          Client Ads
        </Link>
        <Link
          to="/dashboard/companies"
          className="text-gray-700 hover:text-blue-500"
        >
          Companies
        </Link>
        <Link
          to="/dashboard/team"
          className="text-gray-700 hover:text-blue-500"
        >
          Team
        </Link>
        <Link
          to="/dashboard/users"
          className="text-gray-700 hover:text-blue-500"
        >
          Users
        </Link>
        <Link
          to="/dashboard/contactus"
          className="text-gray-700 hover:text-blue-500"
        >
          Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default DashboardNavigation;

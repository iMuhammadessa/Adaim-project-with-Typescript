import DashboardNavigation from "../../components/dashboard/navigation";
import { Outlet } from "react-router-dom";

function MainDashboard() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-white">
      <div className="w-full md:w-64 md:h-full bg-gray-100 shadow-md">
        <DashboardNavigation />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 md:pl-8">
        <Outlet />
      </div>
    </div>
  );
}

export default MainDashboard;

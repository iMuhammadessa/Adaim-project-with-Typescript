import DashboardNavigation from "../../components/dashboard/navigation";
import { Outlet } from "react-router-dom";

function MainDashboard() {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="fixed md:relative w-64 h-screen bg-gray-100">
        <DashboardNavigation />
      </div>

      <div className="flex-1 flex flex-col items-center justify-start pt-4 md:pt-8 p-6 md:ml-64">
        <Outlet />
      </div>
    </div>
  );
}

export default MainDashboard;

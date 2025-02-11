import DashboardNavigation from "../../components/dashboard/navigation";
import { Outlet } from "react-router-dom";
function MainDashboard() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <DashboardNavigation />
      <div className="flex-1 flex flex-col items-center justify-start p-6 md:pl-16">
        <Outlet />
      </div>
    </div>
  );
}

export default MainDashboard;

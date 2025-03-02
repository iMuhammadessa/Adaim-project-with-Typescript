import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function GetUserData() {
  const response = await axios.get("http://localhost:3009/api/user");
  return response.data;
}

function DashboardUsersPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["userData"],
    queryFn: GetUserData,
  });

  console.log("user data response is here", data);

  if (isLoading) {
    return <p className="text-red-600">isLoading...</p>;
  }

  if (error) {
    return <p className="text-red-600">Something Went Wrong...</p>;
  }

  const users = data?.users || data?.data || [];

  return (
    <div className="min-h-screen w-full bg-gray-50 p-4 md:p-6 flex flex-col">
      {/* Header and Table Section in One Container */}
      <div className="w-full max-w-full mx-auto bg-white shadow-lg rounded-lg p-4 md:p-6">
        {/* Header Section (Title Left Side) */}
        <div className="flex items-center justify-between w-full mb-4 md:mb-6">
          <h2 className="text-lg md:text-3xl font-bold text-gray-800 text-left">
            Users
          </h2>
          <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-3 md:px-4 py-2 rounded-lg shadow-md hover:from-teal-600 hover:to-green-500 transition-all">
            Add
          </button>
        </div>

        {/* Table Section (Proper Layout) */}
        <div className="overflow-x-auto mt-2 md:mt-5">
          <table className="w-full min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-gray-200 text-gray-700">
              <tr className="text-left text-xs md:text-sm">
                <th className="px-2 md:px-4 py-2 border">ID</th>
                <th className="px-2 md:px-4 py-2 border">Name</th>
                <th className="px-2 md:px-4 py-2 border">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user: any) => (
                  <tr
                    key={user.id}
                    className="text-xs md:text-sm text-gray-700 bg-white hover:bg-gray-100"
                  >
                    <td className="px-2 md:px-4 py-2 border">{user.id}</td>
                    <td className="px-2 md:px-4 py-2 border">{user.name}</td>
                    <td className="px-2 md:px-4 py-2 border">{user.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center p-4 text-gray-600">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardUsersPage;

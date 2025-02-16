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

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const users = data?.users || data?.data || [];

  return (
    <div className="min-h-screen px-4 py-6 flex flex-col items-center bg-gray-50">
      <div className="w-full max-w-6xl flex justify-between items-center mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Users</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Add User
        </button>
      </div>

      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-4 overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table className="w-full min-w-[600px] border border-gray-300 rounded-lg">
            <thead className="bg-gray-200 text-gray-700">
              <tr className="text-left text-sm sm:text-base">
                <th className="px-4 py-2 border whitespace-nowrap">ID</th>
                <th className="px-4 py-2 border whitespace-nowrap">Name</th>
                <th className="px-4 py-2 border whitespace-nowrap">Email</th>
                <th className="px-4 py-2 border whitespace-nowrap">Password</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user: any) => (
                  <tr
                    key={user.id}
                    className="text-sm sm:text-base text-gray-700 bg-white hover:bg-gray-100"
                  >
                    <td className="px-4 py-2 border whitespace-nowrap">
                      {user.id}
                    </td>
                    <td className="px-4 py-2 border whitespace-nowrap">
                      {user.name}
                    </td>
                    <td className="px-4 py-2 border whitespace-nowrap">
                      {user.email}
                    </td>
                    <td className="px-4 py-2 border whitespace-nowrap">
                      {user.password}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center p-4 text-gray-600">
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

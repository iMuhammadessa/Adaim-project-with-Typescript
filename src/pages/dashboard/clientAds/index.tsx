import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  asyncCreateClientAd,
  asyncDeleteClientAd,
  asyncUpdateClientAd,
} from "../../../api/clientsAds/fetchers";
import { useGetAllClientAds } from "../../../api/clientsAds/queries";

function DashboardClientsadspage() {
  const queryClient = useQueryClient();

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: any) => {
      await asyncDeleteClientAd(id);
      return id;
    },
    onSuccess: (id) => {
      console.log(`Successfully deleted ID: ${id}`);
      queryClient.invalidateQueries({ queryKey: ["clientsads"] });
    },
    onError: () => {
      console.log("Error in Deleting...");
    },
  });

  // Update mutation
  const updateMutation = useMutation({
    mutationFn: async ({ id, newData }: { id: number; newData: any }) => {
      await asyncUpdateClientAd(id, newData);
      return { id, newData };
    },
    onSuccess: ({ id, newData }) => {
      console.log(`Successfully updated ID: ${id} with data:`, newData);
      queryClient.invalidateQueries({ queryKey: ["clientsads"] });
    },
    onError: (error) => {
      console.error("Error updating data:", error);
    },
  });

  const handleUpdate = (id: number) => {
    const newData = {
      name: "Suliman Shah",
      phoneNo: 92335984594,
      address: "6th Road, Karachi - Karachi",
      type: "Full Stack Web Developer",
    };
    updateMutation.mutate({ id, newData });
  };

  // Create mutation
  const createMutation = useMutation({
    mutationFn: async (data: any) => {
      await asyncCreateClientAd(data);
      return data;
    },
    onSuccess: () => {
      console.log("Successfully created a new ad");
      queryClient.invalidateQueries({ queryKey: ["clientsads"] });
    },
    onError: () => {
      console.log("Error in creating...");
    },
  });

  const handleCreate = () => {
    const newData = {
      name: "Mehran",
      phoneNo: +923359348844,
      address: "peshawar",
      type: "New Type",
    };
    createMutation.mutate(newData);
  };

  // Get All Data
  const { data: users, isLoading, isError } = useGetAllClientAds();
  console.log("All Users:", users);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something Went Wrong...</p>;

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-50 w-full flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Clients Ads
        </h2>
      </div>

      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6 overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-2 sm:px-4 py-2 border">ID</th>
              <th className="px-2 sm:px-4 py-2 border">Name</th>
              <th className="px-2 sm:px-4 py-2 border">Phone No</th>
              <th className="px-2 sm:px-4 py-2 border">Address</th>
              <th className="px-2 sm:px-4 py-2 border">Type</th>
              <th className="px-2 sm:px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((item: any) => (
              <tr
                key={item.id}
                className="text-gray-700 bg-white hover:bg-gray-100"
              >
                <td className="px-2 sm:px-4 py-2 border">{item.id}</td>
                <td className="px-2 sm:px-4 py-2 border">{item.name}</td>
                <td className="px-2 sm:px-4 py-2 border">{item.phoneNo}</td>
                <td className="px-2 sm:px-4 py-2 border">{item.address}</td>
                <td className="px-2 sm:px-4 py-2 border">{item.type}</td>
                <td className="px-2 sm:px-4 py-2 border flex gap-2">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all"
                    onClick={() => deleteMutation.mutate(item.id)}
                  >
                    Delete
                  </button>

                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
                    onClick={() => handleUpdate(8)}
                  >
                    Update
                  </button>

                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all"
                    onClick={handleCreate}
                  >
                    Create
                  </button>
                </td>
              </tr>
            )) ?? (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardClientsadspage;

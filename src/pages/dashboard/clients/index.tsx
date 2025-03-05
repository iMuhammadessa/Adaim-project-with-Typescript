import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGetAllClients } from "../../../api/clients/queries";
import {
  asyncCreateClient,
  asyncDeleteClient,
  asyncUpdateClient,
} from "../../../api/clients/fetchers";

type Client = {
  id: number;
  name: string;
  email: string;
  phoneNo: string;
  address: string;
  image: string;
};

function DashboardClientsPage() {
  const queryClient = useQueryClient();

  //  delete mutation

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await asyncDeleteClient(id);
      return id;
    },
    onSuccess: (id) => {
      console.log(`Successfully deleted Client ID: ${id}`);
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
    onError: (error) => {
      console.log("Error in Deleting Client:", error);
    },
  });

  //  update mutation

  const updateMutation = useMutation({
    mutationFn: async ({ id, newData }: { id: number; newData: Client }) => {
      await asyncUpdateClient(id, newData);
      return { id, newData };
    },
    onSuccess: ({ id, newData }) => {
      console.log(`Successfully updated Client ID: ${id} with data:`, newData);
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
    onError: (error) => {
      console.error("Error updating Client data:", error);
    },
  });

  //  create mutation

  const createMutation = useMutation({
    mutationFn: async (data: Client) => {
      await asyncCreateClient(data);
      return data;
    },
    onSuccess: () => {
      console.log("Successfully created a new Client");
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
    onError: (error) => {
      console.log("Error in creating Client:", error);
    },
  });

  const { data: clients, isLoading, isError } = useGetAllClients();
  console.log("All Clients:", clients);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something Went Wrong...</p>;

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-50 w-full flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Clients
        </h2>
      </div>

      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6 overflow-x-auto">
        <table className="w-full min-w-[600px] border border-gray-300 rounded-lg text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Phone No</th>
              <th className="px-4 py-2 border">Address</th>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients && clients.length > 0 ? (
              clients.map((client: Client) => (
                <tr
                  key={client.id}
                  className="text-gray-700 bg-white hover:bg-gray-100"
                >
                  <td className="px-4 py-2 border">{client.id}</td>
                  <td className="px-4 py-2 border">{client.name}</td>
                  <td className="px-4 py-2 border">{client.email}</td>
                  <td className="px-4 py-2 border">{client.phoneNo}</td>
                  <td className="px-4 py-2 border">{client.address}</td>
                  <td className="px-4 py-2 border">{client.image}</td>
                  <td className="px-4 py-2 border flex gap-2">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all"
                      onClick={() => deleteMutation.mutate(client.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
                      onClick={() =>
                        updateMutation.mutate({
                          id: client.id,
                          newData: client,
                        })
                      }
                    >
                      Update
                    </button>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all"
                      onClick={() => createMutation.mutate(client)}
                    >
                      Create
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-4 text-gray-500">
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

export default DashboardClientsPage;

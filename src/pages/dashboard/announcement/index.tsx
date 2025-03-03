import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  asyncDeleteAnnouncement,
  asyncUpdateAnnouncement,
  asyncInsertAnnouncement,
} from "../../../api/announcement/fetcher";
import { useGetAllAnnouncements } from "../../../api/announcement/queries";

function DashboardAnnouncementPage() {
  // Create data in Announcement
  const postMutation = useMutation({
    mutationFn: (announcementData: any) =>
      asyncInsertAnnouncement(announcementData),
    onSuccess: (data) => {
      console.log("Announcement created successfully:", data);
    },
    onError: (error: any) => {
      console.error("Error creating announcement:", error);
    },
  });

  // Update announcement
  const UpdateMutation = useMutation({
    mutationFn: ({ updateData, id }: { updateData: any; id: any }) =>
      asyncUpdateAnnouncement(id, updateData),
    onSuccess: () => {
      console.log("Updated successfully");
    },
    onError: () => {
      console.log("Error in update");
    },
  });

  // Delete Announcement
  const queryClient = useQueryClient();
  const DeleteMutation = useMutation({
    mutationFn: async (id: any) => await asyncDeleteAnnouncement(id),
    onSuccess: (data, id) => {
      console.log("Deleted Successfully", data);

      queryClient.setQueryData(["announcements"], (oldData: any) => {
        return oldData ? oldData.filter((item: any) => item.id !== id) : [];
      });

      queryClient.invalidateQueries({ queryKey: ["announcements"] });
    },
    onError: () => {
      console.log("Something went wrong...");
    },
  });

  // Get all announcements
  const { data: users, isLoading, isError } = useGetAllAnnouncements();
  console.log("All Announcement data", users);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong...</p>;
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 p-4 md:p-6 flex flex-col">
      <div className="w-full max-w-full mx-auto bg-white shadow-lg rounded-lg p-4 md:p-6">
        <div className="flex items-center justify-between w-full mb-4 md:mb-6">
          <h2 className="text-lg md:text-3xl font-bold text-gray-800">
            Announcements
          </h2>
          <div className="flex gap-2">
            <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-3 md:px-4 py-2 rounded-lg shadow-md hover:from-teal-600 hover:to-green-500 transition-all">
              Add
            </button>
            <button className="bg-blue-500 text-white px-3 md:px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all">
              Update All
            </button>
          </div>
        </div>

        <div className="overflow-x-auto mt-2 md:mt-5">
          <table className="w-full min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-gray-200 text-gray-700">
              <tr className="text-left text-xs md:text-sm">
                <th className="px-2 md:px-4 py-2 border">ID</th>
                <th className="px-2 md:px-4 py-2 border">Title</th>
                <th className="px-2 md:px-4 py-2 border">Subtitle</th>
                <th className="px-2 md:px-4 py-2 border">Description</th>
                <th className="px-2 md:px-4 py-2 border text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item: any, index: number) => (
                <tr key={index} className="border">
                  <td className="px-2 md:px-4 py-2 border">{item.id}</td>
                  <td className="px-2 md:px-4 py-2 border">{item.title}</td>
                  <td className="px-2 md:px-4 py-2 border">{item.subTitle}</td>
                  <td className="px-2 md:px-4 py-2 border">
                    {item.description}
                  </td>
                  <td className="px-2 md:px-4 py-2 border text-center">
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 transition"
                      onClick={() =>
                        UpdateMutation.mutate({
                          id: item.id,
                          updateData: {
                            title: "new title",
                            subTitle: "new subtitle",
                            description: "new description",
                            image: "new image",
                          },
                        })
                      }
                    >
                      Update
                    </button>

                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 transition"
                      onClick={() =>
                        postMutation.mutate({
                          title: "new title",
                          subtitle: "new subtitle",
                          description: "new description",
                          image: "new image",
                        })
                      }
                    >
                      Create
                    </button>

                    <button
                      className="bg-red-500 text-white px-2 py-1 ml-2 rounded hover:bg-red-600 transition"
                      onClick={() => DeleteMutation.mutate(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardAnnouncementPage;

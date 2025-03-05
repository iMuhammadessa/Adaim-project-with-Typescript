import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGetAllAnnouncements } from "../../../api/announcement/queries";
import {
  asyncCreateAnnouncement,
  asyncDeleteAnnouncement,
  asyncUpdateAnnouncement,
} from "../../../api/announcement/fetcher";

type Announcement = {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  image: string;
  datePublished: string;
};

function DashboardAnnouncementPage() {
  const queryClient = useQueryClient();

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await asyncDeleteAnnouncement(id);
      return id;
    },
    onSuccess: (id) => {
      console.log(`Successfully deleted Announcement ID: ${id}`);
      queryClient.invalidateQueries({ queryKey: ["announcements"] });
    },
    onError: (error) => {
      console.log("Error in Deleting Announcement:", error);
    },
  });

  // Update mutation
  const updateMutation = useMutation({
    mutationFn: async ({
      id,
      newData,
    }: {
      id: number;
      newData: Announcement;
    }) => {
      await asyncUpdateAnnouncement(id, newData);
      return { id, newData };
    },
    onSuccess: ({ id, newData }) => {
      console.log(
        `Successfully updated Announcement ID: ${id} with data:`,
        newData
      );
      queryClient.invalidateQueries({ queryKey: ["announcements"] });
    },
    onError: (error) => {
      console.error("Error updating Announcement data:", error);
    },
  });

  const handleUpdate = (id: number) => {
    const newData: Announcement = {
      title: "Important Update for 2025",
      description:
        "New important information regarding upcoming events in 2025.",
      image: "updated_announcement_image.jpg",
      datePublished: "2025-03-04",
    };
    updateMutation.mutate({ id, newData });
  };

  // Create mutation
  const createMutation = useMutation({
    mutationFn: async (data: Announcement) => {
      await asyncCreateAnnouncement(data);
      return data;
    },
    onSuccess: () => {
      console.log("Successfully created a new Announcement");
      queryClient.invalidateQueries({ queryKey: ["announcements"] });
    },
    onError: (error) => {
      console.log("Error in creating Announcement:", error);
    },
  });

  const handleCreate = () => {
    const newData: Announcement = {
      title: "New Year Announcement",
      description:
        "We are excited to announce the upcoming events for the new year.",
      image: "new_announcement_image.jpg",
      datePublished: "2025-03-04",
    };
    createMutation.mutate(newData);
  };

  // Get All Announcements
  const { data: announcements, isLoading, isError } = useGetAllAnnouncements();
  console.log("All Announcements:", announcements);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something Went Wrong...</p>;

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-50 w-full flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Announcements
        </h2>
      </div>

      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6 overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-2 sm:px-4 py-2 border">ID</th>
              <th className="px-2 sm:px-4 py-2 border">Title</th>
              <th className="px-2 sm:px-4 py-2 border">SubTitle</th>
              <th className="px-2 sm:px-4 py-2 border">Description</th>
              <th className="px-2 sm:px-4 py-2 border">Image</th>
              <th className="px-2 sm:px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {announcements && announcements.length > 0 ? (
              announcements.map((item: Announcement) => (
                <tr
                  key={item.id}
                  className="text-gray-700 bg-white hover:bg-gray-100"
                >
                  <td className="px-2 sm:px-4 py-2 border">{item.id}</td>
                  <td className="px-2 sm:px-4 py-2 border">{item.title}</td>
                  <td className="px-2 sm:px-4 py-2 border">{item.subTitle}</td>
                  <td className="px-2 sm:px-4 py-2 border">
                    {item.description}
                  </td>
                  <td className="px-2 sm:px-4 py-2 border">{item.image}</td>
                  <td className="px-2 sm:px-4 py-2 border flex gap-2">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all"
                      onClick={() => deleteMutation.mutate(item.id)}
                    >
                      Delete
                    </button>

                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
                      onClick={() => handleUpdate(item.id)}
                    >
                      Update
                    </button>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
                      onClick={() => handleCreate()}
                    >
                      Create
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6"></div>
    </div>
  );
}

export default DashboardAnnouncementPage;

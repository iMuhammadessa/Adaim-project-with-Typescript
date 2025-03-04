import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGetAllBlogs } from "../../../api/blog/queries";
import {
  asyncCreateBlog,
  asyncDeleteBlog,
  asyncUpdateBlog,
} from "../../../api/blog/fetcher";

function DashboardBlogPage() {
  const queryClient = useQueryClient();

  const createNewPost = useMutation({
    mutationFn: () =>
      asyncCreateBlog({
        title: "new Title",
        subtitle: "new Subtitle",
        description: "new Description is here",
      }),
    onError: (error) => {
      console.log("Error in creating the blog:", error);
    },
    onSuccess: (data) => {
      console.log("Blog created successfully:", data);
      queryClient.invalidateQueries(["createBlog"]);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, updatedData }: { id: number; updatedData: any }) =>
      asyncUpdateBlog(id, updatedData),
    onSuccess: () => {
      console.log("Blog Updated Successfully");
      queryClient.invalidateQueries(["Blog"]);
    },
    onError: (error) => {
      console.log("Error Updating Blog", error);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => asyncDeleteBlog(id),
    onSuccess: () => {
      console.log("Blog deleted successfully");
      queryClient.invalidateQueries(["blogs"]);
    },
    onError: (error) => {
      console.log("Error deleting the blog:", error);
    },
  });

  const { data: allBlogs, isLoading, isError } = useGetAllBlogs();
  console.log("All blogs data:", allBlogs);

  if (isLoading) {
    return <p className="text-red-900">Loading...</p>;
  }
  if (isError) {
    return (
      <p className="text-red-900">Something went wrong. Please try again...</p>
    );
  }

  return (
    <div className="min-h-screen m-[10%] flex flex-col justify-start bg-gray-50 p-6 w-full">
      <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
        <h2 className="text-left text-3xl font-bold mb-6 text-gray-800">
          Blog
        </h2>

        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          onClick={() =>
            updateMutation.mutate({
              id: 69,
              updatedData: {
                title: "new title",
                subtitle: "new subtitle",
                description: "new Description",
                image: "new image",
              },
            })
          }
        >
          Add New Blog
        </button>
      </div>

      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr className="text-left text-sm">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Subtitle</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allBlogs?.map((item: any) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.subTitle}</td>
                  <td>{item.description}</td>
                  <td></td>
                  <td className="flex space-x-4">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                      onClick={() =>
                        updateMutation.mutate({
                          id: item.id,
                          updatedData: {
                            title:
                              "Top 13 Travel Destinations You Can’t Miss in 2025",
                            subTitle:
                              "Embark on unforgettable journeys to the world’s most breathtaking places in the year ahead.",
                            description:
                              "From pristine beaches to historic landmarks, discover the must-visit locations that should be on every traveler’s list for 2025.",
                          },
                        })
                      }
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                      onClick={() => deleteMutation.mutate(item.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                      onClick={() => createNewPost.mutate(item.id)}
                    >
                      create
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardBlogPage;

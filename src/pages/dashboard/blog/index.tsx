import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGetAllBlogs } from "../../../api/blog/queries";
import { asyncDeleteBlog, asyncUpdateBlog } from "../../../api/blog/fetcher";

function DashboardBlogPage() {
  //  update the  blog post

  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: ({ id, updatedData }: { id: number; updatedData: any }) =>
      asyncUpdateBlog(id, updatedData),
    onSuccess: () => {
      console.log("Blog Updated Successfully");
      queryClient.invalidateQueries(["blogs"]);
    },
    onError: (error) => {
      console.log("Error Updating Blog", error);
    },
  });

  //  delete the blogs from the database
  const QueryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: (id: number) => asyncDeleteBlog(id),
    onSuccess: () => {
      console.log("Blog Deleted Successfully");
      QueryClient.invalidateQueries(["blogs"]);
    },
    onError: (error) => {
      console.log("Error Deleting Blog", error);
    },
  });

  const { data: AllBlogs, isLoading, isError } = useGetAllBlogs();
  console.log("Fetching All Blogs", AllBlogs);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something Went Wrong...</p>;

  return (
    <div className="min-h-screen m-[10%] flex flex-col justify-start bg-gray-50 p-6 w-full">
      <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
        <h2 className="text-left text-3xl font-bold mb-6 text-gray-800">
          Blog
        </h2>
        <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-2 rounded-lg shadow-md hover:from-teal-600 hover:to-green-500 transition-all">
          Add Blog
        </button>
      </div>

      {/* Table Section */}
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
            {AllBlogs?.map((blog: any, index: number) => (
              <tr
                key={blog.id || index}
                className="text-sm text-gray-700 bg-white hover:bg-gray-100"
              >
                <td className="px-4 py-2 border">{blog.id}</td>
                <td className="px-4 py-2 border">{blog.title || "No Title"}</td>
                <td className="px-4 py-2 border">
                  {blog.subtitle ||
                    blog.sub_title ||
                    blog.short_description ||
                    "No Subtitle"}
                </td>
                <td className="px-4 py-2 border">
                  {blog.description || "No Description"}
                </td>
                <td className="px-4 py-2 border">
                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt="Blog"
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td className="px-4 py-2 border">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    //  deleting all blog by click one by one
                    onClick={() => deleteMutation.mutate(blog.id)}
                    // delete the specific id by entering your id here in the mutate function
                    // onClick={() => deleteMutation.mutate(51)}
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
  );
}

export default DashboardBlogPage;

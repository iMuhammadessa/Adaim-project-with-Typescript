import { API_URL } from "../../config/Config";

//  To Read all Blogs
export const asyncGetAllBlogs = async () => {
  try {
    // console.log("Fetching all users data...");

    const response = await API_URL.get("/api/blog");

    // console.log("API Response:", response);

    return response.data.data;
  } catch (error) {
    console.log("Something went wrong...", error);
    return error;
  }
};

// To Delete a Blog
export const asyncDeleteBlog = async (id: number) => {
  try {
    const response = await API_URL.delete(`/api/blog/${id}`);
    console.log("Blog deleted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.log("Something went wrong...", error);
    return error;
  }
};

// To Update a Blog
export const asyncUpdateBlog = async (id: number, updatedBlogData: any) => {
  try {
    const response = await API_URL.patch(`/api/blog/${id}`, updatedBlogData);
    console.log("Blog updated successfully:", response.data);
    return response.data;
  } catch (error) {
    console.log("Something went wrong updating blog...", error);
    return error;
  }
};

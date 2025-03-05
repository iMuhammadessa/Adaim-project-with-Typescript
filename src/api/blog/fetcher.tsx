import { API_URL } from "../../config/Config";

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
  } catch (error: any) {
    console.log("Something went wrong updating blog...", error);
    return error;
  }
};

// To Create a Blog
export const asyncCreateBlog = async (newBlogData: any) => {
  try {
    const response = await API_URL.post(`/api/blog`, newBlogData);
    console.log("Blog created successfully:", response.data);
    return response.data;
  } catch (error: any) {
    console.log("Something went wrong creating the blog...", error);
    return error;
  }
};

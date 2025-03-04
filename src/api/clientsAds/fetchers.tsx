import { API_URL } from "../../config/Config";

// To Delete a Client Ad
export const asyncDeleteClientAd = async (id: number) => {
  try {
    const response = await API_URL.delete(`/api/client-ads/${id}`);
    console.log("Client ad deleted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.log("Something went wrong...", error);
    return error;
  }
};

// to  updated Client Ad
export const asyncUpdateClientAd = async (id: any, data: any) => {
  try {
    console.log("Updating Client Ad with ID:", id);

    const response = await API_URL.patch(`/api/client-ads/${id}`, data);
    console.log("Client ad updated successfully:", response.data);

    return response.data;
  } catch (error) {
    console.log("Something went wrong...", error);
    return error;
  }
};

// To Create a New Client Ad
export const asyncCreateClientAd = async (data: any) => {
  try {
    console.log("Sending data to create ad:", data);

    const response = await API_URL.post("/api/client-ads", data);

    console.log("Client ad created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.log("Something went wrong...", error);
    return error;
  }
};

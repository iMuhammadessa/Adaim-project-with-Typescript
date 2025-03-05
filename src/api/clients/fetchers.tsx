import { API_URL } from "../../config/Config";

// To Delete a Client
export const asyncDeleteClient = async (id: number) => {
  try {
    const response = await API_URL.delete(`/api/clients/${id}`);
    console.log("Client deleted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.log("Something went wrong...", error);
    return error;
  }
};

// To Update a Client
export const asyncUpdateClient = async (id: number, updatedClientData: any) => {
  try {
    const response = await API_URL.patch(
      `/api/clients/${id}`,
      updatedClientData
    );
    console.log("Client updated successfully:", response.data);
    return response.data;
  } catch (error: any) {
    console.log("Something went wrong updating client...", error);
    return error;
  }
};

// To Create a Client
export const asyncCreateClient = async (newClientData: any) => {
  try {
    const response = await API_URL.post(`/api/clients`, newClientData);
    console.log("Client created successfully:", response.data);
    return response.data;
  } catch (error: any) {
    console.log("Something went wrong creating the client...", error);
    return error;
  }
};

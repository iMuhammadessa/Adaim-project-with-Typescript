import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../config/Config";

export enum QueryKeys {
  CLIENTS = "clients",
}

export const useGetAllClients = () =>
  useQuery({
    queryKey: [QueryKeys.CLIENTS],
    queryFn: asyncGetClients,
  });

// Fetching all clients
export const asyncGetClients = async () => {
  try {
    console.log("Fetching all clients...");

    const response = await API_URL.get("/api/client");

    console.log("API Response:", response);

    return response.data.data;
  } catch (error) {
    console.log("Something went wrong, try again...", error);
    throw error;
  }
};

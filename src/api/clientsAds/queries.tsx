import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../config/Config";

export enum QueryKeys {
  CLIENTADS = "clientAds",
}

export const useGetAllClientAds = () =>
  useQuery({
    queryKey: [QueryKeys.CLIENTADS],
    queryFn: asyncGetAllClientAds,
  });

//  Get all clients ads
export const asyncGetAllClientAds = async () => {
  try {
    console.log("Fetching all client ads data...");

    const response = await API_URL.get("/api/client-ads");

    console.log("API Response:", response);

    return response.data.data;
  } catch (error) {
    console.log("Something went wrong...", error);
    return error;
  }
};

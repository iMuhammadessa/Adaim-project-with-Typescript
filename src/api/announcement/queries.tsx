import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../config/Config";

export enum QueryKeys {
  ANNOUNCEMENTS = "announcements",
}

export const useGetAllAnnouncements = () =>
  useQuery({
    queryKey: [QueryKeys.ANNOUNCEMENTS],
    queryFn: asyncGetAllAnnouncements,
  });

//  All announcement
export const asyncGetAllAnnouncements = async () => {
  try {
    // console.log("Fetching all announcements data...");

    const response = await API_URL.get("api/announce");

    // console.log("API Response:", response);

    return response.data.data;
  } catch (error) {
    console.error(
      "Something went wrong while fetching announcements...",
      error
    );
    throw new Error("Failed to fetch announcements");
  }
};

// Get single Announcement.

export const asyncGetSingleAnnouncement = async (id: string) => {
  try {
    const response = await API_URL.get(`api/announce/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching single announcement:", error);
    throw new Error("Failed to fetch announcement");
  }
};

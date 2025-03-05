import { API_URL } from "../../config/Config";

// Delete Announcement
export const asyncDeleteAnnouncement = async (id: any) => {
  try {
    const response = await API_URL.delete(`api/announce/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      "Something went wrong while deleting the announcement...",
      error
    );
    throw new Error("Failed to delete announcement");
  }
};

// update Announcement
export const asyncUpdateAnnouncement = async (id: any, updatedData: any) => {
  try {
    const response = await API_URL.patch(`api/announce/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error(
      "Something went wrong while updating the announcement...",
      error
    );
    throw new Error("Failed to update announcement");
  }
};

//  Create an  Announcement
export const asyncCreateAnnouncement = async (newData: any) => {
  try {
    const response = await API_URL.post("api/announce", newData);
    return response.data;
  } catch (error) {
    console.error(
      "Something went wrong while inserting the announcement...",
      error
    );
    throw new Error("Failed to insert announcement");
  }
};

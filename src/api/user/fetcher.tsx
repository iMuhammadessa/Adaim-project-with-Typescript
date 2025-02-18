import { API_URL } from "../../config/Config";

export const asyncRegisterUser = async (data: any) => {
  try {
    // console.log("incoming data", data);
    const response = await API_URL.post("/api/user", data);
    // console.log("Response", response);
    return response.data;
  } catch (error) {
    throw console.log("register error", error);
  }
};

export const asyncLoginUser = async (data: any) => {
  try {
    console.log("incoming data", data);
    const response = await API_URL.post("/api/login", data);
    console.log("Response", response);
    localStorage.setItem("token", response.data?.token);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

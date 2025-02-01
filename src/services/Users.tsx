import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "./types";

export const UsersApi = createApi({
  reducerPath: "UsersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<User, string>({
      query: (name) => `users/${name}`,
    }),
  }),
});

export const { useGetAllUsersQuery } = UsersApi;

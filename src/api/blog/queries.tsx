import { useQuery } from "@tanstack/react-query";
import { asyncGetAllBlogs } from "./fetcher";

export enum QueryKeys {
  BLOGS = "blogs",
}

export const useGetAllBlogs = () =>
  useQuery({
    queryKey: [QueryKeys.BLOGS],
    queryFn: asyncGetAllBlogs,
  });

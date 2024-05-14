import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProjects } from "../api/api";

//fetch projects use query
export const useGetProjectsQuery = () => {
  return useQuery({
    queryKey: ["GetProjectsQuery"],
    queryFn: getProjects,
  });
};

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProject, getProjects, getTasks } from "../api/api";

//fetch projects use query
export const useGetProjectsQuery = () => {
  return useQuery({
    queryKey: ["GetProjectsQuery"],
    queryFn: getProjects,
  });
};

export const useGetProjectQuery = (id) => {
  return useQuery({
    queryKey: ["GetProjectQuery", id],
    queryFn: () => getProject(id),
  });
};

export const useGetTasksQuery = (id) => {
  return useQuery({
    queryKey: ["GetTasksQuery", id],
    queryFn: () => getTasks(id),
  });
};

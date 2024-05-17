import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createProject, loginUser, registerUser } from "../api/api";
import useAuthStore from "../store/authStore";

export const useLoginUserMutation = () => {
  return useMutation({
    mutationFn: ({ email, password }) => loginUser({ email, password }),
    onSuccess: (data) => {
      console.log(data);
      useAuthStore.getState().setAuth(data, data.token);
      return data.message;
    },
    onError: (error) => {
      return error.response;
    },
  });
};
export const useRegisterUserMutation = () => {
  return useMutation({
    mutationFn: ({ email, name, password }) =>
      registerUser({ email, name, password }),
    onSuccess: (data) => {
      console.log("data", data);
    },
    onError: (error) => {
      console.log("onError", error.response.data);
      return error.response;
    },
  });
};

export const useCreateProjectMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProject,
    onSuccess: (data) => {
      console.log(
        "useCreateProjectMutation successful, invalidating query...",
        data
      );
      queryClient.invalidateQueries(["GetProjectsQuery"]);
    },
    onError: (error) => {
      console.log("onError", error.response.data);
      return error.response;
    },
  });
};
export const useAddMemberMutation = () => {
  return useMutation({
    mutationFn: ({ projectId, member }) => addMember({ projectId, member }),
    onSuccess: (data) => {
      console.log("data", data);
    },
    onError: (error) => {
      console.log("onError", error.response.data);
      return error.response;
    },
  });
};
export const useAddCoAdminMutation = () => {
  return useMutation({
    mutationFn: ({ projectId, coAdmin }) => addCoAdmin({ projectId, coAdmin }),
    onSuccess: (data) => {
      console.log("data", data);
    },
    onError: (error) => {
      console.log("onError", error.response.data);
      return error.response;
    },
  });
};

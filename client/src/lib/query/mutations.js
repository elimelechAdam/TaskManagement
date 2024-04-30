import { useQueryClient, useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "../api/api";
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

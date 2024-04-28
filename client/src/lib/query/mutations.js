import { useQueryClient, useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/api";

export const useLoginUserMutation = () => {
  return useMutation({
    mutationFn: ({ email, password }) => loginUser({ email, password }),
    onSuccess: (data) => {
      console.log("data", data);
    },
    onError: (error) => {
      console.log(error);
      return error;
    },
  });
};

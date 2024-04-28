import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "./../api/api";

export const useLoginUserQuery = (email, password) => {
  console.log("useLoginUserQuery", email, password);
  return useQuery({
    queryKey: ["loginUser", email],
    queryFn: () => loginUser(email, password),
    enabled: !!email && !!password,
    onSuccess: (data) => {
      console.log("useLoginUserQuery - data: ", data);
    },
    onError: (error) => {
      console.log("useLoginUserQuery - error: ", error);
    },
  });
};
export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    // This function is called to perform the mutation when mutation.mutate is called
    ({ email, password }) => loginUser(email, password),
    {
      // Optional: onSuccess to handle any actions after a successful mutation
      onSuccess: (data) => {
        console.log("Login successful", data);
        // Here you can do things like caching the user data or redirecting
        // queryClient.setQueryData(['user', data.user.id], data.user);
      },
      onError: (error) => {
        console.error("Login failed", error);
        // Handle errors, such as displaying notifications or messages to the user
      },
    }
  );

  return mutation;
};

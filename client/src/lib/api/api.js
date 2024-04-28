import axios from "axios";

export const loginUser = async ({ email, password }) => {
  console.log("loginUserAPI", email, password);
  try {
    const response = await axios.post("http://localhost:9000/auth/login", {
      email,
      password,
    });
    if (response.status !== 200) {
      console.error(
        `signIn failed with status: ${response.status} and statusText: ${response.statusText}`
      );
      throw new Error(`SignIn failed: ${response.statusText}`);
    }
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

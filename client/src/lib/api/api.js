import axios from "axios";

export const loginUser = async ({ email, password }) => {
  console.log("loginUserAPI", email, password);
  try {
    const response = await axios.post("http://localhost:9000/auth/login", {
      email,
      password,
    });
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.log("loginUserAPI error", error);
    throw error.response.data;
  }
};
export const registerUser = async ({ email, name, password }) => {
  console.log("registerUserAPI", email, name, password);
  try {
    const response = await axios.post("http://localhost:9000/auth/signup", {
      email,
      name,
      password,
    });
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.log("registerUserAPI error", error);
    throw error.response.data;
  }
};

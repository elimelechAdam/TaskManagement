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

export const createProject = async ({
  name,
  _id,
  description,
  membersData,
}) => {
  console.log("createProjectAPI", name, _id, description, membersData);
  try {
    const response = await axios.post("http://localhost:9000/project/add", {
      name,
      _id,
      description,
      membersData,
    });
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.log("createProjectAPI error", error);
    throw error.response.data;
  }
};
export const getProjects = async () => {
  console.log("getProjectsAPI");
  try {
    const response = await axios.get("http://localhost:9000/project/all");
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.log("getProjectsAPI error", error);
    throw error.response.data;
  }
};
export const addMember = async ({ projectId, member }) => {
  console.log("addMemberAPI", projectId, member);
  try {
    const response = await axios.post(
      "http://localhost:9000/project/addmember",
      {
        projectId,
        member,
      }
    );
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.log("addMemberAPI error", error);
    throw error.response.data;
  }
};
export const addCoAdmin = async ({ projectId, coAdmin }) => {
  console.log("addCoAdminAPI", projectId, coAdmin);
  try {
    const response = await axios.post(
      "http://localhost:9000/project/addcoadmin",
      {
        projectId,
        coAdmin,
      }
    );
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.log("addCoAdminAPI error", error);
    throw error.response.data;
  }
};

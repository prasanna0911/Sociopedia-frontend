import axios from "axios";

const baseUrl = process.env.REACT_APP_API;

let token;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}
const instance = axios.create({
  baseURL: baseUrl,
  headers: { Authorization: "Bearer " + token },
});

const form = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "multipart/form-data", // Set content type for file upload
    Authorization: "Bearer " + token,
  },
});

const Login = async (data) => {
  try {
    const response = await axios.post(baseUrl + `/auth/login`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

const SignUp = async (data) => {
  try {
    const response = await form.post(baseUrl + `/auth/register`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

const GetUserDetails = async (data) => {
  try {
    const response = await instance.get(baseUrl + `/users/${data}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
const GetUserFriends = async (data) => {
  try {
    const response = await instance.get(baseUrl + `/users/${data}/friends`);
    return response.data;
  } catch (error) {
    return error;
  }
};
const GetPosts = async (data) => {
  try {
    const response = await instance.get(baseUrl + `/posts`);
    return response.data;
  } catch (error) {
    return error;
  }
};
const GetUserPosts = async (data) => {
  try {
    const response = await instance.get(baseUrl + `/posts/${data}/posts`);
    return response.data;
  } catch (error) {
    return error;
  }
};
const PatchLike = async (id, data) => {
  try {
    const response = await instance.patch(baseUrl + `/posts/${id}/like`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};
const PatchFriend = async (id, friendId) => {
  try {
    const response = await instance.patch(baseUrl + `/users/${id}/${friendId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const ApiServices = {
  SignUp,
  Login,
  GetUserDetails,
  GetUserFriends,
  GetPosts,
  GetUserPosts,
  PatchLike,
  PatchFriend,
};

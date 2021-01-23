import axios from "axios";

const url = "http://localhost:8080/posts";

const API = axios.create({ baseURL: "http://localhost:8080" });

API.interceptors.request.use((req) => {
  if (
    localStorage.getItem("USER_DETAILS") &&
    JSON.parse(localStorage.getItem("USER_DETAILS").token)
  ) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("USER_DETAILS")).token
    }`;
  }
  return req;
});

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, post) => API.patch(`/posts/${id}`, post);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const login = (loginData) => API.post(`/user/login`, loginData);
export const register = (registerData) =>
  API.post(`/user/register`, registerData);

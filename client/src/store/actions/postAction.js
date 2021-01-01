import * as api from "../../api";
import * as actionTypes from "../constants/actionTypes";

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
      console.log(data);
      dispatch({ type: actionTypes.FETCH_POSTS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createPost = (newPost) => {
  return async (dispatch) => {
    try {
      const { data } = await api.createPost(newPost);
      dispatch({ type: actionTypes.CREATE_POST, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updatePost = (id, post) => {
  return async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
      dispatch({ type: actionTypes.UPDATE_POST, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.deletePost(id);
      dispatch({ type: actionTypes.DELETE_POST, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};

export const likePost = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
      dispatch({ type: actionTypes.LIKE_POST, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

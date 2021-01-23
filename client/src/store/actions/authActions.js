import * as API from "../../api";
import * as actionTypes from "../constants/actionTypes";

export const login = (formData, router) => {
  return async (dispatch) => {
    try {
      const { data } = await API.login(formData);
      dispatch({ type: actionTypes.LOGIN, data });
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
};

export const register = (formData, router) => {
  return async (dispatch) => {
    try {
      const { data } = await API.register(formData);
      dispatch({ type: actionTypes.REGISTER, data });
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
};

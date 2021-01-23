import * as actionType from "../constants/actionTypes";

const initialState = {
  loading: false,
  userData: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN:
      localStorage.setItem("USER_DETAILS", action.data);
      return {
        ...state,
        userData: action.data,
      };
    case actionType.LOGOUT:
      localStorage.clear();
      return {
        ...state,
        userData: null,
      };
    case actionType.REGISTER:
      return {
        ...state,
        userData: action.data,
      };
    default:
      return state;
  }
};

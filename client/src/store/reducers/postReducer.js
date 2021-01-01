import * as actionType from "../constants/actionTypes";

const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_POSTS:
      return action.payload;
    case actionType.CREATE_POST:
      return [...state, action.payload];
    case actionType.UPDATE_POST:
      return state.map((post) => {
        return post.id === action.payload.id ? action.payload : post;
      });
    case actionType.LIKE_POST:
      return state.map((post) => {
        return post.id === action.payload.id ? action.payload : post;
      });
    case actionType.DELETE_POST:
      return state.filter((post) => {
        return post._id !== action.payload;
      });
    default:
      return state;
  }
};

export default postReducer;

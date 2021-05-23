import { ADD_COMMENT, ADD_USER, GET_USERS, GET_COMMENTS } from "../types";

const initialState = {
  comments: [],
  users: [],
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state, comments: [action.payload, ...state.comments] };
    case ADD_USER:
      return { ...state, users: [action.payload, ...state.users] };
    case GET_USERS:
      return { ...state, users: action.payload };
    case GET_COMMENTS:
      return { ...state, comments: action.payload.reverse() };
    default:
      return state;
  }
};

export default comments;

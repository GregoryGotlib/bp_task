import { ADD_COMMENT, GET_COMMENTS } from "../types";
import axios from "axios";

export const addComment = (data) => (dispatch) => {
  axios
    .post("/api/comments", data)
    .then((res) =>
      dispatch({
        type: ADD_COMMENT,
        payload: res.data,
      })
    )
    .catch((error) => console.log(error));
};

export const getComments = () => (dispatch) => {
  axios
    .get("/api/comments")
    .then((res) =>
      dispatch({
        type: GET_COMMENTS,
        payload: res.data,
      })
    )
    .catch((error) => console.log(error));
};

export default {
  addComment,
  getComments,
};

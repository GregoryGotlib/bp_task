import { ADD_USER, GET_USERS } from "../types";
import axios from "axios";

export const addUser = (data) => (dispatch) => {
  axios
    .post("/api/users", data)
    .then((res) =>
      dispatch({
        type: ADD_USER,
        payload: res.data,
      })
    )
    .catch((error) => console.log(error));
};

export const getUsers = () => (dispatch) => {
  axios
    .get("/api/users")
    .then((res) =>
      dispatch({
        type: GET_USERS,
        payload: res.data,
      })
    )
    .catch((error) => console.log(error));
};

export default {
  addUser,
  getUsers,
};

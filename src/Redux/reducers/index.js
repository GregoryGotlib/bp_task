import { combineReducers } from "redux";
import commentsReducer from "./comments";

const rootReducer = combineReducers({
  app: commentsReducer,
});

export default rootReducer;

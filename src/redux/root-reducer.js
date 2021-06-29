import { combineReducers } from "redux";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  app: userReducer,
});

export default rootReducer;

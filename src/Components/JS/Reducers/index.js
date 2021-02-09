import counterReducer from "./counterReducer";
import sumReducer from "./sumReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counterReducer: counterReducer,
  sumReducer: sumReducer,
});

export default rootReducer;

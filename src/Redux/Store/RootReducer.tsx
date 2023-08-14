import { combineReducers } from "redux";
import { ecommerce } from "../Reducers/Reducer";

export const rootReducer = combineReducers({
  ecommerce: ecommerce,
});

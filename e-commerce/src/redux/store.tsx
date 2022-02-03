import { combineReducers, createStore } from "redux";
import headingReducer from "./ducks/heading";

const reducer = combineReducers({
  heading: headingReducer,
});

const store = createStore(reducer);

export default store;

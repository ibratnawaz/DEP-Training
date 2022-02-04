import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import headingReducer from "./ducks/heading";
import cartReducer from "./ducks/cart";

const reducer = combineReducers({
  heading: headingReducer,
  cart: cartReducer,
});

const middlewares = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;

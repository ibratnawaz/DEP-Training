import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import headingReducer from "./ducks/heading";
import cartReducer from "./ducks/cart";
import productReducer from "./ducks/product";
import orderReducer from "./ducks/orders";

const reducer = combineReducers({
  heading: headingReducer,
  cart: cartReducer,
  product: productReducer,
  order: orderReducer,
});

const middlewares = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;

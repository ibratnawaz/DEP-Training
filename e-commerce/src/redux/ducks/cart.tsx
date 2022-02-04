import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import axios from "axios";

const ADD_ITEM_TO_CART = "addItemToCart";
const REMOVE_ITEM_FROM_CART = "removeItemFromCart";
const CLEAR_CART = "clearCart";

export const addToCart =
  (data: any): ThunkAction<void, {}, {}, AnyAction> =>
  (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: any): void => {
    const { id, title, authors, thumbnailUrl } = data;
    const payload = { id, title, authors, thumbnailUrl };

    dispatch({
      type: ADD_ITEM_TO_CART,
      payload,
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const placeOrder =
  () =>
  (dispatch: any, getState: any): void => {
    const cartItems = getState().cart.cartItems;
    cartItems.forEach(async (item: any) => {
      const payload = {
        book: { ...item },
        orderPlacedAt: new Date().toDateString(),
        status: "Delivered",
      };
      await axios.post("http://localhost:3000/orders", payload);
    });

    dispatch({
      type: CLEAR_CART,
    });
  };

export const removeItemFromCart =
  (id: string) => (dispatch: any, getState: Function) => {
    dispatch({
      type: REMOVE_ITEM_FROM_CART,
      payload: { id },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const clearCart = () => ({
  type: CLEAR_CART,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems") as string)
  : [];

const initialState = {
  cartItems: cartItemsFromStorage,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const existItem = state.cartItems.find(
        (item: any) => item.id === action.payload.id
      );
      if (existItem) {
        return state;
      } else {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }

    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item: any) => item.id !== action.payload.id
        ),
      };

    case CLEAR_CART:
      localStorage.removeItem("cartItems");
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};

import axios from "axios";

const GET_ORDERS = "getMyOrder";
const SET_LOADING = "setLoading";

export const getMyOrders = () => async (dispatch: any) => {
  dispatch({ type: SET_LOADING, payload: true });
  const response = await axios.get(
    "http://localhost:3000/orders?_sort=id&_order=desc"
  );
  dispatch({ type: GET_ORDERS, payload: response.data });
  dispatch({ type: SET_LOADING, payload: false });
};

const initialState = {
  myOrders: [],
  loading: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ORDERS:
      return { ...state, myOrders: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

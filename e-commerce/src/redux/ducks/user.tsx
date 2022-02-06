import axios from "axios";

const SET_USER_DETAILS = "setUserShippingAddress";
const SET_LOADING = "setLoading";

export const getShippingDetails = () => async (dispatch: any) => {
  dispatch({ type: SET_LOADING, payload: true });
  const response = await axios.get("http://localhost:3000/shippngAddress/1");
  dispatch({ type: SET_USER_DETAILS, payload: response.data });
  dispatch({ type: SET_LOADING, payload: false });
};

export const updateShippingDetails =
  (payload: any) => async (dispatch: any) => {
    dispatch({ type: SET_LOADING, payload: true });
    await axios.put("http://localhost:3000/shippngAddress/1", payload);
    dispatch({ type: SET_USER_DETAILS, payload });
    dispatch({ type: SET_LOADING, payload: false });
  };

const initialState = {
  address: null,
  loading: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DETAILS:
      return { ...state, address: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

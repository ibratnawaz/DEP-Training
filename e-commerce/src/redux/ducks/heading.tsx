const SET_TITLE = "setTitle";

export const setTitle = (title: string) => ({
  type: SET_TITLE,
  payload: title,
});

const initialState = {
  title: "",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.payload };
      break;

    default:
      return state;
  }
};

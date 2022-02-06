import axios from "axios";

const GET_BOOKS = "getBooks";
const GET_BOOK_BY_ID = "getBookById";
const SET_LOADING = "setLoading";
const SET_CURRENT_BOOKS = "setCurrentBooks";
const CLEAR_STATE = "clearState";

export const getBooks = () => async (dispatch: any) => {
  dispatch({ type: SET_LOADING, payload: true });
  const response = await axios.get(`http://localhost:3000/books`);
  dispatch({ type: GET_BOOKS, payload: response.data });
  dispatch({ type: SET_CURRENT_BOOKS });
  dispatch({ type: SET_LOADING, payload: false });
};

export const setCurrentBooks = () => (dispatch: any) => {
  dispatch({ type: SET_LOADING, payload: true });
  dispatch({ type: SET_CURRENT_BOOKS });
  dispatch({ type: SET_LOADING, payload: false });
};

export const clearState = () => ({
  type: CLEAR_STATE,
});

export const getBookById = (id: string) => async (dispatch: any) => {
  dispatch({ type: SET_LOADING, payload: true });
  const response = await axios.get(`http://localhost:3000/books/${id}`);
  dispatch({ type: GET_BOOK_BY_ID, payload: response.data });
  dispatch({ type: SET_LOADING, payload: false });
};

const initialState = {
  books: [],
  currentBooks: [],
  book: {},
  loading: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, books: action.payload };
    case GET_BOOK_BY_ID:
      return { ...state, book: action.payload };
    case SET_CURRENT_BOOKS:
      const currentBooks = state.currentBooks;
      const limit = currentBooks.length;
      const books = state.books.slice(limit, limit + 10);
      return { ...state, currentBooks: [...currentBooks, ...books] };
    case CLEAR_STATE:
      return { ...initialState };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

import React, { useEffect } from "react";
import BookCard from "../components/BookCard";
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../redux/ducks/heading";
import { clearState, getBooks, setCurrentBooks } from "../redux/ducks/product";

const Home = () => {
  const dispatch = useDispatch();
  const product = useSelector((state: any) => state.product);
  const { books, currentBooks, loading } = product;

  useEffect(() => {
    dispatch(setTitle("Home"));
    dispatch(getBooks());

    return function () {
      dispatch(clearState());
    };
  }, []);

  if (loading) {
    return <h3 className="text-center">Loading data, please wait...</h3>;
  }

  return (
    <>
      <div className="container home-container">
        {currentBooks.map((book: any) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>

      <div className="btn-load">
        {books.length === currentBooks.length ? (
          <p>No more data</p>
        ) : (
          <button onClick={() => dispatch(setCurrentBooks())}>Load More</button>
        )}
      </div>
    </>
  );
};

export default Home;

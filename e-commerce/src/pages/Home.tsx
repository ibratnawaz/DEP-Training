import React, { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTitle } from "../redux/ducks/heading";

const Home = () => {
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);
  const [currentBooks, setCurrentBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(setTitle("Home"));
    fetchBooks();
  }, []);

  useEffect(() => {
    limitBooks();
    setLoading(false);
  }, [books]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3000/books");
    setBooks(response.data);
  };

  const limitBooks = () => {
    setCurrentBooks((prevState) => {
      const limit = prevState.length;
      const currentState = books.slice(limit, limit + 10);

      return [...prevState, ...currentState];
    });
  };

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
          <button onClick={() => limitBooks()}>Load More</button>
        )}
      </div>
    </>
  );
};

export default Home;

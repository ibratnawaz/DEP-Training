import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get(`http://localhost:3000/books/${id}`);
    setBook(response.data);
    setLoading(false);
  };

  console.log(book);

  if (loading) {
    return <h3>Loading data, please wait...</h3>;
  }

  return (
    <div className="container-book">
      <div className="book-image"></div>
      <div className="book-details"></div>
    </div>
  );
};

export default Book;

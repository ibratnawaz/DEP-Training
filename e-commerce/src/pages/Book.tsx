import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

type Book = {
  title: string;
  thumbnailUrl: string;
  authors: string[];
  isbn: string;
  pageCount: number;
  longDescription: string;
};

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState({} as Book);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();

    return function () {
      localStorage.removeItem("bookTitle");
    };
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get(`http://localhost:3000/books/${id}`);
    setBook(() => {
      const { data } = response;
      localStorage.setItem("bookTitle", data.title);

      return data;
    });
    setLoading(false);
  };

  if (loading) {
    return <h3>Loading data, please wait...</h3>;
  }

  return (
    <div className="container-book">
      <div className="book-image">
        <img src={book.thumbnailUrl} alt="book-image" />
      </div>
      <div className="book-details">
        <div className="book-basic-details">
          <p className="book-title">{book.title}</p>
          <p>
            <span className="book-specs">Price: </span>
            <span className="book-spec-val">$172.00</span>
          </p>
          <p>
            <span className="book-specs">Written by- </span>
            <span className="book-spec-val"> {book.authors[0]}</span>
          </p>
          <p>
            <span className="book-specs">Page Count- </span>
            <span className="book-spec-val">{book.pageCount}</span>
          </p>
          <p>
            <span className="book-specs">ISBN- </span>
            <span className="book-spec-val">{book.isbn}</span>
          </p>
          <button>Add to cart</button>
          <button>Buy Now</button>
        </div>
        <div className="book-description">{book.longDescription}</div>
      </div>
    </div>
  );
};

export default Book;

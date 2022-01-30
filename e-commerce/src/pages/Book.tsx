import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { addToCart, isItemInCart } from "../utils/cartMethods";

type Book = {
  id: number;
  title: string;
  thumbnailUrl: string;
  authors: string[];
  isbn: string;
  pageCount: number;
  longDescription: string;
};

const Book = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({} as Book);
  const [isPresent, setIsPresent] = useState(false);
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
      setIsPresent(isItemInCart(data.id));
      return data;
    });
    setLoading(false);
  };

  const buyBook = async () => {
    const payload = {
      book: {
        id: book.id,
        title: book.title,
        authors: book.authors,
        thumbnailUrl: book.thumbnailUrl,
      },
      orderPlacedAt: new Date().toDateString(),
      status: "Delivered",
    };
    await axios.post("http://localhost:3000/orders", payload);
    navigate("/my-orders");
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
          {isPresent ? (
            <button className="btn-warning" onClick={() => navigate("/cart")}>
              Go to cart
            </button>
          ) : (
            <button onClick={() => addToCart(book, setIsPresent)}>
              Add to cart
            </button>
          )}
          <button onClick={buyBook}>Buy Now</button>
        </div>
        <div className="book-description">{book.longDescription}</div>
      </div>
    </div>
  );
};

export default Book;

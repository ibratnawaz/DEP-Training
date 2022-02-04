import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/ducks/cart";

const BookCard = (props: { book: any }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPresent, setIsPresent] = useState(false);

  const { book } = props;

  const changeRoute = (id: string) => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="card">
      <div className="card-thumbnail">
        <img src={book.thumbnailUrl} alt="Movie poster" />
        <b className="card-title">{book.title}</b>
      </div>
      <div className="card-author">
        <small>Written by-</small> <b>{book.authors[0]}</b>
      </div>
      <p className="card-description">{book.longDescription}</p>
      <p
        className="card-btn-read"
        title="Click to see more details about this book"
        onClick={() => changeRoute(book.id)}>
        Read more
      </p>
      <br />
      {isPresent ? (
        <button
          className="btn-warning"
          title="Add this book to your cart"
          onClick={() => navigate("/cart")}>
          Go to cart
        </button>
      ) : (
        <button
          title="Add this book to your cart"
          onClick={() => dispatch(addToCart(book))}>
          Add to cart
        </button>
      )}
    </div>
  );
};

export default BookCard;

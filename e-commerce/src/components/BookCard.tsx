import React from "react";
import { useNavigate } from "react-router-dom";

const BookCard = (props: { book: any }) => {
  const navigate = useNavigate();
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
        title="Click to see more deatils about this book"
        onClick={() => changeRoute(book.id)}>
        Read more
      </p>
      <br />
      <button title="Add this book to your cart">Add to cart</button>
    </div>
  );
};

export default BookCard;

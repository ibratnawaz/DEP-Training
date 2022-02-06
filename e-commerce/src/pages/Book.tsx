import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../redux/ducks/heading";
import { addToCart, buyProduct } from "../redux/ducks/cart";
import { getBookById } from "../redux/ducks/product";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const product = useSelector((state: any) => state.product);
  const [isPresent, setIsPresent] = useState(false);
  const { book, loading } = product;

  useEffect(() => {
    dispatch(getBookById(id as string));
    const itemPresent = cartItems.findIndex(
      (item: Book) => item.id === parseInt(id as string)
    );
    if (itemPresent !== -1) {
      setIsPresent(true);
    }
  }, []);

  const cartHandler = () => {
    dispatch(addToCart(book));
    setIsPresent(true);
  };

  const buyingHandler = () => {
    dispatch(buyProduct(book));
    navigate("/my-orders");
  };

  if (loading || !book.id) {
    return <h3>Loading data, please wait...</h3>;
  }

  if (!loading && book.id) {
    dispatch(setTitle(book.title));
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
            <button onClick={cartHandler}>Add to cart</button>
          )}
          <button onClick={buyingHandler}>Buy Now</button>
        </div>
        <div className="book-description">{book.longDescription}</div>
      </div>
    </div>
  );
};

export default Book;

import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CartItems = (props: { cartItems: any[]; setCartItems: any }) => {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = props;

  const placeOrder = () => {
    cartItems.forEach(async (item: any) => {
      const payload = {
        book: { ...item },
        orderPlacedAt: new Date().toDateString(),
        status: "Delivered",
      };
      await axios.post("http://localhost:3000/orders", payload);
    });
    clearCart();
    navigate("/my-orders");
  };

  const clearCart = () => {
    localStorage.removeItem("booksInCart");
    setCartItems([]);
  };

  return (
    <div className="cart-items">
      <h4>
        Items in your cart:
        <span className="cart-items-value">
          <b>{cartItems.length}</b>
        </span>
      </h4>
      {cartItems.map((item: any) => (
        <p className="cart-items-row" key={item.id}>
          <Link to={`/book/${item.id}`}>{item.title}</Link> <span>$112.00</span>
        </p>
      ))}
      <hr />
      <p className="cart-items-row payment">Payment Info</p>
      <p className="cart-items-row">
        Total
        <span>${112 * cartItems.length}.00</span>
      </p>
      <p className="cart-items-row">
        Tax
        <span>$55.00</span>
      </p>
      <p className="cart-items-row">
        Shippin Charges
        <span>$40.00</span>
      </p>
      <hr />
      <p className="cart-items-row">
        Grand Total
        <span>$431.00</span>
      </p>
      <div className="btn-box">
        <button className="btn btn-success" onClick={placeOrder}>
          Place Order
        </button>
        <button className="btn btn-warning" onClick={clearCart}>
          Clear My Cart
        </button>
      </div>
    </div>
  );
};

export default CartItems;

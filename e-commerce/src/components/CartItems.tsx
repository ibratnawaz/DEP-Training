import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { clearCart, placeOrder } from "../redux/ducks/cart";

const CartItems = (props: { cartItems: any[]; dispatch: any }) => {
  const navigate = useNavigate();
  const { cartItems, dispatch } = props;

  const orderHandler = () => {
    dispatch(placeOrder());
    navigate("/my-orders");
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
        Shipping Charges
        <span>$40.00</span>
      </p>
      <hr />
      <p className="cart-items-row">
        Grand Total
        <span>$431.00</span>
      </p>
      <div className="btn-box">
        <button className="btn btn-success" onClick={orderHandler}>
          Place Order
        </button>
        <button
          className="btn btn-warning"
          onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartItems;

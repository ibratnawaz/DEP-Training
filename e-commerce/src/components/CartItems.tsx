import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { clearCart, placeOrder, removeItemFromCart } from "../redux/ducks/cart";

const CartItems = (props: { cartItems: any[]; dispatch: any }) => {
  const navigate = useNavigate();
  const { cartItems, dispatch } = props;
  let subTotal = 0;
  let tax = 0;
  let total = 0;
  const shippingCharges = 17.5;

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
      {cartItems.map((item: any) => {
        subTotal += item.price;
        tax = subTotal * 0.05;
        total = subTotal + tax + shippingCharges;
        return (
          <p className="cart-items-row" key={item.id}>
            <Link to={`/book/${item.id}`}>{item.title}</Link>
            <span>
              ${item.price.toFixed(2)}
              <span
                className="btn-delete"
                title="Remove item from cart"
                onClick={() => dispatch(removeItemFromCart(item.id))}>
                X
              </span>
            </span>
          </p>
        );
      })}
      <hr />
      <p className="cart-items-row payment">Payment Info</p>
      <p className="cart-items-row">
        Total
        <span>${subTotal.toFixed(2)}</span>
      </p>
      <p className="cart-items-row">
        Tax
        <span>${tax.toFixed(2)}</span>
      </p>
      <p className="cart-items-row">
        Shipping Charges
        <span>${shippingCharges.toFixed(2)}</span>
      </p>
      <hr />
      <p className="cart-items-row">
        Grand Total
        <span>${total.toFixed(2)}</span>
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

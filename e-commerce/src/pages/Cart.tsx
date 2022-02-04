import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Address from "../components/Address";
import CartItems from "../components/CartItems";
import { setTitle } from "../redux/ducks/heading";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.cartItems);

  useEffect(() => {
    dispatch(setTitle("My Cart"));
  }, []);

  if (!cartItems.length) {
    return <h3 className="text-center">Please add items to the cart.</h3>;
  }

  return (
    <div className="cart-container">
      <Address />
      <CartItems cartItems={cartItems} dispatch={dispatch} />
    </div>
  );
};

export default Cart;

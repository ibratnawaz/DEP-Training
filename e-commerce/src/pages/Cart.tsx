import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Address from "../components/Address";
import CartItems from "../components/CartItems";
import { setTitle } from "../redux/ducks/heading";

const Cart = () => {
  const dispatch = useDispatch();

  let [cartItems, setCartItems] = useState([] as any);

  useEffect(() => {
    dispatch(setTitle("My Cart"));

    const data = localStorage.getItem("booksInCart");
    if (data) {
      setCartItems([...JSON.parse(data as string)]);
    }
  }, []);

  if (!cartItems.length) {
    return <h3 className="text-center">Please add items to the cart.</h3>;
  }

  return (
    <div className="cart-container">
      <Address />
      <CartItems cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default Cart;

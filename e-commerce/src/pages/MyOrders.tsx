import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderCard from "../components/OrderCard";
import { setTitle } from "../redux/ducks/heading";
import { getMyOrders } from "../redux/ducks/orders";

const MyOrders = () => {
  const dispatch = useDispatch();
  const order = useSelector((state: any) => state.order);
  const { myOrders, loading } = order;

  useEffect(() => {
    dispatch(setTitle("My Orders"));
    dispatch(getMyOrders());
  }, []);

  if (loading) {
    return <h3 className="text-center">Loading data, please wait...</h3>;
  }

  if (!myOrders.length) {
    return <h3 className="text-center">You haven't bought anything yet.</h3>;
  }

  return (
    <div className="orders-container">
      {myOrders.map((order: any) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default MyOrders;

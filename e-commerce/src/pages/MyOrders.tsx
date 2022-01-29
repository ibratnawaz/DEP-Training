import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "../components/OrderCard";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
    setLoading(false);
  }, []);

  const fetchOrders = async () => {
    const response = await axios.get("http://localhost:3000/orders");
    setMyOrders(response.data);
  };

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

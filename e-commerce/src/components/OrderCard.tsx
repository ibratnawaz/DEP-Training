import React from "react";

const OrderCard = (props: { order: any }) => {
  const { order } = props;

  return (
    <div className="order-container">
      <div className="order-header">
        <span>Order Placed: {order.orderPlacedAt}</span>
        <span className="order-status">Status: {order.status}</span>
      </div>
      <div className="order-body">
        <img src={order.book.thumbnailUrl} alt="book-image" />
        <div className="order-details">
          <p className="book-title">{order.book.title}</p>
          <p>
            <span className="book-specs">Written by- </span>
            <span className="book-spec-val"> {order.book.authors[0]}</span>
          </p>
          <p>
            <span className="book-specs">Price: </span>
            <span className="book-spec-val">
              ${order.book.price.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;

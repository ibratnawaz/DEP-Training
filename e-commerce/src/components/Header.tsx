import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h3>{`E-commerce Website | Home`}</h3>
      <div className="pagesLink">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/myOrders" className="link">
          My Orders
        </Link>
        <Link to="/cart" className="link">
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Header;

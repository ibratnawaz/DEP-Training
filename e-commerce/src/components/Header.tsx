import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const title = useSelector((state: any) => state.heading.title);

  return (
    <div className="header">
      <h3>{`E-commerce Website | ${title}`}</h3>
      <div className="pagesLink">
        <Link to="/" className={`link ${pathName === "/" && "active"}`}>
          Home
        </Link>
        <Link
          to="/my-orders"
          className={`link ${pathName === "/my-orders" && "active"}`}>
          My Orders
        </Link>
        <Link to="/cart" className={`link ${pathName === "/cart" && "active"}`}>
          My Cart
        </Link>
      </div>
    </div>
  );
};

export default Header;

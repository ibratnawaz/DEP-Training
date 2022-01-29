import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const [bookTitle, setBookTitle] = useState("");

  useEffect(() => {
    if (pathName.includes("book")) {
      setBookTitle("");
      setTimeout(() => {
        setBookTitle(localStorage.getItem("bookTitle") as string);
      }, 100);
    }
  }, [pathName]);

  const activeLink = {
    name: "Home",
    route: "/",
  };

  switch (pathName) {
    case "/":
      activeLink.name = "Home";
      activeLink.route = "/";
      break;
    case "/my-orders":
      activeLink.name = "My Orders";
      activeLink.route = "/my-orders";
      break;
    case "/cart":
      activeLink.name = "Cart";
      activeLink.route = "/cart";
      break;
    default:
      activeLink.name = bookTitle;
      activeLink.route = "/book";
  }

  return (
    <div className="header">
      <h3>{`E-commerce Website | ${activeLink.name}`}</h3>
      <div className="pagesLink">
        <Link to="/" className={`link ${activeLink.route === "/" && "active"}`}>
          Home
        </Link>
        <Link
          to="/my-orders"
          className={`link ${activeLink.route === "/my-orders" && "active"}`}>
          My Orders
        </Link>
        <Link
          to="/cart"
          className={`link ${activeLink.route === "/cart" && "active"}`}>
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Header;

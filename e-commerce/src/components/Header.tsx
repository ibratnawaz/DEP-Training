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

  const acriveLink = {
    name: "Home",
    route: "/",
  };

  switch (pathName) {
    case "/":
      acriveLink.name = "Home";
      acriveLink.route = "/";
      break;
    case "/my-orders":
      acriveLink.name = "My Orders";
      acriveLink.route = "/my-orders";
      break;
    case "/cart":
      acriveLink.name = "Cart";
      acriveLink.route = "/cart";
      break;
    default:
      acriveLink.name = bookTitle;
      acriveLink.route = "/book";
  }
  console.log(acriveLink.name);
  return (
    <div className="header">
      <h3>{`E-commerce Website | ${acriveLink.name}`}</h3>
      <div className="pagesLink">
        <Link to="/" className={`link ${acriveLink.route === "/" && "active"}`}>
          Home
        </Link>
        <Link
          to="/my-orders"
          className={`link ${acriveLink.route === "/my-orders" && "active"}`}>
          My Orders
        </Link>
        <Link
          to="/cart"
          className={`link ${acriveLink.route === "/cart" && "active"}`}>
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Header;

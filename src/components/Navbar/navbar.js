import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./desain.css";

const Navbar = () => {
  let location = useLocation();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  if (location.pathname === "/") {
    return (
      <>
        <nav className="navbar">
          <div className="nav-container">
            <ul className="nav-menu">
              <li className="nav-item-home">
                <p>HOMEPAGE</p>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  } else if (location.pathname === "/cart") {
    return (
      <>
        <nav className="navbar">
          <div className="nav-container">
            <ul className="nav-menu">
              <li className="nav-item-cart">
                <p>CART</p>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  } else {
    return (
      <>
        <nav className="navbar">
          <div className="nav-container">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <p
                  className={
                    location.pathname === "/delivery" ? "active" : "nonActive"
                  }
                >
                  1 Delivery
                </p>
              </li>
              <li className="nav-item">
                <p
                  className={
                    location.pathname === "/payment" ? "active" : "nonActive"
                  }
                >
                  2 Payment
                </p>
              </li>
              <li className="nav-item">
                <p
                  className={
                    location.pathname === "/finish" ? "active" : "nonActive"
                  }
                >
                  3 Finish
                </p>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
};

export default Navbar;

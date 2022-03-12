import React from "react";
import "./homePage.css";
import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="container">
      <div className="cart">
        <div className="formDelivery">
          <div className="center">
            <div className="line1">
              <h1>HOMEPAGE</h1>
              <h4>Technical Test Beneditto Vieri</h4>
            </div>
            <div className="line2"></div>
          </div>
        </div>

        <div className="total">
          <div className="buttonToCart">
            <div className="vertical-center">
              <NavLink exact to="/cart" className="nav-logo">
                <button className="toCart">Go to Cart <FaCartPlus/></button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

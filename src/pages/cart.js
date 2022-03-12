import React, { useState, useEffect } from "react";
import "./cart.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import FormDelivery from "./Form/FormDelivery";

const Cart = () => {
  let location = useLocation();
  const [product1, setProduct1] = useState(
    location.state === null ? 0 : parseInt(location.state.product1)
  );
  const [product2, setProduct2] = useState(
    location.state === null ? 0 : parseInt(location.state.product2)
  );

  const history = useNavigate();

  const buttonSubmit = () => {
    console.log(product1);
    console.log(product2);
    if (product1 > 0 || product2 > 0) {
      history("/delivery", { state: { product1, product2 } });
    } else {
      alert("Input Quantity minimal 1!");
    }
  };

  useEffect(() => {
    console.log(location);
  }, [location]);

  const formatCurrency = new Intl.NumberFormat("id", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div className="container">
      <div className="cart">
        <div className="formCart">
          <div className="formCancel">
            <NavLink exact to="/" className="nav-logo">
              <button className="cancel">Cancel</button>
            </NavLink>
          </div>
          <div className="block">
            <div className="centerCart">
              <div class="product-info">
                <h3 class="product-name">Name : Product 1</h3>
                <h4 class="product-price">Price : Rp. 300,000</h4>
                <p class="product-quantity" />
                Quantity:{" "}
                <input
                  type="number"
                  value={product1}
                  onChange={(e) => setProduct1(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="centerCart">
              <div class="product-info">
                <h3 class="product-name">Name : Product 2</h3>
                <h4 class="product-price">Price : Rp. 500,000</h4>
                <p class="product-quantity" />
                Quantity :{" "}
                <input
                  type="number"
                  value={product2}
                  onChange={(e) => setProduct2(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
        </div>

        <div className="total">
          <div className="totalTitle">
            <h2>Summary</h2>
          </div>
          <div className="detailDelivery">
            <p hidden={product1 === 0 ? true : false}>
              {product1} Product 1 purchased
            </p>
            <p hidden={product2 === 0 ? true : false}>
              {product2} Product 2 purchased
            </p>
          </div>

          <div className="price1">
            <p>
              <p>Cost of goods</p>
              <p>
                {formatCurrency.format(product1 * 300000 + product2 * 500000)}
              </p>
            </p>
          </div>

          <div className="priceTotalCart">
            <p>
              <p>Total</p>
              <p>
                {formatCurrency.format(product1 * 300000 + product2 * 500000)}
              </p>
            </p>
          </div>
          <div className="buttonToDelivery">
            <div className="vertical-center">
              <button className="toDelivery" onClick={() => buttonSubmit()}>
                Proceed to Delivery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

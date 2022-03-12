import React, { useState, useEffect } from "react";
import "./finish.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import FormDelivery from "./Form/FormDelivery";

const Finish = () => {
  const history = useNavigate();
  let location = useLocation();

  const [product1, setProduct1] = useState(parseInt(location.state.product1));
  const [product2, setProduct2] = useState(parseInt(location.state.product2));

  var goods = product1 * 300000 + product2 * 500000;
  var qty = product1 + product2;

  useEffect(() => {
    console.log(location);
  }, [location]);

  var check = location.state.check;
  var dropshippingFee = 5900;
  var orderID = String(location.state.orderID);
  var shipment = String(location.state.shipment);
  var payment = String(location.state.payment);
  var shipmentPrice = parseInt(location.state.shipmentPrice);

  const formatCurrency = new Intl.NumberFormat("id", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const returnDetail = () => {
    if (shipment === "GO-SEND") {
      return (
        <p className="shipment">
          Your order will be delivered today with {shipment}
        </p>
      );
    } else if (shipment === "JNE") {
      return (
        <p className="shipmetn">
          Your order will be delivered 2 days with {shipment}
        </p>
      );
    } else if (shipment === "Personal Courier") {
      return (
        <p className="shipment">
          Your order will be delivered 1 day with {shipment}
        </p>
      );
    }
  };

  const returnShipment = () => {
    if (shipment === "GO-SEND") {
      return <p>today by GO-SEND</p>;
    } else if (shipment === "JNE") {
      return <p>2 days by JNE</p>;
    } else if (shipment === "Personal Courier") {
      return <p>1 day by Personal Courier</p>;
    }
  };

  const returnPayment = () => {
    if (payment === "E-Wallet") {
      return <p>E-Wallet</p>;
    } else if (payment === "Bank Transfer") {
      return <p>Bank Transfer</p>;
    } else if (payment === "Virtual Account") {
      return <p>Virtual Account</p>;
    }
  };

  return (
    <div className="container">
      <div className="cart">
        <div className="formDelivery">
          <div className="center">
            <div className="line1">
              <h1>Thank You</h1>
            </div>
            <div className="line2">
              <p className="orderId">Order ID : {orderID}</p>
              {returnDetail()}
            </div>
            <div className="line3">
              <NavLink exact to="/" className="nav-logo">
                <span className="formBackIcon">
                  <FaArrowLeft />
                </span>
                <span className="formBackText">Go to homepage</span>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="totalFinish">
          <div className="totalTitle">
            <h2>Summary</h2>
          </div>

          <div className="detail">
            <p>{qty} items purchased</p>
          </div>

          <div className="detail1">
            <div className="delivery1">
              <p>Delivery estimation</p>
            </div>
            <div className="delivery2">{returnShipment()}</div>
          </div>

          <div className="detail2">
            <div className="payment1">
              <p>Payment method</p>
            </div>
            <div className="payment2">{returnPayment()}</div>
          </div>

          <div className="price1">
            <p>
              <p>Cost of goods</p>
              <p>{formatCurrency.format(goods)}</p>
            </p>
          </div>
          <div className="price2" hidden={check === true ? false : true}>
            <p>
              <p>Dropshipping Fee</p>
              <p>{formatCurrency.format(dropshippingFee)}</p>
            </p>
          </div>
          <div className="price3">
            <p>
              <p>{shipment} shipment</p>
              <p>{formatCurrency.format(shipmentPrice)}</p>
            </p>
          </div>

          <div className="priceTotalFinish">
            <p>
              <p>Total</p>
              <p>
                {check === true
                  ? formatCurrency.format(
                      goods + dropshippingFee + shipmentPrice
                    )
                  : formatCurrency.format(goods + shipmentPrice)}
              </p>
            </p>
          </div>
          {/* <div className="button">
            <div className="vertical-center">
              <button className="submit" form="submit" type="submit">
                Continue to Payment
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Finish;

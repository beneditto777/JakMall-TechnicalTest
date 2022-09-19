import React, { useState, useEffect } from "react";
import "./payment.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ButtonGroup from "./Button/button";

const Payment = () => {
  let location = useLocation();
  let history = useNavigate();

  const [product1, setProduct1] = useState(parseInt(location.state.product1));
  const [product2, setProduct2] = useState(parseInt(location.state.product2));
  const [check, setCheck] = useState(location.state.check);
  const [shipmentPrice, setShipmentPrice] = useState(0);

  const [values, setValues] = useState({
    email: String(location.state.values.email),
    dropshipperName: String(location.state.values.dropshipperName),
    phoneNumber: String(location.state.values.phoneNumber),
    dropshipperPhone: String(location.state.values.dropshipperPhone),
    address: String(location.state.values.address),
  });

  var goods = product1 * 300000 + product2 * 500000;
  var qty = product1 + product2;

  const [shipment, getShipment] = useState("");
  const [payment, getPayment] = useState("");

  function randomOrderID(length, chars) {
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  }

  const [orderID, setOrderID] = useState(
    String(randomOrderID(5, "23456789ABCDEFGHJKLMNPQRSTUVWXYZ"))
  );

  useEffect(() => {
    console.log(location);
    console.log(
      "orderid",
      String(randomOrderID(5, "23456789ABCDEFGHJKLMNOPQRSTUVWXYZ"))
    );
  }, [location, check]);

  const printShipment = (e) => {
    getShipment(String(e.target.name));
    if (String(e.target.name) === "GO-SEND") {
      setShipmentPrice(15000);
    } else if (String(e.target.name) === "JNE") {
      setShipmentPrice(9000);
    } else if (String(e.target.name) === "Personal Courier") {
      setShipmentPrice(29000);
    }
    console.log("Shipment", shipment);
  };

  const printPayment = (e) => {
    getPayment(String(e.target.name));
    console.log("Payment", payment);
  };

  const formatCurrency = new Intl.NumberFormat("id", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const returnShipment = () => {
    if (shipment === "GO-SEND") {
      return (
        <div className="delivery2">
          <p>today by GO-SEND</p>
        </div>
      );
    } else if (shipment === "JNE") {
      return (
        <div className="delivery2">
          <p>2 days by JNE</p>
        </div>
      );
    } else if (shipment === "Personal Courier") {
      return (
        <div className="delivery2">
          <p>1 day by Personal Courier</p>
        </div>
      );
    }
  };

  const buttonToFinish = () => {
    if (shipment !== "" && payment !== "") {
      history("/finish", {
        state: {
          product1,
          product2,
          shipment,
          shipmentPrice,
          payment,
          check,
          orderID,
        },
      });
    } else {
      alert("Shipment dan Payment harus dipilih!");
    }
  };

  const returnPayment = () => {
    if (payment === "E-Wallet") {
      return (
        <button className="submit" onClick={() => buttonToFinish()}>
          Pay with E-Wallet
        </button>
      );
    } else if (payment === "Bank Transfer") {
      return (
        <button className="submit" onClick={() => buttonToFinish()}>
          Pay with Bank Transfer
        </button>
      );
    } else if (payment === "Virtual Account") {
      return (
        <button className="submit" onClick={() => buttonToFinish()}>
          Pay with Virtual Account
        </button>
      );
    } else {
      return (
        <button className="submit" onClick={() => buttonToFinish()}>
          Pay with -
        </button>
      );
    }
  };

  const handleBackToDelivery = () => {
    console.log("history");
    history("/delivery", { state: { product1, product2, check, values } });
  };

  return (
    <div className="container">
      <div className="cart">
        <div className="formDelivery">
          <div className="formBack">
            <button className="back" onClick={handleBackToDelivery}>
              <FaArrowLeft /> Back to Delivery
            </button>
          </div>

          <div className="formDetail">
            <p>
              <span className="title">Shipment</span>
            </p>
          </div>

          <div className="formDetail">
            <ButtonGroup
              buttons={["GO-SEND", "JNE", "Personal Courier"]}
              doSomethingAfterClick={printShipment}
            />
          </div>

          <div className="formDetail">
            <p>
              <span className="title">Payment</span>
            </p>
          </div>

          <div className="formDetail">
            <ButtonGroup
              buttons={["E-Wallet", "Bank Transfer", "Virtual Account"]}
              doSomethingAfterClick={printPayment}
            />
          </div>
        </div>

        <div className="total">
          <div className="totalTitle">
            <h2>Summary</h2>
          </div>

          <div className="detailPayment">
            <p>{qty} items purchased</p>
          </div>

          <div className="detailShipment">
            <div className="delivery1">
              <p>Delivery estimation</p>
            </div>
            {returnShipment()}
          </div>

          <div className="price">
            <p>
              <span>Cost of goods</span>
              <span>{formatCurrency.format(goods)}</span>
            </p>
            <div
              className="priceDropFee"
              hidden={check === false ? true : false}
            >
              <p>
                <span>Dropshippings Fee</span>
                <span>5,900</span>
              </p>
            </div>
            <div
              className="priceShipment"
              hidden={shipment === "" ? true : false}
            >
              <p>
                <span>{shipment} shipment</span>
                <span>{formatCurrency.format(shipmentPrice)}</span>
              </p>
            </div>
          </div>
          <div className="priceTotal">
            <p>
              <span>Total</span>
              <span>
                {check === true
                  ? formatCurrency.format(goods + 5900 + shipmentPrice)
                  : formatCurrency.format(goods + shipmentPrice)}
              </span>
            </p>
          </div>
          <div className="button">
            <div className="vertical-center">{returnPayment()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

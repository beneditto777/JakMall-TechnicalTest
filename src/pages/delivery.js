import React, { useState, useEffect } from "react";
import "./delivery.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import FormDelivery from "./Form/FormDelivery";

const Delivery = () => {
  let location = useLocation();

  const [product1, setProduct1] = useState(parseInt(location.state.product1));
  const [product2, setProduct2] = useState(parseInt(location.state.product2));

  var goods = product1 * 300000 + product2 * 500000;
  var qty = product1 + product2;

  const [values, setValues] = useState({
    email: "",
    dropshipperName: "",
    phoneNumber: "",
    dropshipperPhone: "",
    address: "",
  });

  const formatCurrency = new Intl.NumberFormat("id", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  useEffect(() => {
    console.log("FINAL1", location);
  }, [location]);

  var [check, setCheck] = useState(false);
  var [fee, setFee] = useState(5900);

  const handleCheck = () => {
    setCheck(!check);
    console.log("active yn", check);
    console.log(values.email);
    console.log(values.dropshipperName);
    console.log(values.phoneNumber);
    console.log(values.dropshipperPhone);
    console.log(values.address);
  };

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Harus berupa isian email yang valid!",
      required: true,
    },
    {
      id: 2,
      name: "dropshipperName",
      type: "text",
      placeholder: "Dropshipper name",
      errorMessage: "Tidak boleh kosong!",
      required: true,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "tel",
      placeholder: "Phone number",
      errorMessage: "Digit angka minimal 6 digit dan maksimal 20 digit!",
      pattern: `[-+,0-9]{6,20}`,
      required: true,
    },
    {
      id: 4,
      name: "dropshipperPhone",
      type: "tel",
      placeholder: "Dropshipper phone number",
      errorMessage: "Digit angka minimal 6 digit dan maksimal 20 digit!",
      pattern: `[-+,0-9]{6,20}`,
      required: true,
    },
    {
      id: 5,
      name: "address",
      type: "text",
      placeholder: "Delivery Address",
      errorMessage: "Maksimal 120 digit!",
      pattern: `^[A-Za-z0-9]{3,16}$`,
      required: true,
    },
  ];

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.email !== "" ||
      values.dropshipperName !== "" ||
      values.phoneNumber !== "" ||
      values.dropshipperPhone !== "" ||
      values.address !== ""
    ) {
      console.log("history");
      history("/payment", { state: { product1, product2, check, values } });
    } else {
    }
  };

  const handleBackToCart = () => {
    console.log("history");
    history("/cart", { state: { product1, product2 } });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="cart">
        <div className="formDelivery">
          <div className="formBackToCart">
            <button className="back" onClick={handleBackToCart}>
              <FaArrowLeft /> Back to Cart
            </button>
          </div>

          <div className="formDetail">
            <p>
              <span className="title">Delivery Details</span>
              <span className="drop">
                <p>
                  <input
                    type="checkbox"
                    id="test1"
                    onClick={handleCheck}
                    checked={check}
                  />
                  <label for="test1">Drop as dropshipper</label>
                </p>
              </span>
            </p>
          </div>

          <div className="formDetail">
            <form id="submit" onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <FormDelivery
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
            </form>
          </div>
        </div>

        <div className="total">
          <div className="totalTitle">
            <h2>Summary</h2>
          </div>

          <div className="detailDelivery">
            <p>{qty} items purchased</p>
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
              <p>{formatCurrency.format(fee)}</p>
            </p>
          </div>

          <div className="priceTotal">
            <p>
              <p>Total</p>
              <p>
                {check === true
                  ? formatCurrency.format(goods + fee)
                  : formatCurrency.format(goods)}
              </p>
            </p>
          </div>
          <div className="button">
            <div className="vertical-center">
              <button className="submit" form="submit" type="submit">
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

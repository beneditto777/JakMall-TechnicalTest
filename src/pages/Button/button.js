import React, { useState } from "react";
import "./button.css";

const ButtonGroup = ({ buttons, doSomethingAfterClick }) => {
  const [clickedId, setClickedId] = useState(-1);

  const handleClick = (e, id) => {
    setClickedId(id);
    doSomethingAfterClick(e);
  };

  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <button
          key={i}
          name={buttonLabel}
          onClick={(e) => handleClick(e, i)}
          className={i === clickedId ? "customButton actived" : "customButton"}
        >
          {buttonLabel}
        </button>
      ))}
    </>
  );
};

export default ButtonGroup;
import React, {useState} from 'react';
import './formDelivery.css';
import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

const Delivery =(props)=> {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
      };

    if (id === 5){
        return (
            <div className="formInput">
                <textarea
                    {...inputProps}
                    onChange={onChange}
                    onBlur={handleFocus}
                    // onFocus={() =>
                    //     inputProps.name === "confirmPassword" && setFocused(true)
                    // }
                    focused={focused.toString()}
                />
                <span className='error'>{errorMessage}</span>
            </div>
          );
    } else {
        return (
            <div className="formInput">
                <input
                    {...inputProps}
                    onChange={onChange}
                    onBlur={handleFocus}
                    // onFocus={() =>
                    //     inputProps.name === "confirmPassword" && setFocused(true)
                    // }
                    focused={focused.toString()}
                />
                <span className='error'>{errorMessage}</span>
            </div>
          );
    }
  
}

export default Delivery;
import React from "react";
import './button.css'

const Button = ({clickHandler, disabled, children}) => {
  return <button className='btn' onClick={clickHandler} disabled={disabled}>{children}</button>
}

export default Button

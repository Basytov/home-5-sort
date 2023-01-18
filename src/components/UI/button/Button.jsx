import React from 'react'
import "./Button.css";

const Button = ({nameButton, onClick}) => {

  return (
    <div>
        <button onClick={onClick}>
        {nameButton} 
        </button>
        
    </div>
  )
}

export default Button
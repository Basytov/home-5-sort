import React from 'react'
import "./Input.css";


export const Input = ({id, labelName,placeholder,type,...rest }) => {
  return (
    <div className='input'>
    <label htmlFor={id}>{labelName}</label>
    <input type={type} placeholder={placeholder || " "} id={id} {...rest} />
    </div>
  )
}

import React from 'react'
import "./TodoItem.css";


const TodoItem = ({items}) => {
    
  return (
    <div className='item'>
      <p>{`${items.name} (${items.age} years old)`}</p>
    </div>
  )
}

export default TodoItem
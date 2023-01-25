import React from 'react'
import "./TodoList.css";
import TodoItem from '../todoItem/TodoItem';

const TodoList = ({sortBe}) => {

  return (
    <div className='list'>
        {sortBe.map((item)=>(
                <TodoItem 
                items={item}
            />
           
        ))}
   
    </div>
  )
}

export default TodoList;
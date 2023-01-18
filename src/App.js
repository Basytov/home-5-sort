import './App.css';
import { useState } from "react";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";

function App() {

   
    const [sortBe, setSortBe]= useState([
       
     
       
    ]);

     sortBe.sort((a, b)=>{
      return b.age - a.age
     });

    


    const newAgeName = (data)=>{
   
    const uptadeNew = [...sortBe] 
    uptadeNew.push(data);
    setSortBe(uptadeNew)

    // console.log(uptadeNew);

    }
 

  return (
    <div className="App">
      <TodoForm newAgeName={newAgeName}/>
      <TodoList sortBe={sortBe}/>
    </div>
  );
}

export default App;

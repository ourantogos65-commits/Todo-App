"use client";
import { useState } from "react";
import { Button } from "@/components/Button";
import { Todolist } from "@/components/Todolist";
import { Todo } from "@/components/Todo";
import { v4 as uuidv4 } from 'uuid';



export default function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleOnClick = () => {
  const  newTodo=
    {id:uuidv4(), text:inputValue,complated:false }
    
  
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleOnChange = (e) => {
    
    setInputValue(e.target.value);
  };
const handleRemove=(id)=>{
  setTodos(todos.filter(todo=>todo.id !==id))
}


  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-[420px] overflow-hidden bg-white rounded-2xl p-8 gap-3 flex flex-col items-center shadow-2xl">
        <h1 className="text-4xl  text-gray-800 mb-6">To-Do List</h1>

        <div className="flex w-full  gap-2 ">
          <input
            type="text"
            placeholder="Enter a task"
            value={inputValue}
            onChange={handleOnChange}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg "
          />
          <Button handleOnClick={handleOnClick} > Add </Button>
           
        </div>
        <div className="flex gap-2  mr-30">
           <Todo  text="All" />
           <Todo text="Active" />
           <Todo text="Completed" />
        </div>
  
      <div className="w-full h-60 overflow-auto">
 
         <Todolist   handleRemove={handleRemove}   todos={todos}/>
      </div>
      
    <div className="mt-1.5 ">
     <p className="text-gray-400 mb-4">Manage your tasks efficiently</p>
       <p className="text-gray-400">Powered by Pinecone Academy</p>
    </div>
       
      </div>
    </div>
  );
}



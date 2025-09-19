"use client";
import { useState } from "react";
import { InputAdd } from "@/components/InputAdd";
import { Todolist } from "@/components/Todolist";
import { Todo } from "@/components/Todo";
import { v4 as uuidv4 } from 'uuid';




export default function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter,setfilter]=useState("all")


  const filteredTodos=todos.filter(todo=> {
    if(filter==="active") return!todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  })


 

  const handleOnClick = () => {
  const  newTodo= {id:uuidv4(), text:inputValue,completed:false} 
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  
  const handleOnChange = (e) => {
 setInputValue(e.target.value);
  };
const handleRemove=(id)=>{
setTodos(todos.filter(todo=>todo.id !==id))
}
const checkBox=(id)=>{
  setTodos(todos.map(todo=>todo.id===id?{...todo,completed:!todo.completed}:todo

  ))

}

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-[420px] overflow-hidden bg-white rounded-2xl p-8 gap-3 flex flex-col items-center shadow-2xl">
        <h1 className="text-4xl  text-gray-800 mb-6">To-Do List</h1>

       <InputAdd inputValue={inputValue} handleOnchange={handleOnChange} handleOnClick={handleOnClick}/>
        <div className="flex gap-2  mr-30">
           <Todo onClick={() => setfilter("all")} text="All" />
           <Todo onClick={() => setfilter("active")} text="Active" />
           <Todo  onClick={() => setfilter("completed")} text="Completed" />
        </div>
  
      <div className="w-full h-50 overflow-auto">

         <Todolist checkBox={checkBox} handleRemove={handleRemove}   filteredTodos={filteredTodos}/>
      </div>
      
    <div className="mt-1.5 ">
     <p className="text-gray-400 mb-4">Manage your tasks efficiently</p>
       <p className="text-gray-400">Powered by Pinecone Academy</p>
    </div>
       

      </div>
    </div>
  );
}



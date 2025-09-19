"use client";

import React from "react"; 

export const Todolist = ({ filteredTodos,handleRemove,checkBox}) => {
  return (
    <div className="w-full  flex flex-col gap-2 ">
      {filteredTodos.map(todo => (
    
     <div 
          key={todo.id}
          className="px-5 py-4 overflow-auto w-full flex gap-10 justify-between bg-gray-100 rounded-lg">

            <div className="flex gap-2">
           <input 
           type="checkbox"
           onChange={()=>checkBox(todo.id)} />
           <p className={todo.completed ? "line-through text-gray-400" : ""}>
               {todo.text}
           </p>
            </div>
            
         
          <div onClick={()=>handleRemove(todo.id)}  className= "bg-red-100 hover:bg-red-300 text-red-500 px-2 h-6 rounded-xl">Delete</div>
        </div>
       
      ))}
    </div>
   
  );
};



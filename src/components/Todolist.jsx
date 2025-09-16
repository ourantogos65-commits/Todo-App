"use client";
import React from "react"; 

export const Todolist = ({ todos,handleRemove}) => {
  return (
    <div className="w-full  flex flex-col gap-2 ">
     
      {todos.map(todo => (
      
     <div 
          key={todo.id}
          className="px-5 py-4 overflow-auto w-full flex gap-10 justify-between bg-gray-100 rounded-lg">
            <div className="flex gap-2">
           <input type="checkbox"  />
            {todo.text}
            </div>
            
         
          <div onClick={()=>handleRemove(todo.id)}  className= "bg-red-100 hover:bg-red-300 text-red-500 px-2 h-6 rounded-xl">Delete</div>
        </div>
       
      ))}
    </div>
   
  );
};



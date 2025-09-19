"use client"
import React from "react"

export const InputAdd=({inputValue,handleOnchange,handleOnClick})=>{
return(
    <div className="flex w-full gap-2">
    <input
     type="text"
     placeholder="Add a task..." 
     value={inputValue}
     onChange={handleOnchange}
     className="flex-1 px-4 py-2 border border-gray-300 rounded-lg "

     />
      <button
      onClick={handleOnClick}
      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
    >
    Add
    </button>
    </div>
)
}
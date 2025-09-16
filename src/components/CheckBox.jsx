"use client"
import React from "react";

export const CheckBox= ({ text }) => {
  return (
    <button
   
      className="h-8 w-20  rounded-xl bg-gray-200 text-gray-700 
               hover:bg-blue-500 hover:text-white 
               transition duration-200"
    >
      {text}
    </button>
  );
};

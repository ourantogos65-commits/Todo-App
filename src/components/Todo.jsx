"use client"
import React from "react";

export const Todo = ({ onClick,text }) => {
  return (
    <button
      onClick={onClick}
      className=" px-3 py-1 rounded-xl bg-gray-200 text-gray-700 
               hover:bg-blue-500 hover:text-white 
               transition duration-200 "
    >
      {text}
    </button>
  );
};

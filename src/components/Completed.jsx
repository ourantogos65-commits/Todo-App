"use client"
import React from "react";

export const Completed= ({ completed }) => {
  return (
    <input
    type="checkbox"
    onClick={completed}
      className="h-8 w-8  rounded-xl bg-gray-200 text-gray-700 
               hover:bg-blue-500 hover:text-white 
               transition duration-200"
    >
      {text}
    </input>
  );
};

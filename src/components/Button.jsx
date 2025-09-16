"use client";
import React from "react";

export const Button = ({ handleOnClick, children,  }) => {
  return (
    <button
      onClick={handleOnClick}
      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
    >
      {children}
    </button>
  );
};



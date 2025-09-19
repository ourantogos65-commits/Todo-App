import React from "react";

export const AddProduct = (props) => {
  const { inputVal, inputChangeHandler, clickHandler, DisplayText } = props;
  return (
    <div
      className="p-4"
      //   className={`${
      //     isDark ? "bg-[#121212] text-white" : "bg-[#f9f9f9] text-gray-900"
      //   } h-screen w-full flex flex-col items-center justify-center px-6`}
    >
      <div className="w-full max-w-md space-y-4">
        {/* <p className="text-lg font-medium">Value: {value}</p>
        <p className="text-lg font-medium">Count: {count}</p> */}
        <p className="text-sm text-gray-500">{DisplayText}</p>
        <div className="bg-gray-100 h-[200px] p-10">
          <input
            type="text"
            placeholder="Enter age"
            value={inputVal}
            onChange={inputChangeHandler}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
          />

          <button
            onClick={clickHandler}
            className="w-24 h-9 border mt-3 ml-70 border-gray-400 rounded-2xl active: bg-gray-200"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

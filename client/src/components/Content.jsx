import React from "react";

export const Content = () => {
  return (
    <div className="relative border h-60 m-auto ">
      <div className="flex justify-between items-center ml-5 p-2">
        <div className="flex flex-col">
          <span className="mt-4 text-sm text-gray-600">
            Click <span className="bg-gray-200 text-blue-700">+ New</span> to
            create new task and wait for project manager card.
          </span>
        </div>
      </div>
      <div>
        <div className="border border-black border-opacity-5 w-52 h-8 ml-7 p-2 flex items-center align-middle m-auto justify-center mt-5 cursor-pointer">
          <span className="text-3xl text-gray-400">+</span>
        </div>
      </div>
    </div>
  );
};

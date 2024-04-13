import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/outline";

export const Content = () => {
  const profileImage =
    "https://media.licdn.com/dms/image/C4D03AQF2zq9RlLxcwA/profile-displayphoto-shrink_800_800/0/1646957042981?e=1718236800&v=beta&t=bYuYYM4MRrFUsJKPjBrtEjDaCKlsVZg7mUxcQE3ob1Q";
  return (
    <>
      <div className="flex justify-between items-center ml-5 p-2">
        <div className="flex flex-col mt-5">
          <h1 className="text-4xl font-semibold ">Daily Tasks</h1>
          <span className="mt-4 text-sm text-gray-600">
            Click <span className="bg-gray-200 text-blue-700">+ New</span> to
            create new list and wait for project manager card.
          </span>
        </div>
        <div className="">
          {/* Add 3 icons - search, notification and Profile icon */}
          <div className="flex items-center space-x-4">
            <MagnifyingGlassIcon className="h-9 w-9 p-2 bg-gray-300 rounded-full cursor-pointer" />
            <BellIcon className="h-9 w-9 p-2 bg-gray-300 rounded-full cursor-pointer" />
            <img
              src={profileImage}
              alt="profile"
              className="h-9 w-9 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="border border-black border-opacity-5 w-52 h-32 ml-7 p-2 flex items-center align-middle m-auto justify-center mt-5 cursor-pointer">
        <span className="text-3xl text-gray-400">+</span>
      </div>
    </>
  );
};

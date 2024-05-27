import React from "react";

export const NewGroup = () => {
  return (
    <>
      <h2 className="text-xl">New Group</h2>
      <form className="flex sm:flex-wrap relative text-gray-900">
        <input type="text" placeholder="Title" className="btn " />
        <input type="text" placeholder="Description" className="btn" />
        <select className="btn">
          <option value="pending">Pending</option>
          <option value="hold">Hold</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <select className="btn">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <input type="text" placeholder="Assign to member" className="btn" />
        <input type="date" className="btn" />
        <input type="text" placeholder="Labels/Tags" className="btn" />

        <button
          className="bg-gray-900 text-white px-4"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Create
        </button>
      </form>
    </>
  );
};

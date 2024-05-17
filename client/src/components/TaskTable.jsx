// TaskTable.js
import React from "react";
import Task from "./Task";

const TaskTable = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2">Task</th>
            <th className="px-4 py-2">Owner</th>
            <th className="px-4 py-2">Due Date</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Progress</th>
            <th className="px-4 py-2">Priority</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task._id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;

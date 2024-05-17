// Task.js
import React from "react";

const Task = ({ task }) => {
  console.log(task);
  return (
    <tr className="border-b">
      <td className="px-4 py-2">{task.title}</td>
      <td className="px-4 py-2">
        {task.assignedTo.map((user) => user).join(", ")}
      </td>
      <td className="px-4 py-2">
        {new Date(task.dueDate).toLocaleDateString()}
      </td>
      <td className="px-4 py-2">{task.status}</td>
      <td className="px-4 py-2">{task.progress}%</td>
      <td className="px-4 py-2">{task.priority}</td>
    </tr>
  );
};

export default Task;

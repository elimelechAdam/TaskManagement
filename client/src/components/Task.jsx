// Task.js
import React, { useState } from "react";
import { TaskModel } from "./TaskModel";

const Task = ({ task }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr className="border-b" onClick={(e) => setOpen(!open)}>
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
      <TaskModel open={open} handleOpen={() => setOpen(!open)} task={task} />
    </>
  );
};

export default Task;

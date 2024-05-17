import React from "react";
import { useParams } from "react-router-dom";
import { useGetProjectQuery, useGetTasksQuery } from "../../lib/query/query";
import TaskTable from "../../components/TaskTable";

export const Tasks = () => {
  const { id } = useParams();

  const { data: task, isLoading, isError } = useGetTasksQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading task</div>;

  console.log(task);

  return (
    <div className="p-8">
      <h1 className="text-3xl">{task.name}</h1>
      <p>{task.description}</p>

      {/* new group */}
      <div className="mt-8">
        <h2 className="text-xl">New Group</h2>
        <form>
          <input
            type="text"
            placeholder="Group Name"
            className="border border-gray-400 p-2"
          />
          <button className="bg-blue-500 text-white p-2 rounded-md ml-2">
            Create
          </button>
        </form>
      </div>

      {/* tasks */}
      <TaskTable tasks={task} />
    </div>
  );
};

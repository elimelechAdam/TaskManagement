import React from "react";
import { useParams } from "react-router-dom";
import { useGetProjectQuery } from "../../lib/query/query";

export const Project = () => {
  const { id } = useParams();

  const { data: project, isLoading, isError } = useGetProjectQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading project</div>;

  console.log(project);

  return (
    <div className="p-8">
      <h1 className="text-3xl">{project.name}</h1>
      <p>{project.description}</p>

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
      <div className="mt-8">
        <h2 className="text-xl">Tasks</h2>
        <div className="mt-4">
          <div className="flex justify-between border-b border-gray-400">
            <div>Task 1</div>
            <div>Due Date</div>
            <div>Assigned To</div>
          </div>
          <div className="flex justify-between border-b border-gray-400">
            <div>Task 2</div>
            <div>Due Date</div>
            <div>Assigned To</div>
          </div>
          <div className="flex justify-between border-b border-gray-400">
            <div>Task 3</div>
            <div>Due Date</div>
            <div>Assigned To</div>
          </div>
        </div>
      </div>
    </div>
  );
};

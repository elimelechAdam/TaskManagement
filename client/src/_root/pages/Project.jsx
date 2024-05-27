import React from "react";
import { useParams } from "react-router-dom";
import { useGetProjectQuery, useGetTasksQuery } from "../../lib/query/query";
import TaskTable from "../../components/TaskTable";
import { NewGroup } from "../../components/NewGroup";

export const Project = () => {
  const { id } = useParams();

  const { data: task, isLoading, isError } = useGetTasksQuery(id);
  const { data: project, isPending, isError: err } = useGetProjectQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading task</div>;

  return (
    <div className="p-8 ">
      <h1 className="text-3xl">{project?.name}</h1>
      <p>{project?.description}</p>

      {/* new group */}
      <div className="my-6">
        <NewGroup />
      </div>

      {/* tasks */}

      <TaskTable tasks={task} />
    </div>
  );
};

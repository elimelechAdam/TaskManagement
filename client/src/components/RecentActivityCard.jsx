import React from "react";

export const RecentActivityCard = () => {
  const tasks = [
    {
      id: 1,
      taskName: "Complete project documentation",
      dueDate: "2024-04-20",
      status: "In progress",
      recentActivity: {
        date: "2024-04-13",
        description: "Added section on deployment.",
      },
    },
    {
      id: 2,
      taskName: "Update software to latest version",
      dueDate: "2024-04-15",
      status: "Completed",
      recentActivity: {
        date: "2024-04-12",
        description: "Software updated successfully.",
      },
    },
    {
      id: 3,
      taskName: "Prepare quarterly financial report",
      dueDate: "2024-04-30",
      status: "Not started",
      recentActivity: {
        date: "2024-04-11",
        description: "Gathered all necessary financial data.",
      },
    },
  ];

  return (
    <div className="flex flex-col space-y-2 ">
      {tasks.map((task) => (
        <div key={task.id} className="bg-gray-100 p-3 rounded-lg border">
          <p className="font-semibold">{task.taskName}</p>
          <p className="text-sm text-gray-600">
            {task.recentActivity.description}
          </p>
          <p className="text-xs text-gray-500">{task.recentActivity.date}</p>
        </div>
      ))}

      <button className="text-blue-500 hover:underline text-sm ">
        View all activity
      </button>
    </div>
  );
};

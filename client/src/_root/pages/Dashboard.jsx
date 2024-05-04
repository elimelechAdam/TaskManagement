import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/outline";
import { TasksAmountChart } from "../../components/TasksAmountChart";
import { RecentActivityCard } from "../../components/RecentActivityCard";
import useAuthStore from "../../lib/store/authStore";
import Search from "../../components/Search";
import { Content } from "../../components/Content";

// Things to do:
// Data Summary Cards: At the top of the content area, it would be helpful to have small cards or widgets that summarize key data points,
//  like the total number of tasks, tasks completed, overdue tasks, and tasks in progress.

// Filter Options: Above or beside the chart, you might add dropdown menus or buttons to filter the tasks by date range,
//  category, priority, or status, which would dynamically update the chart.

// Recent Activity Feed: A section that lists recent updates or changes to tasks,
//  providing a quick overview of the latest activity within the projects or tasks.

// Task List: While the chart gives a visual summary, having a list view of tasks with the ability to sort and perhaps quick actions like edit
//  or mark complete could be very useful.

// Quick Add Task Button: A prominently placed button that allows users to quickly add a new task without navigating away from the dashboard.

// Notifications/Alerts Section: An area to display alerts for deadlines approaching, messages from team members, or system notifications.

// To-Do List or Upcoming Tasks: A dedicated section for upcoming tasks with due dates to keep the user informed on what’s next.

// Performance Metrics: If applicable, graphs showing performance over time, like average completion time for tasks, could provide insightful data.

// Customization Options: Allow users to personalize their dashboard view, like changing themes or deciding which widgets to display.

// Help/Resources: Links to documentation, tutorials, or support for users who need assistance navigating the dashboard or understanding how
//  to complete tasks.

export const Dashboard = () => {
  const { userData, token } = useAuthStore();
  const { profileImage, email, name, tasks } = userData;
  ("https://media.licdn.com/dms/image/C4D03AQF2zq9RlLxcwA/profile-displayphoto-shrink_800_800/0/1646957042981?e=1718236800&v=beta&t=bYuYYM4MRrFUsJKPjBrtEjDaCKlsVZg7mUxcQE3ob1Q");
  return (
    <>
      <div className="flex justify-between items-center ml-5 p-2">
        <div className="flex flex-col mt-5">
          <h1 className="text-4xl font-semibold ">Dashboard</h1>
        </div>
        <div className="">
          {/* Add 3 icons - search, notification and Profile icon */}
          <div className="flex items-center space-x-4">
            <Search />
            {/* <MagnifyingGlassIcon className="h-9 w-9 p-2 bg-gray-300 rounded-full cursor-pointer" /> */}
            <BellIcon className="h-9 w-9 p-2 bg-gray-300 rounded-full cursor-pointer" />
            <img
              src={profileImage}
              alt="profile"
              className="h-9 w-9 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="w-full p-2 flex flex-col md:flex-row items-center m-auto mt-5 gap-2">
        <div className="p-2">
          <Content />
        </div>
        <div>
          <TasksAmountChart />
        </div>
        <div>
          <RecentActivityCard />
        </div>
      </div>
    </>
  );
};

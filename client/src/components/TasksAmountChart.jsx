import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const TasksAmountChart = () => {
  // Sample data
  const data = [
    { name: "Total", Amount: 3 },
    { name: "Completed", Amount: 1 },
    { name: "Overdue", Amount: 1 },
    { name: "In progress", Amount: 2 },
    { name: "Not started", Amount: 1 },
  ];

  return (
    <BarChart
      width={590}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Amount" fill="#8884d8" />
    </BarChart>
  );
};

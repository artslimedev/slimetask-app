import { getTaskCountByStatus } from "@/services/task";
import React from "react";
import { Charts as ChartsComp } from "./charts";

export default async function Chart() {
  const count = await getTaskCountByStatus();
  const chartData = [
    { status: "starting", count: count.starting, fill: "#FF6384" },
    { status: "progress", count: count.progress, fill: "#36A2EB" },
    { status: "completed", count: count.completed, fill: "#FFCE56" },
  ];
  return <ChartsComp data={chartData} />;
}

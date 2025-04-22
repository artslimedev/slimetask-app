"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartContainer,
  ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts";

type Props = {
  data: {
    status: string;
    count: number;
    fill: string;
  }[];
};

const chartConfig = {
  starting: {
    label: "Starting",
    backgroundColor: "#FF6384",
    borderColor: "#FF6384",
    borderWidth: 1,
    hoverBackgroundColor: "#FF6384",
    hoverBorderColor: "#FF6384",
  },
  progress: {
    label: "In Progress",
    backgroundColor: "#36A2EB",
    borderColor: "#36A2EB",
    borderWidth: 1,
    hoverBackgroundColor: "#36A2EB",
  },
  completed: {
    label: "Completed",
    backgroundColor: "#FFCE56",
    borderColor: "#FFCE56",
    borderWidth: 1,
    hoverBackgroundColor: "#FFCE56",
    hoverBorderColor: "#FFCE56",
  },
};

export const Charts = (props: Props) => {
  const { data } = props;
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex items-center pb-0">
        <CardTitle className="text-2xl font-bold">Bar Charts</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Your Tasks Status
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical />
            <XAxis
              dataKey="status"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" fill="#8884d8">
              {data.map((entry, index) => (
                <Rectangle key={`bar-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

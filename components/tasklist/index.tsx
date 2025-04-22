import React from "react";
import { CardDescription, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { getTasks } from "@/services/task";
import { getDate } from "@/utils/getDate";
import StatusBullet from "../StatusBullet";
import { TaskStatus } from "../form/schema";
import TitleCell from "./titlecell";

export default async function TaskList() {
  const tasks = await getTasks();
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <CardTitle> Your tasks for today</CardTitle>
        <CardDescription>{`Let's get everything done`}</CardDescription>
      </div>
      <Table className="w-full h-full">
        <TableCaption>A list of your tasks.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead className="w-[100px]">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell className="font-medium">
                {getDate(task.createdAt)}
              </TableCell>
              <TitleCell task={task} />
              <TableCell className="capitalize ">
                <StatusBullet status={task.status as TaskStatus} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

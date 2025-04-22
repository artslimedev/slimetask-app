"use server";

import { FormSchema } from "@/components/form/schema";
import { Task } from "@/lib/generated/prisma";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const revalidatePageData = async () => {
  revalidatePath("/", "layout");
};

export const createTask = async (task: FormSchema) => {
  await prisma.task.create({
    data: {
      title: task.title,
      description: task.description || "",
      status: task.status,
    },
  });
  revalidatePageData(); // Revalidate the home page to show the new task
};

export const getTasks = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return tasks;
};

export const deleteTask = async (id: string) => {
  await prisma.task.delete({
    where: {
      id,
    },
  });
  revalidatePageData(); // Revalidate the home page to show the new task
};

export const updateTask = async (task: Task) => {
  await prisma.task.update({
    where: { id: task.id },
    data: {
      title: task.title,
      description: task.description || "",
      status: task.status,
    },
  });
  revalidatePageData(); // Revalidate the home page to show the new task
};

export const getTaskCountByStatus = async () => {
  const [starting, progress, completed] = await Promise.all([
    prisma.task.count({
      where: {
        status: "starting",
      },
    }),
    prisma.task.count({
      where: {
        status: "progress",
      },
    }),
    prisma.task.count({
      where: {
        status: "completed",
      },
    }),
  ]);
  return { starting, progress, completed };
};

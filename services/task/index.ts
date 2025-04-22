"use server";

import { FormSchema } from "@/components/form/schema";
import prisma from "@/lib/prisma";

export const createTask = async (task: FormSchema) => {
  await prisma.task.create({
    data: {
      title: task.title,
      description: task.description || "",
      status: task.status,
    },
  });
};

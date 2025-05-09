"use client";
import { Task } from "@/lib/generated/prisma";
import React, { useState } from "react";
import { TableCell } from "../ui/table";
import Modal from "../ui/modal";
import Form from "../form";

type Props = {
  task: Task;
};

export default function TitleCell(props: Props) {
  const { task } = props;
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <TableCell className="font-medium">
        <span onClick={open} className="hover:underline">
          {task.title}
        </span>
        <Modal title="Task Details" close={close} isOpen={isOpen}>
          <div className="min-w-[500px]"></div>
          <Form task={task} onSubmitOrDelete={close} />
        </Modal>
      </TableCell>
    </>
  );
}

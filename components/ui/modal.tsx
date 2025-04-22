"use client";
// This component is a modal that can be used to display content in a popup window.
import React, { useRef } from "react";
import { IoClose } from "react-icons/io5";

type Props = {
  children: React.ReactNode;
  close: () => void;
  title: string;
  isOpen: boolean;
};

export default function Modal(props: Props) {
  const { children, close, title, isOpen } = props;
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  if (!isOpen) return null;
  const onScreenClick = (e: React.MouseEvent) => {
    const dimensions = modalRef.current?.getBoundingClientRect();
    if (!dimensions) return;
    if (
      e.clientX < dimensions.left ||
      e.clientX > dimensions.right ||
      e.clientY < dimensions.top ||
      e.clientY > dimensions.bottom
    ) {
      close();
    }
  };
  return (
    <div
      onClick={onScreenClick}
      className="fixed z-[20] inset-0 bg-zinc-100/75 flex items-center justify-center"
    >
      <div
        ref={modalRef}
        className="bg-background text-black rounded max-h-[90vh] overflow-y-auto md:max-w-[70vw]"
      >
        <div className="flex flex-col gap-1">
          <div className="py-4 px-8 border-b border-b-black/10">
            <div className="flex gap-12 items-center justify-between">
              {title ? <span className="text-xl">{title}</span> : null}
              <button className="cursor-pointer" onClick={close}>
                <IoClose />
              </button>
            </div>
          </div>
          <div className="p-8">{children}</div>
        </div>
      </div>
    </div>
  );
}

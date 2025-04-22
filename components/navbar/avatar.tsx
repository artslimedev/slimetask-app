import React from "react";
import {
  Avatar as AvatarComp,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar";

export default function Avatar() {
  return (
    <AvatarComp className="mr-2 h-8 w-8">
      <AvatarImage
        src={`https://avatar.vercel.sh/59283.png`}
        alt="Slime Avatar"
      />
      <AvatarFallback>SD</AvatarFallback>
      <AvatarFallback className="uppercase"></AvatarFallback>
    </AvatarComp>
  );
}

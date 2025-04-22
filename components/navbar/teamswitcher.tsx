import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { CaretSortIcon } from "@radix-ui/react-icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command";
import { PlusCircleIcon } from "lucide-react";

const groups = [
  {
    label: "Personal Account",
    teams: [
      {
        label: "Art Slime",
      },
    ],
  },
  {
    label: "Teams",
    teams: [
      {
        label: "Mobile Support Team",
      },
      {
        label: "Backend Team",
      },
    ],
  },
];

export default function TeamSwitcher() {
  return (
    <Popover>
      <PopoverTrigger>
        <div
          aria-label="Select team"
          className="px-3 py-2 transition-all hover:bg-secondary flex rounded-2xl items-center gap-1.5 w-[200px] justify-between border"
        >
          <Avatar className="mr-2 h-6 w-6">
            <AvatarImage
              src="https://avatar.vercel.sh/43205.png"
              alt="Avatar"
            />
            <AvatarFallback>Slime</AvatarFallback>
          </Avatar>
          Art Slime
          <CaretSortIcon />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Command>
          <CommandInput placeholder="Search team..." />
          <CommandList>
            <CommandEmpty>No team found</CommandEmpty>
            {groups.map((group) => (
              <CommandGroup key={group.label} heading={group.label}>
                {group.teams.map((team) => (
                  <CommandItem key={team.label}>
                    <Avatar className="mr-2 h-6 w-6">
                      <AvatarImage
                        src={`https://avatar.vercel.sh/${team.label}.png`}
                        alt="Avatar"
                      />
                      <AvatarFallback>Slime</AvatarFallback>
                      <AvatarFallback className="uppercase"></AvatarFallback>
                    </Avatar>
                    {team.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup heading="Actions">
              <CommandItem>
                <PlusCircleIcon className="mr-2 h-5 w-5" />
                Create Team
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

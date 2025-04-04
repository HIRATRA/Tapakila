"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutForm } from "./logout-form";
import { MdExitToApp } from "react-icons/md";
import { Button } from "../ui/button";
import Link from "next/link";

export const UserButton = () => {
  const user = useCurrentUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-sky-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="flex flex-col gap-2">
          <div>
            <Link
              href="/client"
              className="flex items-center gap-2 text-blue-500 hover:underline"
            >
              <FaUser className="h-4 w-4" />
              <span>Profile</span>
            </Link>
          </div>
          <div>
            <Link
              href="/settings"
              className="flex items-center gap-2 text-blue-500 hover:underline"
            >
              <MdExitToApp className="h-4 w-4" />
              <span>Settings</span>
            </Link>
          </div>
          <LogoutForm>
            <Button variant="ghost" className="flex items-center gap-2">
              <MdExitToApp className="h-4 w-4" />
              <span className="cursor-pointer">Logout</span>
            </Button>
          </LogoutForm>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

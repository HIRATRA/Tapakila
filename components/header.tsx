"use client";

import { Ticket } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LoginButton } from "./auth/login-button";
import { UserButton } from "./auth/user-button";

export const Header = () => {
  const user = useCurrentUser();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/marketing" className="flex items-center gap-2">
          <Ticket className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Tapakila</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/marketing"
            className="text-sm font-medium hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/events"
            className="text-sm font-medium hover:text-primary"
          >
            Events
          </Link>
          <Link
            href="/features"
            className="text-sm font-medium hover:text-primary"
          >
            Features
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <UserButton />
            </>
          ) : (
            <>
              <LoginButton mode={user ? "redirect" : "modal"} asChild>
                <button className="hidden md:block text-sm font-medium hover:text-primary">
                  Sign In
                </button>
              </LoginButton>
              <Link href="/events">
                <Button className="cursor-pointer">Get Started</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

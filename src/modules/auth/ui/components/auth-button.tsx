"use client";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UserCircle2 } from "lucide-react";
import React from "react";

export const AuthButton = () => {
  // todo: add different auth states
  return (
    <>
      <SignedIn>
        <UserButton />
        {/* add menu items for Studio  and user */}
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant={"outline"}
            className="px-4 py-2 text-sm font-medium text-blue-500 hover:text-blue-600 border-blue-600/20 rounded-full shadow-none "
          >
            <UserCircle2 />
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};

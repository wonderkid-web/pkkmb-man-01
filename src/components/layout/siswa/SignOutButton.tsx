"use client";

import { Typography } from "@/MT";
import { PowerIcon } from "@heroicons/react/24/solid";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

function SignOutButton() {
  const router = useRouter();
  return (
    <div className="flex gap-2 items-center hover:bg-white px-1 rounded-sm hover:cursor-pointer hover:text-gray-500 text-white ">
      <PowerIcon className="h-5 w-5"   />
      <Typography
        className="hover:text-gray-500 text-white"
        onClick={async () => {
          router.push("/signin");
          await signOut();
        }}
      >
        Log out
      </Typography>
    </div>
  );
}

export default SignOutButton;

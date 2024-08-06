"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@material-tailwind/react";
import { Toaster } from "sonner";
import { NavbarSimple } from "./layout/NavbarProfile";

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider>
        <NavbarSimple />
        <Toaster />
        <div className="main p-2 pb-5 text">
          <div className="m-4 bg-gray-50 rounded-xl h-full p-4 overflow-auto">
            {children}
          </div>
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default Wrapper;

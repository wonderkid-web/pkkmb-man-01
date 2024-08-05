"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@material-tailwind/react";
import { Sidebar } from "./layout/Sidebar";
import { Navbar } from "./layout/Navbar";
import theme from "@material-tailwind/react/theme";
import { Toaster } from "sonner";

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider>
        <Toaster richColors={true} />
        <div className="container min-h-screen max-h-screen overflow-auto  min-w-full bg-teal-800 p-2">
          <Sidebar />
          <Navbar />
          <div className="main p-2 pb-5 text">
            <div className="m-4 bg-gray-50 rounded-xl h-full p-4 overflow-auto">{children}</div>
          </div>
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default Wrapper;

"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@material-tailwind/react";
import { Toaster } from "sonner";

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider>
        <Toaster richColors={true} position="top-center"/>
        <>{children}</>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default Wrapper;

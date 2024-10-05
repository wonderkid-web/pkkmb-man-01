"use client";
import RegistertrationForm from "@/components/RegistrationForm";
import RegistrationRequirements from "@/components/RegistrationRequirements";
import React, { useState } from "react";

function Page() {
  const [accept, setAccept] = useState(false);
 

  return (
    <>
    {/* {registration ? "udh daftar" : "belum daftar"} */}
      {!accept ? <RegistrationRequirements setAccept={setAccept}/> : <RegistertrationForm />}
    </>
  );
}

export default Page;

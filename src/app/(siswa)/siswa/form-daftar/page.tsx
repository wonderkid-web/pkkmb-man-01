// "use client";
// import RegistertrationForm from "@/components/RegistrationForm";
// import RegistrationRequirements from "@/components/RegistrationRequirements";
// import React, { useState } from "react";

// function Page() {
//   const [accept, setAccept] = useState(false);
 

//   return (
//     <>
//     {/* {registration ? "udh daftar" : "belum daftar"} */}
//       {!accept ? <RegistrationRequirements setAccept={setAccept}/> : <RegistertrationForm />}
//     </>
//   );
// }

// export default Page;


"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const DynamicRegistrationForm = dynamic(
  () => import("@/components/RegistrationForm"),
  {
    ssr: false,
    loading: () => <h1>Loading Regis Form..</h1>,
  }
);

const DynamicRegistrationRequirements = dynamic(
  () => import("@/components/RegistrationRequirements"),
  {
    ssr: false,
    loading: () => <h1>Loading Regis Requirement..</h1>,
  }
);

function Page() {
  const [accept, setAccept] = useState(false);

  return (
    <>
      {/* {registration ? "udh daftar" : "belum daftar"} */}
      {!accept ? (
        <DynamicRegistrationRequirements setAccept={setAccept} />
      ) : (
        <DynamicRegistrationForm />
      )}
    </>
  );
}

export default Page;

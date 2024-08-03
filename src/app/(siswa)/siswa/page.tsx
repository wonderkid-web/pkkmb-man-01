import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import React from "react";

async function page() {
  const session = await getServerSession(options);

  return (
    <div>
      <pre>{session && JSON.stringify(session, null, 2)}</pre>
      <h1 className="text-2xl text-center mt-4">Halaman Siswa</h1>
    </div>
  );
}

export default page;

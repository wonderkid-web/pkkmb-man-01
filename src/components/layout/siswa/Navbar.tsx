import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";
import { PowerIcon } from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="p-1 font-medium">
        <Link
          href="/siswa/"
          className="flex items-center hover:bg-white hover:text-green-600 px-2 py-1 rounded-sm transition-colors"
        >
          Profile Sekolah
        </Link>
      </Typography>
      {/* <Typography as="li" variant="small" className="p-1 font-medium">
        <Link
          href="/siswa/visi-misi"
          className="flex items-center hover:bg-white hover:text-green-600 px-2 py-1 rounded-sm transition-colors"
        >
          Visi & Misi
        </Link>
      </Typography> */}
      {/* <Typography as="li" variant="small" className="p-1 font-medium">
        <Link
          href="/siswa/lokasi"
          className="flex items-center hover:bg-white hover:text-green-600 px-2 py-1 rounded-sm transition-colors"
        >
          Lokasi Sekolah
        </Link>
      </Typography> */}
      <Typography as="li" variant="small" className="p-1 font-medium">
        <Link
          href="/siswa/form-daftar"
          className="flex items-center hover:bg-white hover:text-green-600 px-2 py-1 rounded-sm transition-colors"
        >
          Form Pendaftaran
        </Link>
      </Typography>


     <SignOutButton />
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      color="teal"
      fullWidth={true}
      className="mx-auto px-6 py-3"
      variant="gradient"
    >
      <div className="!text-white flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Image
            src={logo}
            width={50}
            height={50}
            alt="logo"
            className="rounded-full"
          />

          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5"
          >
            MAN 01 Medan Pancing
          </Typography>
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

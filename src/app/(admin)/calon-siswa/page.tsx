"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import whatsapp from "/public/whatsapp.png";
import { useEffect, useState } from "react";
import { useGetDocs } from "@/hooks";
import { FormData } from "@/types";
import { useSession } from "next-auth/react";

const TABS = [
  {
    label: "Valid",
    value: "valid",
  },
  {
    label: "TidakValid",
    value: "unvalid",
  },

];

const TABLE_HEAD = ["Nama Lengkap", "NIK", "Status", "Tanggal Lahir", ""];


export default function CalonSiswa() {
  const { data } = useGetDocs<FormData>("form_pendaftaran");
  const session = useSession()

  return (
    <Card className="h-full w-full"> 

      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Table Calon Peserta Didik
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Lihat Informasi dari calon peserta didik yang sudah mendaftar
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            {/* <Button variant="outlined" color="teal" size="sm">
              view all
            </Button> */}
            <Button color="teal" className="flex items-center gap-3" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Print
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="valid" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              crossOrigin=""
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>

      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
          
            {data.map(
              // ({ img, name, email, job, org, online, date }, index) => {
              ({ docsUrl, nik, name, phone, education, fatherName, birthDate, status }, index) => {
                const isLast = index === data.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={docsUrl[0]} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {phone}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {education}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {fatherName}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={status ? "Valid" : "Tidak Valid"}
                          className={`${status ? "bg-green-500" : "bg-gray-500 text-black"} text-white`}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {birthDate}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Detail User">
                        <Link href={`/calon-siswa/${nik}`}>
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                        </Link>
                      </Tooltip>
                      <Tooltip content="Kirim Pesan Siswa">
                        <Link href={`/calon-siswa/${phone}`}>
                        <IconButton variant="text">
                          <div className="relative h-5 w-5">
                            <Image src={whatsapp} alt="whatsapp icon" objectFit="cover" />
                          </div>
                        </IconButton>
                        </Link>
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

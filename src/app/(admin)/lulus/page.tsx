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
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import whatsapp from "/public/whatsapp.png";
import { useRef, useState } from "react";
// import { useReactToPrint } from "react-to-print";
import { useGetDocs } from "@/hooks";
import { FormData } from "@/types";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import ProfilePicture from "@/components/ProfilePicture";

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
  const [filter, setFiltered] = useState("");
  const [parent] = useAutoAnimate();
  const componentRef = useRef();

  const handleExportToExcel = async () => {
    const { utils, writeFile } = (await import("xlsx")).default;

    // Prepare the data for Excel
    const excelData = data.map((item) => ({
      Name: item.name,
      NIK: item.nik,
      Phone: item.phone,
      "Father's Name": item.fatherName,
      "Father's Education": item.fatherEducation,
      "Mother's Education": item.motherEducation,
      "Birth Date": item.birthDate,
      Status: item.status ? "Valid" : "Tidak Valid",
    }));

    // Create a new workbook and add the data
    const workbook = utils.book_new();
    const worksheet = utils.json_to_sheet(excelData);
    utils.book_append_sheet(workbook, worksheet, "Calon Peserta Didik");

    // Generate and download the Excel file
    writeFile(workbook, "Calon_Peserta_Didik.xlsx");
  };

  // const handlePrint = useReactToPrint({
  //   content: (): ReactInstance | null =>
  //     componentRef.current! as ReactInstance | null,
  // });

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Table Calon Peserta Didik Tervalidasi
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Table dengan siswa yang sudah terindikasi lulus seleksi
              pendaftaran online
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            {/* <Button variant="outlined" color="teal" size="sm">
              view all
            </Button> */}
            <Button
              color="teal"
              className="flex items-center gap-3"
              size="sm"
              onClick={handleExportToExcel}
            >
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Print
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-end gap-4 md:flex-row">
          {/* <Tabs value="valid" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs> */}
          <div className="w-full md:w-72">
            <Input
              onChange={(e) => setFiltered(e.currentTarget.value)}
              color="green"
              crossOrigin=""
              label="Masukan Nama atau NIK Siswa/i"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>

      {/* @ts-ignore */}
      <CardBody className="overflow-scroll px-0" ref={componentRef}>
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
          <tbody ref={parent}>
            {data
              .filter((d) => d.status)
              .filter((d) =>
                filter
                  ? d.name.toLowerCase().includes(filter.toLowerCase()) ||
                    d.nik.includes(filter)
                  : data
              )
              .map(
                // ({ img, name, email, job, org, online, date }, index) => {
                (
                  {
                    docsUrl,
                    nik,
                    name,
                    phone,
                    fatherEducation,
                    motherEducation,
                    fatherName,
                    birthDate,
                    status,
                  },
                  index
                ) => {
                  const isLast = index === data.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <ProfilePicture name={name} />
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
                            {nik}
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
                            className={`${
                              status ? "bg-green-500" : "bg-gray-500 text-black"
                            } text-white`}
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
                          <Link href={`/lulus/${nik}`}>
                            <IconButton variant="text">
                              <PencilIcon className="h-4 w-4" />
                            </IconButton>
                          </Link>
                        </Tooltip>
                        <Tooltip content="Kirim Pesan Siswa">
                          <Link
                            href={`https://wa.me/${phone}?text=Assallamu'alaikum%20Warahmatullahi%20Wabarakatuh.%0ADiberitahukan%20kepada%20peserta%20yang%20bernama%20${name},%0ADinyatakan%20*Lulus*%20dalam%20Sesi%20Pendaftaran%20Peserta%20Didik%20Baru%20jalur%20Online.%0AInformasi%20Lebih%20Lanjut%20akan%20dikabarkan%20melalui%20akun%20WhatsApp%20ini%20(admin).%0ADiharapkan%20calon%20peserta%20didik%20dapat%20selalu%20mengaktifkan%20nomor%20WhatsApp%20ini.%0A%0AHubungi%20admin%20kami%20untuk%20informasi%20lebih%20lanjut.`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconButton variant="text">
                              <div className="relative h-5 w-5">
                                <Image
                                  src={whatsapp}
                                  alt="whatsapp icon"
                                  objectFit="cover"
                                />
                              </div>
                            </IconButton>
                          </Link>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
          </tbody>
        </table>
      </CardBody>

      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-bold">
          {/* Page 1 of 10 */}
          Total Pendaftar:{" "}
          <span className="font-bold bg-green-800 text-white p-1 rounded-sm">
            {data.length}
          </span>
        </Typography>
        {/* <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div> */}
      </CardFooter>
    </Card>
  );
}

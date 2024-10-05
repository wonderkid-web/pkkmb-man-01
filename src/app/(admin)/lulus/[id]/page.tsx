"use client";
import whatsapp from "/public/whatsapp.png";

import {
  Card,
  CardBody,
  Typography,
  List,
  ListItem,
  IconButton,
  Tooltip,
} from "@/MT";
import { FormData } from "@/types";
import { useGetDoc } from "@/hooks";
import { useParams } from "next/navigation";
import Image from "next/image";
import { database } from "@/libs/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "sonner";
import { Suspense } from "react";
import Gallery from "@/components/Galery";
import { Link } from "lucide-react";

const Details = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useGetDoc<FormData>(id);

  const updateStatus = async (status: boolean) => {
    const docRef = doc(database, "form_pendaftaran", id);

    toast.promise(
      updateDoc(docRef, {
        status,
      }),
      {
        loading: "Update Status Dokumen",
        success: "Berhasil Merubah Status",
      }
    );
  };

  if (data)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Card className="w-full max-w-4xl mx-4 shadow-lg rounded-lg overflow-hidden">
          <CardBody className="bg-white p-6">
            <Typography
              variant="h4"
              className="mb-6 text-center text-green-800"
            >
              Detail Pendaftaran Siswa Baru
            </Typography>

            <div className="mb-8">
              <Typography variant="h5" className="font-semibold text-green-600">
                A. Biodata Anak
              </Typography>
              <List className="space-y-2">
                <ListItem className="flex justify-between">
                  <span className="font-medium">Nama Calon Siswa:</span>{" "}
                  {data?.name}
                </ListItem>
                <ListItem className="flex justify-between">
                  <span className="font-medium">Tempat/Tanggal Lahir:</span>{" "}
                  {data?.birthDate}
                </ListItem>
                <ListItem className="flex justify-between">
                  <span className="font-medium">Agama:</span> {data?.religion}
                </ListItem>
                <ListItem className="flex justify-between">
                  <span className="font-medium">Alamat:</span> {data?.address}
                </ListItem>
                <ListItem className="flex justify-between">
                  <span className="font-medium">Nomor Telp/HP:</span>{" "}
                  <span>
                    {data?.phone}

                    <Tooltip content="Kirim Pesan Siswa">
                      <Link
                        href={`https://wa.me/${data?.phone}?text=Assallamu'alaikum%20Warahmatullahi%20Wabarakatuh.%0ADiberitahukan%20kepada%20peserta%20yang%20bernama%20${data?.name},%0ADinyatakan%20*Lulus*%20dalam%20Sesi%20Pendaftaran%20Peserta%20Didik%20Baru%20jalur%20Online.%0AInformasi%20Lebih%20Lanjut%20akan%20dikabarkan%20melalui%20akun%20WhatsApp%20ini%20(admin).%0ADiharapkan%20calon%20peserta%20didik%20dapat%20selalu%20mengaktifkan%20nomor%20WhatsApp%20ini.%0A%0AHubungi%20admin%20kami%20untuk%20informasi%20lebih%20lanjut.`}
                        target="_blank"
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
                  </span>
                </ListItem>
              </List>
            </div>

            <div className="mb-8">
              <Typography variant="h5" className="font-semibold text-green-600">
                B. Nama Orang Tua/Wali Murid
              </Typography>
              <List className="space-y-2">
                <ListItem className="flex justify-between">
                  <span className="font-medium">Nama Ayah:</span>{" "}
                  {data?.fatherName}
                </ListItem>
                <ListItem className="flex justify-between">
                  <span className="font-medium">
                    Tempat/Tanggal Lahir Ayah:
                  </span>{" "}
                  {data?.fatherBirthDate}
                </ListItem>
                <ListItem className="flex justify-between">
                  <span className="font-medium">Pendidikan Tertinggi:</span>{" "}
                  {data?.fatherEducation}
                </ListItem>
                <ListItem className="flex justify-between">
                  <span className="font-medium">Pekerjaan:</span>{" "}
                  {data?.fatherOccupation}
                </ListItem>
                <ListItem className="flex justify-between">
                  <span className="font-medium">Nomor Telp/HP:</span>{" "}
                  <span>
                    {data?.fatherParentPhone}

                    <Tooltip content="Kirim Pesan Siswa">
                      <Link
                        href={`https://wa.me/${data?.fatherParentPhone}?text=Assallamu'alaikum%20Warahmatullahi%20Wabarakatuh.%0ADiberitahukan%20kepada%20peserta%20yang%20bernama%20${data?.name},%0ADinyatakan%20*Lulus*%20dalam%20Sesi%20Pendaftaran%20Peserta%20Didik%20Baru%20jalur%20Online.%0AInformasi%20Lebih%20Lanjut%20akan%20dikabarkan%20melalui%20akun%20WhatsApp%20ini%20(admin).%0ADiharapkan%20calon%20peserta%20didik%20dapat%20selalu%20mengaktifkan%20nomor%20WhatsApp%20ini.%0A%0AHubungi%20admin%20kami%20untuk%20informasi%20lebih%20lanjut.`}
                        target="_blank"
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
                  </span>
                </ListItem>
                

                <ListItem className="flex justify-between">
                  <span className="font-medium">Nama Ibu:</span>{" "}
                  {data?.motherName}
                </ListItem>
                <ListItem className="flex justify-between">
                  <span className="font-medium">
                    Tempat/Tanggal Lahir Ibu:
                  </span>{" "}
                  {data?.motherBirthDate}
                </ListItem>
                <ListItem className="flex justify-between">
                  <span className="font-medium">Pendidikan Tertinggi Ibu:</span>{" "}
                  {data?.motherEducation}
                </ListItem>
                <ListItem className="flex justify-between">
                  <span className="font-medium">Pekerjaan Ibu:</span>{" "}
                  {data?.motherOccupation}
                </ListItem>
                <ListItem className="flex justify-between">
                  <span className="font-medium">Nomor Telp/HP Ibu:</span>{" "}
                  <span>
                    {data?.motherParentPhone}

                    <Tooltip content="Kirim Pesan Siswa">
                      <Link
                        href={`https://wa.me/${data?.motherParentPhone}?text=Assallamu'alaikum%20Warahmatullahi%20Wabarakatuh.%0ADiberitahukan%20kepada%20peserta%20yang%20bernama%20${data?.name},%0ADinyatakan%20*Lulus*%20dalam%20Sesi%20Pendaftaran%20Peserta%20Didik%20Baru%20jalur%20Online.%0AInformasi%20Lebih%20Lanjut%20akan%20dikabarkan%20melalui%20akun%20WhatsApp%20ini%20(admin).%0ADiharapkan%20calon%20peserta%20didik%20dapat%20selalu%20mengaktifkan%20nomor%20WhatsApp%20ini.%0A%0AHubungi%20admin%20kami%20untuk%20informasi%20lebih%20lanjut.`}
                        target="_blank"
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
                  </span>
                </ListItem>


                <ListItem className="flex justify-between">
                  <span className="font-medium">Alamat:</span>{" "}
                  {data?.parentAddress}
                </ListItem>
              </List>
            </div>

            <div className="mb-8">
              <Typography variant="h5" className="font-semibold text-green-600">
                C. Persyaratan yang diserahkan
              </Typography>
              <Suspense fallback={<h1>Loading...</h1>}>
                <Gallery data={data} />
             </Suspense>
            </div>

            {/* <ButtonGroup fullWidth className="mt-4">
              <Button
                onClick={() => updateStatus(true)}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold"
              >
                Data Lengkap
              </Button>
              <Button
                onClick={() => updateStatus(false)}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold"
              >
                Data Tidak Lengkap
              </Button>
            </ButtonGroup> */}
          </CardBody>
        </Card>
      </div>
    );
};
export default function Page() {
  return <Details />;
}

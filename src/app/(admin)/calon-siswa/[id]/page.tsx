"use client";
import {
  Card,
  CardBody,
  Typography,
  ButtonGroup,
  List,
  ListItem,
  Button,
} from "@/MT";
import { FormData } from "@/types";
import { useGetDoc } from "@/hooks";
import { useParams } from "next/navigation";
import Image from "next/image";
import { database } from "@/libs/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "sonner";

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
                  {data?.phone}
                </ListItem>
                <ListItem className="flex justify-between">
                  <span className="font-medium">Masuk Kelas:</span>{" "}
                  {data?.grade}
                </ListItem>
                <ListItem className="flex justify-between">
                  <span className="font-medium">Bagian (Kekhususan):</span>{" "}
                  {data?.specialization}
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
                  {data?.fatherParentPhone}
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
                  {data?.motherParentPhone}
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
              <List className="grid grid-cols-2 gap-4">
                {data?.docsUrl?.map((url, index) => (
                  <ListItem key={index} className="flex justify-center">
                    <Image
                      src={url}
                      alt={`foto-${index}`}
                      width={100}
                      height={100}
                      className="rounded-lg shadow-md"
                    />
                  </ListItem>
                ))}
              </List>
            </div>

            <ButtonGroup fullWidth className="mt-4">
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
            </ButtonGroup>
          </CardBody>
        </Card>
      </div>
    );
};
export default function Page() {
  return <Details />;
}

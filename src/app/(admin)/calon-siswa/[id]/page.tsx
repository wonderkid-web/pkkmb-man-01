import React from "react";
import { Card, CardBody, Typography, ButtonGroup, List, ListItem, Button } from "@/MT";
import { FormData } from "@/types";

interface DetailsProps {
  data: FormData;
}

const Details: React.FC<DetailsProps> = ({ data }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full">
        <CardBody>
          <Typography variant="h4" className="mb-6 text-center">
            Detail Pendaftaran Siswa Baru
          </Typography>

          <Typography variant="h5" className="font-semibold">
            A. Biodata Anak
          </Typography>
          <List className="mb-6">
            <ListItem>Nama Calon Siswa: {data.name}</ListItem>
            <ListItem>Tempat/Tanggal Lahir: {data.birthDate}</ListItem>
            <ListItem>Agama: {data.religion}</ListItem>
            <ListItem>Alamat: {data.address}</ListItem>
            <ListItem>Nomor Telp/HP: {data.phone}</ListItem>
            <ListItem>Masuk Kelas: {data.grade}</ListItem>
            <ListItem>Bagian (Kekhususan): {data.specialization}</ListItem>
          </List>

          <Typography variant="h5" className="font-semibold">
            B. Nama Orang Tua/Wali Murid
          </Typography>
          <List className="mb-6">
            <ListItem>Nama Ayah: {data.fatherName}</ListItem>
            <ListItem>Nama Ibu: {data.motherName}</ListItem>
            <ListItem>
              Tempat/Tanggal Lahir Ayah: {data.fatherBirthDate}
            </ListItem>
            <ListItem>Pendidikan Tertinggi: {data.education}</ListItem>
            <ListItem>Pekerjaan: {data.occupation}</ListItem>
            <ListItem>Alamat: {data.parentAddress}</ListItem>
            <ListItem>Nomor Telp/HP: {data.parentPhone}</ListItem>
          </List>

          <Typography variant="h5" className="font-semibold">
            C. Persyaratan yang diserahkan
          </Typography>
          <List className="mb-6">
            <ListItem>
              Foto Copy Ijazah dan Nilai: {data.certificateCopy}
            </ListItem>
            <ListItem>
              Foto Copy Akta Kelahiran: {data.birthCertificateCopy}
            </ListItem>
            <ListItem>Foto Copy Kartu Keluarga: {data.familyCardCopy}</ListItem>
            <ListItem>Pas Foto ukuran 3x4 cm: {data.photo}</ListItem>
            <ListItem>Lain-lain: {data.others}</ListItem>
          </List>

          <ButtonGroup fullWidth={true}>
            <Button className="!bg-green-500">Data Lengkap</Button>
            <Button className="!bg-red-500" >Data Tidak Lengkap</Button>
          </ButtonGroup>
          
        </CardBody>
      </Card>
    </div>
  );
};

// Contoh penggunaan komponen Details dengan data dummy
const data: FormData = {
  name: "John Doe",
  birthDate: "1 Januari 2000",
  religion: "Islam",
  address: "Jl. Merdeka No. 1",
  phone: "08123456789",
  grade: "1",
  specialization: "IPA",
  fatherName: "Doe Senior",
  motherName: "Jane Doe",
  fatherBirthDate: "1 Januari 1970",
  education: "S2",
  occupation: "Pegawai Negeri",
  parentAddress: "Jl. Merdeka No. 1",
  parentPhone: "08123456789",
  certificateCopy: "Ada",
  birthCertificateCopy: "Ada",
  familyCardCopy: "Ada",
  photo: "3 buah",
  others: "Tidak ada",
};

export default function Page() {
  return <Details data={data} />;
}

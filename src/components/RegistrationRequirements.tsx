import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Stepper,
  Step,
  Button,
} from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { database } from "@/libs/firebase";
import { DocumentData, query, collection, where, getDocs } from "firebase/firestore";
import { getSession } from "next-auth/react";

export default function RegistrationRequirements({
  setAccept,
}: {
  setAccept: Dispatch<SetStateAction<boolean>>;
}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [registration, setRegistration] = useState<DocumentData[]|null>(null)

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);


  useEffect(()=>{
    (async()=>{
      const session = await getSession()
      // @ts-ignore
      const nik = session?.user["0"].nik
      const q = query(collection(database, 'accounts'), where("nik", "==", nik))
      const raw = await getDocs(q)
      const data = raw.docs.map(d=>d.data())
      setRegistration(data[0].registration)
    })()
  },[])

  return (
    <div className=" mx-auto px-4 py-8 flex flex-col">
      <Typography variant="h1" color="green" className="mb-6 text-center">
        Persyaratan Berkas dan Prosedur Pendaftaran MAN 1 Medan 2024
      </Typography>

      <Card className="w-full mb-8 h-56">
        <CardBody>
          <Typography variant="h4" color="green" className="mb-4">
            Prosedur Pendaftaran
          </Typography>
          <Stepper
            color="green"
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
          >
            <Step onClick={() => setActiveStep(0)}>
              <Typography className="mt-10 text-black" variant="h6">
                Registrasi Akun
              </Typography>
              <Typography variant="small" className="font-normal text-black">
                19 - 25 April 2024
              </Typography>
            </Step>
            <Step onClick={() => setActiveStep(1)}>
              <Typography className="mt-10" variant="h6">
                Pengisian Formulir
              </Typography>
              <Typography variant="small" className="font-normal">
                Nilai dan Dokumen
              </Typography>
            </Step>
            <Step onClick={() => setActiveStep(2)}>
              <Typography className="mt-10" variant="h6">
                Seleksi Berkas
              </Typography>
              <Typography variant="small" className="font-normal">
                Pengumuman 27 April 2024
              </Typography>
            </Step>
            <Step onClick={() => setActiveStep(3)}>
              <Typography className="mt-10" variant="h6">
                Ujian Seleksi
              </Typography>
              <Typography variant="small" className="font-normal">
                6 - 8 Mei 2024
              </Typography>
            </Step>
            <Step onClick={() => setActiveStep(4)}>
              <Typography className="mt-10 -ml-16 text-right" variant="h6">
                Pengumuman Kelulusan
              </Typography>
              <Typography variant="small" className="font-normal text-right">
                11 Mei 2024
              </Typography>
            </Step>
          </Stepper>
        </CardBody>
      </Card>

      <Card className="w-full mb-8">
        <CardBody>
          <Typography variant="h4" color="green" className="mb-4">
            Persyaratan Berkas
          </Typography>
          <List>
            <ListItem>
              <ListItemPrefix>
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </ListItemPrefix>
              Unggah pasphoto terbaru (latar belakang merah, 4x6, maks. 1 MB,
              format JPG/JPEG)
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </ListItemPrefix>
              Unggah scan/foto akta lahir (maks. 1 MB, format JPG/JPEG/PDF)
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </ListItemPrefix>
              Unggah scan/foto Kartu Keluarga (maks. 1 MB, format JPG/JPEG/PDF)
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </ListItemPrefix>
              Unggah scan/foto raport semester 1-5 (maks. 1 MB, format PDF)
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </ListItemPrefix>
              Unggah scan/foto SKL atau Surat Keterangan siswa aktif kelas akhir
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </ListItemPrefix>
              Unggah scan/foto SKHU dan Ijazah (untuk lulusan sebelum 2024)
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </ListItemPrefix>
              Unggah bukti Nomor Induk Siswa Nasional (NISN)
            </ListItem>
          </List>
        </CardBody>
      </Card>

      <Card className="w-full mb-8">
        <CardBody>
          <Typography variant="h4" color="green" className="mb-4">
            Prestasi (Opsional)
          </Typography>
          <Typography variant="lead" className="mb-2">
            Unggah maksimal 3 file scan/foto sertifikat prestasi {"(maks. 1 MB per file, format JPG/JPEG)"}
          </Typography>
          <List>
            <ListItem>
              <ListItemPrefix>
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </ListItemPrefix>
              Prestasi akademik {"(KSM, MYRES, KSN, OSN, dll.)"}
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </ListItemPrefix>
              Prestasi non-akademik {"(Seni, olahraga, ekstrakurikuler)"}
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </ListItemPrefix>
              Prestasi bidang {"Al-Qur'an"}
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </ListItemPrefix>
              Prestasi hafalan {"Al-Qur'an"} {"(min. 5 Juz)"}
            </ListItem>
          </List>
        </CardBody>
      </Card>

      <Card className="w-full mb-8">
        <CardBody>
          <Typography variant="h4" color="green" className="mb-4">
            Informasi Tambahan
          </Typography>
          <List>
            <ListItem>
              <ListItemPrefix>
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </ListItemPrefix>
              Jalur afirmasi: Lampirkan nomor KIP/KKS/PKH atau SKTM
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </ListItemPrefix>
              Cetak kartu peserta Ujian Seleksi (1 - 5 Mei 2024)
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </ListItemPrefix>
              Ikuti Tes Akademik (6 Mei 2024) dan Tes Praktik Keagamaan (7 - 8
              Mei 2024)
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </ListItemPrefix>
              Pengumuman kelulusan (11 Mei 2024)
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </ListItemPrefix>
              Daftar ulang dan isi surat pernyataan orang tua (13 - 18 Mei 2024)
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </ListItemPrefix>
              Tes urin bebas narkoba oleh BNN saat daftar ulang
            </ListItem>
          </List>
        </CardBody>
      </Card>

     { registration ? <Card className="w-full">
        <CardBody>
        <Typography variant="h4" color="green" className="mb-4">
            Kamu Sudah Melakukan Pendaftaran Sebelumnya
          </Typography>
          <Typography variant="h5" color="teal" className="mb-4">
            Hm.. Sepertinya kamu sudah melakukan pendaftaran sebelumnya nih.. 🤷🏻
          </Typography>
          <Typography variant="h5" color="teal" className="mb-4">
            Jika merasa belum melakukan pengisian form hubungi admin kami dengan cara mengklik tombol dibawah ini.
          </Typography>


            <Button color="green">Contact Admin {" "} 📞</Button>
        </CardBody>
      </Card>
      :
      <Card className="w-full">
        <CardBody>
        <Typography variant="h4" color="green" className="mb-4">
            Lakukan Pengisian Form
          </Typography>
          <Typography variant="h5" color="teal" className="mb-4">
            Jika Sudah Memahami dan Menyiapkan Berkas yang dibutuhkan pada
            keterangan diatas, klik tombol dibawah ini untuk mengisi form
            Pendaftaran
          </Typography>
       
            <Button color="green" onClick={()=>setAccept(true)}>Isi Form Pendaftaran Online</Button>
        </CardBody>
      </Card>}
    </div>
  );
}

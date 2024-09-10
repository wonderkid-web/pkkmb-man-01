// import { useState } from "react";
// import { Dropzone, ExtFile, FileMosaic } from "@files-ui/react";
// import { Typography } from "@material-tailwind/react";
// import { File } from "@/types";
// import { toast } from "sonner";

// export default function FileUpload({
//   setDocsUrl,
// }: {
//   setDocsUrl: React.Dispatch<
//     React.SetStateAction<[string, string, string, string] | []>
//   >;
// }) {
//   const [files, setFiles] = useState<ExtFile[] | undefined>([]);
//   const [url, setUrl] = useState<File[] | null>([]);

//   const updateFiles = async (incommingFiles: ExtFile[]) => {
//     // @ts-ignore
//     const docsUrl: [string, string, string, string] = await Promise.all(
//       incommingFiles.map(async (file) => {
//         const reader = new FileReader();
//         return new Promise((resolve, reject) => {
//           reader.onloadend = () => {
//             if (reader.readyState === FileReader.DONE) {
//               resolve(reader.result as string);
//             } else {
//               reject(new Error("Error reading file"));
//             }
//           };
//           reader.readAsDataURL(file.file!);
//         });
//       })
//     );

//     setDocsUrl(docsUrl);
    
//     setFiles(incommingFiles);


//   };

//   const removeFile = (id: ExtFile["id"]) => {
//     setFiles(files!.filter((x) => x.id !== id));
//   };

//   const handleStart = (filesToUpload: ExtFile[]) => {
//     filesToUpload.forEach((element) => {
//       toast.info(`Memproses Upload file: ${element.name}`);
//     });
//   };
//   const handleFinish = (uploadedFiles: ExtFile[]) => {
//     uploadedFiles.forEach((element) => {
//       toast.success(`Berhasil mengupload file: ${element.name}`);
//     });
//   };

//   return (
//     <>
//       <Typography variant="paragraph">
//         Silahkan upload file <b>IJAZAH, AKTE KELAHIRAN, KARTU KELUARGA & PAS FOTO
//         3X4, PASTIKAN jenis file adalah JPG, JPEG atau PNG</b>
//       </Typography>
//       <Dropzone
//         maxFiles={4}
//         accept=".jpg, .jpeg, .png"
//         maxFileSize={2 * (1024 / 2) * (1024 / 2)}
//         onChange={updateFiles}
//         value={files}
//         onUploadStart={handleStart}
//         onUploadFinish={handleFinish}
//         //accept="image/*"
//       >
//         {files?.map((file) => (
//           <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
//         ))}
//       </Dropzone>
//     </>
//   );
// }

"use client"

import { useState } from "react";
import { Dropzone, ExtFile, FileMosaic } from "@files-ui/react";
import { Typography } from "@material-tailwind/react";
import { File } from "@/types";
import { toast } from "sonner";

export default function FileUpload({
  setDocsUrl,
}: {
  setDocsUrl: React.Dispatch<
    React.SetStateAction<string[]>
  >;
}) {
  const [files, setFiles] = useState<ExtFile[]>([]);

  const updateFiles = async (incomingFiles: ExtFile[]) => {
    const docsUrl = await Promise.all(
      incomingFiles.map(async (file) => {
        const reader = new FileReader();
        return new Promise<string>((resolve, reject) => {
          reader.onloadend = () => {
            if (reader.readyState === FileReader.DONE) {
              resolve(reader.result as string);
            } else {
              reject(new Error("Error reading file"));
            }
          };
          reader.readAsDataURL(file.file!);
        });
      })
    );

    setDocsUrl(docsUrl);
    setFiles(incomingFiles);
  };

  const removeFile = (id: ExtFile["id"]) => {
    setFiles(files.filter((x) => x.id !== id));
    setDocsUrl(prev => prev.filter((_, index) => files[index].id !== id));
  };

  const handleStart = (filesToUpload: ExtFile[]) => {
    filesToUpload.forEach((element) => {
      toast.info(`Memproses Upload file: ${element.name}`);
    });
  };

  const handleFinish = (uploadedFiles: ExtFile[]) => {
    uploadedFiles.forEach((element) => {
      toast.success(`Berhasil mengupload file: ${element.name}`);
    });
  };

  return (
    <>
      <Typography variant="h6" className="mb-4">
        Silahkan upload file-file berikut:
      </Typography>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>Pasphoto terbaru (latar belakang merah, 4x6, maks. 1 MB, format JPG/JPEG)</li>
        <li>Scan/foto akta lahir (maks. 1 MB, format JPG/JPEG/PDF)</li>
        <li>Scan/foto Kartu Keluarga (maks. 1 MB, format JPG/JPEG/PDF)</li>
        <li>Scan/foto raport semester 1-5 (maks. 1 MB, format PDF)</li>
        <li>Scan/foto SKL atau Surat Keterangan siswa aktif kelas akhir</li>
        <li>Scan/foto SKHU dan Ijazah (untuk lulusan sebelum 2024)</li>
        <li>Bukti Nomor Induk Siswa Nasional (NISN)</li>
      </ul>
      <Typography variant="h6" className="mb-2">
        Prestasi (Opsional):
      </Typography>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>Maksimal 3 file scan/foto sertifikat prestasi (maks. 1 MB per file, format JPG/JPEG)</li>
        <li>Prestasi akademik (KSM, MYRES, KSN, OSN, dll.)</li>
        <li>Prestasi non-akademik (Seni, olahraga, ekstrakurikuler)</li>
        <li>Prestasi bidang {"Al-Qur'an"}</li>
        <li>Prestasi hafalan {"Al-Qur'an"} (min. 5 Juz)</li>
      </ul>
      <Typography variant="paragraph" className="mb-4">
        <b>PASTIKAN semua file yang diupload sesuai dengan ketentuan di atas.</b>
      </Typography>
      <Dropzone
        onChange={updateFiles}
        value={files}
        accept=".jpg,.jpeg,.png,.pdf"
        maxFileSize={2 * 1024 * 1024}
        onUploadStart={handleStart}
        onUploadFinish={handleFinish}
      >
        {files.map((file) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info preview />
        ))}
      </Dropzone>
    </>
  );
}
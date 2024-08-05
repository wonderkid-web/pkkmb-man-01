import { useState } from "react";
import { Dropzone, ExtFile, FileMosaic } from "@files-ui/react";
import { Typography } from "@material-tailwind/react";
import { File } from "@/types";
import { toast } from "sonner";

export default function FileUpload({
  setDocsUrl,
}: {
  setDocsUrl: React.Dispatch<
    React.SetStateAction<[string, string, string, string] | []>
  >;
}) {
  const [files, setFiles] = useState<ExtFile[] | undefined>([]);
  const [url, setUrl] = useState<File[] | null>([]);

  const updateFiles = async (incommingFiles: ExtFile[]) => {
    // @ts-ignore
    const docsUrl: [string, string, string, string] = await Promise.all(
      incommingFiles.map(async (file) => {
        const reader = new FileReader();
        return new Promise((resolve, reject) => {
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
    
    setFiles(incommingFiles);


  };

  const removeFile = (id: ExtFile["id"]) => {
    setFiles(files!.filter((x) => x.id !== id));
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
      <Typography variant="paragraph">
        Silahkan upload file IJAZAH, AKTE KELAHIRAN, KARTU KELUARGA & PAS FORO
        3X4, PASTIKAN jenis file adalah PDF
      </Typography>
      <Dropzone
        maxFiles={4}
        accept=".jpg, .jpeg, .png"
        maxFileSize={2 * (1024 / 2) * (1024 / 2)}
        onChange={updateFiles}
        value={files}
        onUploadStart={handleStart}
        onUploadFinish={handleFinish}
        //accept="image/*"
      >
        {files?.map((file) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
      </Dropzone>
    </>
  );
}

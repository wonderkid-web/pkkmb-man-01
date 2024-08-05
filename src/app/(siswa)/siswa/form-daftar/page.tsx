"use client";
import React, { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

import {
  Card,
  CardBody,
  Input,
  Typography,
  Button,
  Stepper,
  Step,
} from "@material-tailwind/react";
import { FormData } from "@/types";
import { IdentificationIcon, UsersIcon } from "@heroicons/react/24/solid";
import FileUpload from "@/components/FileUpload";
import { addDoc, collection } from "firebase/firestore";
import { database } from "@/libs/firebase";
import { toast } from "sonner";
import { useCreateForm } from "@/hooks";

const Register = () => {
  const [activeStep, setActiveStep] = React.useState<0 | 1 | 2>(0);
  const [docsUrl, setDocsUrl] = useState<[string, string, string, string] | []>(
    []
  );
  const { createForm } = useCreateForm();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      if (data) {
        // @ts-ignore
        createForm({ ...data, docsUrl } as FormData);
      }
    } catch (error) {
      toast.error("Gagal Upload Form");
    }

    reset()
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <div className="w-full px-24 py-4">
        <div className="relative flex items-center justify-between w-full">
          <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-300"></div>
          <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-900 transition-all duration-500"></div>
          <div className="relative z-10 grid w-10 h-10 font-bold text-white transition-all duration-300 bg-gray-900 rounded-full place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              ></path>
            </svg>
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700">
                Step 1
              </h6>
              <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                Details about yout account.
              </p>
            </div>
          </div>
          <div className="relative z-10 grid w-10 h-10 font-bold text-white transition-all duration-300 bg-gray-900 rounded-full place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
              ></path>
            </svg>
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Step 2
              </h6>
              <p className="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                Details about yout account.
              </p>
            </div>
          </div>
          <div className="relative z-10 grid w-10 h-10 font-bold text-gray-900 transition-all duration-300 bg-gray-300 rounded-full place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
              ></path>
            </svg>
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700">
                Step 3
              </h6>
              <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                Details about yout account.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-32">
          <button
            className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Prev
          </button>
          <button
            className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Next
          </button>
        </div>
      </div> */}
      <StepperWithContent
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      <div className="flex justify-center items-center ">
        <Card className="w-full max-w-3xl">
          <CardBody>
            <Typography variant="h4" className="mb-6 text-center">
              FORMULIR PENDAFTARAN SISWA BARU
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {activeStep === 0 && (
                <fieldset className="space-y-4">
                  <Typography variant="h5" className="font-semibold">
                    A. Biodata Anak
                  </Typography>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="text"
                      label="Nama Calon Siswa"
                      {...register("name", {
                        required: "Nama lengkap wajib diisi",
                      })}
                      error={!!errors.name}
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="text"
                      label="NIK Siswa"
                      {...register("nik", {
                        required: "NIK wajib diisi!",
                      })}
                      error={!!errors.name}
                    />
                    {errors.nik && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.nik.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="text"
                      label="Tempat/Tanggal Lahir"
                      {...register("birthDate", {
                        required: "Tempat/Tanggal lahir wajib diisi",
                      })}
                      error={!!errors.birthDate}
                    />
                    {errors.birthDate && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.birthDate.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="text"
                      label="Agama"
                      {...register("religion", {
                        required: "Agama wajib diisi",
                      })}
                      error={!!errors.religion}
                    />
                    {errors.religion && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.religion.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="text"
                      label="Alamat"
                      {...register("address", {
                        required: "Alamat wajib diisi",
                      })}
                      error={!!errors.address}
                    />
                    {errors.address && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.address.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="tel"
                      label="Nomor Telp/HP"
                      {...register("phone", {
                        required: "Nomor telepon wajib diisi",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Nomor telepon harus berupa angka",
                        },
                      })}
                      error={!!errors.phone}
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="text"
                      label="Masuk Kelas"
                      {...register("grade", {
                        required: "Masuk kelas wajib diisi",
                      })}
                      error={!!errors.grade}
                    />
                    {errors.grade && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.grade.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="text"
                      label="Bagian (Kekhususan)"
                      {...register("specialization", {
                        required: "Bagian (Kekhususan) wajib diisi",
                      })}
                      error={!!errors.specialization}
                    />
                    {errors.specialization && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.specialization.message}
                      </p>
                    )}
                  </div>
                </fieldset>
              )}

              {activeStep === 1 && (
                <fieldset className="space-y-4">
                  <Typography variant="h5" className="font-semibold">
                    B. Nama Orang Tua/Wali Murid
                  </Typography>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="text"
                      label="Nama Ayah"
                      {...register("fatherName", {
                        required: "Nama Ayah wajib diisi",
                      })}
                      error={!!errors.fatherName}
                    />
                    {errors.fatherName && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.fatherName.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="text"
                      label="Nama Ibu"
                      {...register("motherName", {
                        required: "Nama Ibu wajib diisi",
                      })}
                      error={!!errors.motherName}
                    />
                    {errors.motherName && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.motherName.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="text"
                      label="Tempat/Tanggal Lahir Ayah"
                      {...register("fatherBirthDate", {
                        required: "Tempat/Tanggal lahir Ayah wajib diisi",
                      })}
                      error={!!errors.fatherBirthDate}
                    />
                    {errors.fatherBirthDate && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.fatherBirthDate.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="text"
                      label="Pendidikan Tertinggi"
                      {...register("education", {
                        required: "Pendidikan tertinggi wajib diisi",
                      })}
                      error={!!errors.education}
                    />
                    {errors.education && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.education.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="text"
                      label="Pekerjaan"
                      {...register("occupation", {
                        required: "Pekerjaan wajib diisi",
                      })}
                      error={!!errors.occupation}
                    />
                    {errors.occupation && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.occupation.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="text"
                      label="Alamat"
                      {...register("parentAddress", {
                        required: "Alamat wajib diisi",
                      })}
                      error={!!errors.parentAddress}
                    />
                    {errors.parentAddress && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.parentAddress.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="tel"
                      label="Nomor Telp/HP"
                      {...register("parentPhone", {
                        required: "Nomor telepon wajib diisi",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Nomor telepon harus berupa angka",
                        },
                      })}
                      error={!!errors.parentPhone}
                    />
                    {errors.parentPhone && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.parentPhone.message}
                      </p>
                    )}
                  </div>
                </fieldset>
              )}

              {activeStep === 2 && (
                <fieldset className="space-y-4">
                  <Typography variant="h5" className="font-semibold">
                    C. Persyaratan yang diserahkan
                  </Typography>

                  <FileUpload setDocsUrl={setDocsUrl} />

                  {/* <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="text"
                      label="Foto Copy Ijazah dan Nilai"
                      {...register("certificateCopy", {
                        required: "Foto Copy Ijazah dan Nilai wajib diisi",
                      })}
                      error={!!errors.certificateCopy}
                    />
                    {errors.certificateCopy && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.certificateCopy.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="file"
                      id="photo"
                      onChange={handleFileChange}
                      // onChange={handleFileChange}
                      className="p-3 border border-gray-300 rounded-md"
                      label="Foto Copy Ijazah dan Nilai"
                      {...register("certificateCopy", {
                        required: "Foto Copy Ijazah dan Nilai wajib diisi",
                      })}
                      // @ts-ignore
                      error={!!errors.certificateCopy}
                    />
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="text"
                      label="Foto Copy Akta Kelahiran"
                      {...register("birthCertificateCopy", {
                        required: "Foto Copy Akta Kelahiran wajib diisi",
                      })}
                      error={!!errors.birthCertificateCopy}
                    />
                    {errors.birthCertificateCopy && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.birthCertificateCopy.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="text"
                      label="Foto Copy Kartu Keluarga"
                      {...register("familyCardCopy", {
                        required: "Foto Copy Kartu Keluarga wajib diisi",
                      })}
                      error={!!errors.familyCardCopy}
                    />
                    {errors.familyCardCopy && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.familyCardCopy.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="text"
                      label="Pas Foto ukuran 3x4 cm (3 lbr)"
                      {...register("photo", {
                        required: "Pas Foto ukuran 3x4 cm (3 lbr) wajib diisi",
                      })}
                      error={!!errors.photo}
                    />
                    {errors.photo && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.photo.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="text"
                      label="Lain-lain"
                      {...register("others", {
                        required: "Lain-lain wajib diisi",
                      })}
                      error={!!errors.others}
                    />
                    {errors.others && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.others.message}
                      </p>
                    )}
                  </div> */}
                </fieldset>
              )}

              <Button
                disabled={activeStep !== 2}
                color="teal"
                type="submit"
                fullWidth
                className="mt-4"
              >
                Submit
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Register;

function StepperWithContent({
  activeStep,
  setActiveStep,
}: {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<0 | 1 | 2>>;
}) {
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  // @ts-ignore
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  // @ts-ignore
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full px-24 py-4">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>
          <UserIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 0 ? "blue-gray" : "gray"}
            >
              Langkah 1
            </Typography>
            <Typography
              color={activeStep === 0 ? "blue-gray" : "gray"}
              className="font-normal"
            >
              Formulir Data diri Siswa/i.
            </Typography>
          </div>
        </Step>

        <Step onClick={() => setActiveStep(1)}>
          <UsersIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 1 ? "blue-gray" : "gray"}
            >
              Langkah 2
            </Typography>
            <Typography
              color={activeStep === 1 ? "blue-gray" : "gray"}
              className="font-normal"
            >
              Formulir Data diri Orang tua Siswa/i.
            </Typography>
          </div>
        </Step>

        <Step onClick={() => setActiveStep(2)}>
          <IdentificationIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 2 ? "blue-gray" : "gray"}
            >
              Step 3
            </Typography>
            <Typography
              color={activeStep === 2 ? "blue-gray" : "gray"}
              className="font-normal"
            >
              Dokumen Pribadi calon Siswa/i.
            </Typography>
          </div>
        </Step>
      </Stepper>

      <div className="mt-32 flex justify-between">
        <Button color="teal" onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button color="teal" onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>

      <div className="mt-32 flex justify-between">{/* <UploadPage /> */}</div>
    </div>
  );
}

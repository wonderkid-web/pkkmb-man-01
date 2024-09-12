"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { UserIcon } from "@heroicons/react/24/outline";

import {
  Card,
  CardBody,
  Input,
  Typography,
  Button,
  Stepper,
  Step,
  Select,
  Option,
} from "@/MT";
import { FormData } from "@/types";
import { IdentificationIcon, UsersIcon } from "@heroicons/react/24/solid";
import FileUpload from "@/components/FileUpload";
import { toast } from "sonner";
import { useCreateForm } from "@/hooks";
import { useRouter } from "next/navigation";

const RegistertrationForm = () => {
  const [activeStep, setActiveStep] = React.useState<0 | 1 | 2>(0);
  const [gender, setGender] = useState<FormData["gender"]>("laki-laki");
  const [fatherOccupation, setFatherOccupation] = useState<null | string>(null);
  const [motherOccupation, setMotherOccupation] = useState<null | string>(null);
  const [fatherEducation, setFatherEducation] = useState<null | string>(null);
  const [motherEducation, setMotherEducation] = useState<null | string>(null);
  const [docsUrl, setDocsUrl] = useState<string[] | []>([]);
  const { createForm } = useCreateForm();

  const router = useRouter()

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
        createForm({ ...data, docsUrl, motherOccupation: motherOccupation, fatherOccupation: fatherOccupation, gender: gender } as FormData);
      }
    } catch (error) {
      toast.error("Gagal Upload Form");
    }

    reset();
    router.push('/siswa')
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <StepperWithContent
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      <div className="flex justify-center items-center ">
        <Card className="w-full max-w-3xl ">
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
                      label="Nama Lengkap Calon Siswa (sesuai ijazah SMP)"
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
                      label="Nomor Induk Kependudukan (NIK) Siswa"
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
                      type="input"
                      label="Tempat Lahir"
                      {...register("placeBirthDate", {
                        required: "Tempat lahir wajib diisi",
                      })}
                      error={!!errors.placeBirthDate}
                    />
                    {errors.placeBirthDate && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.placeBirthDate.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="date"
                      label="Tanggal Lahir"
                      {...register("birthDate", {
                        required: "Tanggal lahir wajib diisi",
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
                      label="Nomor Telp/HP (WA)"
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
                    <Select
                      onChange={(val) =>
                        setGender(val as "laki-laki" | "perempuan")
                      }
                      defaultValue={gender}
                      label="Jenis Kelamin"
                      error={!!errors.specialization}
                    >
                      <Option value="laki-laki">Laki-laki</Option>
                      <Option value="perempuan">Perempuan</Option>
                    </Select>
                    {/* <Input
                      crossOrigin=""
                      type="text"
                      label="Bagian (Kekhususan)"
                    /> */}
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
                    {/* Select untuk Father Education */}
                    <Select
                      onChange={(val) => setFatherEducation(val!)}
                      defaultValue={fatherEducation!}
                      label="Pendidikan Terakhir Ayah"
                      error={!!errors.fatherEducation}
                    >
                      <Option value="-">Tidak Bersekolah</Option>
                      <Option value="sd">SD</Option>
                      <Option value="smp">SMP</Option>
                      <Option value="sma">SMA</Option>
                      <Option value="diploma">Diploma</Option>
                      <Option value="sarjana">Sarjana</Option>
                      <Option value="magister">Magister</Option>
                      <Option value="doktor">Doktor</Option>
                    </Select>
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="input"
                      label="Tempat Lahir (ayah)"
                      {...register("fatherPlaceBirth", {
                        required: "Tempat lahir wajib diisi",
                      })}
                      error={!!errors.fatherPlaceBirth}
                    />
                    {errors.fatherPlaceBirth && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.fatherPlaceBirth.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="date"
                      label="Tanggal Lahir (ayah)"
                      {...register("fatherBirthDate", {
                        required: "Tanggal lahir wajib diisi",
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
                    {/* Select untuk Father Occupation */}
                    <Select
                      onChange={(val) => setFatherOccupation(val!)}
                      defaultValue={fatherOccupation!}
                      label="Pekerjaan Ayah"
                      error={!!errors.fatherOccupation}
                    >
                      <Option value="petani">Petani</Option>
                      <Option value="pegawai negeri">Pegawai Negeri</Option>
                      <Option value="wiraswasta">Wiraswasta</Option>
                      <Option value="buruh">Buruh</Option>
                      <Option value="guru">Guru</Option>
                      <Option value="dokter">Dokter</Option>
                    </Select>
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="tel"
                      label="Nomor Telp/HP (Ayah)"
                      {...register("fatherParentPhone", {
                        required: "Nomor telepon wajib diisi",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Nomor telepon harus berupa angka",
                        },
                      })}
                      error={!!errors.fatherParentPhone}
                    />
                    {errors.fatherParentPhone && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.fatherParentPhone.message}
                      </p>
                    )}
                  </div>

                  <hr />

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
                    {/* Select untuk Mother Education */}
                    <Select
                      onChange={(val) => setMotherEducation(val!)}
                      defaultValue={motherEducation!}
                      label="Pendidikan Terakhir Ibu"
                      error={!!errors.motherEducation}
                    >
                      <Option value="-">Tidak Bersekolah</Option>

                      <Option value="sd">SD</Option>
                      <Option value="smp">SMP</Option>
                      <Option value="sma">SMA</Option>
                      <Option value="diploma">Diploma</Option>
                      <Option value="sarjana">Sarjana</Option>
                      <Option value="magister">Magister</Option>
                      <Option value="doktor">Doktor</Option>
                    </Select>
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="input"
                      label="Tempat Lahir (Ibu)"
                      {...register("motherPlaceBirth", {
                        required: "Tempat lahir wajib diisi",
                      })}
                      error={!!errors.motherPlaceBirth}
                    />
                    {errors.motherPlaceBirth && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.motherPlaceBirth.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="date"
                      label="Tanggal Lahir (Ibu)"
                      {...register("motherBirthDate", {
                        required: "Tanggal lahir wajib diisi",
                      })}
                      error={!!errors.motherBirthDate}
                    />
                    {errors.motherBirthDate && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.motherBirthDate.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    {/* Select untuk Mother Occupation */}
                    <Select
                      onChange={(val) => setMotherOccupation(val!)}
                      defaultValue={motherOccupation!}
                      label="Pekerjaan Ibu"
                      error={!!errors.motherOccupation}
                    >
                      <Option value="ibu rumah tangga">Ibu Rumah Tangga</Option>
                      <Option value="pegawai negeri">Pegawai Negeri</Option>
                      <Option value="wiraswasta">Wiraswasta</Option>
                      <Option value="buruh">Buruh</Option>
                      <Option value="guru">Guru</Option>
                      <Option value="dokter">Dokter</Option>
                    </Select>
                  </div>

                  <div className="form-group">
                    <Input
                      crossOrigin=""
                      type="tel"
                      label="Nomor Telp/HP (Ibu)"
                      {...register("motherParentPhone", {
                        required: "Nomor telepon wajib diisi",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Nomor telepon harus berupa angka",
                        },
                      })}
                      error={!!errors.motherParentPhone}
                    />
                    {errors.motherParentPhone && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.motherParentPhone.message}
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

export default RegistertrationForm;

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
    <div className="w-full px-24 py-4 h-[300px]">
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

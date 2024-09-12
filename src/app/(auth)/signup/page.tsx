"use client";

import { SignupFormData } from "@/types";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import logo from "/public/logo.png";
import { NAMA_SEKOLAH } from "@/static";
import { Card, CardBody, Typography, Input, Button } from "@/MT";
import { UserIcon, LockClosedIcon, IdentificationIcon, PhoneIcon } from "@heroicons/react/24/outline"; 
import { useCreateDoc } from "@/hooks";


function Page() {
  const router = useRouter()

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<SignupFormData>();

  const {createDoc} = useCreateDoc<SignupFormData>("accounts")

  const onSubmit: SubmitHandler<SignupFormData> = async (form) => {
    
    // @ts-ignore
    await createDoc(form)

    reset()
    router.push('/signin')
    
  };

  return (
    <>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-green-800 to-green-700 i justify-around items-center hidden">
          <div className="-mt8">
            <Image
              src={logo}
              alt="logo"
              width={150}
              height={150}
              className="rounded-md mb-2"
            />
            <h1 className="text-white font-bold text-4xl font-sans">
              {NAMA_SEKOLAH}
            </h1>
            <p className="text-white mt-1 text-lg">
              Ayo Daftarkan diri kamu sekarang!
            </p>
            <div className="w-fit bg-white text-green-800 mt-8 p-2 rounded-md font-bold mb-2">
              Sudah Ada akun?,{" "}
              <Link className="underline" href={"/signin"}>
                Masuk disini
              </Link>
            </div>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>

        <div className="flex w-2/5 mx-auto justify-center py-10 items-center bg-white">
          <Card className="w-full">
            <CardBody>
              <Typography variant="h4" className="mb-6 text-center">
                FORMULIR PENDAFTARAN AKUN SISWA
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="form-group relative">
                  <IdentificationIcon className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 " />
                  <Input
                    crossOrigin=""
                    type="text"
                    label="NIK"
                    {...register("nik", {
                      required: "NIK wajib diisi",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "NIK harus berupa angka",
                      },
                    })}
                    error={!!errors.nik}
                    className="pl-16" // Padding left untuk ikon
                  />
                  {errors.nik && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.nik.message}
                    </p>
                  )}
                </div>

                <div className="form-group relative">
                  <UserIcon className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    crossOrigin=""
                    type="text"
                    label="Nama"
                    {...register("name", {
                      required: "Nama wajib diisi",
                    })}
                    error={!!errors.name}
                    className="" // Padding left untuk ikon
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="form-group relative">
                  <LockClosedIcon className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    crossOrigin=""
                    type="password"
                    label="Password"
                    {...register("password", {
                      required: "Password wajib diisi",
                      minLength: {
                        value: 6,
                        message: "Password minimal 6 karakter",
                      },
                    })}
                    error={!!errors.password}
                    className="" // Padding left untuk ikon
                  />
                  {errors.password && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div className="form-group relative">
                  <PhoneIcon className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    crossOrigin=""
                    type="tel"
                    label="Nomor HP"
                    {...register("phone", {
                      required: "Nomor HP wajib diisi",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Nomor HP harus berupa angka",
                      },
                    })}
                    error={!!errors.phone}
                    className="" // Padding left untuk ikon
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <Button color="teal" type="submit" fullWidth className="mt-4">
                  Daftar
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Page;

"use client";

import {  User } from "@/types";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import logo from "/public/logo.png";
import { NAMA_SEKOLAH } from "@/static";

function Page() {
  const { handleSubmit, register } = useForm<User>();
  const router = useRouter();
 

  const onSubmit: SubmitHandler<User> = async (form) => {
    // if(user === "admin"){
    //   if(form.NIK === "admin" && form.password === "admin123"){
    //     toast.success("Berhasil Masuk")
    //     router.push("/")
    //   }else{
    //     toast.warning("NIK atau Password kamu salah!")
    //   }

    // }else{
      toast.promise(
        signIn("credentials", {
          ...form,
          redirect: false,
        }),
        {
          loading: "Proses Autentikasi...",
          success: (data) => {
            if (data?.ok) {
              if(form.NIK?.includes('admin')){
                router.push("/");
              }else{
                router.push("/siswa");
              }
            }
            return "Berhasil Login";
          },
          error: "Gagal Login, pastiin NIK & Password Kamu bener",
        }
      );
    // }
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
              Belum Ada akun?,{" "}
              <Link className="underline" href={"/signup"}>
                Daftar disini
              </Link>
            </div>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>

        <div className="flex w-[400px]  md:w-1/2 justify-center py-10 items-center bg-white">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-2/4" autoComplete="off">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hallo..</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Selamat Datang Kembali
            </p>
            {/* EMAIL */}
            <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none !bg-white"
                type="text"
                id=""
                {...register("NIK")}
                placeholder="NIK"
              />
            </div>
            {/* PASSWORD */}
            <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="password"
                id=""
                placeholder="Password"
                {...register("password")}
              />
            </div>

            {/* <Select
              value={user}
              onChange={(val) => setUser(val as "siswa" | "admin")}
            >
              <Option value="siswa">Siswa</Option>
              <Option value="admin">Admin</Option>
            </Select> */}

            <button
              type="submit"
              className="block w-full bg-green-600 hover:bg-green-700 mt-4 py-2 rounded-md text-white font-semibold mb-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Page;

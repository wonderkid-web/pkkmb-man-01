"use client";
import React, { useEffect, useState } from "react";
import {
  UsersIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { useGetDocs } from "@/hooks";
import { FormData, User } from "@/types";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { PieChart } from "@mui/x-charts/PieChart";
import { Typography } from "@/MT";

const OverviewCard = () => {
  const [stats, setStats] = useState([
    {
      name: "Total Akun Siswa",
      stat: 234,
      icon: UsersIcon,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      name: "Total Pendaftar",
      stat: 9332,
      icon: ClockIcon,
      color: "text-yellow-500",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Pendaftar Tersetuju",
      stat: 346,
      icon: CheckCircleIcon,
      color: "text-green-500",
      bgColor: "bg-green-100",
    },
    {
      name: "Pendaftar Tertunda",
      stat: 346,
      icon: XCircleIcon,
      color: "text-red-500",
      bgColor: "bg-red-100",
    },
    {
      name: "Jumlah Pendaftar Laki-Laki",
      stat: 0,
      icon: UserCircleIcon,
      color: "text-purple-500",
      bgColor: "bg-purple-100",
    },
    {
      name: "Jumlah Pendaftar Perempuan",
      stat: 0,
      icon: UserCircleIcon,
      color: "text-pink-500",
      bgColor: "bg-pink-100",
    },
  ]);

  const { data: akun } = useGetDocs<User>("accounts");
  const { data: form } = useGetDocs<FormData>("form_pendaftaran");
  const [parent] = useAutoAnimate();

  useEffect(() => {
    const newStat = [...stats];
    newStat[0].stat = akun.length;
    newStat[1].stat = form.length;
    newStat[2].stat = form.filter((f) => f.status).length;
    newStat[3].stat = form.filter((f) => !f.status).length;
    newStat[4].stat = form.filter((f) => f.gender === "laki-laki").length;
    newStat[5].stat = form.filter((f) => f.gender === "perempuan").length;

    setStats(newStat);
  }, [akun, form]);

  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-4 p-4" ref={parent}>
      {stats.map((item) => (
        <div
          key={item.name}
          className={`p-4 border rounded-md shadow-sm ${item.bgColor} min-h-[200px] relative`}
        >
          <div className="flex items-center justify-between">
            <item.icon className={`h-6 w-6 ${item.color}`} aria-hidden="true" />
            <p className={`text-sm font-medium ${item.color}`}>{item.name}</p>
          </div>
          <p className="mt-2 font-semibold bg-white rounded-md  text-center w-24 text-green-900 transition-opacity absolute top-20 left-10  text-[3.5rem]">
            {item.stat}
          </p>
        </div>
      ))}

      <div className="col-start-1 col-end-2 row-start-2 bg-gray-200 rounded-md">
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: stats[4].stat, label: "Laki-laki" },
                { id: 1, value: 6, label: "Perempuan" },
              ],
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
              innerRadius: 20,
              outerRadius: 50,
              paddingAngle: 5,
              cornerRadius: 15,
              startAngle: -60,
              endAngle: 210,
              cx: 100,
              cy: 100,
            },
          ]}
          width={350}
          height={200}
        />
        <Typography variant="small" className="text-center mb-8 bg-white" color="blue-gray">Chart Jumlah Gender yang mendaftar</Typography>
      </div>

      <div className="bg-gray-200 rounded-md">
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 100, label: "Kouta Tersisa", color: "gray" },
                { id: 1, value: 80, label: "Peserta Daftar", color: "orange" },
              ],
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
              paddingAngle: 5,
              cornerRadius: 15,
              outerRadius: 70,
              cx: 100,
              cy: 100,
            },
          ]}
          width={350}
          height={200}
        />
        <Typography variant="small" className="text-center mb-8 bg-white" color="blue-gray">Chart Total Kouta yang tersedia</Typography>
      </div>
    </div>
  );
};

export default OverviewCard;

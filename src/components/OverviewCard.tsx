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
  ]);

  const { data: akun } = useGetDocs<User>("accounts");
  const { data: form } = useGetDocs<FormData>("form_pendaftaran");
  const [parent] = useAutoAnimate()


  useEffect(() => {
    const newStat = [...stats]
    newStat[0].stat = akun.length
    newStat[1].stat = form.length
    newStat[2].stat = form.filter(f=> f.status).length
    newStat[3].stat = form.filter(f=> !f.status).length

    setStats(newStat)
    
  }, [akun, form]);

  return (
    <div className="grid grid-cols-4 gap-4 p-4" ref={parent}>
      {stats.map((item) => (
        <div
          key={item.name}
          className={`p-4 border rounded-md shadow-sm ${item.bgColor}`}
        >
          <div className="flex items-center justify-between">
            <item.icon className={`h-6 w-6 ${item.color}`} aria-hidden="true" />
            <p className={`text-sm font-medium ${item.color}`}>{item.name}</p>
          </div>
          <p className="mt-2 text-3xl font-semibold text-gray-900 transition-opacity">
            {item.stat}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OverviewCard;

"use client";
import { useEffect, useState } from "react";
import { useGetDocs } from "@/hooks";
import { DashboardStat, FormData, User } from "@/types";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Typography } from "@/MT";
import { DashboardStatInitiateData } from "@/static";

const OverviewCard = () => {
  const [stats, setStats] = useState<DashboardStat[] | null>(
    DashboardStatInitiateData
  );

  const { data: akun } = useGetDocs<User>("accounts");
  const { data: form } = useGetDocs<FormData>("form_pendaftaran");
  const [parent] = useAutoAnimate();

  useEffect(() => {
    const newStat: DashboardStat[] = [...stats!];
    newStat[0].stat = akun.length;

    setStats(newStat);
  }, [akun]);

  useEffect(() => {
    const newStat: DashboardStat[] = [...stats!];
    newStat[1].stat = form.length || 0;
    newStat[2].stat = form.filter((f) => f.status).length || 0;
    newStat[3].stat = form.filter((f) => !f.status).length || 0;
    newStat[4].stat = form.filter((f) => f.gender === "laki-laki").length || 0;
    newStat[5].stat = form.filter((f) => f.gender === "perempuan").length || 0;

    setStats(newStat);
  }, [form]);

  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-4 p-4" ref={parent}>
      {stats?.length ? (
        stats.map((item) => (
          <div
            key={item.name}
            className={`p-4 border rounded-md shadow-sm ${item.bgColor} min-h-[200px] relative`}
          >
            <div className="flex items-center justify-between">
              <item.icon
                className={`h-6 w-6 ${item.color}`}
                aria-hidden="true"
              />
              <p className={`text-sm font-medium ${item.color}`}>{item.name}</p>
            </div>
            {item.stat ? (
              <p className="mt-2 font-semibold bg-white rounded-md  text-center w-24 text-green-900 transition-opacity absolute top-20 left-10  text-[3.5rem]">
                {item.stat}
              </p>
            ) : (
              <p className="mt-2 font-semibold bg-white rounded-md  text-center w-24 text-green-900 transition-opacity absolute top-20 left-10  text-[3.5rem]">
                0
              </p>
            )}
          </div>
        ))
      ) : (
        <p ref={parent} className="mt-2 font-semibold bg-white rounded-md  text-center w-24 text-green-900 transition-opacity absolute top-20 left-10  text-[3.5rem]">
          0
        </p>
      )}

      <div className="col-start-1 col-end-2 row-start-2 bg-gray-200 rounded-md">
        {stats && (stats[4].stat || stats[5].stat) ? (
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: stats[4].stat ?? 0, label: "Laki-laki" },
                  { id: 1, value: stats[5].stat ?? 0, label: "Perempuan" },
                ],
                highlightScope: { faded: "global", highlighted: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
                innerRadius: 20,
                outerRadius: 50,
                paddingAngle: 5,
                cornerRadius: 0,
                startAngle: -60,
                endAngle: 210,
                cx: 100,
                cy: 100,
              },
            ]}
            width={350}
            height={200}
          />
        ) : (
          <p className="text-xl text-center mt-4 mb-8">Data Kosong</p>
        )}
        <Typography
          variant="small"
          className="text-center mb-8 bg-white"
          color="blue-gray"
        >
          Chart Jumlah Gender yang mendaftar
        </Typography>
      </div>

      <div className="bg-gray-200 rounded-md">
        {stats && stats[1].stat ? (
          <PieChart
            series={[
              {
                data: [
                  {
                    id: 0,
                    value: stats[1].stat ? 800 - stats[1].stat : 0,
                    label: "Kouta Tersisa",
                    color: "gray",
                  },
                  {
                    id: 1,
                    value: stats[1].stat ?? 0,
                    label: "Peserta Daftar",
                    color: "orange",
                  },
                ],
                highlightScope: { faded: "global", highlighted: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
                paddingAngle: 5,
                outerRadius: 70,
                cx: 100,
                cy: 100,
              },
            ]}
            width={350}
            height={200}
          />
        ) : (
          <p className="text-xl text-center mt-4 mb-8">Data Kosong</p> 
        )}
        <Typography
          variant="small"
          className="text-center mb-8 bg-white"
          color="blue-gray"
        >
          Chart Total Kouta yang tersedia
        </Typography>
      </div>
    </div>
  );
};

export default OverviewCard;

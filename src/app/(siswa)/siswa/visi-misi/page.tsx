// components/MissionSection.js
// pages/index.js
import { AcademicCapIcon, GlobeAltIcon, LightBulbIcon } from "@heroicons/react/24/solid";
import Head from "next/head";
import logo from "/public/logo.png"
import Image from "next/image";
import { GoalsSection } from "./GoalsSection";

const MissionSection = () => {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto grid grid-cols-2 grid-rows-[fit-content_fit-content] gap-12">
       {/* <div className="w-32 h-32 relative mb-2 mx-auto">
          <Image src={logo} alt="logo" className="h-full w-full" objectFit="cover" />
        </div> */}
      {/* Motto Section */}
      <section className="col-start-1 col-end-2 row-start-1 row-end-2" style={{height: "100%"}}>
        <h2 className="text-3xl font-extrabold text-center mb-6 relative pb-2">
          Motto
          <div className="absolute inset-x-0 bottom-0 border-b-4 border-green-500 transform -translate-y-1/2" />
        </h2>
        <div className="text-center text-lg bg-white p-6 rounded-lg shadow-lg" style={{height: "100%"}}>
          <AcademicCapIcon className="mx-auto h-16 w-16 text-blue-500 mb-4" />

          {/* <Image 
              src={logo} 
              alt="Motto Illustration" 
              className="w-full h-48 object-contain mb-4 rounded-full overflow-hidden" 
            /> */}
          <p className="mb-2 font-semibold">
            Menebar Kebaikan dan Pewaris Kebajikan
          </p>
          <p>Berjuang Menebar Kejujuran Niscaya Akan Menuai Kemakmuran</p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="col-start-2 col-end-3 row-start-1 row-end-2 h-full" style={{height: "100%"}}>
        <h2 className="text-3xl font-extrabold text-center mb-6 relative pb-2">
          Visi
          <div className="absolute inset-x-0 bottom-0 border-b-4 border-blue-500 transform -translate-y-1/2" />
        </h2>
        <div className="text-center text-lg bg-white p-6 rounded-lg shadow-lg h-full">
        <LightBulbIcon className="mx-auto h-16 w-16 text-yellow-500 mb-4" />
          
          {/* <Image
            src={logo}
            alt="Vision Illustration"
            className="w-full h-48 object-contain mb-4 rounded-full overflow-hidden"
          /> */}
          <p>
            Bertakwa, Berilmu Pengetahuan, Populis, dan Peduli Kesehatan Serta
            Lingkungan
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="col-span-2 mt-11">
        <h2 className="text-3xl font-extrabold text-center mb-6 relative pb-2">
          Misi
          <div className="absolute inset-x-0 bottom-0 border-b-4 border-purple-500 transform -translate-y-1/2" />
        </h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
        <GlobeAltIcon className="mx-auto h-16 w-16 text-green-500 mb-4" />
          
          {/* <Image
            src={logo}
            alt="Mission Illustration"
            className="w-full h-48 object-contain mb-4 rounded-full overflow-hidden"
          /> */}
          <ol type="1" className="list-disc list-inside space-y-2 text-lg">
            <li>Memiliki akhlakul karimah</li>
            <li>Mengamalkan dan menyampaikan ajaran Islam</li>
            <li>Mampu melanjutkan pendidikan ke Perguruan Tinggi</li>
            <li>Produktif mengisi pembangunan nasional</li>
            <li>Meningkatkan profesional guru</li>
            <li>
              Melaksanakan pembelajaran sistematis dan berteknologi serta
              berwawasan lingkungan
            </li>
            <li>
              Meningkatkan peran serta orangtua siswa, masyarakat dalam
              pengelolaan pendidikan
            </li>
            <li>
              Mewujudkan sekolah sehat dalam upaya membangun generasi berencana
              menuju kesejahteraan sosial
            </li>
            <li>
              Melestarikan lingkungan sekolah maupun lingkungan luar sekolah
            </li>
            <li>Mencegah pencemaran serta menciptakan green school</li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>MAN 1 Medan</title>
        <meta name="description" content="Motto, Visi, dan Misi MAN 1 Medan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MissionSection />
        <GoalsSection />
      </main>

      <footer className="text-center py-4">
        <p>&copy; 2024 MAN 1 Medan. All rights reserved.</p>
      </footer>
    </div>
  );
}

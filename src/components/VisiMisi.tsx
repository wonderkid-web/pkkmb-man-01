import { Card, CardBody, Typography } from "@/MT";
import {
  AcademicCapIcon,
  LightBulbIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const VisiMisi = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div className="max-w-screen-md mb-8 lg:mb-16">
      <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
        Moto, Visi & Misi Kami
      </h2>
      <p className="text-gray-500 sm:text-xl dark:text-gray-400">
       Dalam proses membangun sistem pendidikan yang berkualitas dan edukatif, kami memiliki jati diri sebagai berikut. 📑
      </p>
    </div>
    <div className="max-w-6xl mx-auto p-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        <Card className="flex flex-col items-center p-6">
          <AcademicCapIcon className="h-16 w-16 text-blue-500 mb-4" />
          <CardBody>
            <Typography variant="h4" className="text-gray-900 text-center mb-4">
              Motto
            </Typography>
            <Typography variant="h6" className="text-center text-gray-500 mb-2">
              Menebar Kebaikan dan Pewaris Kebajikan
            </Typography>
            <Typography variant="h6" className="text-center text-gray-500">
              Berjuang Menebar Kejujuran Niscaya Akan Menuai Kemakmuran
            </Typography>
          </CardBody>
        </Card>
  
        <Card className="flex flex-col items-center p-6">
          <LightBulbIcon className="h-16 w-16 text-yellow-500 mb-4" />
          <CardBody>
            <Typography variant="h4" className="text-gray-900 text-center mb-4">
              Visi
            </Typography>
            <Typography variant="h6" className="text-center text-gray-500">
              Bertakwa, Berilmu Pengetahuan, Populis dan Peduli Kesehatan Serta
              Lingkungan
            </Typography>
          </CardBody>
        </Card>
  
        <Card className="col-span-2 flex flex-col items-center p-6">
          <GlobeAltIcon className="h-16 w-16 text-green-500 mb-4" />
          <CardBody>
            <Typography variant="h4" className="text-gray-900 text-center mb-4">
              Misi
            </Typography>
            <Typography variant="h6" className="text-center text-gray-500">
              Visi tersebut di atas mencerminkan cita-cita bagi Madrasah Aliyah
              Negeri 1 Medan yang berorientasi ke depan dengan memperhatikan
              potensi keinginan, sesuai dengan norma agama dan harapan masyarakat
              dan bangsa dan adanya keinginan yang kuat untuk mencapai keunggulan,
              mendorong semangat dan komitmen seluruh warga madrasah, serta
              mendorong adanya perubahan yang lebih baik. Untuk itu MAN 1 Medan
              menentukan strategi.
            </Typography>
          </CardBody>
        </Card>
      </div>
  </div>
  );
};

export default VisiMisi;


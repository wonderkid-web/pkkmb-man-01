import { Card, CardBody, Typography } from "@/MT";
import { AcademicCapIcon, LightBulbIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const MottoVisiMisi = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
      <Card className="flex flex-col items-center p-6">
        <AcademicCapIcon className="h-16 w-16 text-blue-500 mb-4" />
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="text-center mb-4">
            Motto
          </Typography>
          <Typography variant="h6" className="text-center mb-2">
            Menebar Kebaikan dan Pewaris Kebajikan
          </Typography>
          <Typography variant="h6" className="text-center">
            Berjuang Menebar Kejujuran Niscaya Akan Menuai Kemakmuran
          </Typography>
        </CardBody>
      </Card>

      <Card className="flex flex-col items-center p-6">
        <LightBulbIcon className="h-16 w-16 text-yellow-500 mb-4" />
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="text-center mb-4">
            Visi
          </Typography>
          <Typography variant="h6" className="text-center">
            Bertakwa, Berilmu Pengetahuan, Populis dan Peduli Kesehatan Serta Lingkungan
          </Typography>
        </CardBody>
      </Card>

      <Card className="col-span-2 flex flex-col items-center p-6">
        <GlobeAltIcon className="h-16 w-16 text-green-500 mb-4" />
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="text-center mb-4">
            Misi
          </Typography>
          <Typography variant="h6" className="text-center">
            Visi tersebut di atas mencerminkan cita-cita bagi Madrasah Aliyah Negeri 1 Medan yang berorientasi ke depan dengan memperhatikan potensi keinginan, sesuai dengan norma agama dan harapan masyarakat dan bangsa dan adanya keinginan yang kuat untuk mencapai keunggulan, mendorong semangat dan komitmen seluruh warga madrasah, serta mendorong adanya perubahan yang lebih baik. Untuk itu MAN 1 Medan menentukan strategi.
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default MottoVisiMisi;

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@/MT";

export default function Timelines() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="max-w-screen-md mb-8 lg:mb-16">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
            Alur Pendaftaran Online Siswa/i Baru
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
           Simak langkah - langkah melakukan pendaftaran siswa/i dibawah ini. 👇
          </p>
        </div>
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon color="green" />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Pergi ke Form Pendaftaran.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-gray-600"
              >
                Buka Halaman Form Pendaftarannya yang ada pada link pojok kanan atas website ini, yang bertuliskan <br /> {"Form Pendaftaran"}.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon color="green" />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Isi Data Diri kamu pada Form {"Data Anak"}.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-gray-600"
              >
               Setelah membuka halaman Form Pendaftaran nya, kamu bakal di hadapkan form bagian pertama. Dimana pada form ini adalah bagian Data Diri Siswa
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon color="green" />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Isi Data Diri Orang tua kamu pada Form {"Data Orang Tua"}.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-gray-600"
              >
              Lakukan pengisian sesuai data dari masing-masing orang tua kalian baik Ibu atau Ayah
                </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader className="h-3">
              <TimelineIcon color="green" />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Form Dokumen {"(KTP, KK, AKTE KELAHIRAN SISWA/I, FOTO 3X4"}.

              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-gray-600"
              >
               Akhirnya sampai pada tahap akhir, dimana pada Form terakhir ini kalian wajib memasukan foto KTP, KK, AKTE KELAHIRAN SISWA/I, FOTO 3X4.
               <br />
               Pastikan ukuran dari masing-masing file yang akan kalian upload {"<"} 1Mb dan juga ber format salah satu dari format berikut ini: JPEG, JPG, PNG
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}

import Link from "next/link";
import foto1 from "/public/foto1.jpg"
import foto2 from "/public/foto2.jpg"
import foto3 from "/public/foto3.jpg"
import Image from "next/image";
import Maps from "@/components/Maps";

export default function Home() {
  const hubungiAdmin = () => {
    const template =
      `Hallo Admin MAN 01 Medan, Saya tertarik untuk mengetahui lebih lanjut tentang sekolah ini?`.replace(
        / /g,
        "%20"
      );
    return `https://wa.me/6283190655152?text=${template}`;
  };

  return (
    <main>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
              MAN 01 Medan
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Menyediakan pendidikan berkualitas untuk generasi muda dengan berbagai fasilitas dan program unggulan.
            </p>
            <Link
              href={hubungiAdmin()}
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
            >
              Hubungi Admin
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src={foto1}
              alt="foto sekolah"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
              Fasilitas Unggulan MAN 01 Medan
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Sekolah kami dilengkapi dengan fasilitas modern untuk mendukung proses belajar mengajar yang optimal.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-green-100 lg:h-12 lg:w-12 dark:bg-green-900">
                <svg
                  className="w-5 h-5 text-green-600 lg:w-6 lg:h-6 dark:text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Laboratorium Modern
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Dilengkapi dengan peralatan terkini untuk menunjang eksperimen dan penelitian siswa.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-green-100 lg:h-12 lg:w-12 dark:bg-green-900">
                <svg
                  className="w-5 h-5 text-green-600 lg:w-6 lg:h-6 dark:text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Perpustakaan</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Menyediakan koleksi buku dan literatur yang lengkap untuk mendukung kebutuhan belajar siswa.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-green-100 lg:h-12 lg:w-12 dark:bg-green-900">
                <svg
                  className="w-5 h-5 text-green-600 lg:w-6 lg:h-6 dark:text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-7-1.43V8a2 2 0 012-2h2zm0 1H4v2.57A21.956 21.956 0 0010 12a21.956 21.956 0 006-2.43V7h-2v1a1 1 0 11-2 0V5a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 11-2 0V7zm-3 9a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Ruang Kelas Digital</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Dilengkapi dengan teknologi digital untuk mendukung pembelajaran interaktif dan berbasis teknologi.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
              Galeri MAN 01 Medan
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Berikut adalah beberapa gambar yang menggambarkan kehidupan di MAN 01 Medan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Image src={foto2} alt="Gambar 1" className="w-full h-auto object-cover" />
            <Image src={foto3} alt="Gambar 2" className="w-full h-auto object-cover" />
            <Image src={foto1} alt="Gambar 3" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
              Lokasi MAN 01 Medan
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Temukan kami di peta berikut ini.
            </p>
          </div>
          <Maps />
        </div>
      </section>
    </main>
  );
}

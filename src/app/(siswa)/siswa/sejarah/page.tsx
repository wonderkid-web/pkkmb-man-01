import Image from "next/image";
import Link from "next/link";

export default function HistoryWithTimeline() {
  const principals = [
    {
      name: "Drs. H. Mukhtar Ghaffar",
      period: "1979 - 1984",
      image:
        "https://3.bp.blogspot.com/_tdrjVvTVhiM/S5sEN5--oFI/AAAAAAAAANY/xecjBO0gWfY/s200/kplman79.jpg",
    },
    {
      name: "Drs. H. Nurdin Nasution",
      period: "1984 - 1987",
      image:
        "https://2.bp.blogspot.com/_tdrjVvTVhiM/S5sEO3wVwrI/AAAAAAAAANg/jhqEbjtGwCw/s200/kplman84.jpg",
    },
    {
      name: "Drs. H. Musa HD",
      period: "1987 - 1993",
      image:
        "https://1.bp.blogspot.com/_tdrjVvTVhiM/S5sEPdA66kI/AAAAAAAAANo/6nJfnG7mGvY/s200/kplman87.jpg",
    },
    {
      name: "Drs. H. Suangkupon Siregar",
      period: "1993 - 1996",
      image:
        "https://2.bp.blogspot.com/_tdrjVvTVhiM/S5sEPmHG2TI/AAAAAAAAANw/pDHCToCb5AU/s200/kplman93.jpg",
    },
    {
      name: "Drs. H. Miskun",
      period: "1996 - 2000",
      image:
        "https://4.bp.blogspot.com/_tdrjVvTVhiM/S5sEQbjdriI/AAAAAAAAAN4/Ung6vsKWxq4/s200/kplman96.jpg",
    },
    {
      name: "Dra. Hj. Fatimah Ibrahim",
      period: "2000 - 2007",
      image:
        "https://2.bp.blogspot.com/_tdrjVvTVhiM/S5sF6P10MNI/AAAAAAAAAOA/U10Tun0raSw/s200/kplman07.jpg",
    },
    {
      name: "Dr. H. Burhanuddin S.Ag, M.Pd",
      period: "2007 - 2014",
      image:
        "https://4.bp.blogspot.com/-itgVO8tS91c/VdL2MhPh3LI/AAAAAAAAGGo/QTxiiZHpVmc/s200/3x4%2Bkepsek.jpg",
    },
    {
      name: "H. Ali Masran Daulay, S.Pd, M.A",
      period: "2014 - 2017",
      image:
        "https://3.bp.blogspot.com/-xh4rb0eyUg8/Vd1k3WPtN-I/AAAAAAAAGMc/7rVrFYxPF_E/s200/ali%2Bmasran.JPG",
    },
    {
      name: "Maisaroh, S.Pd, M.Si",
      period: "2017 - 2021",
      image: "https://man1medan.sch.id/wp-content/uploads/2020/04/mai.jpg",
    },
    {
      name: "Reza Faisal S.Pd, M.PMat",
      period: "2021 - Present",
      image:
        "https://man1medan.sch.id/wp-content/uploads/2021/12/Kamad-baju-putih-288x300.png",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-green-100 to-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-green-800">
          Sejarah Singkat MAN 01 Medan
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <p className="text-justify mb-4 text-gray-700">
            {" "}
            Madrasah Aliyah Negeri 1 Medan (MAN 1 Medan) awalnya didirikan
            sebagai Sekolah Persiapan Institut Agama Islam Negeri (SPIAIN) pada
            1 Februari 1968. Sekolah ini berlokasi di gedung Sekolah Hakim Jaksa
            Negeri di Jalan Imam Bonjol. Kemudian, SPIAIN pindah ke gedung
            Yayasan Pendidikan Harapan dengan jumlah siswa sebanyak 19 orang.
            Direktur pertama SPIAIN adalah Drs. H. Mukhtar Ghaffar, yang
            diangkat berdasarkan Surat Keputusan No. 08/SP-IAIN/1968 tertanggal
            27 Maret 1968.{" "}
          </p>{" "}
          <p className="text-justify mb-4 text-gray-700">
            {" "}
            Pada 1 April 1979, pemerintah mengubah semua SPIAIN, PHIAIN, SGHA,
            PPPUA, dan lembaga sejenis menjadi Madrasah Aliyah Negeri (MAN).
            SPIAIN Sumatera Utara juga menjadi MAN, dengan gedung permanennya
            yang terletak di kompleks IAIN Sumut di Jalan Sutomo Ujung, Medan.
            Pada tahun 1980 dan 1981, dibangun gedung MAN Medan yang baru di
            Jalan Williem Iskandar, dan MAN Medan kemudian pindah ke lokasi baru
            ini.{" "}
          </p>
        </div>
        <div className="relative">
          {principals.map((principal, index) => (
            <div
              key={index}
              className={`flex items-center mb-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                }`}
              >
                <h3 className="text-xl font-semibold text-green-800">
                  {principal.name}
                </h3>
                <p className="text-gray-600">{principal.period}</p>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center z-10">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <Image
                    src={principal.image}
                    alt={`Principal ${principal.name}`}
                    width={150}
                    height={200}
                    className="mx-auto rounded-md"
                  />
                </div>
              </div>
            </div>
          ))}
          <div
            className="absolute h-full w-1 bg-green-300 left-1/2 transform -translate-x-1/2 z-0"
            style={{ top: "24px" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

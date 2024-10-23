import { DashboardStat } from "@/types";
import {
  UsersIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";



export const NAMA_SEKOLAH = "PKKMB MAN 01 Medan Pancing"

export const goals = [
  "Terwujudnya pengembangan kreativitas peserta didik baik dalam bidang akademik maupun non-akademik.",
  "Terwujudnya lulusan yang beriman dan bertakwa, dan menguasai IMTAK serta mampu bersaing di era global dan mempertahankan budaya bangsa.",
  "Tercapainya peningkatan keterampilan menggunakan media Teknologi Informasi dan Komunikasi (TIK).",
  "Tercapainya peningkatan kemampuan guru dalam pemahaman terhadap peserta didik.",
  "Tercapainya peningkatan kedisiplinan dan ketertiban peserta didik dalam mewujudkan program kesiapsiagaan.",
  "Tercapainya peningkatan kualitas dan kuantitas fasilitas/sarana prasarana di lingkungan Madrasah.",
  "Tercapainya peningkatan perolehan rata-rata Ujian Akhir Nasional.",
  "Tercapainya peningkatan jumlah kelulusan yang diterima di berbagai Perguruan Tinggi dalam negeri yang berakreditasi A, maupun perguruan tinggi di luar negeri.",
  "Tercapainya kerja sama guru dengan orang tua, masyarakat, dan institusi lain.",
  "Terciptanya pengetahuan diri dalam upaya membentuk generasi berencana menuju generasi emas untuk mewujudkan insan yang berkarakter, cerdas, mandiri, produktif dalam upaya meningkatkan harkat dan martabat bangsa.",
  "Tercapainya sikap peduli lingkungan melalui proses pembelajaran dan pembiasaan dalam upaya pembentukan perilaku siswa yang peduli lingkungan melalui model pembelajaran yang aplikatif dan menyentuh kehidupan sehari-hari.",
  "Tercapainya optimalisasi lahan yang terbatas dalam upaya meningkatkan kualitas lingkungan yang sehat baik lingkungan dalam madrasah maupun luar madrasah dalam mendukung madrasah berwawasan lingkungan.",
  "Tercapainya pengetahuan dan sikap seluruh warga madrasah dalam pengelolaan dan penataan yang baik dalam peningkatan mutu manajemen yang berwawasan lingkungan.",
  "Tercapainya sikap dan perilaku siswa yang peduli dalam pengelolaan sampah sehingga tercipta kondisi ramah lingkungan.",
  "Tercapainya kegiatan 11K (Ketakwaan, Keindahan, Keamanan, Kerindangan, Ketertiban, Kekeluargaan, Kebersihan, Keterbukaan, Keteladanan, Kedisiplinan, dan Kenyamanan).",
  "Tercapainya kegiatan 5T (Tertib Masuk, Tertib Kerja, Tertib Pulang, Tertib Belajar, Tertib Mengajar).",
  "Tercapainya kegiatan 5G (Gemar membaca, Gemar menulis, Gemar menghafal, Gemar memahami, dan Gemar mengamalkan).",
];


export const DashboardStatInitiateData : DashboardStat[] = [
  {
    name: "Total Akun Siswa",
    icon: UsersIcon,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    name: "Total Pendaftar",
    icon: ClockIcon,
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
  },
  {
    name: "Pendaftar Tersetuju",
    icon: CheckCircleIcon,
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    name: "Pendaftar Tertunda",
    icon: XCircleIcon,
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    name: "Jumlah Pendaftar Laki-Laki",
    icon: UserCircleIcon,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    name: "Jumlah Pendaftar Perempuan",
    icon: UserCircleIcon,
    color: "text-pink-500",
    bgColor: "bg-pink-100",
  },
]
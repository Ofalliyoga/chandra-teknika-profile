import lighting from "@/assets/service-lighting.jpg";
import led from "@/assets/service-led.jpg";
import electrical from "@/assets/service-electrical.jpg";
import procurement from "@/assets/service-procurement.jpg";

export interface Service {
  number: string;
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    number: "01",
    title: "Lighting Supply",
    description:
      "Penyediaan berbagai kebutuhan pencahayaan untuk ruang komersial, bangunan, area kerja, fasilitas umum, dan kebutuhan proyek.",
    image: lighting,
  },
  {
    number: "02",
    title: "Lampu LED",
    description:
      "Penyediaan lampu LED untuk kebutuhan efisiensi energi, pencahayaan fungsional, dan peningkatan kualitas visual ruang.",
    image: led,
  },
  {
    number: "03",
    title: "Perlengkapan Elektrikal",
    description:
      "Penyediaan komponen dan perlengkapan elektrikal yang mendukung instalasi serta operasional bangunan.",
    image: electrical,
  },
  {
    number: "04",
    title: "Pengadaan Proyek",
    description:
      "Dukungan pengadaan produk berdasarkan spesifikasi, jumlah kebutuhan, jadwal, dan karakter pekerjaan.",
    image: procurement,
  },
  {
    number: "05",
    title: "Distribusi Produk",
    description:
      "Layanan penyediaan produk untuk toko, kontraktor, badan usaha, dan pelanggan dengan kebutuhan pembelian tertentu.",
    image: lighting,
  },
  {
    number: "06",
    title: "Dukungan Teknis",
    description:
      "Pendampingan awal dalam memahami kebutuhan produk, spesifikasi, dan penerapan sesuai kondisi proyek.",
    image: electrical,
  },
];

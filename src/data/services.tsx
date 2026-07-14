import type { ReactNode } from "react";
import { Lightbulb, Zap, Plug, ClipboardList, Truck, Wrench } from "lucide-react";
import lighting from "@/assets/service-lighting.jpg";
import led from "@/assets/service-led.jpg";
import electrical from "@/assets/service-electrical.jpg";
import procurement from "@/assets/service-procurement.jpg";

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    icon: <Lightbulb className="w-5 h-5" strokeWidth={1.5} />,
    title: "Lighting Supply",
    description:
      "Penyediaan berbagai kebutuhan pencahayaan untuk ruang komersial, bangunan, area kerja, fasilitas umum, dan kebutuhan proyek.",
    image: lighting,
  },
  {
    icon: <Zap className="w-5 h-5" strokeWidth={1.5} />,
    title: "Lampu LED",
    description:
      "Penyediaan lampu LED untuk kebutuhan efisiensi energi, pencahayaan fungsional, dan peningkatan kualitas visual ruang.",
    image: led,
  },
  {
    icon: <Plug className="w-5 h-5" strokeWidth={1.5} />,
    title: "Perlengkapan Elektrikal",
    description:
      "Penyediaan komponen dan perlengkapan elektrikal yang mendukung instalasi serta operasional bangunan.",
    image: electrical,
  },
  {
    icon: <ClipboardList className="w-5 h-5" strokeWidth={1.5} />,
    title: "Pengadaan Proyek",
    description:
      "Dukungan pengadaan produk berdasarkan spesifikasi, jumlah kebutuhan, jadwal, dan karakter pekerjaan.",
    image: procurement,
  },
  {
    icon: <Truck className="w-5 h-5" strokeWidth={1.5} />,
    title: "Distribusi Produk",
    description:
      "Layanan penyediaan produk untuk toko, kontraktor, badan usaha, dan pelanggan dengan kebutuhan pembelian tertentu.",
    image: lighting,
  },
  {
    icon: <Wrench className="w-5 h-5" strokeWidth={1.5} />,
    title: "Dukungan Teknis",
    description:
      "Pendampingan awal dalam memahami kebutuhan produk, spesifikasi, dan penerapan sesuai kondisi proyek.",
    image: electrical,
  },
];

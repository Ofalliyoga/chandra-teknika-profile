import type { ReactNode } from "react";
import { Store, Building2, Factory, Truck } from "lucide-react";
import commercial from "@/assets/scope-commercial.jpg";
import office from "@/assets/scope-office.jpg";
import industrial from "@/assets/scope-industrial.jpg";
import warehouse from "@/assets/scope-warehouse.jpg";

export interface Solution {
  key: string;
  icon: ReactNode;
  title: string;
  description: string;
  items: string[];
  image: string;
}

export const solutions: Solution[] = [
  {
    key: "commercial",
    icon: <Store className="w-5 h-5" strokeWidth={1.5} />,
    title: "Bangunan Komersial",
    description:
      "Solusi pencahayaan untuk toko, ruang usaha, fasilitas pelayanan, dan bangunan komersial yang membutuhkan pencahayaan fungsional serta presentasi ruang yang baik.",
    items: ["Pencahayaan area display", "Downlight & spotlight", "Facade lighting", "Sign & aksen"],
    image: commercial,
  },
  {
    key: "office",
    icon: <Building2 className="w-5 h-5" strokeWidth={1.5} />,
    title: "Ruang Kerja & Perkantoran",
    description:
      "Pencahayaan yang mendukung kenyamanan visual, konsentrasi, efisiensi penggunaan energi, dan fungsi ruang kerja.",
    items: ["Panel LED", "Linear pendant", "Task lighting", "Kontrol pencahayaan"],
    image: office,
  },
  {
    key: "industrial",
    icon: <Factory className="w-5 h-5" strokeWidth={1.5} />,
    title: "Area Industri & Operasional",
    description:
      "Penyediaan kebutuhan lighting dan elektrikal untuk area kerja yang memerlukan pencahayaan stabil, jelas, dan sesuai karakter operasional.",
    items: ["High bay LED", "Flood light", "Emergency lighting", "Panel distribusi"],
    image: industrial,
  },
  {
    key: "procurement",
    icon: <Truck className="w-5 h-5" strokeWidth={1.5} />,
    title: "Pengadaan & Distribusi",
    description:
      "Dukungan penyediaan produk berdasarkan jumlah, spesifikasi, jadwal, serta kebutuhan pelanggan bisnis dan proyek.",
    items: ["Pengadaan proyek", "Distribusi grosir", "Dukungan kontraktor", "Konsultasi spesifikasi"],
    image: warehouse,
  },
];

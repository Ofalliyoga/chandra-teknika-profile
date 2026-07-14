import type { ReactNode } from "react";
import { ClipboardCheck, SlidersHorizontal, FileText, PackageCheck, Headphones } from "lucide-react";

export interface WorkflowStep {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Advantage {
  icon: ReactNode;
  title: string;
  description: string;
}

export const workflow: WorkflowStep[] = [
  {
    icon: <ClipboardCheck className="w-5 h-5" strokeWidth={1.5} />,
    title: "Identifikasi Kebutuhan",
    description: "Memahami jenis proyek, fungsi ruang, jumlah kebutuhan, dan target penggunaan.",
  },
  {
    icon: <SlidersHorizontal className="w-5 h-5" strokeWidth={1.5} />,
    title: "Penyesuaian Spesifikasi",
    description: "Menentukan spesifikasi produk yang relevan dengan kebutuhan pelanggan.",
  },
  {
    icon: <FileText className="w-5 h-5" strokeWidth={1.5} />,
    title: "Penyusunan Penawaran",
    description: "Menyusun pilihan produk, jumlah kebutuhan, dan informasi pendukung.",
  },
  {
    icon: <PackageCheck className="w-5 h-5" strokeWidth={1.5} />,
    title: "Proses Pengadaan",
    description: "Mengoordinasikan proses penyediaan dan pemenuhan produk.",
  },
  {
    icon: <Headphones className="w-5 h-5" strokeWidth={1.5} />,
    title: "Dukungan Pelanggan",
    description: "Memberikan informasi dan dukungan yang diperlukan selama proses layanan.",
  },
];

export const advantages: Advantage[] = [
  {
    icon: <ClipboardCheck className="w-5 h-5" strokeWidth={1.5} />,
    title: "Pemahaman Kebutuhan",
    description: "Kami memulai proses dengan memahami kebutuhan penggunaan dan karakter proyek.",
  },
  {
    icon: <SlidersHorizontal className="w-5 h-5" strokeWidth={1.5} />,
    title: "Spesifikasi yang Relevan",
    description: "Produk disesuaikan dengan fungsi, kondisi lapangan, dan kebutuhan pelanggan.",
  },
  {
    icon: <Headphones className="w-5 h-5" strokeWidth={1.5} />,
    title: "Respons yang Terarah",
    description: "Komunikasi disusun secara jelas agar proses pengadaan dapat berjalan lebih efektif.",
  },
  {
    icon: <PackageCheck className="w-5 h-5" strokeWidth={1.5} />,
    title: "Fokus pada B2B",
    description: "Layanan diarahkan untuk mendukung kebutuhan bisnis, kontraktor, toko, dan proyek.",
  },
];

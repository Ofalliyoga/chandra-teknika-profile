import retail from "@/assets/scope-retail.jpg";
import office from "@/assets/scope-office.jpg";
import commercial from "@/assets/scope-commercial.jpg";
import industrial from "@/assets/scope-industrial.jpg";
import warehouse from "@/assets/scope-warehouse.jpg";
import renovation from "@/assets/scope-renovation.jpg";
import electrical from "@/assets/scope-electrical.jpg";
import led from "@/assets/service-led.jpg";

export interface ProjectScope {
  label: string;
  category: string;
  image: string;
  span?: "col" | "row" | "both";
}

export const projectScopes: ProjectScope[] = [
  { label: "Retail & Toko", category: "Komersial", image: retail, span: "col" },
  { label: "Kantor & Ruang Kerja", category: "Perkantoran", image: office },
  { label: "Bangunan Komersial", category: "Komersial", image: commercial, span: "row" },
  { label: "Area Operasional", category: "Industri", image: industrial },
  { label: "Gudang & Fasilitas Usaha", category: "Logistik", image: warehouse, span: "col" },
  { label: "Renovasi Pencahayaan", category: "Retrofit", image: renovation },
  { label: "Kebutuhan Kontraktor", category: "Proyek", image: led },
  { label: "Pengadaan Elektrikal", category: "Supply", image: electrical },
];

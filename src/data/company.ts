// Ganti data placeholder berikut setelah kontak resmi perusahaan tersedia.
export const companyData = {
  name: "CV. Chandra Teknika",
  shortName: "Chandra Teknika",
  tagline: "Lighting & Electrical Solutions",
  address: {
    street: "Jl. Ketintang Baru IV B No. 15",
    district: "Ketintang, Kecamatan Gayungan",
    city: "Surabaya",
    province: "Jawa Timur",
    postalCode: "60231",
    country: "Indonesia",
  },
  // Placeholder — ganti dengan nomor resmi
  phone: "+62 8XX-XXXX-XXXX",
  whatsapp: "6281234567890", // format internasional tanpa tanda +
  whatsappDisplay: "+62 8XX-XXXX-XXXX",
  email: "info@chandrateknika.co.id",
  businessHours: {
    weekdays: "Senin – Jumat, 08.00 – 17.00 WIB",
    saturday: "Sabtu, 08.00 – 14.00 WIB",
    sunday: "Minggu & hari libur, tutup",
  },
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Jl.+Ketintang+Baru+IV+B+No.+15,+Surabaya&output=embed",
} as const;

export const waLink = (message = "Halo CV. Chandra Teknika, saya ingin berkonsultasi mengenai kebutuhan lighting atau elektrikal.") =>
  `https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(message)}`;

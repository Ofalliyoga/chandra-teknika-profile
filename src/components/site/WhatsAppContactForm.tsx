import { useState, type FormEvent } from "react";
import { waLink } from "@/data/company";
import { ArrowRight } from "lucide-react";

const kebutuhanOptions = [
  "Lighting",
  "Lampu LED",
  "Perlengkapan elektrikal",
  "Pengadaan proyek",
  "Distribusi produk",
  "Konsultasi kebutuhan",
  "Lainnya",
];

interface FormState {
  nama: string;
  perusahaan: string;
  whatsapp: string;
  email: string;
  kebutuhan: string;
  pesan: string;
  agree: boolean;
}

const initial: FormState = {
  nama: "", perusahaan: "", whatsapp: "", email: "",
  kebutuhan: kebutuhanOptions[0], pesan: "", agree: false,
};

export function WhatsAppContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const validate = (): boolean => {
    const e: typeof errors = {};
    if (!form.nama.trim()) e.nama = "Nama wajib diisi.";
    if (!form.whatsapp.trim()) e.whatsapp = "Nomor WhatsApp wajib diisi.";
    else if (!/^[0-9+\-\s]{8,}$/.test(form.whatsapp)) e.whatsapp = "Format nomor tidak valid.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email tidak valid.";
    if (!form.pesan.trim()) e.pesan = "Pesan wajib diisi.";
    if (!form.agree) e.agree = "Persetujuan diperlukan.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const msg = [
      "Halo CV. Chandra Teknika, saya ingin berkonsultasi.",
      "",
      `Nama: ${form.nama}`,
      form.perusahaan && `Perusahaan: ${form.perusahaan}`,
      `WhatsApp: ${form.whatsapp}`,
      form.email && `Email: ${form.email}`,
      `Kebutuhan: ${form.kebutuhan}`,
      "",
      "Pesan:",
      form.pesan,
    ].filter(Boolean).join("\n");
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  const field = "w-full bg-transparent border-b border-[color:var(--border-grey)] py-3 focus:border-[color:var(--amber-lit)] focus:outline-none transition-colors text-[color:var(--ink)] placeholder:text-[color:var(--muted-grey)]";
  const label = "block text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted-grey)] mb-2";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="nama" className={label}>Nama *</label>
          <input id="nama" className={field} value={form.nama} onChange={(e) => set("nama", e.target.value)} aria-invalid={!!errors.nama} aria-describedby="err-nama" />
          {errors.nama && <p id="err-nama" className="mt-2 text-xs text-[color:var(--destructive)]">{errors.nama}</p>}
        </div>
        <div>
          <label htmlFor="perusahaan" className={label}>Nama Perusahaan</label>
          <input id="perusahaan" className={field} value={form.perusahaan} onChange={(e) => set("perusahaan", e.target.value)} />
        </div>
        <div>
          <label htmlFor="whatsapp" className={label}>Nomor WhatsApp *</label>
          <input id="whatsapp" className={field} value={form.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} placeholder="+62..." aria-invalid={!!errors.whatsapp} aria-describedby="err-wa" />
          {errors.whatsapp && <p id="err-wa" className="mt-2 text-xs text-[color:var(--destructive)]">{errors.whatsapp}</p>}
        </div>
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" type="email" className={field} value={form.email} onChange={(e) => set("email", e.target.value)} aria-invalid={!!errors.email} aria-describedby="err-email" />
          {errors.email && <p id="err-email" className="mt-2 text-xs text-[color:var(--destructive)]">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="kebutuhan" className={label}>Jenis Kebutuhan</label>
        <select id="kebutuhan" className={field + " appearance-none"} value={form.kebutuhan} onChange={(e) => set("kebutuhan", e.target.value)}>
          {kebutuhanOptions.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="pesan" className={label}>Pesan *</label>
        <textarea id="pesan" rows={4} className={field + " resize-none"} value={form.pesan} onChange={(e) => set("pesan", e.target.value)} aria-invalid={!!errors.pesan} aria-describedby="err-pesan" />
        {errors.pesan && <p id="err-pesan" className="mt-2 text-xs text-[color:var(--destructive)]">{errors.pesan}</p>}
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={form.agree}
          onChange={(e) => set("agree", e.target.checked)}
          className="mt-1 accent-[color:var(--amber-lit)] w-4 h-4"
          aria-describedby="err-agree"
        />
        <span className="text-sm text-[color:var(--muted-foreground)]">
          Saya memahami bahwa pesan akan diteruskan melalui WhatsApp.
        </span>
      </label>
      {errors.agree && <p id="err-agree" className="text-xs text-[color:var(--destructive)]">{errors.agree}</p>}

      <button type="submit" className="btn-primary w-full md:w-auto">
        Kirim melalui WhatsApp <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}

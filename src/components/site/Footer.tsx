import { navigation } from "@/data/navigation";
import { companyData } from "@/data/company";

export function Footer() {
  return (
    <footer className="bg-[color:var(--ink)] text-[color:var(--paper)]">
      <div className="container-x pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex flex-col leading-[0.95]">
                <span className="font-display text-sm tracking-[0.28em] uppercase font-bold">Chandra</span>
                <span className="font-display text-sm tracking-[0.28em] uppercase font-bold text-[color:var(--amber-lit)]">Teknika</span>
              </span>
            </div>
            <p className="mt-6 text-sm text-[color:var(--paper)]/60 max-w-sm leading-relaxed">
              Penyedia kebutuhan lighting, elektrikal, pengadaan, dan dukungan teknis untuk pelanggan bisnis dan proyek.
            </p>
            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[color:var(--muted-grey)]">Surabaya · Jawa Timur</p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-[color:var(--muted-grey)] mb-5">Navigasi</p>
            <ul className="space-y-3 text-sm">
              {navigation.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="link-underline text-[color:var(--paper)]/80 hover:text-[color:var(--paper)]">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-[color:var(--muted-grey)] mb-5">Kontak</p>
            <address className="not-italic text-sm space-y-3 text-[color:var(--paper)]/80">
              <p className="leading-relaxed">
                {companyData.address.street}<br />
                {companyData.address.district}<br />
                {companyData.address.city} {companyData.address.postalCode}
              </p>
              <p>{companyData.phone}</p>
              <p><a href={`mailto:${companyData.email}`} className="link-underline">{companyData.email}</a></p>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[color:var(--muted-grey)]">
          <p>© 2026 CV. Chandra Teknika. Seluruh hak dilindungi.</p>
          <div className="flex gap-6">
            <a href="#privasi" className="link-underline">Kebijakan Privasi</a>
            <a href="#ketentuan" className="link-underline">Ketentuan Penggunaan</a>
          </div>
        </div>

        <p id="privasi" className="mt-6 text-[11px] text-[color:var(--muted-grey)]/70 max-w-3xl leading-relaxed">
          Website ini tidak menyimpan data pengguna. Pesan yang dikirim melalui formulir kontak akan diteruskan langsung ke aplikasi WhatsApp dan tidak disimpan pada database, penyimpanan lokal browser, maupun server pihak ketiga.
        </p>
      </div>
    </footer>
  );
}

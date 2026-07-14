import { companyData } from "@/data/company";
import { MapPin, MapPinned } from "lucide-react";
import { useReveal } from "@/animations/useReveal";

export function LocationSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="bg-[color:var(--warm)] py-24 md:py-36">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5" data-reveal>
          <p className="eyebrow inline-flex items-center gap-3"><span className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-[color:var(--amber-lit)]/30 bg-[color:var(--amber-lit)]/10 text-[color:var(--amber-lit)]"><MapPinned className="w-4 h-4" strokeWidth={1.5} /></span> Area Layanan</p>
          <h2 className="mt-6 font-display font-semibold text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em] text-[color:var(--ink)]">
            Berbasis di Surabaya, melayani kebutuhan bisnis dan proyek.
          </h2>

          <address className="not-italic mt-10 space-y-6 text-[color:var(--charcoal)]">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 mt-1 text-[color:var(--amber-lit)] shrink-0" />
              <div>
                <p className="text-sm text-[color:var(--muted-grey)] uppercase tracking-[0.2em] mb-1">Alamat</p>
                <p className="leading-relaxed">
                  {companyData.address.street},<br />
                  {companyData.address.district},<br />
                  {companyData.address.city}, {companyData.address.province} {companyData.address.postalCode}<br />
                  {companyData.address.country}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[color:var(--border-grey)]">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-grey)]">Lokasi</p>
                <p className="mt-2 font-medium">Surabaya</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-grey)]">Cakupan</p>
                <p className="mt-2 font-medium">Menyesuaikan kesepakatan</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-grey)]">Jenis Layanan</p>
                <p className="mt-2 font-medium">Pengadaan, distribusi, dan dukungan teknis</p>
              </div>
            </div>
          </address>
        </div>

        <div className="lg:col-span-7" data-reveal>
          <div className="relative border border-[color:var(--border-grey)] bg-[color:var(--paper)] p-2 shadow-[0_30px_60px_-30px_rgba(17,20,24,0.25)]">
            <div className="aspect-[4/3] md:aspect-[16/11] w-full overflow-hidden">
              <iframe
                src={companyData.mapsEmbedUrl}
                title="Lokasi CV. Chandra Teknika"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-110"
              />
            </div>
            <div className="flex items-center justify-between px-3 py-3 border-t border-[color:var(--border-grey)] mt-2 text-xs uppercase tracking-[0.2em] text-[color:var(--muted-grey)]">
              <span>Ketintang · Surabaya</span>
              <span>7.32°S · 112.73°E</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

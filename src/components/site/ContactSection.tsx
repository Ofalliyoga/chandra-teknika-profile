import { companyData } from "@/data/company";
import { WhatsAppContactForm } from "./WhatsAppContactForm";
import { useReveal } from "@/animations/useReveal";

export function ContactSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="kontak" ref={ref} className="bg-[color:var(--paper)] py-24 md:py-36 border-t border-[color:var(--border-grey)]">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5" data-reveal>
          <p className="eyebrow">08 · Kontak</p>
          <h2 className="mt-6 font-display font-semibold text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em] text-[color:var(--ink)]">
            Hubungi Kami.
          </h2>
          <p className="mt-6 text-[color:var(--muted-foreground)] max-w-md">
            Sampaikan kebutuhan Anda melalui formulir di samping, atau hubungi kami langsung menggunakan kontak berikut.
          </p>

          <dl className="mt-12 space-y-6 text-sm">
            <div className="grid grid-cols-[110px_1fr] gap-4 pb-6 border-b border-[color:var(--border-grey)]">
              <dt className="uppercase tracking-[0.2em] text-xs text-[color:var(--muted-grey)]">Alamat</dt>
              <dd className="text-[color:var(--charcoal)] leading-relaxed">
                {companyData.address.street}, {companyData.address.district}, {companyData.address.city} {companyData.address.postalCode}
              </dd>
            </div>
            <div className="grid grid-cols-[110px_1fr] gap-4 pb-6 border-b border-[color:var(--border-grey)]">
              <dt className="uppercase tracking-[0.2em] text-xs text-[color:var(--muted-grey)]">Telepon</dt>
              <dd className="text-[color:var(--charcoal)]">{companyData.phone}</dd>
            </div>
            <div className="grid grid-cols-[110px_1fr] gap-4 pb-6 border-b border-[color:var(--border-grey)]">
              <dt className="uppercase tracking-[0.2em] text-xs text-[color:var(--muted-grey)]">WhatsApp</dt>
              <dd className="text-[color:var(--charcoal)]">{companyData.whatsappDisplay}</dd>
            </div>
            <div className="grid grid-cols-[110px_1fr] gap-4 pb-6 border-b border-[color:var(--border-grey)]">
              <dt className="uppercase tracking-[0.2em] text-xs text-[color:var(--muted-grey)]">Email</dt>
              <dd className="text-[color:var(--charcoal)]">
                <a className="link-underline" href={`mailto:${companyData.email}`}>{companyData.email}</a>
              </dd>
            </div>
            <div className="grid grid-cols-[110px_1fr] gap-4">
              <dt className="uppercase tracking-[0.2em] text-xs text-[color:var(--muted-grey)]">Jam Buka</dt>
              <dd className="text-[color:var(--charcoal)] space-y-1">
                <div>{companyData.businessHours.weekdays}</div>
                <div>{companyData.businessHours.saturday}</div>
                <div className="text-[color:var(--muted-grey)]">{companyData.businessHours.sunday}</div>
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7" data-reveal>
          <div className="border border-[color:var(--border-grey)] p-6 md:p-10 bg-[color:var(--warm)]">
            <WhatsAppContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

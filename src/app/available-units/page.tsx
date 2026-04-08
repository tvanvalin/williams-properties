import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { vacancies } from "@/lib/properties";
import { MapPin, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Available Apartments | Tacoma, WA Rentals",
  description:
    "View currently available apartments in Tacoma, WA. Studios from $1,300, 1-bedrooms from $1,300, and more. All utilities included. Schedule a tour today.",
};

export default function AvailableUnitsPage() {
  return (
    <>
      <section className="bg-[#1C1917] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B] mb-4">
              Available Now
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAFAF9] max-w-3xl">
              Find your next home
            </h1>
            <p className="mt-6 text-lg text-[#A8A29E] max-w-2xl">
              All apartments include water, sewer, garbage, and heat. Pre-wired
              for Comcast and Lightcurve. Laundry on-site or in-unit. Crime Free
              Certified.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Price ranges */}
          <AnimateIn>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {[
                { type: "Studio", range: "$1,300 - $1,500" },
                { type: "1 Bedroom", range: "$1,300 - $1,900" },
                { type: "2 Bedroom", range: "$1,700 - $3,200" },
                { type: "3 Bedroom", range: "$2,750 - $3,250" },
              ].map((item) => (
                <div
                  key={item.type}
                  className="rounded-xl border border-[#D6D3D1] bg-white p-4 text-center"
                >
                  <p className="text-sm text-[#57534E]">{item.type}</p>
                  <p className="mt-1 text-lg font-bold text-[#1C1917]">
                    {item.range}
                  </p>
                </div>
              ))}
            </div>
          </AnimateIn>

          {vacancies.length > 0 ? (
            <div className="space-y-6">
              {vacancies.map((v, i) => (
                <AnimateIn key={v.id} delay={i * 0.1}>
                  <div className="rounded-2xl border border-[#D6D3D1] bg-white overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-72 h-48 lg:h-auto bg-gradient-to-br from-[#44403C] to-[#292524] shrink-0" />
                      <div className="flex-1 p-6 lg:p-8">
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                          <div>
                            <span className="inline-block rounded-full bg-[#FEF3C7] px-3 py-1 text-xs font-semibold text-[#92400E] mb-2">
                              {v.available}
                            </span>
                            <h2 className="text-2xl font-bold text-[#1C1917] font-[family-name:var(--font-playfair)]">
                              {v.propertyName} {v.unit}
                            </h2>
                            <div className="mt-1 flex items-center gap-1.5 text-sm text-[#57534E]">
                              <MapPin className="h-4 w-4" aria-hidden="true" />
                              {v.address}
                            </div>
                            <p className="mt-1 text-sm text-[#57534E]">
                              {v.bedrooms} &middot; {v.sqft} sq ft
                            </p>
                          </div>
                          <p className="text-3xl font-bold text-[#B45309]">
                            ${v.price.toLocaleString()}
                            <span className="text-sm font-normal text-[#57534E]">
                              /mo
                            </span>
                          </p>
                        </div>
                        <p className="mt-4 text-[#57534E]">{v.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {v.features.map((f) => (
                            <span
                              key={f}
                              className="rounded-full bg-[#F5F5F4] px-3 py-1 text-xs text-[#57534E]"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                          <Link
                            href="/contact"
                            className="rounded-lg bg-[#B45309] px-6 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#92400E] transition-colors"
                          >
                            Schedule a Tour
                          </Link>
                          <Link
                            href={`/properties/${v.propertySlug}`}
                            className="rounded-lg border border-[#D6D3D1] px-6 py-2.5 text-center text-sm font-semibold text-[#292524] hover:bg-[#F5F5F4] transition-colors"
                          >
                            View Building Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          ) : (
            <AnimateIn>
              <div className="rounded-2xl border border-[#D6D3D1] bg-white p-12 text-center">
                <h2 className="text-2xl font-bold text-[#1C1917] font-[family-name:var(--font-playfair)]">
                  No units available right now
                </h2>
                <p className="mt-4 text-[#57534E] max-w-lg mx-auto">
                  Our apartments are in high demand. Contact us to get on our
                  waitlist and be notified when a unit becomes available.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#B45309] px-6 py-3 text-sm font-semibold text-white hover:bg-[#92400E] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Join the Waitlist
                </Link>
              </div>
            </AnimateIn>
          )}

          {/* Info box */}
          <AnimateIn>
            <div className="mt-12 rounded-2xl bg-[#FEF3C7] border border-[#F59E0B]/20 p-8">
              <h3 className="text-lg font-bold text-[#92400E]">
                Good to know
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-[#78350F]">
                <li>All apartments include basic utilities except electricity, phone, cable, and internet.</li>
                <li>All buildings are pre-wired for Comcast and/or Lightcurve cable and broadband internet.</li>
                <li>All properties have laundry facilities on-site (if not in-unit).</li>
                <li>All properties are Crime Free Certified by the City of Tacoma Police Department.</li>
                <li>All properties accept cats. Dogs are only accepted at The Lewis &amp; Clark.</li>
                <li>Occupied apartments can only be shown during limited hours by advanced appointment.</li>
              </ul>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home, Shield, Users, Star, Building2, CalendarCheck } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { properties, vacancies } from "@/lib/properties";

export default function HomePage() {
  const featuredProperties = properties.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-[#1C1917] overflow-hidden">
        {/* Building background image */}
        <Image
          src="/images/properties/biltmore.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay for readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#1C1917] via-[#1C1917]/90 to-[#1C1917]/40"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-transparent to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <AnimateIn delay={0.1}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B] mb-6">
                Family-owned since 1902
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-7xl font-bold text-[#FAFAF9] leading-[1.1] tracking-tight">
                Character apartments in{" "}
                <span className="text-[#F59E0B]">historic Tacoma</span>
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.35}>
              <p className="mt-8 text-lg sm:text-xl leading-relaxed text-[#D6D3D1] max-w-2xl">
                Each of our apartments is personally designed by the owners in
                buildings dating back to the 1880s. No two homes are alike.
                No management companies. Just direct owner care in Tacoma&apos;s
                most beautiful historic buildings.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.5}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/available-units"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#B45309] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#B45309]/20 hover:bg-[#92400E] transition-all duration-200 hover:shadow-xl hover:shadow-[#B45309]/30"
                >
                  View Available Units
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/properties"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#44403C] px-7 py-3.5 text-base font-semibold text-[#FAFAF9] hover:bg-[#292524] transition-colors duration-200"
                >
                  Explore Properties
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAF7F2] to-transparent" aria-hidden="true" />
      </section>

      {/* Trust Bar */}
      <section className="relative -mt-12 z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: Home,
                title: "120+ Years",
                desc: "Family property ownership since 1902",
              },
              {
                icon: Building2,
                title: "8 Historic Buildings",
                desc: "Each with unique architectural character",
              },
              {
                icon: Shield,
                title: "Crime Free Certified",
                desc: "By the City of Tacoma Police Department",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-lg shadow-black/5 border border-[#D6D3D1]/50"
              >
                <div className="rounded-lg bg-[#FEF3C7] p-3">
                  <item.icon className="h-6 w-6 text-[#B45309]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1C1917] text-lg">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#57534E]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </section>

      {/* Available Units Preview */}
      {vacancies.length > 0 && (
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateIn>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#B45309] mb-2">
                    Available Now
                  </p>
                  <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-[#1C1917]">
                    Find your next home
                  </h2>
                </div>
                <Link
                  href="/available-units"
                  className="inline-flex items-center gap-1.5 text-[#B45309] font-semibold hover:text-[#92400E] transition-colors"
                >
                  View all units <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vacancies.map((vacancy, i) => (
                <AnimateIn key={vacancy.id} delay={i * 0.1}>
                  <div className="group rounded-2xl border border-[#D6D3D1] bg-white overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
                    <div className="h-48 relative overflow-hidden">
                      <Image src={vacancy.image} alt={`${vacancy.propertyName} ${vacancy.unit}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-6">
                        <span className="inline-block rounded-full bg-[#B45309] px-3 py-1 text-xs font-semibold text-white">
                          {vacancy.available}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-[#1C1917]">
                            {vacancy.propertyName} {vacancy.unit}
                          </h3>
                          <p className="mt-1 text-sm text-[#57534E]">
                            {vacancy.address} &middot; {vacancy.bedrooms} &middot; {vacancy.sqft} sq ft
                          </p>
                        </div>
                        <p className="text-2xl font-bold text-[#B45309]">
                          ${vacancy.price.toLocaleString()}
                          <span className="text-sm font-normal text-[#57534E]">/mo</span>
                        </p>
                      </div>
                      <p className="mt-4 text-sm text-[#57534E] line-clamp-2">
                        {vacancy.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {vacancy.features.slice(0, 4).map((f) => (
                          <span
                            key={f}
                            className="rounded-full bg-[#F5F5F4] px-3 py-1 text-xs text-[#57534E]"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 flex gap-3">
                        <Link
                          href="/contact"
                          className="flex-1 rounded-lg bg-[#B45309] py-2.5 text-center text-sm font-semibold text-white hover:bg-[#92400E] transition-colors"
                        >
                          Schedule a Tour
                        </Link>
                        <Link
                          href={`/properties/${vacancy.propertySlug}`}
                          className="rounded-lg border border-[#D6D3D1] px-4 py-2.5 text-sm font-semibold text-[#292524] hover:bg-[#F5F5F4] transition-colors"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Properties */}
      <section className="py-24 lg:py-32 bg-[#1C1917] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F59E0B] mb-2">
                Our Portfolio
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAFAF9]">
                Historic buildings, modern living
              </h2>
              <p className="mt-4 text-lg text-[#A8A29E] max-w-2xl mx-auto">
                Eight distinctive properties spanning from 1889 to today. Each
                building tells a story. Each apartment is a unique home.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((prop, i) => (
              <AnimateIn key={prop.slug} delay={i * 0.15}>
                <Link
                  href={`/properties/${prop.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-[#292524] hover:bg-[#44403C] transition-colors duration-300"
                >
                  <div className="h-56 relative overflow-hidden">
                    <Image src={prop.image} alt={prop.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#292524] to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-xs font-medium text-[#A8A29E] uppercase tracking-wider">
                        Est. {prop.yearBuilt}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#FAFAF9] group-hover:text-[#F59E0B] transition-colors">
                      {prop.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#A8A29E]">
                      {prop.address} &middot; {prop.style}
                    </p>
                    <p className="mt-3 text-sm text-[#D6D3D1] line-clamp-2">
                      {prop.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-[#F59E0B] text-sm font-semibold">
                      Explore property <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.3}>
            <div className="mt-12 text-center">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 rounded-lg border border-[#44403C] px-7 py-3.5 text-base font-semibold text-[#FAFAF9] hover:bg-[#292524] transition-colors"
              >
                View All 8 Properties
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Williams */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="left">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#B45309] mb-2">
                  Why Williams Properties
                </p>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-[#1C1917] leading-tight">
                  Your landlord is the owner.
                  <br />
                  <span className="text-[#B45309]">Always.</span>
                </h2>
                <p className="mt-6 text-lg text-[#57534E] leading-relaxed">
                  We don&apos;t use outside management firms. We don&apos;t manage
                  anyone else&apos;s properties. When something needs attention in
                  your apartment, you&apos;re communicating directly with the
                  long-term owners of the building.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    {
                      icon: Users,
                      text: "Direct owner communication — no middlemen, no runaround",
                    },
                    {
                      icon: Star,
                      text: "Every apartment personally designed by Dax Williams",
                    },
                    {
                      icon: CalendarCheck,
                      text: "All utilities included except electricity",
                    },
                    {
                      icon: Shield,
                      text: "Crime Free Certified by Tacoma Police Department",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="rounded-lg bg-[#FEF3C7] p-2 mt-0.5">
                        <item.icon className="h-4 w-4 text-[#B45309]" aria-hidden="true" />
                      </div>
                      <span className="text-[#292524]">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-[#B45309] font-semibold hover:text-[#92400E] transition-colors"
                  >
                    Read our story <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#292524] to-[#1C1917] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <p className="font-[family-name:var(--font-playfair)] text-6xl font-bold text-[#F59E0B]">
                        1902
                      </p>
                      <p className="mt-2 text-lg text-[#A8A29E]">
                        Family ownership begins
                      </p>
                    </div>
                  </div>
                </div>
                {/* Decorative offset card */}
                <div className="absolute -bottom-6 -left-6 rounded-xl bg-[#B45309] p-6 text-white shadow-xl max-w-[220px]">
                  <p className="text-3xl font-bold">4th</p>
                  <p className="mt-1 text-sm text-white/80">
                    Generation of Williams family property ownership
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#F5F5F4]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
              Make yourself at home
            </h2>
            <p className="mt-6 text-lg text-[#57534E] max-w-2xl mx-auto">
              Whether you&apos;re drawn to exposed brick and industrial charm or
              Victorian elegance and clawfoot tubs, we have a home that fits your
              style. Schedule a tour and see for yourself.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#B45309] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#B45309]/20 hover:bg-[#92400E] transition-all duration-200"
              >
                Schedule a Tour
                <CalendarCheck className="h-5 w-5" />
              </Link>
              <Link
                href="/available-units"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#D6D3D1] px-8 py-4 text-base font-semibold text-[#292524] hover:border-[#B45309] hover:text-[#B45309] transition-colors duration-200"
              >
                Browse Available Units
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}

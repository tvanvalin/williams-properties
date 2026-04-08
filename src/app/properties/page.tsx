import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { properties } from "@/lib/properties";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Properties | Historic Apartments in Tacoma",
  description:
    "Explore 8 distinctive historic buildings in Tacoma, WA. From Victorian castles to industrial lofts, find your perfect character apartment with Williams Properties.",
};

export default function PropertiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1C1917] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B] mb-4">
              Our Portfolio
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAFAF9] max-w-3xl">
              Eight buildings. Over a century of character.
            </h1>
            <p className="mt-6 text-lg text-[#A8A29E] max-w-2xl">
              Each property in our portfolio has its own personality, history, and
              architectural style. Every apartment is personally designed to be
              unique — no two are alike.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {properties.map((prop, i) => (
              <AnimateIn key={prop.slug} delay={i * 0.08}>
                <Link
                  href={`/properties/${prop.slug}`}
                  className="group block rounded-2xl border border-[#D6D3D1] bg-white overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
                >
                  <div className="h-56 bg-gradient-to-br from-[#44403C] to-[#292524] relative">
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                        Est. {prop.yearBuilt}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="rounded-full bg-[#B45309]/90 px-3 py-1 text-xs font-semibold text-white">
                        {prop.priceRange}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-bold text-[#1C1917] group-hover:text-[#B45309] transition-colors font-[family-name:var(--font-playfair)]">
                          {prop.name}
                        </h2>
                        <div className="mt-2 flex items-center gap-1.5 text-sm text-[#57534E]">
                          <MapPin className="h-4 w-4" aria-hidden="true" />
                          {prop.address}
                        </div>
                      </div>
                      <span className="rounded-lg bg-[#F5F5F4] px-3 py-1.5 text-xs font-medium text-[#57534E]">
                        {prop.style}
                      </span>
                    </div>
                    <p className="mt-4 text-[#57534E] leading-relaxed">
                      {prop.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {prop.unitTypes.map((type) => (
                        <span
                          key={type}
                          className="rounded-full bg-[#FEF3C7] px-3 py-1 text-xs font-medium text-[#92400E]"
                        >
                          {type}
                        </span>
                      ))}
                      <span className="rounded-full bg-[#F5F5F4] px-3 py-1 text-xs text-[#57534E]">
                        {prop.petPolicy}
                      </span>
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-[#B45309] text-sm font-semibold">
                      View details
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

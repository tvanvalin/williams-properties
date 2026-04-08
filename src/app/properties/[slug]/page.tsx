import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Calendar, ArrowLeft, Check, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { properties, getPropertyBySlug, vacancies } from "@/lib/properties";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};
  return {
    title: `${property.name} | Apartments in Tacoma, WA`,
    description: `${property.description} Located at ${property.address}, Tacoma, WA. Built in ${property.yearBuilt}. ${property.priceRange}/month.`,
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const propertyVacancies = vacancies.filter(
    (v) => v.propertySlug === property.slug
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1C1917] py-20 lg:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, #B45309 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/properties"
            className="inline-flex items-center gap-1.5 text-sm text-[#A8A29E] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            All Properties
          </Link>
          <AnimateIn>
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-[#B45309]/20 px-3 py-1 text-xs font-semibold text-[#F59E0B]">
                {property.style}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-[#A8A29E]">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Built {property.yearBuilt}
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAFAF9]">
              {property.name}
            </h1>
            <div className="mt-4 flex items-center gap-1.5 text-lg text-[#A8A29E]">
              <MapPin className="h-5 w-5" aria-hidden="true" />
              {property.address}, {property.city}, {property.state}{" "}
              {property.zip}
            </div>
            <p className="mt-2 text-2xl font-bold text-[#F59E0B]">
              {property.priceRange}
              <span className="text-base font-normal text-[#A8A29E]">
                /month
              </span>
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <AnimateIn>
                <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-[#44403C] to-[#292524] mb-8" />
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1C1917] mb-4">
                  About {property.name}
                </h2>
                <p className="text-lg text-[#57534E] leading-relaxed">
                  {property.longDescription}
                </p>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1C1917] mt-10 mb-4">
                  Features & Amenities
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-[#292524]"
                    >
                      <Check className="h-5 w-5 text-[#B45309] shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </AnimateIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimateIn delay={0.15}>
                <div className="sticky top-24 space-y-6">
                  {/* Quick Info */}
                  <div className="rounded-2xl border border-[#D6D3D1] bg-white p-6">
                    <h3 className="font-semibold text-[#1C1917] text-lg mb-4">
                      Quick Info
                    </h3>
                    <dl className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-[#57534E]">Price Range</dt>
                        <dd className="font-semibold text-[#1C1917]">
                          {property.priceRange}
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-[#57534E]">Unit Types</dt>
                        <dd className="font-semibold text-[#1C1917]">
                          {property.unitTypes.join(", ")}
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-[#57534E]">Pet Policy</dt>
                        <dd className="font-semibold text-[#1C1917]">
                          {property.petPolicy}
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-[#57534E]">Built</dt>
                        <dd className="font-semibold text-[#1C1917]">
                          {property.yearBuilt}
                        </dd>
                      </div>
                    </dl>
                    <div className="mt-6 space-y-3">
                      <Link
                        href="/contact"
                        className="block w-full rounded-lg bg-[#B45309] py-3 text-center text-sm font-semibold text-white hover:bg-[#92400E] transition-colors"
                      >
                        Schedule a Tour
                      </Link>
                      <Link
                        href="/available-units"
                        className="block w-full rounded-lg border border-[#D6D3D1] py-3 text-center text-sm font-semibold text-[#292524] hover:bg-[#F5F5F4] transition-colors"
                      >
                        Check Availability
                      </Link>
                    </div>
                  </div>

                  {/* Included amenities */}
                  <div className="rounded-2xl border border-[#D6D3D1] bg-white p-6">
                    <h3 className="font-semibold text-[#1C1917] text-lg mb-4">
                      Included With Rent
                    </h3>
                    <ul className="space-y-2 text-sm text-[#57534E]">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600 shrink-0" aria-hidden="true" />
                        Water & sewer
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600 shrink-0" aria-hidden="true" />
                        Garbage & recycling
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600 shrink-0" aria-hidden="true" />
                        Heat
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600 shrink-0" aria-hidden="true" />
                        On-site laundry
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Available Units at This Property */}
      {propertyVacancies.length > 0 && (
        <section className="py-16 bg-[#F5F5F4]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateIn>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1C1917] mb-8">
                Available Units at {property.name}
              </h2>
            </AnimateIn>
            <div className="space-y-4">
              {propertyVacancies.map((v) => (
                <AnimateIn key={v.id}>
                  <div className="rounded-xl bg-white border border-[#D6D3D1] p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h3 className="font-bold text-[#1C1917]">
                        Unit {v.unit} &middot; {v.bedrooms}
                      </h3>
                      <p className="text-sm text-[#57534E] mt-1">
                        {v.sqft} sq ft &middot; {v.available}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-2xl font-bold text-[#B45309]">
                        ${v.price.toLocaleString()}
                        <span className="text-sm font-normal text-[#57534E]">
                          /mo
                        </span>
                      </p>
                      <Link
                        href="/contact"
                        className="rounded-lg bg-[#B45309] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#92400E] transition-colors"
                      >
                        Schedule Tour
                      </Link>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1C1917]">
              Interested in {property.name}?
            </h2>
            <p className="mt-4 text-lg text-[#57534E]">
              Schedule a tour to see the building in person and find the perfect
              apartment for you.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#B45309] px-7 py-3.5 text-base font-semibold text-white hover:bg-[#92400E] transition-colors"
              >
                Schedule a Tour
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ApartmentComplex",
            name: property.name,
            description: property.longDescription,
            address: {
              "@type": "PostalAddress",
              streetAddress: property.address,
              addressLocality: property.city,
              addressRegion: property.state,
              postalCode: property.zip,
              addressCountry: "US",
            },
            numberOfAvailableAccommodation: propertyVacancies.length,
            petsAllowed: property.petPolicy !== "No pets",
          }),
        }}
      />
    </>
  );
}

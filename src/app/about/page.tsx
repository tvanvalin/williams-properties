import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Family-Owned Since 1902",
  description:
    "Four generations of the Williams family have owned and operated properties in Tacoma, WA since 1902. Learn about our commitment to character, craftsmanship, and community.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1C1917] py-20 lg:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 30%, #B45309 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B] mb-4">
              Our Story
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAFAF9] max-w-3xl">
              Four generations of making Tacoma feel like home
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* 1902 */}
          <AnimateIn>
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#B45309]">
                  1902
                </span>
                <div className="h-px flex-1 bg-[#D6D3D1]" />
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1C1917] mb-4">
                Roots in Washington
              </h2>
              <p className="text-lg text-[#57534E] leading-relaxed">
                Williams Properties has roots dating back to 1902 when Dax
                Williams&apos; great-grandparents settled in Washington and began
                purchasing investment properties, including the land the Capitol
                Mall in Olympia sits on today.
              </p>
            </div>
          </AnimateIn>

          {/* 1939 */}
          <AnimateIn>
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#B45309]">
                  1939
                </span>
                <div className="h-px flex-1 bg-[#D6D3D1]" />
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1C1917] mb-4">
                The first apartment building
              </h2>
              <p className="text-lg text-[#57534E] leading-relaxed">
                The next generation purchased the family&apos;s first apartment
                building in Tacoma with the firm belief that apartments were the
                homes of the future in such a bustling city.
              </p>
            </div>
          </AnimateIn>

          {/* 1961 */}
          <AnimateIn>
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#B45309]">
                  1961
                </span>
                <div className="h-px flex-1 bg-[#D6D3D1]" />
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1C1917] mb-4">
                The Brentwood joins the family
              </h2>
              <p className="text-lg text-[#57534E] leading-relaxed">
                Rex and Frances Williams purchased the Brentwood Apartments,
                which remains the longest-held property in the Williams family
                portfolio to this day.
              </p>
            </div>
          </AnimateIn>

          {/* 2008 */}
          <AnimateIn>
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#B45309]">
                  2008
                </span>
                <div className="h-px flex-1 bg-[#D6D3D1]" />
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1C1917] mb-4">
                The next generation takes the reins
              </h2>
              <p className="text-lg text-[#57534E] leading-relaxed">
                Dax and Chaundra Williams succeeded their parents in management
                of the company. Dax, who started working for the company at
                fourteen doing landscaping, brought a fresh perspective as an art
                major from the University of Washington — combining the work
                ethic he learned from the ground up with a designer&apos;s eye
                for making each apartment unique.
              </p>
            </div>
          </AnimateIn>

          {/* Today */}
          <AnimateIn>
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#B45309]">
                  Today
                </span>
                <div className="h-px flex-1 bg-[#D6D3D1]" />
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1C1917] mb-4">
                Character apartments, direct owner care
              </h2>
              <p className="text-lg text-[#57534E] leading-relaxed mb-6">
                Today, Williams Properties LLC is co-operated by Dax and
                Chaundra Williams with their mother, Frances Williams. Dax lives
                in Tacoma and oversees the Tacoma properties; Chaundra and
                Frances live in Spokane and oversee the Spokane properties.
              </p>
              <p className="text-lg text-[#57534E] leading-relaxed">
                Dax still personally selects the colors, fixtures, flooring, and
                finishes for every apartment. He firmly believes this attention
                to detail is what distinguishes a space from an apartment to a
                home. The family doesn&apos;t use outside management firms and
                won&apos;t manage anyone else&apos;s properties — so they can
                focus exclusively on their own.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-[#1C1917]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <AnimateIn>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F59E0B] mb-4">
              Our Philosophy
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-[#FAFAF9] mb-8">
              Your home is your sanctuary
            </h2>
            <p className="text-lg text-[#D6D3D1] leading-relaxed max-w-2xl mx-auto">
              While most of us would love to drive a classic car, few of us do on
              a regular basis given they require a lot of upkeep. Vintage
              buildings are no different. Where the Williams family strives to
              set themselves apart is by being incredibly hands-on owners.
            </p>
            <p className="mt-6 text-lg text-[#D6D3D1] leading-relaxed max-w-2xl mx-auto">
              If anything goes wrong in your apartment, you&apos;re
              communicating directly with the long-term owners of the building,
              not the newest management company the owner hired.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1C1917]">
              Ready to find your home?
            </h2>
            <p className="mt-4 text-lg text-[#57534E]">
              Browse our available units or schedule a tour to see our
              properties in person.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/available-units"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#B45309] px-7 py-3.5 text-base font-semibold text-white hover:bg-[#92400E] transition-colors"
              >
                View Available Units
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#D6D3D1] px-7 py-3.5 text-base font-semibold text-[#292524] hover:border-[#B45309] hover:text-[#B45309] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}

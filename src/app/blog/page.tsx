import { AnimateIn } from "@/components/AnimateIn";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Tacoma Living & Apartment Tips",
  description:
    "Tips for apartment living in Tacoma, WA. Neighborhood guides, renter advice, and stories from Williams Properties' historic buildings.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#1C1917] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B] mb-4">
              Blog
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAFAF9] max-w-3xl">
              Stories & guides from Tacoma
            </h1>
            <p className="mt-6 text-lg text-[#A8A29E] max-w-2xl">
              Neighborhood guides, apartment living tips, and stories from our
              historic buildings.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <AnimateIn>
            <div className="rounded-2xl border border-[#D6D3D1] bg-white p-12">
              <p className="font-[family-name:var(--font-playfair)] text-4xl text-[#D6D3D1] mb-4">
                Coming Soon
              </p>
              <h2 className="text-xl font-bold text-[#1C1917]">
                We&apos;re working on great content
              </h2>
              <p className="mt-4 text-[#57534E] max-w-md mx-auto">
                Check back soon for guides to Tacoma&apos;s neighborhoods,
                apartment living tips, and stories from our historic buildings.
              </p>
              <Link
                href="/available-units"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#B45309] px-6 py-3 text-sm font-semibold text-white hover:bg-[#92400E] transition-colors"
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

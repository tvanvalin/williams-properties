import Link from "next/link";
import { Calculator, Search, DollarSign, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Tools | Apartment Calculators",
  description:
    "Free apartment tools: rent affordability calculator, apartment finder quiz, and move-in cost calculator. Find your perfect Tacoma apartment with Williams Properties.",
};

const tools = [
  {
    href: "/resources/rent-calculator",
    icon: Calculator,
    title: "Rent Affordability Calculator",
    description:
      "Enter your income and see which apartments fit your budget. Based on the recommended 30% rule.",
    tag: "Most Popular",
  },
  {
    href: "/resources/find-your-apartment",
    icon: Search,
    title: "Find Your Apartment Quiz",
    description:
      "Answer a few questions about your lifestyle and preferences, and we'll match you with the perfect building.",
    tag: "Interactive",
  },
  {
    href: "/resources/move-in-calculator",
    icon: DollarSign,
    title: "Move-In Cost Calculator",
    description:
      "Know exactly what you'll need on move-in day. We break down every cost so there are no surprises.",
    tag: "Transparency",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-[#1C1917] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B] mb-4">
              Resources
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAFAF9] max-w-3xl">
              Tools to help you find home
            </h1>
            <p className="mt-6 text-lg text-[#A8A29E] max-w-2xl">
              Free calculators and tools to help you plan your move and find the
              right apartment for your lifestyle and budget.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, i) => (
              <AnimateIn key={tool.href} delay={i * 0.1}>
                <Link
                  href={tool.href}
                  className="group flex flex-col h-full rounded-2xl border border-[#D6D3D1] bg-white p-8 hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
                >
                  <span className="inline-block self-start rounded-full bg-[#FEF3C7] px-3 py-1 text-xs font-semibold text-[#92400E] mb-4">
                    {tool.tag}
                  </span>
                  <div className="rounded-xl bg-[#F5F5F4] p-4 w-fit mb-6">
                    <tool.icon className="h-8 w-8 text-[#B45309]" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold text-[#1C1917] group-hover:text-[#B45309] transition-colors font-[family-name:var(--font-playfair)]">
                    {tool.title}
                  </h2>
                  <p className="mt-3 text-[#57534E] flex-1">
                    {tool.description}
                  </p>
                  <div className="mt-6 flex items-center gap-1.5 text-[#B45309] text-sm font-semibold">
                    Try it now
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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

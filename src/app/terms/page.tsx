import { AnimateIn } from "@/components/AnimateIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Williams Properties terms of service for website usage.",
};

export default function TermsPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <AnimateIn>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1C1917] mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-lg prose-stone max-w-none">
            <p className="text-[#57534E] leading-relaxed">
              <strong>Last Updated:</strong> April 2026
            </p>
            <p className="text-[#57534E] leading-relaxed mt-4">
              By accessing and using this website (www.williamsproperties.com), you accept and agree to be bound by the terms and conditions of this agreement.
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1C1917] mt-8 mb-4">Use of Website</h2>
            <p className="text-[#57534E] leading-relaxed">
              This website is provided for informational purposes about Williams Properties LLC and our available rental properties. All information regarding pricing, availability, and property features is subject to change without notice.
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1C1917] mt-8 mb-4">Equal Housing</h2>
            <p className="text-[#57534E] leading-relaxed">
              Williams Properties LLC is committed to compliance with all federal, state, and local fair housing laws. We do not discriminate against any person because of race, color, religion, national origin, sex, familial status, disability, or any other protected class.
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1C1917] mt-8 mb-4">Contact</h2>
            <p className="text-[#57534E] leading-relaxed">
              For questions regarding these terms, contact us at <a href="mailto:office@williamsproperties.com" className="text-[#B45309] hover:text-[#92400E]">office@williamsproperties.com</a>.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

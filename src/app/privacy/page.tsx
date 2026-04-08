import { AnimateIn } from "@/components/AnimateIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Williams Properties privacy policy. How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <AnimateIn>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1C1917] mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-lg prose-stone max-w-none">
            <p className="text-[#57534E] leading-relaxed">
              <strong>Last Updated:</strong> April 2026
            </p>
            <p className="text-[#57534E] leading-relaxed mt-4">
              Williams Properties LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website at www.williamsproperties.com.
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1C1917] mt-8 mb-4">Information We Collect</h2>
            <p className="text-[#57534E] leading-relaxed">
              We may collect information you voluntarily provide, including your name, email address, phone number, and message content when you use our contact form or email us directly.
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1C1917] mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-[#57534E] leading-relaxed">
              We use the information you provide solely to respond to your inquiries, schedule tours, process rental applications, and communicate about our properties. We will never sell or share your personal information with third parties for marketing purposes.
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1C1917] mt-8 mb-4">Contact Us</h2>
            <p className="text-[#57534E] leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at <a href="mailto:office@williamsproperties.com" className="text-[#B45309] hover:text-[#92400E]">office@williamsproperties.com</a> or call <a href="tel:2536273566" className="text-[#B45309] hover:text-[#92400E]">253-627-3566</a>.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

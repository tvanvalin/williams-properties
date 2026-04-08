import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Schedule a Tour",
  description:
    "Contact Williams Properties to schedule a tour, ask about available apartments, or submit a maintenance request. Call 253-627-3566 or visit us at 311 North Yakima Avenue, Tacoma, WA.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#1C1917] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B] mb-4">
              Get in Touch
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAFAF9] max-w-3xl">
              We&apos;d love to hear from you
            </h1>
            <p className="mt-6 text-lg text-[#A8A29E] max-w-2xl">
              Whether you&apos;re looking for your next apartment, have questions
              about our properties, or need to reach our maintenance team —
              we&apos;re here to help.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimateIn>
                <div className="space-y-8">
                  <div>
                    <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1C1917] mb-6">
                      Contact Information
                    </h2>
                    <dl className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-[#FEF3C7] p-3">
                          <MapPin className="h-5 w-5 text-[#B45309]" aria-hidden="true" />
                        </div>
                        <div>
                          <dt className="font-semibold text-[#1C1917]">Office</dt>
                          <dd className="mt-1 text-[#57534E]">
                            311 North Yakima Avenue, Suite 101
                            <br />
                            Tacoma, WA 98403
                          </dd>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-[#FEF3C7] p-3">
                          <Phone className="h-5 w-5 text-[#B45309]" aria-hidden="true" />
                        </div>
                        <div>
                          <dt className="font-semibold text-[#1C1917]">Phone</dt>
                          <dd className="mt-1">
                            <a
                              href="tel:2536273566"
                              className="text-[#B45309] hover:text-[#92400E] transition-colors"
                            >
                              253-627-3566
                            </a>
                          </dd>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-[#FEF3C7] p-3">
                          <Mail className="h-5 w-5 text-[#B45309]" aria-hidden="true" />
                        </div>
                        <div>
                          <dt className="font-semibold text-[#1C1917]">Email</dt>
                          <dd className="mt-1 space-y-1">
                            <a
                              href="mailto:office@williamsproperties.com"
                              className="block text-[#B45309] hover:text-[#92400E] transition-colors"
                            >
                              office@williamsproperties.com
                            </a>
                            <p className="text-xs text-[#57534E]">General inquiries & tours</p>
                            <a
                              href="mailto:maintenance@williamsproperties.com"
                              className="block text-[#B45309] hover:text-[#92400E] transition-colors mt-2"
                            >
                              maintenance@williamsproperties.com
                            </a>
                            <p className="text-xs text-[#57534E]">Maintenance requests</p>
                          </dd>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-[#FEF3C7] p-3">
                          <Clock className="h-5 w-5 text-[#B45309]" aria-hidden="true" />
                        </div>
                        <div>
                          <dt className="font-semibold text-[#1C1917]">Office Hours</dt>
                          <dd className="mt-1 text-[#57534E]">
                            Monday - Friday: 9:00 AM - 5:00 PM
                            <br />
                            Weekends: By appointment
                          </dd>
                        </div>
                      </div>
                    </dl>
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimateIn delay={0.1}>
                <div className="rounded-2xl border border-[#D6D3D1] bg-white p-8">
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1C1917] mb-2">
                    Send us a message
                  </h2>
                  <p className="text-sm text-[#57534E] mb-8">
                    Fill out the form below and we&apos;ll get back to you
                    within one business day.
                  </p>
                  <form className="space-y-6" action="mailto:office@williamsproperties.com" method="post" encType="text/plain">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-[#292524] mb-2"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full rounded-lg border border-[#D6D3D1] px-4 py-3 text-[#292524] placeholder-[#78716C] focus:border-[#B45309] focus:ring-2 focus:ring-[#B45309]/20 focus:outline-none transition-colors"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-[#292524] mb-2"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full rounded-lg border border-[#D6D3D1] px-4 py-3 text-[#292524] placeholder-[#78716C] focus:border-[#B45309] focus:ring-2 focus:ring-[#B45309]/20 focus:outline-none transition-colors"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#292524] mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-[#D6D3D1] px-4 py-3 text-[#292524] placeholder-[#78716C] focus:border-[#B45309] focus:ring-2 focus:ring-[#B45309]/20 focus:outline-none transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#292524] mb-2"
                      >
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full rounded-lg border border-[#D6D3D1] px-4 py-3 text-[#292524] placeholder-[#78716C] focus:border-[#B45309] focus:ring-2 focus:ring-[#B45309]/20 focus:outline-none transition-colors"
                        placeholder="(253) 555-0123"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-sm font-medium text-[#292524] mb-2"
                      >
                        I&apos;m interested in
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        className="w-full rounded-lg border border-[#D6D3D1] px-4 py-3 text-[#292524] focus:border-[#B45309] focus:ring-2 focus:ring-[#B45309]/20 focus:outline-none transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="tour">Scheduling a tour</option>
                        <option value="availability">Checking availability</option>
                        <option value="application">Application process</option>
                        <option value="general">General question</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#292524] mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full rounded-lg border border-[#D6D3D1] px-4 py-3 text-[#292524] placeholder-[#78716C] focus:border-[#B45309] focus:ring-2 focus:ring-[#B45309]/20 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us what you're looking for..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-[#B45309] py-3.5 text-base font-semibold text-white hover:bg-[#92400E] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B45309]"
                    >
                      Send Message
                    </button>
                    <p className="text-xs text-[#78716C] text-center">
                      We respect your privacy and will never share your information.
                    </p>
                  </form>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

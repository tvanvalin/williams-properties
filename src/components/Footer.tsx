import Link from "next/link";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1C1917] text-[#FAFAF9]" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#FAFAF9]">
                Williams{" "}
              </span>
              <span className="font-[family-name:var(--font-playfair)] text-2xl font-light text-[#F59E0B]">
                Properties
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#A8A29E]">
              Family-owned since 1902. Character apartments in
              Tacoma&apos;s most beautiful historic buildings.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://facebook.com/WilliamsProperties"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#292524] p-2.5 text-[#A8A29E] hover:bg-[#44403C] hover:text-white transition-colors"
                aria-label="Visit us on Facebook"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F59E0B]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: "/available-units", label: "Available Units" },
                { href: "/properties", label: "Our Properties" },
                { href: "/about", label: "Our Story" },
                { href: "/contact", label: "Contact Us" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A8A29E] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F59E0B]">
              Our Properties
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: "/properties/the-biltmore", label: "The Biltmore" },
                { href: "/properties/the-brentwood", label: "The Brentwood" },
                { href: "/properties/the-lewis-and-clark", label: "The Lewis & Clark" },
                { href: "/properties/the-hampshire", label: "The Hampshire" },
                { href: "/properties/the-brickworks", label: "The Brickworks" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A8A29E] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F59E0B]">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#B45309]" aria-hidden="true" />
                <span className="text-sm text-[#A8A29E]">
                  311 North Yakima Avenue, Suite 101
                  <br />
                  Tacoma, WA 98403
                </span>
              </li>
              <li>
                <a
                  href="tel:2536273566"
                  className="flex items-center gap-3 text-sm text-[#A8A29E] hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5 shrink-0 text-[#B45309]" aria-hidden="true" />
                  253-627-3566
                </a>
              </li>
              <li>
                <a
                  href="mailto:office@williamsproperties.com"
                  className="flex items-center gap-3 text-sm text-[#A8A29E] hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5 shrink-0 text-[#B45309]" aria-hidden="true" />
                  office@williamsproperties.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-[#44403C] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#78716C]">
            &copy; {new Date().getFullYear()} Williams Properties, LLC. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-[#78716C] hover:text-[#A8A29E] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[#78716C] hover:text-[#A8A29E] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#78716C]">Equal Housing Opportunity</span>
          </div>
        </div>
      </div>

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.williamsproperties.com",
            name: "Williams Properties",
            description:
              "Family-owned apartment rental company in Tacoma, WA specializing in historic, character-rich apartments since 1902.",
            url: "https://www.williamsproperties.com",
            telephone: "+1-253-627-3566",
            email: "office@williamsproperties.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "311 North Yakima Avenue, Suite 101",
              addressLocality: "Tacoma",
              addressRegion: "WA",
              postalCode: "98403",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 47.2581,
              longitude: -122.4432,
            },
            sameAs: [
              "https://facebook.com/WilliamsProperties",
              "https://www.yelp.com/biz/williams-properties-tacoma-2",
            ],
            openingHours: "Mo-Fr 09:00-17:00",
            priceRange: "$1,300 - $3,250/month",
          }),
        }}
      />
    </footer>
  );
}

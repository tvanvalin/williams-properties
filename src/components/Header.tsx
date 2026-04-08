"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/available-units", label: "Available Units" },
  { href: "/properties", label: "Our Properties" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#D6D3D1]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl font-bold text-[#1C1917] tracking-tight">
            Williams
          </span>
          <span className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl font-light text-[#B45309] tracking-tight">
            Properties
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-[#57534E] hover:text-[#B45309] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:2536273566"
            className="flex items-center gap-2 text-[15px] font-medium text-[#57534E] hover:text-[#B45309] transition-colors"
          >
            <Phone className="h-4 w-4" />
            253-627-3566
          </a>
          <Link
            href="/contact"
            className="rounded-lg bg-[#B45309] px-5 py-2.5 text-[15px] font-semibold text-white shadow-sm hover:bg-[#92400E] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B45309]"
          >
            Schedule a Tour
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden rounded-md p-2.5 text-[#57534E] hover:bg-[#F5F5F4]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#D6D3D1] bg-[#FAF7F2]">
          <div className="space-y-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-4 py-3 text-base font-medium text-[#292524] hover:bg-[#F5F5F4] hover:text-[#B45309] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:2536273566"
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-base font-medium text-[#292524] hover:bg-[#F5F5F4]"
            >
              <Phone className="h-5 w-5" />
              253-627-3566
            </a>
            <div className="pt-2">
              <Link
                href="/contact"
                className="block w-full rounded-lg bg-[#B45309] px-4 py-3 text-center text-base font-semibold text-white hover:bg-[#92400E] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

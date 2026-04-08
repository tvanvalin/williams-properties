import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-[#FAF7F2]">
      <div className="text-center px-6 py-24">
        <p className="font-[family-name:var(--font-playfair)] text-8xl font-bold text-[#D6D3D1]">
          404
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1C1917]">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-[#57534E] max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back home.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#B45309] px-6 py-3 text-base font-semibold text-white hover:bg-[#92400E] transition-colors"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>
          <Link
            href="/available-units"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#D6D3D1] px-6 py-3 text-base font-semibold text-[#292524] hover:bg-[#F5F5F4] transition-colors"
          >
            View Available Units
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

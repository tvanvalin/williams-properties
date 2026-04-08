"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, ArrowLeft, Check, AlertTriangle } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { properties } from "@/lib/properties";

export default function RentCalculatorPage() {
  const [income, setIncome] = useState("");
  const [incomeType, setIncomeType] = useState<"annual" | "monthly">("annual");
  const [debts, setDebts] = useState("");
  const [calculated, setCalculated] = useState(false);

  const monthlyIncome =
    incomeType === "annual"
      ? parseFloat(income || "0") / 12
      : parseFloat(income || "0");

  const monthlyDebts = parseFloat(debts || "0");
  const maxRent30 = monthlyIncome * 0.3;
  const maxRentAfterDebts = (monthlyIncome - monthlyDebts) * 0.3;
  const recommendedMax = Math.min(maxRent30, maxRentAfterDebts);

  // Parse price ranges to find matches
  const matchedProperties = properties.filter((p) => {
    const minPrice = parseInt(p.priceRange.replace(/[^0-9]/g, ""));
    return minPrice <= recommendedMax;
  });

  const handleCalculate = () => {
    if (parseFloat(income) > 0) {
      setCalculated(true);
    }
  };

  return (
    <>
      <section className="bg-[#1C1917] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-sm text-[#A8A29E] hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            All Resources
          </Link>
          <AnimateIn>
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-xl bg-[#B45309]/20 p-3">
                <Calculator className="h-8 w-8 text-[#F59E0B]" aria-hidden="true" />
              </div>
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAFAF9]">
                Rent Affordability Calculator
              </h1>
            </div>
            <p className="text-lg text-[#A8A29E] max-w-2xl">
              Find out how much rent you can comfortably afford based on the
              recommended 30% rule — and see which Williams Properties apartments
              fit your budget.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Calculator */}
            <div className="lg:col-span-3">
              <AnimateIn>
                <div className="rounded-2xl border border-[#D6D3D1] bg-white p-8">
                  <h2 className="text-xl font-bold text-[#1C1917] mb-6">
                    Enter your financial details
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="income"
                        className="block text-sm font-medium text-[#292524] mb-2"
                      >
                        Gross income (before taxes)
                      </label>
                      <div className="flex gap-3">
                        <div className="relative flex-1">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#78716C]">
                            $
                          </span>
                          <input
                            type="number"
                            id="income"
                            value={income}
                            onChange={(e) => {
                              setIncome(e.target.value);
                              setCalculated(false);
                            }}
                            className="w-full rounded-lg border border-[#D6D3D1] pl-8 pr-4 py-3 text-[#292524] placeholder-[#78716C] focus:border-[#B45309] focus:ring-2 focus:ring-[#B45309]/20 focus:outline-none"
                            placeholder="75,000"
                          />
                        </div>
                        <select
                          value={incomeType}
                          onChange={(e) => {
                            setIncomeType(
                              e.target.value as "annual" | "monthly"
                            );
                            setCalculated(false);
                          }}
                          className="rounded-lg border border-[#D6D3D1] px-4 py-3 text-[#292524] focus:border-[#B45309] focus:ring-2 focus:ring-[#B45309]/20 focus:outline-none"
                          aria-label="Income frequency"
                        >
                          <option value="annual">Per year</option>
                          <option value="monthly">Per month</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="debts"
                        className="block text-sm font-medium text-[#292524] mb-2"
                      >
                        Monthly debt payments (optional)
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#78716C]">
                          $
                        </span>
                        <input
                          type="number"
                          id="debts"
                          value={debts}
                          onChange={(e) => {
                            setDebts(e.target.value);
                            setCalculated(false);
                          }}
                          className="w-full rounded-lg border border-[#D6D3D1] pl-8 pr-4 py-3 text-[#292524] placeholder-[#78716C] focus:border-[#B45309] focus:ring-2 focus:ring-[#B45309]/20 focus:outline-none"
                          placeholder="500"
                        />
                      </div>
                      <p className="mt-1.5 text-xs text-[#78716C]">
                        Car payments, student loans, credit cards, etc.
                      </p>
                    </div>

                    <button
                      onClick={handleCalculate}
                      disabled={!income || parseFloat(income) <= 0}
                      className="w-full rounded-lg bg-[#B45309] py-3.5 text-base font-semibold text-white hover:bg-[#92400E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Calculate My Budget
                    </button>
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* How it works */}
            <div className="lg:col-span-2">
              <AnimateIn delay={0.15}>
                <div className="rounded-2xl bg-[#F5F5F4] p-6">
                  <h3 className="font-semibold text-[#1C1917] mb-4">
                    How it works
                  </h3>
                  <ul className="space-y-3 text-sm text-[#57534E]">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 text-[#B45309] shrink-0" aria-hidden="true" />
                      The 30% rule recommends spending no more than 30% of gross
                      income on rent
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 text-[#B45309] shrink-0" aria-hidden="true" />
                      We factor in your existing debts to give a realistic
                      recommendation
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 text-[#B45309] shrink-0" aria-hidden="true" />
                      Williams Properties apartments include water, sewer,
                      garbage, and heat — saving you $100-200/month vs. other
                      rentals
                    </li>
                  </ul>
                </div>
              </AnimateIn>
            </div>
          </div>

          {/* Results */}
          {calculated && (
            <AnimateIn>
              <div className="mt-12">
                <div className="rounded-2xl border-2 border-[#B45309] bg-white p-8">
                  <h2 className="text-2xl font-bold text-[#1C1917] font-[family-name:var(--font-playfair)] mb-6">
                    Your Results
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    <div className="rounded-xl bg-[#FEF3C7] p-6 text-center">
                      <p className="text-sm text-[#92400E] mb-1">Monthly Income</p>
                      <p className="text-3xl font-bold text-[#1C1917]">
                        ${Math.round(monthlyIncome).toLocaleString()}
                      </p>
                    </div>
                    <div className="rounded-xl bg-[#FEF3C7] p-6 text-center">
                      <p className="text-sm text-[#92400E] mb-1">
                        Recommended Max Rent
                      </p>
                      <p className="text-3xl font-bold text-[#B45309]">
                        ${Math.round(recommendedMax).toLocaleString()}
                      </p>
                    </div>
                    <div className="rounded-xl bg-[#F5F5F4] p-6 text-center">
                      <p className="text-sm text-[#57534E] mb-1">
                        After Rent + Debts
                      </p>
                      <p className="text-3xl font-bold text-[#1C1917]">
                        $
                        {Math.round(
                          monthlyIncome - recommendedMax - monthlyDebts
                        ).toLocaleString()}
                      </p>
                      <p className="text-xs text-[#57534E] mt-1">remaining</p>
                    </div>
                  </div>

                  {recommendedMax < 1300 && (
                    <div className="flex items-start gap-3 rounded-xl bg-[#FEF2F2] border border-red-200 p-4 mb-8">
                      <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-sm text-red-700">
                        Based on the 30% rule, our apartments may be above your
                        recommended budget. However, remember that our rent
                        includes water, sewer, garbage, and heat — which could
                        save you $100-200/month compared to other rentals. Feel
                        free to contact us to discuss options.
                      </p>
                    </div>
                  )}

                  {matchedProperties.length > 0 && (
                    <>
                      <h3 className="text-lg font-bold text-[#1C1917] mb-4">
                        Properties within your budget
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {matchedProperties.map((p) => (
                          <Link
                            key={p.slug}
                            href={`/properties/${p.slug}`}
                            className="group flex items-center gap-4 rounded-xl border border-[#D6D3D1] p-4 hover:border-[#B45309] transition-colors"
                          >
                            <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-[#44403C] to-[#292524] shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-[#1C1917] group-hover:text-[#B45309] transition-colors">
                                {p.name}
                              </p>
                              <p className="text-sm text-[#57534E]">
                                {p.priceRange}
                              </p>
                              <p className="text-xs text-[#78716C]">
                                {p.unitTypes.join(", ")}
                              </p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-[#D6D3D1] group-hover:text-[#B45309] transition-colors shrink-0" />
                          </Link>
                        ))}
                      </div>
                    </>
                  )}

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/available-units"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#B45309] px-6 py-3 text-sm font-semibold text-white hover:bg-[#92400E] transition-colors"
                    >
                      View Available Units
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#D6D3D1] px-6 py-3 text-sm font-semibold text-[#292524] hover:bg-[#F5F5F4] transition-colors"
                    >
                      Schedule a Tour
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateIn>
          )}
        </div>
      </section>
    </>
  );
}

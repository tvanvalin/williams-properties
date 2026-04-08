"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, DollarSign } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { properties } from "@/lib/properties";

export default function MoveInCalculatorPage() {
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [unitType, setUnitType] = useState("");
  const [hasPet, setHasPet] = useState("none");
  const [calculated, setCalculated] = useState(false);

  // Estimate rent based on building and unit type
  const getRentEstimate = () => {
    const prop = properties.find((p) => p.slug === selectedBuilding);
    if (!prop) return 0;
    const range = prop.priceRange;
    const numbers = range.match(/\d[\d,]*/g)?.map((n) => parseInt(n.replace(",", ""))) || [0];

    // Use lower end for studios/1BR, upper for 2BR+
    if (unitType === "studio" || unitType === "1br") return numbers[0] || 1500;
    if (unitType === "3br") return numbers[numbers.length - 1] || 3000;
    return Math.round(((numbers[0] || 1500) + (numbers[numbers.length - 1] || 2500)) / 2);
  };

  const rent = getRentEstimate();
  const securityDeposit = rent; // typically equal to one month's rent
  const petDeposit = hasPet === "cat" ? 300 : hasPet === "dog" ? 500 : 0;
  const petRent = hasPet === "cat" ? 25 : hasPet === "dog" ? 50 : 0;
  const estimatedElectric = unitType === "studio" ? 50 : unitType === "1br" ? 65 : unitType === "2br" ? 85 : 110;
  const rentersInsurance = 15; // approximate monthly
  const totalMoveIn = rent + securityDeposit + petDeposit;
  const totalMonthly = rent + petRent + estimatedElectric + rentersInsurance;

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
                <DollarSign className="h-8 w-8 text-[#F59E0B]" aria-hidden="true" />
              </div>
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAFAF9]">
                Move-In Cost Calculator
              </h1>
            </div>
            <p className="text-lg text-[#A8A29E] max-w-2xl">
              No surprises. See exactly what you&apos;ll need on move-in day,
              plus your estimated monthly costs.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Inputs */}
            <AnimateIn>
              <div className="rounded-2xl border border-[#D6D3D1] bg-white p-8">
                <h2 className="text-xl font-bold text-[#1C1917] mb-6">
                  Tell us about your move
                </h2>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="building"
                      className="block text-sm font-medium text-[#292524] mb-2"
                    >
                      Which building?
                    </label>
                    <select
                      id="building"
                      value={selectedBuilding}
                      onChange={(e) => {
                        setSelectedBuilding(e.target.value);
                        setCalculated(false);
                      }}
                      className="w-full rounded-lg border border-[#D6D3D1] px-4 py-3 text-[#292524] focus:border-[#B45309] focus:ring-2 focus:ring-[#B45309]/20 focus:outline-none"
                    >
                      <option value="">Select a building</option>
                      {properties.map((p) => (
                        <option key={p.slug} value={p.slug}>
                          {p.name} — {p.priceRange}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="unitType"
                      className="block text-sm font-medium text-[#292524] mb-2"
                    >
                      Unit type
                    </label>
                    <select
                      id="unitType"
                      value={unitType}
                      onChange={(e) => {
                        setUnitType(e.target.value);
                        setCalculated(false);
                      }}
                      className="w-full rounded-lg border border-[#D6D3D1] px-4 py-3 text-[#292524] focus:border-[#B45309] focus:ring-2 focus:ring-[#B45309]/20 focus:outline-none"
                    >
                      <option value="">Select unit type</option>
                      <option value="studio">Studio</option>
                      <option value="1br">1 Bedroom</option>
                      <option value="2br">2 Bedroom</option>
                      <option value="3br">3 Bedroom</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="pets"
                      className="block text-sm font-medium text-[#292524] mb-2"
                    >
                      Pets?
                    </label>
                    <select
                      id="pets"
                      value={hasPet}
                      onChange={(e) => {
                        setHasPet(e.target.value);
                        setCalculated(false);
                      }}
                      className="w-full rounded-lg border border-[#D6D3D1] px-4 py-3 text-[#292524] focus:border-[#B45309] focus:ring-2 focus:ring-[#B45309]/20 focus:outline-none"
                    >
                      <option value="none">No pets</option>
                      <option value="cat">Cat(s)</option>
                      <option value="dog">Dog(s) — Lewis &amp; Clark only</option>
                    </select>
                  </div>

                  <button
                    onClick={() => setCalculated(true)}
                    disabled={!selectedBuilding || !unitType}
                    className="w-full rounded-lg bg-[#B45309] py-3.5 text-base font-semibold text-white hover:bg-[#92400E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Calculate Costs
                  </button>
                </div>
              </div>
            </AnimateIn>

            {/* Results */}
            <AnimateIn delay={0.1}>
              {calculated ? (
                <div className="space-y-6">
                  {/* Move-in costs */}
                  <div className="rounded-2xl border-2 border-[#B45309] bg-white p-8">
                    <h3 className="text-lg font-bold text-[#1C1917] mb-4">
                      Move-In Day Costs
                    </h3>
                    <dl className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-[#F5F5F4]">
                        <dt className="text-[#57534E]">First month&apos;s rent</dt>
                        <dd className="font-semibold text-[#1C1917]">
                          ${rent.toLocaleString()}
                        </dd>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-[#F5F5F4]">
                        <dt className="text-[#57534E]">Security deposit</dt>
                        <dd className="font-semibold text-[#1C1917]">
                          ${securityDeposit.toLocaleString()}
                        </dd>
                      </div>
                      {petDeposit > 0 && (
                        <div className="flex justify-between items-center py-2 border-b border-[#F5F5F4]">
                          <dt className="text-[#57534E]">Pet deposit</dt>
                          <dd className="font-semibold text-[#1C1917]">
                            ${petDeposit.toLocaleString()}
                          </dd>
                        </div>
                      )}
                      <div className="flex justify-between items-center py-3">
                        <dt className="text-lg font-bold text-[#1C1917]">
                          Total due at move-in
                        </dt>
                        <dd className="text-2xl font-bold text-[#B45309]">
                          ${totalMoveIn.toLocaleString()}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {/* Monthly costs */}
                  <div className="rounded-2xl border border-[#D6D3D1] bg-white p-8">
                    <h3 className="text-lg font-bold text-[#1C1917] mb-4">
                      Estimated Monthly Costs
                    </h3>
                    <dl className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-[#F5F5F4]">
                        <dt className="text-[#57534E]">Rent</dt>
                        <dd className="font-semibold text-[#1C1917]">
                          ${rent.toLocaleString()}
                        </dd>
                      </div>
                      {petRent > 0 && (
                        <div className="flex justify-between items-center py-2 border-b border-[#F5F5F4]">
                          <dt className="text-[#57534E]">Pet rent</dt>
                          <dd className="font-semibold text-[#1C1917]">
                            ${petRent}
                          </dd>
                        </div>
                      )}
                      <div className="flex justify-between items-center py-2 border-b border-[#F5F5F4]">
                        <dt className="text-[#57534E]">
                          Electricity (est.)
                        </dt>
                        <dd className="font-semibold text-[#1C1917]">
                          ~${estimatedElectric}
                        </dd>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-[#F5F5F4]">
                        <dt className="text-[#57534E]">
                          Renter&apos;s insurance (est.)
                        </dt>
                        <dd className="font-semibold text-[#1C1917]">
                          ~${rentersInsurance}
                        </dd>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-[#F5F5F4]">
                        <dt className="text-[#57534E] text-green-700 font-medium">
                          Water, sewer, garbage, heat
                        </dt>
                        <dd className="font-semibold text-green-700">
                          Included!
                        </dd>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <dt className="text-lg font-bold text-[#1C1917]">
                          Est. total monthly
                        </dt>
                        <dd className="text-2xl font-bold text-[#B45309]">
                          ~${totalMonthly.toLocaleString()}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <p className="text-xs text-[#78716C]">
                    * Estimates are approximate. Actual amounts may vary. Security
                    deposit and pet deposit/rent amounts are subject to confirmation.
                    Contact us for exact figures.
                  </p>

                  <div className="flex gap-3">
                    <Link
                      href="/contact"
                      className="flex-1 rounded-lg bg-[#B45309] py-3 text-center text-sm font-semibold text-white hover:bg-[#92400E] transition-colors"
                    >
                      Schedule a Tour
                    </Link>
                    <Link
                      href="/available-units"
                      className="flex-1 rounded-lg border border-[#D6D3D1] py-3 text-center text-sm font-semibold text-[#292524] hover:bg-[#F5F5F4] transition-colors"
                    >
                      View Available
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl bg-[#F5F5F4] p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
                  <DollarSign className="h-12 w-12 text-[#D6D3D1] mb-4" aria-hidden="true" />
                  <p className="text-[#57534E]">
                    Select a building and unit type, then click Calculate to see
                    your estimated costs.
                  </p>
                </div>
              )}
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}

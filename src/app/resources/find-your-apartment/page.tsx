"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Search, Check } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { properties } from "@/lib/properties";

type QuizStep = 0 | 1 | 2 | 3 | 4;

interface Answers {
  budget: string;
  bedrooms: string;
  pets: string;
  style: string;
  mustHave: string[];
}

const initialAnswers: Answers = {
  budget: "",
  bedrooms: "",
  pets: "",
  style: "",
  mustHave: [],
};

export default function FindYourApartmentPage() {
  const [step, setStep] = useState<QuizStep>(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (key: keyof Answers, value: string) => {
    if (key === "mustHave") {
      const current = answers.mustHave;
      setAnswers({
        ...answers,
        mustHave: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      });
    } else {
      setAnswers({ ...answers, [key]: value });
    }
  };

  const nextStep = () => {
    if (step < 4) {
      setStep((step + 1) as QuizStep);
    } else {
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (step > 0) setStep((step - 1) as QuizStep);
  };

  // Scoring logic
  const getMatches = () => {
    return properties
      .map((p) => {
        let score = 0;

        // Budget match
        const minPrice = parseInt(p.priceRange.replace(/[^0-9]/, ""));
        const budgetMap: Record<string, number> = {
          "under-1500": 1500,
          "1500-2000": 2000,
          "2000-2500": 2500,
          "2500-plus": 4000,
        };
        const maxBudget = budgetMap[answers.budget] || 9999;
        if (minPrice <= maxBudget) score += 3;

        // Bedroom match
        if (answers.bedrooms === "studio" && p.unitTypes.includes("Studio"))
          score += 3;
        if (
          answers.bedrooms === "1br" &&
          p.unitTypes.some((u) => u.includes("1 Bed"))
        )
          score += 3;
        if (
          answers.bedrooms === "2br" &&
          p.unitTypes.some((u) => u.includes("2 Bed"))
        )
          score += 3;
        if (
          answers.bedrooms === "3br" &&
          p.unitTypes.some((u) => u.includes("3 Bed"))
        )
          score += 3;

        // Pet match
        if (answers.pets === "dog" && p.petPolicy.toLowerCase().includes("dog"))
          score += 2;
        if (
          answers.pets === "cat" &&
          p.petPolicy.toLowerCase().includes("cat")
        )
          score += 2;
        if (answers.pets === "none") score += 1;

        // Style match
        if (
          answers.style === "historic" &&
          (p.style.includes("Victorian") ||
            p.style.includes("Colonial") ||
            p.style.includes("Grand"))
        )
          score += 2;
        if (
          answers.style === "industrial" &&
          (p.style.includes("Industrial") || p.style.includes("Brick"))
        )
          score += 2;
        if (
          answers.style === "modern" &&
          (p.style.includes("Modern") ||
            p.style.includes("Contemporary"))
        )
          score += 2;
        if (answers.style === "any") score += 1;

        // Must-have features
        const featureStr = p.features.join(" ").toLowerCase();
        answers.mustHave.forEach((f) => {
          if (f === "brick" && featureStr.includes("brick")) score += 1;
          if (f === "clawfoot" && featureStr.includes("clawfoot")) score += 1;
          if (f === "laundry" && featureStr.includes("washer")) score += 1;
          if (f === "parking" && featureStr.includes("parking")) score += 1;
          if (f === "balcony" && featureStr.includes("balcony")) score += 1;
          if (f === "hardwood" && featureStr.includes("hardwood")) score += 1;
        });

        return { property: p, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  };

  const questions = [
    {
      title: "What's your monthly budget?",
      key: "budget" as const,
      options: [
        { value: "under-1500", label: "Under $1,500" },
        { value: "1500-2000", label: "$1,500 - $2,000" },
        { value: "2000-2500", label: "$2,000 - $2,500" },
        { value: "2500-plus", label: "$2,500+" },
      ],
    },
    {
      title: "How many bedrooms do you need?",
      key: "bedrooms" as const,
      options: [
        { value: "studio", label: "Studio" },
        { value: "1br", label: "1 Bedroom" },
        { value: "2br", label: "2 Bedrooms" },
        { value: "3br", label: "3 Bedrooms" },
      ],
    },
    {
      title: "Do you have pets?",
      key: "pets" as const,
      options: [
        { value: "none", label: "No pets" },
        { value: "cat", label: "Cat(s)" },
        { value: "dog", label: "Dog(s)" },
        { value: "both", label: "Both cats & dogs" },
      ],
    },
    {
      title: "What's your preferred style?",
      key: "style" as const,
      options: [
        { value: "historic", label: "Victorian / Colonial charm" },
        { value: "industrial", label: "Exposed brick / Industrial" },
        { value: "modern", label: "Contemporary / Modern" },
        { value: "any", label: "I'm open to anything" },
      ],
    },
  ];

  const mustHaveFeatures = [
    { value: "brick", label: "Exposed brick walls" },
    { value: "clawfoot", label: "Clawfoot tub" },
    { value: "laundry", label: "In-unit washer/dryer" },
    { value: "parking", label: "Off-street parking" },
    { value: "balcony", label: "Private balcony" },
    { value: "hardwood", label: "Hardwood floors" },
  ];

  if (showResults) {
    const matches = getMatches();
    return (
      <>
        <section className="bg-[#1C1917] py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateIn>
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAFAF9]">
                Your perfect matches
              </h1>
              <p className="mt-4 text-lg text-[#A8A29E]">
                Based on your preferences, here are the buildings we think
                you&apos;ll love.
              </p>
            </AnimateIn>
          </div>
        </section>
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="space-y-6">
              {matches.map(({ property, score }, i) => (
                <AnimateIn key={property.slug} delay={i * 0.15}>
                  <div className="rounded-2xl border border-[#D6D3D1] bg-white overflow-hidden">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-48 h-40 sm:h-auto bg-gradient-to-br from-[#44403C] to-[#292524] shrink-0 relative">
                        {i === 0 && (
                          <div className="absolute top-3 left-3 rounded-full bg-[#B45309] px-3 py-1 text-xs font-bold text-white">
                            Best Match
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex-1">
                        <h2 className="text-2xl font-bold text-[#1C1917] font-[family-name:var(--font-playfair)]">
                          {property.name}
                        </h2>
                        <p className="mt-1 text-sm text-[#57534E]">
                          {property.address} &middot; {property.style} &middot;
                          Est. {property.yearBuilt}
                        </p>
                        <p className="mt-1 text-lg font-bold text-[#B45309]">
                          {property.priceRange}/mo
                        </p>
                        <p className="mt-3 text-[#57534E]">
                          {property.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {property.features.slice(0, 4).map((f) => (
                            <span
                              key={f}
                              className="rounded-full bg-[#F5F5F4] px-3 py-1 text-xs text-[#57534E]"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 flex gap-3">
                          <Link
                            href={`/properties/${property.slug}`}
                            className="rounded-lg bg-[#B45309] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#92400E] transition-colors"
                          >
                            View Details
                          </Link>
                          <Link
                            href="/contact"
                            className="rounded-lg border border-[#D6D3D1] px-5 py-2.5 text-sm font-semibold text-[#292524] hover:bg-[#F5F5F4] transition-colors"
                          >
                            Schedule Tour
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
            <AnimateIn delay={0.3}>
              <div className="mt-8 text-center">
                <button
                  onClick={() => {
                    setShowResults(false);
                    setStep(0);
                    setAnswers(initialAnswers);
                  }}
                  className="text-[#B45309] font-semibold hover:text-[#92400E] transition-colors"
                >
                  Retake Quiz
                </button>
              </div>
            </AnimateIn>
          </div>
        </section>
      </>
    );
  }

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
                <Search className="h-8 w-8 text-[#F59E0B]" aria-hidden="true" />
              </div>
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAFAF9]">
                Find Your Apartment
              </h1>
            </div>
            <p className="text-lg text-[#A8A29E] max-w-2xl">
              Answer 5 quick questions and we&apos;ll match you with the
              Williams Properties building that fits your lifestyle.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-[#57534E] mb-2">
              <span>Question {step + 1} of 5</span>
              <span>{Math.round(((step + 1) / 5) * 100)}%</span>
            </div>
            <div className="h-2 rounded-full bg-[#F5F5F4]">
              <div
                className="h-2 rounded-full bg-[#B45309] transition-all duration-500"
                style={{ width: `${((step + 1) / 5) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          {step < 4 ? (
            <AnimateIn key={step}>
              <div className="rounded-2xl border border-[#D6D3D1] bg-white p-8">
                <h2 className="text-2xl font-bold text-[#1C1917] font-[family-name:var(--font-playfair)] mb-6">
                  {questions[step].title}
                </h2>
                <div className="space-y-3">
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() =>
                        handleSelect(questions[step].key, opt.value)
                      }
                      className={`w-full text-left rounded-xl border-2 p-4 transition-all ${
                        answers[questions[step].key] === opt.value
                          ? "border-[#B45309] bg-[#FEF3C7]"
                          : "border-[#D6D3D1] hover:border-[#B45309]/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-[#1C1917]">
                          {opt.label}
                        </span>
                        {answers[questions[step].key] === opt.value && (
                          <Check className="h-5 w-5 text-[#B45309]" aria-hidden="true" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <button
                    onClick={prevStep}
                    disabled={step === 0}
                    className="text-[#57534E] hover:text-[#1C1917] transition-colors disabled:opacity-30"
                  >
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!answers[questions[step].key]}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#B45309] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#92400E] transition-colors disabled:opacity-50"
                  >
                    Next <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </AnimateIn>
          ) : (
            <AnimateIn key="mustHave">
              <div className="rounded-2xl border border-[#D6D3D1] bg-white p-8">
                <h2 className="text-2xl font-bold text-[#1C1917] font-[family-name:var(--font-playfair)] mb-2">
                  Any must-have features?
                </h2>
                <p className="text-sm text-[#57534E] mb-6">
                  Select all that apply, or skip this step.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {mustHaveFeatures.map((f) => (
                    <button
                      key={f.value}
                      onClick={() => handleSelect("mustHave", f.value)}
                      className={`text-left rounded-xl border-2 p-4 transition-all ${
                        answers.mustHave.includes(f.value)
                          ? "border-[#B45309] bg-[#FEF3C7]"
                          : "border-[#D6D3D1] hover:border-[#B45309]/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-[#1C1917]">
                          {f.label}
                        </span>
                        {answers.mustHave.includes(f.value) && (
                          <Check className="h-5 w-5 text-[#B45309]" aria-hidden="true" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <button
                    onClick={prevStep}
                    className="text-[#57534E] hover:text-[#1C1917] transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#B45309] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#92400E] transition-colors"
                  >
                    See My Matches <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </AnimateIn>
          )}
        </div>
      </section>
    </>
  );
}

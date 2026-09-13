"use client";

import React from "react";
import { Search, Rocket, ArrowRight } from "lucide-react";

interface ActionCardsSectionProps {
  onOpenModal: (option?: "search" | "list", category?: string) => void;
}

export default function ActionCardsSection({ onOpenModal }: ActionCardsSectionProps) {
  return (
    <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-100 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Card 1: Blue Search Action Card */}
          <div className="bg-white border border-sky-100 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <Search className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  I am looking for a contact
                </h3>
                <p className="text-slate-600 text-xs sm:text-base font-medium">
                  Find property, services, providers nearby in Chennai.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-1">
              <button
                onClick={() => onOpenModal("search")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-98 cursor-pointer text-xs sm:text-sm"
              >
                <span>Find Something</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Green Listing Action Card */}
          <div className="bg-white border border-emerald-100 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <Rocket className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  I want to be listed
                </h3>
                <p className="text-slate-600 text-xs sm:text-base font-medium">
                  Get your property, service, or business found by local customers.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-1">
              <button
                onClick={() => onOpenModal("list")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-98 cursor-pointer text-xs sm:text-sm"
              >
                <span>Get Listed</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

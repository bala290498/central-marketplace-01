"use client";

import React from "react";
import { Search, Plus, ArrowRight } from "lucide-react";

interface ActionCardsSectionProps {
  onOpenModal: (option?: "search" | "list", category?: string) => void;
}

export default function ActionCardsSection({ onOpenModal }: ActionCardsSectionProps) {
  return (
    <section className="py-10 lg:py-12 bg-slate-50 border-b border-slate-100 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {/* Card 1: Blue Search Action Card */}
          <div className="bg-white border border-sky-100 p-4 sm:p-5 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
            <div className="flex items-start gap-3.5 sm:gap-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <Search className="w-5 h-5 sm:w-5 sm:h-5 stroke-[2.5]" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900">
                  I am looking for a contact
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  Find verified property, home foods, trusted service providers, and local sellers nearby in Chennai.
                </p>
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={() => onOpenModal("search")}
                className="w-full sm:w-44 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-98 cursor-pointer text-xs sm:text-sm"
              >
                <span>Find Something</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Green Listing Action Card */}
          <div className="bg-white border border-emerald-100 p-4 sm:p-5 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
            <div className="flex items-start gap-3.5 sm:gap-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <Plus className="w-5 h-5 sm:w-5 sm:h-5 stroke-[3]" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900">
                  I want to be listed
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  Get your property, service, or business found by local customers.
                </p>
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={() => onOpenModal("list")}
                className="w-full sm:w-44 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-98 cursor-pointer text-xs sm:text-sm"
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

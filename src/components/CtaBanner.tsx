"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

interface CtaBannerProps {
  onOpenModal: (option?: "search" | "list", category?: string) => void;
}

export default function CtaBanner({ onOpenModal }: CtaBannerProps) {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-50/90 border border-emerald-200/80 rounded-3xl p-5 sm:p-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 sm:gap-6 shadow-xs">
          {/* Left Content */}
          <div className="flex items-start sm:items-center gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white" />
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <h3 className="text-lg sm:text-2xl font-black text-slate-900">
                Ready to get started?
              </h3>
              <p className="text-slate-600 font-medium text-xs sm:text-base">
                Start a quick and private conversation with the Chennai Desk on
                WhatsApp.
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <button
            onClick={() => onOpenModal("search")}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer shrink-0 text-xs sm:text-base"
          >
            <WhatsAppIcon className="w-5 h-5 text-white fill-white" />
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

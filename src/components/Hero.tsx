"use client";

import React from "react";
import Image from "next/image";
import { Search, Rocket, Users, Store, Handshake, Heart, ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenModal: (option?: "search" | "list", category?: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section id="home" className="relative bg-slate-50 overflow-hidden pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-24">
      {/* 
        Hero Background Image - Uncropped & Unzoomed
        Uses object-contain / natural aspect ratio framing so 100% of the original photo
        (from golden sunset on left to Chennai lighthouse on right) is completely visible.
      */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/601B9E4C-DF98-41B2-8051-1BBBEF1B67E1.webp"
          alt="Chennai Coast Marina Beach Hero"
          fill
          priority
          className="object-contain object-right-top lg:object-right opacity-100"
        />
        {/* Soft gradient overlay on the left behind text for optimum legibility */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-linear-to-r from-white via-white/85 lg:via-white/75 via-50% to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-slate-50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start pt-2 sm:pt-6">
          {/* Left Text & Callouts Content */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            {/* Top Subtitle Eyebrow */}
            <div className="inline-block">
              <span className="text-[11px] sm:text-xs font-extrabold text-slate-700 tracking-widest uppercase bg-white/90 border border-slate-200/80 px-3 py-1 rounded-md shadow-2xs backdrop-blur-xs">
                YOUR LOCAL CONNECTION DESK
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Find Local. <br />
              <span className="text-slate-900">Connect Directly.</span>
            </h1>

            {/* Sub-description paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium leading-relaxed max-w-2xl">
              We connect people, customers and buyers with property owners, service
              providers and local sellers in Chennai.
            </p>

            {/* 3 Pill Feature Badges */}
            <div className="pt-1 sm:pt-2 pb-2 sm:pb-4">
              <div className="inline-flex flex-wrap items-center bg-white/90 backdrop-blur-md rounded-2xl p-2 sm:p-3 border border-slate-200/90 shadow-xs gap-2.5 sm:gap-6">
                {/* Pill 1 */}
                <div className="flex items-center gap-2 px-1.5 py-1 sm:py-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    Local People
                  </span>
                </div>

                <div className="hidden sm:block w-px h-6 bg-slate-200" />

                {/* Pill 2 */}
                <div className="flex items-center gap-2 px-1.5 py-1 sm:py-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Store className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    Local Businesses
                  </span>
                </div>

                <div className="hidden sm:block w-px h-6 bg-slate-200" />

                {/* Pill 3 */}
                <div className="flex items-center gap-2 px-1.5 py-1 sm:py-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Handshake className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    Stronger Communities
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cursive Script & Sticker Badge Section */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col items-center lg:items-end justify-between sm:justify-start lg:justify-between h-full pt-2 lg:pt-0 relative gap-4">
            {/* Cursive Handwriting Text */}
            <div className="relative transform lg:rotate-3 lg:translate-x-2 my-2 lg:my-0">
              <span className="font-handwriting text-3xl sm:text-4xl lg:text-5xl text-blue-700 font-bold block drop-shadow-xs">
                Chennai Connects Here
              </span>
              {/* Decorative Swoosh under text */}
              <svg
                className="w-36 sm:w-44 lg:w-52 h-4 text-blue-500 mt-0.5"
                viewBox="0 0 200 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12C50 3 150 18 195 8"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Slanted Sticker Badge */}
            <div className="transform -rotate-3 lg:-rotate-6 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-lg border border-slate-200/90 flex items-center gap-2 shrink-0">
              <div className="flex flex-col">
                <span className="text-[9px] sm:text-[10px] font-black tracking-widest text-slate-500 uppercase">
                  SUPPORT LOCAL
                </span>
                <span className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1">
                  GROW TOGETHER
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500 fill-rose-500 inline" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Main Action Cards Floating below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12 lg:mt-16">
          {/* Card 1: Blue Search Action Card */}
          <div className="bg-sky-50/95 backdrop-blur-md border border-sky-100/90 p-5 sm:p-8 rounded-3xl shadow-soft hover:shadow-card transition-all duration-300 group flex flex-col justify-between">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900">
                  I am looking for a contact
                </h3>
                <p className="text-slate-600 text-xs sm:text-base font-medium">
                  Find property, services, providers nearby in Chennai.
                </p>
              </div>
            </div>

            <div className="mt-5 sm:mt-6 pt-1 sm:pt-2">
              <button
                onClick={() => onOpenModal("search")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer text-xs sm:text-sm"
              >
                <span>Find Something</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Green Listing Action Card */}
          <div className="bg-emerald-50/95 backdrop-blur-md border border-emerald-100/90 p-5 sm:p-8 rounded-3xl shadow-soft hover:shadow-card transition-all duration-300 group flex flex-col justify-between">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <Rocket className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900">
                  I want to be listed
                </h3>
                <p className="text-slate-600 text-xs sm:text-base font-medium">
                  Get your property, service, or business found by local customers.
                </p>
              </div>
            </div>

            <div className="mt-5 sm:mt-6 pt-1 sm:pt-2">
              <button
                onClick={() => onOpenModal("list")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer text-xs sm:text-sm"
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

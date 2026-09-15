"use client";

import React from "react";
import Image from "next/image";
import { Users, Store, Handshake, Heart, Search, Plus, ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenModal: (option?: "search" | "list", category?: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section id="home" className="relative bg-slate-50 overflow-hidden pt-0 pb-12 sm:pb-16 lg:pb-20">
      {/* 
        Hero Background Image - Flush against Header
      */}
      {/* Desktop Background Image */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src="/hero/desktop.webp"
          alt="Chennai Coast Marina Beach Hero Desktop"
          fill
          priority
          className="object-cover object-right-top md:object-[75%_top] opacity-100"
        />
        {/* Left-only text overlay fade: covers strictly behind the left content block, fading out smoothly so the rest of the map/beach image is crisp */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[55%] lg:w-[45%] bg-linear-to-r from-white/95 via-white/80 via-60% to-transparent pointer-events-none" />
      </div>

      {/* Mobile Background Image */}
      <div className="block md:hidden absolute inset-0 z-0">
        <Image
          src="/hero/mobile.webp"
          alt="Chennai Coast Marina Beach Hero Mobile"
          fill
          priority
          className="object-cover object-top opacity-100"
        />
        {/* Mobile top-only vertical gradient transition */}
        <div className="absolute inset-x-0 top-0 h-[65%] bg-linear-to-b from-white/95 via-white/85 via-55% to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start pt-6 sm:pt-12">
          {/* Left Text & Callouts Content */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            {/* Top Subtitle Eyebrow & Mobile Cursive Text Row */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[10px] sm:text-xs font-extrabold text-slate-700 tracking-widest uppercase bg-white/90 border border-slate-200/80 px-2.5 py-1 rounded-md shadow-2xs backdrop-blur-xs inline-block">
                  YOUR LOCAL LISTING PLATFORM
                </span>
              </div>

              {/* Mobile Cursive Handwriting Text (Visible on mobile/tablet top-right, hidden on desktop lg) */}
              <div className="lg:hidden relative transform -rotate-12 -translate-y-1">
                <span className="font-handwriting text-2xl sm:text-3xl text-blue-700 font-bold block leading-tight text-right drop-shadow-xs">
                  Chennai <br />
                  Connects Here
                </span>
                <svg
                  className="w-28 sm:w-36 h-3 text-blue-500 mt-0.5 ml-auto"
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
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Find Locally! <br />
              <span className="text-slate-900">Connect Directly!</span>
            </h1>

            {/* Sub-description paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium leading-relaxed max-w-2xl">
              We connect people, customers and buyers with property owners, service
              providers and local sellers in Chennai.
            </p>

            {/* 3 Feature Badges - Containerless with dark text & icons */}
            <div className="pt-3 sm:pt-4">
              <div className="w-full sm:max-w-xl grid grid-cols-3 items-center divide-x divide-slate-400/60 text-center">
                {/* Item 1 */}
                <div className="flex flex-col items-center justify-center gap-1.5 px-1 sm:px-4">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 stroke-[2.25]" />
                  <span className="text-xs sm:text-base font-extrabold text-slate-900 leading-tight whitespace-nowrap">
                    Local <br className="sm:hidden" /> People
                  </span>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center justify-center gap-1.5 px-1 sm:px-4">
                  <Store className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 stroke-[2.25]" />
                  <span className="text-xs sm:text-base font-extrabold text-slate-900 leading-tight whitespace-nowrap">
                    Local <br className="sm:hidden" /> Businesses
                  </span>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center justify-center gap-1.5 px-1 sm:px-4">
                  <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 stroke-[2.25]" />
                  <span className="text-xs sm:text-base font-extrabold text-slate-900 leading-tight whitespace-nowrap">
                    Stronger <br className="sm:hidden" /> Communities
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cursive Script & Sticker Badge Section (Desktop lg only) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col items-end justify-between h-full pt-2 lg:pt-0 relative gap-4">
            {/* Cursive Handwriting Text */}
            <div className="relative transform -rotate-12 translate-x-2 my-0 text-right">
              <span className="font-handwriting text-4xl lg:text-5xl text-white font-bold block leading-tight drop-shadow-md">
                Chennai <br />
                Connects Here
              </span>
              {/* Decorative Swoosh under text */}
              <svg
                className="w-44 lg:w-52 h-4 text-white mt-0.5 ml-auto drop-shadow-sm"
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
            <div className="transform -rotate-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-200/90 flex items-center gap-2 shrink-0 mt-24">
              <div className="flex flex-col">
                <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase">
                  SUPPORT LOCAL
                </span>
                <span className="text-sm font-black text-slate-900 flex items-center gap-1">
                  GROW TOGETHER
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500 inline" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Cards Section - Integrated inside Hero Banner */}
        <div className="mt-5 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {/* Card 1: Blue Search Action Card */}
          <div className="bg-[#F0F7FF]/95 backdrop-blur-md border border-sky-200/90 p-4 sm:p-5 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
            <div className="flex items-start gap-3.5 sm:gap-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0066FF] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
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
                className="w-full sm:w-44 inline-flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-98 cursor-pointer text-xs sm:text-sm"
              >
                <span>Find Something</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Green Listing Action Card */}
          <div className="bg-[#F0FDF4]/95 backdrop-blur-md border border-emerald-200/90 p-4 sm:p-5 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
            <div className="flex items-start gap-3.5 sm:gap-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#00A859] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
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
                className="w-full sm:w-44 inline-flex items-center justify-center gap-2 bg-[#00A859] hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-98 cursor-pointer text-xs sm:text-sm"
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

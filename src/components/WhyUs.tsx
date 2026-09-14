"use client";

import React from "react";
import { Phone, Zap, Shield, Star } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: Phone,
      bgColor: "bg-blue-600",
      lightBg: "bg-blue-50/80 border-blue-100/90 hover:border-blue-300",
      badgeText: "DIRECT",
      title: "Direct contact details",
      description:
        "We provide direct contact details. You speak directly with property owners, sellers and service providers.",
    },
    {
      icon: Zap,
      bgColor: "bg-purple-600",
      lightBg: "bg-purple-50/80 border-purple-100/90 hover:border-purple-300",
      badgeText: "FAST & EASY",
      title: "Stress-free finding",
      description:
        "One local desk. One area-based organized list. No spam groups or searching through endless chat messages.",
    },
    {
      icon: Shield,
      bgColor: "bg-rose-600",
      lightBg: "bg-rose-50/80 border-rose-100/90 hover:border-rose-300",
      badgeText: "VERIFIED",
      title: "Feedback loop",
      description:
        "Every interaction generates private feedback for the desk to maintain high quality and trusted connections.",
    },
    {
      icon: Star,
      bgColor: "bg-amber-500",
      lightBg: "bg-amber-50/80 border-amber-100/90 hover:border-amber-300",
      badgeText: "MONITORED",
      title: "Continuous monitoring",
      description:
        "If a listing is reported as fake or problematic, the desk reviews it immediately and takes swift action.",
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 text-left">
          <span className="text-[11px] sm:text-xs font-extrabold text-slate-500 tracking-widest uppercase block mb-1">
            WHY CENTRAL MARKETPLACE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            A Better Way to Connect Locally
          </h2>
        </div>

        {/* 4 Feature Tile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className={`${item.lightBg} border rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between min-h-[220px] sm:min-h-[240px]`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl ${item.bgColor} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`}
                    >
                      <IconComp className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase bg-white/80 border border-slate-200/60 px-2.5 py-1 rounded-full">
                      {item.badgeText}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

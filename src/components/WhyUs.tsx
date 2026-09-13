"use client";

import React from "react";
import { Phone, Zap, Shield, Star } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: Phone,
      bgColor: "bg-emerald-500",
      title: "Direct contact details",
      description:
        "We provide the contact details. You speak directly with the provider.",
    },
    {
      icon: Zap,
      bgColor: "bg-purple-500",
      title: "Stress-free finding",
      description:
        "One local desk. One area-based list. No groups. No searching through endless chats.",
    },
    {
      icon: Shield,
      bgColor: "bg-rose-500",
      title: "Feedback loop",
      description:
        "Every interaction can generate private feedback for the desk.",
    },
    {
      icon: Star,
      bgColor: "bg-amber-500",
      title: "Continuous monitoring",
      description:
        "If a listing is reported as fake or problematic, the desk reviews it and takes action when appropriate.",
    },
  ];

  return (
    <section id="about" className="py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-extrabold text-slate-500 tracking-widest uppercase block mb-1">
            WHY CENTRAL MARKETPLACE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            A Better Way to Connect Locally
          </h2>
        </div>

        {/* 4 Columns Feature List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${item.bgColor} text-white flex items-center justify-center shrink-0 shadow-xs`}
                >
                  <IconComp className="w-5 h-5 sm:w-6 sm:h-6 fill-white/20 stroke-[2.2]" />
                </div>
                <div className="space-y-1 pt-0.5">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
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

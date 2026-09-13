"use client";

import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Choose your option",
      description: "I am looking for a contact or I want to be listed.",
    },
    {
      number: "2",
      title: "Fill in your details",
      description: "Category, area, name, WhatsApp number and more.",
    },
    {
      number: "3",
      title: "Send to WhatsApp",
      description: "Review and send. Our team will get in touch.",
    },
  ];

  return (
    <section id="how-it-works" className="py-10 sm:py-16 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-extrabold text-slate-500 tracking-widest uppercase block mb-1">
            SIMPLE PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-slate-600 font-medium text-xs sm:text-sm lg:text-base mt-1">
            Just 3 simple steps to connect with the Chennai Desk.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200/80 shadow-xs relative flex items-start gap-4 sm:gap-5 hover:shadow-md transition-shadow"
            >
              {/* Number Circle Badge */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 text-blue-600 font-black text-lg sm:text-xl flex items-center justify-center shrink-0 shadow-xs">
                {step.number}
              </div>

              {/* Text content */}
              <div className="space-y-1 pt-0.5 sm:pt-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Optional divider line for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-slate-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

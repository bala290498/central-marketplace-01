"use client";

import React from "react";
import { Home, Utensils, Store, Wrench } from "lucide-react";

interface CategoryCardsProps {
  onOpenModal: (option?: "search" | "list", category?: string) => void;
}

export default function CategoryCards({ onOpenModal }: CategoryCardsProps) {
  const categories = [
    {
      id: "property",
      title: "Property",
      subtext: "PG / Rentals / Buy Property",
      icon: Home,
      bgColor: "bg-pink-50/80 border-pink-100",
      iconBg: "bg-rose-500",
      iconColor: "text-white",
      hoverColor: "hover:border-rose-300 hover:shadow-md",
    },
    {
      id: "home-foods",
      title: "Home Foods",
      subtext: "Breakfast, Lunch, Dinner",
      icon: Utensils,
      bgColor: "bg-amber-50/80 border-amber-100",
      iconBg: "bg-amber-500",
      iconColor: "text-white",
      hoverColor: "hover:border-amber-300 hover:shadow-md",
    },
    {
      id: "local-sellers",
      title: "Local Sellers",
      subtext: "Shops & Wholesalers",
      icon: Store,
      bgColor: "bg-purple-50/80 border-purple-100",
      iconBg: "bg-purple-500",
      iconColor: "text-white",
      hoverColor: "hover:border-purple-300 hover:shadow-md",
    },
    {
      id: "home-services",
      title: "Home Services",
      subtext: "Electrician, Plumber",
      icon: Wrench,
      bgColor: "bg-emerald-50/80 border-emerald-100",
      iconBg: "bg-emerald-500",
      iconColor: "text-white",
      hoverColor: "hover:border-emerald-300 hover:shadow-md",
    },
  ];

  return (
    <section id="categories" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="mb-6 sm:mb-8">
          <span className="text-[11px] sm:text-xs font-extrabold text-slate-500 tracking-widest uppercase block mb-1">
            EXPLORE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Popular Categories
          </h2>
          <p className="text-slate-600 font-medium text-xs sm:text-sm lg:text-base mt-1">
            Choose a category to get started. The list is being built. Start on
            WhatsApp with the desk.
          </p>
        </div>

        {/* 4 Card Grid - Exactly 2 rows on mobile (2 cols x 2 rows = 4), 4 cols on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => onOpenModal("search", cat.title)}
                className={`${cat.bgColor} ${cat.hoverColor} border rounded-2xl p-4 sm:p-6 transition-all duration-300 cursor-pointer group flex flex-col items-center text-center justify-between min-h-[160px] sm:min-h-[200px]`}
              >
                <div
                  className={`w-11 h-11 sm:w-14 sm:h-14 rounded-full ${cat.iconBg} ${cat.iconColor} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform mb-3 sm:mb-4`}
                >
                  <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 stroke-[2.2]" />
                </div>

                <div className="space-y-1 flex-1 flex flex-col justify-center">
                  <h3 className="text-sm sm:text-lg font-extrabold text-slate-900">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">
                    {cat.subtext}
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

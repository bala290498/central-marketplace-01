"use client";

import React, { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

interface NavbarProps {
  onOpenModal: (option?: "search" | "list", category?: string) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [activeTab, setActiveTab] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "How It Works", href: "#how-it-works", id: "how-it-works" },
    { name: "Categories", href: "#categories", id: "categories" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // ScrollSpy observer to automatically update active link as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = navLinks.map((link) => link.id);
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-2xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo - Compact on mobile */}
        <a href="#home" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform shrink-0">
            <MapPin className="w-4 h-4 sm:w-6 sm:h-6 fill-white stroke-orange-500" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1 sm:gap-1.5 leading-tight">
              <span className="font-extrabold text-slate-900 text-xs sm:text-lg tracking-tight">
                CENTRAL
              </span>
              <span className="font-extrabold text-blue-600 text-xs sm:text-lg tracking-tight">
                MARKETPLACE
              </span>
            </div>
            <span className="text-[8px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-none">
              CHENNAI DESK
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveTab(link.id)}
                className={`group relative text-sm font-semibold transition-colors py-2 px-1 ${
                  isActive
                    ? "text-blue-600 font-bold"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full transition-all duration-200 ease-out origin-center ${
                    isActive
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right Action Button - Rounded Corner Style for all screens */}
        <div className="flex items-center">
          <button
            onClick={() => onOpenModal("search")}
            className="flex items-center gap-1.5 sm:gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full font-extrabold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span>Get Started</span>
          </button>
        </div>
      </div>
    </header>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { MapPin, MessageSquare, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenModal: (option?: "search" | "list", category?: string) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <MapPin className="w-6 h-6 fill-white stroke-orange-500" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-tight">
              <span className="font-extrabold text-slate-900 text-lg tracking-tight">
                CENTRAL
              </span>
              <span className="font-extrabold text-blue-600 text-lg tracking-tight">
                MARKETPLACE
              </span>
            </div>
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-none">
              CHENNAI DESK
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links - Equal Spacing & Dynamic Blue Indicators */}
        <nav className="hidden md:flex items-center space-x-10">
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
                {/* 
                  Bottom Indicator:
                  Default state is blank/hidden (scale-x-0, opacity-0).
                  On Hover OR when Active/Selected section: highlights in solid blue color with smooth transition!
                */}
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

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={() => onOpenModal("search")}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <MessageSquare className="w-3.5 h-3.5 text-white fill-white" />
            </div>
            <span>Get Started</span>
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => {
                setActiveTab(link.id);
                setMobileMenuOpen(false);
              }}
              className={`block px-3 py-2 rounded-lg text-base font-semibold transition-colors ${
                activeTab === link.id
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal("search");
              }}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              Get Started on WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

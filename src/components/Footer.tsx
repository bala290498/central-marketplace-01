"use client";

import React from "react";
import { MapPin } from "lucide-react";

interface FooterProps {
  onOpenModal: (option?: "search" | "list", category?: string) => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer id="contact" className="bg-[#071527] text-white pt-12 sm:pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 5 Columns Layout - 2 columns on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand Info (Full width on 2-column grid) */}
          <div className="space-y-4 col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white shrink-0">
                <MapPin className="w-5 h-5 fill-white stroke-orange-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-base tracking-tight leading-none">
                  CENTRAL MARKETPLACE
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">
                  CHENNAI DESK
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-xs font-medium">
              Find Locally! Connect Directly!
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li>
                <a href="#legal" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#legal" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Need Help? */}
          <div className="space-y-3 col-span-2 sm:col-span-1 lg:col-span-1">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Need Help?
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li>
                <button
                  onClick={() => onOpenModal("search")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Report an issue (WhatsApp)
                </button>
              </li>
              <li>
                <a
                  href="mailto:contact@centralmarketplace.in"
                  className="hover:text-white transition-colors block truncate"
                >
                  contact@centralmarketplace.in
                </a>
              </li>
              <li>
                <a
                  href="mailto:careers@centralmarketplace.in"
                  className="hover:text-white transition-colors block truncate"
                >
                  careers@centralmarketplace.in
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Follow Us */}
          <div className="space-y-3 col-span-2 sm:col-span-1 lg:col-span-1">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex items-center gap-3 text-slate-400">
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium gap-3 text-center sm:text-left">
          <p>© 2024 Central Marketplace. All rights reserved.</p>
          <p className="text-slate-400 font-semibold">
            A stronger Chennai, Together.
          </p>
        </div>
      </div>
    </footer>
  );
}

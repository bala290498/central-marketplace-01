"use client";

import React, { useState } from "react";
import { X, MessageSquare, CheckCircle2, MapPin, Tag, User, FileText } from "lucide-react";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultOption?: "search" | "list";
  defaultCategory?: string;
}

export default function WhatsAppModal({
  isOpen,
  onClose,
  defaultOption = "search",
  defaultCategory = "Property",
}: WhatsAppModalProps) {
  const [option, setOption] = useState<"search" | "list">(defaultOption);
  const [category, setCategory] = useState<string>(defaultCategory);
  const [area, setArea] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [details, setDetails] = useState<string>("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const actionText =
      option === "search"
        ? "I am looking for a contact"
        : "I want to be listed";

    const textMessage = `Hello Chennai Desk! 👋\n\n📌 *Request Type:* ${actionText}\n📁 *Category:* ${category}\n📍 *Area/Location:* ${
      area || "Chennai"
    }\n👤 *Name:* ${name || "Not provided"}\n📝 *Details:* ${
      details || "No additional details"
    }\n\nPlease assist me!`;

    // WhatsApp business number placeholder or standard link
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
      textMessage
    )}`;

    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl shadow-2xl relative border border-slate-100">
        {/* Header */}
        <div className="bg-linear-to-r from-emerald-600 to-teal-700 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-xs">
              <MessageSquare className="w-7 h-7 text-white fill-white/20" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Connect with Chennai Desk</h3>
              <p className="text-emerald-100 text-xs mt-0.5">
                Fast & private direct WhatsApp connection
              </p>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Option Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Step 1: Choose Option
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setOption("search")}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border font-semibold text-xs transition-all ${
                  option === "search"
                    ? "border-blue-600 bg-blue-50 text-blue-700 shadow-xs"
                    : "border-slate-200 hover:border-slate-300 text-slate-600"
                }`}
              >
                <CheckCircle2
                  className={`w-4 h-4 ${
                    option === "search" ? "text-blue-600" : "text-slate-300"
                  }`}
                />
                Looking for a contact
              </button>
              <button
                type="button"
                onClick={() => setOption("list")}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border font-semibold text-xs transition-all ${
                  option === "list"
                    ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-xs"
                    : "border-slate-200 hover:border-slate-300 text-slate-600"
                }`}
              >
                <CheckCircle2
                  className={`w-4 h-4 ${
                    option === "list" ? "text-emerald-600" : "text-slate-300"
                  }`}
                />
                I want to be listed
              </button>
            </div>
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-slate-400" />
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:outline-hidden text-sm text-slate-800"
            >
              <option value="Property">Property (PG / Rentals / Buy / Rooms)</option>
              <option value="Home Foods">Home Foods (Breakfast, Lunch, Dinner)</option>
              <option value="Local Sellers">Local Sellers (Shops, Wholesalers, Dealers)</option>
              <option value="Home Services">Home Services (Electrician, Plumber, Cleaning)</option>
              <option value="Professionals">Professionals (Doctors, Lawyers, Editors)</option>
              <option value="General Inquiry">General Inquiry / Other</option>
            </select>
          </div>

          {/* Area Input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Area / Location in Chennai
            </label>
            <input
              type="text"
              placeholder="e.g. Velachery, T. Nagar, Anna Nagar, Adyar, OMR..."
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:outline-hidden text-sm text-slate-800"
              required
            />
          </div>

          {/* Name Input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-400" />
              Your Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:outline-hidden text-sm text-slate-800"
              required
            />
          </div>

          {/* Additional details */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              Requirement Details
            </label>
            <textarea
              rows={3}
              placeholder="Describe what you are looking for or listing details..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:outline-hidden text-sm text-slate-800 resize-none"
            ></textarea>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            Send to WhatsApp Desk →
          </button>
        </form>
      </div>
    </div>
  );
}

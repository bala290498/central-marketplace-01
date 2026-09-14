"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, MapPin, ArrowLeft, ArrowRight, CheckCircle2, Navigation, Trash2, Search, Plus, AlertCircle } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultOption?: "search" | "list";
  defaultCategory?: string;
}

const CATEGORIES = [
  "PG / Rentals / Buy Property / Rooms",
  "Home Foods (Breakfast, Lunch, Dinner etc)",
  "Local Sellers / Wholesalers / Dealers",
  "Home Services (Electrician, Plumber, Cleaning, Services, Repairs etc)",
];

export default function WhatsAppModal({
  isOpen,
  onClose,
  defaultOption = "search",
  defaultCategory = "",
}: WhatsAppModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [option, setOption] = useState<"search" | "list">(defaultOption);
  const [category, setCategory] = useState<string>(
    defaultCategory || CATEGORIES[0]
  );
  const [area, setArea] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [pinnedCoords, setPinnedCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const [locError, setLocError] = useState<string>("");
  
  // Map References
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  // Validation errors for required fields
  const [errors, setErrors] = useState<{
    category?: string;
    area?: string;
    name?: string;
    phone?: string;
  }>({});

  // Sync props when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setOption(defaultOption);
      setErrors({});
      if (defaultCategory) {
        const matched = CATEGORIES.find((c) =>
          c.toLowerCase().includes(defaultCategory.toLowerCase())
        );
        setCategory(matched || CATEGORIES[0]);
      } else {
        setCategory(CATEGORIES[0]);
      }
    }
  }, [isOpen, defaultOption, defaultCategory]);

  // Real Leaflet Map Initialization & InvalidateSize Logic
  useEffect(() => {
    if (!isOpen || step !== 2 || option !== "list") return;

    let isMounted = true;

    const initLeafletMap = () => {
      const L = (window as any).L;
      if (!L || !mapContainerRef.current) return;

      if (!mapRef.current) {
        const CHENNAI: [number, number] = [13.0827, 80.2707];
        const newMap = L.map(mapContainerRef.current).setView(CHENNAI, 12);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: "&copy; OpenStreetMap",
        }).addTo(newMap);

        // Click map event to pin location
        newMap.on("click", (e: any) => {
          const lat = Number(e.latlng.lat.toFixed(6));
          const lng = Number(e.latlng.lng.toFixed(6));
          setPinnedCoords({ lat, lng });

          if (!markerRef.current) {
            markerRef.current = L.marker([lat, lng]).addTo(newMap);
          } else {
            markerRef.current.setLatLng([lat, lng]);
          }
          newMap.setView([lat, lng], 15);
        });

        mapRef.current = newMap;
      }

      // Timeout invalidateSize ensures Leaflet tiles render smoothly inside container
      setTimeout(() => {
        if (mapRef.current) {
          mapRef.current.invalidateSize();
        }
      }, 80);
    };

    // Load Leaflet JS script dynamically if not present
    if (typeof window !== "undefined" && !(window as any).L) {
      const existingScript = document.getElementById("leaflet-js");
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "leaflet-js";
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.onload = () => {
          if (isMounted) initLeafletMap();
        };
        document.body.appendChild(script);
      } else {
        existingScript.addEventListener("load", () => {
          if (isMounted) initLeafletMap();
        });
      }
    } else {
      initLeafletMap();
    }

    return () => {
      isMounted = false;
    };
  }, [isOpen, step, option]);

  if (!isOpen) return null;

  // Step 2 Form Validation: All fields except Pin Location are mandatory
  const validateStep2 = () => {
    const newErrors: typeof errors = {};
    if (!category.trim()) {
      newErrors.category = "Please select a category";
    }
    if (!area.trim()) {
      newErrors.area = "Area in Chennai is required";
    }
    if (!name.trim()) {
      newErrors.name = "Your name is required";
    }
    if (!phone.trim()) {
      newErrors.phone = "WhatsApp / Mobile number is required";
    } else if (phone.trim().length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Geolocation Location Pinning
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setLocError("Location is not available on this device.");
      return;
    }

    setIsLocating(true);
    setLocError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = Number(position.coords.latitude.toFixed(6));
        const lng = Number(position.coords.longitude.toFixed(6));
        setPinnedCoords({ lat, lng });
        setIsLocating(false);

        const L = (window as any).L;
        if (L && mapRef.current) {
          if (!markerRef.current) {
            markerRef.current = L.marker([lat, lng]).addTo(mapRef.current);
          } else {
            markerRef.current.setLatLng([lat, lng]);
          }
          mapRef.current.setView([lat, lng], 15);
        }
      },
      (error) => {
        setIsLocating(false);
        setLocError("Could not read your location. Tap the map instead.");
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const handleClearPin = () => {
    setPinnedCoords(null);
    setLocError("");
    if (markerRef.current && mapRef.current) {
      mapRef.current.removeLayer(markerRef.current);
      markerRef.current = null;
    }
  };

  // Generate Message Text for WhatsApp preview & link
  const generateMessageText = () => {
    const isCustomer = option === "search";
    const headerLine = isCustomer
      ? "Hi, I am looking for a contact in Chennai."
      : "Hi, I want to be listed in Chennai.";

    let msg = `${headerLine}\n\nCategory: ${category}\nArea: ${area || "Chennai"}\nName: ${
      name || "Not provided"
    }\nWhatsApp/Mobile: ${phone || "Not provided"}`;

    if (pinnedCoords) {
      msg += `\nLocation Pin: https://maps.google.com/?q=${pinnedCoords.lat},${pinnedCoords.lng}`;
    }

    return msg;
  };

  // Final Action: Send to WhatsApp Business desk (9677691237)
  const handleSendToWhatsApp = () => {
    const textMessage = generateMessageText();
    const whatsappUrl = `https://wa.me/919677691237?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  const isCustomer = option === "search";
  const roleBadgeText = isCustomer ? "Customer" : "Provider";
  const roleBadgeBg = isCustomer ? "bg-blue-100 text-blue-800" : "bg-emerald-100 text-emerald-800";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-xs p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg max-h-[92vh] flex flex-col rounded-3xl shadow-2xl relative border border-slate-100 overflow-hidden">
        
        {/* Header Bar */}
        <div className="bg-slate-900 px-6 py-4 text-white flex items-center justify-between shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <WhatsAppIcon className="w-6 h-6 fill-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black tracking-wider uppercase text-emerald-400">
                  WhatsApp Desk
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-200 border border-slate-700">
                  Step {step} of 3
                </span>
                {step > 1 && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${roleBadgeBg}`}>
                    {roleBadgeText}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-300 font-medium">
                {step === 1 && "Choose Option"}
                {step === 2 && "Your details"}
                {step === 3 && "Check before you send"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="w-full bg-slate-100 h-1.5 flex">
          <div
            className="bg-emerald-500 h-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {step === 1 && (
            /* STEP 1 OF 3: Choose Option */
            <div className="space-y-4 animate-in fade-in duration-200">
              <div>
                <span className="text-[10px] font-black tracking-widest text-emerald-600 uppercase bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  Step 1 of 3
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-2">
                  What would you like to do?
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Select your objective to customize the request for our Chennai Desk team.
                </p>
              </div>

              <div className="space-y-3 pt-1">
                {/* Option 1: Customer */}
                <div
                  onClick={() => setOption("search")}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3.5 group ${
                    option === "search"
                      ? "border-blue-600 bg-blue-50/60 shadow-xs"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-transform group-hover:scale-105 ${
                      option === "search"
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <Search className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-extrabold text-slate-900">
                        I am looking for a contact
                      </h4>
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md">
                        Customer
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      Find verified property, home foods, service providers, or sellers in Chennai.
                    </p>
                  </div>
                </div>

                {/* Option 2: Provider */}
                <div
                  onClick={() => setOption("list")}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3.5 group ${
                    option === "list"
                      ? "border-emerald-600 bg-emerald-50/60 shadow-xs"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-transform group-hover:scale-105 ${
                      option === "list"
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <Plus className="w-5 h-5 stroke-[3]" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-extrabold text-slate-900">
                        I want to be listed
                      </h4>
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                        Provider
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      List your room, rental property, home food kitchen, business, or local service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            /* STEP 2 OF 3: Your Details Form */
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div>
                  <span className="text-[10px] font-black tracking-widest text-emerald-600 uppercase bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    Step 2 of 3
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                    Your details
                  </h3>
                </div>
                <span className={`text-xs font-black px-3 py-1 rounded-full ${roleBadgeBg}`}>
                  {roleBadgeText}
                </span>
              </div>

              {/* Subheading: Which category? */}
              <div className="space-y-1">
                <label className="block text-xs font-black text-slate-800 uppercase tracking-wider">
                  Which category? <span className="text-rose-500">*</span>
                </label>
                <p className="text-xs text-slate-500 font-medium">
                  {isCustomer ? "What are you looking for?" : "What do you want listed?"}
                </p>
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    if (errors.category) setErrors({ ...errors, category: undefined });
                  }}
                  className={`w-full mt-1.5 p-3 rounded-xl border font-semibold text-base sm:text-sm text-slate-900 transition-all cursor-pointer ${
                    errors.category
                      ? "border-rose-500 bg-rose-50/40 focus:border-rose-600"
                      : "border-slate-300 bg-slate-50/50 focus:bg-white focus:border-blue-600"
                  }`}
                >
                  <option disabled value="">Select a category</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-xs font-bold text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.category}
                  </p>
                )}
              </div>

              {/* Area Field */}
              <div className="space-y-1">
                <label className="block text-xs font-black text-slate-800 uppercase tracking-wider">
                  Which area in Chennai? <span className="text-rose-500">*</span>
                </label>
                <p className="text-xs text-slate-500 font-medium">
                  So we can match you with what's genuinely nearby.
                </p>
                <input
                  type="text"
                  placeholder={isCustomer ? "Velachery, OMR, Tambaram…" : "e.g. Velachery, OMR, Tambaram..."}
                  value={area}
                  onChange={(e) => {
                    setArea(e.target.value);
                    if (errors.area) setErrors({ ...errors, area: undefined });
                  }}
                  className={`w-full mt-1 p-3 rounded-xl border font-semibold text-base sm:text-sm text-slate-900 transition-all ${
                    errors.area
                      ? "border-rose-500 bg-rose-50/40 focus:border-rose-600"
                      : "border-slate-300 bg-slate-50/50 focus:bg-white focus:border-blue-600"
                  }`}
                />
                {errors.area && (
                  <p className="text-xs font-bold text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.area}
                  </p>
                )}
              </div>

              {/* Name Field */}
              <div className="space-y-1">
                <label className="block text-xs font-black text-slate-800 uppercase tracking-wider">
                  What's your name? <span className="text-rose-500">*</span>
                </label>
                <p className="text-xs text-slate-500 font-medium">
                  So our office knows who's messaging.
                </p>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  className={`w-full mt-1 p-3 rounded-xl border font-semibold text-base sm:text-sm text-slate-900 transition-all ${
                    errors.name
                      ? "border-rose-500 bg-rose-50/40 focus:border-rose-600"
                      : "border-slate-300 bg-slate-50/50 focus:bg-white focus:border-blue-600"
                  }`}
                />
                {errors.name && (
                  <p className="text-xs font-bold text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* WhatsApp / Mobile Field */}
              <div className="space-y-1">
                <label className="block text-xs font-black text-slate-800 uppercase tracking-wider">
                  Your WhatsApp / mobile <span className="text-rose-500">*</span>
                </label>
                <p className="text-xs text-slate-500 font-medium">
                  We'll open a pre-filled WhatsApp message — you just hit send.
                </p>
                <input
                  type="tel"
                  placeholder="10-digit number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  className={`w-full mt-1 p-3 rounded-xl border font-semibold text-base sm:text-sm text-slate-900 transition-all ${
                    errors.phone
                      ? "border-rose-500 bg-rose-50/40 focus:border-rose-600"
                      : "border-slate-300 bg-slate-50/50 focus:bg-white focus:border-blue-600"
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs font-bold text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Location Pin Section (Only visible for Providers) */}
              {!isCustomer && (
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-black text-slate-800 uppercase tracking-wider">
                      Pin your location
                    </label>
                    <span className="text-[11px] font-extrabold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                      Optional
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Optional. Tap the map or use your current location.
                  </p>

                  {/* Pin Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={handleGetLocation}
                      disabled={isLocating}
                      className="inline-flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-extrabold px-3 py-2 rounded-xl text-xs border border-blue-200 transition-colors cursor-pointer active:scale-98 disabled:opacity-50"
                    >
                      <Navigation className={`w-3.5 h-3.5 ${isLocating ? "animate-spin" : ""}`} />
                      <span>{isLocating ? "Locating..." : "Use my location"}</span>
                    </button>

                    {pinnedCoords && (
                      <button
                        type="button"
                        onClick={handleClearPin}
                        className="inline-flex items-center gap-1 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold px-3 py-2 rounded-xl text-xs border border-rose-200 transition-colors cursor-pointer active:scale-98"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Clear pin</span>
                      </button>
                    )}
                  </div>

                  {/* Real Leaflet Map Container */}
                  <div
                    ref={mapContainerRef}
                    className="mt-2 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 relative h-48 w-full z-0"
                  />

                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {pinnedCoords
                      ? `Pinned: ${pinnedCoords.lat}, ${pinnedCoords.lng}`
                      : "No pin yet. You can skip this."}
                  </p>

                  {locError && (
                    <p className="text-xs font-semibold text-rose-600 mt-1">{locError}</p>
                  )}
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            /* STEP 3 OF 3: Confirmation / "Check before you send" */
            <div className="space-y-4 animate-in fade-in duration-200">
              <div>
                <span className="text-[10px] font-black tracking-widest text-emerald-600 uppercase bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  Step 3 of 3
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                  Check before you send
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  This is exactly what goes to our Team.
                </p>
              </div>

              {/* Details Summary Card */}
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 space-y-3">
                <div className="flex justify-between items-center pb-2.5 border-b border-slate-200/80">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Request Type</span>
                  <span className={`text-xs font-extrabold px-2.5 py-1 rounded-full ${roleBadgeBg}`}>
                    {isCustomer ? "Looking for a Contact" : "Want to be Listed"}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-slate-200/80">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Category</span>
                  <span className="text-xs font-extrabold text-slate-900 text-right max-w-[60%]">{category}</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-slate-200/80">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Area</span>
                  <span className="text-xs font-extrabold text-slate-900">{area || "Chennai"}</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-slate-200/80">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Name</span>
                  <span className="text-xs font-extrabold text-slate-900">{name || "Not provided"}</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-slate-200/80">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mobile</span>
                  <span className="text-xs font-extrabold text-slate-900">{phone || "Not provided"}</span>
                </div>
                {pinnedCoords && (
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Location Pin</span>
                    <span className="text-xs font-extrabold text-emerald-600">Pinned ({pinnedCoords.lat}, {pinnedCoords.lng})</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer / Navigation Buttons */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 shrink-0 flex items-center justify-between gap-3">
          {step === 1 && (
            <>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-extrabold text-xs sm:text-sm hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-98 ml-auto"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-extrabold text-xs sm:text-sm hover:bg-slate-100 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (validateStep2()) {
                    setStep(3);
                  }
                }}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-98"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-extrabold text-xs sm:text-sm hover:bg-slate-100 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="px-6 py-3 rounded-xl bg-[#00A859] hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white text-white" />
                <span>Send to Desk</span>
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

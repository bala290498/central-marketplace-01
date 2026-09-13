"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ActionCardsSection from "@/components/ActionCardsSection";
import CategoryCards from "@/components/CategoryCards";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import WhatsAppModal from "@/components/WhatsAppModal";

export default function Home() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    option: "search" | "list";
    category: string;
  }>({
    isOpen: false,
    option: "search",
    category: "Property",
  });

  const handleOpenModal = (
    option: "search" | "list" = "search",
    category: string = "Property"
  ) => {
    setModalState({
      isOpen: true,
      option,
      category,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <main className="min-h-screen bg-white flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content Sections */}
      <div className="flex-1">
        <Hero onOpenModal={handleOpenModal} />
        <ActionCardsSection onOpenModal={handleOpenModal} />
        <CategoryCards onOpenModal={handleOpenModal} />
        <HowItWorks />
        <WhyUs />
        <CtaBanner onOpenModal={handleOpenModal} />
      </div>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Interactive WhatsApp Modal */}
      <WhatsAppModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        defaultOption={modalState.option}
        defaultCategory={modalState.category}
      />
    </main>
  );
}

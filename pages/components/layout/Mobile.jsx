"use client";

import { Phone } from "lucide-react";
import Link from "next/link";

const FloatingCallButton = () => {
  return (
    <Link
      href="tel:+917453947573"
      className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all"
      aria-label="Call Us"
    >
      <Phone className="w-6 h-6" />
    </Link>
  );
};

export default FloatingCallButton;

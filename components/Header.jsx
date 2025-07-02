"use client";

import { MapPin, Phone, Menu, X } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-col sticky top-0 z-50 bg-white/80">
      {/* Sticky Header (Logo + Nav) */}
      <div className="bg-white/30 backdrop-blur-md sticky top-0 z-50 shadow-sm transition-all">
        <div className="container mx-auto flex items-center justify-between py-6">
          <div className=" flex items-center gap-2">
            <Image src={"/logo.png"} alt="logo" width={48} height={48} />
            <h1 className="text-slate-700 text-3xl tracking-tighter font-bold">
              Serena Blake
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1 rounded-md transition-colors duration-200 hover:bg-white hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <Menu className="h-6 w-6 text-slate-700" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-1/2 h-screen bg-white shadow-lg z-50 transition-transform duration-300 flex flex-col">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <div className=" flex items-center gap-2">
              <Image src={"/logo.png"} alt="logo" width={36} height={36} />
              <h1 className="text-xl font-bold text-slate-700">Serena Blake</h1>
            </div>

            <button onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6 text-slate-700" />
            </button>
          </div>

          {/* Sidebar Nav (Full height, spaced) */}
          <nav className="flex flex-1 flex-col justify-center items-center gap-8 text-lg font-medium text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-md transition-colors duration-200 hover:bg-slate-100 hover:text-black w-3/4 text-center"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-700 py-10 px-4 border-t">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About / Logo */}
        <div className="space-y-3">
          <div className=" flex items-center gap-2">
            <Image src={"/logo.png"} alt="logo" width={36} height={36} />
            <h2 className="text-xl font-bold">Dr. Serena Blake, PsyD</h2>
          </div>

          <p className="text-sm">
            Licensed Clinical Psychologist in Los Angeles, CA. Providing
            evidence-based therapy for anxiety, trauma, and relationships.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              1287 Maplewood Drive, Los Angeles, CA 90026
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (323) 555-0192
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:serena@blakepsychology.com" className="underline">
                serena@blakepsychology.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

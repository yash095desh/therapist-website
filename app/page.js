"use client";

import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import CountSection from "@/components/CountSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import HowIHelpSection from "@/components/HowIHelp";
import { Button } from "@/components/ui/button";
import { Stars } from "lucide-react";
import React from "react";

function Home() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <HeroSection />

      <CountSection />

      <HowIHelpSection />

      <div className="bg-slate-700 py-20">
        <div className=" flex items-center flex-col md:flex-row mx-auto container justify-center md:justify-between gap-10">
          <h1 className="text-4xl font-bold text-slate-200 tracking-tight text-center">
            Schedule a Consultation
          </h1>
          <p className="font-semibold text-slate-300 text-lg text-center md:text-start ">
            Ellie Shumaker is currently accepting new clients. Availabile for
            online and in-person sessions. Call and book appointment with Ellie
            Shumaker
          </p>
          <Button
            variant="outline"
            onClick={scrollToContact}
            className="border-2 text-base md:text-lg border-slate-300 text-white py-3 px-5 md:py-4 md:px-6 flex items-center gap-2 hover:bg-slate-800 hover:border-slate-400 transition"
          >
            Start Healing <Stars className="size-4 text-white" />
          </Button>
        </div>
      </div>

      <AboutSection />
      <FAQSection />
      <ContactSection />
      <section className="w-full h-[400px]">
        <iframe
          title="Dr. Serena Blake Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.720218663671!2d-118.2602136847829!3d34.07815958059815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c71ed09c22e5%3A0x8a2d3308c6d2c38b!2s1287%20Maplewood%20Dr%2C%20Los%20Angeles%2C%20CA%2090026!5e0!3m2!1sen!2sus!4v1691326652075!5m2!1sen!2sus"
          className="w-full h-full border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}

export default Home;

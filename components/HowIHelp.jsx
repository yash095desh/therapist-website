"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Anxiety & Stress Management",
    slug: "anxiety-stress",
    desc: "Learn to manage overwhelming thoughts and physical symptoms using mindfulness and CBT techniques.",
    image: "/anxietyImage.jpg",
  },
  {
    title: "Relationship Counseling",
    slug: "relationship-counseling",
    desc: "Enhance communication, rebuild trust, and foster deeper emotional connections with your partner.",
    image: "/relationship.jpg",
  },
  {
    title: "Trauma Recovery",
    slug: "trauma-recovery",
    desc: "Heal from past emotional wounds in a supportive environment with evidence-based trauma therapy.",
    image: "/tramua.jpeg",
  },
];

const HowIHelpSection = () => {
  return (
    <section className="bg-slate-100 py-20 px-4 md:px-12" id="services">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
          How I Help
        </h1>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Tailored therapy approaches to support your healing, growth, and clarity.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 border-2 border-slate-600"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-slate-800">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm">{service.desc}</p>
              <Link href={`/services/${service.slug}`} className=" w-full">
                <Button variant="outline" className="mt-2 hover:bg-slate-700 w-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowIHelpSection;

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const FAQSection = () => {
  return (
    <section id="faq" className="bg-slate-100 py-20 px-4 md:px-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">
          Have questions? Here are answers to the most common ones.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4 text-left">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg md:text-xl font-medium text-slate-800">
              Do you accept insurance?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 text-base md:text-lg">
              No, but a superbill is provided for self-submission.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg md:text-xl font-medium text-slate-800">
              Are online sessions available?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 text-base md:text-lg">
              Yes—all virtual sessions via Zoom.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg md:text-xl font-medium text-slate-800">
              What is your cancellation policy?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 text-base md:text-lg">
              24-hour notice required.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

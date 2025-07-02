import React from "react";
import { Button } from "@/components/ui/button";
import { Brain, MessageCircle, MapPin, Lightbulb } from "lucide-react";
import AnimatedHighlight from "./AnimatedHighlight";

const HeroSection = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const highlights = [
    { icon: <Brain className="size-5" />, text: "8+ Years Experience" },
    {
      icon: <MessageCircle className="size-5" />,
      text: "500+ Sessions Completed",
    },
    {
      icon: <MapPin className="size-5" />,
      text: "In-Person & Virtual Options",
    },
    {
      icon: <Lightbulb className="size-5" />,
      text: "Specializing in Anxiety, Trauma & Relationships",
    },
  ];

  return (
    <div
      className="relative min-h-[90vh] bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: "url('/HeroImage.jpg')" }}
    >
      {/* Darker overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 md:px-12 text-center max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-gray-300 mb-2">
          Licensed Clinical Psychologist | Los Angeles, CA
        </h2>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Compassionate Therapy for Healing, Growth, and Connection
        </h1>

        <p className="text-lg md:text-xl mb-6">
          Dr. Serena Blake, PsyD, offers evidence-based therapy to help you
          navigate anxiety, strengthen relationships, and recover from trauma—
          in person or online.
        </p>

        {/* Highlights */}
        <AnimatedHighlight items={highlights} />

        <Button
          onClick={scrollToContact}
          className="text-base px-6 py-3 bg-white text-black hover:bg-gray-100"
        >
          Book Your First Session
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;

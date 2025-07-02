import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image with Badge Overlay */}
        <div className="relative w-full">
          <img
            src="/therapist.png" // Replace with your actual image
            alt="Dr. Serena Blake"
            className="rounded-xl shadow-lg w-full h-auto object-cover border-2 border-slate-300"
          />

          {/* Floating Label Bottom-Left */}
          <div className="absolute bottom-4 left-4 bg-white/80 text-slate-800 px-4 py-2 rounded-md shadow backdrop-blur-md text-sm leading-snug">
            <p className="font-semibold">Serena Blake</p>
            <p className="text-xs">PsyD, Clinical Psychologist</p>
            <p className="text-xs">Top Rated | 8+ Years Experience</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-block bg-amber-100 text-amber-600 border border-amber-600 px-3 py-1 rounded-xl text-sm font-medium shadow-sm">
            About Dr. Serena Blake, PsyD – Licensed Clinical Psychologist in Los Angeles, CA
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Hi, I’m Dr. Serena Blake
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            I'm a licensed clinical psychologist based in Los Angeles with eight years of experience and over 500 client sessions. My approach combines evidence-based methods like cognitive-behavioral therapy and mindfulness, tailored with empathy and compassion for each client I work with.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you're navigating anxiety, working on relationships, or healing from trauma, I aim to create a supportive space where you feel seen, safe, and empowered. I offer both in-person sessions at my Maplewood Drive office and virtual therapy via Zoom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

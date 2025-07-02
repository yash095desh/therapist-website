import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircleIcon } from "lucide-react";

const services = {
  "anxiety-stress": {
    title: "Anxiety & Stress Management",
    description:
      "Learn to manage overwhelming thoughts and physical symptoms using mindfulness and CBT techniques.",
    image: "/anxietyImage.jpg",
    content: `
Anxiety affects millions of people and can manifest in racing thoughts, physical tension, difficulty concentrating, and avoidance behaviors. As a licensed psychologist, I specialize in helping clients recognize their unique anxiety patterns and teach them proven tools to regulate and reduce symptoms.

In therapy, you’ll learn how to:
- Identify and challenge unhelpful thought patterns
- Implement breathing and grounding exercises
- Build a daily routine that supports mental clarity
- Reconnect with calm and confidence through mindfulness practices

Whether you struggle with general anxiety, panic attacks, or work-related stress, we’ll collaborate to create a plan that empowers you to take charge of your mental health.
`,
    highlights: [
      "Cognitive Behavioral Therapy (CBT)",
      "Mindfulness & Relaxation Techniques",
      "Personalized Coping Plans",
    ],
  },
  "relationship-counseling": {
    title: "Relationship Counseling",
    description:
      "Enhance communication, rebuild trust, and foster deeper emotional connections with your partner.",
    image: "/relationship.jpg",
    content: `
Every couple goes through ups and downs, but therapy can help break negative cycles and foster deeper intimacy. I provide a compassionate and nonjudgmental space where both partners can be heard.

Together we will work on:
- Communication skills and conflict resolution
- Understanding emotional needs and attachment styles
- Rebuilding trust after a rupture or betrayal
- Navigating life transitions like parenthood or separation

My goal is to help you strengthen the emotional foundation of your relationship and rediscover joy in your partnership.
`,
    highlights: [
      "Emotionally Focused Therapy (EFT)",
      "Couples Communication Coaching",
      "Support for Life Transitions",
    ],
  },
  "trauma-recovery": {
    title: "Trauma Recovery",
    description:
      "Heal from past emotional wounds in a supportive environment with evidence-based trauma therapy.",
    image: "/tramua.jpeg",
    content: `
Trauma can show up in your life through anxiety, disconnection, low self-esteem, nightmares, or even physical symptoms. I offer trauma-informed therapy that honors your pace and experience.

Treatment may include:
- EMDR (Eye Movement Desensitization and Reprocessing)
- Somatic experiencing to release trauma from the body
- Psychoeducation about trauma responses and the nervous system
- Rebuilding safety, empowerment, and identity

You are not alone in this. Healing is possible—and you deserve to feel safe, whole, and connected again.
`,
    highlights: [
      "EMDR & Somatic Approaches",
      "Safe, Nonjudgmental Environment",
      "Resilience-Building Practices",
    ],
  },
};

export default function ServicePage({ params }) {
  const service = services[params.slug];
  if (!service) return notFound();

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src={service.image}
          alt={service.title}
          width={600}
          height={400}
          className="rounded-xl shadow-md w-full object-cover"
        />

        <div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-gray-700 mb-6">{service.description}</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {service.highlights.map((point, index) => (
              <li key={index} className=" no-underline flex items-center gap-3"> <CheckCircleIcon className=" size-5 text-green-400"/> {point}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 max-w-3xl text-gray-700 leading-relaxed text-lg whitespace-pre-line">
        {service.content}
      </div>

      <div className="mt-10">
        <a
          href="/#contact"
          className="inline-block px-6 py-3 text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition"
        >
          Book a Session
        </a>
      </div>
    </section>
  );
}

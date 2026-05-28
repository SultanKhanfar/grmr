'use client';

import Link from "next/link";
import { BookOpen, Calculator, Microscope, HeartPulse, GraduationCap } from "lucide-react";

type Subject = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  accent: string;
  featured?: boolean;
  badge?: string;
};

export default function LessonsPage() {
  const primarySubjects: Subject[] = [
    {
      title: "Math",
      description:
        "Build confidence in arithmetic, algebra, geometry, and problem-solving through lessons designed for different skill levels.",
      href: "/lessons/math",
      icon: <Calculator className="w-8 h-8 text-primary" />,
      accent: "bg-blue-50",
      featured: true,
      badge: "Aligned with Florida CPALMS",
    },
    {
      title: "English",
      description:
        "Strengthen reading, writing, vocabulary, and communication skills through engaging English lessons tailored to each learner.",
      href: "/lessons/english",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      accent: "bg-green-50",
      featured: true,
      badge: "Aligned with Florida CPALMS",
    },
  ];

  const secondarySubjects: Subject[] = [
    {
      title: "Science",
      description:
        "Explore biology, chemistry, physics, and hands-on learning activities that make science exciting and approachable.",
      href: "/lessons/science",
      icon: <Microscope className="w-8 h-8 text-primary" />,
      accent: "bg-yellow-50",
    },
    {
      title: "Health",
      description:
        "Learn about wellness, nutrition, hygiene, and healthy habits through practical and accessible health education.",
      href: "/lessons/health",
      icon: <HeartPulse className="w-8 h-8 text-primary" />,
      accent: "bg-red-50",
    },
    {
      title: "Adult Education",
      description:
        "Support lifelong learning through lessons focused on literacy, foundational math, practical skills, and personal growth.",
      href: "/lessons/adults",
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      accent: "bg-purple-50",
    },
  ];

  const renderCard = (subject: Subject) => (
    <Link
      key={subject.title}
      href={subject.href}
      className={`group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
        subject.featured
          ? "border-primary/25 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 shadow-md hover:shadow-xl"
          : "border-gray-200 bg-white shadow-sm hover:shadow-lg hover:border-primary/20"
      }`}
    >
      {subject.badge && (
  <div
    className="mb-4 text-sm font-bold tracking-wide bg-clip-text text-transparent"
    style={{
        backgroundImage: "linear-gradient(90deg, #ec4899 0%, #a855f7 55%, #6366f1 100%)",
    }}
  >
    {subject.badge}
  </div>
)}

      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
          subject.featured
            ? "bg-white/90 shadow-sm ring-1 ring-white/60"
            : `${subject.accent} shadow-sm`
        }`}
      >
        {subject.icon}
      </div>

      <h2 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {subject.title}
      </h2>

      <p className="text-[15px] text-gray-600 leading-7 mb-6">
        {subject.description}
      </p>

      <span className="inline-flex items-center font-semibold text-primary">
        Browse {subject.title} Lessons
      </span>
    </Link>
  );

  return (
    <main className="w-full px-4 py-10 md:py-14">
      <section className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <div className="inline-flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm px-8 py-6 rounded-3xl shadow-lg border border-gray-100 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-primary">
              Explore Lessons by Subject
            </h1>
            <p className="text-gray-600 text-base md:text-lg mt-3 max-w-2xl">
              Browse our lesson library across math, English, science, health, and adult education.
            </p>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {primarySubjects.map(renderCard)}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondarySubjects.map(renderCard)}
          </div>
        </div>
      </section>
    </main>
  );
}
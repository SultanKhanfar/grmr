'use client'

import React, { useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

type Audience = 'Students' | 'Tutors' | 'Families'
type FileType = 'PDF' | 'DOC' | 'DOCX' | 'XLSX' | 'Google Docs' | 'Canva' | 'Multiple'

type TemplateItem = {
  name: string
  href: string
  desc: string
  audience: Audience | 'Students/Families'
  type: FileType
  emoji: string
  external?: boolean // open in new tab for external resources
}

const CATEGORIES = ['All', 'Students', 'Tutors', 'Families'] as const

const TEMPLATES: TemplateItem[] = [
  // Tutors — Lesson Plans
  {
    name: 'Lesson Plan Template (DOCX)',
    href: 'https://documentero.com/templates/education-training/document/lesson-plan/',
    desc: 'Downloadable blank lesson plan in Word; easy to adapt for any subject.',
    audience: 'Tutors',
    type: 'DOCX',
    emoji: '📝',
    external: true,
  },
  {
    name: 'SIOP Lesson Plan (DOCX)',
    href: 'https://www.cal.org/wp-content/uploads/2024/04/SIOP-Lesson-Plan-Template_1.docx',
    desc: 'Structured lesson framework (Sheltered Instruction) in Word format.',
    audience: 'Tutors',
    type: 'DOCX',
    emoji: '📄',
    external: true,
  },
  {
    name: 'Lesson Plan Templates (50+)',
    href: 'https://www.101planners.com/lesson-plan-template/',
    desc: 'Collection of weekly/daily lesson plan variations for Google/Word.',
    audience: 'Tutors',
    type: 'Multiple',
    emoji: '🗂️',
    external: true,
  },
  {
    name: 'Lesson Plan Format (DOC/PDF)',
    href: 'https://www.class-templates.com/lesson-plan-format.html',
    desc: 'Simple printable and editable lesson plan formats.',
    audience: 'Tutors',
    type: 'Multiple',
    emoji: '🧾',
    external: true,
  },
  {
    name: 'Free Lesson Plan Templates',
    href: 'https://www.template.net/lesson-plan',
    desc: 'Professional designs; download as Google Docs, Word, or PDF.',
    audience: 'Tutors',
    type: 'Multiple',
    emoji: '📚',
    external: true,
  },

  // Students — Homework/Assignment/Study
  {
    name: 'Homework Planner (PDF/Word/Excel)',
    href: 'https://www.vertex42.com/calendars/homework-planner.html',
    desc: 'Weekly planner to track assignments and due dates.',
    audience: 'Students',
    type: 'Multiple',
    emoji: '📅',
    external: true,
  },
  {
    name: 'Assignment Trackers (12 PDFs)',
    href: 'https://www.printabulls.com/education/assignment-trackers/',
    desc: 'Printable trackers with varied layouts and styles.',
    audience: 'Students',
    type: 'PDF',
    emoji: '✅',
    external: true,
  },
  {
    name: 'Homework Planner Printable (PDF)',
    href: 'https://www.mapleplanners.com/download/homework-planner-template',
    desc: 'Clean printable homework planner; easy to fill by hand.',
    audience: 'Students',
    type: 'PDF',
    emoji: '🖨️',
    external: true,
  },
  {
    name: 'Student Planner Templates (Canva)',
    href: 'https://www.canva.com/planners/templates/student/',
    desc: 'Hundreds of editable planners: weekly, monthly, subjects, and more.',
    audience: 'Students/Families',
    type: 'Canva',
    emoji: '🎨',
    external: true,
  },
  {
    name: 'Homework Planner Collections',
    href: 'https://templatelab.com/homework-planners/',
    desc: 'Many free planner layouts across Word, PowerPoint, and PDF.',
    audience: 'Students',
    type: 'Multiple',
    emoji: '🧩',
    external: true,
  },
  {
    name: 'Weekly/Monthly Planner (Printable)',
    href: 'https://onplanners.com/templates/free-weekly-planner-templates',
    desc: 'Free printable weekly and monthly planners to stay organized.',
    audience: 'Students/Families',
    type: 'PDF',
    emoji: '🗓️',
    external: true,
  },

  // Families — Guides
  {
    name: 'Parent Resources to Support Learning at Home',
    href: 'https://www.doe.virginia.gov/parents-students/parent-resources/parent-teacher-partnerships/education-resources-to-support-your-child-s-learning-at-home',
    desc: 'Guides, activities, and tools for families supporting learning.',
    audience: 'Families',
    type: 'PDF',
    emoji: '👪',
    external: true,
  },
]

export default function Templates() {
  const heroRef = useRef<HTMLDivElement | null>(null)
  const gridRef = useRef<HTMLDivElement | null>(null)
  const howRef = useRef<HTMLDivElement | null>(null)
  const suggestRef = useRef<HTMLDivElement | null>(null)

  const [active, setActive] = useState<(typeof CATEGORIES)[number]>('All')

  const filtered = useMemo(() => {
    if (active === 'All') return TEMPLATES
    return TEMPLATES.filter((t) =>
      t.audience === active ||
      (active === 'Students' && t.audience === 'Students/Families') ||
      (active === 'Families' && t.audience === 'Students/Families')
    )
  }, [active])

  useGSAP(() => {
    ;[heroRef, gridRef, howRef, suggestRef].forEach((ref) => {
      if (!ref.current) return
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
    })
  }, [])

  return (
    <div className="w-full">
      {/* Hero */}
      <section
        ref={heroRef}
        className="max-w-6xl mx-auto mb-10 bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-xl text-center"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">Extra Resources & Downloadable Templates</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Save time and stay organized with ready-to-use templates and helpful extras for students, tutors, and families.
        </p>
      </section>

      {/* Filters + Grid */}
      <section className="max-w-6xl mx-auto mb-10 px-4">
        <header className="text-center mb-6">
          <h2 className="text-3xl font-bold text-primary">Popular Downloads</h2>
          <p className="text-gray-700 mt-2">
            Print or edit digitally. Everything here is free to use and share for educational purposes.
          </p>
        </header>

        {/* Category Pills */}
        <div
          role="tablist"
          aria-label="Filter templates by audience"
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {CATEGORIES.map((cat) => {
            const selected = active === cat
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${cat}`}
                onClick={() => setActive(cat)}
                className={[
                  'px-3 py-1.5 rounded-full text-sm font-medium transition-colors',
                  selected ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-700 hover:bg-purple-100',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400',
                  'motion-reduce:transition-none',
                ].join(' ')}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          id={`panel-${active}`}
          role="tabpanel"
          tabIndex={0}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow motion-reduce:transition-none"
            >
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl leading-none" aria-hidden>
                    {t.emoji}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {t.external ? (
                        <a
                          href={t.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {t.name}
                        </a>
                      ) : (
                        <Link href={t.href} className="hover:underline">
                          {t.name}
                        </Link>
                      )}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{t.desc}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="inline-flex items-center rounded-full bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700">
                        {t.audience}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
                        {t.type}
                      </span>
                    </div>
                    <div className="mt-3">
                      {t.external ? (
                        <a
                          href={t.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-3 py-1.5 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-md hover:shadow-[0_0_12px_rgba(139,92,246,0.3)] hover:scale-[1.02] transform transition-all duration-300 text-sm"
                        >
                          Open / Download
                        </a>
                      ) : (
                        <Link
                          href={t.href}
                          className="inline-block px-3 py-1.5 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-md hover:shadow-[0_0_12px_rgba(139,92,246,0.3)] hover:scale-[1.02] transform transition-all duration-300 text-sm"
                        >
                          Download
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Suggest a Resource */}
      <section
        ref={suggestRef}
        className="max-w-6xl mx-auto bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg text-center"
      >
        <h2 className="text-2xl font-semibold text-primary mb-3">Suggest a Resource</h2>
        <p className="text-muted-foreground mb-5">
          Looking for something specific? Tell us what would help your student or tutoring session.
        </p>
        <Link
          href="mailto:education@grmruf.org?subject=Template%20Suggestion"
          className="inline-block px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-md hover:shadow-[0_0_15px_rgba(139,92,246,0.35)] hover:scale-[1.03] transform transition-all duration-300"
        >
          Email Your Idea
        </Link>
      </section>
    </div>
  )
}
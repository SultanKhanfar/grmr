'use client'

import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

type Lesson = {
    title: string
    desc: string
    url: string
}

function normalizeSlidesUrl(input: string) {
    try {
        const u = new URL(input)
        const isSlides = u.hostname.includes('docs.google.com')
        const isDrivePreview = u.hostname.includes('drive.google.com') && u.pathname.includes('/preview')
        if (isDrivePreview) return input
        if (isSlides && (/\/pub(embed)?/.test(u.pathname) || /\/embed/.test(u.pathname))) return input
        if (isSlides) {
            const match = u.pathname.match(/\/presentation\/d\/([^/]+)/)
            if (match?.[1]) {
                const id = match[1]
                return `https://docs.google.com/presentation/d/${id}/embed?start=false&loop=false&delayms=3000`
            }
        }
    } catch { }
    return input
}

// Example 6 health lessons
const LESSONS: Lesson[] = [
    {
        title: 'Importance of Annual Visits',
        desc: 'Learn why regular check-ups are essential for maintaining good health.',
        url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vQtxmEzo6w-udsMdweYzY17VUjte4q_cwtn3yFs0-JFtxLEfQ1htloRHIQSu3duR8lRRIhXGWDUqv2U/pubembed?start=false&loop=false&delayms=3000'),
    },
    {
        title: 'Mental Health',
        desc: 'Understanding mental health, recognizing common issues, and knowing when to seek help.',
        url: normalizeSlidesUrl('https://drive.google.com/file/d/1VpRYnHd8BzaRiSJ1FINue2XYNU8t4CxZ/preview'),
    },
    {
        title: 'Nutrition',
        desc: 'Basics of a balanced diet, essential nutrients, and tips for healthy eating habits.',
        url: normalizeSlidesUrl('https://drive.google.com/file/d/1I65ekmdmVsQAMHy4jttiL0f2XPHqjTFh/preview'),
    },
    {
        title: 'Prevention',
        desc: '',
        url: normalizeSlidesUrl('https://drive.google.com/file/d/1_cyC6cw53Rlw-pPofOXReKT5xW0Pa4H3/preview'),
    },
    {
        title: 'STD/STI',
        desc: 'Learn how to schedule appointments, describe symptoms, and understand basic health insurance terms.',
        url: normalizeSlidesUrl('https://drive.google.com/file/d/1S45ME5bhhLnG-DRIe8uz5NpXRsiQy7CH/preview'),
    },
    {
        title: 'Dental Health',
        desc: 'Basics of dental hygiene, common procedures, and how to maintain oral health.',
        url: normalizeSlidesUrl('https://drive.google.com/file/d/1rRsIxcA1blhGN3s0uvagE2wsQnh2pPJw/preview'),
    },
    {
        title: 'COVID-19',
        desc: 'Basics of COVID-19, prevention strategies, and what to do if you feel unwell.',
        url: normalizeSlidesUrl('https://drive.google.com/file/d/1Y-PanEl1h1oFeuGhRwz8MoNzF0FG6r_0/preview'),
    },
]

export default function HealthLessons() {
    const heroRef = useRef<HTMLDivElement | null>(null)
    const lessonsRef = useRef<HTMLDivElement | null>(null)
    const helpRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        ;[heroRef, lessonsRef, helpRef].forEach((ref) => {
            if (!ref.current) return
            gsap.fromTo(
                ref.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.0,
                    ease: 'power2.out',
                    scrollTrigger: { trigger: ref.current, start: 'top 85%' },
                }
            )
        })
    }, [])

    return (
        <main className="flex flex-col gap-10 py-12 px-4">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="max-w-6xl mx-auto bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-xl text-center"
            >
                <h1 className="text-4xl font-bold text-primary mb-4">Health Education Lessons</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Learn how to stay healthy, manage stress, and take care of your body and mind.
                </p>
            </section>

            {/* Lesson Cards */}
            <section ref={lessonsRef} className="max-w-6xl mx-auto w-full">
                <header className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-primary">Explore Health Topics</h2>
                    <p className="text-gray-700 mt-2">
                        Click through these short lessons to strengthen your understanding of personal health and wellness.
                    </p>
                </header>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {LESSONS.map((lesson) => (
                        <article
                            key={lesson.title + lesson.url}
                            className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col"
                        >
                            {/* Slide on top */}
                            <div className="relative w-full overflow-hidden border-b border-blue-100 shadow-inner">
                                <div className="aspect-[16/9]">
                                    <iframe
                                        src={lesson.url}
                                        allowFullScreen
                                        loading="lazy"
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Text below */}
                            <div className="p-5 flex flex-col items-center text-center flex-grow">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{lesson.title}</h3>
                                <p className="text-sm text-gray-600">{lesson.desc}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Help Section */}
            <section ref={helpRef} className="text-center">
                <div className="bg-gradient-to-br from-purple-200 to-blue-200 rounded-3xl border border-blue-100 p-10 max-w-6xl mx-auto shadow-md">
                    <h2 className="text-3xl font-bold text-primary mb-3">Want More Health Topics?</h2>
                    <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                        Tell us what you’d like to learn next—your feedback helps us create lessons that matter.
                    </p>
                    <Link
                        href="mailto:education@grmruf.org"
                        className="inline-block px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"
                    >
                        Contact GRMR Education
                    </Link>
                </div>
            </section>
        </main>
    )
}

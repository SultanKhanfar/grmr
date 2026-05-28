'use client'

import React, { useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

type Lesson = {
    url: string
    title: string
    desc: string
    category: (typeof CATEGORIES)[number]
}

const CATEGORIES = [
    'All',
    'Daily Life',
    'Grammar & Skills',
    'Community & Civic Life',
    'Financial Literacy',
    'College & Education',
    'Jobs & Careers',
    'Digital Skills & Technology',
] as const

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

const LESSONS: Lesson[] = [
    { title: 'Introductions and Greetings', desc: 'Practice common ways to introduce yourself and greet others in everyday situations.', category: 'Daily Life', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vRsAImgwI90oiDLOgoty7vCBWDREQE9Z79nIgKXmwEQGpMu8t86ZE0UzcdUkufuJZNxlz_WbQbdgwGo/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Gestures and Sayings', desc: 'Learn common American gestures and idiomatic sayings to avoid misunderstandings.', category: 'Daily Life', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vTbVu0hhOJUwMP53BVkUmK184mbYJrkiHUq-DcHg3eIvuCRSgKaA6Gbmsc-2LazcU48q3U-fKGyQvHl/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Hobbies', desc: 'Explore different hobbies and learn how to talk about your interests in everyday conversation.', category: 'Daily Life', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vSfV8aPSomh-w4of3B3K40ZxY3ep7X0HJDYe59F5r8OjRJK1bo1zLh3dFXHdzlCmLzRVMwlEd9invun/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Grocery Shopping', desc: 'Use phrases for finding items, comparing prices, and checking out at the store.', category: 'Daily Life', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vRnZTgM-dXfHyk_72DNZtZY3-Lj8IwXAgOkwOMWfAoipMonjh5mAWgdYWa84Ag4Sgd-q7s5x4kBNxCp/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Family', desc: 'Learn family vocabulary and how to describe relatives and relationships.', category: 'Daily Life', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vSA2AqLAXzHHmLZ1bKp-PJNB6ksE55B8w6uHaAEEwAwBQoq4OrlXkNib4dq90kj11839AhNVHiv2NW6/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Body Parts', desc: 'Gain essential vocabulary for body parts and basic health needs.', category: 'Daily Life', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vRZ5hqUqbPrE3wQT3_chSnYoNzABk9IozwLlLmxg87F_E1atq0uCGF1qtYWkSisRiiXytrCcov6YmHb/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Household Chores', desc: 'Learn practical tips and tricks for laundry, cleaning, and maintaining your home.', category: 'Community & Civic Life', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vQ2usH2uMmm7yJbmqFazr8P3FFrIsFY4AGP1fhK5wHCzL0bZ0X4AmNiSBY1beXh2IdPqiObtY-MCGLy/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Holidays', desc: 'Explore major U.S. holidays and common ways communities celebrate them.', category: 'Community & Civic Life', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vS2jPoFqr-lC8tTvoMPcbRC8er9QdYkWmSPrrABrBkfp873F0HdZbXb-tm53h1AhOa-AMqFTZSmyYjh/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Technology', desc: 'Learn essential digital terms and devices to use phones and computers confidently.', category: 'Digital Skills & Technology', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vQL3N-uOLoajV9jd55aB1kJq3M5pbeMB4TKodb3wMnIW_J1k4Yg3VdRV0TflI-7QNvAD9cHJuxp4t1q/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Transportation', desc: 'Phrases and tips for using buses, rideshares, and getting around town.', category: 'Community & Civic Life', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vQVTGGMhdamLR_YGOLrqT2lL2MQxIE7CYWNBvXgXqer9HC1Zh9o-_9tX66sowk6IqBUDVTDSkLQVj2Y/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Voting and Elections', desc: 'Understand voter registration, ballots, and how elections work in the U.S.', category: 'Community & Civic Life', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vSIvNHakeW8iDkfQAScrLgcNHqPvvms1LUQ8Ukrfzx1nJSedvW7Z-5G9TDPksLgQ8hW-iaAlxjrYW_l/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Personal Finance', desc: 'Learn budgeting, banking, and saving basics for everyday life.', category: 'Financial Literacy', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vTOEvhugWKB5KyGFk1fuOuf67x1LBq8z5KvocH5FIDL8OaaojrKN8gABe5ZC30KRCN0nzalgXGalm72/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Job and Interview Skills', desc: 'Build a resume and practice clear, confident answers to common interview questions.', category: 'Jobs & Careers', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vQisqyU3Te30kDdQmGeusnkcI9Inq6ItS-XnVzwgMX6LBh1nVN1pMH1oxC6izKwwakCsJZS5bMnpAGl/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Adjectives', desc: 'Learn to describe people, places, and things using common adjectives.', category: 'Grammar & Skills', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vSAbQWGkd3iO6c96usXlLCvf33VtLnW1PB4vpcf9SGMy0HujWUiuxKRWpxrKkGN7LbAYR8DceB4Yqug/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Adjectives vs Adverbs', desc: 'Know when to use adjectives and adverbs to make sentences clearer.', category: 'Grammar & Skills', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vSU-EtCmq2NsR2nkG7J40qRr4aGsG-0vO_bBaliTwjrcwasnTmW65fk8wDPzSgw1XyfaZE8013FwBaQ/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Sentence Structure', desc: 'Build clear sentences using subject–verb–object patterns and connectors.', category: 'Grammar & Skills', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vQAD8aW_dn2HvhX_DbOkk-d_h_DykJTiJpRMcqjX87hIuZ8_1LOeg9AlFnRa7OAaq2hSFj0h4gboite/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'First Conditionals', desc: 'Use “if” to talk about real possibilities, plans, and likely outcomes.', category: 'Grammar & Skills', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vQu1gzc97MW3zii_FV8IojbWOp-sIaZnlQHgxHflyCHZ9JNkFmjDtnhgroG0loqfWFSGl2XazImN1ZX/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Second and Third Conditionals', desc: 'Talk about imaginary or past-unreal situations using advanced “if” forms.', category: 'Grammar & Skills', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vR5k3lH_POIHG7Xum2-SM8bl7ROJv7Jka85zJ_URSTO6qBJtRdPBkrQguCd3RIPAKxmDqo92Rk9c3E0/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Reading Comprehension', desc: 'Use strategies to find the main idea, details, and new words in short texts.', category: 'Grammar & Skills', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vTrVqeqjSDpZfzVbMqat8beaXFYJyh6BOYdVM5cxZCJLMMiNNXXQmOfft2bHHjNgB1kP4rF8S18O3iB/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Listening Comprehension', desc: 'Practice listening for key information, instructions, and everyday conversations.', category: 'Grammar & Skills', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vSx3GXodh7EGlVPe7vOFPV8fMOxuzLQw9IztZ9-pxLxNCs97zs7XT1k1Q3WB6qfP6nSBkRSkfec_cWw/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Time Management Skills', desc: 'Plan your day, set priorities, and meet deadlines with simple tools.', category: 'Jobs & Careers', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vS4gcvpUTfHjIMX7RRQnuAsWTf6CVYnVwFwnKQfTdO_yM6fqQA3Ble9oYhF92L9BziUHBccKcTznWSW/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Emailing Etiquette', desc: 'Write professional emails with clear subjects, greetings, and tone.', category: 'Jobs & Careers', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vRLlB1Bxo_d-oDD1xv7mSeWE_QRzHHiXRsog2cl4r5r1qf-nlzGGH5tYfTMN5VgPwnQVDYI0uOTa3o3/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Financial Resources', desc: 'Understand credit, debit, investing, and how to protect yourself from identity theft.', category: 'Financial Literacy', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vRqnYGerH_koaaiQ4LcngJDnui3hPFA72zNcoXa72BO_GB7SorMfiin1uvilM5pGWggC-6LdLfZX-hi/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'College Financial Aid', desc: 'Understand grants, scholarships, and FAFSA steps to pay for college.', category: 'College & Education', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vQ0OEUs3APmw0dTfmLMBIsRMB1X-xwZ6m61gBZdWqWKUKbf00PGZFZC8ZnfyuF-4W0iMIhZXi-uhjFt/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'College Preparatory Exams', desc: 'Know what to expect on SAT/ACT-style tests and simple ways to prepare.', category: 'College & Education', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vThRbFfHbEi424g0GAbtnKX78-bnUO4UYBVGB0bxV4ayNeVoOWYYS0MIzo9Wqq9XEdjXf7jVB9gl9B9/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'College Applications', desc: 'Follow key steps and timelines to submit strong college applications.', category: 'College & Education', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vQxrDFiulQfgOOi9NYPZhGpoUeF_3cA2GO85EVpl96k5RNL2CQdSMtNNb6rbiYZ92T5p1AMwo3Cr4Rf/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Essay Writing', desc: 'Plan, organize, and revise clear essays for school or applications.', category: 'College & Education', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vRDgzCVp2moTNEHcL6Vvrb3BTquTH7QqSriD7zKvFKXfae5CH8NEf5UwSewNmWyAtPfXlsSADpjZbaB/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Resume Writing', desc: 'Create a simple, effective resume that highlights your strengths.', category: 'Jobs & Careers', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vSvoLtIUxkAUXAIDVSBKBxEfEbf2Mx9v_BsK9kTTy0uUHkgeMSnsbyelJjwlf_LBkOf_6vBHaAGTGSw/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Business Careers', desc: 'Explore common business roles and the skills they use.', category: 'Jobs & Careers', url: normalizeSlidesUrl('https://drive.google.com/file/d/1ABBxndS9Od3h425VINLx91n-CwNX4a7m/preview') },
    { title: 'Career Fields', desc: 'Get an overview of major career paths and how to choose one that fits you.', category: 'Jobs & Careers', url: normalizeSlidesUrl('https://drive.google.com/file/d/105AaN_6LxnGbA4Ks-VC6nWi44rEK3fEM/preview') },
    { title: 'Public Service Jobs', desc: 'Learn about community-serving careers and typical requirements.', category: 'Jobs & Careers', url: normalizeSlidesUrl('https://drive.google.com/file/d/1MElQ6fsWbI88YxR44r0L8AdsLXOYVyW1/preview') },
    { title: 'Job Hunting', desc: 'Find openings, network effectively, and apply with confidence.', category: 'Jobs & Careers', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vRG2KFf5gPMHERLynz7l1BbvLQMJ5kBN_TQ3yMEBbh34zZQlFJEyJKRJZt4v0vocyHK_EKXrw9el5uc/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'The Medical Field', desc: 'Explore healthcare careers and the training they require.', category: 'Jobs & Careers', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vSGUWhBmVjWJCs0Owuc9B31LMDmoBr8Yr4qeM9wUecHL-c3nzF6RRNE2kOaEJ6u7jIondbHKNkJHJFy/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Jobs in Technology', desc: 'Discover tech roles and the skills to get started.', category: 'Jobs & Careers', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vRixY77_znFv-9R2GUPc-geFSkX2-mVb-y8V8558nZ5eYsKkOJWJ0ayU57XTHwawEdhdLJwBEC678bD/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Careers in the Trade Industry', desc: 'Learn about skilled trades and pathways to apprenticeships.', category: 'Jobs & Careers', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vSOzoY4GH2Btsq4uBPzesiec0itF21O4R1UHMM17DysSW-yaMzKibMmFHF2Y0kCZwfjdRWVYi49WQM7/pubembed?start=false&loop=false&delayms=3000') },
]

export default function AdultsLessons() {
    const heroRef = useRef<HTMLDivElement | null>(null)
    const lessonsRef = useRef<HTMLDivElement | null>(null)
    const helpRef = useRef<HTMLDivElement | null>(null)
    const [active, setActive] = useState<(typeof CATEGORIES)[number]>('All')

    const filtered = useMemo(
        () => (active === 'All' ? LESSONS : LESSONS.filter((l) => l.category === active)),
        [active]
    )

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
                <h1 className="text-4xl font-bold text-primary mb-4">Adult Education Lessons</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Lessons with real-world skills in language, technology, and daily life.
                </p>
            </section>

            {/* Lessons Grid + Filters */}
            <section ref={lessonsRef} className="max-w-6xl mx-auto w-full">
                <header className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-primary">Explore Lessons</h2>
                    <p className="text-gray-700 mt-2">
                        Choose a topic to start learning — each lesson includes slides and activities.
                    </p>
                </header>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {CATEGORIES.map((cat) => {
                        const selected = active === cat
                        return (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={[
                                    'px-3 py-1.5 rounded-full text-sm font-medium transition-colors',
                                    selected ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-700 hover:bg-purple-100',
                                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400',
                                ].join(' ')}
                            >
                                {cat}
                            </button>
                        )
                    })}
                </div>

                {/* Lesson Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.length === 0 && (
                        <div className="col-span-full text-center text-sm text-gray-500">
                            No lessons in this category yet.
                        </div>
                    )}

                    {filtered.map((lesson) => (
                        <article
                            key={lesson.title + lesson.url}
                            className="rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col"
                        >
                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{lesson.title}</h3>
                                <p className="text-sm text-gray-600 mb-3">{lesson.desc}</p>
                                <span className="inline-flex items-center rounded-full bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700 self-start mb-4">
                                    {lesson.category}
                                </span>

                                <div className="relative w-full overflow-hidden rounded-xl border border-blue-100 shadow-inner flex-grow">
                                    <div className="aspect-[16/9]">
                                        <iframe
                                            src={lesson.url}
                                            allowFullScreen
                                            loading="lazy"
                                            className="w-full h-full rounded-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Help Section */}
            <section className="text-center">
                <div className="bg-gradient-to-br from-purple-200 to-blue-200 rounded-3xl border border-blue-100 p-10 max-w-6xl mx-auto shadow-md">
                    <h2 className="text-3xl font-bold text-primary mb-3">Tell Us What You Think!</h2>
                    <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                        If you have suggestions for other helpful lessons, please reach out to our team!
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
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
    'Life Science',
    'Human Biology & Health',
    'Earth & Environment',
    'Space & Astronomy',
    'Physical Science & Chemistry',
    'STEM Careers & Practices',
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
    // Human Biology & Health
    { title: 'Medicine for Kids', desc: 'Explore how doctors diagnose, treat, and keep people healthy.', category: 'Human Biology & Health', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vTV1FqluWss8aBuo-zk45M8PPaZRkGQo8D1oOgLkmic9WJrH3bZb-pICcHR6RJanDARdHbBIrGTtKNJ/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Mental Health', desc: 'Learn brain–body basics and healthy habits for emotional well-being.', category: 'Human Biology & Health', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vS8-NJ3QTWmLXVpjBCz2phE6LdmFU6chd2zZToLYVPJvqtfyjoHO3ncyUBAIMSeGUzb7X8OzJcHsT-A/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Neuroscience: About the Brain!', desc: 'Explore brain parts and how they control thoughts and actions.', category: 'Human Biology & Health', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vREAjZz9wGGZTye4wQY9hmd8So5GYvEk9COhhOS0D-F33QyyZ7nF8XegrmmZFBOzGQOCBWK18If4tWw/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Theories of Intelligence', desc: 'Compare ideas about intelligence and how people learn.', category: 'Human Biology & Health', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vQ-nERgsOZPsI2oYVqW7i4hGHVPdVsQxYaWWofJ7UB6ycZLuE8s0dUmEfvkEd3FqDJUPIa7tv3yz8vO/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'The Microbiome', desc: 'Discover helpful microbes in and on us that keep us healthy.', category: 'Human Biology & Health', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vTwcgXg4xAochAZ_YHF5YnEmWeSYoGEMwWmFiUIy0A3WQFgCtc3KUgptjWJT7-rmcpFsr9d-hCZD-rN/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'The Growth Mindset', desc: 'Learn how practice and persistence strengthen the brain for learning.', category: 'Human Biology & Health', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vT1GXlNLnWLC6S-8sBv0hENVaQmogKKJyppvMCWDb2fZ6ELsUjHjyHpPQaQWV2AGfg3oNDEsrsJweza/pubembed?start=false&loop=false&delayms=3000') },

    // Life Science
    { title: 'Cells: The Basics', desc: 'Learn the parts of cells and how they keep life running.', category: 'Life Science', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vSDn5LFt_e35xbdd3AAOywMtDFBbVtbxhNAEGgIH36wvW4V3NuwEMbiS5Cmf1CoW5CaAlb5ILb8mpte/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Plants', desc: 'See how plants grow, make food, and support life on Earth.', category: 'Life Science', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vQsAeA-iTRRrh2T1DQ8ia8IG770t2_pstt1QPW5C-KEIlSliaWcGCka7OZ1ih1rYmSHMGNiqrEYJKlo/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Marine Life: Animals of the Ocean', desc: 'Meet ocean animals and how they survive underwater.', category: 'Life Science', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vT7Cf6uDbYpj0nYEyRtXSD-WORoB7xSJP2pXeuDqGanOyACwVXs23CNqiwRteEuAkxEM5D_iON0I3r4/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Circle of Life', desc: 'Explore food chains and energy flow in ecosystems.', category: 'Life Science', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vRacNwm3mtt__vnoLnO8c6QzrTQY1sf7apsdWy9CoFdtdrMc7gL4oblGoemIx7VIkPrbfJm5iZGU1eC/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Mammals, Birds, Reptiles, Amphibians!', desc: 'Compare animal groups and their unique traits.', category: 'Life Science', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vTsBfaioOXg8P_7ewFOU_KRtq8PkZdL9j34VlLWob3AAbljfpehNUTykb8Q-ypEMA_XfVaSUQURWUKu/pubembed?start=false&loop=false&delayms=3000') },

    // Earth & Environment
    { title: 'Weather', desc: 'Discover how weather forms and how we predict storms.', category: 'Earth & Environment', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vTgWR-gZ0VZzZhBHP82AkMyWhLZLTKIJPnfKlweIXZqocwzSh3vfI_k2cwZGF_XaA1aigSCORxPD_gn/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'The Water Cycle', desc: 'Follow water as it evaporates, condenses, and returns as rain.', category: 'Earth & Environment', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vQwtXHzHh64QEIayHwzh0QnyK2UgWvkEpwiHKy2BLfQuB4YoyidFWqpCS6oJedqfXwOLZrc1W3XaS5F/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Renewable Energy', desc: 'Explore clean energy sources and why they matter.', category: 'Earth & Environment', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vTEn9EG3ftrKyTAZT7Bj3cTZRc7TFqc_iLOklYuh-Nf8c9OVgtaqyKJ3b7sObdzWY3XNDK94Kf1JxVy/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Natural Disasters', desc: 'Understand earthquakes, hurricanes, and how to stay prepared.', category: 'Earth & Environment', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vQLNwqBHGrp5zThLuxRUmE82h-LbJ-SpkvpBQ72oVZZxBuUzY6HRgPn4kNInWoxzkYcgwmLJHYA6QKu/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Oceans', desc: 'Dive into ocean zones, currents, and the life they support.', category: 'Earth & Environment', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vSOlCcZsxu3CFHxhHbVQTm7AlDnj4SmDcxLaSLHtnLAM9cTug0LyMQt-SiTxvPkaUg52rVVhw_l9-3w/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Earth: Soil, Biosphere, and Biomes', desc: 'Discover Earth’s living layers and the habitats they form.', category: 'Earth & Environment', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vQZWNhmTuxzaspC2SCxEJi2UAQF3n74drqA3NxfK3CnLnSlgz0eaAIwVQ8NPx2aHcH1aiQyUa5_T_6V/pubembed?start=false&loop=false&delayms=3000') },

    // Space & Astronomy
    { title: 'Astronomy for Kids', desc: 'Tour the night sky and our place in the universe.', category: 'Space & Astronomy', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vQ-rprG-Br7NY7zUMmzPafR9av3wegYtiY0q_zUZF5WrLHQ8TiIMXdscmSzaC645a7HvJzRp2PvQZHF/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Space Exploration', desc: 'See how rockets and robots explore space and discover new worlds.', category: 'Space & Astronomy', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vTSsjw_hT5twBGpn9mwXJODCC4iHUlEk1Zb0CzOhm92sJUGDQWk6u64AGKvqY-3nsG4v0G-AtHTWkb9/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Astronomical Objects', desc: 'Explore stars, planets, comets, and other objects in space.', category: 'Space & Astronomy', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vSzRzo2bMEo_a7lvQ3VXA2w8EGY_AGVTvpIBsk7Uf7TrmrwTDvWSOjUwB0k8zXMXU0HSxNrjrqK_apj/pubembed?start=false&loop=false&delayms=3000') },

    // Physical Science & Chemistry
    { title: 'Acids and Bases', desc: 'Understand pH, everyday acids and bases, and how they interact.', category: 'Physical Science & Chemistry', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vQMZmb3SRXzzQiXk-LQCKGs-X9Yor_Av4OLz9nXmpbJmPbq9BQHldeE3X4ziNxost0TjKwvWKf8YPe5/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Energy', desc: 'Learn where energy comes from and how it changes form around us.', category: 'Physical Science & Chemistry', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vTYOQWb1wprkYgQvLMpwVMv-YRSjx5pghp00_j3F2yzDiM_ZE3PCe2kCqlQknlFtid5qS2XhF1FciJX/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Magnetism', desc: 'Explore magnets, magnetic fields, and real-world uses.', category: 'Physical Science & Chemistry', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vSCSw9WQCtCaIVGf2FkuFOc0mQP4vDFTx--TxhPtl46GiFL_40u2uqs_mYB0BGLDPqcW_MmHagPVqFj/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Electricity', desc: 'Understand circuits, current, and safe use of electricity.', category: 'Physical Science & Chemistry', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vTMsME1_yIjaoNzhgSIbfr12WZ8xZ2tBQNgqIac6piCeefeibAjymZLOUiig6H9lsCsRG9R6nsWk1-u/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'States of Matter', desc: 'Learn solids, liquids, gases, and how matter changes state.', category: 'Physical Science & Chemistry', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vSE2GwW5da8BfZ62loGilvke5dDwZyerQ73yJRg51c_2Jsp9y0UzQ8igPnIbAxb66TPeomjBUJfULIc/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Polymers', desc: 'Meet plastics and biopolymers and how their chains shape properties.', category: 'Physical Science & Chemistry', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vSUjgWYqcDAtp7cxyqxL5Q61MJsW6fLbouAUFqcRY_WDmPfyk6LTUIVCKL6ETrQYksRBuouQjovVoNO/pubembed?start=false&loop=false&delayms=3000') },

    // STEM Careers & Practices
    { title: 'Veterinary Medicine', desc: 'Discover how veterinarians care for animals and protect public health.', category: 'STEM Careers & Practices', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vTPSVP4Cipv0tV74pKfuFWfBk0P8I-Imrdr5_ONfhQRKcK6NGxssRfAQukTBhyXumKIQSIu8E6M7CKO/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Forensic Science', desc: 'See how science helps solve crimes using evidence and lab techniques.', category: 'STEM Careers & Practices', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vQ6p_E3IIrVqxMznTM6VEXPBVGWwPnB8pDlIo0wa8BqTw4dXPMv8Qfr-Z5epTEQfg/pubembed?start=false&loop=false&delayms=3000') },
    { title: 'Life of a Scientist', desc: 'See what scientists do daily—from questions to experiments.', category: 'STEM Careers & Practices', url: normalizeSlidesUrl('https://docs.google.com/presentation/d/e/2PACX-1vTPXjtVg-ePBRltWVTT-1ZGIr6EkORHD-Aq1B9u_QA3kpQDKyzOX5BafY4ruWM9tFYOuN2GAtfqbWhR/pubembed?start=false&loop=false&delayms=3000') },
]

export default function KidsScienceLessons() {
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
                <h1 className="text-4xl font-bold text-primary mb-4">Science Lessons</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Kid-friendly science with space, life, Earth, physics, and real STEM careers.
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
            <section ref={helpRef} className="text-center">
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
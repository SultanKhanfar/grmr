'use client'

import React, { useRef } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Video, Users } from 'lucide-react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const deliveryMethods = [
    {
        title: 'Virtual Tutoring',
        icon: <Video className="w-10 h-10 text-white" />,
        description:
            ' Our virtual tutoring program offers free, one-on-one academic support to K–12 and adult learners through weekly sessions. Tutors provide personalized guidance tailored to each students needs, helping them build confidence and succeed in school.',
        href: '/services/virtualtutoring',
        iconBg: 'bg-gradient-to-br from-purple-500 to-violet-500'
    },
    {
        title: 'In-Person Tutoring',
        icon: <Users className="w-10 h-10 text-white" />,
        description:
            'Our monthly events in Jacksonville bring together 50+ students for engaging, group-based learning led by our volunteers. Each event features interactive lessons, collaborative activities, and a welcoming space where students can learn and grow together.',
        href: '/services/inpersontutoring',
        iconBg: 'bg-gradient-to-br from-violet-500 to-fuchsia-500'
    }
]

const DeliveryMethods = () => {
    const headerRef = useRef(null)
    const methodsRef = useRef(null)
    const methodsContainerRef = useRef(null)

    useGSAP(() => {
        gsap.fromTo(
            headerRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            }
        )

        gsap.fromTo(
            methodsRef.current,
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 1.2,
                delay: 0.4,
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: methodsRef.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            }
        )
    }, [])

    return (
        <section className="w-full py-20 px-4">
            <div className="mb-8 text-center">
                <div ref={headerRef} className="inline-flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg min-h-[90px]">
                    <h2 className="text-4xl font-semibold text-primary">Tutoring Services</h2>
                    <p className="text-muted-foreground text-base mt-2">
                        Choose the learning approach that works best for you
                    </p>
                </div>
            </div>

            <div ref={methodsContainerRef} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <div ref={methodsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {deliveryMethods.map((method) => (
                        <div
                            key={method.title}
                            className="bg-white rounded-xl border border-border p-8 hover:shadow-md transition-all flex flex-col items-center text-center hover:border-primary/30"
                        >
                            <div className={`${method.iconBg} p-4 rounded-full shadow-sm mb-4`}>
                                {method.icon}
                            </div>
                            <h3 className="text-2xl font-semibold mb-3 text-primary">{method.title}</h3>
                            <p className="text-muted-foreground mb-6">{method.description}</p>
                            <Button
                                size="lg"
                                className="bg-[#f3e8ff] text-[#86198f] rounded-full px-6 py-2 font-semibold border border-[#d8b4fe] transition duration-300 hover:shadow-[0_0_12px_2px_rgba(216,180,254,0.6)] hover:text-white"
                                asChild
                            >
                                <Link href={method.href}>Learn More</Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DeliveryMethods
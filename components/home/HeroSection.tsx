'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Book, UserPlus } from "lucide-react"
import FinisherHeader from "@/components/FinisherHeader"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

const HeroSection = () => {
    const heroRef = useRef(null)
    const logoRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const buttonsRef = useRef(null)

    useGSAP(() => {
        // Hero container animation
        gsap.fromTo(
            heroRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                ease: "power2.out",
            }
        )

        // Logo animation
        gsap.fromTo(
            logoRef.current,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 1.2,
                delay: 0.2,
                ease: "back.out(1.7)",
            }
        )

        // Title animation
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.5,
                ease: "power3.out",
            }
        )

        // Subtitle animation
        gsap.fromTo(
            subtitleRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.7,
                ease: "power3.out",
            }
        )

        // Buttons animation
        gsap.fromTo(
            buttonsRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.9,
                stagger: 0.15,
                ease: "power3.out",
            }
        )
    }, [])

    return (
        <section className="w-full min-h-[600px] py-32 relative overflow-hidden">
            <div ref={heroRef} className="relative z-10 max-w-5xl mx-auto bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl px-10 py-24 text-center border border-primary/10">
                <Image
                    ref={logoRef}
                    src="/images/GRMR.png"
                    alt="GRMR Logo"
                    width={250}
                    height={250}
                    className="mx-auto mb-8"
                />
                <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    Empowering Refugees Through Personalized Mentorship
                </h1>
                <p ref={subtitleRef} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                    Free academic support tailored to K–12 and adult learners.
                </p>
                <div ref={buttonsRef} className="flex flex-wrap justify-center gap-6">
                    <Button
                        size="lg"
                        className="bg-[#86198f] text-white hover:bg-[#a21caf] hover:shadow-md hover:shadow-[#86198f]/30 border-2 border-[#86198f] rounded-full px-8 py-6 font-semibold transition-all duration-300 text-lg"
                        asChild
                    >
                        <Link
                            href="/become-a-student"
                            className="flex items-center gap-3 px-8 py-3 rounded-full bg-[#86198f] text-white font-semibold text-lg transition duration-300 shadow-md hover:shadow-[0_0_16px_4px_rgba(134,25,143,0.4)]"
                        >
                            <Book className="h-6 w-6" />
                            Become a Student
                        </Link>
                    </Button>
                    <Link
                        href="/become-a-tutor"
                        className="flex items-center gap-3 px-8 py-3 rounded-full bg-[#f3e8ff] text-[#86198f] font-semibold text-lg shadow-md transition duration-300 hover:shadow-[0_0_12px_2px_rgba(134,25,143,0.4)]"
                    >
                        <UserPlus className="h-6 w-6" />
                        Become a Tutor
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
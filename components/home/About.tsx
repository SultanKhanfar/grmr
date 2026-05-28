'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const images = [
    "/images/about1.png",
    "/images/about2.png",
    "/images/about3.png",
    "/images/about4.png",
    "/images/about5.png",
    "/images/about6.png",
    "/images/about7.png",
    "/images/about8.png",
]

const About = () => {
    const [currentImage, setCurrentImage] = useState(0)
    const aboutRef = useRef(null)
    const missionRef = useRef(null)
    const impactRef = useRef(null)
    const statsRef = useRef(null)
    const carouselRef = useRef(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    useGSAP(() => {
        // Main section animation
        gsap.fromTo(
            aboutRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        )

        // Mission section animation
        gsap.fromTo(
            missionRef.current,
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                delay: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: missionRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            }
        )

        // Impact section animation
        gsap.fromTo(
            impactRef.current,
            { opacity: 0, x: 30 },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                delay: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: impactRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            }
        )

        // Stats animation with stagger
        gsap.fromTo(
            statsRef.current.children,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                delay: 0.5,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            }
        )

        // Carousel animation
        gsap.fromTo(
            carouselRef.current,
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                delay: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: carouselRef.current,
                    start: "top 95%",
                    toggleActions: "play none none none",
                },
            }
        )
    }, [])

    return (
        <section className="w-full py-16 px-4">
            <div ref={aboutRef} className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                {/* Mission + Impact Row */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Our Mission */}
                    <div ref={missionRef} className="w-full lg:w-1/2 space-y-4">
                        <h3 className="text-4xl font-bold text-primary mb-4 text-center">Our Mission</h3>

                        <p className="text-gray-700 leading-relaxed">
                            Gators for Refugee Medical Relief (GRMR) is a non-profit educational organization committed to providing free academic support to K–12 students and adult learners, with a focus on refugee communities. We believe that everyone deserves access to a quality education-regardless of where they come from or what they&apos;ve been through.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            For many refugee families, resettlement comes with immense challenges: learning a new language, navigating unfamiliar school systems, and adjusting to a society that may feel distant or overwhelming. These barriers can leave students feeling isolated, discouraged, and at risk of falling behind—through no fault of their own.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Since 2017, GRMR has worked to bridge that gap. Through personalized tutoring, mentorship, and accessible, culturally responsive resources, we help students not only catch up, but thrive. Our programs support learners at every stage—whether it&apos;s mastering basic math, preparing for college, or simply building the confidence to raise a hand in class.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Beyond academics, our mission is about belonging. By uplifting these students, we help ease the transition into a new life, foster meaningful connections, and lay the foundation for success. In doing so, we strive to build a future rooted in compassion, inclusion, and opportunity—for all.
                        </p>
                    </div>

                    {/* Our Impact */}
                    <div ref={impactRef} className="w-full lg:w-1/2">
                        <h3 className="text-4xl font-bold text-primary mb-4 text-center">Our Impact</h3>

                        {/* Stat Bubble */}
                        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-blue-100 p-6 w-full max-w-[500px] mx-auto transition-all">
                            <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-primary">20,000+</p>
                                    <p className="text-sm text-gray-700">Hours of Tutoring</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-primary">150+</p>
                                    <p className="text-sm text-gray-700">Current Volunteers</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-primary">100+</p>
                                    <p className="text-sm text-gray-700">Guided Yearly</p>
                                </div>
                            </div>
                        </div>

                        {/* Image Carousel directly under stats */}
                        <div ref={carouselRef} className="mt-6 flex justify-center">
                            <div className="relative rounded-2xl overflow-hidden shadow-md w-full lg:w-[500px] h-[400px]">
                                {images.map((img, index) => (
                                    <Image
                                        key={index}
                                        src={img}
                                        alt={`Slide ${index + 1}`}
                                        fill
                                        className={`object-cover absolute inset-0 transition-opacity duration-2000 ease-in-out ${index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
                                            }`}
                                        sizes="(max-width: 768px) 100vw, 500px"
                                        priority={index === 0}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Values */}
                {/*<div className="mt-10 pt-8 border-t border-gray-200">*/}
                {/*    <h3 className="text-4xl font-bold text-primary mb-4 text-center">Core Values</h3>*/}
                {/*    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">*/}
                {/*        {[*/}
                {/*            {*/}
                {/*                title: "Compassion",*/}
                {/*                description: "We lead with empathy, cultural understanding, and care in every interaction—with students, families, and communities."*/}
                {/*            },*/}
                {/*            {*/}
                {/*                title: "Initiative",*/}
                {/*                description: "We empower volunteers and learners through leadership, education, and hands-on collaboration to drive lasting change."*/}
                {/*            },*/}
                {/*            {*/}
                {/*                title: "Global Awareness",*/}
                {/*                description: "We educate with a global lens, recognizing how international issues shape local experiences and drive our advocacy."*/}
                {/*            },*/}
                {/*            {*/}
                {/*                title: "Service & Justice",*/}
                {/*                description: "We prioritize the needs of refugee and migrant communities, speaking out against injustice and working toward equity."*/}
                {/*            }*/}
                {/*        ].map((value) => (*/}
                {/*            <div*/}
                {/*                key={value.title}*/}
                {/*                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-blue-100 p-6 hover:shadow-md transition-all"*/}
                {/*            >*/}
                {/*                <h4 className="text-xl font-semibold mb-2 text-primary">{value.title}</h4>*/}
                {/*                <p className="text-gray-700">{value.description}</p>*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>
    )
}

export default About
'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

type Student = {
    id: number
    name: string
    role: string
    testimonial: string
    image: string
}

const students: Student[] = [
    {
        id: 1,
        name: 'GRMR Mentee',
        role: '',
        testimonial:
            "Tutoring helps me learn, and sometimes when my friends don't understand, I help them understand too.",
        image: '/students/student01.jpeg'
    },
    {
        id: 2,
        name: 'GRMR Mentee',
        role: '',
        testimonial:
            "I want to be a doctor because you can learn more stuff, and when people are sick, like my friends, you can help them.",
        image: '/students/student02.JPG'
    },
    {
        id: 3,
        name: 'GRMR Mentee',
        role: '',
        testimonial:
            "My favorite activity was dropping the eggs from up high and making sure they don't break.",
        image: '/students/student03.jpeg'
    },
    {
        id: 4,
        name: 'GRMR Mentee',
        role: '',
        testimonial:
            "Science is my favorite because there's more things you can learn.",
        image: '/students/student04.JPG'
    }
]

const StudentStories = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const headerRef = useRef(null)
    const cardRef = useRef(null)
    const controlsRef = useRef(null)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === students.length - 1 ? 0 : prevIndex + 1))
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? students.length - 1 : prevIndex - 1))
    }

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
            cardRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            }
        )

        gsap.fromTo(
            controlsRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: controlsRef.current,
                    start: "top 95%",
                    toggleActions: "play none none none",
                }
            }
        )
    }, [])

    return (
        <section className="w-full py-20 px-4">
            <div className="mb-8 text-center">
                <div ref={headerRef} className="inline-flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg min-h-[90px]">
                    <h2 className="text-4xl font-semibold text-primary">Student Stories</h2>
                    <p className="text-muted-foreground text-base mt-2">Real experiences from students whose lives have been impacted by GRMR</p>
                </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg flex flex-col items-center gap-10">
                {/* Testimonial Card */}
                <div ref={cardRef} className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-5xl">
                    {/* Image */}
                    <div className="w-full md:w-2/5 h-[24rem] md:h-[32rem] relative">
                        {students.map((student, index) => (
                            <div
                                key={student.id}
                                className={cn(
                                    'absolute inset-0 transition-opacity duration-700 ease-in-out',
                                    currentIndex === index ? 'opacity-100' : 'opacity-0'
                                )}
                            >
                                <Image
                                    src={student.image}
                                    alt={student.name}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Text */}
                    <div className="w-full md:w-3/5 p-10 min-h-[260px]">
                        {students.map((student, index) => (
                            <div
                                key={student.id}
                                className={cn(
                                    'transition-opacity duration-700 ease-in-out',
                                    currentIndex === index ? 'opacity-100' : 'opacity-0 hidden'
                                )}
                            >
                                <blockquote className="text-2xl md:text-3xl italic mb-6 text-gray-700 leading-relaxed">
                                    "{student.testimonial}"
                                </blockquote>
                                <div className="flex flex-col">
                                    <span className="font-bold text-2xl text-primary">{student.name}</span>
                                    <span className="text-gray-500 text-lg">{student.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Controls container */}
                <div ref={controlsRef} className="flex flex-col items-center gap-5">
                    {/* Arrows */}
                    <div className="flex justify-center gap-5 mt-4">
                        <button
                            onClick={prevSlide}
                            className="w-11 h-11 rounded-full bg-[#f3e8ff] text-[#86198f] shadow-md flex items-center justify-center transition-colors duration-300 hover:bg-[#86198f] hover:text-white"
                            aria-label="Previous student"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-11 h-11 rounded-full bg-[#f3e8ff] text-[#86198f] shadow-md flex items-center justify-center transition-colors duration-300 hover:bg-[#86198f] hover:text-white"
                            aria-label="Next student"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-2">
                        {students.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={cn(
                                    'w-3 h-3 rounded-full transition',
                                    currentIndex === index ? 'bg-primary' : 'bg-gray-300'
                                )}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StudentStories
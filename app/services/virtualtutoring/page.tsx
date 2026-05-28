'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Book, UserPlus } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const images = [
	'/gallery/virtual/online05.png',
	'/gallery/virtual/online06.png',
	'/gallery/virtual/online07.png',
]

export default function VirtualTutoringPage() {
	const [currentImage, setCurrentImage] = useState(0)
	const headerRef = useRef<HTMLDivElement>(null)
	const sectionRef = useRef<HTMLDivElement>(null)
	const leftRef = useRef<HTMLDivElement>(null)
	const rightRef = useRef<HTMLDivElement>(null)
	const carouselRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % images.length)
		}, 4000)
		return () => clearInterval(interval)
	}, [])

	useGSAP(() => {
		// Fade-in all sections
		[headerRef, sectionRef, leftRef, rightRef, carouselRef].forEach((ref) => {
			if (ref.current) {
				gsap.fromTo(
					ref.current,
					{ opacity: 0, y: 50 },
					{
						opacity: 1,
						y: 0,
						duration: 1.5,
						ease: 'power2.out',
						scrollTrigger: {
							trigger: ref.current,
							start: 'top 85%',
							toggleActions: 'play none none none',
						},
					}
				)
			}
		})
	}, [])

	return (
		<main className="flex flex-col gap-12 py-12 px-4 items-center">
			{/* Header */}
			<div ref={headerRef} className="bg-white/70 backdrop-blur-sm px-8 py-10 rounded-3xl shadow-lg border border-primary/10 max-w-5xl w-full text-center">
				<h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
					Virtual Tutoring
				</h1>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					Experience the flexibility of personalized instruction from the comfort of your home. Engaging lessons, passionate tutors, and interactive tools — all online.
				</p>
			</div>

			{/* Main Section */}
			<section
				ref={sectionRef}
				className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100 p-8 max-w-5xl w-full flex flex-col lg:flex-row gap-8 items-start"
			>
				{/* Left Side*/}
				<div ref={rightRef} className="w-full lg:w-1/2 space-y-4">
					<h2 className="text-3xl text-center font-semibold text-primary">
						Learning Without Limits
					</h2>
					<p className="text-md text-muted-foreground">
						Through GRMR, refugee students are paired one-on-one with University of Florida tutors who work with them week after week. These are more than tutoring sessions, they are long-term mentorships built on trust, support, and consistency.
					</p>
					<p className="text-md text-muted-foreground">
						Each tutor provides personalized support in subjects like math, science, and English, while also serving as a mentor who helps build confidence, develop study skills, and explore future opportunities. Our goal is not only to improve grades, but to also inspire students to see their potential.
					</p>
					<p className="text-md text-muted-foreground">
						With flexible online sessions, students can learn from anywhere. Tutors use interactive tools like whiteboards, shared documents, and screen sharing to make every session engaging. All it takes is a computer or tablet with internet access to open the door to learning—and to a supportive connection that lasts all year.
					</p>
				</div>

				{/* Right: Carousel */}
				<div ref={leftRef} className="w-full lg:w-1/2 flex flex-col gap-4">
					<div
						ref={carouselRef}
						className="relative rounded-3xl overflow-hidden shadow-md w-full h-72 mt-2"
					>
						{images.map((img, index) => (
							<Image
								key={index}
								src={img}
								alt={`Virtual Tutoring ${index + 1}`}
								fill
								style={{ objectFit: 'cover' }}
								className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
									}`}
							/>
						))}
					</div>

					<div className="flex flex-wrap gap-2 mt-2 justify-center lg:justify-start">
						<Link
							href="/become-a-student"
							className="group relative flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 px-4 py-2 rounded-2xl border border-purple-100 shadow-md hover:shadow-lg transition-all duration-300 w-56"
						>
							<div className="mb-2 flex items-center justify-center w-12 h-12 rounded-full bg-[#86198f]/10 group-hover:scale-110 transition-transform">
								<Book className="h-6 w-6 text-[#86198f]" />
							</div>
							<h3 className="text-lg font-semibold text-primary mb-1 text-center">
								Become a Student
							</h3>
							<p className="text-xs text-muted-foreground text-center">
								Sign up and start your learning journey today
							</p>
						</Link>

						<Link
							href="/become-a-tutor"
							className="group relative flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4 py-2 rounded-2xl border border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 w-56"
						>
							<div className="mb-2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-200/30 group-hover:scale-110 transition-transform">
								<UserPlus className="h-6 w-6 text-blue-600" />
							</div>
							<h3 className="text-lg font-semibold text-primary mb-1 text-center">
								Become a Tutor
							</h3>
							<p className="text-xs text-muted-foreground text-center">
								Share your knowledge and help students grow
							</p>
						</Link>
					</div>
				</div>
			</section>
		</main>
	)
}

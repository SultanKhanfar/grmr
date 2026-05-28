
'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Diagnostic: React.FC = () => {
	const heroRef = useRef<HTMLDivElement | null>(null)
	const testsRef = useRef<HTMLDivElement | null>(null)
	const howItWorksRef = useRef<HTMLDivElement | null>(null)
	const questionsRef = useRef<HTMLDivElement | null>(null)

	useGSAP(() => {
		;[heroRef, testsRef, howItWorksRef, questionsRef].forEach((ref) => {
			if (!ref.current) return
			gsap.fromTo(
				ref.current,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					duration: 1.2,
					scrollTrigger: { trigger: ref.current, start: 'top 95%', toggleActions: 'play none none none' },
				}
			)
		})
	}, [])

	return (
		<div className="w-full">
			<section ref={heroRef} className="max-w-6xl mx-auto mb-8 bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-xl text-center">
				<h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Diagnostic Tests & Skill Assessments</h1>
				<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
					Not sure where to start? These diagnostics help you spot strengths and growth areas so your plan is focused.
				</p>
			</section>

			<section ref={testsRef} className="max-w-6xl mx-auto mb-8 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
				<h2 className="text-2xl font-semibold text-primary mb-4">Available Assessments</h2>
				<ul className="list-disc pl-6 space-y-3 text-muted-foreground">
					<li>
						<strong>Math Skills Check:</strong>{' '}
						<Link href="/downloads/math-diagnostic.pdf" className="text-primary underline">Download PDF</Link>
					</li>
					<li>
						<strong>Reading Comprehension:</strong>{' '}
						<Link href="/downloads/reading-diagnostic.pdf" className="text-primary underline">Download PDF</Link>
					</li>
					<li>
						<strong>Writing Sample:</strong>{' '}
						<Link href="/downloads/writing-diagnostic.pdf" className="text-primary underline">Download PDF</Link>
					</li>
					<li>
						<strong>ESL/Language Skills:</strong>{' '}
						<Link href="/downloads/esl-diagnostic.pdf" className="text-primary underline">Download PDF</Link>
					</li>
				</ul>
			</section>

			<section ref={howItWorksRef} className="max-w-6xl mx-auto mb-8 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
				<h2 className="text-2xl font-semibold text-primary mb-4">How It Works</h2>
				<ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
					<li>Download and complete the relevant assessment.</li>
					<li>Share results with your tutor or coordinator.</li>
					<li>We use the results to build a clear learning plan.</li>
				</ol>
			</section>

			<section ref={questionsRef} className="max-w-6xl mx-auto bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
				<h2 className="text-2xl font-semibold text-primary mb-4">Questions?</h2>
				<p className="text-muted-foreground">
					Not sure which test to take?{' '}
					<a href="mailto:education@grmruf.org" className="text-primary underline">Contact us</a>.
				</p>
			</section>
		</div>
	)
}

export default Diagnostic
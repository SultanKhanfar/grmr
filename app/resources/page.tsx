'use client'

import React, { Suspense, useRef, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'

gsap.registerPlugin(ScrollTrigger)

type FilterKey = '' | 'diagnostic' | 'accessibility' | 'templates'

// Panels from components/
const DiagnosticPanel = dynamic(() => import('@/components/resources/DiagnosticPanel'), { ssr: false })
const AccessibilityPanel = dynamic(() => import('@/components/resources/AccessibilityPanel'), { ssr: false })
const TemplatesPanel = dynamic(() => import('@/components/resources/TemplatesPanel'), { ssr: false })

const FILTERS = [
	{ value: 'diagnostic', label: 'Diagnostic Tests' },
	{ value: 'accessibility', label: 'Accessibility Tools' },
	{ value: 'templates', label: 'Learning Templates' },
] as const

// Thin wrapper to satisfy Next's requirement
export default function ResourcesPage() {
	return (
		<Suspense fallback={<div className="min-h-[100svh] w-full py-20 px-4">Loading…</div>}>
			<ResourcesContent />
		</Suspense>
	)
}

function ResourcesContent() {
	const [activeFilter, setActiveFilter] = useState<FilterKey>('')
	const heroRef = useRef<HTMLDivElement | null>(null)
	const filterRef = useRef<HTMLDivElement | null>(null)
	const panelRef = useRef<HTMLDivElement | null>(null)
	const router = useRouter()
	const search = useSearchParams()

	useGSAP(() => {
		const fade = (el: Element | null, y = 30) => {
			if (!el) return
			gsap.fromTo(
				el,
				{ opacity: 0, y },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: 'power2.out',
					scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
				}
			)
		}
		fade(heroRef.current, 20)
		fade(filterRef.current)
	}, [])

	useEffect(() => {
		const view = (search.get('view') || '') as FilterKey
		if (view === 'diagnostic' || view === 'accessibility' || view === 'templates') {
			setActiveFilter(view)
		}
	}, [])

	const handleFilter = (value: FilterKey) => {
		const next = activeFilter === value ? '' : value
		setActiveFilter(next)

		const params = new URLSearchParams(window.location.search)
		if (next) params.set('view', next)
		else params.delete('view')
		router.replace(`/resources?${params.toString()}`, { scroll: false })

		if (next) setTimeout(() => panelRef.current?.scrollIntoView({ behavior: 'smooth' }), 0)
	}

	return (
		<div className="min-h-[100svh] w-full py-20 px-4 pb-28">
			{/* Hero */}
			<section
				ref={heroRef}
				className="max-w-6xl mx-auto bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-xl text-center mb-6"
			>
				<h1 className="text-4xl font-bold text-primary mb-4">Educational Resources</h1>
				<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
					Explore tools and materials that support learning. Choose a category below to view details.
				</p>
			</section>

			{/* Filters */}
			<section ref={filterRef} className="max-w-6xl mx-auto mb-10 flex flex-wrap justify-center gap-4">
				{FILTERS.map((filter) => {
					const isActive = activeFilter === filter.value
					return (
						<motion.button
							key={filter.value}
							onClick={() => handleFilter(filter.value)}
							className={cn(
								'relative rounded-full px-6 py-3 font-semibold text-base overflow-hidden transition-all duration-300 group',
								isActive
									? 'bg-[#86198f] text-white border border-[#86198f]'
									: 'bg-[#f3e8ff] text-[#86198f] border border-[#d8b4fe]',
								'hover:bg-[#86198f] hover:text-white hover:shadow-[0_0_14px_3px_rgba(216,180,254,0.6)]'
							)}
							whileHover={{ scale: 1.07 }}
							whileTap={{ scale: 0.96 }}
							aria-pressed={isActive}
							type="button"
						>
							{filter.label}
							{isActive && (
								<motion.span
									layoutId="filter-underline"
									className="absolute inset-0 rounded-full bg-[#86198f]"
									style={{ zIndex: -1 }}
									transition={{ type: 'spring', stiffness: 500, damping: 30 }}
								/>
							)}
						</motion.button>
					)
				})}
			</section>

			{/* Panel container */}
			{activeFilter && (
				<section
					ref={panelRef}
					className="max-w-6xl mx-auto bg-white/70 backdrop-blur-sm rounded-3xl p-0 shadow-lg"
				>

					{activeFilter === 'diagnostic' && (
						<div className="flex flex-col items-center justify-center py-24 px-6 text-center">
							<h2 className="text-3xl font-bold text-primary mb-4">Diagnostic Tests</h2>
							<p className="text-gray-700 text-lg mb-6 max-w-xl">
								We're hard at work developing personalized diagnostic tools to help identify learning strengths and areas for growth. 
								Check back soon!
							</p>
							<span className="inline-flex items-center gap-2 bg-[#f3e8ff] text-[#86198f] font-semibold px-5 py-2.5 rounded-full border border-[#d8b4fe] shadow-sm">
								🚧 Coming Soon
							</span>
						</div>
					)}

					{activeFilter === 'accessibility' && <AccessibilityPanel />}
					
					{activeFilter === 'templates' && <TemplatesPanel />}
				</section>
			)}
		</div>
	)
}

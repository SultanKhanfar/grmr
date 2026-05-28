'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

type FilterOption = {
	value: string
	label: string
}

const filters: FilterOption[] = [
	{ value: 'all', label: 'All' },
	{ value: 'vtutoring', label: 'Virtual Tutoring' },
	{ value: 'itutoring', label: 'In-Person Tutoring' },
]

type Props = {
	activeFilter: string
	setActiveFilter: (filter: string) => void
}

const GalleryFilter = ({ activeFilter, setActiveFilter }: Props) => {
	// Treat empty string as "all" for backward compatibility
	const current = activeFilter && activeFilter.length > 0 ? activeFilter : 'all'

	return (
		<div className="flex flex-wrap justify-center gap-3 mb-8 relative">
			{filters.map((filter) => {
				const isActive = current === filter.value
				return (
					<motion.button
						key={filter.value}
						onClick={() => setActiveFilter(filter.value)}
						className={cn(
							'relative rounded-full px-4 py-2 font-semibold text-sm overflow-hidden transition-all duration-300 group',
							isActive
								? 'bg-[#86198f] text-white border border-[#86198f]'
								: 'bg-[#f3e8ff] text-[#86198f] border border-[#d8b4fe]',
							'hover:bg-[#86198f] hover:text-white hover:shadow-[0_0_12px_2px_rgba(216,180,254,0.6)]'
						)}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.97 }}
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
		</div>
	)
}

export default GalleryFilter

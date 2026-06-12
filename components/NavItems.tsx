'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navItems } from '@/constants';
import { useRef, useState, useEffect } from 'react';
import DropdownPortal from './DropdownPortal';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface NavItem {
	label: string;
	href: string;
	children?: NavItem[];
}

const NavItems = ({ mobile = false }: { mobile?: boolean }) => {
	const pathname = usePathname();
	const [dropdownLabel, setDropdownLabel] = useState<string | null>(null);
	const [openMobileDropdowns, setOpenMobileDropdowns] = useState<{ [label: string]: boolean }>({});

	const toggleMobileDropdown = (label: string) => {
		setOpenMobileDropdowns((prev) => ({
			...prev,
			[label]: !prev[label],
		}));
	};

	const [dropdownPos, setDropdownPos] = useState<{ left: number; top: number; width: number }>({
		left: 0,
		top: 0,
		width: 0,
	});
	const itemRefs = useRef<{ [label: string]: HTMLAnchorElement | null }>({});
	const closeTimeout = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (dropdownLabel && itemRefs.current[dropdownLabel]) {
			const rect = itemRefs.current[dropdownLabel]!.getBoundingClientRect();
			setDropdownPos({
				left: rect.left + rect.width / 2,
				top: rect.bottom + window.scrollY,
				width: rect.width,
			});
		}
	}, [dropdownLabel]);

	const handleMouseEnter = (label: string) => {
		if (closeTimeout.current) clearTimeout(closeTimeout.current);
		setDropdownLabel(label);
	};

	const handleMouseLeave = () => {
		closeTimeout.current = setTimeout(() => setDropdownLabel(null), 120);
	};

	return (
		<nav className={cn('text-primary', mobile ? 'flex flex-col gap-4 pt-4' : 'flex items-center gap-4')}>
			{navItems.map(({ label, href, children }: NavItem) => {
				const isActive = pathname === href;

				// --- Special Button: Our Mentors ---
				if (label === 'Our Mentors') {
					return (
						<Link
							href="/tutors"
							key={label}
							className={cn(
								'relative rounded-full px-4 py-2 font-semibold text-sm overflow-hidden transition-all duration-300 group',
								'bg-[#f3e8ff] text-[#86198f] border border-[#d8b4fe]',
								'hover:bg-[#86198f] hover:text-white hover:shadow-[0_0_12px_2px_rgba(216,180,254,0.6)]',
								mobile ? 'w-fit self-start' : ''
							)}
						>
							{label}
						</Link>
					);
				}

				// --- Desktop Dropdown ---
				if (children && !mobile) {
					return (
						<div
							key={label}
							className="relative"
							onMouseEnter={() => handleMouseEnter(label)}
							onMouseLeave={handleMouseLeave}
						>
							<Link
								href={href}
								ref={(el) => {
									itemRefs.current[label] = el
								}}
								className={cn(
									'group relative flex items-center text-base text-primary transition-all duration-300',
									isActive ? 'font-extrabold' : 'font-medium'
								)}
							>
								{label}
								<span
									className={cn('transition-transform duration-200 ml-1', dropdownLabel === label ? 'rotate-180' : '')}
								>
									⏷
								</span>
								<span className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-left bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
							</Link>

							{dropdownLabel === label && (
								<DropdownPortal>
									<div
										className="bg-white rounded-xl shadow-lg border border-border z-[9999] transition-all duration-200"
										style={{
											position: 'absolute',
											left: dropdownPos.left,
											top: dropdownPos.top,
											transform: 'translateX(-50%)',
											minWidth: '12rem',
										}}
										onMouseEnter={() => handleMouseEnter(label)}
										onMouseLeave={handleMouseLeave}
									>
										<ul className="py-2">
											{children.map((child) => (
												<li key={child.label}>
													<Link
														href={child.href}
														className="block px-4 py-2 text-primary hover:bg-[#f3e8ff] hover:text-[#86198f] rounded-lg transition"
													>
														{child.label}
													</Link>
												</li>
											))}
										</ul>
									</div>
								</DropdownPortal>
							)}
						</div>
					);
				}

				// --- Mobile Dropdown ---
				if (children && mobile) {
					const isOpen = openMobileDropdowns[label] || false;
					return (
						<div key={label} className="flex flex-col">
							<button
								onClick={() => toggleMobileDropdown(label)}
								className={cn(
									'flex items-center justify-between text-base text-primary font-medium transition-all duration-300'
								)}
							>
								{label}
								{isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
							</button>
							{isOpen && (
								<div className="ml-4 flex flex-col gap-1 mt-2">
									{children.map((child) => (
										<Link
											key={child.label}
											href={child.href}
											className="text-sm text-primary hover:text-[#86198f] py-1 transition"
										>
											{child.label}
										</Link>
									))}
								</div>
							)}
						</div>
					);
				}

				// --- Regular Link ---
				return (
					<Link
						href={href}
						key={label}
						className={cn(
							'group relative text-base text-primary transition-all duration-300',
							isActive ? 'font-extrabold' : 'font-medium'
						)}
					>
						{label}
						<span className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-left bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
					</Link>
				);
			})}
		</nav>
	);
};

export default NavItems;

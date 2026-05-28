import Link from 'next/link'
import Image from 'next/image'

export default function ServicesPage() {
	const btn =
		'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold ' +
		'bg-[#86198f] text-white border-2 border-[#86198f] transition duration-300 shadow-sm ' +
		'hover:bg-[#a21caf] hover:shadow-[0_0_6px_2px_rgba(134,25,143,0.25)] ' +
		'focus:outline-none focus:ring-2 focus:ring-[#d8b4fe]'

	return (
		<main className="flex flex-col gap-8 py-8 px-4">
			{/* Header Section */}
			<div className="text-center">
				<div className="bg-white/70 backdrop-blur-sm px-8 py-10 rounded-2xl shadow-lg max-w-5xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Tutoring Services</h1>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						GRMR offers personalized tutoring for all ages, in person or online. Learn more about flexible options that support every student’s journey.
					</p>
				</div>
			</div>

			{/* Service Cards */}
			<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
				{/* Virtual Tutoring Card */}
				<div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all">
					<div className="relative h-60 w-full">
						<Image
							src="/gallery/virtual/online05.png"
							alt="Virtual tutoring session"
							fill
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<div className="p-6">
						<h2 className="text-2xl font-bold mb-3 text-primary">Virtual Tutoring</h2>
						<p className="text-muted-foreground mb-6">
							Connect with experienced tutors from anywhere. Interactive tools create an engaging learning environment that fits your schedule.
						</p>
						<Link href="/services/virtualtutoring" className={btn}>
							Learn More
						</Link>
					</div>
				</div>

				{/* In-Person Tutoring Card */}
				<div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all">
					<div className="relative h-60 w-full">
						<Image
							src="/gallery/inperson/event05.jpeg"
							alt="In-person tutoring session"
							fill
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<div className="p-6">
						<h2 className="text-2xl font-bold mb-3 text-primary">In-Person Tutoring</h2>
						<p className="text-muted-foreground mb-6">
							Face to face learning with qualified tutors. Meet at our centers for hands on support and a collaborative environment.
						</p>
						<Link href="/services/inpersontutoring" className={btn}>
							Learn More
						</Link>
					</div>
				</div>
			</div>

			{/* extra space*/}
			<section className="text-center">
				<div className="bg-gradient-to-br from-purple-200 to-blue-200 rounded-3xl border border-blue-100 p-10 max-w-5xl mx-auto shadow-md">
					<h2 className="text-3xl font-bold text-primary mb-3">Keep Learning Anytime, Anywhere</h2>
					<p className="text-gray-700 mb-6 max-w-2xl mx-auto">
						Learn at your own pace, anytime. Access our collection of lessons and video walkthroughs in math, science, and English created by our dedicated tutors—perfect for reviewing past topics or getting ahead on new ones.					</p>
					<Link href="/lessons" className="inline-block px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300">
						Start Exploring
					</Link>
				</div>
			</section>
		</main>
	)
}
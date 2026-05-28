'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const heroImages = [
  '/gallery/inperson/event18.jpeg',
  '/gallery/inperson/event08.jpeg',
  '/gallery/inperson/event20.jpeg',
]

export default function InPersonTutoringPage() {
  const [currentImage, setCurrentImage] = useState(0)

  const headerRef = useRef<HTMLDivElement>(null)
  const heroSectionRef = useRef<HTMLDivElement>(null)
  const heroTextRef = useRef<HTMLDivElement>(null)
  const heroRightRef = useRef<HTMLDivElement>(null) // locations + carousel
  const locationsRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const carpoolRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useGSAP(() => {
    const elements = [
      headerRef,
      heroSectionRef,
      heroTextRef,
      heroRightRef,
      locationsRef,
      carouselRef,
      carpoolRef,
    ]

    elements.forEach((el) => {
      if (el.current) {
        gsap.fromTo(
          el.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      }
    })
  }, [])

  return (
    <main className="flex flex-col gap-12 py-12 px-4">
      {/* Header */}
      <div ref={headerRef} className="text-center">
        <div className="bg-white/70 backdrop-blur-sm px-8 py-10 rounded-3xl shadow-lg border border-primary/10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            In-Person Tutoring
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our in-person program brings students together for monthly learning sessions in Jacksonville, designed for kids ages 6–15. These events combine academic support with hands-on activities that make learning exciting and memorable.
          </p>
        </div>
      </div>

      {/* Hero + Text + Locations + Carousel */}
      <section
        ref={heroSectionRef}
        className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100 p-8 max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-start"
      >
        {/* Left: Description */}
        <div ref={heroTextRef} className="w-full lg:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold text-center text-primary">Face-to-Face Learning</h2>
          <p className="text-md text-muted-foreground">
            Our monthly in-person events give students the chance to learn and connect in a supportive environment. Each event blends academic enrichment with hands-on, team activities that turn learning into something fun and memorable.</p>
          <p className="text-md text-muted-foreground">
            Students might design watercrafts, build towers out of marshmallows and sticks, or take part in science experiments that bring classroom concepts to life. Alongside these activities, our team provides short presentations and discussions that connect what students are doing to real academic subjects like math, science, and English.</p>
          <p className="text-md text-muted-foreground">
            Guided by University of Florida volunteers, students receive mentorship and encouragement throughout the day. The combination of teamwork, creative problem-solving, and academic support helps students strengthen their knowledge, build confidence, and discover the joy of learning.</p>
        </div>

        {/* Right: Locations + Carousel */}
        <div ref={heroRightRef} className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Locations */}
          <div ref={locationsRef} className="space-y-6">
            <div className="grid md:grid-cols-1">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-100 p-6 shadow-sm text-center">
                <h3 className="font-semibold text-primary mb-2 text-lg">Come Join Our In-Person Program!</h3>
                <p className="text-muted-foreground mb-2">Jacksonville, FL</p>
                <p className="text-muted-foreground">Saturday: 10:00 am - 12:30 pm</p>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div ref={carouselRef} className="relative h-72 rounded-3xl overflow-hidden shadow-md">
            {heroImages.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`In-Person Tutoring ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      
      {/* Carpool Program
      <section ref={carpoolRef} className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100 p-8 max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold mb-6 text-primary">Coming Soon: Carpooling Program</h2>
        <p className="text-lg text-muted-foreground mb-6">
          We understand that transportation can be a challenge for busy families. Our future carpooling program will help connect families who live near each other to share rides to and from tutoring sessions.
        </p>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-100 mb-8">
          <h3 className="font-semibold mb-4 text-primary">How the Carpool Program Will Works:</h3>
          <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
            <li>Fill out the carpool interest form below</li>
            <li>Our coordinator will match you with nearby families with similar schedules</li>
            <li>Connect with your carpool group and arrange pickup/dropoff</li>
            <li>Share the driving responsibilities on a rotating schedule</li>
          </ol>
        </div>
      </section>
       */}
    </main>
  )
}

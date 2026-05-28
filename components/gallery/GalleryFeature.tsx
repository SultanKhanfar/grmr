'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const featuredImages = [
    {
        src: '/gallery/inperson/event05.jpeg',
        alt: 'Joyful Moments',
        // caption: 'Three students pose and smile for a playful close-up at the end of a tutoring session.'
    },
    {
        src: '/gallery/inperson/event18.jpeg',
        alt: 'Game-Based Learning',
        // caption: 'Students work together on a science quiz game, sharing laughs and answers.'
    },
    {
        src: '/gallery/virtual/online05.png',
        alt: 'Show and Learn',
        // caption: 'A student proudly shares animal flashcards during an engaging GRMR tutoring session.'
    },
    {
        src: '/gallery/inperson/event02.jpeg',
        alt: 'Creative Engineering',
        // caption: 'A student presents a colorful, imaginative model built from paper and Play-Doh.'
    }
]

const GalleryFeature = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === featuredImages.length - 1 ? 0 : prevIndex + 1
            )
        }, 6000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="mb-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-4xl p-6 shadow-lg">
                <div className="text-center mb-6">
                    <h2 className="text-5xl font-semibold text-primary">Featured Moments</h2>
                    <p className="text-gray-600">Some of our favorite pics</p>
                </div>

                <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={featuredImages[currentIndex].src}
                                alt={featuredImages[currentIndex].alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 1200px"
                                className="object-cover"
                                priority
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                {/* <p className="text-white text-lg md:text-xl font-medium">{featuredImages[currentIndex].caption}</p> */}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-10">
                        {featuredImages.map((_, index) => (
                            <button
                                key={index}
                                className={`z-10 w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? "bg-white scale-125" : "bg-white/50"
                                    }`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`View featured image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryFeature
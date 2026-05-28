'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import GalleryFilter from './GalleryFilter'
import { galleryImages } from './galleryData'

type Props = {
    onSelectImage: (image: typeof galleryImages[0]) => void
}

const GalleryGrid = ({ onSelectImage }: Props) => {
    const [activeFilter, setActiveFilter] = useState('all')
    const [filteredImages, setFilteredImages] = useState(galleryImages)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (activeFilter === 'all') {
            setFilteredImages(galleryImages)
        } else {
            setFilteredImages(galleryImages.filter((img) => img.category === activeFilter))
        }
    }, [activeFilter])

    if (!mounted) return null

    return (
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg mb-12">
            <div className="text-center mb-6">
                <h2 className="text-5xl font-semibold text-primary">Photo Collection</h2>
                <p className="text-gray-600">A snapshot of our memories</p>
            </div>

            <GalleryFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
                <AnimatePresence>
                    {filteredImages.map((image) => (
                        <motion.div
                            key={image.id}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                            onClick={() => onSelectImage(image)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-medium text-sm">{image.caption}</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default GalleryGrid

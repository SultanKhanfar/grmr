'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { galleryImages } from './galleryData'

type Props = {
    image: typeof galleryImages[0] | null
    onClose: () => void
}

const GalleryPhotoModal = ({ image, onClose }: Props) => {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        if (image) {
            window.addEventListener('keydown', handleEscape)

            // Auto-scroll into view (for mobile or small viewports)
            setTimeout(() => {
                modalRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }, 100)
        }

        return () => {
            window.removeEventListener('keydown', handleEscape)
        }
    }, [image, onClose])

    if (!image) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 flex items-start justify-center px-4 py-12 bg-black/70 backdrop-blur-sm overflow-y-auto"
                onClick={onClose}
            >
                <motion.div
                    ref={modalRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-white rounded-3xl w-full max-w-4xl shadow-xl overflow-hidden mt-8"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition z-10"
                        aria-label="Close modal"
                    >
                        <X size={20} />
                    </button>

                    {/* Image */}
                    <div className="relative w-full h-[55vh] sm:h-[60vh] bg-gray-100 rounded-t-3xl overflow-hidden">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-contain rounded-t-3xl"
                            priority
                        />
                    </div>

                    {/* Caption area */}
                    <div className="p-6 md:p-8">
                        <h3 className="text-2xl font-semibold text-primary mb-2">
                            {image.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{image.caption}</p>

                        <div className="flex flex-wrap items-center justify-between text-sm text-gray-500">
                            <span>{image.date}</span>
                            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium capitalize">
                {image.category}
              </span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default GalleryPhotoModal

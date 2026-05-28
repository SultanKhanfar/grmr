'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const GalleryHeader = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="mb-10 flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg min-h-[90px]"
            >
                <h1 className="text-6xl font-semibold text-primary text-center">Our Gallery</h1>
                <p className="text-muted-foreground text-base mt-2 text-center">
                    Capturing moments of connection, learning, and growth
                </p>
            </motion.div>
        </div>
    )
}

export default GalleryHeader

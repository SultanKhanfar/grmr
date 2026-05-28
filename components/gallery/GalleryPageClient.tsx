'use client'

import { useState } from 'react'
import GalleryGrid from './GalleryGrid'
import GalleryPhotoModal from './GalleryPhotoModal'
import { galleryImages } from './galleryData'

export default function GalleryPageClient() {
    const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null)

    return (
        <>
            <GalleryGrid onSelectImage={setSelectedImage} />
            <GalleryPhotoModal image={selectedImage} onClose={() => setSelectedImage(null)} />
        </>
    )
}

import { Metadata } from 'next'
import GalleryPageClient from '@/components/gallery/GalleryPageClient'
import GalleryHeader from '@/components/gallery/GalleryHeader'
import GalleryFeature from '@/components/gallery/GalleryFeature'

export const metadata: Metadata = {
    title: 'Photo Gallery | GRMR',
    description: 'View photos from our tutoring sessions, volunteer events, and community activities',
}

export default function GalleryPage() {
    return (
        <main className="py-8">
            <GalleryHeader />
            <GalleryFeature />
            <GalleryPageClient />
        </main>
    )
}
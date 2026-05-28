// app/faq/page.tsx
import React from 'react'
import FAQSection from '@/components/faq/FAQSection'
import ContactSection from '@/components/faq/ContactSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Frequently Asked Questions | GRMR',
    description:
        "Find answers to common questions about GRMR's tutoring programs, volunteer opportunities, and educational resources"
}

export default function FAQPage() {
    return (
        <main className="flex flex-col gap-8 py-8 px-4">
            <div className="text-center">
                <div className="bg-white/70 backdrop-blur-sm px-8 py-10 rounded-2xl shadow-lg max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Get answers to common questions about our tutoring programs, volunteer opportunities, and how GRMR supports students.
                    </p>
                </div>
            </div>

            <FAQSection />
            <ContactSection />
        </main>
    )
}

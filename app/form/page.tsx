'use client'

import React from 'react'

const FormPage = () => {
    return (
        <section className="w-full py-16 px-4">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-primary mb-2">Feedback Form</h1>
                    <p className="text-muted-foreground text-lg">
                        Please fill out this form weekly if you are tutoring a student through our program
                    </p>
                </div>
                <div className="w-full">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSdyhSmXV1WWKJ5m41zQ0lRh683Fny6zW73H-GnerGxTUKObrQ/viewform?embedded=true"
                        width="100%"
                        height="900"
                        className="border-0 w-full rounded-xl"
                        allowFullScreen
                        loading="lazy"
                        title="GRMR Feedback Form"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </section>
    )
}

export default FormPage
2
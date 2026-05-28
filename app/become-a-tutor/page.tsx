'use client'

import React from 'react'

const BecomeATutor = () => {
    return (
        <section className="w-full py-16 px-4">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-primary mb-2">Become a Tutor</h1>
                    <p className="text-muted-foreground text-lg">
                        Please fill out this form if you would like to become a tutor through our program. We will get back to you as soon as possible.
                    </p>
                </div>
                <div className="w-full">
                    <iframe
                        src="https://docs.google.com/forms/d/1VMKFanLMchOOyeCp02gJdSPUVcFHIkJTidGvEwkMb8k/viewform?embedded=true"
                        width="100%"
                        height="900"
                        className="border-0 w-full rounded-xl"
                        allowFullScreen
                        loading="lazy"
                        title="GRMR Sign Up Form"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </section>
    )
}

export default BecomeATutor
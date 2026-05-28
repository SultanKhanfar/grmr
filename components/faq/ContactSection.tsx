'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, CheckCircle } from 'lucide-react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import emailjs from '@emailjs/browser'

const ContactSection = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: 'general',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormState((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    name: formState.name,
                    email: formState.email,
                    subject: formState.subject,
                    message: formState.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )

            setIsSubmitting(false)
            setIsSubmitted(true)
            setFormState({
                name: '',
                email: '',
                subject: 'general',
                message: ''
            })

            setTimeout(() => {
                setIsSubmitted(false)
            }, 5000)
        } catch (error) {
            console.error('Email send error:', error)
            setIsSubmitting(false)
        }
    }

    return (
        <section className="w-full py-12 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-primary">Still Have Questions?</h2>
                        <p className="text-gray-600 mt-2">
                            We're here to help. Send us a message and we'll get back to you as soon as possible.
                        </p>
                    </div>

                    {isSubmitted ? (
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex flex-col items-center">
                            <CheckCircle className="text-green-500 w-12 h-12 mb-4" />
                            <h3 className="text-xl font-semibold text-green-800">Message Sent!</h3>
                            <p className="text-green-700 mt-2 text-center">
                                Thank you for reaching out. Our team will respond to your inquiry soon.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                                >
                                    <option value="general">General Question</option>
                                    <option value="tutoring">Tutoring Services</option>
                                    <option value="volunteer">Volunteering</option>
                                    <option value="donation">Donations</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Question
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <div className="flex justify-center pt-2">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-[#f3e8ff] text-[#86198f] hover:bg-[#86198f] hover:text-white rounded-full px-8 py-6 font-semibold text-lg flex items-center gap-2 shadow-md transition-colors duration-300 disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="h-5 w-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="h-5 w-5" />
                                            Submit Question
                                        </>
                                    )}
                                </Button>
                            </div>
                        </form>
                    )}

                    <div className="mt-10 pt-8 border-t border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="flex flex-col items-center gap-2">
                                <a
                                    href="mailto:education@grmruf.org"
                                    className="bg-primary text-white rounded-full p-3 border border-white hover:bg-white hover:text-primary hover:border-primary transition-colors duration-300"
                                >
                                    <MdEmail size={22} />
                                </a>
                                <h4 className="font-semibold text-primary mt-2">Email</h4>
                                <p className="text-gray-600">education@grmruf.org</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <a
                                    href="https://www.instagram.com/grmruf/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary text-white rounded-full p-3 border border-white hover:bg-white hover:text-primary hover:border-primary transition-colors duration-300"
                                >
                                    <FaInstagram size={20} />
                                </a>
                                <h4 className="font-semibold text-primary mt-2">Instagram</h4>
                                <p className="text-gray-600">@grmruf</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <a
                                    href="https://www.facebook.com/UFGRMR/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary text-white rounded-full p-3 border border-white hover:bg-white hover:text-primary hover:border-primary transition-colors duration-300"
                                >
                                    <FaFacebookF size={20} />
                                </a>
                                <h4 className="font-semibold text-primary mt-2">Facebook</h4>
                                <p className="text-gray-600">@UFGRMR</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection

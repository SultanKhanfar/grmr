'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { faqData } from '@/constants'

const FAQSection = () => {
    const [openCategory, setOpenCategory] = useState<string | null>('For Students')
    const [openQuestions, setOpenQuestions] = useState<Record<number, boolean>>({})

    const toggleCategory = (category: string) => {
        setOpenCategory(openCategory === category ? null : category)
    }

    const toggleQuestion = (id: number) => {
        setOpenQuestions((prev) => ({
            ...prev,
            [id]: !prev[id]
        }))
    }

    return (
        <section className="w-full py-20 px-4">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sticky Sidebar */}
                    <aside className="lg:col-span-1 h-fit">
                        <div className="sticky top-24">
                            <h3 className="text-3xl font-semibold mb-4 text-primary">FAQ Categories</h3>
                            <div className="space-y-2">
                                {faqData.map((category) => (
                                    <button
                                        key={category.category}
                                        onClick={() => toggleCategory(category.category)}
                                        className={cn(
                                            "w-full text-left px-4 py-3 rounded-xl flex items-center justify-between transition-all",
                                            openCategory === category.category
                                                ? "bg-primary text-white shadow"
                                                : "bg-white hover:bg-gray-50 border border-gray-200"
                                        )}
                                    >
                    <span className="flex items-center">
                      <span className="mr-3 text-xl">{category.icon}</span>
                      <span className="font-medium">{category.category}</span>
                    </span>
                                        {openCategory === category.category ? (
                                            <ChevronUp className="h-5 w-5" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* FAQ Content */}
                    <div className="lg:col-span-2">
                        {faqData.map(
                            (category) =>
                                openCategory === category.category && (
                                    <div key={category.category} className="space-y-6">
                                        <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                                            <span>{category.icon}</span> {category.category}
                                        </h2>

                                        <div className="space-y-4">
                                            {category.questions.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm transition-all"
                                                >
                                                    <button
                                                        onClick={() => toggleQuestion(item.id)}
                                                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                                                    >
                                                        <span className="font-medium text-lg">{item.question}</span>
                                                        {openQuestions[item.id] ? (
                                                            <ChevronUp className="h-5 w-5 text-primary" />
                                                        ) : (
                                                            <ChevronDown className="h-5 w-5 text-gray-500" />
                                                        )}
                                                    </button>

                                                    <AnimatePresence initial={false}>
                                                        {openQuestions[item.id] && (
                                                            <motion.div
                                                                key="content"
                                                                initial={{ opacity: 0, y: -5 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: -5 }}
                                                                transition={{ duration: 0.25 }}
                                                                className="px-6 py-4 bg-gray-50 text-gray-700 leading-relaxed"
                                                            >
                                                                {Array.isArray(item.answer) ? (
                                                                    <div className="space-y-2">
                                                                        {item.answer.map((line, idx) => (
                                                                            <p key={idx} className={line.startsWith('-') ? "pl-4 list-disc" : ""}>
                                                                                {line}
                                                                            </p>
                                                                        ))}
                                                                    </div>
                                                                ) : (
                                                                    <p>{item.answer}</p>
                                                                )}
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQSection

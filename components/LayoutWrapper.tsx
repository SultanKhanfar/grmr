'use client'

import Script from 'next/script'
import FinisherHeader from './FinisherHeader'
import React from 'react'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-transparent">
            {/* Finisher background on all pages */}
            <Script src="/finisher-header.es5.min.js" strategy="afterInteractive" />
            <FinisherHeader />

            {children}
        </div>
    )
}

export default LayoutWrapper

'use client'

import FinisherHeader from './FinisherHeader'
import React from 'react'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex-1 bg-transparent">
            {/* Finisher background on all pages */}
            <FinisherHeader />

            {children}
        </div>
    )
}

export default LayoutWrapper

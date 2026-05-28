'use client'

import { useEffect } from 'react'
import Script from 'next/script'

const FinisherHeader = () => {
    useEffect(() => {
        const init = () => {
            if (typeof window !== 'undefined' && (window as any).FinisherHeader && document.querySelector('.finisher-header')) {
                new (window as any).FinisherHeader({
                    count: 100,
                    size: { min: 2, max: 40, pulse: 0 },
                    speed: { x: { min: 0, max: 0.4 }, y: { min: 0, max: 0.1 } },
                    colors: {
                        background: '#ede9f7',
                        particles: ['#f8c4ea', '#c4e9fb', '#fff7c2', '#d4fbe3', '#dcd5fa'],
                    },
                    blending: 'screen',
                    opacity: { center: 1, edge: 1 },
                    skew: -1,
                    shapes: ['c', 's', 't'],
                })
            } else {
                setTimeout(init, 100)
            }
        }

        init()
    }, [])

    return (
        <>
            <Script src="/finisher-header.es5.min.js" strategy="afterInteractive" />
            <div
                className="finisher-header fixed top-0 left-0 w-full h-full -z-10"
                style={{ width: '100%', height: '200vh' }}
            />
        </>
    )
}

export default FinisherHeader

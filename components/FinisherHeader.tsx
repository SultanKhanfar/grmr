'use client'

import { useEffect } from 'react'
import Script from 'next/script'

type FinisherHeaderConstructor = new (options: {
    count: number
    size: { min: number; max: number; pulse: number }
    speed: {
        x: { min: number; max: number }
        y: { min: number; max: number }
    }
    colors: {
        background: string
        particles: string[]
    }
    blending: string
    opacity: { center: number; edge: number }
    skew: number
    shapes: string[]
}) => unknown

declare global {
    interface Window {
        FinisherHeader?: FinisherHeaderConstructor
    }
}

const FinisherHeader = () => {
    useEffect(() => {
        let retryTimer: ReturnType<typeof setTimeout> | undefined

        const init = () => {
            const container = document.querySelector<HTMLElement>('.finisher-header')

            if (window.FinisherHeader && container) {
                new window.FinisherHeader({
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
                retryTimer = setTimeout(init, 100)
            }
        }

        init()

        return () => {
            if (retryTimer) clearTimeout(retryTimer)
        }
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

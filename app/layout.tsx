import type { Metadata } from "next"
import { Bricolage_Grotesque } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Script from "next/script"
import LayoutWrapper from "@/components/LayoutWrapper"
import { Analytics } from "@vercel/analytics/next"

const bricolage = Bricolage_Grotesque({
    variable: "--font-bricolage",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "GRMR",
    description: "Free academic support tailored to K–12 and adult learners.",
    icons: {
        icon: "public/favicon.ico"
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full">
            <body
                className={`
					${bricolage.variable} antialiased 
					min-h-[100svh] 
					bg-gradient-to-b from-[#faf5ff] via-[#f3e8ff]/30 to-[#faf5ff]
				`}
            >
                {/* <Script src="/finisher-header.es5.min.js" strategy="beforeInteractive" /> */}
                <Navbar />
                <LayoutWrapper>{children}</LayoutWrapper>
            </body>
        </html>
    )
}

import type { Metadata } from "next"
import { Bricolage_Grotesque } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import LayoutWrapper from "@/components/LayoutWrapper"

const bricolage = Bricolage_Grotesque({
    variable: "--font-bricolage",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "GRMR",
    description: "Free academic support tailored to K–12 and adult learners.",
    icons: {
        icon: "/favicon.ico"
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full">
            <body
                className={`
					${bricolage.variable} antialiased 
					min-h-[100svh] flex flex-col
					bg-gradient-to-b from-[#faf5ff] via-[#f3e8ff]/30 to-[#faf5ff]
				`}
            >
                <Navbar />
                <LayoutWrapper>{children}</LayoutWrapper>
                <footer className="relative z-10 border-t border-purple-100/70 bg-white/40 px-4 py-4 text-center text-xs text-gray-500 backdrop-blur-sm">
                    Created by Sultan Khanfar and Andrew Fesenko
                </footer>
            </body>
        </html>
    )
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0e0e10", // or your custom background
                foreground: "#ffffff",
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
    darkMode: "class",
    plugins: [],
}

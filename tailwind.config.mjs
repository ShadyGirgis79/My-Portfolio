/** @type {import('tailwindcss').Config} */

import { Outfit, Ovo } from 'next/font/google';

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                lightHover: '#FCF4FF',
                darkHover: '#2A004A',
                darkTheme: '#11001F',
            },
            fontFamily: {
                Outfit: ['Outfit', 'sans-serif'],
                Ovo: ['Ovo', 'serif'],
            },
        },
    },
    plugins: [],
};
"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <div className="w-9 h-9" /> // Placeholder to prevent layout shift

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative focus:outline-hidden"
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5">
                <Sun
                    className="absolute inset-0 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-amber-500"
                    size={20}
                />
                <Moon
                    className="absolute inset-0 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-blue-400"
                    size={20}
                />
            </div>
        </button>
    )
}

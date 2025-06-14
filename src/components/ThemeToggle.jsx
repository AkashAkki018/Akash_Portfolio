import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";

export default function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedtheme = localStorage.getItem("theme");
        if (storedtheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "fixed z-50 rounded-full p-2 transition-all duration-300",
                "hover:bg-secondary/80 focus:outline-none",
                "bg-background/80 backdrop-blur-sm border shadow-sm",
                // Mobile positioning
                "right-4 top-[4.5rem]",
                // Desktop positioning
                "sm:right-5 sm:top-5"
            )}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
                <Moon className="w-5 h-5 text-blue-700" />
            )}
        </button>
    );
}
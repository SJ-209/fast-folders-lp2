import React, { useEffect } from "react";
import { Moon, Sun } from "lucide-react";   

function ThemeSwitch() {
    const [theme, setTheme] = React.useState(() => {
        // Check for saved theme or default to light
        return localStorage.getItem("theme") || "dark";
    });
    
    useEffect(() => {
        // Update data-theme attribute and save to localStorage
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);
    
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    
    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
            {theme === "light" ? (
                <Sun className="w-5 h-5" />
            ) : (
                <Moon className="w-5 h-5" />
            )}
        </button>
    );
}

export default ThemeSwitch;
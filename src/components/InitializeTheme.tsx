import React from 'react'

const InitializeTheme = () => {
    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `
                (function() {
                    try {
                    const storedTheme = localStorage.getItem("theme");
                    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
                        document.documentElement.classList.add("dark");
                    } else {
                        document.documentElement.classList.remove("dark");
                    }
                    } catch (_) {}
                })();
                `
            }}
        />
    )
}

export default InitializeTheme
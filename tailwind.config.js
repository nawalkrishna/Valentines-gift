/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                romantic: {
                    cream: "#FFFBF0",
                    blush: "#FFD1DC",
                    rose: "#FF6B8B",
                    deep: "#E51E5D",
                    pastel: "#FFF0F5",
                }
            },
            boxShadow: {
                'premium': '0 10px 40px -10px rgba(255, 107, 139, 0.2), 0 5px 20px -5px rgba(255, 107, 139, 0.1)',
                'glass': '0 8px 32px 0 rgba(255, 107, 139, 0.1)',
            },
            backgroundImage: {
                'mesh': "url('https://grainy-gradients.vercel.app/noise.svg'), radial-gradient(at 0% 0%, rgba(255, 209, 220, 0.5) 0, transparent 50%), radial-gradient(at 50% 0%, rgba(255, 107, 139, 0.3) 0, transparent 50%), radial-gradient(at 100% 0%, rgba(255, 251, 240, 0.5) 0, transparent 50%)",
            }
        },
    },
    plugins: [],
};

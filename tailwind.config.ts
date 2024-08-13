import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            height: {
                "header": "84px",
                "main": "calc(100vh - 225px)"
            },
            backgroundColor: {
                "default": "#F3F7F9"
            },
            colors: {
                mainText: '#0A233D',
                subText: '#9BAFB5',
                contributeBox: '#EBF4F5',
                accent: '#17B4C2',
            }
        },
    },
    plugins: [],
};
export default config;

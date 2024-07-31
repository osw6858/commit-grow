/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        OLLAMA_HOST: process.env.OLLAMA_HOST,
    },
};

export default nextConfig;

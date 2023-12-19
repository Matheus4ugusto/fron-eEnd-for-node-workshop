/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return {
            afterFiles: [
                {
                    source: "/api/:path*",
                    destination: `${process.env.NEXT_PUBLIC_BASE_URL}/api/:path*`,
                }
            ]
        }
    }
}

module.exports = nextConfig
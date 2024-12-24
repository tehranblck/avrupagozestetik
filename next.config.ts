import type { NextConfig } from "next";


const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "1337", // Backend'in çalıştığı port
                pathname: "/uploads/**", // İzin verilen dosya yolu
            },
        ],
    },
};

export default nextConfig;

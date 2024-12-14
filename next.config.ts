import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

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

export default withNextIntl(nextConfig);

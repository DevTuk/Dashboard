/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

//utilizando hostname: "*" te permite agregar imagenes de distintos servidores al mismo tiempo,
export default nextConfig;

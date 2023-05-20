/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["randomuser.me", "raw.githubusercontent.com", "d2r9epyceweg5n.cloudfront.net", "www.westerndigital.com",
      "dlcdnwebimgs.asus.com", "www.qloud.ar", "www.corsair.com", "asset.msi.com", "www.intel.la", "cdn-icons-png.flaticon.com", "encrypted-tbn0.gstatic.com"
      , "www.qloud.ar", "info.nsx.com.ar"
    ],
  },
}

module.exports = nextConfig

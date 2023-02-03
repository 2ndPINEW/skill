/** @type {import('next').NextConfig} */
require('dotenv').config()

const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    MICRO_CMS_SERVICE_NAME: process.env.SERVICE,
    MICRO_CMS_API_KEY: process.env.APIKEY
  }
}

module.exports = nextConfig

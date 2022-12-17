/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT || 'DEV',
    RABBITMQ_BASE_URL: process.env.RABBITMQ_BASE_URL || 'http://localhost:15672',
    RABBITMQ_USERNAME: process.env.RABBITMQ_USERNAME || 'guest',
    RABBITMQ_PASSWORD: process.env.RABBITMQ_PASSWORD || 'guest',
    RABBITMQ_VHOST: process.env.RABBITMQ_VHOST || '/'
  }
};

module.exports = nextConfig;

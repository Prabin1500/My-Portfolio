/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Webpack
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]'
      }
    });
    return config;
  },
  // For Turbopack
  experimental: {
    turbo: {
      rules: {
        '*.pdf': {
          loaders: ['file-loader']
        }
      }
    }
  }
}

export default nextConfig;

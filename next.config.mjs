/** @type {import('next').NextConfig} */
const isGithubPages = process.env.DEPLOY_ENV === 'GH_PAGES';

const nextConfig = {

  assetPrefix: isGithubPages ? '/My-Portfolio/' : '',
  basePath: isGithubPages ? '/My-Portfolio' : '',
  trailingSlash: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.(pdf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]'
      }
    });
    return config;
  },

  experimental: {
    turbo: {
      rules: {
        '*.pdf': {
          loaders: ['file-loader']
        }
      }
    }
  }
};

export default nextConfig;

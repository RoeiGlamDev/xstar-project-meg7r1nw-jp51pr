import { withImages } from 'next-images';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Replace with your actual image domain
  },
  optimization: {
    images: {
      loader: 'default',
      path: '/'
}
},
  webpack: (config) => {
    // Customize webpack config if needed
    return config;
  }
};

export default withImages(nextConfig);
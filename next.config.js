/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        checkResource(resource) {
          const largeStringWarning = "Serializing big strings";
          return resource.includes(largeStringWarning);
        },
      })
    );

    return config;
  },
};
  

module.exports = nextConfig
// next.config.js



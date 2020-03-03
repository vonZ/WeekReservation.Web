const withImages = require('next-images');
const withSass = require('@zeit/next-sass');

module.exports = withImages(
  withSass({
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
  })
);

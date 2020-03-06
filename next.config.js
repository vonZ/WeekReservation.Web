const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async () => {
  await imagemin(['media/images/*.jpg'], 'build/images', {
    use: [imageminMozjpeg()],
  });

  console.log('Images optimized');
})();

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

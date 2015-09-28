module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
      'spec/*_spec.js'
    ],
    preprocessors: {
      'spec/*.js': ['webpack']
    },
    reporters: ['dots'],
    webpack: {
      context: __dirname,
      module: require('./webpack.config').module
    },
    webpackServer: {
      noInfo: true
    }
  });
};

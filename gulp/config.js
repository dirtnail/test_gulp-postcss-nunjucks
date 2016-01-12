var src               = './app',
    srcAssets         = src + '/_assets',
    build             = './build',
    development       = build + '/development',
    developmentAssets = development + '/assets';
    
module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: [development, build, src]
      },
      port: 9999,
      files: [
        developmentAssets + '/css/*.css',
        developmentAssets + '/js/*.js',
        developmentAssets + '/images/**',
        developmentAssets + '/fonts/*'
      ]
    }
  },
  delete: {
    src: [developmentAssets]
  },
  styles: {
    src:  srcAssets + '/styles/*.css',
    dest: developmentAssets + '/css',
    options: {
      precss: {},
      autoprefixer: {
        browsers: ['last 3 versions'],
        cascade: true
      },
      mqpacker: {}
    }
  }  
};
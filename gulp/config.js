var src               = './app',
    srcAssets         = src + '/_assets',
    srcHtml           = src + '/_html',
    build             = './build',
    development       = build + '/development',
    developmentAssets = development + '/assets';
    production        = build + '/production',
    productionAssets  = production + '/assets';    
    
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
        developmentAssets + '/img/**'
      ]
    },
    production: {
      server: {
        baseDir: [production]
      },
      port: 9998
    }
  },
  delete: {
    src: [developmentAssets]
  },
  nunjucks: {
    development: {
      src:   src,
      dest:  development,
      options: {
        srcTemplates: srcHtml + '/_templates',
        srcPages: srcHtml + '/_pages/**/*.+(html|nunjucks)',
        srcData: srcHtml + '/_data/data.json'
      }
    },
    production: {
      src:   src,
      dest:  production,
      options: {   
        srcTemplates: srcHtml + '/_templates',
        srcPages: srcHtml + '/_pages/**/*.+(html|nunjucks)',
        srcData: srcHtml + '/_data/data.json'
      }
    }    
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
  },
  scripts: {
    src:  srcAssets + '/scripts/*.js',
    dest: developmentAssets + '/js'
  },
  images: {
    src:  srcAssets + '/images/**/*',
    dest: developmentAssets + '/img'
  },
  base64: {
    src: developmentAssets + '/css/*.css',
    dest: developmentAssets + '/css',
    options: {
      baseDir: build,
      extensions: ['svg','png','jpg'],
      maxImageSize: 8 * 1024, // bytes
      debug: true
    }
  },
  
  optimize: {
    css: {
      src:  developmentAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {}
    },
    js: {
      src:  developmentAssets + '/js/*.js',
      dest: productionAssets + '/js/',
      options: {}
    },
    images: {
      src:  developmentAssets + '/images/**/*.{jpg,jpeg,png,gif}',
      dest: productionAssets + '/images/',
      options: {
        optimizationLevel: 3,
        progessive: true,
        interlaced: true
      }
    }
  },
  
  watch: {
    html:     srcHtml + '/**/*.+(html|nunjucks|json)',    
    styles:   srcAssets + '/styles/**/*.css',
    scripts:  srcAssets + '/scripts/**/*.js',
    images:   srcAssets + '/images/**/*'
  }    
};
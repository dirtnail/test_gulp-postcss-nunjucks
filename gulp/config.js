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
  clean: {
    development: {
      src: development
    },
    production: {
      src: production
    }
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
    main: {
      src:  srcAssets + '/scripts/*.js',
      dest: developmentAssets + '/js'
    },
    vendor: {
      src:  srcAssets + '/scripts/vendor*.js',
      dest: developmentAssets + '/js'
    }
  },
  images: {
    src:  srcAssets + '/images/**/*',
    dest: developmentAssets + '/img'
  },
  copyfonts: {
    development: {
      src:  srcAssets + '/fonts/*',
      dest: developmentAssets + '/fonts'
    },
    production: {
      src:  developmentAssets + '/fonts/*',
      dest: productionAssets + '/fonts'
    }
  },
  watch: {
    html:     srcHtml + '/**/*.+(html|nunjucks|json)',
    styles:   srcAssets + '/styles/**/*.css',
    scripts:  srcAssets + '/scripts/**/*.js',
    images:   srcAssets + '/images/**/*'
  },
  // optimize assets
  optimize: {
    css: {
      src:  developmentAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {}
    },
    js: {
      main: {
        src:  developmentAssets + '/js/*.js',
        dest: productionAssets + '/js/',
        options: {}
      },
      vendor: {
        src:  developmentAssets + '/js/vendor/*.js',
        dest: productionAssets + '/js/',
        options: {}
      }
    },
    images: {
      src:  developmentAssets + '/img/**/*.{jpg,png,gif}',
      dest: productionAssets + '/img/',
      options: {}
    },
    html: {
      src: production + '/**/*.html',
      dest: production,
      options: {
        removeComments: true,
        removeCommentsFromCDATA: true,
        collapseWhitespace: true
      }
    }
  },
  // revisioning
  revision: {    
    src: {
      assets: [
        productionAssets + '/css/*.css',
        productionAssets + '/js/*.js',
        productionAssets + '/img/**/*'
      ],
      base: production
    },
    dest: {
      assets: production,
      manifest: {
        name: 'rev-manifest.json',
        path: productionAssets
      }
    }
  },
  collect: {
    src: [
      productionAssets + '/rev-manifest.json',
      production + '/**/*.{html,xml,txt,json,css,js}',
      '!' + production + '/feed.xml'
    ],
    dest: production
  },
  // deploy
  rsync: {
    src: production + '/**',
    options: {
      destination: '/_dump/_cloud\Dropbox/webdev/_git/_myRepos/dirtnail.github.io/',
      root: production,
      hostname: '127.0.0.1',
      username: '',
      incremental: true,
      progress: true,
      relative: true,
      emptyDirectories: true,
      recursive: true,
      clean: true,
      exclude: ['.DS_Store'],
      include: []
    }
  }
};
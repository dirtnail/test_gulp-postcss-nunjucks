var gulp           = require('gulp'),
    fs             = require('fs'),
    data           = require('gulp-data'),
    browsersync    = require('browser-sync'),    
    nunjucksRender = require('gulp-nunjucks-render'),
    config         = require('../../config').nunjucks.development,
    jsonData       = JSON.parse(fs.readFileSync(config.options.srcData));
    
gulp.task('nunjucks', function() {
  browsersync.notify('Compiling Nunjucks');
  nunjucksRender.nunjucks.configure([config.options.srcTemplates], {watch: false});
  return gulp.src(config.options.srcPages)
    .pipe(data(function() {
      return jsonData
    }))
    .pipe(nunjucksRender({
        env: 'development',
        jsPath: './assets/js/',
        cssPath: './assets/css/',
        imgPath: './assets/img/'
    }))
    .pipe(gulp.dest(config.dest));
});

gulp.task('nunjucks-rebuild', ['nunjucks'], function() {
  browsersync.reload();
});
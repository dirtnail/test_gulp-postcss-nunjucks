var gulp           = require('gulp'),
    plumber        = require('gulp-plumber'),
    data           = require('gulp-data'),
    nunjucksRender = require('gulp-nunjucks-render'),
    config         = require('../../config').nunjucks,
    fs             = require('fs'),
    jsonData       = JSON.parse(fs.readFileSync(config.options.srcData));

gulp.task('nunjucks', function() {
  nunjucksRender.nunjucks.configure([config.options.srcTemplates], {watch: false});
  return gulp.src(config.options.srcPages)
    .pipe(plumber())
    .pipe(data(function() {
      return jsonData
    }))
    .pipe(nunjucksRender())
    .pipe(gulp.dest(config.dest));
});
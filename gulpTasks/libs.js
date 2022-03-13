const plumber = require('gulp-plumber'),
      errorHandler = require('gulp-plumber-error-handler'),
        babel = require('gulp-babel'),
      uglify = require('gulp-uglify'),
      concat = require('gulp-concat');

module.exports = function () {
  $.gulp.task('libs', () => {
    return $.gulp.src('app/js/libs/**/*')
      .pipe(plumber({ errorHandler: errorHandler('Error in libs task') }))
        .pipe(babel({
            presets: ["@babel/preset-env"]
        }))
      .pipe(uglify())
      .pipe($.gulp.dest('build/js/libs/'));
  });
};
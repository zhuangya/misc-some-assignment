'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();

var $ = require('gulp-load-plugins')();

const path = require('path');

const appPath = path.join(__dirname, 'app/');

gulp.task('serve', _ => {
  browserSync.init({
    server: {
      baseDir: appPath
    }
  });
  gulp.watch(`${appPath}/**/*`, browserSync.reload);
});

gulp.task('styles', function () {
  return gulp.src(`${appPath}/css/**/*.css`)
    .pipe($.autoprefixer([
      'Android 2.3',
      'Android >= 4',
      'Chrome >= 20',
      'Firefox >= 24',
      'Explorer >= 9',
      'iOS >= 6',
      'Opera >= 12',
      'Safari >= 6'
    ]))
    .pipe($.csscomb())
    .pipe(gulp.dest(`${appPath}/dist/css`));
});

gulp.task('default', ['styles', 'serve']);

'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();

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

gulp.task('default', ['serve']);

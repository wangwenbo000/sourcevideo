var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');

gulp.task('default', function () {
  gulp.watch('components/*', ['webpack']);
});

gulp.task('webpack', function () {
  return gulp.src('components/*.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(rename('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('www/static/app'));
});

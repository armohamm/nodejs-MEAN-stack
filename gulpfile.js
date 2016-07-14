const gulp = require('gulp');
const jasmine = require('gulp-jasmine');

gulp.task('default', () =>
    gulp.src('tests/spec.js')
        .pipe(jasmine())// gulp-jasmine works on filepaths so you can't have any plugins before it
);
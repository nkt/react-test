var gulp = require('gulp');
var plumber = require('gulp-plumber');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');


gulp.task('jsx', function () {
    browserify('./app/app.jsx')
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('public'));
});

gulp.task('html', function () {
    gulp.src('app/**/*.html')
        .pipe(gulp.dest('public'));
});

gulp.task('build', ['jsx', 'html']);

gulp.task('watch', ['build'], function () {
    gulp.watch('app/**/*.jsx', ['jsx']);
    gulp.watch('app/**/*.html', ['html']);
});

gulp.task('default', ['watch']);
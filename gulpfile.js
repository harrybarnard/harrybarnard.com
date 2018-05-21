/**
 * harrybarnard.com - Gulpfile
 * ============================================================ */
(function () {
    "use strict";

    var gulp = require('gulp'),
        fs = require('fs'),
        uglify = require('gulp-uglify'),
        sourcemaps = require('gulp-sourcemaps'),
        expect = require('gulp-expect-file'),
        sass = require('gulp-sass'),
        postcss = require('gulp-postcss'),
        run = require('gulp-run'),
        autoprefixer = require('autoprefixer'),
        awspublish = require('gulp-awspublish'),
        cloudfront = require('gulp-cloudfront-invalidate-aws-publish'),
        cleancss = require('gulp-clean-css');

    gulp.task('build-js', function () {
        var files = ['src/js/*.js'];
        gulp.src(files)
            .pipe(expect(files))
            .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('static/js'));
    });

    gulp.task('build-hugo', function (cb) {
        run('hugo').exec(cb);
    });

    gulp.task('watch-js', ['build-js'], function () {
        gulp.watch('src/js/*.js', ['build-js']);
    });

    gulp.task('watch-sass', ['build-sass'], function () {
        gulp.watch('src/scss/**/*.scss', ['build-sass']);
    });

    var sassPaths = [
        'node_modules/normalize-scss/sass',
        'node_modules/foundation-sites/scss',
        'node_modules/motion-ui/src'
    ];

    gulp.task('build-sass', function () {
        return gulp.src('src/scss/app.scss')
            .pipe(sass({
                includePaths: sassPaths,
                outputStyle: 'compressed'
            }).on('error', sass.logError))
            .pipe(sourcemaps.init())
            .pipe(postcss([autoprefixer({browsers: ['last 2 version']})]))
            .pipe(cleancss())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('static/css'));
    });

    gulp.task('publish', ['build'], function () {

        var aws = require('./aws.json'),
            publisher = awspublish.create(aws.s3);

        var headers = {
            'Cache-Control': 'max-age=315360000, no-transform, public'
        };

        return gulp.src('./public/**')
            .pipe(awspublish.gzip())
            .pipe(publisher.publish(headers))
            .pipe(cloudfront(aws.cf))
            .pipe(publisher.cache())
            .pipe(awspublish.reporter());
    });

    gulp.task('watch', ['watch-sass', 'watch-js']);

    gulp.task('build', ['build-sass', 'build-js', 'build-hugo']);

    gulp.task('default', ['build']);

})();
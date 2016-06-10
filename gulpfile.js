var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var htmlhint = require('gulp-htmlhint');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var size = require('gulp-filesize');
var csscomb = require('gulp-csscomb');
var uglify = require('gulp-uglify');
var shorthand = require('gulp-shorthand');
var csso = require('gulp-csso');

gulp.task('serve', ['sass', 'js', 'html'], function () {

    browserSync.init({
        server: "./public"
    });

    gulp.watch("./dev/scss/**/*.scss", ['sass']).on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
    gulp.watch("./public/**/*.html").on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        browserSync.reload();
    });
    gulp.watch("./dev/app/**/*.js", ['js']).on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
    gulp.watch("./dev/app/partials/*.html", ['html']).on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('sass', function () {
    return gulp.src("./dev/scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
        }))
        .pipe(shorthand())
        .pipe(csscomb())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest("./public/css"))
        .pipe(browserSync.stream({
            match: '**/*.css'
        }));
});

gulp.task('js', function () {
    return gulp.src("./dev/app/**/*.js")
        .pipe(gulp.dest("./public/app"))
        .pipe(browserSync.stream({
            match: '**/*.js'
        }));
});

gulp.task('html', function () {
    return gulp.src("./dev/app/partials/*.html")
        .pipe(htmlhint())
        .pipe(gulp.dest("./public/app/partials"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
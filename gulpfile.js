const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

var minify = false;


gulp.task('js', function() {
    return browserify('./src/js/index.js', { debug: !minify })
        .transform(require('babelify'))
        .transform(require('browserify-ngannotate'))
        .bundle()
        .pipe(source('admin.js'))
        .pipe($.if(minify, buffer()))
        .pipe($.if(minify, $.uglify()))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('css', function() {
    gulp.src('src/css/style.less')
        .pipe($.less())
        .pipe($.autoprefixer())
        .pipe($.if(minify, $.minifyCss()))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('html', function() {
    gulp.src('src/**/*.html').pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
    gulp.src('src/img/**/*.*').pipe(gulp.dest('dist/img'));
});

gulp.task('icons', function() {
    gulp.src('node_modules/bootstrap/fonts/**/*.*').pipe(gulp.dest('dist/fonts'));
});

gulp.task('setMinify', function() {
    minify = true;
});

gulp.task('serve', $.serve('dist'));

gulp.task('default', ['html', 'js', 'css', 'images', 'icons']);
gulp.task('minify', ['setMinify', 'default']);

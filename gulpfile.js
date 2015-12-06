const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

var minify = false;


gulp.task('js', function() {
    return browserify('src/js/app.js', { debug: !minify })
        .transform(require('babelify'), { presets: ['es2015'] })
        .bundle()
        .pipe(source('app.js'))
        .pipe($.if(minify, buffer()))
        .pipe($.if(minify, $.uglify()))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('css', ['icons'], function() {
    gulp.src('src/css/style.less')
        .pipe($.less())
        .pipe($.autoprefixer())
        .pipe($.if(minify, $.minifyCss()))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('icons', function () {
    return gulp.src('src/icons/*.svg')
        .pipe($.iconfont({
            fontName: 'icons',
            appendCodepoints: false,
            normalize: true,
            centerHorizontally: true,
            formats: ['ttf', 'eot', 'woff', 'svg'],
            fontHeight: 100
        }))
        .on('glyphs', function(glyphs) {
            gulp.src('src/icons/icons.css.ejs')
                .pipe($.consolidate('lodash', {
                    glyphs: glyphs.map(function(glyph) {
                        // this line is needed because gulp-iconfont has changed the api from 2.0
                        return { name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0) }
                    }),
                    fontName: 'icons',
                    fontPath: '../font/',
                    className: 'icon'
                }))
                .pipe($.rename('icons.css'))
                .pipe(gulp.dest('src/icons'));
        })
        .pipe(gulp.dest('dist/font'));
});

gulp.task('html', function() {
    gulp.src('src/**/*.html').pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
    gulp.src('src/img/**/*.*').pipe(gulp.dest('dist/img'));
});

gulp.task('setMinify', function() {
    minify = true;
});

gulp.task('serve', $.serve('dist'));

gulp.task('default', ['html', 'js', 'css', 'images', 'icons']);
gulp.task('minify', ['setMinify', 'default']);

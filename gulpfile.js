const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const concatCss = require('gulp-concat-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const del = require('del');
const cssFiles = [
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
    'node_modules/font-awesome/css/font-awesome.css',
    'app/scssbuff/**/*.css'
];


/* gulp.task('minify-css', () => {
    
}); */

function minifyCSS() {
    return gulp.src(cssFiles)
        .pipe(concatCss('styles.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
}

function compilesass() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/scssbuff'));
}

function copyIcons() {
    return gulp.src('node_modules/font-awesome/fonts/**.*')
        .pipe(gulp.dest('font-awesome/fonts'));
}


function clean() {
    return del(['app/scssbuff']);
}

gulp.task('default', gulp.series(compilesass, minifyCSS, copyIcons, clean));
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Scss Task
function scssTask(){
    return src('app/scss/style.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest('dist', {sourcemaps: '.'}))
}

// Javascript Task
function jsTask(){
    return src('app/js/script.js', { sourcemaps: true })
        .pipe(babel({ presets: ['@babel/preset-env'] }))
        .pipe(terser())
        .pipe(dest('dist', { sourcemaps: '.' } ))
}

// Broswersync Task
function browsersyncServe(cb){
    browsersync.init({
        server:{
            baseDir: '.'
        },
        notify: {
            styles: {
                top: 'auto',
                bottom: '0',
            },
        },
    })
    cb()
}

function browsersyncReload(cb){
    browsersync.reload()
    cb()
}

// Wacth Task
function watchTask(){
    watch('*.html', browsersyncReload)
    watch(['app/scss/**/*.scss', 'app/js/**/*.js'], series(scssTask, jsTask, browsersyncReload))
}

// Default gulp task
exports.default = series(
    scssTask,
    jsTask,
    browsersyncServe,
    watchTask,
);

exports.build = series(scssTask, jsTask);



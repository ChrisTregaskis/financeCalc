var gulp = require('gulp');
var sass = require('gulp-sass');

function hello(cb) {
    console.log('hello Chrispy');
    cb()
}

function sassCompile(cb) {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
    cb();
}

function watch() {
    gulp.watch('app/scss/**/*.scss', sassCompile);
}

exports.hello = hello;
exports.sass = sassCompile;
exports.watch = watch;

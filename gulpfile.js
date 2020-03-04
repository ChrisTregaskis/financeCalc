var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

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

gulp.task('babel', () =>
    gulp.src('app/js/es6/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('app/js/es5'))
);

function watch() {
    gulp.watch('app/scss/**/*.scss', sassCompile);
}

exports.hello = hello;
exports.sass = sassCompile;
exports.watch = watch;

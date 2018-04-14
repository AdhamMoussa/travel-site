let gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssVars = require('postcss-simple-vars'),
    nested = require('postcss-nested');

gulp.task('default', () => {
    console.log('niceeeeeeee');
});

gulp.task('html', () => {
    console.log('hi htmlll');
});
gulp.task('styles', () => {
    return gulp.src('app/assets/styles/styles.css')
        .pipe(postcss([cssVars, nested, autoprefixer]))
        .pipe(gulp.dest('app/temp/styles'));
});

gulp.task('watch', () => {
    watch('app/index.html', () => {
        gulp.start('html');
    });
    watch('app/assets/styles/**/*.css', () => {
        gulp.start('styles');
    });
});
/**
 * Created by SergPK on 22.03.2017.
 */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({stream: true}));
});
gulp.task('serve',function () {
    browserSync.init({
        server:{
            baseDir:'./'
        }
    });
    gulp.watch('./sass/**/*.sass',['sass']);
    gulp.watch('./**/*.html').on('change',browserSync.reload);
});

gulp.task('default',['sass','serve']);


// gulp.task('sass:watch', function () {
//     gulp.watch('./sass/**/*.sass', ['sass']);
// });
//
// gulp.task('browser-sync', function () {
//     var files = [
//         'app/**/*.html',
//         'app/assets/css/**/*.css',
//         'app/assets/imgs/**/*.png',
//         'app/assets/js/**/*.js'
//     ];
//
//     browserSync.init(files, {
//         server: {
//             baseDir: './app'
//         }
//     });
// });
// var autoprefixer = require('sass-autoprefixer');
// gulp.task('default', function () {
//
//     gulp.src('project_gulp//sass/style.sass')
//         .pipe(autoprefixer({
//             browser: ['last 2 version'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('project_gulp//css/style.css'))
// });
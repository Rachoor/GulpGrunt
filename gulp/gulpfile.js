var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var cache = require('gulp-cache');

var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var useref = require('gulp-useref');
var imagemin = require('gulp-imagemin');

var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

gulp.task('hello', function() {
    console.log('Hello');
});

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })
})

gulp.task('images', function(){
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
      .pipe(cache(imagemin({
        interlaced: true
      })))
      .pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
      .pipe(gulp.dest('dist/fonts'))
})

gulp.task('useref', function(){
    return gulp.src('app/*.html')
      .pipe(useref())
      .pipe(gulpIf('*.js', uglify()))
      .pipe(gulpIf('*.css', cssnano()))
      .pipe(gulp.dest('dist'))
});


gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']); 
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload); 
})
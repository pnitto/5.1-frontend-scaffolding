var gulp = require('gulp');
gulp.task('hello', function(){
  console.log('Hello Zell!')
});
var sass = require('gulp-sass');
gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});
 var browserSync = require('browser-sync');
 gulp.task('browserSync', function(){
   browserSync.init({
     server: {
       baseDir:'app'
     },
   })
 })
 gulp.task('watch',['browserSync','sass'], function(){
   gulp.watch('app/scss/styles.scss',['sass']);
 })

var useref = require('gulp-useref');
gulp.task('useref', function(){
  var assets = useref.assets();
  return gulp.src('app/*.html')
  .pipe(assets)
  .pipe(assets.restore())
  .pipe(useref())
  .pipe(gulp.dest('dist'))
});

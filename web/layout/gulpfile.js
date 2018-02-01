var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(server({
      livereload:       true,
      directoryListing: false,
      open:             true,
      log:              'debug',
      clientConsole:    true
    }));
});

gulp.task('styles', function() {
    gulp.src('sass/styles.{sass,scss,css}')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css/'));
});

gulp.task('default',function() {
    gulp.watch('**/*.{sass,scss,css}',['styles']);
});

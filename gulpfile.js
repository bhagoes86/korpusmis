var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var livereload = require('gulp-livereload');

var paths = {
  less: ['./less/*.less']
};

gulp.task('less', function(done) {
    return gulp.src(paths.less)
    .pipe(less())
    .pipe(gulp.dest('./public/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./public/css/'))
    // .on('end', done);
    .pipe(livereload());
});

gulp.task('livereload', function() {
  livereload();
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(paths.less, ['less']);
  gulp.watch("./app/views/*.php", ['livereload']);
  gulp.watch("./public/modules/**/*.js",['livereload']);
  gulp.watch("./public/modules/**/*.html",['livereload']);
});

gulp.task('default', ['watch']);


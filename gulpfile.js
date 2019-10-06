const gulp = require('gulp');
const watch  = require('gulp-watch');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

const scripts = require('./scripts.json');
const styles = require('./styles.json');

var devMode = false;

gulp.task('css', async function() {
  gulp.src(styles)
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('js', async function() {
  gulp.src(scripts)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('html', async function() {
  gulp.src('./src/templates/**/*.html')
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('build', gulp.series('css', 'js', 'html'), function() {
});

gulp.task('browser-sync', function() {
  browserSync.init(null, {
  //browserSync.init(null, {
    //open: false,
    server: {
      baseDir: 'dist'
    }
  });
});


gulp.task('start', gulp.series('build', 'browser-sync'), async function() {
 devMode = true;
 watch(['./src/css/**/*.css'], ['css']);
 watch(['./src/js/**/*.js'], ['js']);
 watch(['./src/templates/**/*.html'], ['html']);
});


// gulp.task('start', gulp.series('build', 'browser-sync'), async function() {
//  devMode = true;
//  gulp.watch(['./src/css/**/*.css'], async function() {
//    gulp.src(styles)
//      .pipe(concat('main.css'))
//      .pipe(gulp.dest('./dist/css'))
//      .pipe(browserSync.reload({
//        stream: true
//      }));
//  });
//   gulp.watch(['./src/js/**/*.js'], async function() {
//     gulp.src(scripts)
//       .pipe(concat('scripts.js'))
//       .pipe(gulp.dest('./dist/js'))
//       .pipe(browserSync.reload({
//         stream: true
//       }));
//   });
//
//   gulp.watch(['./src/templates/**/*.html'], async function() {
//     gulp.src('./src/templates/**/*.html')
//       .pipe(gulp.dest('./dist/'))
//       .pipe(browserSync.reload({
//         stream: true
//       }));
//   });

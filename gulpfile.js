var gulp = require('gulp'),
	// concatCSS = require('gulp-concat-css'),
	rename = require('gulp-rename'),
	// notify = require('gulp-notify'),
	minifyCSS = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass');	


	gulp.task('connect', function() {
  		connect.server({
    root: 'result',
    livereload: true
  		});
	});


gulp.task('html', function () {
	gulp.src('result/index.html')
	.pipe(connect.reload());
})

gulp.task('css', function() {	
	return gulp.src('result/css/*.css')
    // .pipe(concatCSS('css-style.css'))
    .pipe(minifyCSS())
    .pipe(rename('css-style.min.css'))
    .pipe(autoprefixer({
    	browsers: ['last 100 versions'],
    	cascade: false
    }))
    .pipe(gulp.dest('result/css'))
    // .pipe(notify('CSS Saved!'))
    .pipe(connect.reload());
});


gulp.task('sass', function () {
  gulp.src('result/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('result/css'));
});

gulp.task('watch', function () {
	gulp.watch('result/css/*.css', ['css'])
	gulp.watch('result/index.html', ['html'])
	gulp.watch('result/scss/*.scss', ['sass']);
})

 gulp.task('default', ['connect', 'html', 'css', 'sass', 'watch']);
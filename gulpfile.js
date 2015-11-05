var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

gulp.task('compress', function () {
	return gulp.src('build/astar.js')
		.pipe(uglify())
		.pipe(rename({
			extname: '.min.js'
		}))
		.pipe(gulp.dest('build'));
});

gulp.task('default', ['compress', 'watch']);

gulp.task('watch', function () {
	gulp.watch('build/astar.js', ['compress']);
});
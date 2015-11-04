var gulp = require('gulp'),
	uglify = require('gulp-uglify');

gulp.task('compress', function () {
	return gulp.src('build/astar.js')
		.pipe(uglify());
});

gulp.task('watch', function () {
	gulp.watch('build/astar.js', ['compress']);
});
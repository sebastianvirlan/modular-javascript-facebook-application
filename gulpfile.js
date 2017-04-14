var gulp        = require('gulp'),
    gp_concat   = require('gulp-concat'),
    watch       = require('gulp-watch'),

    jsPath      = 'src/';
    buildPath   = 'build/';

function errorlog(err){
    console.error(err.message);
    this.emit('end');
}

gulp.task('scripts', function() {
    // place code for your default task here
    var stream = gulp.src(jsPath + '**/*.js')
        .pipe(gp_concat('app.js'))
        .pipe(gulp.dest(buildPath))
        .on('error', errorlog);
    return stream;
});

gulp.task('html', function(){
    var stream = gulp.src('*.html');

    return stream;
});

gulp.task('watch', function () {
    // Endless stream mode
    gulp.watch(jsPath + '**/*.js', ['scripts']);
    gulp.watch('*.html', ['html']);

});

gulp.task('default', ['scripts', 'html', 'watch']);
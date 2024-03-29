var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var argv = require('yargs').argv;
console.log(argv);

var dest = argv.dest === undefined ? './' : argv.dest + '/';
console.log("Destination: " + dest);

// Compile LESS files from /less into /css
gulp.task('less', function() {
    return gulp.src('less/styles.less')
        .pipe(less())
        .pipe(gulp.dest(dest + 'css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify compiled CSS
gulp.task('minify-css', ['less'], function() {
    return gulp.src('css/styles.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(dest + 'css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify JS
gulp.task('minify-js', function() {
    return gulp.src(['js/off-canvas.js', 'js/bunny-bear-button.js', 'js/class-manager.js'])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(dest + 'js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Run everything
gulp.task('default', ['less', 'minify-css', 'minify-js']);

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'less', 'minify-css', 'minify-js'], function() {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('css/*.css', ['minify-css']);
    gulp.watch('js/*.js', ['minify-js']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
});

gulp.task('build', ['less', 'minify-css', 'minify-js'], function () {
    return gulp.src([
        'index.html',
        '**/css/**/*.min.*',
        '**/files/*.pdf',
        '**/img/**/*.jpg'
    ])
    .pipe(gulp.dest('public'));
})

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimirImagem() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}




// função para compilar e minificar o arquivo javascript
function comprimeJavascript(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}



// função para compilar e minificar o arquivo ( outputStyle: 'compressed')
function compilaSass(){
    return gulp.src('./source/styles/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest("./build/styles"))
}


exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass))
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavascript))
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimirImagem))
}
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    mocha = require('gulp-mocha'),
    env = require('gulp-env'),
    supertest = require('supertest');

gulp.task('default', function () {
    nodemon({
        script: 'server.js',
        extension: 'js',
        env: {
            PORT: 8000
        },
        ignore: './node_modules'
    })
        .on('restart', function () {
            console.log('Restarting Web Services...');
        });
});

gulp.task('test', function () {
    env({vars: {ENV: 'Test'}});
    gulp.src('tests/*.js', {read: false})
        .pipe(mocha({reporter: "nyan"}));
});

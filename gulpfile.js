const { src, dest, parallel } = require('gulp');
const fs = require('fs');
const replace = require('gulp-replace');

function createOnepage() {
    return src('app/index.html')
        // Add Google Analytics header
        .pipe(replace('<!--HEADER-->', fs.readFileSync('app/header.html')))
        .pipe(dest('docs/'));
}

function moveMp4() {
    return src('app/*.mp4')
        .pipe(dest('docs/'));
}

exports.default = parallel(createOnepage, moveMp4);
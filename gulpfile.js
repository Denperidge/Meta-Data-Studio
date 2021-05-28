const { src, dest, parallel } = require('gulp');
const fs = require('fs');
const replace = require('gulp-replace');

function copyIndexPage() {
    return src('app/index.html')
        .pipe(dest('docs/'));
}

function buildDataPage() {
    return src('app/data.html')
        // Add Google Analytics header
        .pipe(replace('<!--HEADER-->', fs.readFileSync('app/header.html')))
        .pipe(replace('<!--IFRAME-->', fs.readFileSync('app/iframe.html')))
        .pipe(dest('docs/'));
}

exports.default = parallel(copyIndexPage, buildDataPage);
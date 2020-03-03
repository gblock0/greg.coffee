const { series, parallel, src, dest } = require("gulp");
const del = require("del");
const uglifyCss = require("gulp-uglifycss");
const CacheBuster = require("gulp-cachebust");
var cacheBust = new CacheBuster();

async function clean(cb) {
  await del("public");
  cb();
}

function css() {
  return src("src/**/*.css")
    .pipe(uglifyCss())
    .pipe(cacheBust.resources())
    .pipe(dest("public/"));
}

function images() {
  return src("src/**/*.png").pipe(dest("public/"));
}

function html() {
  return src("src/**/*.html")
    .pipe(cacheBust.references())
    .pipe(dest("public/"));
}

exports.default = series(clean, css, parallel(images, html));

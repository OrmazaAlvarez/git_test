const { series, src, dest, watch } = require('gulp');

const sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      concat = require('gulp-concat'),
      typescript = require('gulp-typescript'),
      uglify = require('gulp-uglify'),
      browsersync = require('browser-sync').create();
const srcPaths = {
  html:"src/html/",
  scss:"src/scss/",
  ts:"src/ts/"
};
const distPaths = {
  html:"dist/html/",
  css:"dist/css/",
  js:"dist/js/"
};

function html() {
    return src(srcPaths.html+"*.php")
               .pipe(dest(distPaths.html));
}

function scss() {
  return src(srcPaths.scss+"*.scss")
             .pipe(sourcemaps.init())
             .pipe(sass())
             .pipe(concat('styles.css'))
             .pipe(sourcemaps.write())
             .pipe(dest(distPaths.css))
             .pipe(browsersync.stream());
}
const tsProject = typescript.createProject("tsconfig.json");

function ts() {
  return src(srcPaths.ts+"*.ts")
             .pipe(tsProject())
             .pipe(sourcemaps.init())
             .pipe(concat('all.min.js'))
             .pipe(uglify())
             .pipe(sourcemaps.write())
             .pipe(dest(distPaths.js));
}

function serveTask() {
  browsersync.init({
    logLavel: "info",
    proxy: "http://local.miwebphp.com",
    startPath: "/miapp/dist/html"
  });
  watch(srcPaths.html+"*.php",html).on("change", browsersync.reload);
  watch(srcPaths.scss+"*.scss",scss);
  watch(srcPaths.ts+"*.ts",ts).on("change", browsersync.reload);
}
  
  exports.default =series(
    serveTask, html, scss, ts
  );
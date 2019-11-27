const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const browzerSync = require("browser-sync").create();

// compile scss into css
function style() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./css"))
    .pipe(browzerSync.stream());
}

function watch() {
  browzerSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browzerSync.reload);
  gulp.watch("./js/**/*.js").on("change", browzerSync.reload);
}

exports.style = style;
exports.watch = watch;

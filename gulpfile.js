
const { 
	series, 
	parallel, 
	src, 
	dest,
	watch,
} = require('gulp');

// plugins: https://gulpjs.com/plugins/ - funtions
const babel = require('gulp-babel');

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  cb();
}

function transpile(cb) {
	// body omitted
	cb();
}
  
function bundle(cb) {
	// body omitted
	cb();
}  

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

function clean(cb) {
  // body omitted
  cb();
}

function cssTranspile(cb) {
  // body omitted
  cb();
}

function cssMinify(cb) {
  // body omitted
  cb();
}

function jsTranspile(cb) {
  // body omitted
  cb();
}

function jsBundle(cb) {
  // body omitted
  cb();
}

function jsMinify(cb) {
  // body omitted
  cb();
}

function publish(cb) {
  // body omitted
  cb();
}

function srcDestTask () {
	return src('src/*.js')
		.pipe(babel())
		.pipe(dest('output/'));
}

exports.build = series(
  clean,
  parallel(
    cssTranspile,
    series(jsTranspile, jsBundle)
  ),
  parallel(cssMinify, jsMinify),
  publish
);

// exports.build = series(transpile, bundle);
exports.parallelTask = parallel(javascript, css);
exports.srcDestTask = srcDestTask;
exports.default = series(clean, build);

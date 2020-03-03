const { series } = require("gulp");

function css(cb) {
  // body omitted
  cb();
}
exports.default = series(css);

String.prototype.YAMLparse = function () {
  const { load } = require("js-yaml");
  return load(this);
};

Object.defineProperty(Object.prototype, "YAMLstringify", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: function (pretty) {
    const { dump } = require("js-yaml");
    return dump(this);
  },
});

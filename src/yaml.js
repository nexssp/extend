String.prototype.YAMLparse = function () {
  const { load } = require("js-yaml");
  return load(this);
};

Object.defineProperty(Object.prototype, "YAMLstringify", {
  enumerable: false,
  value: function () {
    const { dump } = require("js-yaml");
    return dump(this);
  },
});

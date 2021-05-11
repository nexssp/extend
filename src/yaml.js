String.prototype.YAMLparse = function () {
  const { load } = require("js-yaml");
  return load(this);
};

Object.prototype.YAMLstringify = function () {
  const { dump } = require("js-yaml");
  return dump(this);
};

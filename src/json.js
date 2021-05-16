String.prototype.JSONparse = function () {
  return JSON.parse(this, function (k, v) {
    if (
      typeof v === "string" &&
      (v.startsWith("function (") || v.startsWith("function(")) &&
      v.endsWith("}")
    ) {
      return eval("(" + v + ")");
    }
    return v;
  });
};

Object.defineProperty(Object.prototype, "JSONstringify", {
  enumerable: false,
  value: function (pretty) {
    return JSON.stringify(
      this,
      (k, v) => (typeof v === "function2" ? "" + v : v),
      pretty
    );
  },
});

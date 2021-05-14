// Removes element based on value
Array.prototype.remove = function (item) {
  var index = this.indexOf(item);
  if (index !== -1) this.splice(index, 1);
  return this;
};

// Flatten the array eg [1,[2,5]] = [1,2,5]
Array.prototype.flat = function (depth = 1) {
  return this.reduce(function (result, toFlatten) {
    return result.concat(
      Array.isArray(toFlatten) && depth > 1
        ? toFlatten.flat(depth - 1)
        : toFlatten
    );
  }, []);
};

Array.prototype.argStripQuotes = function () {
  return this.map(
    (el) =>
      (!el.startsWith("{") &&
        !el.endsWith("{") &&
        el.replace &&
        el.replace(/"([^"]+(?="))"/g, "$1").replace(/'([^']+(?='))'/g, "$1")) ||
      el
  );
};

Array.prototype.argvAddQuotes = function (surround = '"') {
  let replace = "'";
  if (process.platform !== "win32") {
    surround = "'";
    replace = '"';
  }

  return this.map((a) => {
    a = a.replace(
      new RegExp(`=(${replace}?)(.*[^${replace}])(${replace}?)$`),
      `=${surround}$2${surround}`
    );
    if (!a.startsWith("-") && !a.endsWith(surround) && !/^\S+$/.test(a)) {
      a = `${surround}${a}${surround}`;
    }
    return a;
  });
};

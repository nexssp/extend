// Removes element based on value
if (!Array.prototype.hasOwnProperty("remove")) {
  Object.defineProperty(Array.prototype, "remove", {
    enumerable: false,
    configurable: true,
    value: function (item) {
      var index = this.indexOf(item);
      if (index !== -1) this.splice(index, 1);
      return this;
    },
  });
}

// Flatten the array eg [1,[2,5]] = [1,2,5]
if (!Array.prototype.hasOwnProperty("flat")) {
  Object.defineProperty(Array.prototype, "flat", {
    enumerable: false,
    configurable: true,
    value: function (depth = 1) {
      return this.reduce(function (result, toFlatten) {
        return result.concat(
          Array.isArray(toFlatten) && depth > 1
            ? toFlatten.flat(depth - 1)
            : toFlatten
        );
      }, []);
    },
  });
}

if (!Array.prototype.hasOwnProperty("argStripQuotes")) {
  Object.defineProperty(Array.prototype, "argStripQuotes", {
    enumerable: false,
    configurable: true,
    value: function () {
      return this.map(
        (el) =>
          (!el.startsWith("{") &&
            !el.endsWith("{") &&
            el.replace &&
            el
              .replace(/"([^"]+(?="))"/g, "$1")
              .replace(/'([^']+(?='))'/g, "$1")) ||
          el
      );
    },
  });
}

if (!Array.prototype.hasOwnProperty("argvAddQuotes")) {
  Object.defineProperty(Array.prototype, "argvAddQuotes", {
    enumerable: false,
    configurable: true,
    value: function (surround = '"') {
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
    },
  });
}

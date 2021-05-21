if (!Object.prototype.hasOwnProperty("invert")) {
  Object.defineProperty(Object.prototype, "invert", {
    enumerable: false,
    configurable: true,
    value: function () {
      var new_obj = {};

      for (var prop in this) {
        if (this.hasOwnProperty(prop)) {
          new_obj[this[prop]] = prop;
        }
      }

      return new_obj;
    },
  });
}

if (!Object.prototype.hasOwnProperty("findByProp")) {
  Object.defineProperty(Object.prototype, "findByProp", {
    enumerable: false,
    value(location, prop, value) {
      return this[location]
        ? this[location].find((e) => e[prop] && e[prop].indexOf(value) === 0)
        : undefined;
    },
  });
}

if (!Object.prototype.hasOwnProperty("deleteByProp")) {
  Object.defineProperty(Object.prototype, "deleteByProp", {
    enumerable: false,
    value(location, prop, value) {
      const found =
        this[location] && this[location].find((e) => e[prop] === value);
      if (found) {
        this[location] = this[location].filter((e) => e[prop] !== value);
        return found;
      }
    },
  });
}

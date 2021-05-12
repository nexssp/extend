Object.defineProperty(Object.prototype, "invert", {
  enumerable: false,
  configurable: false,
  writable: false,
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

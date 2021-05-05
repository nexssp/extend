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

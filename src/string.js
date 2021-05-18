// Works like template!! "my ${somevar}".interpolate({somevar:1234})
interpolate = function (params) {
  const names = Object.keys(params);
  const vals = Object.values(params);
  return new Function(...names, `return \`${this}\`;`)(...vals);
};

String.prototype.interpolate = interpolate;
String.prototype.template = interpolate;

String.prototype.similarity = function (b) {
  var equivalency = 0;
  var minLength = this.length > b.length ? b.length : this.length;
  var maxLength = this.length < b.length ? b.length : this.length;
  for (var i = 0; i < minLength; i++) {
    if (this[i] == b[i]) {
      equivalency++;
    }
  }

  var weight = equivalency / maxLength;
  return weight * 100;
};

String.prototype.pad = function (length, char = " ") {
  return this.padStart((this.length + length) / 2, char).padEnd(length, char);
};

String.prototype.camelCase = function () {
  var result = this.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};

String.prototype.stripEndQuotes = function () {
  return this.replace(/(^["|'])|(["|']$)/g, "");
};

// Handy with striping arguments like --nexssProgrammer="x,y,=,z'" => --nexssProgrammer="x,y,=,z'"
// Below function is based on https://stackoverflow.com/questions/19156148/i-want-to-remove-double-quotes-from-a-string
// I have added striping of second char '
String.prototype.argStripQuotes = function () {
  // " & '
  return (
    (!el.startsWith("{") &&
      !el.endsWith("{") &&
      el.replace &&
      el.replace(/"([^"]+(?="))"/g, "$1").replace(/'([^']+(?='))'/g, "$1")) ||
    el
  );
};

String.prototype.stripTerminalColors = function () {
  return this.replace(
    /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
    ""
  );
};

// const url = require("url"); url.parse is depracated
String.prototype.parseURL = function (...args) {
  let parsed;
  try {
    parsed = new URL(this, ...args);
  } catch (e) {
    parsed = {};
    parsed.pathname = this + "";
    parsed.path = this + "";
    parsed.href = this + "";
  }
  return parsed;
};

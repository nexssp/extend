const extend = require("../src/extend"); // Load all just in case usage of all of them is ok.
extend();

module.exports = {
  nexsstests: [
    {
      type: "equal",
      title: "extend.libs",
      params: [
        JSON.stringify(extend.libs),
        '["array","string","object","yaml","json"]',
      ],
    },
  ],
};

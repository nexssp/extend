require("../src/extend")(); // Load all just in case usage of all of them is ok.

module.exports = {
  nexsstests: [
    {
      type: "equal",
      title: "Object.invert()",
      params: [
        JSON.stringify({ key1: "val1", key2: "val2" }.invert()),
        '{"val1":"key1","val2":"key2"}',
      ],
    },
  ],
};

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
    {
      type: "equal",
      title: "Object.findByProp()",
      params: [
        JSON.stringify(
          {
            commands: [
              { name: "a1", "something else": "x" },
              { name: "a2", "something else": "y" },
            ],
            key2: "val2",
          }.findByProp("commands", "name", "a2")
        ),
        '{"name":"a2","something else":"y"}',
      ],
    },
    {
      type: "equal",
      title: "Object.deleteByProp()",
      params: [
        JSON.stringify(
          {
            commands: [
              { name: "a1", "something else": "x" },
              { name: "a2", "something else": "y" },
            ],
            key2: "val2",
          }.deleteByProp("commands", "name", "a1")
        ),
        '{"name":"a1","something else":"x"}',
      ],
    },
  ],
};

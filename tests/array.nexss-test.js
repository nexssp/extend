require("../src/extend")(); // Load all just in case usage of all of them is ok.

module.exports = {
  nexsstests: [
    {
      type: "equal",
      title: "[].remove(item)",
      params: [
        JSON.stringify(
          ["my val1", "my second val", "and another val"].remove(
            "my second val"
          )
        ),
        '["my val1","and another val"]',
      ],
    },
    {
      type: "equal",
      title: "[].flat()",
      params: [JSON.stringify([1, [2, [5, 2], [6]]].flat()), "[1,2,[5,2],[6]]"],
    },
    {
      type: "equal",
      title: "[].argvAddQuotes()",
      params: [
        JSON.stringify(
          [
            "nexss",
            "par1",
            "par with space",
            "--x=a b c",
            "y='a c d'",
            "a b c",
          ].argvAddQuotes()
        ),
        process.platform === "win32"
          ? JSON.stringify([
              "nexss",
              "par1",
              '"par with space"',
              '--x="a b c"',
              'y="a c d"',
              '"a b c"',
            ])
          : JSON.stringify([
              "nexss",
              "par1",
              "'par with space'",
              "--x='a b c'",
              "y='a c d'",
              "'a b c'",
            ]),
      ],
    },
    {
      type: "equal",
      title: "[].argStripQuotes()",
      params: [
        JSON.stringify(
          [
            "myparam1='test1'",
            'myparam2="test2"',
            'someadvanced="sd asd asd asd=,$$$=!"',
            '"Nexss Programmer"="test more adv"',
            '{"x":1}',
          ].argStripQuotes()
        ),

        JSON.stringify([
          "myparam1=test1",
          "myparam2=test2",
          "someadvanced=sd asd asd asd=,$$$=!",
          "Nexss Programmer=test more adv",
          '{"x":1}',
        ]),
      ],
    },
  ],
};

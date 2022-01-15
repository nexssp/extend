const {
  remove,
  flat,
  arrArgvAddQuotes,
  arrArgStripQuotes,
  filterArray,
  range,
} = require('../array')

module.exports = {
  nexsstests: [
    {
      type: 'equal',
      title: '[].filterArray(arr)',
      params: [filterArray([1, 2, 3, 4], [2, 3]), [1, 4]],
    },
    {
      type: 'equal',
      title: '[].filterArray(arr)',
      params: [
        filterArray(
          ['my val1', 'my second val', 'and another val', 2, 5, 'works'],
          ['my second val', 1, 2, 5]
        ),
        ['my val1', 'and another val', 'works'],
      ],
    },
    {
      type: 'equal',
      title: '[].remove(item)',
      params: [
        remove(['my val1', 'my second val', 'and another val'], 'my second val'),
        ['my val1', 'and another val'],
      ],
    },
    {
      type: 'equal',
      title: '[].flat()',
      params: [flat([1, [2, [5, 2], [6]]]), [1, 2, [5, 2], [6]]],
    },
    {
      type: 'equal',
      title: '[].arrArgvAddQuotes()',
      params: [
        arrArgvAddQuotes([
          'nexss',
          'par1',
          'par with space',
          '--x=a b c',
          "y='a c d'",
          'a b c',
          '--abc=CDDDD',
        ]),
        process.platform === 'win32'
          ? [
              'nexss',
              'par1',
              '"par with space"',
              '--x="a b c"',
              'y="a c d"',
              '"a b c"',
              '--abc="CDDDD"',
            ]
          : [
              'nexss',
              'par1',
              "'par with space'",
              "--x='a b c'",
              "y='a c d'",
              "'a b c'",
              "--abc='CDDDD'",
            ],
      ],
    },
    {
      type: 'equal',
      title: '[].arrArgvAddQuotes() Special characters - < >',
      params: [
        arrArgvAddQuotes([
          'nexss',
          '<',
          '11>',
          '"<"',
          '<<',
          '<body>',
          '<p><a href="#">test</a></p>',
        ]),
        process.platform === 'win32'
          ? ['nexss', '"<"', '"11>"', '"<"', '"<<"', '"<body>"', '"<p><a href="#">test</a></p>"']
          : ['nexss', "'<'", "'11>'", "'<'", "'<<'", "'<body>'", "'<p><a href='#'>test</a></p>'"],
      ],
    },
    {
      type: 'equal',
      title: '[].argStripQuotes()',
      params: [
        arrArgStripQuotes([
          "myparam1='test1'",
          'myparam2="test2"',
          'someadvanced="sd asd asd asd=,$$$=!"',
          '"Nexss Programmer"="test more adv"',
          '{"x":1}',
        ]),
        [
          'myparam1=test1',
          'myparam2=test2',
          'someadvanced=sd asd asd asd=,$$$=!',
          'Nexss Programmer=test more adv',
          '{"x":1}',
        ],
      ],
    },
    {
      type: 'equal',
      title: 'range(0,63)',
      params: [
        JSON.stringify(range(0, 63)),
        JSON.stringify([
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
          25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
          47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
        ]),
      ],
    },
  ],
}

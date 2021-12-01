const { remove, flat, arrArgvAddQuotes, arrArgStripQuotes, filterArray } = require('../')

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
        arrArgvAddQuotes(['nexss', 'par1', 'par with space', '--x=a b c', "y='a c d'", 'a b c']),
        process.platform === 'win32'
          ? ['nexss', 'par1', '"par with space"', '--x="a b c"', 'y="a c d"', '"a b c"']
          : ['nexss', 'par1', "'par with space'", "--x='a b c'", "y='a c d'", "'a b c'"],
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
  ],
}

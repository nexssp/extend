const { remove, flat, arrArgvAddQuotes, arrArgStripQuotes } = require('../array')

module.exports = {
  nexsstests: [
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

const {
  trimExtension,
  addTimestamp,
  camelCase,
  interpolate,
  template,
  parseURL,
  similarity,
  pad,
} = require('../string') // Load all just in case usage of all of them is ok.

module.exports = {
  nexsstests: [
    {
      title: 'string.trimExtension',
      type: 'equal',
      params: [trimExtension('myimage.png'), /myimage/],
    },
    {
      title: 'string.addTimestamp',
      type: 'equal',
      params: [addTimestamp('mystring'), /mystring\_\d{4}-\d{2}-\d{2}T\d{2}\.\d{2}.*/],
    },
    {
      title: 'string.addTimestamp',
      type: 'equal',
      params: [addTimestamp('myfile.png'), /myfile\_\d{4}-\d{2}-\d{2}T\d{2}\.\d{2}.*/],
    },
    {
      title: 'string.parseURL(url)',
      type: 'equal',
      params: [
        parseURL('https://nexss.com/folder/page.html?x=1').href,
        'https://nexss.com/folder/page.html?x=1',
      ],
    },
    {
      title: 'string.parseURL(not url)',
      type: 'equal',
      params: [parseURL('folder/page.jpg').href, 'folder/page.jpg'],
    },
    {
      title: 'string.pad(20, string)',
      type: 'equal',
      params: [pad('Some string', 20, '='), '====Some string====='],
    },
    {
      title: 'string.similarity()',
      type: 'equal',
      params: [similarity('abc def', 'abc deg'), 85.71428571428571],
    },
    {
      title: 'string.camelCase()',
      type: 'equal',
      params: [camelCase('this is a test'), 'This is a test'],
    },
    {
      title: 'string.interpolate()',
      type: 'equal',
      params: [
        interpolate('this ${myvar} and it is ${myvar2}', {
          myvar: 'works!',
          myvar2: 'amazing!',
        }),
        'this works! and it is amazing!',
      ],
    },
    {
      title: 'string.template() aliast for string.interpolate()',
      type: 'equal',
      params: [
        template('WOW ${myvar} and it is ${myvar2}', {
          myvar: 'works!',
          myvar2: 'amazing!',
        }),
        'WOW works! and it is amazing!',
      ],
    },
  ],
}

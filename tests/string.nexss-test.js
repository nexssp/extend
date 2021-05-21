require("../src/extend")(); // Load all just in case usage of all of them is ok.

module.exports = {
  nexsstests: [
    {
      title: "string.trimExtension",
      type: "equal",
      params: ["myimage.png".trimExtension(), /myimage/],
    },
    {
      title: "string.addTimestamp",
      type: "equal",
      params: [
        "mystring".addTimestamp(),
        /mystring\_\d{4}-\d{2}-\d{2}T\d{2}\.\d{2}.*/,
      ],
    },
    {
      title: "string.addTimestamp",
      type: "equal",
      params: [
        "myfile.png".addTimestamp(),
        /myfile\_\d{4}-\d{2}-\d{2}T\d{2}\.\d{2}.*/,
      ],
    },
    {
      title: "string.parseURL(url)",
      type: "equal",
      params: [
        "https://nexss.com/folder/page.html?x=1".parseURL().href,
        "https://nexss.com/folder/page.html?x=1",
      ],
    },
    {
      title: "string.parseURL(not url)",
      type: "equal",
      params: ["folder/page.jpg".parseURL().href, "folder/page.jpg"],
    },
    {
      title: "string.pad(20, string)",
      type: "equal",
      params: ["Some string".pad(20, "="), "====Some string====="],
    },
    {
      title: "string.similarity()",
      type: "equal",
      params: ["abc def".similarity("abc deg"), 85.71428571428571],
    },
    {
      title: "string.camelCase()",
      type: "equal",
      params: ["this is a test".camelCase(), "This is a test"],
    },
    {
      title: "string.interpolate()",
      type: "equal",
      params: [
        "this ${myvar} and it is ${myvar2}".interpolate({
          myvar: "works!",
          myvar2: "amazing!",
        }),
        "this works! and it is amazing!",
      ],
    },
    {
      title: "string.template() aliast for string.interpolate()",
      type: "equal",
      params: [
        "WOW ${myvar} and it is ${myvar2}".template({
          myvar: "works!",
          myvar2: "amazing!",
        }),
        "WOW works! and it is amazing!",
      ],
    },
  ],
};

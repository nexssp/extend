const libs = ["array", "string", "object", "yaml", "json"];
const extend = (...args) => {
  const selectedLibs = args.length > 0 ? args : libs;
  selectedLibs.forEach((lib) => {
    try {
      require(`./${lib}`);
    } catch (e) {
      console.error("===> @nexssp/extend: ");
      console.error(
        `===> There was an issue with loading ${lib}. \nYou can only use ${libs.join(
          ", "
        )}. eg. extend('array','string')`
      );
      console.error(e.stack);
      process.exit(1);
    }
  });
};

extend.libs = libs;

module.exports = extend;

module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json'],
  // points Jest to a startup helper file for additional baseline configuration
  setupFiles: ['<rootDir>/test/jest_helper.js'],
  // this regex will instruct Jest to search for JS or JSX files within `__tests__` folders
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?)$',
  // we don't want to test node modules, or anything in the webpack config
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/config/webpack'],
  /*
    Like tests in other language, it is useful to create fixtures to assist with rendering
    components within tests. These should be standard `module.exports` which return data.
    By passing one or more folder paths to this option, you can `import` those files in your
    tests without having to provide a full relative path — Jest will resolve the path
    automatically if given a file name which matches a file found in any of these paths.
  */
  modulePaths: ['test/fixtures'],
  moduleNameMapper: {
    /*
      This mapping stubs out Sass processing. You will need this if any of your
      component files directly import Sass files. Webpack knows how to handle
      this, but Jest does not, nor does it need to.
    */
    ".scss$": 'sass_stub.js'
  }
};

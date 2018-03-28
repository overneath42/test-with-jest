/*
  Enzyme must be configured with the proper adapter so it will know how to
  interpret and process your components.
 */

var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

/*
  Here you can create additional stub methods, or establish global variables
  which your components might expect to exist.
*/
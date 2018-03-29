import React from 'react';
import { render } from 'enzyme';

import { Hello } from '../Hello';

// set up props for the component
const helloProps = {
  name: 'React'
};

// create a variable which can be used to render the component for each test
let hello;

/*
  Like most runners, a `beforeEach` method will render the component before
  each test and store it for reference within the test.
*/
beforeEach(() => {
  hello = render(<Hello {...helloProps} />);
});

/*
  While not entirely necessary, and might sometimes feel redundant, it's
  generally good practice to group tests within `describe` blocks. This will
  make the test output easier to read.
*/
describe('<Hello />', () => {
  /*
    Each test is initiated using an `it` statement, with a brief sentence
    desribing what the test is for.

    IMPORTANT: Enzyme's `render` method is intended to return a static
    representation of the final DOM output from your component. But it
    **does not** return a Element! Instead it returns an instance of
    `Cheerio`, a library which implements a subset of core jQuery functionality.
    Therefore, when interacting with the rendered value, you will need to use
    jQuery-style methods rather than vanilla properties.
  */
  it('should render properly', () => {
    // since `hello` is essentially a jQuery object, we need to check for `length`
    expect(hello.length).toBe(1);
  });

  it('should say "Hello React!"', () => {
    expect(hello.text()).toEqual('Hello React!');
  });
});

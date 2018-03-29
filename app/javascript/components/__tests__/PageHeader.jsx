import React from 'react';
import { render } from 'enzyme';

import { PageHeader } from '../PageHeader';

const pageHeaderProps = {
  title: 'Top Line',
  subtitle: 'Bottom Line'
};

let pageHeader;

beforeEach(() => {
  pageHeader = render(<PageHeader {...pageHeaderProps} />);
});

describe('<PageHeader />', () => {
  it('should render properly', () => {
    expect(pageHeader.length).toBe(1);
  });

  it('should have two lines', () => {
    const lines = pageHeader.children();

    expect(lines.length).toBe(2);
  });

  it('should render both lines correctly', () => {
    const lines = pageHeader.children();
    const lineOne = lines.eq(0);
    const lineTwo = lines.eq(1);

    expect(lineOne.text()).toEqual(pageHeaderProps.title);
    expect(lineTwo.text()).toEqual(pageHeaderProps.subtitle);
  });
});

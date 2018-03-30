import React from 'react';
import { shallow, mount } from 'enzyme';

import randomWords from 'files/random-words';
import { Page } from '../Page';
import { PageHeader } from '../PageHeader';

let title, subtitle, spy;

beforeEach(() => {
  title = randomWords(3);
  subtitle = randomWords(5);
});

describe('<Page />', () => {
  it('accepts props and updates appropriately', () => {
    /*
     `mount` performs a full mount of the component and calls the full lifecycle
     of the component. We have full access to props and state, can check any
     lifecycle method, and can also update props if necessary.
    */
    const mountPage = mount(<Page title={title} />);

    expect(mountPage.props().title).toEqual(title);
    expect(mountPage.props().subtitle).toBe('');

    mountPage.setProps({ subtitle });
    expect(mountPage.props().subtitle).toEqual(subtitle);
  });

  it('only renders an instance of <PageHeader /> if a title is given', () => {
    /*
      `shallow` mounts the current component and any children, but only calls
      a limited portion of the lifecycle. Typically, it is okay to just call `mount`.
    */
    const page = shallow(<Page />);

    expect(page.find(PageHeader).length).toBe(0);
  });

  it('properly tracks if the page is marked as read', () => {
    /*
      Internal methods can be tracked by spying on the method within the component
      prototype. It is important to remember that the spy must be set **before**
      the component is mounted.
     */
    spy = jest.spyOn(Page.prototype, 'handleMarkAsRead');
    /*
      Internal state can be tracked when using `shallow` or `mount`.
    */
    const page = shallow(<Page title={title} subtitle={subtitle} />);
    expect(page.state().isRead).toBe(false);

    /*
      Events can be simulated on specific events by querying for them within
      the mounted component.
    */
    page.find('button').simulate('click');

    expect(spy).toBeCalled();
    expect(page.state().isRead).toBe(true);

    /*
      It's generally good practice to reset your spy at the end of your test.
      Alternately you can also call `jest.resetAllMocks()` a/o
      `jest.restoreAllMocks()` within an `afterEach` block.
    */
    spy.mockReset();
    spy.mockRestore();
  });

  it('accepts children', () => {
    const pageText = randomWords(20);
    const page = mount(
      <Page title={title} subtitle={subtitle}>
        <p>{pageText}</p>
      </Page>
    );

    const pageContent = page.find('p');

    expect(pageContent.length).toBe(1);
    expect(pageContent.text()).toEqual(pageText);
  });
});

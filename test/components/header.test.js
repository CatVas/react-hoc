import Header from '../../src/components/header';
import { renderComponent , expect } from '../test_helper';


describe('Header', () => {
  let list;

  beforeEach(() => {
    list = renderComponent(Header).find('ul.nav');
  });

  it('contains a list', () => {
    expect(list).to.exist;
  });

  /*
  it('has a home link as first item', () => {
    const homeLink = list.find('li:first-child a[href="/"]');console.log(homeLink);

    expect(homeLink).to.exist;
  });
  */

  it('has a "Sing in/out" button', () => {
    const button = list.find('button');

    expect(button).to.exist;
  });
});

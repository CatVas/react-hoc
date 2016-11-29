import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('has navigation bar', () => {
    expect(component.find('.navbar')).to.exist;
  });
});

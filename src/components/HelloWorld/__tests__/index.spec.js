import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from '..';

describe('<HelloWorld />', () => {
  const wrapper = shallow(<HelloWorld />);
  it('Renders an img', () => {
    expect(wrapper.find('img').length).toBe(1);
  });

  it('Before click the btn', ()=>{
    expect(wrapper.find('p').at(2).text()).toBe('');
  });

  it('After click the btn', ()=>{
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').at(2).text()).toBe('Hello World');
  });
});
import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../../components/Form.js';

describe('<Form />', () => {
  it('exists after my application has loaded', () => {
    let form = shallow(<Form />);
    expect(form.find('form').exists()).toEqual(true);
    expect(form.find('h1').exists()).toEqual(true);
    expect(form.find('button').exists()).toEqual(true);
    expect(form.find('input').exists()).toEqual(true);
  });

  it('changes the state of our App component on click', () => {
    const form = mount(<Form />);
    const button = form.find('button');
    console.log(button);
  })
})

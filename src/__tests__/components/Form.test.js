import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../../components/Form.js';
import App from '../../components/App.jsx';

describe('<Form />', () => {
  it('exists after my application has loaded', () => {
    const form = shallow(<Form />);
    expect(form.find('form').exists()).toEqual(true);
    expect(form.find('h1').exists()).toEqual(true);
    expect(form.find('button').exists()).toEqual(true);
    expect(form.find('input').exists()).toEqual(true);
  });

  it('should render correctly', () => {
    const form = renderer.create(<Form />).toJSON();
    expect(form).toMatchSnapshot();
  });

});


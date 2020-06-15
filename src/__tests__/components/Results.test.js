import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Results from '../../components/Results.jsx';
import ReactJson from 'react-json-view';

describe('<Results />', () => {
  it('exists after my application loaded', () => {
    const results = shallow(<Results />);

    expect(results.find('div').exists()).toEqual(true);
    expect(results.find(ReactJson).exists()).toEqual(true);
  });
});
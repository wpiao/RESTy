import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../../components/App.jsx';
import Form from '../../components/Form.js';
import Results from '../../components/Results.jsx';

describe('<App />', () => {
  it('component should exists after my application has loaded', () => {
    const app = shallow(<App />);
    expect(app.find('p').exists()).toEqual(true);
    expect(app.find(Form).exists()).toEqual(true);
    expect(app.find(Results).exists()).toEqual(true);
  });

  it('changes the state of our App component on click', () => {
    const app = mount(<App />);

    expect(app.state('method')).toEqual('get');

    const getButton = app.find('button').at(0);
    getButton.simulate('click');
    expect(app.state('method')).toEqual('get');

    const postButton = app.find('button').at(1);
    postButton.simulate('click');
    expect(app.state('method')).toEqual('post');

    const putButton = app.find('button').at(2);
    putButton.simulate('click');
    expect(app.state('method')).toEqual('put');

    const patchButton = app.find('button').at(3);
    patchButton.simulate('click');
    expect(app.state('method')).toEqual('patch');

    const deleteButton = app.find('button').at(4);
    deleteButton.simulate('click');
    expect(app.state('method')).toEqual('delete');
  });

  it('should render correctly', () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
  });
});
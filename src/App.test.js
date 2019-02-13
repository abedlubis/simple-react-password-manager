import React from 'react';
import {MemoryRouter} from 'react-router'
import { mount } from 'enzyme';
import App from './App';

import LoginPage from './containers/Login';
import { shallow } from 'enzyme'

const wrapper = shallow(<App />)

// console.log(wrapper.debug())

test('it should render correctly', () => {
  expect(wrapper).toHaveLength(1)
})

test('should have a switch', () => {
  const switchOnWrapper = wrapper.find('Switch')
  expect(switchOnWrapper).toHaveLength(1)
})

test('invalid path should redirect to Login if not login yet', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/random' ]}>
      <App/>
    </MemoryRouter>
  );
  const wrapper2 = wrapper.find('App')
  expect(wrapper2.find('h1')).toHaveLength(0);
})


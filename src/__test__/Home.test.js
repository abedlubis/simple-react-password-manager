import React from 'react'
import Home from '../containers/Home'
import { shallow } from 'enzyme'

const wrapper = shallow(<Home></Home>)

test("should render component home succesfully", () => {
    expect(wrapper).toHaveLength(1)
})
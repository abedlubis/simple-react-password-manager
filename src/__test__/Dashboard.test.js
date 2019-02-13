import React from 'react'
import {mount} from 'enzyme'
import Dashboard from '../containers/Dashboard'
import {Provider} from 'react-redux'
import store from '../store'
import CustomProvider from '../ContextProvider'

const wrapper = mount(<CustomProvider><Provider store={store}><Dashboard></Dashboard></Provider></CustomProvider>)
const event = {
    handleSearch: jest.fn(),
    setFilterSearch: jest.fn(),
    listenData: jest.fn()
}

test("should test function", () => {
    expect(event.handleSearch).toHaveBeenCalledTimes(0)
    expect(event.setFilterSearch).toHaveBeenCalledTimes(0)
})

test("should run handleSearch succesfull", () => {
    const wrapper2 = wrapper.find('Dashboard')
    wrapper2.instance().handleSearch({
        target: { value: 'something'}
    })
    expect(wrapper2.props.setFilterSearch).toBe(undefined)
})
test("should Column render", () => {
    const wrapper2 = wrapper.find('Dashboard')
    const wrapper3 = wrapper2.find('ColGroup')
    console.log(wrapper3.debug())
    expect(wrapper2.props.setFilterSearch).toBe(undefined)
})
test("should run listenData succesfull", () => {
    const wrapper = mount(<CustomProvider><Provider store={store}><Dashboard listenData={event.listenData}></Dashboard></Provider></CustomProvider>)
    const wrapper2 = wrapper.find('Dashboard')
    wrapper2.instance().props.listenData()
    expect(wrapper2.clearForm).toBe(undefined)
})
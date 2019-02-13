import React from 'react'
import {Router} from 'react-router-dom'
import {mount} from 'enzyme'
import Login from '../containers/Login'
import {Provider} from 'react-redux'
import store from '../store'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()
const event = {
    handleSubmit: jest.fn(),
    handleLoginManual : jest.fn()
}

const wrapper = mount(<Provider store={store}><Router history={history}><Login handleLoginManual={event.handleLoginManual}/></Router></Provider>)

test("should run function handleSubmit successfuly", () => {
    expect(event.handleSubmit).toHaveBeenCalledTimes(0)
    expect(event.handleLoginManual).toHaveBeenCalledTimes(0)
})
test("should run handleSubmit succesfull", () => {
    const eventDefault = {
        preventDefault: jest.fn()
    }
    const wrapper2 = wrapper.find('Login')
    wrapper2.instance().handleSubmit(eventDefault)
    expect(wrapper2.handleCancel).toBe(undefined)
})
test("should run handleLoginManual succesfull", () => {
    const wrapper2 = wrapper.find('Login')
    wrapper2.instance().props.handleLoginManual('email', 'password')
    expect(wrapper2.handleCancel).toBe(undefined)
})
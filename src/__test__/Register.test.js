import React from 'react'
import {RegisterForm} from '../containers/Register'
import {shallow, mount} from 'enzyme'
import {Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../store'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()
const event = {
    handleSignUp: jest.fn()
}
const wrapper = mount(<Provider store={store}><Router history={history}><RegisterForm handleSignUp={event.handleSignUp}></RegisterForm></Router></Provider>)

it("should rende Register component", () => {
    const wrapper2 = wrapper.find('Register')
    expect(wrapper2).toHaveLength(1)
})

test("should run handleSubmit succesfull", () => {
    const eventDefault = {
        preventDefault: jest.fn()
    }
    const wrapper2 = wrapper.find('Register')
    wrapper2.instance().handleSubmit(eventDefault)
    expect(wrapper2.handleCancel).toBe(undefined)
})
test("should run handleSignUp succesfull", () => {
    const wrapper3 = wrapper.find('Register')
    wrapper3.instance().props.handleSignUp('email', 'password')
    expect(wrapper3.handleCancel).toBe(undefined)
})
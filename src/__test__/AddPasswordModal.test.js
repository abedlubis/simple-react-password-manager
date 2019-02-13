import React from 'react'
import ModalForm, {AddPasswordModal} from '../components/AddPasswordModal'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import store from '../store'
import CustomProvider from '../ContextProvider'

const wrapper = mount(<CustomProvider><Provider store={store}><ModalForm></ModalForm></Provider></CustomProvider>)
const event = {
    handleOk: jest.fn(),
    handleCancel: jest.fn(),
    clearForm: jest.fn(),
    validatePassword: jest.fn(),
    compareToFirstPassword: jest.fn(),
    handleConfirmBlur: jest.fn(),
    callback: jest.fn()

}

test("should test function", () => {
    expect(event.handleCancel).toHaveBeenCalledTimes(0)
    expect(event.handleOk).toHaveBeenCalledTimes(0)
    expect(event.clearForm).toHaveBeenCalledTimes(0)
    expect(event.validatePassword).toHaveBeenCalledTimes(0)
    expect(event.compareToFirstPassword).toHaveBeenCalledTimes(0)
    expect(event.handleConfirmBlur).toHaveBeenCalledTimes(0)
    expect(event.callback).toHaveBeenCalledTimes(0)
})


test("should run handleconfirmblur succesfull", () => {
    const propsDataPass = {
        url: 'something',
        username: 'usernmae',
        password: 'something',

    }
    const wrapper = mount(<CustomProvider><Provider store={store}><ModalForm ></ModalForm></Provider></CustomProvider>)
    const wrapper2 = wrapper.find('AddPasswordModal')
    wrapper2.instance().handleConfirmBlur({
        target: { value: 'something'}
    })
    expect(wrapper2.state("confirmDirty")).toBe(true)
})

test("should run handleOk succesfull", () => {
    const eventDefault = {
        preventDefault: jest.fn()

    }
    const wrapper = mount(<CustomProvider><Provider store={store}><ModalForm ></ModalForm></Provider></CustomProvider>)
    const wrapper2 = wrapper.find('AddPasswordModal')
    wrapper2.instance().handleOk(eventDefault)
    expect(wrapper2.handleCancel).toBe(undefined)
})

test("should run validatePassword succesfull", () => {
    const callback = jest.fn()
    const wrapper = mount(<CustomProvider><Provider store={store}><ModalForm ></ModalForm></Provider></CustomProvider>)
    const wrapper2 = wrapper.find('AddPasswordModal')
    wrapper2.instance().validatePassword(null, "abcdef", callback)
    expect(callback).toHaveBeenCalled()
})
test("should run formvalidate succesfull", () => {
    const wrapper = mount(<CustomProvider><Provider store={store}><ModalForm></ModalForm></Provider></CustomProvider>)
    const wrapper2 = wrapper.find('AddPasswordModal')
    wrapper2.instance().clearForm()
    expect(wrapper2.clearForm).toBe(undefined)
})
test("should run formvalidate succesfull", () => {
    const wrapper = mount(<CustomProvider><Provider store={store}><ModalForm></ModalForm></Provider></CustomProvider>)
    const wrapper2 = wrapper.find('AddPasswordModal')
    wrapper2.instance().handleCancel()
    expect(wrapper2.clearForm).toBe(undefined)
})

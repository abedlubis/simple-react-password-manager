import React from 'react'
import {mount} from 'enzyme'
import ModalForm from '../components/EditPasswordModal'
import {Provider} from 'react-redux'
import store from '../store'
import CustomProvider from '../ContextProvider'

const event = {
    handleOk: jest.fn(),
    handleCancel: jest.fn(),
    clearForm: jest.fn(),
    validatePassword: jest.fn(),
    compareToFirstPassword: jest.fn(),
    handleConfirmBlur: jest.fn(),
    callback: jest.fn()
}


const propsDataPass = {
    url: 'something',
    username: 'usernmae',
    password: 'something',

}

test("should run handleconfirmblur succesfull", () => {
    
    const wrapper = mount(<CustomProvider><Provider store={store}><ModalForm dataPassword={propsDataPass}></ModalForm></Provider></CustomProvider>)
    const wrapper2 = wrapper.find('EditPasswordModal')
    wrapper2.instance().handleConfirmBlur({
        target: { value: 'something'}
    })
    expect(wrapper2.state("confirmDirty")).toBe(true)
})
test("should run handleOk succesfull", () => {
    const eventDefault = {
        preventDefault: jest.fn()

    }
    const wrapper = mount(<CustomProvider><Provider store={store}><ModalForm dataPassword={propsDataPass}></ModalForm></Provider></CustomProvider>)
    const wrapper2 = wrapper.find('EditPasswordModal')
    wrapper2.instance().handleOk(eventDefault)
    expect(wrapper2.handleCancel).toBe(undefined)
})
test("should run formvalidate succesfull", () => {
    const wrapper = mount(<CustomProvider><Provider store={store}><ModalForm dataPassword={propsDataPass}></ModalForm></Provider></CustomProvider>)
    const wrapper2 = wrapper.find('EditPasswordModal')
    wrapper2.instance().clearForm()
    expect(wrapper2.clearForm).toBe(undefined)
})
test("should run formvalidate succesfull", () => {
    const wrapper = mount(<CustomProvider><Provider store={store}><ModalForm dataPassword={propsDataPass}></ModalForm></Provider></CustomProvider>)
    const wrapper2 = wrapper.find('EditPasswordModal')
    wrapper2.instance().handleCancel()
    expect(wrapper2.clearForm).toBe(undefined)
})

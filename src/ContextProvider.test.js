import React from 'react'
import ContextProvider, {Provider, Consumer} from './ContextProvider'
import { mount, shallow } from 'enzyme'


it("should be trigger toggleAddPasswordModal", () => {
    const wrapper = shallow(<ContextProvider> </ContextProvider>)
    wrapper.instance().toggleAddPasswordModal()
    expect(wrapper.state('showAddPasswordModal')).toEqual(true)
})

it("should be trigger toggleEditPasswordModal", () => {
    const wrapper = shallow(<ContextProvider> </ContextProvider>)
    wrapper.instance().toggleEditPasswordModal()
    expect(wrapper.state('showEditPasswordModal')).toEqual(true)
})
import React from 'react'
import Sidebar from '../components/Sidebar'
import { mount, shallow } from 'enzyme';
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import store from '../store'
import createBrowserHistory from 'history/createBrowserHistory'
export const history = createBrowserHistory()

test('should renders Sidebar', () => {
    const wrapper = mount( <Provider store={store}> <Router history={history}><Sidebar/></Router></Provider>)
    expect(wrapper).toHaveLength(1)
})
test('should collapsed when function run', () => {
    const wrapper = mount(<Provider store={store}> <Router history={history}><Sidebar/></Router></Provider>)
    const wrapper2 = wrapper.find('Router').find('Sidebar')
    wrapper2.setState({
        collapsed: false
    })
    wrapper2.instance().onCollapse(true)
    expect(wrapper.state('collapsed')).toEqual(undefined)
})

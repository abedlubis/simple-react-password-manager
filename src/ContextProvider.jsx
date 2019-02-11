import React, { Component, createContext } from 'react'

const CustomContext = createContext()
export const {Provider, Consumer} = CustomContext

export default class ContextProvider extends Component {
    state = {
        showAddPasswordModal: false,
        showEditPasswordModal: false
    }

    toggleAddPasswordModal = () => {
        this.setState({
            showAddPasswordModal: !this.state.showAddPasswordModal
        })
    }
    toggleEditPasswordModal = () => {
        this.setState({
            showEditPasswordModal: !this.state.showEditPasswordModal
        })
    }
  render() {
    const {state, toggleAddPasswordModal, toggleEditPasswordModal} = this
    return (
        <Provider value={{state: state, toggleAddPasswordModal, toggleEditPasswordModal}}>
            {this.props.children}
        </Provider>
    )
  }
}

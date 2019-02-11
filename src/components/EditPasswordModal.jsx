import React, { Component } from 'react'
import { Modal, Button, Form, AutoComplete, Input } from 'antd'
import {Consumer} from '../ContextProvider'

import { bindActionCreators } from 'redux'
import { connect} from 'react-redux'

//Actions
import {editPassword} from '../store/reducers/password/actions'


export class EditPasswordModal extends Component {
    state = {
        confirmDirty: false,
    }

    handleOk = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.editPassword({
                    id: this.props.dataPassword.key,
                    url: values.url,
                    username: values.username,
                    password: values.password
                })
                this.handleCancel()
            }
        });
    }

    handleCancel = () => {
        this.context.toggleEditPasswordModal()
    }

    clearForm = () => {
        this.props.form.resetFields();
    }

    validatePassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        if (value && value.replace(/[^A-Z]/g, "").length < 1) {
            callback('Passwords must be contain an uppercase!');
        } 
        if (value && value.replace(/[^a-z]/g, "").length < 1) {
            callback('Passwords must be contain an lowercase!');
        }
        if (value && value.replace(/[^!@#\$%\^\&*\)\(+=._-]+$/g, "").length < 1) {
            callback('Passwords must be contain a special character !@#$%^&*()...!');
        }
        if (value && value.replace(/[^0-9]/g, "").length < 1) {
            callback('Passwords must be contain a number!');
        }
        if (value && value.length < 6) {
            callback('Passwords must be minimum 5!');
        }
        callback();
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    
    render() {
        const { dataPassword } = this.props
        const { getFieldDecorator,} = this.props.form;
        const { loading } = this.state

        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 7 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 12 },
            },
        };
        return (
            <Consumer>
                {(context) => (
                    <Modal
                        visible={context.state.showEditPasswordModal}
                        title="Edit your password"
                        onOk={this.handleOk}
                        okText="Update"
                        cancelText="Return"
                        onCancel={this.handleCancel}
                        afterClose={this.clearForm}
                    >
                        {/* {JSON.stringify(dataPassword)} */}
                        <Form onSubmit={this.handleOk} id="formAdd">
                            <Form.Item
                                {...formItemLayout}
                                label="Url"
                                >
                                {getFieldDecorator('url', {
                                    rules: [{
                                        required: true, message: 'Please input your Url!',
                                    }],
                                    initialValue: dataPassword.url
                                })(
                                    <Input />
                                )}
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                label="Username"
                                >
                                {getFieldDecorator('username', {
                                    rules: [{
                                        required: true, message: 'Please input your username!',
                                    }],
                                    initialValue: dataPassword.username
                                })(
                                    <Input />
                                )}
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                label="Password"
                            >
                                {getFieldDecorator('password', {
                                    rules: [
                                        {
                                            required: true, message: 'Please input your password!',
                                        }, 
                                        {
                                            validator: this.validatePassword,
                                        }
                                    ],
                                    initialValue: dataPassword.password
                                })(
                                    <Input type="password" />
                                )}
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                label="Confirm Password"
                            >
                                {getFieldDecorator('confirm', {
                                    rules: [{
                                    required: true, message: 'Please confirm your password!',
                                    }, {
                                    validator: this.compareToFirstPassword,
                                    }],
                                    initialValue: dataPassword.password
                                })(
                                    <Input type="password" onBlur={this.handleConfirmBlur} />
                                )}
                            </Form.Item>
                        </Form>
                    </Modal>
                    
                )}
            </Consumer>
        )
    }
}
EditPasswordModal.contextType = Consumer;
const ModalForm = Form.create({ name: 'update' })(EditPasswordModal);

const mapDispatchToProps = (dispatch) => bindActionCreators({
    editPassword
}, dispatch)
export default connect(null, mapDispatchToProps)(ModalForm)

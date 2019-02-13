import React, { Component } from 'react'
import { Form, Icon, Button, Input, Card, Row, Col, Divider} from 'antd';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

//actions
import {handleSignUp} from '../store/reducers/auth/actions'

const { Meta } = Card;

export class Register extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.handleSignUp(values.email, values.password)
          }
        });
    }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <Row type="flex" justify="space-around" align="middle" style={{height: "80vh"}}>
            <Col>
                <Card style={{ width: 300, marginTop: '0'}} hoverable>
                    <Meta
                        title="Daftar dulu yuk..."
                    />
                    <Form onSubmit={this.handleSubmit} className="login-form" style={{marginTop: "20px"}}>
                        <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [
                                    { 
                                        type: 'email', 
                                        message: 'The input is not valid E-mail!',
                                    },
                                    { 
                                        required: true, 
                                        message: 'Please input your email!' 
                                    }
                                ],
                            })(
                                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Row>
                                <Col span={24}>
                                    <Button type="primary" htmlType="submit" block>
                                        Sign up
                                    </Button>
                                </Col>
                                <Col span={24}>
                                    Or <Link to="/">login now! </Link>
                                </Col>

                            </Row>
                        </Form.Item>
                        <Divider type="horizontal" />
                    </Form>
                </Card>
            </Col>
        </Row>
    )
  }
}
export const RegisterForm = Form.create({ name: 'register' })(Register);

const mapDispatchToProps = (dispatch) => bindActionCreators({
                                            handleSignUp
                                        }, dispatch)

export default connect(null, mapDispatchToProps)(RegisterForm)

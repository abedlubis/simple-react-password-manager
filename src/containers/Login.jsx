import React, { Component } from 'react'
import { Form, Icon, Button, Input, Card, Row, Col, Divider} from 'antd';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

//actions
import {handleLoginManual, handleLoginFacebook, handleLoginGoogle} from '../store/reducers/auth/actions'


const { Meta } = Card;

export class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.handleLoginManual(values.email, values.password)
          }
        });
    }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { handleLoginFacebook, handleLoginGoogle} = this.props
    return (
        <Row type="flex" justify="space-around" align="middle" style={{height: "80vh"}}>
            <Col>
                <Card style={{ width: 300, marginTop: '0'}}>
                    <Meta
                        title="Sign in dulu bro..."
                    />
                    <Form onSubmit={this.handleSubmit} className="login-form" style={{marginTop: "20px"}}>
                        <Form.Item>
                            { getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input your email!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
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
                                        Log in
                                    </Button>
                                </Col>
                                <Col span={24}>
                                    Or <Link to="/register">register now!</Link>
                                </Col>
                            </Row>
                        </Form.Item>
                        <Divider type="horizontal" />
                    </Form>
                    <Row>
                        <Col span={24}>
                            <Button onClick={handleLoginFacebook} icon="facebook" htmlType="submit" block type="primary">
                                Facebook
                            </Button>
                        </Col>
                        <Col span={24} style={{marginTop: "5px"}}>
                            <Button onClick={handleLoginGoogle} icon="google" htmlType="submit" block style={{backgroundColor: '#e53939'}}>
                                Google
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </Col>
        
        </Row>
    )
  }
}

const LoginForm = Form.create({ name: 'login' })(Login);

const mapDispatchToProps = (dispatch) => bindActionCreators({
                                            handleLoginManual,
                                            handleLoginFacebook,
                                            handleLoginGoogle
                                        }, dispatch)

export default connect(null, mapDispatchToProps)(LoginForm)

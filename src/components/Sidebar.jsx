import React, { Component } from 'react'
import {
    Layout, Menu, Icon,
  } from 'antd';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

//actions
import {handleLogout, checkLogin} from '../store/reducers/auth/actions'


const {
    Sider
} = Layout;
  
export class Sidebar extends Component {
    state = {
        collapsed: false,
    };

    componentDidMount(){
        this.props.checkLogin()
      }

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }
    render() {
        const {handleLogout, isLogin} = this.props
        return (
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                style={{
                    height: '100vh', position: 'fixed', left: 0,
                }}
            >
                <div className="logo"> <Link to="/"> Password Manager </Link></div>
                <Menu theme="dark" defaultOpenKeys={['1']} defaultSelectedKeys={['1']} mode="inline" style={{height: '100%'}}>
                        { isLogin && 
                            <Menu.Item key="1">
                                <Link to="/dashboards">
                                    <Icon type="pie-chart" />
                                    <span>Bank Passwords</span>
                                </Link>
                            </Menu.Item>
                        }
                        {isLogin && 
                            <Menu.Item  style={{position: 'absolute', bottom: 50}}>
                                <Link to="/" onClick={handleLogout}>
                                    <Icon type="logout" />
                                    <span>Logout</span>
                                </Link>
                            </Menu.Item>
                        }
                </Menu>
            </Sider>
        )
    }
}
const mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin
})
const mapDispatchToProps = (dispatch) => bindActionCreators({
                                            handleLogout,
                                            checkLogin
                                        }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

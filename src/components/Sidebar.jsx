import React, { Component } from 'react'
import {
    Layout, Menu, Icon,
  } from 'antd';
import {Link} from 'react-router-dom'

const {
    Sider
} = Layout;
  
export class Sidebar extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    render() {
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
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{height: '100%'}}>
                <Menu.Item key="1">
                    <Link to="/dashboards">
                        <Icon type="pie-chart" />
                        <span>Bank Passwords</span>
                    </Link>
                </Menu.Item>
                {/* <Menu.Item  key="3" style={{position: 'absolute', bottom: 50}}>
                    <Icon type="logout" />
                    <span>Logout</span>
                </Menu.Item> */}
                </Menu>
            </Sider>
        )
    }
}

export default Sidebar

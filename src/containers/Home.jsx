import React, { Component } from 'react'
import { Layout } from 'antd';
const { Content } = Layout;

export class Home extends Component {
  render() {
    return (
      <div>
        <Content style={{ margin: '10px 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Selamat datang, untuk sementara halaman home  belum tersedia, silahkan langsung menuju dashboard :)
            </div>
        </Content>
      </div>
    )
  }
}

export default Home

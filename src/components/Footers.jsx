import React, { Component } from 'react'
import { Layout } from 'antd';
const { Footer } = Layout;

export class Footers extends Component {
  render() {
    return (
        <Footer style={{ textAlign: 'center' }}>
            Copyright ©2019 Created by Abed Nego Lubis with <span><a target="_blank"  rel="noopener noreferrer" href="https://reactjs.org/">React</a> </span>, <span><a target="_blank"  rel="noopener noreferrer" href="https://redux.js.org/">Redux</a></span>, and <span><a  rel="noopener noreferrer" target="_blank" href="https://ant.design/">Ant Design</a></span>
        </Footer>
    )
  }
}

export default Footers

import React, { Component } from 'react';
import './App.css';
import "antd/dist/antd.css";
import  { BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

//components
import Sidebar from './components/Sidebar'
import Footer from './components/Footers'
import CustomProvider from './ContextProvider'

//containers
import Home from './containers/Home'
import Dashboard from './containers/Dashboard'

import { Layout } from 'antd';
const { Header } = Layout;


class App extends Component {
  
  render() {
    return (
      <CustomProvider>
        <Provider store={store}>
          <Router>
            <div className="App">
              <Layout style={{ minHeight: '100vh' }}>
                <Sidebar/>
                <Layout style={{ marginLeft: 200 }}>
                  <Header style={{ background: '#fff', padding: 0 }}>  </Header>
                  <Switch>
                      <Route exact path="/"  component={Home} />
                      <Route exact path="/dashboards"  component={Dashboard} />
                      <Route component={() => <h1>404 Not Found</h1>} />
                  </Switch>
                  <Footer/>
                </Layout>
              </Layout>
            </div>
          </Router>
        </Provider>
      </CustomProvider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import "antd/dist/antd.css";
import  { Router,
  Route,
  Switch
} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import {PrivateRoute} from './helpers/privateRoute'
import createBrowserHistory from 'history/createBrowserHistory'


//components
import Sidebar from './components/Sidebar'
import Footer from './components/Footers'
import CustomProvider from './ContextProvider'

//containers
import Home from './containers/Home'
import Dashboard from './containers/Dashboard'
import Login from './containers/Login'
import Register from './containers/Register'

import { Layout } from 'antd';
const { Header } = Layout;
export const history = createBrowserHistory()

class App extends Component {
  
  render() {
    return (
      <CustomProvider>
        <Provider store={store}>
          <Router history={history}>
            <div className="App">
              <Layout style={{ minHeight: '100vh' }}>
                <Sidebar/>
                <Layout style={{ marginLeft: 200 }}>
                  <Header style={{ background: '#fff', padding: 0 }}>  </Header>
                  <Switch>
                      <PrivateRoute exact path="/"  component={Home} />
                      <PrivateRoute exact path="/dashboards"  component={Dashboard} />
                      <Route exact path="/login"  component={Login} />
                      <Route exact path="/register"  component={Register} />
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

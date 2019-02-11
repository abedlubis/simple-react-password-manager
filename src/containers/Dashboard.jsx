import React, { Component } from 'react'
import { Layout, Table, Divider, Tag, Button, Row, Input } from 'antd';
import { bindActionCreators } from 'redux'
import { connect} from 'react-redux'
import moment from 'moment'

//Actions
import {listenData, deletePassword, setFilterSearch} from '../store/reducers/password/actions'

//Components
import AddPassword from '../components/AddPasswordModal'
import EditPassword from '../components/EditPasswordModal'
import {Consumer} from '../ContextProvider'

const { Content } = Layout;
const { Column } = Table;
const Search = Input.Search;


export class Dashboard extends Component {

    componentDidMount () {
        this.props.listenData()
    }

    handleSearch = (e) => {
       var data = e.target.value
        let {passwords, setFilterSearch} = this.props
        var keyword = new RegExp(data.toLowerCase())
        let filterPasswords = passwords.filter(e =>{
            return e.url.toLowerCase().match(keyword)
        })
        setFilterSearch(filterPasswords)
    }

    render() {
        const {passwords, filterPasswords} = this.props
        const {handleSearch} = this
        return (
            <Consumer>
                {(context) => (
                    <Content style={{ margin: '10px 16px' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <Row type="flex" justify="space-between">
                                <h1>Daftar Password</h1>
                                <Button  onClick={context.toggleAddPasswordModal} type="primary" shape="circle" icon="plus" />
                                <AddPassword> </AddPassword>
                            </Row>
                            <Search
                                placeholder="search url..."
                                onChange={handleSearch}
                                onSearch={handleSearch}
                                style={{ width: 200, margin: '20px 0px' }}
                            />
                            { passwords && 
                                <Table dataSource={filterPasswords}>
                                    <Column
                                        title="Logo"
                                        dataIndex="image"
                                        key="image"
                                        render={image => (
                                           <img style={{maxWidth: '50px'}} src={image} />
                                        )}
                                    />
                                    <Column
                                        title="Url"
                                        dataIndex="url"
                                        key="url"
                                    />
                                    <Column
                                        title="Username / email"
                                        dataIndex="username"
                                        key="username"
                                    />
                                    <Column
                                        title="Password"
                                        dataIndex="password"
                                        key="password"
                                    />
                                    <Column
                                        title="Created At"
                                        dataIndex="createdAt"
                                        key="createdAt"
                                        render={createdAt => (
                                            moment.unix(createdAt.seconds || 0).format("MM/DD/YYYY")
                                        )}
                                    />
                                    <Column
                                        title="Updated At"
                                        dataIndex="updatedAt"
                                        key="updatedAt"
                                        key="updatedAt"
                                        render={updatedAt => (
                                            moment.unix(updatedAt.seconds || 0).format("MM/DD/YYYY")
                                        )}
                                    />
                                    <Column
                                        title="Action"
                                        key="action"
                                        render={key => (
                                            <span>
                                            <a  onClick={context.toggleEditPasswordModal}>Edit</a>
                                            <EditPassword dataPassword={key}></EditPassword>
                                            <Divider type="vertical" />
                                            <a onClick={deletePassword(key)}>Delete</a>
                                            </span>
                                        )}
                                    />
                                </Table>
                            } 
                        </div>
                    </Content>
                )}
            </Consumer>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
                                            listenData,
                                            deletePassword,
                                            setFilterSearch
                                        }, dispatch)
const mapStateToProps = (state) => ({
    passwords: state.password.passwords,
    filterPasswords: state.password.filterPasswords
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
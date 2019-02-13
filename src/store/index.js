import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

//reducers
import password from './reducers/password'
import auth from './reducers/auth'

const RootReducers = combineReducers({password, auth})

const store =   createStore(RootReducers, {}, 
                    composeWithDevTools(applyMiddleware(thunk))
                );

export default store

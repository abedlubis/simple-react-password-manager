import {fbprovider, googleprovider, fbase} from '../../../script/firebase'
import { history } from '../../../App';

export function handleSignUp (email, password) {
    return async dispatch => {
        try{
            const result = await fbase.auth().createUserWithEmailAndPassword(email, password)
            localStorage.setItem('access_token', result.user.uid)
            dispatch({
                type: 'HANDLE_LOGIN',
                payload: true
            }) 
            history.push("/")
        }
        catch(error) {
            var errorMessage = error.message;
        }
    }
}
export function handleLoginManual (email, password) {
    return async dispatch => {
        try {
            const result = await  fbase.auth().signInWithEmailAndPassword(email, password)
            localStorage.setItem('access_token', result.user.uid)
            dispatch({
                type: 'HANDLE_LOGIN',
                payload: true
            })
            history.push("/")

        } catch (error) {
            var errorMessage = error.message;
        }
    }
}

export function handleLoginFacebook () {
    return async dispatch => {
        try {
            const result = await fbase.auth().signInWithPopup(fbprovider)
            var token = result.user.uid;
            localStorage.setItem('access_token', token)
            dispatch({
                type: 'HANDLE_LOGIN',
                payload: true
            })
            history.push("/")
        }
        catch(error){
        }
    }
}

export function handleLoginGoogle () {
    return async dispatch => {
        try {
            const result = await fbase.auth().signInWithPopup(googleprovider)
            var user = result.user;
            localStorage.setItem('access_token', user.uid)
            dispatch({
                type: 'HANDLE_LOGIN',
                payload: true
            })
            history.push("/")
        }
        catch(error){

        }
    }
}
export function handleLogout () {
    return async dispatch =>{
        localStorage.removeItem('access_token')
        await fbase.auth().signOut()
        dispatch({
            type: 'HANDLE_LOGIN',
            payload: false
        })
    }
}

export function checkLogin () {
    return dispatch => {
        if(localStorage.getItem('access_token')){
            dispatch({
                type : 'HANDLE_CHECK_LOGIN',
                payload: true
            })
        }else{
            dispatch({
                type : 'HANDLE_CHECK_LOGIN',
                payload: false
            })
        }
    }
}
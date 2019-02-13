const defaultState = {
    isLogin: false,
    showModal: false
}

export default function(state=defaultState, action) {
    const {type, payload} = action
    switch (type) {
        case 'HANDLE_LOGIN' :
            return ({
                ...state,
                isLogin: payload
            })
        case 'HANDLE_CHECK_LOGIN' :
            return ({
                ...state,
                isLogin: payload
            })
        case 'HANDLE_MODAL' :
            return ({
                ...state,
                showModal: payload
            })
        default:
            return state
    }
}
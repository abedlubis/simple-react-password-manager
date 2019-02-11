const defaultState = {
    passwords: [],
    filterPasswords: []
}

export default function(state=defaultState, action) {
    const {type, payload} = action
    switch (type) {
        case 'ADD_PASSWORD_SUCCESS':
            return ({
                ...state
            })
        case 'GET_DATA_SUCCESS':
            return ({
                ...state,
                passwords: payload,
                filterPasswords: payload
            })
        case 'SET_NEW_PASSWORDS':
            return ({
                ...state,
                filterPasswords: payload
            })
        default:
            return state
    }
    
}